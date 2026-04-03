"""
Full map-notes pipeline: Claude extraction → embeddings (Voyage or TF-IDF fallback)
→ cosine-similarity edges → KMeans clusters → optional pgvector persistence → graphs row update.
"""
from __future__ import annotations

import hashlib
import json
import logging
import re
from typing import Any

import httpx
import numpy as np
from anthropic import Anthropic
from sklearn.cluster import KMeans
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.preprocessing import normalize

from ..config import settings
from ..database import get_supabase_client

logger = logging.getLogger("tot.pipeline.map_notes")

MAX_INPUT_CHARS = 48_000
VOYAGE_DIM = 1024


def _stable_hash_graph(nodes: list[dict], edges: list[dict]) -> str:
    payload = {"nodes": nodes, "edges": edges}
    raw = json.dumps(payload, sort_keys=True, separators=(",", ":")).encode("utf-8")
    return hashlib.sha256(raw).hexdigest()


def _extract_json_object(text: str) -> dict[str, Any]:
    text = text.strip()
    try:
        return json.loads(text)
    except json.JSONDecodeError:
        pass
    start = text.find("{")
    end = text.rfind("}")
    if start >= 0 and end > start:
        try:
            return json.loads(text[start : end + 1])
        except json.JSONDecodeError:
            pass
    raise ValueError("Could not parse JSON from model output")


def extract_nodes_claude(notes: str) -> list[dict[str, Any]]:
    client = Anthropic(api_key=settings.anthropic_api_key)
    prompt = f"""You are a knowledge-graph extractor. From the notes below, propose between 3 and 24 nodes.
Each node: short label (max 8 words), snippet (evidence quote or paraphrase, max 400 chars).
Return ONLY valid JSON with this shape (no markdown):
{{"nodes":[{{"id":"n0","label":"...","snippet":"..."}},...]}}
Use ids n0, n1, n2, ... in order. Do not include edges.

NOTES:
---
{notes[:MAX_INPUT_CHARS]}
---
"""
    resp = client.messages.create(
        model=settings.map_notes_claude_model,
        max_tokens=4096,
        messages=[{"role": "user", "content": prompt}],
    )
    raw = "".join(
        block.text for block in resp.content if getattr(block, "type", None) == "text"
    ).strip()
    data = _extract_json_object(raw)
    nodes = data.get("nodes")
    if not isinstance(nodes, list) or len(nodes) < 1:
        raise ValueError("Claude returned no nodes")
    out: list[dict[str, Any]] = []
    for i, n in enumerate(nodes[: settings.max_nodes_pro]):
        if not isinstance(n, dict):
            continue
        nid = str(n.get("id") or f"n{i}")
        label = str(n.get("label") or f"Node {i}")[:200]
        snippet = str(n.get("snippet") or label)[:500]
        out.append({"id": nid, "label": label, "snippet": snippet})
    if len(out) < 2:
        raise ValueError("Too few nodes after extraction")
    return out


def _fallback_sentence_nodes(text: str) -> list[dict[str, Any]]:
    raw = [s.strip() for s in re.split(r"[.!?\n]+", text) if s.strip()]
    out: list[dict[str, Any]] = []
    for i, s in enumerate(raw[:30]):
        out.append(
            {
                "id": f"n{i}",
                "label": " ".join(s.split()[:8])[:120],
                "snippet": s[:400],
            }
        )
    return out if len(out) >= 2 else [{"id": "n0", "label": "Note", "snippet": text[:400]}, {"id": "n1", "label": "Continuation", "snippet": text[400:800] if len(text) > 400 else text}]


