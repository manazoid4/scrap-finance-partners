import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Pricing | Scrap Finance Partners",
  description:
    "Flexible support designed around your business. Diagnostic reviews, improvement projects and ongoing finance business partner support — no one-size-fits-all packages.",
}

const comparisonRows = [
  { feature: "Monthly yard finance pack", l1: true, l2: true, l3: true },
  { feature: "Stock position by grade", l1: true, l2: true, l3: true },
  { feature: "Gross margin by material category", l1: true, l2: true, l3: true },
  { feature: "Fred/Xero data quality log", l1: true, l2: true, l3: true },
  { feature: "Monthly owner action list", l1: true, l2: true, l3: true },
  { feature: "Cash flow forecast and debtor pressure list", l1: false, l2: true, l3: true },
  { feature: "Monthly business partner meeting", l1: false, l2: true, l3: true },
  { feature: "Margin per tonne by grade", l1: false, l2: true, l3: true },
  { feature: "Transport cost per tonne", l1: false, l2: true, l3: true },
  { feature: "Loss-making grade and route flags", l1: false, l2: true, l3: true },
  { feature: "Board-style management pack", l1: false, l2: false, l3: true },
  { feature: "Quarterly bank/accountant pack", l1: false, l2: false, l3: true },
  { feature: "Forecast, budget and scenario model", l1: false, l2: false, l3: true },
  { feature: "KPI review and challenge meetings", l1: false, l2: false, l3: true },
  { feature: "Payroll, commission and coding advisory", l1: false, l2: false, l3: true },
  { feature: "Direct owner decision support", l1: false, l2: false, l3: true },
]

const levels = [
  {
    title: "Level 1",
    price: "£500 /mo",
    description: "For owner-managed yards that need to see their numbers clearly for the first time.",
    features: [
      "Monthly numbers that match your yard",
      "Stock position report — ground truth",
      "What the numbers mean — in plain English",
      "One monthly email summary",
      "Improvement tracker — what we fixed and what is next",
    ],
  },
  {
    title: "Level 2",
    price: "£1,000 /mo",
    description: "For growing yards that need margin control, transport analysis, and active cash management.",
    features: [
      "Everything in Level 1",
      "Margin & stock movement analysis",
      "Transport & commercial KPI pack",
      "Cash flow forecast",
      "Monthly business partner meeting",
      "Action tracker (what to do, by when)",
    ],
  },
  {
    title: "Level 3",
    price: "£2,000 /mo",
    description: "For multi-site groups needing strategic financial direction and board-level reporting.",
    features: [
      "Everything in Level 2",
      "Board-style management pack",
      "Strategic support & planning",
      "KPI review & challenge meetings",
      "System & process improvement roadmap",
      "Direct owner decision support",
    ],
  },
]

const improvementProjectAreas = [
  "Stock Accuracy",
  "Margin Reporting",
  "Transport cost visibility",
  "Systems reporting",
  "Finance Processes",
]

