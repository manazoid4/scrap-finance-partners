import { Check } from "lucide-react";
import type { PricingTier } from "@/data/pricing";

export function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <div
      className={`rounded-xl p-6 flex flex-col gap-4 border ${
        tier.featured ? "border-[--color-copper] bg-[--color-panel]" : "border-[--color-hairline] bg-[--color-panel]/50"
      }`}
    >
      {tier.featured && (
        <span className="self-start rounded-full bg-[--color-copper] px-3 py-1 text-xs font-medium text-white">
          Most popular
        </span>
      )}
      <h3 className="text-xl font-semibold">{tier.name}</h3>
      <p className="text-2xl font-semibold">{tier.price}</p>
      <p className="text-sm text-[--color-blue-grey]">{tier.bestFor}</p>
      <ul className="space-y-2 text-sm">
        {tier.includes.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <Check size={16} className="mt-0.5 text-[--color-green] shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
