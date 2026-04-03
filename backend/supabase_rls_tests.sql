-- Basic SQL assertions for RLS behavior.
-- Run manually in Supabase SQL editor after schema setup.

begin;

-- Seed two users (UUID literals for simulation)
-- NOTE: auth.uid() cannot be directly set in SQL editor unless using JWT claims.
-- This script provides query snippets + expected outcomes.

-- 1) Verify policy exists
select schemaname, tablename, policyname
from pg_policies
where schemaname = 'public'
  and tablename in ('projects', 'project_members', 'graphs', 'graph_idempotency', 'jobs')
order by tablename, policyname;

-- 2) Verify RLS enabled
select relname, relrowsecurity
from pg_class
where relname in ('projects', 'project_members', 'graphs', 'graph_idempotency', 'jobs')
order by relname;

-- 3) Manual checks in authenticated context:
-- - user A can insert/read graphs in project A
-- - user A cannot read project B graphs
-- - user B cannot update user A graph rows
-- - user A can read own jobs only through project membership
--
-- Example statements to run via API/psql with JWT:
-- insert into public.graphs(project_id, owner_user_id, title) values ('<project-a>', auth.uid(), 'A1');
-- select * from public.graphs where project_id = '<project-b>'; -- expect 0 rows
-- update public.graphs set title='hijack' where project_id = '<project-a-owned-by-user-a>' and auth.uid()='<user-b>'; -- expect 0 rows affected

rollback;