const sprintData = [
  {
    title: "Scrap Yard Finance Health Check",
    price: "£750 – £1,500",
    description: "Review reporting, stock, margin, processes and systems. Deliver a red/amber/green improvement report with priorities and costed fixes.",
  },
  {
    title: "Stock Accuracy Sprint",
    price: "£1,500 – £3,000",
    description: "Deep dive into stock discrepancies. Find what is missing, why it is missing, and how to stop it happening. Typically recovers £20k–£100k in lost stock value.",
  },
  {
    title: "Fred System Setup",
    price: "£1,000 – £2,500",
    description: "New site configuration, EWC code overhaul, transport module activation, stock sheet build. Done properly so it works from day one.",
  },
  {
    title: "Commission Model Fix",
    price: "£750 – £1,500",
    description: "Audit existing commission calculations, fix errors, build a model that matches your deal sheets, and train your team to run it.",
  },
]

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="border-b border-hairline">
        <div className="container mx-auto max-w-3xl px-4 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-ink">
            Flexible support designed around your business
          </h1>
          <p className="mt-6 text-lg md:text-xl text-ink-secondary leading-relaxed">
            Every recycling business operates differently. The level of support depends on your current challenges, systems and objectives. We support yards through:
          </p>

          <div className="mt-12 space-y-10">
            <div className="border-t border-hairline pt-8">
              <h2 className="font-mono text-xs uppercase tracking-widest text-copper mb-3">
                Diagnostic Reviews
              </h2>
              <p className="text-ink-secondary leading-relaxed">
                A focused review of your current processes, reporting, stock controls and margin visibility — leading into Improvement Projects covering:
              </p>
              <ul className="mt-4 space-y-2">
                {improvementProjectAreas.map((area) => (
                  <li key={area} className="text-ink-secondary pl-4 border-l border-hairline">
                    {area}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-hairline pt-8">
              <h2 className="font-mono text-xs uppercase tracking-widest text-copper mb-3">
                Ongoing Finance Business Partner Support
              </h2>
              <p className="text-ink-secondary leading-relaxed">
                Regular support for owners who want better visibility, stronger controls and clearer decision-making without the cost of a full-time senior finance resource.
              </p>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8 border-t border-hairline pt-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-copper mb-2">What this replaces</p>
              <p className="text-ink-secondary text-sm leading-relaxed">
                Not a bookkeeper. A finance operator who understands Fred, stock,
                transport and margin.
              </p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-copper mb-2">Want software instead?</p>
              <p className="text-ink-secondary text-sm leading-relaxed">
                YardLedger turns your Fred and Xero exports into the same
                reports, self-serve, from £149/month.{" "}
                <a href="/software" className="text-copper hover:text-copper-bright">See YardLedger pricing →</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="container mx-auto max-w-5xl px-4 py-16 md:py-24">
          <div className="space-y-16">
            {levels.map((level) => (
              <div key={level.title} className="border-t border-hairline pt-10 grid md:grid-cols-[1fr_2fr] gap-8">
                <div>
                  <h3 className="font-mono text-sm uppercase tracking-widest text-copper mb-2">{level.title}</h3>
                  <p className="text-3xl font-semibold font-mono text-ink">{level.price}</p>
                  <p className="mt-4 text-sm text-ink-secondary leading-relaxed">{level.description}</p>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center text-sm text-copper hover:text-copper-bright"
                  >
                    Start with {level.title} <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
                <ul className="space-y-3">
                  {level.features.map((feature) => (
                    <li key={feature} className="text-sm text-ink-secondary pl-4 border-l border-hairline">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="container mx-auto max-w-5xl px-4 py-16 md:py-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-ink mb-10">Compare what you get</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead className="font-mono text-[10px] uppercase tracking-widest text-ink-muted border-b border-hairline">
                <tr>
                  <th className="py-4 font-normal">What you get</th>
                  <th className="py-4 font-normal text-center">Level 1</th>
                  <th className="py-4 font-normal text-center text-copper">Level 2</th>
                  <th className="py-4 font-normal text-center">Level 3</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-hairline">
                {comparisonRows.map((row) => (
                  <tr key={row.feature}>
                    <td className="py-4 pr-4 text-ink">{row.feature}</td>
                    <td className="py-4 text-center text-copper">{row.l1 ? "✓" : "—"}</td>
                    <td className="py-4 text-center text-copper">{row.l2 ? "✓" : "—"}</td>
                    <td className="py-4 text-center text-copper">{row.l3 ? "✓" : "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="container mx-auto max-w-3xl px-4 py-16 md:py-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-ink mb-2">One-off Sprints</h2>
          <p className="text-ink-secondary max-w-2xl mb-10">
            Don&apos;t need a monthly service? We run targeted diagnostic and fix projects.
          </p>
          <div className="space-y-10">
            {sprintData.map((sprint) => (
              <div key={sprint.title} className="border-t border-hairline pt-8">
                <h3 className="text-lg font-semibold text-ink mb-1">{sprint.title}</h3>
                <p className="font-mono text-copper mb-3">{sprint.price}</p>
                <p className="text-ink-secondary leading-relaxed max-w-xl">{sprint.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto max-w-3xl px-4 py-16 md:py-24">
          <p className="text-xl font-semibold text-ink mb-4">No one-size-fits-all packages.</p>
          <p className="text-lg text-ink-secondary leading-relaxed mb-2">
            We tailor our support around your business, focusing on the areas that improve visibility, control and profitability.
          </p>
          <p className="text-lg text-ink-secondary leading-relaxed mb-10">
            Contact us to discuss how we can help.
          </p>
          <Link
            href="/health-check"
            className="inline-flex items-center justify-center h-12 px-6 bg-copper hover:bg-copper-bright text-white font-semibold transition-colors"
          >
            Get a Health Check <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
