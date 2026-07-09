export default function AgentsPage() {
  return (
    <div className="container py-12 px-4 md:px-6">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight">Agent Library</h1>
        <p className="text-muted-foreground mt-2">Specialised prompts and workflows for the consultancy engine.</p>
      </div>
      <div className="grid gap-4">
        <div className="border rounded-lg p-4">
          <h2 className="font-bold text-lg">Industry Research Agent</h2>
          <p className="text-sm text-muted-foreground mt-1">Research UK scrap metal market, competitors, and regulation shifts.</p>
          <div className="mt-2 text-xs font-mono bg-muted p-2 rounded">/agents/industry-research-agent.md</div>
        </div>
        <div className="border rounded-lg p-4">
          <h2 className="font-bold text-lg">Finance Diagnostic Agent</h2>
          <p className="text-sm text-muted-foreground mt-1">Turn client interview notes into a finance health check.</p>
          <div className="mt-2 text-xs font-mono bg-muted p-2 rounded">/agents/finance-diagnostic-agent.md</div>
        </div>
        <div className="border rounded-lg p-4">
          <h2 className="font-bold text-lg">Fred Systems Agent</h2>
          <p className="text-sm text-muted-foreground mt-1">Diagnose Fred reporting, stock sheets, and EWC codes.</p>
          <div className="mt-2 text-xs font-mono bg-muted p-2 rounded">/agents/fred-systems-agent.md</div>
        </div>
      </div>
    </div>
  )
}
