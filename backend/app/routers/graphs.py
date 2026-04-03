from __future__ import annotations

import hashlib
import json
from typing import Any
from uuid import uuid4

from fastapi import APIRouter, Depends, Header, HTTPException, Request, status
from pydantic import BaseModel, Field

from ..auth import get_project_context
from ..database import get_supabase
from ..observability import get_correlation_id

router = APIRouter(prefix="/graphs", tags=["graphs"])


class GraphPayload(BaseModel):
    nodes: list[dict[str, Any]] = Field(default_factory=list)
    edges: list[dict[str, Any]] = Field(default_factory=list)


class GraphCreateIn(BaseModel):
    title: str = Field(..., min_length=1, max_length=200)
    data: GraphPayload = Field(default_factory=GraphPayload)


class GraphSaveIn(BaseModel):
    title: str | None = Field(default=None, max_length=200)
    data: GraphPayload
    expected_version: int = Field(..., ge=0)


class EmbeddingNeighborQuery(BaseModel):
    embedding: list[float] = Field(..., min_length=1024, max_length=1024)
    match_count: int = Field(default=20, ge=1, le=500)
    max_distance: float = Field(default=2.0, ge=0.0, le=2.0)


def _stable_hash(payload: dict[str, Any]) -> str:
    data = json.dumps(payload, sort_keys=True, separators=(",", ":")).encode("utf-8")
    return hashlib.sha256(data).hexdigest()


def _ensure_graph(sb, graph_id: str, project_id: str) -> None:
    res = (
        sb.table("graphs")
        .select("id")
        .eq("id", graph_id)
        .eq("project_id", project_id)
        .limit(1)
        .execute()
    )
    if not getattr(res, "data", None):
        raise HTTPException(status_code=404, detail="Graph not found")


@router.get("")
async def list_graphs(
    request: Request,
    limit: int = 20,
    offset: int = 0,
    ctx: dict[str, str] = Depends(get_project_context),
) -> dict[str, Any]:
    limit = max(1, min(100, limit))
    offset = max(0, offset)
    sb = get_supabase()
    q = (
        sb.table("graphs")
        .select("id,title,version,updated_at", count="exact")
        .eq("project_id", ctx["project_id"])
        .order("updated_at", desc=True)
        .range(offset, offset + limit - 1)
    )
    res = q.execute()
    return {
        "items": getattr(res, "data", []),
        "count": getattr(res, "count", None),
        "limit": limit,
        "offset": offset,
        "correlation_id": get_correlation_id(request),
    }


@router.post("", status_code=201)
async def create_graph(
    request: Request,
    body: GraphCreateIn,
    ctx: dict[str, str] = Depends(get_project_context),
) -> dict[str, Any]:
    sb = get_supabase()
    graph_id = str(uuid4())
    row = {
        "id": graph_id,
        "project_id": ctx["project_id"],
        "owner_user_id": ctx["user_id"],
        "title": body.title.strip(),
        "nodes": body.data.nodes,
        "edges": body.data.edges,
        "version": 0,
        "last_write_hash": _stable_hash(body.model_dump()),
    }
    sb.table("graphs").insert(row).execute()
    return {"id": graph_id, "version": 0, "correlation_id": get_correlation_id(request)}


@router.get("/{graph_id}")
async def get_graph(
    request: Request,
    graph_id: str,
    ctx: dict[str, str] = Depends(get_project_context),
) -> dict[str, Any]:
    sb = get_supabase()
    res = (
        sb.table("graphs")
        .select("id,title,version,nodes,edges,updated_at")
        .eq("id", graph_id)
        .eq("project_id", ctx["project_id"])
        .limit(1)
        .execute()
    )
    if not getattr(res, "data", None):
        raise HTTPException(status_code=404, detail="Graph not found")
    item = res.data[0]
    item["correlation_id"] = get_correlation_id(request)
    return item


