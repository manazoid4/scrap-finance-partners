import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Pricing | Scrap Finance Partners",
  description:
    "Flexible support designed around your business. Diagnostic reviews, improvement projects and ongoing finance business partner support — no one-size-fits-all packages.",
}

const supportPillars = [
  {
    tag: "Diagnostic",
    title: "Diagnostic Reviews",
    body: "A focused review of your current processes, reporting, stock controls and margin visibility.",
  },
  {
    tag: "Project",
    title: "Improvement Projects",
    body: "Fixed-scope work on the specific area that is costing you money or time.",
    items: [
      "Stock Accuracy",
      "Margin Reporting",
      "Transport Cost Visibility",
      "Systems Reporting",
      "Finance Processes",
    ],
  },
  {
    tag: "Ongoing",
    title: "Ongoing Finance Business Partner Support",
    body: "Regular support for owners who want better visibility, stronger controls and clearer decision-making — without the cost of a full-time senior finance resource.",
  },
]

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative border-b border-hairline bg-graphite overflow-hidden">
        <div className="absolute inset-0 bg-grid-fine opacity-40 pointer-events-none" />
        <div className="container px-4 py-24 md:py-32 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-ink mb-8">
              Flexible support designed around your business
            </h1>
            <p className="text-xl text-ink-secondary leading-relaxed font-light">
              Every recycling business operates differently. The level of support depends on your current challenges, systems and objectives.
            </p>
          </div>

          <div className="mt-12 border-t border-hairline pt-8">
            <p className="font-mono text-xs uppercase tracking-wider text-copper mb-2">Want software instead?</p>
            <p className="text-ink-secondary text-sm leading-relaxed">
              YardLedger turns your Fred and Xero exports into the same
              reports, self-serve, from £149/month.{" "}
              <a href="/software" className="text-copper hover:text-copper-bright">See YardLedger pricing →</a>
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="container mx-auto max-w-4xl px-4 py-16 md:py-24">
          <p className="text-lg text-ink-secondary leading-relaxed mb-16">We support yards through:</p>
          <div className="space-y-16">
            {supportPillars.map((pillar) => (
              <div key={pillar.title} className="border-t border-hairline pt-10">
                <p className="font-mono text-xs uppercase tracking-widest text-copper mb-3">{pillar.tag}</p>
                <h3 className="text-2xl font-semibold text-ink mb-3">{pillar.title}</h3>
                <p className="text-ink-secondary leading-relaxed max-w-xl">{pillar.body}</p>
                {pillar.items && (
                  <ul className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-2">
                    {pillar.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-ink-secondary">
                        <span className="text-copper font-bold">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                )}
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
