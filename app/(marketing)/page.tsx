import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Scrap Finance Partners — Turn yard chaos into board-grade numbers",
  description:
    "Stock that doesn't match reality. Margin that's a guess. Transport cost nobody can see. We fix it — as a hands-on consultancy, and as YardLedger, the reporting software built for the yard.",
};

const problems = [
  { title: "Stock doesn't match reality", body: "Physical stock and system stock disagree, and nobody has time to find out why." },
  { title: "Margin is a guess", body: "Gross margin is reported late, or not broken down by material category." },
  { title: "Transport cost is invisible", body: "No cost-per-tonne view, so overspend is only found at month-end." },
  { title: "Reports nobody trusts", body: "Commercial, Operations and Finance all quote different numbers." },
  { title: "Manual spreadsheet risk", body: "Multiple spreadsheet versions in circulation, with no single source of truth." },
  { title: "No finance business partner", body: "Can't justify a full-time FD, but decisions are made without finance input." },
];

const stats = [
  { value: "25+ yrs", label: "In finance" },
  { value: "18 yrs", label: "Inside UK scrap metal" },
  { value: "£21k", label: "Supplier overpayment recovered" },
  { value: "6→3 days", label: "Transport reporting cut" },
];

const services = [
  { n: "01", title: "Numbers That Matter, Every Month", body: "The data is there. We help connect the numbers with what is happening on the yard floor." },
  { n: "02", title: "Stock Accuracy & Reconciliation", body: "Closing the gap between system stock and what is physically happening in your yard." },
  { n: "03", title: "Systems, Reporting & Data Improvements", body: "Improving reporting, connecting operational data and creating better visibility for decision making." },
  { n: "04", title: "Transport Finance & Cost Centre Control", body: "Understanding where transport costs are going and improving visibility across your fleet operations." },
];

