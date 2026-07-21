import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Results | Scrap Finance Partners",
  description:
    "Real yards. Real numbers. Examples of the improvements we deliver — stock accuracy, margin recovery, faster reporting.",
}

const caseStudies = [
  {
    tag: "Audit & Recovery",
    title: "Audit & Recovery",
    profile: "Medium recycling business, multiple stock locations",
    challenge:
      "A review of buyer performance highlighted an unexpected margin issue on a specific material grade. Further analysis was needed to understand why profitability was being impacted.",
    action:
      "While reviewing buyer commission calculations, we analysed purchase prices, sales values and landed costs. This identified an incorrect pricing method had been applied, with copper pricing being used against old rolled aluminium material.",
    result:
      "The issue was tracked back to supplier pricing and £21k of overpayment was identified and recovered from the supplier. Additional review controls were introduced to improve pricing accuracy and prevent similar issues occurring again.",
  },
  {
    tag: "Process & Systems",
    title: "Halving Transport Reporting Time",
    profile: "Large recycling business, complex transport operations",
    challenge:
      "Following the standard month-end close, transport reporting packs took a further six working days to complete. The reporting process involved multiple cost centres, fuel allocations, vehicle costs, journals and manual adjustments, making it time-consuming to produce accurate management information.",
    action:
      "We reviewed the reporting process, streamlined data collection, improved cost centre reporting and reduced manual spreadsheet preparation. The reporting pack was redesigned to provide clearer insight into transport performance.",
    resultList: [
      "Reduced reporting pack preparation from 6 working days to 3 working days",
      "Faster visibility of transport costs and depot performance",
      "Reduced manual reporting effort and improved reporting consistency",
      "Enabled management to review transport performance sooner and make more timely decisions",
    ],
  },
  {
    tag: "Finance Process",
    title: "Accelerating Month-End Reporting",
    profile: "Recycling business, finance process improvement",
    challenge:
      "Month-end reporting was taking several weeks to complete, meaning management were reviewing financial performance much later than needed. This reduced the ability to identify issues quickly and make timely decisions.",
    action:
      "We reviewed the month-end process, improved reporting workflows, streamlined data preparation and reduced unnecessary manual steps. The focus was on improving the quality and speed of management information.",
    resultList: [
      "Reduced month-end reporting timeline to approximately 10 working days",
      "Improved visibility of financial performance and key variances",
      "Reduced time spent preparing reports and increased focus on analysis",
      "Provided management with earlier insight to support decision-making",
    ],
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative border-b border-hairline bg-graphite overflow-hidden">
        <div className="absolute inset-0 bg-grid-fine opacity-40 pointer-events-none" />
        
        <div className="container px-4 py-24 md:py-32 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1] text-ink uppercase mb-8">
              Real yards.<br />
              <span className="text-copper">Real numbers.</span>
            </h1>
            <p className="text-xl text-ink-secondary leading-relaxed font-light">
              We don&apos;t sell software. We sell clarity. Here is what happens when you fix the gap between the weighbridge and the balance sheet.
            </p>
          </div>
        </div>
      </section>

      <section>
        {caseStudies.map((study, index) => (
          <div key={study.title} className="border-b border-hairline">
            <div className="container mx-auto max-w-3xl px-4 py-16 md:py-20">
              <p className="font-mono text-xs uppercase tracking-widest text-copper mb-4">
                {String(index + 1).padStart(2, "0")} — {study.tag}
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-ink mb-2">
                {study.title}
              </h2>
              <p className="text-sm text-ink-muted mb-10">{study.profile}</p>

              <div className="space-y-8">
                <div>
                  <h3 className="font-mono text-xs uppercase tracking-widest text-ink-muted mb-2">
                    The Challenge
                  </h3>
                  <p className="text-lg text-ink-secondary leading-relaxed">{study.challenge}</p>
                </div>

                <div>
                  <h3 className="font-mono text-xs uppercase tracking-widest text-ink-muted mb-2">
                    What We Did
                  </h3>
                  <p className="text-lg text-ink-secondary leading-relaxed">{study.action}</p>
                </div>

                <div className="border-t border-hairline pt-8">
                  <h3 className="font-mono text-xs uppercase tracking-widest text-copper mb-3">
                    The Improvement
                  </h3>
                  {study.result && (
                    <p className="text-lg text-ink font-medium leading-relaxed">{study.result}</p>
                  )}
                  {study.resultList && (
                    <ul className="space-y-2">
                      {study.resultList.map((item) => (
                        <li key={item} className="text-lg text-ink font-medium leading-relaxed pl-4 border-l border-copper/40">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section>
        <div className="container mx-auto max-w-3xl px-4 py-16 md:py-24">
          <h2 className="text-2xl md:text-3xl font-semibold text-ink mb-8">
            Stop losing margin to bad data.
          </h2>
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
