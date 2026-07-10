import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Stethoscope, Wrench, EyeOff, BarChart3, Truck, Server, FileText, Globe, ShieldCheck, User, Rocket, ClipboardCheck, Mail, Lightbulb } from "lucide-react"

const agents = [
  { icon: Search, name: "Industry Research Agent", desc: "Research UK scrap metal market, competitors, regulation shifts and pricing trends.", file: "/agents/industry-research-agent.md" },
  { icon: Stethoscope, name: "Finance Diagnostic Agent", desc: "Turns messy client notes into red/amber/green scorecards, root causes, quick wins and 30-day plans.", file: "/agents/finance-diagnostic-agent.md" },
  { icon: Wrench, name: "Fred Systems Agent", desc: "Diagnoses Fred reports, stock sheets, EWC codes, new site setup, transport module and data integrity.", file: "/agents/fred-systems-agent.md" },
  { icon: EyeOff, name: "Stock Integrity Agent", desc: "Investigates stock accuracy, reconciliation gaps, inventory movement and discrepancy causes.", file: "/agents/stock-integrity-agent.md" },
  { icon: BarChart3, name: "KPI Dashboard Agent", desc: "Builds KPI definitions, dashboard layouts and monthly reporting structures for scrap yards.", file: "/agents/kpi-dashboard-agent.md" },
  { icon: Truck, name: "Transport Finance Agent", desc: "Analyses transport P&L, cost centres, fleet costs, fuel posting, depot performance and cost per tonne.", file: "/agents/transport-finance-agent.md" },
  { icon: Server, name: "Systems Integration Agent", desc: "Supports Sage-to-D365 migration, data transfer, P&L reconciliation and user adoption.", file: "/agents/systems-integration-agent.md" },
  { icon: FileText, name: "Sales Proposal Agent", desc: "Turns prospect pain into diagnosis, proposed solution, deliverables, timeline and pricing.", file: "/agents/sales-proposal-agent.md" },
  { icon: Globe, name: "Content SEO Agent", desc: "Creates LinkedIn posts, articles and outreach content optimised for scrap/recycling audiences.", file: "/agents/content-seo-agent.md" },
  { icon: ShieldCheck, name: "Compliance Risk Agent", desc: "Flags compliance gaps and data readiness issues. Always refers to qualified professionals for final advice.", file: "/agents/compliance-risk-agent.md" },
  { icon: User, name: "Personal Brand Agent", desc: "Builds founder content, speaking notes and authority positioning for Majid Ahmed.", file: "/agents/personal-brand-agent.md" },
  { icon: Rocket, name: "Growth Ops Agent", desc: "Manages outreach experiments, conversion funnels and weekly sprint boards.", file: "/agents/growth-ops-agent.md" },
  { icon: ClipboardCheck, name: "Client Onboarding Agent", desc: "Structures first calls, data collection and month-one reporting setup for new retainers.", file: "/agents/client-onboarding-agent.md" },
  { icon: Mail, name: "Outreach Agent", desc: "Drafts cold emails, follow-ups and LinkedIn DMs in the Scrap Finance Partners tone.", file: "/agents/outreach-agent.md" },
  { icon: Lightbulb, name: "Offer Design Agent", desc: "Creates sprint proposals, retainer packages and pricing models for new client situations.", file: "/agents/offer-design-agent.md" },
]

export default function AgentsPage() {
  return (
    <div className="flex flex-col">
      <section className="border-b border-hairline">
        <div className="container py-12 md:py-16 px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Agent Library
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Specialised prompts and workflows that power the consultancy engine. Each agent is trained on scrap yard finance, systems and operations.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="container py-12 px-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-6xl">
            {agents.map((agent) => (
              <Card key={agent.name} className="border-hairline">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <agent.icon className="h-5 w-5 text-copper" />
                    <CardTitle className="text-base">{agent.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{agent.desc}</p>
                  <p className="text-xs font-mono bg-panel p-2 rounded-sm mt-3 border border-hairline">{agent.file}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
