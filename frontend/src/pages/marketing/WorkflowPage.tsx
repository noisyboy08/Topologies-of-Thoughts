import { Link } from 'react-router-dom';
import { MarketingShell } from '../../components/marketing/MarketingShell';

const flow = [
  { step: '01', title: 'Capture', desc: 'Paste notes or voice input into the workspace to initialize concept extraction.' },
  { step: '02', title: 'Map', desc: 'Create nodes, edges, and semantic relationships with AI-assisted graph structuring.' },
  { step: '03', title: 'Explore', desc: 'Navigate graph in 3D with gesture and mouse controls while monitoring confidence metrics.' },
  { step: '04', title: 'Refine', desc: 'Generate insights, detect contradictions, and expand nodes to evolve the thought topology.' },
  { step: '05', title: 'Version', desc: 'Save snapshots and revisit previous conceptual states for comparison and rollback.' },
  { step: '06', title: 'Deploy', desc: 'Run frontend on Vercel and backend on Render/Railway with server-side AI routing.' }
];

export function WorkflowPage() {
  return (
    <MarketingShell active="workflow">
      <section className="bg-[#050508] px-6 py-16 md:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-xs uppercase tracking-[0.14em] text-[#6b7280]">Workflow</p>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">From raw text to production-grade thought systems</h1>
          <p className="mb-10 max-w-2xl text-sm leading-relaxed text-[#9ca3af]">
            A practical lifecycle for building, validating, and deploying graph-based AI thinking tools.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {flow.map((f) => (
              <div key={f.step} className="rounded-xl border border-white/[0.08] bg-[#0a0a0d] p-5">
                <div className="mb-2 inline-flex rounded border border-white/[0.15] px-2 py-0.5 font-mono text-xs text-[#6b7280]">{f.step}</div>
                <h3 className="mb-2 text-base font-semibold text-white">{f.title}</h3>
                <p className="text-sm leading-relaxed text-[#9ca3af]">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/app" className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-black no-underline hover:opacity-90">
              Start workflow in app
            </Link>
            <Link to="/platform" className="rounded-lg border border-white/[0.12] px-5 py-2.5 text-sm text-[#e8eaf0] no-underline hover:border-white/25">
              Back to platform
            </Link>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
