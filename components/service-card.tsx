export function ServiceCard({
  title,
  description,
  items,
  number,
}: {
  title: string
  description: string
  items?: string[]
  number?: number
}) {
  return (
    <div className="h-full border border-hairline bg-panel transition-all duration-300 hover:border-copper/40 group">
      <div className="p-5 pb-3">
        <div className="flex items-start gap-3">
          {number !== undefined && (
            <span className="flex-shrink-0 h-8 w-8 bg-copper/10 border border-copper/20 flex items-center justify-center text-sm font-bold text-copper font-mono tabular-nums transition-colors group-hover:bg-copper group-hover:text-white">
              {String(number).padStart(2, "0")}
            </span>
          )}
          <div>
            <h3 className="text-lg font-bold leading-tight text-ink">{title}</h3>
            <p className="mt-1 text-sm text-ink-secondary">{description}</p>
          </div>
        </div>
      </div>
      {items && items.length > 0 && (
        <div className="px-5 pb-5">
          <ul className="space-y-2 text-sm text-ink-secondary">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 bg-copper/60 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
