from pydantic_settings import BaseSettings
from typing import List


class Settings(BaseSettings):
    # Anthropic
    anthropic_api_key: str
    map_notes_claude_model: str = "claude-sonnet-4-20250514"

    # Voyage AI embeddings (optional; TF-IDF fallback if unset)
    voyage_api_key: str | None = None
    voyage_embedding_model: str = "voyage-3"

    # Supabase
    supabase_url: str
    supabase_anon_key: str
    supabase_service_role_key: str

    # App
    app_env: str = "development"
    cors_origins: List[str] = ["http://localhost:5173"]
    cors_origin_regex: str = r"https://.*\.vercel\.app"

    # Lead notifications (optional; row is always written to Supabase when configured)
    resend_api_key: str | None = None
    resend_from_email: str | None = None
    notify_email: str | None = None
    request_log_sampling: float = 1.0
    job_max_retries: int = 5
    job_base_backoff_seconds: int = 10

    # Limits
    max_nodes_free: int = 30
    max_nodes_pro: int = 500
    max_pdf_size_mb: int = 10
    ai_rate_limit_per_minute: int = 20
    ai_prompt_max_chars: int = 8000

    class Config:
        env_file = ".env"


settings = Settings()

