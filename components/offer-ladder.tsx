import { PremiumCard } from "./premium-card";
import { oneOffs } from "@/data/pricing";

export function OfferLadder() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {oneOffs.map((offer) => (
        <PremiumCard key={offer.slug} className="flex flex-col gap-2">
          <h3 className="text-base font-semibold">{offer.name}</h3>
          <p className="text-sm text-[--color-copper] font-medium">{offer.price}</p>
          <p className="text-sm text-[--color-blue-grey]">{offer.description}</p>
        </PremiumCard>
      ))}
    </div>
  );
}
