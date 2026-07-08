import { PremiumCard } from "./premium-card";
import type { AgentDef } from "@/data/agents";

export function AgentCard({ agent }: { agent: AgentDef }) {
  return (
    <PremiumCard className="flex flex-col gap-3">
      <h3 className="text-base font-semibold">{agent.name}</h3>
      <p className="text-sm text-[--color-blue-grey]">{agent.role}</p>
      <p className="text-sm">{agent.useCase}</p>
      <div className="grid grid-cols-2 gap-4 text-xs pt-2">
        <div>
          <p className="uppercase tracking-wide text-[--color-copper] mb-1">Inputs</p>
          <ul className="space-y-0.5 text-[--color-blue-grey]">
            {agent.inputs.map((i) => <li key={i}>- {i}</li>)}
          </ul>
        </div>
        <div>
          <p className="uppercase tracking-wide text-[--color-copper] mb-1">Outputs</p>
          <ul className="space-y-0.5 text-[--color-blue-grey]">
            {agent.outputs.map((o) => <li key={o}>- {o}</li>)}
          </ul>
        </div>
      </div>
      <p className="text-xs font-mono text-[--color-blue-grey] pt-2 border-t border-[--color-hairline]">
        {agent.filePath}
      </p>
    </PremiumCard>
  );
}