def embed_voyage(texts: list[str]) -> tuple[np.ndarray, str]:
    key = settings.voyage_api_key
    if not key:
        raise RuntimeError("no_voyage_key")
    model = settings.voyage_embedding_model
    resp = httpx.post(
        "https://api.voyageai.com/v1/embeddings",
        headers={"Authorization": f"Bearer {key}", "Content-Type": "application/json"},
        json={"input": texts, "model": model},
        timeout=120.0,
    )
    resp.raise_for_status()
    data = resp.json()
    items = data.get("data") or []
    items_sorted = sorted(items, key=lambda x: int(x.get("index", 0)))
    vectors = [np.array(it["embedding"], dtype=np.float64) for it in items_sorted]
    if len(vectors) != len(texts):
        raise ValueError("Voyage returned wrong number of embeddings")
    mat = np.vstack(vectors)
    if mat.shape[1] != VOYAGE_DIM:
        logger.warning("Unexpected embedding dim %s (expected %s)", mat.shape[1], VOYAGE_DIM)
    return mat, model


def embed_tfidf(texts: list[str]) -> tuple[np.ndarray, str]:
    vec = TfidfVectorizer(max_features=256, min_df=1, stop_words="english")
    X = vec.fit_transform(texts)
    Xd = X.toarray().astype(np.float64)
    Xn = normalize(Xd, norm="l2", axis=1)
    return Xn, "tfidf-sklearn"


def build_edges_topk(X: np.ndarray, top_k: int = 4, min_sim: float = 0.12) -> list[dict[str, Any]]:
    n = X.shape[0]
    if n < 2:
        return []
    sim = cosine_similarity(X)
    edges: list[dict[str, Any]] = []
    seen: set[tuple[str, str]] = set()
    for i in range(n):
        row = sim[i].copy()
        row[i] = -1.0
        # top-k neighbors
        idx = np.argsort(-row)[:top_k]
        for j in idx:
            if row[j] < min_sim:
                continue
            a, b = (i, int(j)) if i < int(j) else (int(j), i)
            key = (f"n{a}", f"n{b}")
            if key in seen:
                continue
            seen.add(key)
            edges.append(
                {
                    "id": f"e{a}-{b}",
                    "sourceNodeId": f"n{a}",
                    "targetNodeId": f"n{b}",
                    "weight": round(float(sim[i, int(j)]), 4),
                }
            )
    return edges


