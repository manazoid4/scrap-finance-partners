import { BookOpen, Wrench, Truck, Wallet, PackageOpen, FileSpreadsheet, ShieldCheck, BarChart3, TrendingUp } from "lucide-react"

const categories = [
  {
    icon: BookOpen,
    title: "Scrap Finance Basics",
    desc: "How scrap businesses make money, why stock matters, why margin is hard, and why reporting breaks down.",
    files: ["knowledge/scrap-finance-primer.md"]
  },
  {
    icon: PackageOpen,
    title: "Stock Accuracy",
    desc: "Symptoms, root causes, investigation steps, reconciliation rhythm and KPI metrics for stock control.",
    files: ["knowledge/stock-accuracy-playbook.md"]
  },
  {
    icon: Wrench,
    title: "Fred Reporting",
    desc: "Report structure, stock sheets, EWC codes, new site setup, transport module and data quality.",
    files: ["knowledge/fred-reporting-notes.md"]
  },
  {
    icon: Truck,
    title: "Transport Finance",
    desc: "Transport P&L, cost-centre control, fuel postings, VOR/recovery, depot performance and cost per tonne.",
    files: ["knowledge/transport-finance-playbook.md"]
  },
  {
    icon: Wallet,
    title: "Cost-Centre Control",
    desc: "Cost-centre design, overspend tracking, budget ownership, nominal analysis and variance commentary.",
    files: ["knowledge/cost-centre-control-notes.md"]
  },
  {
    icon: FileSpreadsheet,
    title: "PO Workflows",
    desc: "PO approvals, supplier reconciliation, coding, deadlines, audit trail and manual workflow risk.",
    files: ["knowledge/po-workflow-notes.md"]
  },
  {
    icon: BarChart3,
    title: "KPI Library",
    desc: "Formulas and definitions for scrap yard KPIs including throughput, margin, transport cost and debtor days.",
    files: ["knowledge/scrap-yard-kpi-library.md"]
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Risk",
    desc: "Digital waste tracking readiness, data privacy, audit preparation and regulatory boundaries.",
    files: ["knowledge/digital-waste-tracking-notes.md", "knowledge/compliance-risk-notes.md"]
  },
  {
    icon: TrendingUp,
    title: "Sales & Growth",
    desc: "Discovery call scripts, proposal templates, LinkedIn post ideas and outreach email sequences.",
    files: ["templates/discovery-call-script.md", "templates/proposal-template.md", "templates/linkedin-posts.md", "templates/outreach-emails.md"]
  },
]

export default function KnowledgePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="border-b border-hairline bg-graphite">
        <div className="container px-4 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-copper mb-6">Knowledge Base</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-ink">
              What we know
              <br />
              <span className="text-copper">about scrap</span>
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-ink-secondary max-w-3xl leading-relaxed font-light">
              Everything we have learned about scrap yard finance — from Fred systems to transport scorecards. Written for operators, not accountants.
            </p>
          </div>
        </div>
      </section>

      {/* Categories — editorial list */}
      <section className="border-b border-hairline">
        <div className="container px-4 py-16 md:py-20">
          <div className="space-y-0">
            {categories.map((cat, i) => {
              const Icon = cat.icon
              return (
                <div
                  key={i}
                  className="group grid md:grid-cols-[1fr_1.5fr] gap-4 md:gap-8 py-8 border-t border-hairline first:border-t-0 items-start hover:bg-panel/20 transition-colors -mx-4 px-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 flex items-center justify-center border border-hairline bg-graphite flex-shrink-0">
                      <Icon className="h-5 w-5 text-copper" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-ink group-hover:text-copper transition-colors">
                        {cat.title}
                      </h3>
                      <p className="mt-1 text-sm text-ink-secondary leading-relaxed">{cat.desc}</p>
                    </div>
                  </div>
                  <div className="md:pl-8 md:border-l md:border-hairline">
                    <p className="text-xs font-mono uppercase tracking-wider text-ink-tertiary mb-2">Files</p>
                    <div className="flex flex-wrap gap-2">
                      {cat.files.map((f, fi) => (
                        <span key={fi} className="text-xs font-mono text-ink-secondary bg-panel px-2 py-1 border border-hairline">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="bg-graphite">
        <div className="container px-4 py-12 md:py-16">
          <p className="text-sm text-ink-tertiary max-w-2xl leading-relaxed">
            All knowledge is stored as Markdown in the repo under <code className="text-copper font-mono">/knowledge/</code> and <code className="text-copper font-mono">/templates/</code>. They are versioned, searchable and updated as we learn more.
          </p>
        </div>
      </section>
    </div>
  )
}
