from fastapi import APIRouter, Depends, UploadFile, File, HTTPException, BackgroundTasks

from ..auth import get_current_user
from ..config import settings
from ..database import get_supabase

router = APIRouter(prefix="/upload", tags=["upload"])


@router.post("/pdf/{graph_id}")
async def upload_pdf(
    graph_id: str,
    file: UploadFile = File(...),
    background_tasks: BackgroundTasks = BackgroundTasks(),
    user=Depends(get_current_user),
    supabase=Depends(get_supabase),
) -> dict:
    """
    Stub for PDF upload endpoint as specified.
    Validates content type and size, then would:
    - Upload to Supabase Storage
    - Extract text
    - Chunk + embed text in a background task
    """
    if file.content_type != "application/pdf":
        raise HTTPException(400, "File must be a PDF")
    content = await file.read()
    if len(content) > settings.max_pdf_size_mb * 1024 * 1024:
        raise HTTPException(400, f"PDF must be under {settings.max_pdf_size_mb}MB")

    # TODO: integrate with Supabase Storage and PDF processing pipeline.
    return {"status": "not_implemented", "graph_id": graph_id, "filename": file.filename}

