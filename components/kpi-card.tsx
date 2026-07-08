import { ArrowUpRight, ArrowDownRight, Minus } from "lucide-react";
import { PremiumCard } from "./premium-card";
import type { Kpi } from "@/data/kpis";

export function KpiCard({ kpi }: { kpi: Kpi }) {
  const trendColor =
    kpi.trend === "up" ? "text-[--color-green]" : kpi.trend === "down" ? "text-[--color-amber]" : "text-[--color-blue-grey]";
  const TrendIcon = kpi.trend === "up" ? ArrowUpRight : kpi.trend === "down" ? ArrowDownRight : Minus;

  return (
    <PremiumCard>
      <p className="text-xs uppercase tracking-wide text-[--color-blue-grey]">{kpi.label}</p>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-2xl font-semibold">{kpi.value}</span>
        {kpi.unit && <span className="text-sm text-[--color-blue-grey]">{kpi.unit}</span>}
      </div>
      {kpi.delta && (
        <div className={`mt-2 flex items-center gap-1 text-sm ${trendColor}`}>
          <TrendIcon size={14} />
          <span>{kpi.delta}</span>
        </div>
      )}
    </PremiumCard>
  );
}
