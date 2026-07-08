import { PremiumCard } from "./premium-card";
import type { CaseStudy } from "@/data/case-studies";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <PremiumCard className="flex flex-col gap-3">
      <h3 className="text-base font-semibold">{study.title}</h3>
      <p className="text-sm text-[--color-blue-grey]"><span className="text-[--color-copper]">Problem:</span> {study.problem}</p>
      <p className="text-sm text-[--color-blue-grey]"><span className="text-[--color-copper]">Action:</span> {study.action}</p>
      <p className="text-sm font-medium"><span className="text-[--color-green]">Impact:</span> {study.impact}</p>
    </PremiumCard>
  );
}
