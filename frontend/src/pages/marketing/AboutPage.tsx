import { Link } from 'react-router-dom';
import { MarketingShell } from '../../components/marketing/MarketingShell';

export function AboutPage() {
  return (
    <MarketingShell active="about">
      <section className="bg-[#050508] px-6 py-16 md:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-xs uppercase tracking-[0.14em] text-[#6b7280]">About</p>
          <h1 className="mb-4 max-w-2xl text-3xl font-bold tracking-tight text-white md:text-4xl">
            Thought topology, made tangible
          </h1>
          <p className="mb-10 max-w-2xl text-sm leading-relaxed text-[#9ca3af]">
            Topologies of Thoughts is a graph-native workspace: capture ideas as nodes, relate them as edges, and
            explore them in 3D with gestures—without handing your model keys to the browser.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-white/[0.08] bg-[#0a0a0d] p-5">
              <h2 className="mb-2 text-base font-semibold text-white">Principles</h2>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#9ca3af]">
                <li>Structure beats scattered notes when models get large.</li>
                <li>Server-side AI routing keeps secrets off the client.</li>
                <li>Open stack: React, FastAPI, Supabase—deploy how you want.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-white/[0.08] bg-[#0a0a0d] p-5">
              <h2 className="mb-2 text-base font-semibold text-white">Roadmap</h2>
              <p className="text-sm leading-relaxed text-[#9ca3af]">
                Auth, collaborative graphs, and richer embeddings are next. Follow the repo or talk to us on the{' '}
                <Link to="/contact#expert" className="text-white underline-offset-4 hover:underline">
                  contact form
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/app"
              className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-black no-underline hover:opacity-90"
            >
              Open workspace
            </Link>
            <Link
              to="/docs"
              className="rounded-lg border border-white/[0.12] px-5 py-2.5 text-sm text-[#e8eaf0] no-underline hover:border-white/25"
            >
              Read docs
            </Link>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
