import logging
import random
import uuid
from typing import Any

from fastapi import Request

from .config import settings
from .database import get_supabase

CORRELATION_HEADER = "X-Correlation-Id"
logger = logging.getLogger("tot.obs")


def resolve_correlation_id(request: Request) -> str:
    incoming = request.headers.get(CORRELATION_HEADER) or request.headers.get(CORRELATION_HEADER.lower())
    if incoming and len(incoming) <= 128:
        return incoming
    return str(uuid.uuid4())


def get_correlation_id(request: Request) -> str:
    return str(getattr(request.state, "correlation_id", ""))


def maybe_log_request_event(payload: dict[str, Any]) -> None:
    if random.random() > max(0.0, min(1.0, settings.request_log_sampling)):
        return
    try:
        sb = get_supabase()
        sb.table("request_logs").insert(payload).execute()
    except Exception:
        logger.debug("request_logs insert skipped", exc_info=True)
