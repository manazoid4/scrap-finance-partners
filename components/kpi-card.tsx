import { ArrowUpRight, ArrowDownRight, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

function Sparkline({ data, color }: { data: number[]; color: string }) {
  const width = 120
  const height = 36
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1
  const step = width / (data.length - 1)

  const points = data.map((v, i) => {
    const x = i * step
    const y = height - ((v - min) / range) * (height - 4) - 2
    return `${x},${y}`
  })

  const pathD = `M ${points.join(" L ")}`
  const areaD = `${pathD} L ${width},${height} L 0,${height} Z`

  return (
    <svg width={width} height={height} className="overflow-visible">
      <defs>
        <linearGradient id={`spark-${color.replace(/[^a-z0-9]/gi, "")}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity={0.2} />
          <stop offset="100%" stopColor={color} stopOpacity={0} />
        </linearGradient>
      </defs>
      <path d={areaD} fill={`url(#spark-${color.replace(/[^a-z0-9]/gi, "")})`} />
      <path d={pathD} fill="none" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function KpiCard({
  title,
  value,
  change,
  trend,
  sparkData,
  accentColor,
}: {
  title: string
  value: string
  change?: string
  trend?: "up" | "down" | "neutral"
  sparkData?: number[]
  accentColor?: string
}) {
  const trendColor =
    trend === "up" ? "text-green-600" : trend === "down" ? "text-red-600" : "text-ink-tertiary"
  const sparkColor =
    accentColor ?? (trend === "up" ? "#4c6b57" : trend === "down" ? "#c0392b" : "#7c8a99")
  const TrendIcon = trend === "up" ? ArrowUpRight : trend === "down" ? ArrowDownRight : Minus

  return (
    <div className="border border-hairline bg-panel relative overflow-hidden transition-all hover:border-copper/40">
      <div className="p-5">
        <div className="flex items-start justify-between">
          <p className="text-xs font-medium text-ink-tertiary uppercase tracking-wide">{title}</p>
          {change && (
            <div className={cn("flex items-center gap-0.5 text-xs font-semibold", trendColor)}>
              <TrendIcon className="h-3 w-3" />
              {change}
            </div>
          )}
        </div>
        <div className="mt-2 flex items-end justify-between">
          <p className="text-2xl font-bold tabular-nums tracking-tight text-ink">{value}</p>
          {sparkData && sparkData.length > 1 && (
            <div className="opacity-80">
              <Sparkline data={sparkData} color={sparkColor} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
