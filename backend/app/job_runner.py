from __future__ import annotations

import logging
import time
from datetime import datetime, timedelta, timezone
from typing import Any

from .config import settings
from .database import get_supabase_client
from .pipeline.map_notes_full import run_map_notes_pipeline

logger = logging.getLogger("tot.worker")


def _next_retry_at(attempt: int) -> str:
    delay = settings.job_base_backoff_seconds * (2 ** max(0, attempt - 1))
    dt = datetime.now(timezone.utc) + timedelta(seconds=delay)
    return dt.isoformat()


def _claim_next_job() -> dict[str, Any] | None:
    sb = get_supabase_client()
    now = datetime.now(timezone.utc).isoformat()

    queued = (
        sb.table("jobs")
        .select("id,project_id,owner_user_id,type,payload,attempt,status")
        .eq("status", "queued")
        .order("created_at")
        .limit(1)
        .execute()
    )
    candidate = queued.data[0] if getattr(queued, "data", None) else None
    if not candidate:
        retry = (
            sb.table("jobs")
            .select("id,project_id,owner_user_id,type,payload,attempt,status,next_retry_at")
            .eq("status", "retry_scheduled")
            .lte("next_retry_at", now)
            .order("next_retry_at")
            .limit(1)
            .execute()
        )
        candidate = retry.data[0] if getattr(retry, "data", None) else None
    if not candidate:
        return None

    # Single-worker claim; status guard avoids clobber when already taken.
    updated = (
        sb.table("jobs")
        .update({"status": "running", "error": None})
        .eq("id", candidate["id"])
        .eq("status", candidate["status"])
        .execute()
    )
    if not getattr(updated, "data", None):
        return None
    return candidate


def _complete_job(job_id: str, result: dict[str, Any]) -> None:
    sb = get_supabase_client()
    sb.table("jobs").update({"status": "succeeded", "result": result, "error": None, "next_retry_at": None}).eq("id", job_id).execute()


def _fail_job(job: dict[str, Any], error_message: str) -> None:
    sb = get_supabase_client()
    attempt = int(job.get("attempt", 0)) + 1
    if attempt >= settings.job_max_retries:
        sb.table("jobs").update({"status": "dead_letter", "attempt": attempt, "error": error_message}).eq("id", job["id"]).execute()
        return
    sb.table("jobs").update(
        {
            "status": "retry_scheduled",
            "attempt": attempt,
            "next_retry_at": _next_retry_at(attempt),
            "error": error_message,
        }
    ).eq("id", job["id"]).execute()


def process_one_job() -> bool:
    job = _claim_next_job()
    if not job:
        return False
    try:
        job_type = str(job.get("type") or "")
        payload = job.get("payload") or {}
        if job_type == "map_notes":
            text = str(payload.get("text") or "").strip()
            graph_id = payload.get("graph_id")
            if isinstance(graph_id, str) and not graph_id.strip():
                graph_id = None
            elif graph_id is not None:
                graph_id = str(graph_id)
            options = payload.get("options") if isinstance(payload.get("options"), dict) else {}
            result = run_map_notes_pipeline(
                text=text,
                project_id=str(job["project_id"]),
                graph_id=graph_id,
                options=options,
            )
        else:
            raise ValueError(f"Unsupported job type: {job_type}")
        _complete_job(job["id"], result)
        logger.info("Processed job %s type=%s", job["id"], job_type)
    except Exception as e:
        logger.exception("Job %s failed", job.get("id"))
        _fail_job(job, str(e))
    return True


def run_worker_forever(poll_seconds: float = 1.0) -> None:
    logger.info("Worker started (poll=%ss)", poll_seconds)
    while True:
        worked = process_one_job()
        if not worked:
            time.sleep(poll_seconds)
