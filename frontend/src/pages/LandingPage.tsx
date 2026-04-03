import { Link } from 'react-router-dom';
import { PixelCanvas } from '../components/landing/PixelCanvas';
import { MarketingShell } from '../components/marketing/MarketingShell';

const marqueeItems = [
  'Semantic graphs',
  'Gesture control',
  'FastAPI',
  'Supabase',
  'Three.js',
  'MediaPipe',
  'Private AI routing',
  'Snapshots & time travel'
];

const stackCards = [
  { title: 'Notes → nodes', sub: 'Paste text; AI proposes a graph structure.' },
  { title: 'Embeddings', sub: 'pgvector-ready schema for similarity edges.' },
  { title: 'Hand + mouse', sub: 'Orbit, zoom, and pinch-select in 3D.' },
  { title: 'Secure API', sub: 'Anthropic only on the server, never in the browser.' }
];

const logoCloud = ['Supabase', 'FastAPI', 'Anthropic', 'Three.js', 'MediaPipe', 'Vite', 'TypeScript'];

const caseStudies = [
  {
    title: 'Research map in one session',
    metric: '120+ nodes',
    desc: 'Turn a reading list into clusters and bridge concepts with AI-assisted edge suggestions.'
  },
  {
    title: 'Team planning topology',
    metric: '4 squads',
    desc: 'Map dependencies across teams and keep snapshots per milestone for quick retrospectives.'
  },
  {
    title: 'Founder memo graph',
    metric: '3x faster',
    desc: 'Transform long strategy notes into linked models that are easier to review and update.'
  }
];

const testimonials = [
  {
    quote: 'Topologies helped me see weak assumptions in minutes, not days.',
    name: 'Product Lead',
    org: 'Early-stage SaaS'
  },
  {
    quote: 'The graph interaction feels natural, and the backend-first AI setup is exactly what we needed.',
    name: 'Engineering Manager',
    org: 'Applied AI Team'
  }
];

const pricingCards = [
  {
    name: 'Starter',
    price: 'Free',
    note: 'For solo builders',
    points: ['Launch workspace', 'Core graph interactions', 'Local development setup'],
    to: '/app',
    cta: 'Start now'
  },
  {
    name: 'Pro',
    price: 'Soon',
    note: 'For power users',
    points: ['Larger graph limits', 'Snapshot workflow', 'Priority support'],
    to: '/pricing',
    cta: 'See plan'
  },
  {
    name: 'Team',
    price: 'Custom',
    note: 'For org rollout',
    points: ['Deployment guidance', 'Security review', 'Dedicated onboarding'],
    to: '/contact#expert',
    cta: 'Talk to Expert'
  }
];

const faqs = [
  {
    q: 'Can I run this with my own backend and keys?',
    a: 'Yes. The frontend can call your FastAPI instance, and model keys stay server-side.'
  },
  {
    q: 'Do I need Supabase to start?',
    a: 'No. You can start locally, then wire Supabase for persistence and lead capture when ready.'
  },
  {
    q: 'Is gesture control required?',
    a: 'No. Mouse and keyboard work by default; gestures are optional.'
  }
];