@router.get("/{graph_id}/neighbors/from-node/{node_id}")
async def neighbors_from_node(
    request: Request,
    graph_id: str,
    node_id: str,
    limit: int = 20,
    ctx: dict[str, str] = Depends(get_project_context),
) -> dict[str, Any]:
    """SQL-side cosine KNN from an existing node's embedding (pgvector RPC)."""
    sb = get_supabase()
    _ensure_graph(sb, graph_id, ctx["project_id"])
    limit = max(1, min(500, limit))
    try:
        res = sb.rpc(
            "rpc_neighbors_for_node",
            {"p_graph_id": graph_id, "p_node_id": node_id, "p_match_count": limit},
        ).execute()
    except Exception as e:
        raise HTTPException(status_code=502, detail=f"RPC failed: {e!s}") from e
    rows = getattr(res, "data", None)
    if rows is None:
        rows = []
    return {
        "graph_id": graph_id,
        "source_node_id": node_id,
        "neighbors": rows,
        "correlation_id": get_correlation_id(request),
    }


@router.post("/{graph_id}/neighbors/query")
async def neighbors_from_embedding(
    request: Request,
    graph_id: str,
    body: EmbeddingNeighborQuery,
    ctx: dict[str, str] = Depends(get_project_context),
) -> dict[str, Any]:
    """SQL-side cosine KNN for an arbitrary 1024-dim query vector (e.g. voyage-3)."""
    sb = get_supabase()
    _ensure_graph(sb, graph_id, ctx["project_id"])
    try:
        res = sb.rpc(
            "rpc_match_graph_neighbors",
            {
                "p_graph_id": graph_id,
                "p_query": body.embedding,
                "p_match_count": body.match_count,
                "p_max_distance": body.max_distance,
            },
        ).execute()
    except Exception as e:
        raise HTTPException(status_code=502, detail=f"RPC failed: {e!s}") from e
    rows = getattr(res, "data", None)
    if rows is None:
        rows = []
    return {
        "graph_id": graph_id,
        "neighbors": rows,
        "correlation_id": get_correlation_id(request),
    }


@router.put("/{graph_id}")
async def save_graph(
    request: Request,
    graph_id: str,
    body: GraphSaveIn,
    idempotency_key: str | None = Header(default=None, alias="Idempotency-Key"),
    ctx: dict[str, str] = Depends(get_project_context),
) -> dict[str, Any]:
    if not idempotency_key:
        raise HTTPException(status_code=400, detail="Missing Idempotency-Key header")
    if len(idempotency_key) > 200:
        raise HTTPException(status_code=400, detail="Invalid Idempotency-Key")

    sb = get_supabase()
    idem = (
        sb.table("graph_idempotency")
        .select("response_json")
        .eq("project_id", ctx["project_id"])
        .eq("graph_id", graph_id)
        .eq("idempotency_key", idempotency_key)
        .limit(1)
        .execute()
    )
    if getattr(idem, "data", None):
        cached = idem.data[0].get("response_json") or {}
        cached["idempotent_replay"] = True
        cached["correlation_id"] = get_correlation_id(request)
        return cached

    # Conflict policy: optimistic concurrency by expected_version.
    current = (
        sb.table("graphs")
        .select("id,version")
        .eq("id", graph_id)
        .eq("project_id", ctx["project_id"])
        .limit(1)
        .execute()
    )
    if not getattr(current, "data", None):
        raise HTTPException(status_code=404, detail="Graph not found")
    current_version = int(current.data[0].get("version", 0))
    if current_version != body.expected_version:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail={"code": "version_conflict", "current_version": current_version},
        )

    new_version = current_version + 1
    title = body.title.strip() if body.title else None
    if title is None:
        existing = (
            sb.table("graphs")
            .select("title")
            .eq("id", graph_id)
            .eq("project_id", ctx["project_id"])
            .limit(1)
            .execute()
        )
        title = existing.data[0].get("title") if getattr(existing, "data", None) else "Untitled"
    update_row = {
        "title": title,
        "nodes": body.data.nodes,
        "edges": body.data.edges,
        "version": new_version,
        "last_write_hash": _stable_hash(body.model_dump()),
    }
    sb.table("graphs").update(update_row).eq("id", graph_id).eq("project_id", ctx["project_id"]).execute()

    response = {"id": graph_id, "version": new_version}
    sb.table("graph_idempotency").insert(
        {
            "project_id": ctx["project_id"],
            "graph_id": graph_id,
            "idempotency_key": idempotency_key,
            "response_json": response,
        }
    ).execute()
    response["correlation_id"] = get_correlation_id(request)
    return response
