from fastapi import Depends, Header, HTTPException, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from typing import Any, Dict
import httpx

from .config import settings
from .database import get_supabase

bearer_scheme = HTTPBearer(auto_error=False)


async def get_current_user(
    creds: HTTPAuthorizationCredentials | None = Depends(bearer_scheme),
) -> Dict[str, Any]:
    """
    Verify Supabase JWT and return its claims.
    In production you may want to cache JWKS; here we call Supabase auth endpoint directly.
    """
    if creds is None:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Missing Authorization header")

    token = creds.credentials
    # Minimal verification – Supabase exposes /auth/v1/user for current user
    async with httpx.AsyncClient() as client:
        resp = await client.get(
            f"{settings.supabase_url}/auth/v1/user",
            headers={
                "Authorization": f"Bearer {token}",
                "apikey": settings.supabase_anon_key,
            },
        )
    if resp.status_code != 200:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid or expired token")
    return resp.json()


async def get_project_context(
    x_project_id: str | None = Header(default=None),
    user: Dict[str, Any] = Depends(get_current_user),
) -> Dict[str, str]:
    """
    Ensure caller belongs to the requested project (tenant boundary).
    For solo mode, client still passes X-Project-Id for explicit ownership.
    """
    if not x_project_id:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Missing X-Project-Id header")
    user_id = user.get("id")
    if not isinstance(user_id, str) or not user_id:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid user claims")

    try:
        sb = get_supabase()
        membership = (
            sb.table("project_members")
            .select("project_id,user_id,role")
            .eq("project_id", x_project_id)
            .eq("user_id", user_id)
            .limit(1)
            .execute()
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail="Membership lookup failed") from e

    if not getattr(membership, "data", None):
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="No membership for project")
    role = membership.data[0].get("role") or "member"
    return {"project_id": x_project_id, "user_id": user_id, "role": role}

