-- RPC helpers for cosine / pgvector search on graph_node_embeddings.
-- Run after supabase_map_notes_pgvector.sql.

-- KNN by arbitrary query vector (1024-dim, same as voyage-3).
create or replace function public.rpc_match_graph_neighbors(
  p_graph_id uuid,
  p_query vector(1024),
  p_match_count int default 20,
  p_max_distance double precision default 2.0
)
returns table(node_id text, model text, distance double precision)
language sql
stable
parallel safe
as $$
  select
    e.node_id,
    e.model,
    (e.embedding <=> p_query)::double precision as distance
  from public.graph_node_embeddings e
  where e.graph_id = p_graph_id
    and (e.embedding <=> p_query) <= p_max_distance
  order by e.embedding <=> p_query
  limit greatest(1, least(coalesce(p_match_count, 20), 500));
$$;

-- Neighbors of an existing node (excludes self).
create or replace function public.rpc_neighbors_for_node(
  p_graph_id uuid,
  p_node_id text,
  p_match_count int default 20
)
returns table(node_id text, distance double precision)
language plpgsql
stable
as $$
declare
  q vector(1024);
begin
  select e.embedding into q
  from public.graph_node_embeddings e
  where e.graph_id = p_graph_id and e.node_id = p_node_id
  limit 1;

  if q is null then
    return;
  end if;

  return query
  select
    e.node_id,
    (e.embedding <=> q)::double precision as distance
  from public.graph_node_embeddings e
  where e.graph_id = p_graph_id
    and e.node_id <> p_node_id
  order by e.embedding <=> q
  limit greatest(1, least(coalesce(p_match_count, 20), 500));
end;
$$;

comment on function public.rpc_match_graph_neighbors is 'Cosine-distance KNN within one graph (lower distance = closer).';
comment on function public.rpc_neighbors_for_node is 'KNN from an existing node embedding; excludes the source node.';

-- In Supabase: grant execute to authenticated / service_role as needed, e.g.:
-- grant execute on function public.rpc_match_graph_neighbors(uuid, vector, int, double precision) to authenticated;
-- grant execute on function public.rpc_neighbors_for_node(uuid, text, int) to authenticated;
