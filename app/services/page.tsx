import { ServiceCard } from "@/components/service-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="border-b border-hairline">
        <div className="container py-12 md:py-16 px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              What you get
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Not a menu of "services". These are the specific fixes we deliver to yards that are leaking margin through bad numbers.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="border-b border-hairline">
        <div className="container py-12 px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl">
            <ServiceCard 
              title="1. KPI Dashboards & Management Reporting" 
              description="Monthly reporting that matches your yard. Not generic dashboards."
              items={[
                "Monthly dashboards with trend commentary",
                "Daily, weekly and monthly insight layers",
                "Director-ready reporting — no Excel massage required",
                "Operational and commercial visibility in one place"
              ]}
            />
            <ServiceCard 
              title="2. Stock Accuracy & Reconciliation" 
              description="Find the leaks. Fix the reporting. Recover lost margin."
              items={[
                "Stock position reporting you can verify against the ground",
                "Inventory movement tracking",
                "Stock discrepancy investigation — find what is actually missing",
                "Reporting consistency across sites and systems"
              ]}
            />
            <ServiceCard 
              title="3. Fred Reporting & Systems Improvement" 
              description="Your Fred system can give you real data. Most yards never set it up right."
              items={[
                "Fred reporting structures that make sense",
                "Stock sheet configuration that actually works",
                "EWC codes maintained and current",
                "New site setup done properly first time",
                "Transport module workflow that saves hours",
                "Manual deal sheet reduction"
              ]}
            />
            <ServiceCard 
              title="4. Transport Finance & Cost-Centre Control" 
              description="Transport is often the second-biggest cost after stock. Most yards cannot see where it goes."
              items={[
                "Transport P&L by route, depot and vehicle",
                "Cost-centre analysis — fuel, VOR, recovery, driver wages",
                "Depot performance visibility",
                "Transport scorecards with commentary",
                "Cost-per-tonne you can use for pricing decisions"
              ]}
            />
            <ServiceCard 
              title="5. Forecasting, Budgeting & P&L Support" 
              description="Stop flying blind into month-end. See problems before they become surprises."
              items={[
                "Budget forecasting you can plan around",
                "P&L commentary that explains variance, not just reports it",
                "Overspend tracking and early warning",
                "Forecast alignment across Operations, Commercial and Finance"
              ]}
            />
            <ServiceCard 
              title="6. PO Workflow & Procurement Controls" 
              description="Stop the leaks in purchasing. Catch overpayments before they leave the account."
              items={[
                "PO approval workflows via Xero",
                "Supplier statement reconciliation",
                "Coding standardisation",
                "Approval deadline controls",
                "Overpayment checks and audit trail"
              ]}
            />
            <ServiceCard 
              title="7. Payroll, Commission & Coding Support" 
              description="Complex commission models calculated correctly and on time."
              items={[
                "Commission structures that match your deal sheets",
                "Payroll preparation and coding accuracy",
                "Automated clock-in transition support",
                "Nominal coding support that makes sense for scrap"
              ]}
            />
            <ServiceCard 
              title="8. Systems Integration & Data Migration" 
              description="Moving systems? Do not lose your data or your reporting in the process."
              items={[
                "Sage to D365 migration support",
                "Supplier/debtor data transfer validation",
                "P&L reconciliation during transition",
                "Reporting structure rollout",
                "User adoption and training support"
              ]}
            />
            <ServiceCard 
              title="9. Outsourced Finance Business Partner / FD" 
              description="Senior financial leadership without the £80k+ salary."
              items={[
                "Monthly business partner meetings with real decisions",
                "Board-style reporting packs",
                "Action tracking — what to do, by when",
                "Strategic finance support and performance monitoring",
                "Direct owner decision support"
              ]}
            />
            <ServiceCard 
              title="10. Manual Spreadsheet Reduction" 
              description="Remove the duplicate work. Digitise the reporting. Free up your team."
              items={[
                "Identify redundant spreadsheets",
                "Digitise reporting with proper tools",
                "Streamline workflows and improve accuracy",
                "Reduce manual intervention and version chaos",
                "Typically saves £50k–£120k annually in admin time and errors"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Health Check CTA */}
      <section>
        <div className="container py-16 md:py-20 px-4">
          <div className="max-w-3xl mx-auto text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Not sure where the leak is?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              The Scrap Yard Finance Health Check reviews your reporting, stock, margin, processes and systems. We deliver a red/amber/green report showing exactly what is broken and what it is costing you.
            </p>
            <div className="inline-block bg-panel border border-hairline p-6 rounded-sm">
              <p className="font-bold text-lg">£750 – £1,500</p>
              <p className="text-sm text-muted-foreground mt-1">One-off diagnostic. No ongoing commitment.</p>
            </div>
            <div className="mt-6">
              <Button asChild className="bg-copper hover:bg-copper/90 text-white">
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
