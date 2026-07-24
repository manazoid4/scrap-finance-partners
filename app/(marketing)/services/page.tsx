import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "How We Help | Scrap Finance Partners",
  description:
    "26 years' finance experience. 18 years specialising in UK scrap metal. Built for yards, not boardrooms — 10 specific fixes for stock, margin, transport, reporting and systems.",
}

const howWeHelp = [
  {
    title: "Understanding your current setup",
    body: "We review your existing systems, processes and reporting to understand what information you have and where improvements can be made.",
  },
  {
    title: "Improving the information you already have",
    body: "We help connect operational, financial and commercial data to give owners a clearer view on performance, margins and opportunities.",
  },
  {
    title: "Fixing processes that create unnecessary work",
    body: "We identify manual tasks, duplicate reporting and inefficient workflows, helping your team work smarter.",
  },
  {
    title: "Supporting better business decisions",
    body: "We provide practical finance insight to help owners understand performance, costs, margins and opportunities.",
  },
  {
    title: "Working with your existing systems",
    body: "We improve the way you use your current finance and operational systems rather than forcing you to replace them.",
  },
]

const services = [
  {
    num: "01",
    title: "Numbers That Matter, Every Month",
    summary:
      "The data is there. We help connect the numbers with what is happening on the yard floor.",
    items: [
      "Monthly reporting designed around how your yard actually operates — not generic finance dashboards",
      "Clear trend commentary explaining what has changed and why",
      "Daily, weekly and monthly insight layers for better decision-making",
      "Director-ready reporting that highlights the issues that need attention",
      "One view combining operational performance and commercial results",
    ],
  },
  {
    num: "02",
    title: "Stock Accuracy & Reconciliation",
    summary:
      "Closing the gap between system stock and what is physically happening in your yard.",
    items: [
      "Stock reconciliation against actual yard balances",
      "Material movement tracking from purchase through to sale",
      "Stock variance investigation by grade, location and process",
      "Identify causes of stock variance and margin leakage",
      "Creating confidence that stock figures reflect reality",
    ],
  },
  {
    num: "03",
    title: "Systems, Reporting & Data Improvements",
    summary:
      "Your business systems hold valuable information. We help improve reporting, connect operational data and create better visibility for decision making.",
    items: [
      "System reporting improvements",
      "Data accuracy and reporting structure improvements",
      "Stock reporting configuration and visibility",
      "Machine coding and transaction automation across Xero, Sage and other finance systems",
      "New site and system setup support",
      "Workflow improvements to reduce manual process",
      "Margin reporting improvements and reduced reliance on spreadsheets",
      "ERP to finance system coding improvements",
    ],
  },
  {
    num: "04",
    title: "Transport Finance & Cost Centre Control",
    summary:
      "Understanding where transport costs are going and improving visibility across your fleet operations.",
    items: [
      "Transport P&L reporting covering all fleet-related costs",
      "Cost centre analysis across fuel, VOR, recovery and driver wages",
      "Depot performance visibility",
      "Transport scorecards with performance commentary",
      "Cost per tonne analysis by job to support pricing decisions",
      "Total landed cost visibility for materials",
    ],
  },
  {
    num: "05",
    title: "Forecasting, Budgeting & P&L Support",
    summary:
      "Helping you plan ahead, understand performance and identify issues before they impact results.",
    items: [
      "Budget and forecasting support aligned to business goals",
      "P&L commentary that explains variances, not just reports them",
      "Overspend tracking and early warning indicators",
      "Forecast alignment across operations, commercial and finance",
      "Detailed analysis by nominal code and cost category",
    ],
  },
  {
    num: "06",
    title: "PO Workflows & Procurement Controls",
    summary:
      "Improving purchase control, cost visibility and month-end accuracy through better process.",
    items: [
      "Purchase order approval workflows across accounting and business systems",
      "Supplier statement reconciliation and account accuracy",
      "Standardised coding structures for consistent reporting",
      "Approval deadline controls to improve month-end cut-off",
      "Duplicate invoice checks and audit trail improvements",
      "Better visibility of accruals, prepayments and committed costs",
    ],
  },
  {
    num: "07",
    title: "Payroll, Commission & Coding Support",
    summary: "Improving payroll accuracy, commission calculations and workforce cost control.",
    items: [
      "Commission models that reflect profitability by buyer, grade and total landed costs",
      "Commission calculation reviews to improve accuracy and consistency",
      "Payroll preparation support and coding accuracy",
      "Time and attendance system implementation — from supplier selection through setup and employee onboarding",
      "Overtime monitoring and workforce cost visibility",
    ],
  },
  {
    num: "08",
    title: "Systems Integration & Data Migration",
    summary:
      "Helping businesses move systems without losing control of their data, reporting or day-to-day operations.",
    items: [
      "Systems implementation and migration support",
      "Supplier and customer data transfer",
      "P&L reconciliation during transition",
      "Reporting structure setup and rollout",
      "User adoption and training support",
    ],
  },
  {
    num: "09",
    title: "Outsourced Finance Business Partner",
    summary: "Senior finance support and commercial insight without the cost of a full-time finance leader.",
    items: [
      "Monthly business partner meetings focused on decisions and actions",
      "Board-style reporting packs with clear performance insights",
      "Action tracking — what needs to happen, by when and by who",
      "Strategic finance support and performance monitoring",
      "Direct support to owners and management teams",
    ],
  },
  {
    num: "10",
    title: "Manual Spreadsheet Reduction",
    summary: "Reducing duplicate work, improving reporting accuracy and freeing teams to focus on higher-value tasks.",
    items: [
      "Identify unnecessary and duplicate spreadsheets",
      "Digitise reporting using appropriate systems and tools",
      "Streamline workflows and improve data accuracy",
      "Reduce manual intervention and version control issues",
      "Improve efficiency by moving key processes into reliable systems",
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="border-b border-hairline">
        <div className="container mx-auto max-w-3xl px-4 py-16 md:py-24">
          <p className="font-mono text-xs uppercase tracking-widest text-copper mb-6">
            26 Years&apos; finance experience. 18 years specialising in the UK scrap metal industry.
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-ink">
            Built for yards, not boardrooms.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-ink-secondary leading-relaxed">
            We bridge the gap between what your system reports and what&apos;s really happening in your yard.
          </p>
        </div>
      </section>

      {/* The 10 fixes — static hard-grid list */}
      <section className="border-b border-hairline">
        <div className="container mx-auto max-w-4xl px-4 py-12 md:py-16">
          <div className="border-2 border-hairline">
            {services.map((service, i) => (
              <div
                key={service.num}
                className={`service-row p-5 md:p-6 ${i !== services.length - 1 ? "border-b-2 border-hairline" : ""}`}
              >
                <div className="flex items-start gap-4 md:gap-6">
                  <span className="text-2xl md:text-3xl font-bold font-mono text-copper flex-shrink-0">
                    {service.num}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-base md:text-lg text-ink">
                      {service.title}
                    </h3>
                    <p className="text-sm text-ink-secondary mt-1 mb-4">
                      {service.summary}
                    </p>
                    <ul className="space-y-2.5">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-ink-secondary">
                          <span className="text-copper font-bold font-mono flex-shrink-0">→</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help — intro */}
      <section className="border-b border-hairline">
        <div className="container mx-auto max-w-3xl px-4 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-ink mb-6">
            How We Help
          </h2>
          <p className="text-lg text-ink-secondary leading-relaxed mb-2">
            Practical finance and operational support built around your business.
          </p>
          <p className="text-lg text-ink-secondary leading-relaxed mb-10">
            Every recycling business is different. We work alongside owners and management teams to understand how your operation runs, where visibility is missing, and where improvements can be made. We help by:
          </p>
          <div className="space-y-8">
            {howWeHelp.map((item, i) => (
              <div key={item.title} className="border-t border-hairline pt-6">
                <h3 className="text-base font-semibold text-ink">
                  <span className="font-mono text-copper mr-2">{i + 1}.</span>
                  {item.title}
                </h3>
                <p className="mt-2 text-ink-secondary leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Goal statement — copper ticker, pauses on hover, static under reduced-motion */}
      <section className="border-b border-hairline bg-copper overflow-hidden">
        <div className="ticker-track py-5">
          {[0, 1].map((rep) => (
            <div key={rep} className="flex items-center flex-shrink-0" aria-hidden={rep === 1}>
              {Array.from({ length: 4 }).map((_, i) => (
                <span
                  key={i}
                  className="text-lg md:text-xl font-bold uppercase tracking-tight text-white px-8 whitespace-nowrap"
                >
                  Our goal is simple: give owners clearer visibility, stronger controls and confidence in the numbers behind their business.
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Health Check CTA */}
      <section>
        <div className="container mx-auto max-w-3xl px-4 py-16 md:py-24">
          <h2 className="text-2xl md:text-3xl font-semibold text-ink mb-4">
            Not sure where the leak is?
          </h2>
          <p className="text-lg text-ink-secondary mb-8 max-w-2xl leading-relaxed">
            The Scrap Yard Finance Health Check reviews your reporting, stock, margin, processes and systems. We deliver a red/amber/green report showing exactly what is broken and what it is costing you.
          </p>
          <p className="font-mono text-2xl text-copper mb-8">£2,500 fixed</p>
          <Link
            href="/health-check"
            className="inline-flex items-center justify-center h-12 px-6 bg-copper hover:bg-copper-bright text-white font-semibold transition-colors"
          >
            Book a Health Check <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
