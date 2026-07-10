"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  ArrowRight,
  BarChart3,
  PackageSearch,
  Settings,
  Truck,
  TrendingUp,
  ClipboardCheck,
  Calculator,
  Database,
  Briefcase,
  FileSpreadsheet,
  ChevronDown,
  type LucideIcon,
} from "lucide-react"

interface Service {
  num: string
  icon: LucideIcon
  title: string
  description: string
  items: string[]
}

const services: Service[] = [
  {
    num: "01",
    icon: BarChart3,
    title: "KPI Dashboards & Management Reporting",
    description: "Monthly reporting that matches your yard. Not generic dashboards.",
    items: [
      "Monthly dashboards with trend commentary",
      "Daily, weekly and monthly insight layers",
      "Director-ready reporting — no Excel massage required",
      "Operational and commercial visibility in one place",
    ],
  },
  {
    num: "02",
    icon: PackageSearch,
    title: "Stock Accuracy & Reconciliation",
    description: "Find the leaks. Fix the reporting. Recover lost margin.",
    items: [
      "Stock position reporting you can verify against the ground",
      "Inventory movement tracking",
      "Stock discrepancy investigation — find what is actually missing",
      "Reporting consistency across sites and systems",
    ],
  },
  {
    num: "03",
    icon: Settings,
    title: "Fred Reporting & Systems Improvement",
    description: "Your Fred system can give you real data. Most yards never set it up right.",
    items: [
      "Fred reporting structures that make sense",
      "Stock sheet configuration that actually works",
      "EWC codes maintained and current",
      "New site setup done properly first time",
      "Transport module workflow that saves hours",
      "Manual deal sheet reduction",
    ],
  },
  {
    num: "04",
    icon: Truck,
    title: "Transport Finance & Cost-Centre Control",
    description: "Transport is often the second-biggest cost after stock. Most yards cannot see where it goes.",
    items: [
      "Transport P&L by route, depot and vehicle",
      "Cost-centre analysis — fuel, VOR, recovery, driver wages",
      "Depot performance visibility",
      "Transport scorecards with commentary",
      "Cost-per-tonne you can use for pricing decisions",
    ],
  },
  {
    num: "05",
    icon: TrendingUp,
    title: "Forecasting, Budgeting & P&L Support",
    description: "Stop flying blind into month-end. See problems before they become surprises.",
    items: [
      "Budget forecasting you can plan around",
      "P&L commentary that explains variance, not just reports it",
      "Overspend tracking and early warning",
      "Forecast alignment across Operations, Commercial and Finance",
    ],
  },
  {
    num: "06",
    icon: ClipboardCheck,
    title: "PO Workflow & Procurement Controls",
    description: "Stop the leaks in purchasing. Catch overpayments before they leave the account.",
    items: [
      "PO approval workflows via Xero",
      "Supplier statement reconciliation",
      "Coding standardisation",
      "Approval deadline controls",
      "Overpayment checks and audit trail",
    ],
  },
  {
    num: "07",
    icon: Calculator,
    title: "Payroll, Commission & Coding Support",
    description: "Complex commission models calculated correctly and on time.",
    items: [
      "Commission structures that match your deal sheets",
      "Payroll preparation and coding accuracy",
      "Automated clock-in transition support",
      "Nominal coding support that makes sense for scrap",
    ],
  },
  {
    num: "08",
    icon: Database,
    title: "Systems Integration & Data Migration",
    description: "Moving systems? Do not lose your data or your reporting in the process.",
    items: [
      "Sage to D365 migration support",
      "Supplier/debtor data transfer validation",
      "P&L reconciliation during transition",
      "Reporting structure rollout",
      "User adoption and training support",
    ],
  },
  {
    num: "09",
    icon: Briefcase,
    title: "Outsourced Finance Business Partner / FD",
    description: "Senior financial leadership without the £80k+ salary.",
    items: [
      "Monthly business partner meetings with real decisions",
      "Board-style reporting packs",
      "Action tracking — what to do, by when",
      "Strategic finance support and performance monitoring",
      "Direct owner decision support",
    ],
  },
  {
    num: "10",
    icon: FileSpreadsheet,
    title: "Manual Spreadsheet Reduction",
    description: "Remove the duplicate work. Digitise the reporting. Free up your team.",
    items: [
      "Identify redundant spreadsheets",
      "Digitise reporting with proper tools",
      "Streamline workflows and improve accuracy",
      "Reduce manual intervention and version chaos",
      "Typically saves £50k–£120k annually in admin time and errors",
    ],
  },
]

export default function ServicesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="flex flex-col">
      {/* Header — industrial dark with grid texture */}
      <section className="relative border-b border-hairline bg-panel overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 hero-glow" />
        <div className="container relative py-16 md:py-24 px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="h-2 w-2 bg-copper rounded-full pulse-dot" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-copper">
                10 specific fixes
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ink">
              What you get
            </h1>
            <p className="mt-6 text-lg md:text-xl text-ink-secondary max-w-2xl">
              Not a menu of "services". These are the specific fixes we deliver to yards that are leaking margin through bad numbers.
            </p>
          </div>
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
                      <span className={`flex-shrink-0 p-2.5 rounded-sm border transition-colors ${isOpen ? "border-copper/40 bg-copper/10" : "border-hairline bg-panel"}`}>
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

            {/* Helper text */}
            <p className="text-sm text-ink-muted mt-6 text-center">
              Click any service to see exactly what is included.
            </p>
          </div>
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
            <div className="inline-block border border-hairline bg-panel rounded-md p-8 mb-8">
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
    </div>
  )
}