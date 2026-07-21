import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Know your margin per tonne | Scrap Finance Partners",
  description:
    "26 years in UK scrap metal finance. Fred system specialist. Stock you can trust, margin by grade, month-end in days not weeks. Built for yards.",
};

const pains = [
  {
    title: "Your stock figure is wrong",
    body: "Weighbridge says one thing, Fred says another, the accounts say a third. Shrinkage, grade misclassification and keying errors hide in the gap — and it comes straight off your margin.",
    fix: "Stock reconciled by grade, discrepancies traced to the ticket, monthly position you can act on.",
  },
  {
    title: "You know turnover, not margin",
    body: "LME moves every day. Buy prices move every morning. Most yards can't say what they made per tonne on copper last month — only what went through the bank.",
    fix: "Gross margin by material, per tonne, every month. Loss-making grades and routes flagged.",
  },
  {
    title: "HMRC has scrap on its list",
    body: "Self-billing that isn't watertight can cost you your input VAT. Taskforces, carousel fraud clawbacks, SMDA record-keeping — the burden lands on you.",
    fix: "Self-bill paperwork checked, records tight, no surprises when the letter comes.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-graphite text-ink">
      {/* HERO */}
      <section className="border-b border-hairline pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="container mx-auto max-w-7xl px-4">
          <p className="font-mono text-xs uppercase tracking-widest text-copper mb-6">
            26 years in scrap. Fred inside out.
          </p>
          <h1 className="display-xl max-w-4xl">
            Your stock figures are wrong. We find where the margin went.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-ink-secondary max-w-2xl leading-relaxed">
            Scrap Finance Partners connects your weighbridge to your balance
            sheet. Real stock positions, margin per tonne by grade, month-end
            you can trust — without paying for a full-time finance director.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center">
            <Link
              href="/health-check"
              className="inline-flex items-center justify-center h-12 px-6 bg-copper hover:bg-copper-bright text-white font-semibold transition-colors"
            >
              Get a Health Check <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center h-12 px-6 border border-hairline hover:border-hairline-bright text-ink font-semibold transition-colors"
            >
              See Pricing
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs text-ink-muted">
            <span className="flex items-center gap-2"><span className="text-copper font-bold">→</span> Month-end: 7 days down to 2</span>
            <span className="flex items-center gap-2"><span className="text-copper font-bold">→</span> No full-time FD salary</span>
            <span className="flex items-center gap-2"><span className="text-copper font-bold">→</span> Built for UK yards</span>
          </div>
        </div>
      </section>

      {/* PROOF — example monthly report */}
      <section className="border-b border-hairline bg-panel py-20 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-copper mb-4">
              What control looks like
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight mb-6">
              See the leak before you pay for it.
            </h2>
            <p className="text-lg text-ink-secondary leading-relaxed mb-8">
              Gross margin by category, transport cost per tonne, verified
              stock positions. No spreadsheet gymnastics — the exact numbers
              you need to run the yard.
            </p>
            <ul className="space-y-3">
              {[
                "Monthly stock position you can actually trust",
                "Gross margin by material category, per tonne",
                "Transport cost per tonne, route by route",
                "Debtor days and cash flow you see coming",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-copper font-bold font-mono shrink-0">→</span>
                  <span className="text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-graphite border-2 border-hairline p-6">
            <div className="flex items-center justify-between border-b border-hairline pb-4 mb-6">
              <span className="font-mono text-xs text-ink-muted uppercase tracking-wider">
                Example monthly report
              </span>
              <span className="font-mono text-xs text-copper">MTH-END</span>
            </div>
            <h3 className="text-xl font-semibold text-ink mb-4">Copper margin drop — flagged</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-hairline p-4 bg-panel">
                <p className="font-mono text-xs text-ink-muted uppercase mb-1">Stock variance</p>
                <p className="text-2xl font-semibold text-red font-mono">-£12,040</p>
                <p className="text-xs text-ink-secondary mt-2">Scale calibration issue suspected</p>
              </div>
              <div className="border border-hairline p-4 bg-panel">
                <p className="font-mono text-xs text-ink-muted uppercase mb-1">Gross margin Cu</p>
                <p className="text-2xl font-semibold text-green font-mono">18.5%</p>
                <p className="text-xs text-ink-secondary mt-2">Target: 22.0%</p>
              </div>
            </div>
            <div className="border border-hairline border-l-2 border-l-copper bg-panel p-4 mt-4">
              <p className="font-mono text-xs text-ink-muted uppercase mb-1">What the numbers mean</p>
              <p className="text-sm text-ink-secondary leading-relaxed">
                Variance traced to weighbridge two. Recalibrate, re-run last
                week&apos;s tickets, recover the difference from the supplier
                self-bill. Owner action: one phone call.
              </p>
            </div>
            <Link href="/dashboard-demo" className="inline-flex items-center mt-5 text-sm text-copper hover:text-copper-bright">
              See the full example dashboard <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PAINS */}
      <section className="border-b border-hairline py-20 md:py-24">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">
            Three ways yards lose money without seeing it
          </h2>
          <div className="space-y-12">
            {pains.map((p) => (
              <div key={p.title} className="border-2 border-hairline bg-panel p-6">
                <h3 className="text-lg font-semibold text-ink mb-3">{p.title}</h3>
                <p className="text-sm text-ink-secondary leading-relaxed mb-4 max-w-xl">{p.body}</p>
                <p className="text-sm text-ink leading-relaxed max-w-xl">
                  <span className="font-mono text-xs uppercase tracking-wider text-copper block mb-1">The fix</span>
                  {p.fix}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WORKING WITH US GOES */}
      <section className="border-b border-hairline bg-panel py-20 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <p className="font-mono text-xs uppercase tracking-widest text-copper mb-4">How it works</p>
          <h2 className="mb-12 max-w-2xl">
            No retained mystery. Three steps, priced up front.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                n: "01",
                title: "Health Check",
                body: "One week inside your numbers. Stock, margin, VAT, cash — a written red/amber/green report showing what's broken and what it costs you a month.",
                price: "£750 – £1,500, fixed",
              },
              {
                n: "02",
                title: "Fix the gaps",
                body: "Targeted sprints on what the Health Check found: stock accuracy, Fred setup, margin reporting. Each priced and scoped before we start.",
                price: "From £1,000 per sprint",
              },
              {
                n: "03",
                title: "Numbers every month",
                body: "Month-end in days, margin per tonne by grade, and someone who tells you what the numbers mean — without a full-time FD salary.",
                price: "From £500/month, cancel anytime",
              },
            ].map((s) => (
              <div key={s.n} className="advisory-card p-8">
                <p className="font-mono text-2xl font-bold text-copper mb-4">{s.n}</p>
                <h3 className="text-xl font-semibold text-ink mb-3">{s.title}</h3>
                <p className="text-sm text-ink-secondary leading-relaxed mb-5">{s.body}</p>
                <p className="font-mono text-sm text-ink border-t border-hairline pt-4">{s.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER CREDIBILITY */}
      <section className="border-b border-hairline bg-navy py-20 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-copper mb-4">Who you&apos;re dealing with</p>
            <h2 className="text-ink mb-6">
              26 years in scrap metal finance. Started on the weighbridge.
            </h2>
            <p className="text-lg text-ink-secondary leading-relaxed mb-8 max-w-2xl">
              Not a generalist accountant learning your industry on your time.
              Fred inside out, LME pricing, grade margins, self-billing VAT —
              the specific problems of UK yards, seen dozens of times before
              they land on your desk.
            </p>
            <Link
              href="/founder"
              className="inline-flex items-center text-copper hover:text-copper-bright font-semibold"
            >
              Read the full background <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="border border-hairline p-8">
            <ul className="space-y-4">
              {[
                "18 years specialising in UK scrap metal",
                "Fred system specialist — setup to reporting",
                "Month-end cut from 7 days to 2, repeatedly",
                "Stock recoveries of £20k–£100k found in sprints",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink-secondary">
                  <span className="text-copper font-bold font-mono shrink-0">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Start with a Health Check.
          </h2>
          <p className="text-lg text-ink-secondary max-w-xl mx-auto mb-8">
            Fixed price, one week, written findings. From £500/month after that
            if you want us to stay. Cancel anytime. No surprises.
          </p>
          <Link
            href="/health-check"
            className="inline-flex items-center justify-center h-12 px-8 bg-copper hover:bg-copper-bright text-white font-semibold transition-colors"
          >
            Get Your Health Check <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
