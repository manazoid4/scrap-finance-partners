"use client"

import { KpiCard } from "@/components/kpi-card"
import { Button } from "@/components/ui/button"
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Area, AreaChart, Cell,
} from "recharts"
import {
  LayoutDashboard, Package, TrendingUp, Truck, PoundSterling, ShieldCheck,
  Download, Calendar, MapPin, ArrowUpRight, ArrowDownRight, Minus,
  AlertTriangle, CheckCircle2, XCircle,
} from "lucide-react"
import { cn } from "@/lib/utils"

const gridColor = "#33383f"
const axisColor = "#7c8a99"
const copperColor = "#b5714a"
const greenColor = "#4c6b57"
const amberColor = "#c99a3d"
const redColor = "#c0392b"

const throughputData = [
  { month: "Feb", tonnes: 3820, target: 3900 },
  { month: "Mar", tonnes: 3950, target: 3900 },
  { month: "Apr", tonnes: 4010, target: 4000 },
  { month: "May", tonnes: 3890, target: 4000 },
  { month: "Jun", tonnes: 4150, target: 4100 },
  { month: "Jul", tonnes: 4280, target: 4200 },
]

const marginData = [
  { material: "Ferrous", margin: 14.2, fill: copperColor },
  { material: "Non-Ferrous", margin: 24.8, fill: greenColor },
  { material: "Cable", margin: 31.5, fill: amberColor },
  { material: "Mixed/Skip", margin: 9.6, fill: redColor },
]

const transportData = [
  { month: "Feb", cost: 13.10 }, { month: "Mar", cost: 13.40 },
  { month: "Apr", cost: 13.90 }, { month: "May", cost: 13.60 },
  { month: "Jun", cost: 13.80 }, { month: "Jul", cost: 14.20 },
]

const sidebarItems = [
  { icon: LayoutDashboard, label: "Overview", active: true },
  { icon: Package, label: "Stock" },
  { icon: TrendingUp, label: "Margin" },
  { icon: Truck, label: "Transport" },
  { icon: PoundSterling, label: "Costs" },
  { icon: ShieldCheck, label: "System Health" },
]

const stockDiscrepancies = [
  { site: "Birmingham Yard", count: 3, value: "£4,200", severity: "low" },
  { site: "Manchester Depot", count: 7, value: "£12,800", severity: "high" },
  { site: "Leeds Hub", count: 1, value: "£900", severity: "low" },
  { site: "Liverpool Site", count: 5, value: "£8,400", severity: "medium" },
]

const transportRoutes = [
  { route: "Birmingham → Manchester", cost: "£16.20", trend: "down", delta: "-£0.80" },
  { route: "Birmingham → London", cost: "£22.40", trend: "up", delta: "+£1.20" },
  { route: "Birmingham → Leeds", cost: "£14.80", trend: "down", delta: "-£0.40" },
  { route: "Local Collection", cost: "£8.50", trend: "neutral", delta: "£0.00" },
]

const costCentres = [
  { centre: "Yard Operations", budget: 45, actual: 42, status: "under" },
  { centre: "Transport", budget: 38, actual: 41, status: "over" },
  { centre: "Maintenance", budget: 12, actual: 15, status: "over" },
  { centre: "Admin", budget: 8, actual: 7, status: "under" },
]

const systemHealth = [
  { system: "Fred Stock Sheets", status: "Good", score: 4, color: greenColor },
  { system: "EWC Codes", status: "Warning", score: 2, color: amberColor },
  { system: "Xero Product Codes", status: "Good", score: 5, color: greenColor },
  { system: "PO Workflow", status: "Critical", score: 1, color: redColor },
]

const severityStyles: Record<string, string> = {
  low: "bg-green-500/10 text-green-700 border-green-500/20",
  medium: "bg-amber-500/10 text-amber-700 border-amber-500/20",
  high: "bg-red-500/10 text-red-700 border-red-500/20",
}

const tooltipStyle = {
  background: "#1a1d21",
  border: `1px solid ${gridColor}`,
  borderRadius: "0px",
  fontSize: 12,
  color: "#fff",
  padding: "8px 12px",
}

