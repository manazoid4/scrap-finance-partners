import { PremiumCard } from "./premium-card";
import type { PainPoint } from "@/data/audience";

export function AudiencePainGrid({ pains }: { pains: PainPoint[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {pains.map((pain) => (
        <PremiumCard key={pain.title}>
          <h3 className="text-sm font-semibold">{pain.title}</h3>
          <p className="mt-2 text-sm text-[--color-blue-grey]">{pain.description}</p>
        </PremiumCard>
      ))}
    </div>
  );
}
