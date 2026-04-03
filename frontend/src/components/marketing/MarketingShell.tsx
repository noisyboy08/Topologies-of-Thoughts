import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

type MarketingShellProps = {
  children: ReactNode;
  active?:
    | 'home'
    | 'platform'
    | 'features'
    | 'technology'
    | 'workflow'
    | 'about'
    | 'pricing'
    | 'contact'
    | 'docs';
};

const navLinks = [
  { to: '/platform', label: 'Platform', key: 'platform' },
  { to: '/features', label: 'Features', key: 'features' },
  { to: '/technology', label: 'Technology', key: 'technology' },
  { to: '/workflow', label: 'Workflow', key: 'workflow' },
  { to: '/about', label: 'About', key: 'about' },
  { to: '/pricing', label: 'Pricing', key: 'pricing' },
  { to: '/docs', label: 'Docs', key: 'docs' },
  { to: '/contact', label: 'Contact', key: 'contact' }
] as const;

function linkClass(active: boolean) {
  return `text-sm font-normal no-underline transition-colors ${
    active ? 'text-white' : 'text-[#6b7280] hover:text-white'
  }`;
}

export function MarketingShell({ children, active = 'home' }: MarketingShellProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <div className="min-h-screen bg-[#050508] font-sans text-[#e8eaf0]">
      <nav className="fixed left-0 right-0 top-0 z-[100] flex h-14 items-center justify-between gap-3 border-b border-white/[0.07] bg-[#050508]/90 px-4 backdrop-blur-xl md:px-10">
        <Link
          to="/"
          className="flex min-w-0 shrink items-center gap-2 text-base font-semibold text-white no-underline"
          onClick={() => setMenuOpen(false)}
        >
          <svg className="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 2L3 6v8l7 4 7-4V6l-7-4z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
            <circle cx="10" cy="10" r="2" fill="currentColor" className="text-[#00ffb4]" />
          </svg>
          <span className="truncate">Topologies</span>
        </Link>

        <ul className="hidden list-none items-center gap-4 lg:flex xl:gap-6">
          {navLinks.map((l) => (
            <li key={l.key}>
              <Link to={l.to} className={linkClass(active === l.key)}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden shrink-0 items-center gap-2 md:flex">
          <Link
            to="/contact#expert"
            className="rounded-md border border-white/[0.12] bg-transparent px-3 py-2 text-xs font-medium text-[#e8eaf0] no-underline transition-colors hover:border-white/25 hover:bg-white/[0.04]"
          >
            Talk to Expert
          </Link>
          <Link
            to="/app"
            className="rounded-md border border-white/[0.12] bg-transparent px-3 py-2 text-xs font-medium text-[#e8eaf0] no-underline transition-colors hover:border-white/25 hover:bg-white/[0.04]"
          >
            Open app
          </Link>
          <Link
            to="/app"
            className="rounded-md border-0 bg-white px-3 py-2 text-xs font-semibold text-[#050508] no-underline transition-opacity hover:opacity-90"
          >
            Launch workspace
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/[0.1] bg-white/[0.04] text-white lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="marketing-mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </nav>

      {menuOpen && (
        <>
          <div
            className="fixed inset-0 z-[110] bg-black/60 backdrop-blur-sm lg:hidden"
            aria-hidden
            onClick={() => setMenuOpen(false)}
          />
          <div
            id="marketing-mobile-menu"
            className="fixed left-0 right-0 top-14 z-[120] max-h-[calc(100vh-3.5rem)] overflow-y-auto border-b border-white/[0.08] bg-[#050508]/98 px-4 py-6 backdrop-blur-xl lg:hidden"
          >
            <ul className="m-0 list-none space-y-1 p-0">
              {navLinks.map((l) => (
                <li key={l.key}>
                  <Link
                    to={l.to}
                    className={`block rounded-lg px-3 py-3 text-base no-underline ${
                      active === l.key
                        ? 'bg-white/[0.08] text-white'
                        : 'text-[#9ca3af] hover:bg-white/[0.04] hover:text-white'
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-2 border-t border-white/[0.08] pt-6">
              <Link
                to="/contact#expert"
                className="rounded-lg border border-white/[0.12] px-4 py-3 text-center text-sm font-medium text-[#e8eaf0] no-underline hover:bg-white/[0.04]"
                onClick={() => setMenuOpen(false)}
              >
                Talk to Expert
              </Link>
              <Link
                to="/app"
                className="rounded-lg border border-white/[0.12] px-4 py-3 text-center text-sm font-medium text-[#e8eaf0] no-underline hover:bg-white/[0.04]"
                onClick={() => setMenuOpen(false)}
              >
                Open app
              </Link>
              <Link
                to="/app"
                className="rounded-lg bg-white px-4 py-3 text-center text-sm font-semibold text-[#050508] no-underline hover:opacity-90"
                onClick={() => setMenuOpen(false)}
              >
                Launch workspace
              </Link>
            </div>
          </div>
        </>
      )}

      <main className="pt-14">{children}</main>

      <footer className="mt-auto">
        {/* Pre-footer: black + grain + watermark */}
        <section
          className="footer-pre-dark footer-grain-overlay relative border-t border-white/[0.08]"
          aria-labelledby="footer-pre-heading"
        >
          <div className="footer-watermark" aria-hidden>
            {Array.from({ length: 14 }).map((_, i) => (
              <span key={i}>TOPOLOGIES</span>
            ))}
          </div>
          <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-14 md:grid-cols-2 md:gap-x-14 md:gap-y-12 md:px-10 md:py-20">
            <h2
              id="footer-pre-heading"
              className="order-1 font-display text-2xl font-black uppercase leading-[1.12] tracking-tight text-white md:order-none md:col-start-1 md:row-start-1 md:text-4xl lg:text-[2.75rem] lg:leading-[1.08]"
            >
              Your journey to a clear thought graph.{' '}
              <span className="text-neutral-400" aria-hidden>
                *
              </span>
            </h2>

            <Link
              to="/app"
              className="order-2 group relative block overflow-hidden rounded-2xl border border-white/[0.1] bg-white/[0.04] p-5 no-underline shadow-[0_20px_50px_rgba(0,0,0,0.45)] transition-transform duration-200 hover:-translate-y-0.5 md:order-none md:col-start-2 md:row-start-1"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.25]"
                aria-hidden
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    -12deg,
                    rgba(255,255,255,0.35) 0,
                    rgba(255,255,255,0.35) 1px,
                    transparent 1px,
                    transparent 10px
                  )`
                }}
              />
              <div className="relative flex items-start justify-between gap-4">
                <p className="m-0 max-w-[14rem] font-sans text-sm font-medium leading-snug text-neutral-200">
                  Open the workspace: gesture, graph, and AI in one flow.
                </p>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white text-neutral-950 transition-colors group-hover:bg-neutral-200">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden
                  >
                    <path d="M7 17L17 7M17 7H9M17 7v8" />
                  </svg>
                </span>
              </div>
              <div className="relative mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-neutral-950">
                  Graph
                </span>
                <span className="rounded-full bg-neutral-800 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-neutral-100 ring-1 ring-white/10">
                  Gesture
                </span>
                <span className="rounded-full bg-neutral-800 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-neutral-100 ring-1 ring-white/10">
                  AI assist
                </span>
              </div>
            </Link>

            <div className="order-3 flex flex-wrap items-end gap-3 md:order-none md:col-start-2 md:row-start-2">
              <span className="font-footerBrand text-5xl leading-none text-neutral-100 md:text-7xl">∞</span>
              <span className="max-w-[14rem] rounded-md border border-white/10 bg-neutral-800 px-3 py-2 text-[10px] font-bold uppercase leading-tight text-neutral-100 md:text-[11px]">
                Live nodes & edges in the browser workspace
              </span>
            </div>

            <p className="order-4 m-0 text-right text-[11px] font-medium uppercase leading-relaxed tracking-wide text-neutral-400 md:order-none md:col-start-2 md:row-start-3 md:self-end">
              Topologies maps how ideas link—so you can see structure, not just notes. Built for
              thinkers who want their graph tactile and fast.
            </p>

            <p className="order-5 m-0 border-t border-white/[0.1] pt-6 text-[11px] uppercase tracking-wider text-neutral-500 md:order-none md:col-start-1 md:row-start-3 md:border-t-0 md:pt-0 md:self-end">
              Copyright © {new Date().getFullYear()} Topologies
            </p>
          </div>
        </section>

        {/* Massive wordmark anchor */}
        <div className="footer-wordmark-strip relative px-4 py-6 md:px-10 md:py-10">
          <p className="footer-wordmark-text mx-auto max-w-6xl text-center md:text-left">
            Topologies
          </p>
        </div>

        <div className="footer-marketing-bar footer-grain-overlay relative overflow-hidden">
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
            <div className="flex min-w-0 items-center gap-4 md:gap-5">
              <div
                className="relative h-14 w-14 shrink-0 md:h-16 md:w-16"
                aria-hidden
              >
                <svg
                  className="h-full w-full"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="32" cy="32" r="28" fill="#fafafa" />
                  <rect x="8" y="20" width="48" height="4" fill="#a3a3a3" />
                  <rect x="12" y="30" width="40" height="4" fill="#a3a3a3" />
                  <rect x="8" y="40" width="48" height="4" fill="#a3a3a3" />
                </svg>
              </div>
              <p className="font-footerBrand text-[clamp(1rem,1.1rem+0.5vw,1.5rem)] font-normal uppercase leading-[1.08] tracking-tight text-neutral-950">
                Topologies · Thought topology lab.
              </p>
            </div>
            <Link
              to="/app"
              className="group inline-flex w-full max-w-md shrink-0 items-stretch overflow-hidden rounded-full border border-neutral-900/10 shadow-[0_14px_44px_rgba(0,0,0,0.2)] transition-transform duration-200 hover:-translate-y-0.5 md:w-auto md:max-w-none"
            >
              <span className="flex flex-1 items-center justify-center bg-neutral-950 px-6 py-4 text-center text-xs font-bold uppercase tracking-[0.14em] text-white md:px-10 md:text-sm">
                Open workspace
              </span>
              <span className="flex w-14 shrink-0 items-center justify-center bg-white text-neutral-950 md:w-16">
                <svg
                  className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M7 17L17 7M17 7H9M17 7v8" />
                </svg>
              </span>
            </Link>
          </div>
          <div className="relative border-t border-neutral-900/10 bg-neutral-400">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-4 text-xs text-neutral-900 md:flex-row md:px-10">
              <p className="m-0 text-center md:text-left">
                © {new Date().getFullYear()} Topologies of Thoughts. All rights reserved.
              </p>
              <ul className="m-0 flex list-none flex-wrap justify-center gap-x-6 gap-y-2">
                <li>
                  <Link to="/" className="text-neutral-800 no-underline transition-colors hover:text-neutral-950">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-neutral-800 no-underline transition-colors hover:text-neutral-950">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="text-neutral-800 no-underline transition-colors hover:text-neutral-950">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/docs" className="text-neutral-800 no-underline transition-colors hover:text-neutral-950">
                    Docs
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-neutral-800 no-underline transition-colors hover:text-neutral-950">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/app" className="text-neutral-800 no-underline transition-colors hover:text-neutral-950">
                    App
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
