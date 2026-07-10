import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
      <section className="border-b border-hairline">
        <div className="container py-12 md:py-16 px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Knowledge Vault
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Internal documentation, playbooks and templates built from 26 years inside scrap yard finance.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="container py-12 px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl">
            {categories.map((cat) => (
              <Card key={cat.title} className="border-hairline">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <cat.icon className="h-5 w-5 text-copper" />
                    <CardTitle className="text-base">{cat.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">{cat.desc}</p>
                  <div className="space-y-1">
                    {cat.files.map((file) => (
                      <p key={file} className="text-xs font-mono bg-panel p-1.5 rounded-sm border border-hairline">{file}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
