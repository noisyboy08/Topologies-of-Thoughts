import logging
import time
from collections import defaultdict, deque
from uuid import uuid4

from anthropic import Anthropic
from fastapi import APIRouter, Depends, HTTPException, Request
from pydantic import BaseModel, Field

from ..auth import get_project_context
from ..config import settings
from ..database import get_supabase
from ..observability import get_correlation_id

router = APIRouter(prefix="/ai", tags=["ai"])
logger = logging.getLogger("tot.ai")

# Basic in-memory per-IP rate limiting.
# For horizontal scaling, replace with Redis/shared limiter.
_rate_bucket: dict[str, deque[float]] = defaultdict(deque)


class MessageRequest(BaseModel):
    prompt: str = Field(..., min_length=10, max_length=8000)
    max_tokens: int = Field(default=800, ge=128, le=2000)
    model: str = Field(default="claude-sonnet-4-20250514", min_length=3, max_length=120)


class MessageResponse(BaseModel):
    text: str


class MapNotesRequest(BaseModel):
    text: str = Field(..., min_length=20, max_length=48000)
    graph_id: str | None = None
    options: dict = Field(default_factory=dict)


def _enforce_rate_limit(client_ip: str) -> None:
    now = time.time()
    window = 60.0
    bucket = _rate_bucket[client_ip]
    while bucket and now - bucket[0] > window:
        bucket.popleft()
    if len(bucket) >= settings.ai_rate_limit_per_minute:
        raise HTTPException(status_code=429, detail="Rate limit exceeded. Please retry in a minute.")
    bucket.append(now)


@router.post("/message", response_model=MessageResponse)
async def message(payload: MessageRequest, request: Request) -> MessageResponse:
    client_ip = request.client.host if request.client else "unknown"
    _enforce_rate_limit(client_ip)

    if len(payload.prompt) > settings.ai_prompt_max_chars:
        raise HTTPException(
            status_code=400,
            detail=f"Prompt too long. Max {settings.ai_prompt_max_chars} characters.",
        )

    try:
        client = Anthropic(api_key=settings.anthropic_api_key)
        resp = client.messages.create(
            model=payload.model,
            max_tokens=payload.max_tokens,
            messages=[{"role": "user", "content": payload.prompt}],
        )
        text = "".join(
            block.text for block in resp.content if getattr(block, "type", None) == "text"
        ).strip()
        if not text:
            raise HTTPException(status_code=502, detail="AI provider returned empty response.")
        return MessageResponse(text=text)
    except HTTPException:
        raise
    except Exception:
        logger.exception("AI provider failure for %s", client_ip)
        raise HTTPException(status_code=502, detail="AI provider request failed.")


@router.post("/map-notes")
async def map_notes(
    request: Request,
    payload: MapNotesRequest,
    ctx: dict[str, str] = Depends(get_project_context),
) -> dict:
    """
    Enqueue long-running notes->graph pipeline as async job.
    Worker will process and write jobs.result when done.
    """
    sb = get_supabase()
    job_id = str(uuid4())
    sb.table("jobs").insert(
        {
            "id": job_id,
            "project_id": ctx["project_id"],
            "owner_user_id": ctx["user_id"],
            "type": "map_notes",
            "payload": {
                "text": payload.text,
                "graph_id": payload.graph_id,
                "options": payload.options,
            },
            "status": "queued",
            "attempt": 0,
        }
    ).execute()
    return {
        "job_id": job_id,
        "status": "queued",
        "poll_url": f"/jobs/{job_id}",
        "correlation_id": get_correlation_id(request),
    }


@router.get("/insight/{graph_id}")
async def get_insight(
    graph_id: str,
) -> dict:
    # TODO: fetch nodes for graph_id and call Claude for narrative.
    return {"status": "not_implemented", "graph_id": graph_id}

