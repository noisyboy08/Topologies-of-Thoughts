# Topologies of Thoughts

[![Frontend](https://img.shields.io/badge/frontend-React%20%2B%20Vite-61dafb?style=flat-square)](./frontend)
[![Backend](https://img.shields.io/badge/backend-FastAPI-009688?style=flat-square)](./backend)
[![Database](https://img.shields.io/badge/database-Supabase-3ecf8e?style=flat-square)](./supabase)
[![Language](https://img.shields.io/badge/language-TypeScript%20%2B%20Python-blue?style=flat-square)](#architecture)

Production-ready thought-mapping platform with hand-gesture interaction and AI-assisted semantic graph generation.

## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [API Endpoints](#api-endpoints)
- [Prerequisites](#prerequisites)
- [Local Development Setup](#local-development-setup)
- [Environment Variables](#environment-variables)
- [Production Deployment](#production-deployment)
- [Security Model](#security-model)
- [Operational Notes](#operational-notes)
- [Manual QA Checklist](#manual-qa-checklist)
- [Current Scope](#current-scope)
- [License / Usage](#license--usage)

## Overview

Topologies of Thoughts is a full-stack app composed of:
- `frontend/`: React + TypeScript + Vite + Three.js + MediaPipe Hands
- `backend/`: FastAPI service for AI orchestration and secure API calls
- `supabase/`: PostgreSQL schema/migrations (with pgvector-ready structure)

Core goals:
- Visualize ideas as interactive graphs
- Navigate and manipulate graph using camera + hand gestures
- Generate and refine graph insights through AI
- Keep all secrets server-side for production safety

## Architecture

### Frontend
- React app renders immersive graph canvas and control panels
- Three.js handles nodes, edges, camera motion, and hover/selection states
- MediaPipe Hands provides gesture-based interaction
- UI includes diagnostics for confidence/FPS/inference health

### Backend
- FastAPI exposes AI endpoints (`/ai/message`, `graphs` CRUD, and pgvector neighbor RPC passthrough)
- Anthropic API key is read from server env vars only
- Request validation + basic per-IP rate limiting + logging middleware
- CORS configured for localhost + Vercel domains

### Data Layer
- Supabase schema is defined in `supabase/migrations/001_initial_schema.sql`
- Includes tables for profiles, graphs, nodes, edges, snapshots, insights, and documents
- Designed for expansion into full multi-user graph CRUD and embeddings workflows

## API Endpoints

| Method | Endpoint | Auth | Status | Purpose |
| --- | --- | --- | --- | --- |
| `GET` | `/health` | No | Implemented | Service health check for uptime probes. |
| `POST` | `/ai/message` | No* | Implemented | Secure server-side Anthropic proxy with validation and rate limiting. |
| `POST` | `/ai/map-notes` | Yes | Implemented | Notes-to-graph pipeline with optional embeddings + Supabase persistence. |
| `GET` | `/ai/insight/{graph_id}` | Planned | Placeholder | Future narrative insight generation by graph id. |
| `POST` | `/upload/pdf/{graph_id}` | Yes | Placeholder | Future PDF ingest, extraction, embedding, and graph enrichment. |
| `GET` | `/share/graph/{share_token}` | Public | Placeholder | Future read-only shared graph endpoint. |
| `GET` | `/graphs` | Yes | Implemented | List graphs in current project tenant. |
| `POST` | `/graphs` | Yes | Implemented | Create graph with initial nodes/edges. |
| `GET` | `/graphs/{graph_id}` | Yes | Implemented | Fetch graph document by id in tenant. |
| `PUT` | `/graphs/{graph_id}` | Yes | Implemented | Idempotent optimistic save with `expected_version`. |
| `GET` | `/graphs/{graph_id}/neighbors/from-node/{node_id}` | Yes | Implemented | SQL-side cosine KNN from stored node embedding. |
| `POST` | `/graphs/{graph_id}/neighbors/query` | Yes | Implemented | SQL-side cosine KNN from arbitrary 1024-d vector. |

\* `POST /ai/message` currently has no user auth middleware, but enforces payload validation, prompt limits, and IP rate limiting. Add auth before public launch.

## Prerequisites

- Node.js `18+`
- Python `3.11+`
- Supabase project
- Anthropic API key

## Local Development Setup

### 1) Database (Supabase)
1. Create a Supabase project.
2. Apply SQL in order:
   - `supabase/migrations/001_initial_schema.sql`
   - `backend/supabase_tenant_graph_jobs.sql`
   - `backend/supabase_map_notes_pgvector.sql`
   - `backend/supabase_rpc_graph_embeddings.sql`
   - `backend/supabase_rpc_graph_embeddings_grants.sql`
3. Save credentials:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`

### 2) Backend
```bash
cd backend
python -m venv .venv
.\.venv\Scripts\activate
pip install -r requirements.txt
copy .env.example .env
```

Fill `backend/.env` with real values, then run:
```bash
uvicorn app.main:app --reload --port 8000
```

Verify:
- `http://localhost:8000/health`
- `http://localhost:8000/docs`

### 3) Frontend
```bash
cd frontend
npm install --legacy-peer-deps
npm run dev
```

Open:
- Marketing / landing: `http://localhost:5173/`
- Graph workspace (camera + gestures): `http://localhost:5173/app`

## Environment Variables

### Backend (`backend/.env`)
Required:
- `ANTHROPIC_API_KEY`
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

Recommended:
- `APP_ENV=production`
- `CORS_ORIGINS=["https://your-vercel-domain.vercel.app"]`
- `CORS_ORIGIN_REGEX="https://.*\\.vercel\\.app"`
- `AI_RATE_LIMIT_PER_MINUTE=20`
- `AI_PROMPT_MAX_CHARS=8000`

### Frontend
Set frontend env vars (see `frontend/.env.example`):
- `VITE_API_URL=https://your-backend.onrender.com`
- `VITE_ACCESS_TOKEN=...` (optional for local testing of authenticated `/graphs/*`)
- `VITE_GRAPH_ID=...` (optional default graph loaded by `/app`)

## Production Deployment

### Backend (Render or Railway)
- Root directory: `backend`
- Start command:
```bash
uvicorn app.main:app --host 0.0.0.0 --port $PORT
```
- Configure env vars listed above
- Confirm health endpoint after deploy

### Frontend (Vercel)
- Root directory: `frontend`
- Build command: `npm run build`
- Output directory: `dist`
- Configure frontend backend URL env/config to point to deployed API

## Security Model

- Frontend never calls Anthropic directly.
- Backend mediates all AI calls via `POST /ai/message`.
- API key exists only on backend host.
- Backend enforces:
  - payload validation
  - prompt length limits
  - basic IP-based rate limiting
  - structured request/error logging

## Operational Notes

- Current rate limiter is in-memory and instance-local.
- For multi-instance scale, replace limiter with Redis/shared store.
- Add centralized logging/monitoring before high-traffic launch.
- Add auth + per-user quotas before opening public access.

## Manual QA Checklist

- Open frontend and allow camera access.
- Verify graph rendering and camera orbit/zoom.
- Verify hand tracking states (POINT/PINCH/TWO-HAND) update.
- Verify AI-triggered actions return content through backend.
- Confirm browser network has no direct calls to `api.anthropic.com`.
- Confirm backend logs show `/ai/message` requests and status codes.

## Current Scope

Implemented:
- Interactive Three.js graph canvas
- Camera background + hand gesture controls
- Diagnostics/control overlays for gesture tuning
- FastAPI AI routing with validation/rate-limit/logging
- Supabase migration scaffold

Planned next:
- End-to-end `/ai/map-notes` embeddings + pgvector edge generation
- Full graph CRUD with auth-aware ownership
- Production-grade per-user limits, analytics, and tracing

## License / Usage

Internal project scaffold. Add your preferred license before public release.

