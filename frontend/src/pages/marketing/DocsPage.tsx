import { Link } from 'react-router-dom';
import { MarketingShell } from '../../components/marketing/MarketingShell';

export function DocsPage() {
  const apiBase = (import.meta.env.VITE_API_URL as string | undefined)?.replace(/\/$/, '') || 'http://localhost:8000';
  const healthUrl = `${apiBase}/health`;

  return (
    <MarketingShell active="docs">
      <section className="bg-[#050508] px-6 py-16 md:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-xs uppercase tracking-[0.14em] text-[#6b7280]">Docs</p>
          <h1 className="mb-4 max-w-2xl text-3xl font-bold tracking-tight text-white md:text-4xl">
            Get oriented
          </h1>
          <p className="mb-10 max-w-2xl text-sm leading-relaxed text-[#9ca3af]">
            Quick links into this codebase. For the full narrative, open the project README in your editor or repo host.
          </p>

          <ul className="grid gap-4 md:grid-cols-2">
            <li>
              <Link
                to="/app"
                className="block rounded-xl border border-white/[0.08] bg-[#0a0a0d] p-5 no-underline transition-colors hover:border-white/20"
              >
                <h2 className="text-base font-semibold text-white">Graph workspace</h2>
                <p className="mt-2 text-sm text-[#9ca3af]">Open the interactive graph workspace (camera + gestures).</p>
              </Link>
            </li>
            <li>
              <a
                href={healthUrl}
                target="_blank"
                rel="noreferrer"
                className="block rounded-xl border border-white/[0.08] bg-[#0a0a0d] p-5 no-underline transition-colors hover:border-white/20"
              >
                <h2 className="text-base font-semibold text-white">API health</h2>
                <p className="mt-2 text-sm text-[#9ca3af]">
                  Open <span className="font-mono text-xs text-[#e8eaf0]">GET /health</span> — {healthUrl}
                </p>
              </a>
            </li>
            <li>
              <Link
                to="/contact#expert"
                className="block rounded-xl border border-white/[0.08] bg-[#0a0a0d] p-5 no-underline transition-colors hover:border-white/20"
              >
                <h2 className="text-base font-semibold text-white">Expert leads</h2>
                <p className="mt-2 text-sm text-[#9ca3af]">
                  Run <code className="rounded bg-white/[0.06] px-1 text-xs">supabase_expert_leads.sql</code>, then use
                  the contact form.
                </p>
              </Link>
            </li>
            <li>
              <Link
                to="/app"
                className="block rounded-xl border border-white/[0.08] bg-[#0a0a0d] p-5 no-underline transition-colors hover:border-white/20"
              >
                <h2 className="text-base font-semibold text-white">Workspace</h2>
                <p className="mt-2 text-sm text-[#9ca3af]">Three.js graph, MediaPipe gestures, server-side AI routing.</p>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </MarketingShell>
  );
}