const caseStudies = [
  { kicker: "Audit & Recovery", title: "Incorrect pricing traced and reversed", body: "Copper pricing was being used against old rolled aluminium material.", figure: "£21k recovered" },
  { kicker: "Process & Systems", title: "Halving transport reporting time", body: "Streamlined cost centres, fuel allocations and manual adjustments.", figure: "6 days → 3 days" },
  { kicker: "Finance Process", title: "Accelerating month-end reporting", body: "Removed unnecessary manual steps from the close.", figure: "Down to ~10 working days" },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative border-b border-hairline bg-graphite overflow-hidden">
        <div className="absolute inset-0 bg-grid-fine opacity-40 pointer-events-none" />
        <div className="container mx-auto max-w-7xl px-4 py-20 md:py-28 relative grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-copper mb-6">
              For UK scrap &amp; recycling businesses
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] text-ink">
              Turn yard chaos into board&#8209;grade numbers.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-ink-secondary leading-relaxed max-w-xl">
              Stock that doesn&rsquo;t match reality. Margin that&rsquo;s a guess. Transport cost nobody can see. We fix it &mdash; as a hands&#8209;on consultancy, and as YardLedger, the reporting software built for the yard.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/health-check"
                className="inline-flex items-center justify-center h-12 px-6 bg-copper hover:bg-copper-bright text-white font-semibold transition-colors"
              >
                Book a Health Check &mdash; &pound;2,500 <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/software"
                className="inline-flex items-center justify-center h-12 px-6 border border-hairline hover:border-hairline-bright text-ink font-semibold transition-colors"
              >
                See YardLedger
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {["26 years inside scrap finance", "Fred · Xero · D365 fluent"].map((tag) => (
                <span key={tag} className="font-mono text-xs uppercase tracking-wider text-ink-secondary border border-hairline px-3 py-1.5">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="border-2 border-hairline bg-panel p-6">
            <div className="flex items-center justify-between mb-4">
              <p className="font-mono text-xs uppercase tracking-widest text-ink-muted">Yard health — this month</p>
              <span className="font-mono text-[10px] uppercase tracking-widest text-copper border border-copper/40 px-2 py-1">
                Live in YardLedger
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="border border-hairline p-4">
                <p className="font-mono text-[10px] uppercase tracking-widest text-ink-muted mb-2">Throughput</p>
                <p className="text-2xl font-mono text-ink">4,280 <span className="text-sm text-ink-secondary">t</span></p>
                <p className="text-xs text-copper mt-1">▲ 3.1% vs last month</p>
              </div>
              <div className="border border-hairline p-4">
                <p className="font-mono text-[10px] uppercase tracking-widest text-ink-muted mb-2">Gross margin</p>
                <p className="text-2xl font-mono text-ink">18.6%</p>
                <p className="text-xs text-copper mt-1">▲ 0.8pp vs last month</p>
              </div>
              <div className="border border-hairline p-4">
                <p className="font-mono text-[10px] uppercase tracking-widest text-ink-muted mb-2">Transport £/tonne</p>
                <p className="text-2xl font-mono text-ink">£14.20</p>
                <p className="text-xs text-ink-muted mt-1">▼ up £0.60 — flagged</p>
              </div>
              <div className="border border-hairline p-4">
                <p className="font-mono text-[10px] uppercase tracking-widest text-ink-muted mb-2">Debtor days</p>
                <p className="text-2xl font-mono text-ink">42</p>
                <p className="text-xs text-copper mt-1">▲ 3 days better</p>
              </div>
            </div>
            <Link href="/dashboard-demo" className="mt-4 inline-flex items-center text-sm text-copper hover:text-copper-bright">
              Open the full dashboard demo →
            </Link>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="border-b border-hairline">
        <div className="container mx-auto max-w-6xl px-4 py-16 md:py-24">
          <p className="font-mono text-xs uppercase tracking-widest text-copper mb-4">The problem</p>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-ink mb-10 max-w-xl">
            Why the numbers stop being trusted
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {problems.map((p) => (
              <div key={p.title} className="border border-hairline p-6">
                <h3 className="font-semibold text-ink mb-2">{p.title}</h3>
                <p className="text-sm text-ink-secondary leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-hairline bg-panel">
        <div className="container mx-auto max-w-6xl px-4 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="border-t border-hairline pt-4">
                <p className="text-3xl md:text-4xl font-mono font-bold text-copper">{s.value}</p>
                <p className="mt-2 font-mono text-xs uppercase tracking-widest text-ink-secondary">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services teaser */}
      <section className="border-b border-hairline">
        <div className="container mx-auto max-w-6xl px-4 py-16 md:py-24">
          <p className="font-mono text-xs uppercase tracking-widest text-copper mb-4">How we help</p>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-ink mb-3 max-w-xl">
            A few of the ways we bring finance under control
          </h2>
          <p className="text-ink-secondary max-w-2xl mb-12">
            Ten specific fixes, one goal: numbers the owner can act on.{" "}
            <Link href="/services" className="text-copper hover:text-copper-bright">See all ten →</Link>
          </p>
          <div className="border-2 border-hairline">
            {services.map((s, i) => (
              <div
                key={s.n}
                className={`flex items-start gap-6 p-6 ${i !== services.length - 1 ? "border-b-2 border-hairline" : ""}`}
              >
                <span className="text-2xl font-bold font-mono text-copper flex-shrink-0">{s.n}</span>
                <div>
                  <h3 className="font-semibold text-ink">{s.title}</h3>
                  <p className="text-sm text-ink-secondary mt-1 max-w-xl">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two ways to work with us */}
      <section className="border-b border-hairline">
        <div className="container mx-auto max-w-6xl px-4 py-16 md:py-24">
          <p className="font-mono text-xs uppercase tracking-widest text-copper mb-4">Two ways to work with us</p>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-ink mb-10 max-w-2xl">
            Hands-on consultancy, or software that does it for you
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-2 border-hairline p-8">
              <span className="font-mono text-xs uppercase tracking-wider text-ink-secondary border border-hairline px-2 py-1">Consultancy</span>
              <h3 className="text-2xl font-semibold text-ink mt-4 mb-3">Scrap Finance Partners</h3>
              <p className="text-sm text-ink-secondary leading-relaxed mb-6">
                A finance operator who already knows Fred, EWC codes and stock sheets — working alongside your team.
              </p>
              <ul className="space-y-2 text-sm text-ink-secondary mb-6">
                <li>— Health Check diagnostic, £2,500 fixed</li>
                <li>— Fixed-scope improvement projects</li>
                <li>— Tailored ongoing business partner support</li>
              </ul>
              <Link href="/services" className="inline-flex items-center text-sm font-semibold text-copper hover:text-copper-bright">
                Explore what you get <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="border-2 border-hairline p-8">
              <span className="font-mono text-xs uppercase tracking-wider text-copper border border-copper/40 px-2 py-1">Software</span>
              <h3 className="text-2xl font-semibold text-ink mt-4 mb-3">YardLedger</h3>
              <p className="text-sm text-ink-secondary leading-relaxed mb-6">
                The reporting layer built for scrap yards — stock, margin, transport and cash in one owner-grade dashboard.
              </p>
              <ul className="space-y-2 text-sm text-ink-secondary mb-6">
                <li>— Grade-level stock bridge</li>
                <li>— Margin per tonne by material</li>
                <li>— Board-ready PDF snapshot</li>
              </ul>
              <Link href="/software" className="inline-flex items-center text-sm font-semibold text-copper hover:text-copper-bright">
                See YardLedger <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case studies teaser */}
      <section className="border-b border-hairline">
        <div className="container mx-auto max-w-6xl px-4 py-16 md:py-24">
          <p className="font-mono text-xs uppercase tracking-widest text-copper mb-4">Proven results</p>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-ink mb-10">Real yards, real numbers</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {caseStudies.map((c) => (
              <div key={c.kicker} className="border border-hairline p-6">
                <p className="font-mono text-xs uppercase tracking-widest text-ink-muted mb-2">{c.kicker}</p>
                <h3 className="font-semibold text-ink mb-2">{c.title}</h3>
                <p className="text-sm text-ink-secondary leading-relaxed mb-4">{c.body}</p>
                <p className="text-xl font-mono text-copper">{c.figure}</p>
              </div>
            ))}
          </div>
          <Link href="/case-studies" className="inline-flex items-center text-sm text-copper hover:text-copper-bright">
            See all case studies →
          </Link>
        </div>
      </section>

      {/* Founder teaser */}
      <section className="border-b border-hairline bg-panel">
        <div className="container mx-auto max-w-3xl px-4 py-16 md:py-24">
          <p className="font-mono text-xs uppercase tracking-widest text-copper mb-4">Why trust us</p>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-ink mb-6">
            Built from real yard experience, not theory
          </h2>
          <p className="text-lg text-ink-secondary leading-relaxed mb-8 max-w-xl">
            25+ years working in finance, including 18 years supporting UK scrap metal and recycling businesses — building the reports, fixing the stock sheets, sitting in the transport performance meetings.
          </p>
          <Link
            href="/founder"
            className="inline-flex items-center justify-center h-12 px-6 border border-hairline hover:border-hairline-bright text-ink font-semibold transition-colors"
          >
            Meet the founder
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section>
        <div className="container mx-auto max-w-3xl px-4 py-16 md:py-24">
          <p className="font-mono text-xs uppercase tracking-widest text-copper mb-4">Start here</p>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-ink mb-4">
            Book the Scrap Yard Finance Health Check
          </h2>
          <p className="text-lg text-ink-secondary leading-relaxed mb-8 max-w-xl">
            A one-week diagnostic across stock, margin, cash, Fred/Xero data and controls. Written findings, a recoverable-value estimate and a 30-day action plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/health-check"
              className="inline-flex items-center justify-center h-12 px-6 bg-copper hover:bg-copper-bright text-white font-semibold transition-colors"
            >
              Book a Health Check — £2,500 <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-12 px-6 text-ink font-semibold hover:text-copper transition-colors"
            >
              Talk to us first
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
