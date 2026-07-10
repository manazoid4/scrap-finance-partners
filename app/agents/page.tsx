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
  { icon: Mail, name: "Outreach Automation Agent", desc: "Runs cold outreach, sequence cadence and response handling for LinkedIn and email.", file: "/agents/outreach-automation-agent.md" },
  { icon: Lightbulb, name: "Finance OS Agent", desc: "Combines all specialist agents into a single scrap finance operating system.", file: "/agents/finance-os-agent.md" },
]

export default function AgentsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="border-b border-hairline bg-graphite">
        <div className="container px-4 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-copper mb-6">15 Specialist Agents</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-ink">
              The scrap finance
              <br />
              <span className="text-copper">operating system</span>
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-ink-secondary max-w-3xl leading-relaxed font-light">
              Each agent is a specialist trained on 26 years of scrap yard finance reality. They work together or alone — whatever the job needs.
            </p>
          </div>
        </div>
      </section>

      {/* Agent list — stacked rows */}
      <section className="border-b border-hairline">
        <div className="container px-4 py-16 md:py-20">
          <div className="space-y-0">
            {agents.map((agent, i) => {
              const Icon = agent.icon
              return (
                <div
                  key={i}
                  className="group flex items-start gap-5 py-7 border-t border-hairline first:border-t-0 hover:bg-panel/30 transition-colors -mx-4 px-4"
                >
                  <div className="mt-0.5 h-10 w-10 flex items-center justify-center border border-hairline bg-graphite flex-shrink-0">
                    <Icon className="h-5 w-5 text-copper" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                      <h3 className="text-lg font-bold text-ink group-hover:text-copper transition-colors">
                        {agent.name}
                      </h3>
                      <span className="text-xs font-mono text-ink-tertiary">{agent.file}</span>
                    </div>
                    <p className="mt-1 text-sm text-ink-secondary leading-relaxed">{agent.desc}</p>
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
            Each agent is designed to work independently or as part of the Finance OS. They reference real scrap yard context, not generic business advice. All are saved as Markdown files in the repo so they can be updated, versioned and reused.
          </p>
        </div>
      </section>
    </div>
  )
}
