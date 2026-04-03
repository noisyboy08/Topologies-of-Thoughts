-- Optional: store per-node embeddings for similarity search / audit.
-- Run after supabase_tenant_graph_jobs.sql. Requires pgvector on Supabase.

create extension if not exists vector;

create table if not exists public.graph_node_embeddings (
  graph_id uuid not null references public.graphs(id) on delete cascade,
  node_id text not null,
  model text not null default 'voyage-3',
  embedding vector(1024) not null,
  created_at timestamptz not null default now(),
  primary key (graph_id, node_id)
);

create index if not exists graph_node_embeddings_embedding_idx
  on public.graph_node_embeddings using ivfflat (embedding vector_cosine_ops)
  with (lists = 100);

alter table public.graph_node_embeddings enable row level security;

create policy if not exists graph_node_embeddings_member_rw on public.graph_node_embeddings
for all using (
  exists (
    select 1 from public.graphs g
    join public.project_members pm on pm.project_id = g.project_id
    where g.id = graph_node_embeddings.graph_id and pm.user_id = auth.uid()
  )
)
with check (
  exists (
    select 1 from public.graphs g
    join public.project_members pm on pm.project_id = g.project_id
    where g.id = graph_node_embeddings.graph_id and pm.user_id = auth.uid()
  )
);

comment on table public.graph_node_embeddings is 'Voyage (1024-dim) embeddings for map-notes; service role writes from worker.';
