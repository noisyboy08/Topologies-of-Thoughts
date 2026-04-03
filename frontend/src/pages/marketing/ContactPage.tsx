import { MarketingShell } from '../../components/marketing/MarketingShell';
import { ExpertLeadForm } from '../../components/marketing/ExpertLeadForm';

export function ContactPage() {
  return (
    <MarketingShell active="contact">
      <section className="bg-[#050508] px-6 py-16 md:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-xs uppercase tracking-[0.14em] text-[#6b7280]">Contact</p>
          <h1 className="mb-4 max-w-2xl text-3xl font-bold tracking-tight text-white md:text-4xl">
            Talk to the team
          </h1>
          <p className="mb-10 max-w-2xl text-sm leading-relaxed text-[#9ca3af]">
            Questions about deployment, education, or enterprise? Use the form—submissions land in{' '}
            <code className="rounded bg-white/[0.06] px-1 py-0.5 text-xs text-[#e8eaf0]">expert_leads</code> and
            optionally trigger email via Resend.
          </p>

          <div className="mx-auto max-w-xl">
            <div id="expert" className="scroll-mt-24">
              <h2 className="mb-4 text-lg font-semibold text-white">Talk to an expert</h2>
              <ExpertLeadForm />
            </div>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
