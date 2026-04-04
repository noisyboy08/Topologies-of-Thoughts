import logging
import os
import time

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from .config import settings
from .observability import CORRELATION_HEADER, maybe_log_request_event, resolve_correlation_id
from .routers import ai, upload, share, leads, graphs, jobs


logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s %(levelname)s [%(name)s] %(message)s",
)
logger = logging.getLogger("tot.api")

app = FastAPI(title="Topologies of Thoughts API", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
    allow_origin_regex=settings.cors_origin_regex,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.middleware("http")
async def log_requests(request: Request, call_next):
    correlation_id = resolve_correlation_id(request)
    request.state.correlation_id = correlation_id
    started = time.perf_counter()
    try:
        response = await call_next(request)
    except Exception:
        logger.exception("Unhandled error on %s %s cid=%s", request.method, request.url.path, correlation_id)
        response = JSONResponse(status_code=500, content={"error": "Internal server error"})
    elapsed_ms = round((time.perf_counter() - started) * 1000, 2)
    response.headers[CORRELATION_HEADER] = correlation_id
    logger.info("%s %s -> %s (%.2fms) cid=%s", request.method, request.url.path, response.status_code, elapsed_ms, correlation_id)
    maybe_log_request_event(
        {
            "correlation_id": correlation_id,
            "method": request.method,
            "path": request.url.path,
            "status_code": response.status_code,
            "elapsed_ms": elapsed_ms,
            "user_agent": request.headers.get("user-agent"),
        }
    )
    return response


@app.get("/health")
async def health() -> dict:
    return {"status": "ok"}


app.include_router(ai.router)
app.include_router(upload.router)
app.include_router(share.router)
app.include_router(leads.router)
app.include_router(graphs.router)
app.include_router(jobs.router)

# Vercel Services: requests arrive as routePrefix + path (e.g. /_/backend/health).
# Mounting strips the prefix so existing routes stay at /health, /graphs, etc.
if os.getenv("VERCEL"):
    _prefix = os.getenv("TOT_BACKEND_ROUTE_PREFIX", "/_/backend").strip() or "/_/backend"
    if not _prefix.startswith("/"):
        _prefix = "/" + _prefix
    _inner = app
    app = FastAPI()
    app.mount(_prefix, _inner)

