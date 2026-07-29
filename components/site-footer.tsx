import Link from "next/link";

const sections = [
  { title: "Work with us", links: [["/health-check", "Finance Health Check"], ["/services", "Services"], ["/pricing", "Ways to work together"], ["/case-studies", "Case study"]] },
  { title: "Explore", links: [["/insights", "Insights"], ["/updates", "Updates"], ["/software", "YardLedger — exploring"], ["/contact", "Contact"], ["/privacy", "Privacy"]] },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-hairline bg-navy">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="grid min-w-0 grid-cols-1 gap-10 py-12 md:grid-cols-4">
          <div className="min-w-0 md:col-span-2">
            <Link href="/" className="group flex items-center gap-2.5"><span className="h-2 w-2 shrink-0 bg-copper" /><span className="text-sm font-semibold tracking-tight text-ink">Scrap Finance Partners</span></Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-secondary">Commercial finance insight for UK scrap and recycling businesses. We connect trading, stock, transport and finance so owners can make better-informed decisions.</p>
          </div>
          {sections.map((section) => <div key={section.title} className="min-w-0"><h2 className="font-sans text-xs font-semibold uppercase tracking-wider text-ink-muted">{section.title}</h2><ul className="mt-4 space-y-2.5">{section.links.map(([href, label]) => <li key={href}><Link href={href} className="text-sm text-ink-secondary transition-colors hover:text-copper">{label}</Link></li>)}</ul></div>)}
        </div>
        <div className="border-t border-hairline py-6">
          <p className="max-w-4xl text-xs leading-relaxed text-ink-muted">This website describes commercial consultancy and does not provide legal, tax, audit or regulated financial advice. Formal accountancy, tax, audit, AML or compliance work should be handled by appropriately qualified professionals.</p>
          <p className="mt-3 text-xs text-ink-muted">&copy; {new Date().getFullYear()} Scrap Finance Partners. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}