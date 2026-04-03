import { Link } from 'react-router-dom';
import { MarketingShell } from '../../components/marketing/MarketingShell';

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    sub: 'For individuals exploring graphs.',
    limits: ['Mock graph & gestures', 'Local-first feel', 'Community support'],
    cta: 'Launch workspace',
    href: '/app',
    highlight: false
  },
  {
    name: 'Pro',
    price: 'Soon',
    sub: 'For serious knowledge work.',
    limits: ['Higher node caps', 'Snapshots & history', 'Priority support'],
    cta: 'Talk to us',
    href: '/contact#expert',
    highlight: true
  },
  {
    name: 'Team',
    price: 'Custom',
    sub: 'SSO, audit, and deployment help.',
    limits: ['Dedicated support', 'Custom ingest', 'Security review'],
    cta: 'Contact sales',
    href: '/contact#expert',
    highlight: false
  }
];

export function PricingPage() {
  return (
    <MarketingShell active="pricing">
      <section className="bg-[#050508] px-6 py-16 md:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-xs uppercase tracking-[0.14em] text-[#6b7280]">Pricing</p>
          <h1 className="mb-4 max-w-2xl text-3xl font-bold tracking-tight text-white md:text-4xl">
            Simple tiers. Heavy graphs.
          </h1>
          <p className="mb-12 max-w-2xl text-sm leading-relaxed text-[#9ca3af]">
            Limits and billing wire to your Supabase project when you enable them. Until then, run the workspace in
            development mode without a card.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`flex flex-col rounded-2xl border p-6 ${
                  t.highlight
                    ? 'border-white/25 bg-white/[0.06] shadow-[0_0_0_1px_rgba(255,255,255,0.08)]'
                    : 'border-white/[0.08] bg-[#0a0a0d]'
                }`}
              >
                <h2 className="text-lg font-semibold text-white">{t.name}</h2>
                <p className="mt-1 text-3xl font-bold tracking-tight text-white">{t.price}</p>
                <p className="mt-2 text-sm text-[#9ca3af]">{t.sub}</p>
                <ul className="mt-6 flex-1 space-y-2 text-sm text-[#cbd5e1]">
                  {t.limits.map((line) => (
                    <li key={line} className="flex gap-2">
                      <span className="text-[#00ffb4]">✓</span>
                      {line}
                    </li>
                  ))}
                </ul>
                <Link
                  to={t.href}
                  className={`mt-8 inline-flex justify-center rounded-lg px-4 py-2.5 text-center text-sm font-semibold no-underline ${
                    t.highlight
                      ? 'bg-white text-black hover:opacity-90'
                      : 'border border-white/[0.12] text-[#e8eaf0] hover:border-white/25'
                  }`}
                >
                  {t.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
