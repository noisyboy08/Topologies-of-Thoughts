from __future__ import annotations

from datetime import datetime, timedelta, timezone
from uuid import uuid4

from fastapi import APIRouter, Body, Depends, HTTPException, Request
from pydantic import BaseModel, Field

from ..auth import get_project_context
from ..config import settings
from ..database import get_supabase
from ..observability import get_correlation_id

router = APIRouter(prefix="/jobs", tags=["jobs"])


class JobCreateIn(BaseModel):
    type: str = Field(..., min_length=2, max_length=64)
    payload: dict = Field(default_factory=dict)


def _next_retry_at(attempt: int) -> str:
    delay = settings.job_base_backoff_seconds * (2 ** max(0, attempt - 1))
    dt = datetime.now(timezone.utc) + timedelta(seconds=delay)
    return dt.isoformat()


@router.post("", status_code=201)
async def create_job(
    request: Request,
    body: JobCreateIn,
    ctx: dict[str, str] = Depends(get_project_context),
) -> dict:
    sb = get_supabase()
    job_id = str(uuid4())
    sb.table("jobs").insert(
        {
            "id": job_id,
            "project_id": ctx["project_id"],
            "owner_user_id": ctx["user_id"],
            "type": body.type,
            "payload": body.payload,
            "status": "queued",
            "attempt": 0,
        }
    ).execute()
    return {"id": job_id, "status": "queued", "correlation_id": get_correlation_id(request)}


@router.get("/{job_id}")
async def get_job(
    request: Request,
    job_id: str,
    ctx: dict[str, str] = Depends(get_project_context),
) -> dict:
    sb = get_supabase()
    res = (
        sb.table("jobs")
        .select("id,type,status,attempt,next_retry_at,error,result,updated_at")
        .eq("id", job_id)
        .eq("project_id", ctx["project_id"])
        .limit(1)
        .execute()
    )
    if not getattr(res, "data", None):
        raise HTTPException(404, "Job not found")
    out = res.data[0]
    out["correlation_id"] = get_correlation_id(request)
    return out


@router.post("/{job_id}/fail")
async def mark_failed(
    request: Request,
    job_id: str,
    error: str = Body(default="Job failed"),
    ctx: dict[str, str] = Depends(get_project_context),
) -> dict:
    sb = get_supabase()
    q = (
        sb.table("jobs")
        .select("attempt,status")
        .eq("id", job_id)
        .eq("project_id", ctx["project_id"])
        .limit(1)
        .execute()
    )
    if not getattr(q, "data", None):
        raise HTTPException(404, "Job not found")
    attempt = int(q.data[0].get("attempt", 0)) + 1
    if attempt >= settings.job_max_retries:
        sb.table("jobs").update({"status": "dead_letter", "attempt": attempt, "error": error}).eq("id", job_id).execute()
        return {"id": job_id, "status": "dead_letter", "attempt": attempt, "correlation_id": get_correlation_id(request)}
    retry_at = _next_retry_at(attempt)
    sb.table("jobs").update(
        {"status": "retry_scheduled", "attempt": attempt, "next_retry_at": retry_at, "error": error}
    ).eq("id", job_id).execute()
    return {"id": job_id, "status": "retry_scheduled", "attempt": attempt, "next_retry_at": retry_at, "correlation_id": get_correlation_id(request)}
