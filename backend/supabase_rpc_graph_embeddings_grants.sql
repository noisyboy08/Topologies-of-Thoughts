-- Grants for pgvector neighbor RPCs on graph_node_embeddings.
-- Run after supabase_rpc_graph_embeddings.sql.
--
-- Adjust roles if your deployment uses a different Postgres role for API calls.

grant execute on function public.rpc_match_graph_neighbors(uuid, vector, int, double precision)
to authenticated, service_role;

grant execute on function public.rpc_neighbors_for_node(uuid, text, int)
to authenticated, service_role;
