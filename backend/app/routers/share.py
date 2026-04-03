from fastapi import APIRouter, Depends

from ..database import get_supabase

router = APIRouter(prefix="/share", tags=["share"])


@router.get("/graph/{share_token}")
async def get_shared_graph(
    share_token: str,
    supabase=Depends(get_supabase),
) -> dict:
    """
    Public read-only endpoint for shared graphs.
    TODO: query Supabase for graph, nodes, edges by share_token.
    """
    return {"status": "not_implemented", "share_token": share_token}

