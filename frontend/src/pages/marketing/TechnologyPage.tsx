import { Link } from 'react-router-dom';
import { MarketingShell } from '../../components/marketing/MarketingShell';

export function TechnologyPage() {
  return (
    <MarketingShell active="technology">
      <section className="bg-[#050508] px-6 py-16 md:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-xs uppercase tracking-[0.14em] text-[#6b7280]">Technology</p>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">Modern stack, production-minded defaults</h1>
          <p className="mb-10 max-w-2xl text-sm leading-relaxed text-[#9ca3af]">
            The architecture balances immersive UX with backend safety and clear upgrade paths for scale.
          </p>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-xl border border-white/[0.08] bg-[#0a0a0d] p-6">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#00ffb4]">Frontend</h2>
              <ul className="list-disc space-y-2 pl-5 text-sm text-[#9ca3af]">
                <li>React 18 + TypeScript + Vite</li>
                <li>Three.js interactive graph canvas</li>
                <li>MediaPipe Hands gesture controls</li>
                <li>Tailwind-driven dark visual system</li>
              </ul>
            </div>
            <div className="rounded-xl border border-white/[0.08] bg-[#0a0a0d] p-6">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#4af0ff]">Backend</h2>
              <ul className="list-disc space-y-2 pl-5 text-sm text-[#9ca3af]">
                <li>FastAPI service with typed request validation</li>
                <li>Anthropic proxy endpoint (`/ai/message`)</li>
                <li>Rate limiting + prompt limits + logging</li>
                <li>CORS for local + Vercel deployment</li>
              </ul>
            </div>
            <div className="rounded-xl border border-white/[0.08] bg-[#0a0a0d] p-6">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#ff4af8]">Data</h2>
              <ul className="list-disc space-y-2 pl-5 text-sm text-[#9ca3af]">
                <li>Supabase PostgreSQL schema scaffold</li>
                <li>pgvector-ready migration path</li>
                <li>Tables for nodes, edges, snapshots, insights</li>
                <li>Extensible for multi-user ownership and sharing</li>
              </ul>
            </div>
            <div className="rounded-xl border border-white/[0.08] bg-[#0a0a0d] p-6">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#ffcc44]">Ops</h2>
              <ul className="list-disc space-y-2 pl-5 text-sm text-[#9ca3af]">
                <li>Frontend on Vercel, backend on Render/Railway</li>
                <li>Environment-first config management</li>
                <li>No client-side secret leakage</li>
                <li>Ready for Redis limiter upgrade at scale</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/workflow" className="rounded-lg border border-white/[0.12] px-5 py-2.5 text-sm text-[#e8eaf0] no-underline hover:border-white/25">
              View workflow
            </Link>
            <Link to="/app" className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-black no-underline hover:opacity-90">
              Launch app
            </Link>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
