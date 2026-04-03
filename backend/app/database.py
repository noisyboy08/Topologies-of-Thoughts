from supabase import create_client, Client
from functools import lru_cache

from .config import settings


@lru_cache(maxsize=1)
def get_supabase_client() -> Client:
    return create_client(settings.supabase_url, settings.supabase_service_role_key)


def get_supabase() -> Client:
    # FastAPI dependency wrapper
    return get_supabase_client()

