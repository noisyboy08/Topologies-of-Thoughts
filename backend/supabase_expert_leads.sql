-- Run in Supabase SQL editor (once). Service role inserts from FastAPI bypass RLS.
create table if not exists public.expert_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  company text,
  message text not null,
  source text not null default 'talk_to_expert'
);

create index if not exists expert_leads_created_at_idx on public.expert_leads (created_at desc);

alter table public.expert_leads enable row level security;

-- No policies: only backend (service role) inserts; dashboard uses service role or SQL.

comment on table public.expert_leads is 'Marketing / Talk to Expert form submissions';
