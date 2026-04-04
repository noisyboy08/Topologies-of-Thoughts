"""
ASGI entry for Vercel (FastAPI service) and optional `uvicorn main:app` from `backend/`.
Application package lives in `app/`.
"""
from app.main import app

__all__ = ["app"]
