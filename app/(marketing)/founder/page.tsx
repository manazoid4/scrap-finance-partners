import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Founder | Scrap Finance Partners",
  description:
    "Built from real yard experience, not theory. 25 years in finance, 18 years supporting UK scrap metal and recycling businesses.",
}

const proofPoints = [
  { num: "25+", label: "YEARS IN FINANCE" },
  { num: "18", label: "YEARS IN UK SCRAP" },
  { num: "£21k", label: "SUPPLIER OVERPAYMENT RECOVERED" },
  { num: "6→3 DAYS", label: "TRANSPORT REPORTING CUT" },
]

const founderStory = [
  "I founded Scrap Finance Partners to help recycling businesses improve visibility, strengthen controls and make better commercial decisions.",
  "I have spent over 25 years working in finance, including 18 years supporting UK scrap metal and recycling businesses.",
  "Throughout my career, I have seen the same challenge repeatedly: businesses often have plenty of data, but not always the right visibility to understand what is happening and act quickly.",
  "Recycling is a fast-moving industry. Stock changes daily, material prices move, transport costs fluctuate and commercial decisions need to be made quickly. When reporting is delayed or disconnected from operations, opportunities can be missed and margins can be lost.",
  "That is where Scrap Finance Partners helps.",
  "My experience covers finance, operations, transport, commercial reporting and business systems. I understand that good finance is not just about producing reports — it is about understanding the operation behind the numbers and helping owners make better decisions.",
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

          <div className="space-y-6 border-t border-hairline pt-8">
            {founderStory.map((para) => (
              <p key={para} className="text-ink-secondary leading-relaxed max-w-2xl">
                {para}
              </p>
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
