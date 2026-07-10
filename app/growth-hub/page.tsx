export default function GrowthHubPage() {
  const columns = [
    {
      title: "Now",
      color: "border-l-blue-500",
      items: [
        { title: "Finalise Positioning", desc: "Confirm exact wording for founder authority block and main hero." },
        { title: "Create Lead Magnet", desc: "Draft the 'Scrap Yard Finance Health Check' PDF." },
        { title: "Dummy Dashboards", desc: "Build 3 variants of the KPI dashboard for the demo page." },
      ]
    },
    {
      title: "Next",
      color: "border-l-amber-500",
      items: [
        { title: "Outreach List", desc: "Build list of 50 UK scrap/recycling firms targeting £5M–£50M turnover." },
        { title: "LinkedIn Content", desc: "Draft first 10 posts and 2 long-form articles." },
        { title: "Proposal Template", desc: "Design the standard proposal flow mapping pain to retainer tier." },
      ]
    },
    {
      title: "Later",
      color: "border-l-slate-400",
      items: [
        { title: "CRM Integration", desc: "Connect contact forms to a lightweight CRM (e.g., Notion or HubSpot)." },
        { title: "Client Portal", desc: "Secure area for clients to view their dashboards and action logs." },
      ]
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="border-b border-hairline bg-graphite">
        <div className="container px-4 py-16 md:py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-ink">
              Growth Hub
            </h1>
            <p className="mt-4 text-lg text-ink-secondary">
              Internal strategic planning and execution.
            </p>
          </div>
        </div>
      </section>

      {/* Kanban */}
      <section className="container px-4 py-10 md:py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {columns.map((col) => (
            <div key={col.title} className="space-y-4">
              <h2 className="text-xl font-bold border-b border-hairline pb-2 text-ink">{col.title}</h2>
              {col.items.map((item, i) => (
                <div
                  key={i}
                  className={`border border-hairline bg-panel p-4 ${col.color} border-l-4 hover:bg-panel-alt transition-colors`}
                >
                  <h3 className="text-sm font-bold text-ink mb-1">{item.title}</h3>
                  <p className="text-xs text-ink-secondary leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
