export default function KnowledgePage() {
  return (
    <div className="container py-12 px-4 md:px-6">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight">Knowledge Vault</h1>
        <p className="text-muted-foreground mt-2">Internal documentation and playbooks.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <h2 className="font-semibold text-lg border-b pb-1">Industry Knowledge</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Scrap finance primer</li>
            <li>Fred reporting notes</li>
            <li>Compliance and risk boundaries</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h2 className="font-semibold text-lg border-b pb-1">Operations</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Stock accuracy playbook</li>
            <li>Outreach playbook</li>
            <li>Retainer offer notes</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
