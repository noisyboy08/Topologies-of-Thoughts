import logging
from typing import Any

import httpx
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr, Field

from ..config import settings
from ..database import get_supabase_client

logger = logging.getLogger("tot.api")

router = APIRouter(prefix="/leads", tags=["leads"])


class ExpertLeadIn(BaseModel):
    name: str = Field(..., min_length=1, max_length=200)
    email: EmailStr
    company: str | None = Field(None, max_length=200)
    message: str = Field(..., min_length=1, max_length=8000)
    # Honeypot: must stay empty; bots often fill hidden fields.
    website: str | None = Field(default=None, max_length=500)


def _send_resend_notification(row: dict[str, Any]) -> None:
    if not settings.resend_api_key or not settings.notify_email:
        return
    from_addr = settings.resend_from_email or "onboarding@resend.dev"
    subject = f"[Topologies] Expert lead: {row.get('name', '')}"
    text = (
        f"Name: {row.get('name')}\n"
        f"Email: {row.get('email')}\n"
        f"Company: {row.get('company') or '—'}\n\n"
        f"{row.get('message')}\n"
    )
    try:
        httpx.post(
            "https://api.resend.com/emails",
            headers={
                "Authorization": f"Bearer {settings.resend_api_key}",
                "Content-Type": "application/json",
            },
            json={
                "from": from_addr,
                "to": [settings.notify_email],
                "subject": subject,
                "text": text,
            },
            timeout=15.0,
        ).raise_for_status()
    except Exception:
        logger.exception("Resend notification failed (lead still stored)")


@router.post("/expert")
async def submit_expert_lead(body: ExpertLeadIn) -> dict[str, bool]:
    if body.website:
        # Silent success for bots
        return {"ok": True}

    row = {
        "name": body.name.strip(),
        "email": str(body.email).strip().lower(),
        "company": (body.company or "").strip() or None,
        "message": body.message.strip(),
        "source": "talk_to_expert",
    }

    try:
        sb = get_supabase_client()
        sb.table("expert_leads").insert(row).execute()
    except Exception as e:
        logger.exception("expert_leads insert failed: %s", e)
        raise HTTPException(status_code=500, detail="Could not save submission. Try again later.") from e

    try:
        _send_resend_notification(row)
    except Exception:
        pass

    return {"ok": True}