export default function DashboardDemoPage() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col w-56 border-r border-hairline bg-panel min-h-[calc(100vh-3.5rem)] sticky top-14 self-start">
        <div className="p-4 border-b border-hairline">
          <p className="text-xs font-semibold text-ink-tertiary uppercase tracking-wider">Dashboard</p>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {sidebarItems.map((item) => (
            <button
              key={item.label}
              className={cn(
                "flex items-center gap-3 w-full px-3 py-2 text-sm font-medium transition-colors",
                item.active
                  ? "bg-copper/15 text-copper border border-copper/20"
                  : "text-ink-secondary hover:text-ink hover:bg-panel-alt"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-hairline">
          <div className="bg-panel-alt p-3">
            <p className="text-xs font-medium text-ink-tertiary mb-1">Demo Mode</p>
            <p className="text-xs text-ink-tertiary/70">Sample data for illustration</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 min-w-0">
        {/* Filter Bar */}
        <div className="border-b border-hairline bg-graphite">
          <div className="px-6 py-3 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <h1 className="text-lg font-bold tracking-tight text-ink">Management Dashboard</h1>
              <span className="text-xs text-ink-tertiary hidden sm:inline">Example monthly view for a mid-size scrap yard</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 border border-hairline px-3 py-1.5 text-sm bg-panel/50">
                <Calendar className="h-3.5 w-3.5 text-ink-tertiary" />
                <span className="font-medium">June 2026</span>
              </div>
              <div className="flex items-center gap-2 border border-hairline px-3 py-1.5 text-sm bg-panel/50">
                <MapPin className="h-3.5 w-3.5 text-ink-tertiary" />
                <span className="font-medium">All Sites</span>
              </div>
              <Button variant="outline" size="sm" className="gap-1.5 rounded-sm">
                <Download className="h-3.5 w-3.5" />
                Export
              </Button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* KPI Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <KpiCard title="Monthly Throughput" value="4,280 T" change="+3.1%" trend="up" sparkData={[3820, 3950, 4010, 3890, 4150, 4280]} />
            <KpiCard title="Stock Value" value="£1.94M" change="-1.2%" trend="down" sparkData={[2.01, 1.98, 1.96, 1.95, 1.94, 1.94]} />
            <KpiCard title="Gross Margin" value="18.6%" change="+0.8pp" trend="up" sparkData={[17.2, 17.5, 17.8, 18.0, 18.3, 18.6]} />
            <KpiCard title="Transport Cost / T" value="£14.20" change="+£0.60" trend="down" sparkData={[13.1, 13.4, 13.9, 13.6, 13.8, 14.2]} />
          </div>

          {/* Charts Row */}
          <div className="grid gap-4 lg:grid-cols-7">
            {/* Throughput Trend */}
            <div className="lg:col-span-4 border border-hairline bg-panel">
              <div className="px-6 py-4 border-b border-hairline">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-ink">Throughput Trend</h3>
                    <p className="text-sm text-ink-secondary">Monthly tonnes vs target — last 6 months</p>
                  </div>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="flex items-center gap-1.5 text-ink-secondary">
                      <span className="h-2 w-2" style={{ background: copperColor }} />
                      Actual
                    </span>
                    <span className="flex items-center gap-1.5 text-ink-secondary">
                      <span className="h-2 w-2" style={{ background: axisColor }} />
                      Target
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <ResponsiveContainer width="100%" height={280}>
                  <AreaChart data={throughputData}>
                    <defs>
                      <linearGradient id="throughputGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={copperColor} stopOpacity={0.25} />
                        <stop offset="100%" stopColor={copperColor} stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid stroke={gridColor} strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="month" stroke={axisColor} fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke={axisColor} fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip contentStyle={tooltipStyle} />
                    <Area type="monotone" dataKey="tonnes" stroke={copperColor} strokeWidth={2} fill="url(#throughputGrad)" dot={{ r: 3, fill: copperColor }} />
                    <Line type="monotone" dataKey="target" stroke={axisColor} strokeWidth={1.5} strokeDasharray="5 5" dot={false} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Margin by Material */}
            <div className="lg:col-span-3 border border-hairline bg-panel">
              <div className="px-6 py-4 border-b border-hairline">
                <h3 className="text-base font-bold text-ink">Gross Margin by Material</h3>
                <p className="text-sm text-ink-secondary">Percentage margin — this month</p>
              </div>
              <div className="p-4">
                <ResponsiveContainer width="100%" height={280}>
                  <BarChart data={marginData} layout="vertical">
                    <CartesianGrid stroke={gridColor} strokeDasharray="3 3" horizontal={false} />
                    <XAxis type="number" stroke={axisColor} fontSize={12} tickLine={false} axisLine={false} unit="%" />
                    <YAxis type="category" dataKey="material" stroke={axisColor} fontSize={12} tickLine={false} axisLine={false} width={80} />
                    <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "rgba(255,255,255,0.03)" }} />
                    <Bar dataKey="margin" radius={[0, 4, 4, 0]} barSize={28}>
                      {marginData.map((entry, i) => (
                        <Cell key={i} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Secondary KPI Row */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <KpiCard title="Debtor Days" value="42 days" change="-3 days" trend="up" sparkData={[48, 46, 45, 44, 45, 42]} />
            <KpiCard title="Stock Discrepancies" value="16" change="-4" trend="up" sparkData={[22, 20, 19, 21, 18, 16]} />
            <KpiCard title="PO Exceptions" value="12" change="+2" trend="down" sparkData={[8, 9, 10, 11, 10, 12]} />
            <KpiCard title="EWC Code Issues" value="3" change="0" trend="neutral" sparkData={[3, 4, 3, 3, 4, 3]} />
          </div>

          {/* Data Tables Row */}
          <div className="grid gap-4 lg:grid-cols-3">
            {/* Stock Discrepancies */}
            <div className="border border-hairline bg-panel">
              <div className="px-6 py-4 border-b border-hairline">
                <h3 className="text-base font-bold text-ink">Stock Discrepancies</h3>
                <p className="text-sm text-ink-secondary">By site — this month</p>
              </div>
              <div className="p-4 space-y-2.5">
                {stockDiscrepancies.map((site) => (
                  <div key={site.site} className="flex items-center justify-between p-3 border border-hairline bg-panel/30 hover:border-copper/30 transition-colors">
                    <div className="min-w-0">
                      <p className="font-medium text-sm text-ink truncate">{site.site}</p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className={cn("text-xs px-1.5 py-0.5 border font-medium", severityStyles[site.severity])}>
                          {site.count} disc
                        </span>
                      </div>
                    </div>
                    <p className="font-semibold text-sm text-copper tabular-nums">{site.value}</p>
                  </div>
                ))}
                <div className="flex items-center justify-between pt-2 border-t border-hairline">
                  <span className="text-xs text-ink-tertiary">Total exposure</span>
                  <span className="text-sm font-bold text-red-600 tabular-nums">£26,300</span>
                </div>
              </div>
            </div>

            {/* Transport Cost per Tonne */}
            <div className="border border-hairline bg-panel">
              <div className="px-6 py-4 border-b border-hairline">
                <h3 className="text-base font-bold text-ink">Transport Cost / Tonne</h3>
                <p className="text-sm text-ink-secondary">By route — this month</p>
              </div>
              <div className="p-4 space-y-2.5">
                {transportRoutes.map((route) => (
                  <div key={route.route} className="flex items-center justify-between p-3 border border-hairline bg-panel/30 hover:border-copper/30 transition-colors">
                    <div className="min-w-0">
                      <p className="text-sm text-ink-secondary truncate">{route.route}</p>
                      <div className="flex items-center gap-1 mt-0.5">
                        {route.trend === "down" ? (
                          <ArrowDownRight className="h-3 w-3 text-green-600" />
                        ) : route.trend === "up" ? (
                          <ArrowUpRight className="h-3 w-3 text-red-600" />
                        ) : (
                          <Minus className="h-3 w-3 text-ink-tertiary" />
                        )}
                        <span className={cn(
                          "text-xs font-medium",
                          route.trend === "down" ? "text-green-600" : route.trend === "up" ? "text-red-600" : "text-ink-tertiary"
                        )}>
                          {route.delta}
                        </span>
                      </div>
                    </div>
                    <p className="font-semibold text-sm tabular-nums text-ink">{route.cost}</p>
                  </div>
                ))}
                <div className="pt-2">
                  <ResponsiveContainer width="100%" height={60}>
                    <LineChart data={transportData}>
                      <Line type="monotone" dataKey="cost" stroke={copperColor} strokeWidth={1.5} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Cost-Centre Variance */}
            <div className="border border-hairline bg-panel">
              <div className="px-6 py-4 border-b border-hairline">
                <h3 className="text-base font-bold text-ink">Cost-Centre Variance</h3>
                <p className="text-sm text-ink-secondary">Budget vs actual — this month</p>
              </div>
              <div className="p-4 space-y-3">
                {costCentres.map((centre) => {
                  const variance = centre.actual - centre.budget
                  const pct = (centre.actual / centre.budget) * 100
                  return (
                    <div key={centre.centre}>
                      <div className="flex items-center justify-between text-sm mb-1.5">
                        <span className="text-ink-secondary">{centre.centre}</span>
                        <span className={cn("font-medium tabular-nums", centre.status === "over" ? "text-red-600" : "text-green-600")}>
                          {centre.status === "over" ? "+" : ""}{variance}k
                        </span>
                      </div>
                      <div className="h-2 bg-panel overflow-hidden">
                        <div className={cn("h-full transition-all", centre.status === "over" ? "bg-red-500/70" : "bg-green-500/70")}
                          style={{ width: `${Math.min(pct, 100)}%` }} />
                      </div>
                      <div className="flex items-center justify-between text-xs text-ink-tertiary mt-1">
                        <span>Budget: £{centre.budget}k</span>
                        <span>Actual: £{centre.actual}k</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* System Health + Executive Summary */}
          <div className="grid gap-4 lg:grid-cols-5">
            {/* System Health */}
            <div className="lg:col-span-2 border border-hairline bg-panel">
              <div className="px-6 py-4 border-b border-hairline">
                <h3 className="text-base font-bold text-ink">System Health</h3>
                <p className="text-sm text-ink-secondary">Data integrity across core systems</p>
              </div>
              <div className="p-4 space-y-4">
                {systemHealth.map((system) => {
                  const StatusIcon = system.score >= 4 ? CheckCircle2 : system.score >= 2 ? AlertTriangle : XCircle
                  const statusColor = system.score >= 4 ? "text-green-600" : system.score >= 2 ? "text-amber-600" : "text-red-600"
                  return (
                    <div key={system.system}>
                      <div className="flex items-center justify-between text-sm mb-1.5">
                        <span className="text-ink-secondary">{system.system}</span>
                        <span className={cn("flex items-center gap-1 font-medium", statusColor)}>
                          <StatusIcon className="h-3.5 w-3.5" />
                          {system.status}
                        </span>
                      </div>
                      <div className="h-2 bg-panel overflow-hidden">
                        <div className="h-full transition-all" style={{ width: `${system.score * 20}%`, background: system.color }} />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Executive Summary */}
            <div className="lg:col-span-3 border border-hairline bg-panel/50">
              <div className="px-6 py-4 border-b border-hairline">
                <h3 className="text-base font-bold text-ink">Executive Summary — June 2026</h3>
                <p className="text-sm text-ink-secondary">Key findings and recommended actions</p>
              </div>
              <div className="p-4 space-y-3">
                {[
                  { label: "Throughput", text: "Up 5.2% on last month. Copper volumes strong. Steel slightly down due to reduced demolition intake.", status: "good" },
                  { label: "Margin", text: "Gross margin stable at 18.6%. Brass margin compressed due to supplier price increase — review pricing with commercial team.", status: "warning" },
                  { label: "Stock", text: "£1.94M stock value. 16 discrepancies across 4 sites (£26,300). Manchester depot needs investigation — 7 discrepancies, £12,800.", status: "critical" },
                  { label: "Transport", text: "Average cost £14.20/T. London route up £1.20 due to fuel surcharge. Recommend renegotiating or shifting volume to Manchester route.", status: "warning" },
                  { label: "Cash", text: "Debtor days at 42 — down 3 days. Two large customers still overdue. Recommend credit hold conversation.", status: "good" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className={cn("mt-1.5 h-2 w-2 flex-shrink-0",
                      item.status === "good" ? "bg-green-500" : item.status === "warning" ? "bg-amber-500" : "bg-red-500"
                    )} />
                    <p className="text-sm text-ink-secondary">
                      <strong className="text-ink">{item.label}:</strong> {item.text}
                    </p>
                  </div>
                ))}
                <div className="pt-3 border-t border-hairline">
                  <p className="text-sm font-medium text-ink mb-2">Priority Actions</p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {[
                      "Review brass pricing strategy",
                      "Investigate Manchester stock discrepancies",
                      "Renegotiate London transport route",
                      "Credit hold on overdue accounts",
                    ].map((action, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-ink-secondary">
                        <span className="flex-shrink-0 h-5 w-5 bg-copper/10 text-copper text-xs font-bold flex items-center justify-center">
                          {i + 1}
                        </span>
                        {action}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
