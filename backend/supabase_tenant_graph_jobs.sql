-- Tenant-aware schema, RLS policies, and helper tables.
-- Run in Supabase SQL editor.

create extension if not exists pgcrypto;

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  owner_user_id uuid not null,
  created_at timestamptz not null default now()
);

create table if not exists public.project_members (
  project_id uuid not null references public.projects(id) on delete cascade,
  user_id uuid not null,
  role text not null default 'member',
  created_at timestamptz not null default now(),
  primary key (project_id, user_id)
);

create table if not exists public.graphs (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  owner_user_id uuid not null,
  title text not null default 'Untitled',
  nodes jsonb not null default '[]'::jsonb,
  edges jsonb not null default '[]'::jsonb,
  version int not null default 0,
  last_write_hash text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.graph_idempotency (
  project_id uuid not null references public.projects(id) on delete cascade,
  graph_id uuid not null references public.graphs(id) on delete cascade,
  idempotency_key text not null,
  response_json jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  primary key (project_id, graph_id, idempotency_key)
);

create table if not exists public.jobs (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  owner_user_id uuid not null,
  type text not null,
  payload jsonb not null default '{}'::jsonb,
  status text not null default 'queued', -- queued|running|retry_scheduled|succeeded|failed|dead_letter
  attempt int not null default 0,
  next_retry_at timestamptz,
  error text,
  result jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.request_logs (
  id bigserial primary key,
  correlation_id text not null,
  method text not null,
  path text not null,
  status_code int not null,
  elapsed_ms numeric not null,
  user_agent text,
  created_at timestamptz not null default now()
);

create index if not exists graphs_project_updated_idx on public.graphs(project_id, updated_at desc);
create index if not exists jobs_project_status_idx on public.jobs(project_id, status, next_retry_at);
create index if not exists request_logs_created_idx on public.request_logs(created_at desc);

create or replace function public.touch_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_graphs_touch on public.graphs;
create trigger trg_graphs_touch before update on public.graphs
for each row execute function public.touch_updated_at();

drop trigger if exists trg_jobs_touch on public.jobs;
create trigger trg_jobs_touch before update on public.jobs
for each row execute function public.touch_updated_at();

alter table public.projects enable row level security;
alter table public.project_members enable row level security;
alter table public.graphs enable row level security;
alter table public.graph_idempotency enable row level security;
alter table public.jobs enable row level security;

-- Membership-based access.
create policy if not exists projects_member_read on public.projects
for select using (
  exists (
    select 1 from public.project_members pm
    where pm.project_id = projects.id and pm.user_id = auth.uid()
  )
);

create policy if not exists projects_owner_insert on public.projects
for insert with check (owner_user_id = auth.uid());

create policy if not exists project_members_read on public.project_members
for select using (
  exists (
    select 1 from public.project_members pm
    where pm.project_id = project_members.project_id and pm.user_id = auth.uid()
  )
);

create policy if not exists project_members_owner_manage on public.project_members
for all using (
  exists (
    select 1 from public.projects p
    where p.id = project_members.project_id and p.owner_user_id = auth.uid()
  )
)
with check (
  exists (
    select 1 from public.projects p
    where p.id = project_members.project_id and p.owner_user_id = auth.uid()
  )
);

create policy if not exists graphs_member_rw on public.graphs
for all using (
  exists (
    select 1 from public.project_members pm
    where pm.project_id = graphs.project_id and pm.user_id = auth.uid()
  )
)
with check (
  exists (
    select 1 from public.project_members pm
    where pm.project_id = graphs.project_id and pm.user_id = auth.uid()
  )
);

create policy if not exists graph_idempotency_member_rw on public.graph_idempotency
for all using (
  exists (
    select 1 from public.project_members pm
    where pm.project_id = graph_idempotency.project_id and pm.user_id = auth.uid()
  )
)
with check (
  exists (
    select 1 from public.project_members pm
    where pm.project_id = graph_idempotency.project_id and pm.user_id = auth.uid()
  )
);

create policy if not exists jobs_member_rw on public.jobs
for all using (
  exists (
    select 1 from public.project_members pm
    where pm.project_id = jobs.project_id and pm.user_id = auth.uid()
  )
)
with check (
  exists (
    select 1 from public.project_members pm
    where pm.project_id = jobs.project_id and pm.user_id = auth.uid()
  )
);
