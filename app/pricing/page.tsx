import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="flex flex-col">
      {/* Header — massive type, full width */}
      <section className="border-b border-hairline bg-graphite">
        <div className="container px-4 py-20 md:py-28">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-ink max-w-4xl">
            Fixed monthly pricing.
            <br />
            <span className="text-copper">No surprises.</span>
          </h1>
          <p className="mt-8 text-xl text-ink-secondary max-w-xl leading-relaxed">
            No hourly rates. No surprise invoices. No "scope creep". You pay a fixed monthly fee and get the full service. Cancel any time.
          </p>
        </div>
      </section>

      {/* Retainers — stacked editorial layout, not cards */}
      <section className="border-b border-hairline">
        <div className="container px-4 py-16 md:py-24">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-copper mb-12">Monthly Retainers</p>

          <div className="space-y-0">
            {/* Level 1 */}
            <div className="py-10 border-t border-hairline first:border-t-0">
              <div className="grid lg:grid-cols-[1fr_1.5fr_200px] gap-8 items-start">
                <div>
                  <p className="text-3xl md:text-4xl font-bold font-mono text-copper">£500<span className="text-lg text-ink-secondary">/mo</span></p>
                  <p className="mt-2 text-sm text-ink-secondary">Level 1</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ink mb-3">For owner-managed yards</h3>
                  <p className="text-ink-secondary mb-4">Monthly visibility for yards that have never had clear numbers before.</p>
                  <ul className="space-y-2">
                    {["Monthly numbers that match your yard", "Stock position report — ground truth", "What the numbers mean — in plain English", "One monthly email summary", "Improvement tracker"].map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-ink-secondary">
                        <Check className="h-4 w-4 text-copper flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:text-right">
                  <Button asChild className="bg-copper hover:bg-copper-bright text-white border-0 rounded-sm">
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Level 2 — highlighted */}
            <div className="py-10 border-t border-hairline bg-panel -mx-4 px-4">
              <div className="grid lg:grid-cols-[1fr_1.5fr_200px] gap-8 items-start">
                <div>
                  <div className="inline-block bg-copper text-white text-xs font-mono uppercase tracking-wider px-2 py-1 mb-3">Most Popular</div>
                  <p className="text-3xl md:text-4xl font-bold font-mono text-copper">£1,000<span className="text-lg text-ink-secondary">/mo</span></p>
                  <p className="mt-2 text-sm text-ink-secondary">Level 2</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ink mb-3">For growing operators</h3>
                  <p className="text-ink-secondary mb-4">Rhythm, forecasting, and a monthly business partner who knows scrap.</p>
                  <ul className="space-y-2">
                    {["Everything in Level 1", "Cash flow forecast you can plan around", "Monthly business partner meeting", "Margin and stock movement analysis", "Transport and commercial KPI pack", "Action tracker — what to do, by when"].map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-ink-secondary">
                        <Check className="h-4 w-4 text-copper flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:text-right">
                  <Button asChild className="bg-copper hover:bg-copper-bright text-white border-0 rounded-sm">
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Level 3 */}
            <div className="py-10 border-t border-hairline">
              <div className="grid lg:grid-cols-[1fr_1.5fr_200px] gap-8 items-start">
                <div>
                  <p className="text-3xl md:text-4xl font-bold font-mono text-copper">£2,000+<span className="text-lg text-ink-secondary">/mo</span></p>
                  <p className="mt-2 text-sm text-ink-secondary">Level 3</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ink mb-3">For serious operators</h3>
                  <p className="text-ink-secondary mb-4">Outsourced Finance Director support for yards doing £10m+ turnover.</p>
                  <ul className="space-y-2">
                    {["Everything in Level 2", "Strategic support and planning", "Board-style management pack", "KPI review and challenge meetings", "System and process improvement roadmap", "Payroll, commission and coding advisory", "Direct owner decision support"].map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-ink-secondary">
                        <Check className="h-4 w-4 text-copper flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:text-right">
                  <Button asChild className="bg-copper hover:bg-copper-bright text-white border-0 rounded-sm">
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-hairline">
            <p className="text-ink-secondary text-sm max-w-2xl">
              <strong className="text-ink">What this replaces:</strong> A full-time Finance Director costs £80,000–£120,000 plus benefits. A part-time bookkeeper gives you numbers six weeks late with no context. We sit in the middle — experienced, fast, and focused on scrap.
            </p>
          </div>
        </div>
      </section>

      {/* Sprints — clean list */}
      <section className="border-b border-hairline bg-graphite">
        <div className="container px-4 py-16 md:py-24">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-copper mb-12">One-Off Diagnostic Sprints</p>

          <div className="space-y-0">
            {[
              { title: "Scrap Yard Finance Health Check", price: "£750 – £1,500", desc: "Review reporting, stock, margin, processes and systems. Deliver a red/amber/green improvement report with priorities and costed fixes." },
              { title: "Stock Accuracy Sprint", price: "£1,500 – £3,000", desc: "Deep dive into stock discrepancies. Find what is missing, why it is missing, and how to stop it happening. Typically recovers £20k–£100k in lost stock value." },
              { title: "Fred System Setup", price: "£1,000 – £2,500", desc: "New site configuration, EWC code overhaul, transport module activation, stock sheet build. Done properly so it works from day one." },
              { title: "Commission Model Fix", price: "£750 – £1,500", desc: "Audit existing commission calculations, fix errors, build a model that matches your deal sheets, and train your team to run it." },
            ].map((sprint, i) => (
              <div key={i} className="py-8 border-t border-hairline first:border-t-0">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-ink mb-2">{sprint.title}</h3>
                    <p className="text-ink-secondary text-sm max-w-2xl">{sprint.desc}</p>
                  </div>
                  <p className="text-xl font-bold font-mono text-copper md:text-right flex-shrink-0">{sprint.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