def run_kmeans(X: np.ndarray) -> tuple[list[int], np.ndarray]:
    n = X.shape[0]
    if n < 2:
        return [0] * n, np.ones(n, dtype=np.float64) * 0.5
    k = min(8, max(2, n // 3), n)
    km = KMeans(n_clusters=k, n_init=10, random_state=42)
    labels = km.fit_predict(X)
    centers = km.cluster_centers_
    # centrality: cosine sim to assigned centroid
    central: list[float] = []
    for i in range(n):
        c = centers[labels[i]]
        xi = X[i]
        denom = (np.linalg.norm(xi) * np.linalg.norm(c) + 1e-9)
        sim = float(np.dot(xi, c) / denom)
        central.append(round(max(0.0, min(1.0, (sim + 1) / 2)), 3))
    return labels.tolist(), np.array(central, dtype=np.float64)


def _degree_counts(node_ids: list[str], edges: list[dict[str, Any]]) -> dict[str, int]:
    deg = {nid: 0 for nid in node_ids}
    for e in edges:
        s = e.get("sourceNodeId")
        t = e.get("targetNodeId")
        if s in deg:
            deg[s] += 1
        if t in deg:
            deg[t] += 1
    return deg


def upsert_embeddings_db(
    graph_id: str,
    node_ids: list[str],
    X: np.ndarray,
    model_name: str,
) -> None:
    if "voyage" not in model_name.lower() and model_name != settings.voyage_embedding_model:
        return
    if X.shape[1] != VOYAGE_DIM:
        return
    sb = get_supabase_client()
    try:
        sb.table("graph_node_embeddings").delete().eq("graph_id", graph_id).execute()
    except Exception:
        logger.debug("graph_node_embeddings delete skipped", exc_info=True)
        return
    rows = []
    for i, nid in enumerate(node_ids):
        vec = X[i].astype(float).tolist()
        rows.append(
            {
                "graph_id": graph_id,
                "node_id": nid,
                "model": model_name,
                "embedding": vec,
            }
        )
    try:
        sb.table("graph_node_embeddings").insert(rows).execute()
    except Exception:
        logger.warning("Could not persist vectors to graph_node_embeddings", exc_info=True)


def persist_graph_merge(project_id: str, graph_id: str, nodes: list[dict], edges: list[dict]) -> dict[str, Any]:
    sb = get_supabase_client()
    cur = (
        sb.table("graphs")
        .select("id,version,title")
        .eq("id", graph_id)
        .eq("project_id", project_id)
        .limit(1)
        .execute()
    )
    if not getattr(cur, "data", None):
        return {"persisted": False, "reason": "graph_not_found", "graph_id": graph_id}
    version = int(cur.data[0].get("version", 0)) + 1
    title = cur.data[0].get("title") or "Untitled"
    update_row = {
        "nodes": nodes,
        "edges": edges,
        "version": version,
        "title": title,
        "last_write_hash": _stable_hash_graph(nodes, edges),
    }
    sb.table("graphs").update(update_row).eq("id", graph_id).eq("project_id", project_id).execute()
    return {"persisted": True, "graph_id": graph_id, "version": version}


def run_map_notes_pipeline(
    text: str,
    project_id: str,
    graph_id: str | None,
    options: dict[str, Any] | None = None,
) -> dict[str, Any]:
    opts = options or {}
    text = (text or "").strip()
    if len(text) < 20:
        raise ValueError("Text too short")

    # 1) Claude extraction (fallback to sentences)
    try:
        raw_nodes = extract_nodes_claude(text)
    except Exception:
        logger.exception("Claude extraction failed; using sentence fallback")
        raw_nodes = _fallback_sentence_nodes(text)

    # Normalize ids to n0..n{k-1} for stable edge references
    nodes_base: list[dict[str, Any]] = []
    for i, n in enumerate(raw_nodes):
        nodes_base.append(
            {
                "id": f"n{i}",
                "label": n.get("label", f"Node {i}")[:200],
                "snippet": str(n.get("snippet", ""))[:500],
            }
        )

    texts = [f"{n['label']}. {n['snippet']}" for n in nodes_base]

    # 2) Embeddings
    embed_model = "unknown"
    try:
        X, embed_model = embed_voyage(texts)
    except Exception as e:
        logger.info("Voyage embeddings unavailable (%s); using TF-IDF", e)
        X, embed_model = embed_tfidf(texts)

    X = normalize(np.asarray(X, dtype=np.float64), norm="l2", axis=1)

    # 3) KMeans + central similarity proxy
    labels, central = run_kmeans(X)

    # 4) Edges
    top_k = int(opts.get("edge_top_k", 4))
    min_sim = float(opts.get("edge_min_sim", 0.12))
    edges = build_edges_topk(X, top_k=top_k, min_sim=min_sim)
    dc = _degree_counts([n["id"] for n in nodes_base], edges)
    for i, n in enumerate(nodes_base):
        nodes_base[i] = {
            "id": n["id"],
            "label": n["label"],
            "snippet": n["snippet"],
            "clusterIndex": int(labels[i]),
            "centralSimilarity": float(central[i]),
            "connectionsCount": int(dc.get(n["id"], 0)),
        }

    meta: dict[str, Any] = {
        "pipeline": "claude-voyage-kmeans-v1" if embed_model.startswith("voyage") or "voyage" in embed_model else "claude-tfidf-kmeans-v1",
        "embedding_model": embed_model,
        "node_count": len(nodes_base),
        "edge_count": len(edges),
    }

    # 5) Optional pgvector rows + graph persist
    persisted: dict[str, Any] = {"persisted": False}
    if graph_id:
        upsert_embeddings_db(graph_id, [n["id"] for n in nodes_base], X, embed_model)
        persisted = persist_graph_merge(project_id, graph_id, nodes_base, edges)
        meta["persist"] = persisted

    return {
        "nodes": nodes_base,
        "edges": edges,
        "meta": meta,
    }
