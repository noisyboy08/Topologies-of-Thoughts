import { Link } from 'react-router-dom';
import { MarketingShell } from '../../components/marketing/MarketingShell';

const features = [
  {
    name: 'Realtime 3D Graph',
    detail: 'Render nodes/edges with Three.js and interact with semantic structures in an immersive dark workspace.'
  },
  {
    name: 'Gesture Interaction',
    detail: 'MediaPipe-powered point, pinch, and two-hand gestures for orbit, zoom, and node selection.'
  },
  {
    name: 'Diagnostics Overlay',
    detail: 'Live confidence, inference latency, FPS, and tracking modes for practical production debugging.'
  },
  {
    name: 'AI Synthesis',
    detail: 'Generate mappings, insights, and contradiction prompts through a backend AI orchestration layer.'
  },
  {
    name: 'Snapshots & Replay',
    detail: 'Save graph states and review conceptual evolution over time for research and collaboration.'
  },
  {
    name: 'Secure Backend Routing',
    detail: 'No browser-exposed API secrets. Anthropic access is server-side with guardrails.'
  }
];

export function FeaturesPage() {
  return (
    <MarketingShell active="features">
      <section className="bg-[#050508] px-6 py-16 md:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-xs uppercase tracking-[0.14em] text-[#6b7280]">Features</p>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">Everything needed to ship a thought-graph product</h1>
          <p className="mb-10 max-w-2xl text-sm leading-relaxed text-[#9ca3af]">
            Designed as a production foundation: interaction model, security model, and extensible architecture.
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <article key={f.name} className="rounded-xl border border-white/[0.08] bg-[#0a0a0d] p-5">
                <h3 className="mb-2 text-sm font-semibold text-white">{f.name}</h3>
                <p className="text-sm leading-relaxed text-[#9ca3af]">{f.detail}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/technology" className="rounded-lg border border-white/[0.12] px-5 py-2.5 text-sm text-[#e8eaf0] no-underline hover:border-white/25">
              Explore technology
            </Link>
            <Link to="/app" className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-black no-underline hover:opacity-90">
              Try the app
            </Link>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
