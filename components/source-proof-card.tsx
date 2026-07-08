import { PremiumCard } from "./premium-card";
import type { ProofPoint } from "@/data/founder";

export function SourceProofCard({ proof }: { proof: ProofPoint }) {
  return (
    <PremiumCard className="text-center">
      <p className="text-3xl font-semibold text-[--color-copper]">{proof.stat}</p>
      <p className="mt-2 text-sm font-medium">{proof.label}</p>
      <p className="mt-2 text-xs text-[--color-blue-grey]">{proof.context}</p>
    </PremiumCard>
  );
}
