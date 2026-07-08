import { PremiumCard } from "./premium-card";
import { diagnosticCategories } from "@/data/diagnostic-questions";

export function DiagnosticScorecard() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {diagnosticCategories.map((cat) => (
        <PremiumCard key={cat.category}>
          <h3 className="text-sm font-semibold mb-2">{cat.category}</h3>
          <ul className="space-y-1 text-sm text-[--color-blue-grey]">
            {cat.questions.map((q) => <li key={q}>- {q}</li>)}
          </ul>
        </PremiumCard>
      ))}
    </div>
  );
}
