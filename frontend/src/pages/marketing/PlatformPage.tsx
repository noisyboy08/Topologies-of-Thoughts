import { Link } from 'react-router-dom';
import { MarketingShell } from '../../components/marketing/MarketingShell';

const blocks = [
  { title: 'Thought Ingestion', desc: 'Capture notes, transcripts, and prompts into normalized graph-ready payloads.' },
  { title: 'Graph Workspace', desc: 'Navigate semantic nodes in 3D using mouse and hand gestures with real-time telemetry.' },
  { title: 'Snapshot Timeline', desc: 'Save graph states, compare evolution, and restore previous conceptual structures.' },
  { title: 'Secure AI Router', desc: 'All LLM traffic is server-side via FastAPI endpoints with validation and limits.' }
];

export function PlatformPage() {
  return (
    <MarketingShell active="platform">
      <section className="bg-[#050508] px-6 py-16 md:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-xs uppercase tracking-[0.14em] text-[#6b7280]">Platform</p>
          <h1 className="mb-4 max-w-2xl text-3xl font-bold tracking-tight text-white md:text-4xl">One control plane for your thinking infrastructure</h1>
          <p className="mb-10 max-w-2xl text-sm leading-relaxed text-[#9ca3af]">
            Topologies provides a single production workspace for transforming raw thoughts into structured knowledge graphs.
            Move from capture to exploration to AI-assisted synthesis without switching tools.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {blocks.map((b) => (
              <div key={b.title} className="rounded-xl border border-white/[0.08] bg-[#0a0a0d] p-5">
                <h3 className="mb-2 text-base font-semibold text-white">{b.title}</h3>
                <p className="text-sm leading-relaxed text-[#9ca3af]">{b.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/app" className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-black no-underline hover:opacity-90">
              Open workspace
            </Link>
            <Link to="/features" className="rounded-lg border border-white/[0.12] px-5 py-2.5 text-sm text-[#e8eaf0] no-underline hover:border-white/25">
              See features
            </Link>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
