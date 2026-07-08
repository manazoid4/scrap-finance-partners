import type { TimelineEntry } from "@/data/founder";

export function FounderTimeline({ timeline }: { timeline: TimelineEntry[] }) {
  return (
    <div className="space-y-8">
      {timeline.map((entry) => (
        <div key={entry.period} className="grid md:grid-cols-[140px_1fr] gap-4 border-l-2 border-[--color-hairline] pl-6 relative">
          <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-[--color-copper]" />
          <p className="text-sm font-mono text-[--color-copper]">{entry.period}</p>
          <div>
            <p className="font-semibold">{entry.role}</p>
            <p className="text-sm text-[--color-blue-grey] mb-2">{entry.organisation}</p>
            <ul className="space-y-1 text-sm">
              {entry.highlights.map((h) => <li key={h}>- {h}</li>)}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
