import { PremiumCard } from "./premium-card";
import type { GrowthTask } from "@/data/growth-tasks";

export function GrowthBoard({ tasks }: { tasks: GrowthTask[] }) {
  const columns: { key: GrowthTask["category"]; label: string }[] = [
    { key: "now", label: "Now" },
    { key: "next", label: "Next" },
    { key: "later", label: "Later" },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {columns.map((col) => (
        <PremiumCard key={col.key}>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-[--color-copper] mb-3">{col.label}</h3>
          <ul className="space-y-2 text-sm">
            {tasks.filter((t) => t.category === col.key).map((t) => (
              <li key={t.title} className="border-b border-[--color-hairline] pb-2 last:border-0">
                {t.title}
              </li>
            ))}
          </ul>
        </PremiumCard>
      ))}
    </div>
  );
}