export function LandingPage() {
  return (
    <MarketingShell active="home">
      {/* ── HERO ── */}
      <section id="hero" className="scroll-mt-14">
        <div className="relative h-[300px] w-full overflow-hidden">
          <PixelCanvas />
          <div
            className="pointer-events-none absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-b from-transparent to-[#050508]"
            aria-hidden
          />
        </div>
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 pb-16 pt-8 md:flex-row md:justify-between md:px-10">
          <div className="max-w-xl">
            <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-[2.75rem]">
              Map the topology
              <br />
              of your thoughts
            </h1>
            <p className="mb-8 max-w-md text-sm leading-relaxed text-[#6b7280] md:text-[0.9rem]">
              Build living knowledge graphs from notes, explore them in 3D with camera and hand gestures, and route
              every AI call through your own FastAPI backend — keys stay on the server.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/app"
                className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-black no-underline transition-opacity hover:opacity-85"
              >
                Launch workspace
              </Link>
              <Link
                to="/platform"
                className="rounded-lg border border-white/[0.12] bg-transparent px-5 py-2.5 text-sm text-[#e8eaf0] no-underline transition-colors hover:border-white/25"
              >
                See platform
              </Link>
              <Link
                to="/contact#expert"
                className="rounded-lg border border-white/[0.12] bg-transparent px-5 py-2.5 text-sm text-[#e8eaf0] no-underline transition-colors hover:border-white/25"
              >
                Talk to Expert
              </Link>
            </div>
          </div>
          <div className="mt-4 w-full shrink-0 rounded-2xl border border-white/[0.08] bg-[#0a0a0d]/90 p-4 shadow-2xl backdrop-blur-md md:mt-0 md:w-[240px]">
            <p className="mb-3 text-xs leading-relaxed text-[#6b7280]">
              Navigate concepts as nodes and edges. Pinch to select, two hands to zoom, wrist to orbit.
            </p>
            <div className="relative flex h-[110px] items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-[#0d1f18] via-[#1a1020] to-[#050508]">
              <div className="absolute h-16 w-16 rounded-full bg-[radial-gradient(circle,rgba(0,217,160,0.45),transparent_70%)] animate-pulse" />
              <div className="relative z-[1] flex items-center gap-1.5 text-xs font-medium text-white/90">
                <span className="h-2 w-2 rounded-full bg-[#00ffb4] shadow-[0_0_12px_#00ffb4]" />
                Live graph
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* ── MARQUEE ── */}
      <section
        id="marquee"
        className="scroll-mt-14 overflow-hidden border-y border-white/[0.07] bg-[#08080c]/80 py-3"
        aria-label="Highlights"
      >
        <div className="landing-marquee flex w-max gap-12 pr-12">
          {[...marqueeItems, ...marqueeItems].map((label, i) => (
            <span
              key={`${label}-${i}`}
              className="flex items-center gap-2 whitespace-nowrap text-sm font-medium text-[#6b7280]"
            >
              <span className="text-[#00ffb4]">◆</span>
              {label}
            </span>
          ))}
        </div>
      </section>

      {/* ── TRUST BAR / LOGO CLOUD ── */}
      <section className="border-b border-white/[0.07] bg-[#050508] px-6 py-10 md:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-xs uppercase tracking-[0.14em] text-[#6b7280]">Trusted stack</p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-7">
            {logoCloud.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-white/[0.08] bg-white/[0.02] px-3 py-2 text-center text-xs font-medium text-[#9ca3af]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATFORM ── */}
      <section id="platform" className="scroll-mt-14 bg-[#050508] px-6 py-20 md:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.12em] text-[#6b7280]">Platform</p>
          <h2 className="mb-3 max-w-lg text-2xl font-bold tracking-tight text-white md:text-3xl">
            One workspace, every layer of your thinking
          </h2>
          <p className="mb-10 max-w-md text-sm leading-relaxed text-[#6b7280]">
            From raw notes to structured nodes, edges, and snapshots — manage iterations of your mental models in one
            dark, focused UI.
          </p>

          <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#0a1210] via-[#0f0a14] to-[#050508] p-6">
            <div className="mb-6 flex flex-wrap items-center gap-2 text-xs">
              <span className="flex cursor-default items-center gap-1 rounded-md border border-white/[0.1] bg-white/[0.04] px-3 py-1.5 text-[#6b7280]">
                All graphs
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
              <span className="rounded-md bg-white/[0.08] px-3 py-1.5 text-white">Graphs</span>
              <span className="rounded-md px-3 py-1.5 text-[#6b7280]">Snapshots</span>
              <span className="rounded-md px-3 py-1.5 text-[#6b7280]">Insights</span>
              <span className="ml-auto rounded-md px-3 py-1.5 text-[#6b7280]">Settings</span>
              <Link
                to="/app"
                className="flex items-center gap-1 rounded-md border border-white/20 bg-white/[0.06] px-3 py-1.5 text-[#e8eaf0] no-underline hover:bg-white/10"
              >
                <span>+</span> New graph
              </Link>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-4">
              {stackCards.map((c) => (
                <div
                  key={c.title}
                  className="flex min-h-[108px] flex-col justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 text-center transition-colors hover:bg-white/[0.06]"
                >
                  <div className="mb-1 text-xs font-semibold text-white">{c.title}</div>
                  <div className="text-[0.7rem] leading-snug text-[#6b7280]">{c.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" className="scroll-mt-14 border-t border-white/[0.07] bg-[#030304]">
        <div className="mx-auto max-w-6xl px-6 pt-12 md:px-10">
          <p className="mb-2 text-xs uppercase tracking-[0.14em] text-[#6b7280]">Services / Features</p>
        </div>
        <div className="grid md:grid-cols-3">
          <div className="border-b border-white/[0.07] p-10 md:border-b-0 md:border-r">
            <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.06]">
              <svg viewBox="0 0 18 18" fill="none" stroke="#00ffb4" strokeWidth="1.5" className="h-4 w-4">
                <path d="M9 2v14M2 9h14" />
                <circle cx="9" cy="9" r="7" />
              </svg>
            </div>
            <h3 className="mb-2 text-sm font-semibold text-white">Semantic topology</h3>
            <p className="text-xs leading-relaxed text-[#6b7280]">
              Nodes and edges encode relationships — designed for embeddings, clustering, and AI-assisted expansion
              when you wire the full pipeline.
            </p>
          </div>
          <div className="border-b border-white/[0.07] p-10 md:border-b-0 md:border-r">
            <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.06]">
              <svg viewBox="0 0 18 18" fill="none" stroke="#ff4af8" strokeWidth="1.5" className="h-4 w-4">
                <rect x="2" y="2" width="6" height="6" rx="1" />
                <rect x="10" y="2" width="6" height="6" rx="1" />
                <rect x="2" y="10" width="6" height="6" rx="1" />
                <rect x="10" y="10" width="6" height="6" rx="1" />
              </svg>
            </div>
            <h3 className="mb-2 text-sm font-semibold text-white">Modular stack</h3>
            <p className="text-xs leading-relaxed text-[#6b7280]">
              React/Vite frontend, FastAPI backend, Supabase data plane. Deploy web and API separately and scale the
              pieces you need.
            </p>
          </div>
          <div className="p-10">
            <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.06]">
              <svg viewBox="0 0 18 18" fill="none" stroke="#4af0ff" strokeWidth="1.5" className="h-4 w-4">
                <path d="M9 1L1 5v8l8 4 8-4V5L9 1z" />
                <path d="M1 5l8 4 8-4M9 9v9" />
              </svg>
            </div>
            <h3 className="mb-2 text-sm font-semibold text-white">Ownership & control</h3>
            <p className="text-xs leading-relaxed text-[#6b7280]">
              Your database, your API keys, your rate limits. The browser never holds Anthropic credentials — only your
              backend does.
            </p>
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGY ── */}
      <section id="technology" className="scroll-mt-14 bg-[#050508] px-6 py-20 md:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.12em] text-[#6b7280]">Technology</p>
          <h2 className="mb-10 text-2xl font-bold tracking-tight text-white md:text-3xl">Built for makers who ship</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-6">
              <h3 className="mb-2 font-mono text-xs uppercase tracking-wider text-[#00ffb4]">Frontend</h3>
              <p className="text-sm leading-relaxed text-[#9ca3af]">
                React 18, TypeScript, Vite, Tailwind, Three.js, Zustand. MediaPipe Hands for production-style gesture
                overlays and tuning panels.
              </p>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-6">
              <h3 className="mb-2 font-mono text-xs uppercase tracking-wider text-[#4af0ff]">Backend</h3>
              <p className="text-sm leading-relaxed text-[#9ca3af]">
                FastAPI, Pydantic settings, Anthropic SDK. Validated `POST /ai/message`, per-IP rate limiting, structured
                logs — extend with Supabase auth and graph CRUD next.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT US ── */}
      <section className="bg-[#050508] px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.14em] text-[#6b7280]">About us</p>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-white md:text-3xl">
              We build tools for structured thinking
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-[#9ca3af]">
              Topologies of Thoughts is focused on turning messy notes into usable maps. We combine graph-native UX
              with server-side AI routing so teams can reason faster without compromising control.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-block rounded-lg border border-white/[0.12] px-5 py-2.5 text-sm text-[#e8eaf0] no-underline hover:border-white/25"
            >
              Read our story
            </Link>
          </div>
          <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-6">
            <p className="text-xs uppercase tracking-[0.14em] text-[#6b7280]">What we optimize for</p>
            <ul className="mt-4 space-y-3 text-sm text-[#cbd5e1]">
              <li>Clarity over note sprawl</li>
              <li>Composable architecture (React + FastAPI + Supabase)</li>
              <li>Fast interaction with traceable model decisions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO / CASE STUDIES ── */}
      <section className="border-t border-white/[0.07] bg-[#030304] px-6 py-20 md:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-xs uppercase tracking-[0.14em] text-[#6b7280]">Portfolio / Case studies</p>
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-white md:text-3xl">Where graph thinking wins</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {caseStudies.map((c) => (
              <article key={c.title} className="rounded-xl border border-white/[0.08] bg-[#0a0a0d] p-5">
                <p className="mb-2 text-xs uppercase tracking-[0.14em] text-[#6b7280]">{c.metric}</p>
                <h3 className="mb-2 text-base font-semibold text-white">{c.title}</h3>
                <p className="text-sm leading-relaxed text-[#9ca3af]">{c.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-[#050508] px-6 py-20 md:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-xs uppercase tracking-[0.14em] text-[#6b7280]">Testimonials</p>
          <div className="grid gap-4 md:grid-cols-2">
            {testimonials.map((t) => (
              <blockquote key={t.quote} className="rounded-xl border border-white/[0.08] bg-[#0a0a0d] p-6">
                <p className="text-sm leading-relaxed text-[#e8eaf0]">"{t.quote}"</p>
                <footer className="mt-4 text-xs uppercase tracking-[0.14em] text-[#6b7280]">
                  {t.name} · {t.org}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING TABLE ── */}
      <section className="border-t border-white/[0.07] bg-[#030304] px-6 py-20 md:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-xs uppercase tracking-[0.14em] text-[#6b7280]">Pricing table</p>
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-white md:text-3xl">Start free, scale when ready</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {pricingCards.map((plan) => (
              <div key={plan.name} className="rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-6">
                <p className="text-xs uppercase tracking-[0.14em] text-[#6b7280]">{plan.note}</p>
                <h3 className="mt-1 text-lg font-semibold text-white">{plan.name}</h3>
                <p className="mt-1 text-3xl font-bold text-white">{plan.price}</p>
                <ul className="mt-4 space-y-2 text-sm text-[#9ca3af]">
                  {plan.points.map((p) => (
                    <li key={p}>• {p}</li>
                  ))}
                </ul>
                <Link
                  to={plan.to}
                  className="mt-6 inline-block rounded-lg border border-white/[0.12] px-4 py-2 text-sm text-[#e8eaf0] no-underline hover:border-white/25"
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#050508] px-6 py-20 md:px-10">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-xs uppercase tracking-[0.14em] text-[#6b7280]">FAQ</p>
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-white md:text-3xl">Common questions</h2>
          <div className="space-y-3">
            {faqs.map((item) => (
              <details key={item.q} className="rounded-xl border border-white/[0.08] bg-[#0a0a0d] p-4">
                <summary className="cursor-pointer text-sm font-semibold text-white">{item.q}</summary>
                <p className="mt-2 text-sm leading-relaxed text-[#9ca3af]">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-[#050508] px-6 py-20 md:px-10">
        <div className="mx-auto max-w-4xl rounded-2xl border border-white/[0.1] bg-[#0a0a0d] p-8 text-center md:p-10">
          <p className="mb-3 text-xs uppercase tracking-[0.14em] text-[#6b7280]">Final call to action</p>
          <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">Ready to map your thinking system?</h2>
          <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-[#9ca3af]">
            Start in the workspace or talk to us about your use case. We can help you shape the graph model and
            production setup.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/app"
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black no-underline hover:opacity-90"
            >
              Launch workspace
            </Link>
            <Link
              to="/contact#expert"
              className="rounded-lg border border-white/[0.12] px-6 py-3 text-sm text-[#e8eaf0] no-underline hover:border-white/25"
            >
              Talk to Expert
            </Link>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
