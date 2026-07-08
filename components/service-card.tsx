import { PremiumCard } from "./premium-card";
import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <PremiumCard className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold">{service.title}</h3>
      <p className="text-sm text-[--color-blue-grey]">{service.problem}</p>
      <p className="text-sm">{service.whatWeDo}</p>
      <div>
        <p className="text-xs uppercase tracking-wide text-[--color-copper] mb-2">Typical symptoms</p>
        <ul className="space-y-1 text-sm text-[--color-blue-grey]">
          {service.symptoms.map((s) => (
            <li key={s}>- {s}</li>
          ))}
        </ul>
      </div>
      <p className="text-sm border-l-2 border-[--color-copper] pl-3 text-[--color-blue-grey]">
        {service.founderProof}
      </p>
      <p className="text-sm font-medium">{service.outcome}</p>
      <div className="flex flex-wrap gap-2 pt-2">
        {service.deliverables.map((d) => (
          <span key={d} className="rounded-full border border-[--color-hairline] px-3 py-1 text-xs text-[--color-blue-grey]">
            {d}
          </span>
        ))}
      </div>
    </PremiumCard>
  );
}
