import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "How We Help | Scrap Finance Partners",
  description:
    "26 years' finance experience. 18 years specialising in UK scrap metal. Built for yards, not boardrooms — 10 specific fixes for stock, margin, transport, reporting and systems.",
}

const tickerPhrases = [
  "STOCK RECONCILED",
  "MARGIN BY GRADE",
  "26 YEARS IN SCRAP",
  "MONTH-END IN DAYS NOT WEEKS",
  "NO CORPORATE FLUFF",
  "KNOW YOUR NUMBERS",
  "BUILT FOR YARDS",
  "FROM YARD TO BALANCE SHEET",
]

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

      {/* Services Accordion */}
      <section className="border-b border-hairline">
        <div className="container py-12 md:py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="border border-hairline rounded-md overflow-hidden">
              {services.map((service, i) => {
                const isOpen = openIndex === i
                const isLast = i === services.length - 1
                return (
                  <div
                    key={i}
                    className={`service-row ${!isLast ? "border-b border-hairline" : ""}`}
                  >
                    {/* Accordion header */}
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="w-full flex items-center gap-4 md:gap-6 p-5 md:p-6 text-left group"
                      aria-expanded={isOpen}
                    >
                      {/* Number */}
                      <span className={`text-2xl md:text-3xl font-bold font-mono flex-shrink-0 transition-colors ${isOpen ? "text-copper" : "text-hairline-bright group-hover:text-ink-muted"}`}>
                        {service.num}
                      </span>

                      {/* Icon */}
                      <span className={`flex-shrink-0 p-2.5 rounded-none border transition-colors ${isOpen ? "border-copper/40 bg-copper/10" : "border-hairline bg-panel"}`}>
                        <service.icon className={`h-5 w-5 md:h-6 md:w-6 ${isOpen ? "text-copper" : "text-ink-secondary"}`} />
                      </span>

                      {/* Title + description */}
                      <div className="flex-1 min-w-0">
                        <h3 className={`font-bold text-base md:text-lg transition-colors ${isOpen ? "text-copper" : "text-ink"}`}>
                          {service.title}
                        </h3>
                        <p className="text-sm text-ink-secondary mt-1 hidden md:block">
                          {service.description}
                        </p>
                      </div>

                      {/* Chevron */}
                      <ChevronDown
                        className={`h-5 w-5 flex-shrink-0 text-ink-muted transition-transform duration-300 ${isOpen ? "rotate-180 text-copper" : ""}`}
                      />
                    </button>

                    {/* Accordion content */}
                    <div
                      className="accordion-content"
                      data-state={isOpen ? "open" : "closed"}
                    >
                      <div className="accordion-inner">
                        <div className="px-5 md:px-6 pb-6 pl-16 md:pl-24">
                          {/* Mobile description */}
                          <p className="text-sm text-ink-secondary mb-4 md:hidden">
                            {service.description}
                          </p>
                          <ul className="space-y-2.5">
                            {service.items.map((item, j) => (
                              <li key={j} className="flex items-start gap-3 text-sm text-ink-secondary">
                                <span className="mt-1.5 h-1.5 w-1.5 bg-copper/60 rounded-full flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

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
          <p className="mt-10 pt-6 border-t border-hairline text-lg text-ink leading-relaxed">
            Our goal is simple: give owners clearer visibility, stronger controls and confidence in the numbers behind their business.
          </p>
        </div>
      </section>

      {/* Health Check CTA — prominent, industrial */}
      <section className="bg-graphite relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute inset-0 hero-glow" />
        <div className="container relative py-16 md:py-24 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-ink mb-4">
              Not sure where the leak is?
            </h2>
            <p className="text-lg text-ink-secondary mb-10 max-w-2xl mx-auto">
              The Scrap Yard Finance Health Check reviews your reporting, stock, margin, processes and systems. We deliver a red/amber/green report showing exactly what is broken and what it is costing you.
            </p>

            {/* Price card */}
            <div className="inline-block border-2 border-hairline bg-panel rounded-none p-8 mb-8">
              <p className="text-3xl font-bold font-mono text-copper">£750 – £1,500</p>
              <p className="text-sm text-ink-muted mt-2">One-off diagnostic. No ongoing commitment.</p>
            </div>

            <div>
              <Button asChild size="lg" className="cta-copper bg-copper hover:bg-copper-bright text-white border-0">
                <Link href="/health-check">
                  Book a Health Check <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
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
          <p className="font-mono text-2xl text-copper mb-8">£750 – £1,500</p>
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
