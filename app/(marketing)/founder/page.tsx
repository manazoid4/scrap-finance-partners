import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Founder | Scrap Finance Partners",
  description:
    "Built from real yard experience, not theory. 25 years in finance, 18 years supporting UK scrap metal and recycling businesses.",
}

const proofPoints = [
  { num: "£120k", label: "SAVED FROM REPORTING" },
  { num: "£20k", label: "OVERPAYMENT CAUGHT" },
  { num: "£21k", label: "SUPPLIER RECOVERY" },
  { num: "7→2 DAYS", label: "REPORTING CYCLE CUT" },
]

const timeline = [
  {
    period: "1998–2005",
    title: "Ground Floor",
    org: "Countrywide Metals Ltd",
    desc: "Started in the thick of UK scrap yard finance. Learned month-end, year-end, VAT, and management accounts for yards doing £5m–£50m turnover. Counted stock in the rain.",
  },
  {
    period: "2005–2015",
    title: "Commercial & Transport",
    org: "European Metal Recycling Ltd",
    desc: "Deep exposure to transport finance, haulage data, depot reporting, and commercial reporting. Built monthly transport scorecards. Translated manual deal sheets into commercial data.",
  },
  {
    period: "2015–2020",
    title: "Systems & Scale",
    org: "Multi-Site Scrap Group",
    desc: "Supported a Sage to D365 migration. Machine-level fuel posting across 800+ assets. Built in-house financial reporting tools. Single point of contact across Operations, Commercial, Transport and Finance.",
  },
  {
    period: "2020–Present",
    title: "Scrap Finance Partners",
    org: "Founder & Lead Consultant",
    desc: "Started this because good operators were losing money to bad numbers. Finance was too slow, too generic, and too far from the yard. We fix that.",
  },
]

const experienceAreas = [
  "Stock accuracy and reconciliation",
  "Margin visibility by material and grade",
  "Transport cost analysis and reporting",
  "Management reporting improvements",
  "ERP and finance system reporting improvements",
  "Data accuracy, coding and process controls",
  "Supporting owners and operational teams with better decision-making",
]

const selectedImpact = [
  "Reporting improvements that reduced management reporting timelines",
  "Supplier overpayment identified and recovered through improved controls",
  "Improved stock and margin visibility through better reporting structures",
  "Reduced manual processes and improved finance workflows",
]

export default function FounderPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative border-b border-hairline bg-graphite overflow-hidden">
        <div className="absolute inset-0 bg-grid-fine opacity-40 pointer-events-none" />
        
        <div className="container px-4 py-24 md:py-32 relative">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1] text-ink uppercase mb-8">
              I have seen this exact problem 40 times.
            </h1>
            <p className="text-xl text-ink-secondary leading-relaxed font-light mb-8 max-w-3xl">
              I know the reality of scrap businesses: fast-moving yards, stock pressure, manual workarounds, transport issues, commercial urgency and finance that arrives six weeks too late to do anything about it.
            </p>
          </div>
        </div>
      </section>

      {/* Measurable impact */}
      <section className="border-b border-hairline">
        <div className="container mx-auto max-w-3xl px-4 py-12 md:py-16">
          <h2 className="font-mono text-xs uppercase tracking-widest text-ink-muted mb-8">Measurable Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {proofPoints.map((stat) => (
              <div key={stat.label} className="border-t border-hairline pt-4">
                <p className="text-2xl md:text-3xl font-mono text-copper font-bold">{stat.num}</p>
                <p className="text-[10px] font-mono text-ink-secondary mt-2 tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience timeline */}
      <section className="border-b border-hairline">
        <div className="container mx-auto max-w-3xl px-4 py-16 md:py-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-ink mb-10">
            Experience Built in the Scrap &amp; Recycling Industry
          </h2>
          <p className="text-lg text-ink-secondary leading-relaxed mb-10">
            Over my career, I have supported recycling businesses with challenges including:
          </p>
          <ul className="space-y-2 mb-16">
            {experienceAreas.map((item) => (
              <li key={item} className="text-ink-secondary leading-relaxed">
                <span className="text-copper mr-2">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-lg text-ink leading-relaxed mb-16">
            My experience has given me a practical understanding of the link between what happens on the yard and what appears in the financial results.
          </p>

          <div className="space-y-12">
            {timeline.map((item) => (
              <div key={item.period} className="border-t border-hairline pt-8">
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-2">
                  <span className="font-mono text-copper text-sm">{item.period}</span>
                  <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
                </div>
                <p className="text-sm font-mono text-ink-muted mb-3 uppercase tracking-widest">{item.org}</p>
                <p className="text-ink-secondary leading-relaxed max-w-xl">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why SFP */}
      <section className="border-b border-hairline">
        <div className="container mx-auto max-w-3xl px-4 py-16 md:py-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-ink mb-6">
            Why Scrap Finance Partners?
          </h2>
          <p className="text-lg text-ink-secondary leading-relaxed mb-4">
            Many recycling businesses do not need more data. They need clearer information, stronger controls and better visibility of what is really happening.
          </p>
          <p className="text-lg text-ink-secondary leading-relaxed mb-10">
            Scrap Finance Partners bridges the gap between operational activity and financial performance. By combining industry experience with finance and systems knowledge, we help recycling businesses identify improvement opportunities, reduce inefficiencies and make better-informed decisions.
          </p>
          <p className="text-xl font-semibold text-copper border-l-2 border-copper pl-6">
            Better visibility. Stronger controls. Better decisions.
          </p>
        </div>
      </section>

      {/* Selected impact */}
      <section className="border-b border-hairline">
        <div className="container mx-auto max-w-3xl px-4 py-16 md:py-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-ink mb-10">
            Selected Experience &amp; Impact
          </h2>
          <ul className="space-y-3">
            {selectedImpact.map((item) => (
              <li key={item} className="text-ink-secondary leading-relaxed">
                <span className="text-copper mr-2">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="container mx-auto max-w-3xl px-4 py-16 md:py-24">
          <h2 className="text-2xl md:text-3xl font-semibold text-ink mb-8">Stop running on gut feel.</h2>
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
