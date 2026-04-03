-- Topologies of Thoughts initial schema

create extension if not exists vector;

create table public.profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  email text,
  display_name text,
  avatar_url text,
  plan text default 'free' check (plan in ('free', 'pro', 'team')),
  graphs_count integer default 0,
  created_at timestamptz default now()
);

create table public.graphs (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  title text not null default 'Untitled Graph',
  description text,
  topology text default 'central' check (topology in ('central', 'cluster', 'distributed')),
  theme text default 'space',
  is_public boolean default false,
  share_token text unique default encode(gen_random_bytes(16), 'hex'),
  cluster_names jsonb default '{}',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table public.nodes (
  id uuid default gen_random_uuid() primary key,
  graph_id uuid references public.graphs(id) on delete cascade not null,
  label text not null,
  snippet text,
  cluster_index integer default 0,
  central_similarity float default 0.5,
  connections_count integer default 0,
  is_ghost boolean default false,
  is_materialized boolean default false,
  source text default 'manual' check (source in ('manual', 'voice', 'pdf', 'ai_expanded', 'ai_remixed', 'ai_ghost')),
  embedding vector(1024),
  position_x float,
  position_y float,
  position_z float,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table public.edges (
  id uuid default gen_random_uuid() primary key,
  graph_id uuid references public.graphs(id) on delete cascade not null,
  source_node_id uuid references public.nodes(id) on delete cascade not null,
  target_node_id uuid references public.nodes(id) on delete cascade not null,
  weight float not null default 0.7 check (weight >= 0 and weight <= 1),
  is_contradiction boolean default false,
  contradiction_reason text,
  contradiction_severity text check (contradiction_severity in ('low', 'medium', 'high')),
  created_at timestamptz default now(),
  unique(source_node_id, target_node_id)
);

create table public.snapshots (
  id uuid default gen_random_uuid() primary key,
  graph_id uuid references public.graphs(id) on delete cascade not null,
  user_id uuid references public.profiles(id) on delete cascade not null,
  name text not null,
  snapshot_data jsonb not null,
  created_at timestamptz default now()
);

create table public.ai_insights (
  id uuid default gen_random_uuid() primary key,
  graph_id uuid references public.graphs(id) on delete cascade not null,
  insight_type text not null check (insight_type in ('narrative', 'contradiction', 'ghost_nodes', 'cluster_names')),
  content jsonb not null,
  created_at timestamptz default now()
);

create table public.documents (
  id uuid default gen_random_uuid() primary key,
  graph_id uuid references public.graphs(id) on delete cascade not null,
  user_id uuid references public.profiles(id) on delete cascade not null,
  filename text not null,
  storage_path text not null,
  page_count integer,
  extracted_text text,
  processing_status text default 'pending' check (processing_status in ('pending', 'processing', 'done', 'error')),
  created_at timestamptz default now()
);

create index on public.nodes using ivfflat (embedding vector_cosine_ops) with (lists = 100);
create index on public.nodes (graph_id);
create index on public.edges (graph_id);
create index on public.graphs (user_id);
create index on public.graphs (share_token);

alter table public.profiles enable row level security;
alter table public.graphs enable row level security;
alter table public.nodes enable row level security;
alter table public.edges enable row level security;
alter table public.snapshots enable row level security;
alter table public.documents enable row level security;

create policy "Users can read own profile" on public.profiles for select using (auth.uid() = id);
create policy "Users can update own profile" on public.profiles for update using (auth.uid() = id);

create policy "Users can CRUD own graphs" on public.graphs for all using (auth.uid() = user_id);
create policy "Public graphs are readable" on public.graphs for select using (is_public = true);

create policy "Users can CRUD nodes in own graphs" on public.nodes for all
  using (graph_id in (select id from public.graphs where user_id = auth.uid()));
create policy "Public graph nodes readable" on public.nodes for select
  using (graph_id in (select id from public.graphs where is_public = true));

create policy "Users can CRUD edges in own graphs" on public.edges for all
  using (graph_id in (select id from public.graphs where user_id = auth.uid()));

create policy "Users can CRUD own snapshots" on public.snapshots for all using (auth.uid() = user_id);
create policy "Users can CRUD own documents" on public.documents for all using (auth.uid() = user_id);

create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, display_name)
  values (new.id, new.email, split_part(new.email, '@', 1));
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

