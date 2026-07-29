import Link from "next/link";

const groups = [
  { title: "Work", links: [["/health-check", "Finance Health Check"], ["/services", "Services"], ["/pricing", "Ways to work together"], ["/case-studies", "Case study"]] },
  { title: "Reference", links: [["/insights", "Insights"], ["/updates", "Updates"], ["/founder", "About"], ["/privacy", "Privacy"]] },
];

export default function SiteFooter() {
  return <footer className="border-t-2 border-black bg-graphite text-white">
    <div className="editorial-shell grid grid-cols-1 md:grid-cols-12">
      <div className="border-b border-[#4d534e] p-6 md:col-span-6 md:border-b-0 md:border-r md:p-8">
        <Link href="/" className="font-serif text-2xl font-bold tracking-[-.025em]">Scrap Finance Partners</Link>
        <p className="mt-5 max-w-lg text-sm text-[#c6cbc5]">Commercial finance insight for UK scrap and recycling businesses. Trading, stock, transport and finance considered as one commercial picture.</p>
      </div>
      {groups.map((group) => <div key={group.title} className="border-b border-[#4d534e] p-6 last:border-b-0 md:col-span-3 md:border-b-0 md:border-r md:last:border-r-0 md:p-8">
        <h2 className="font-mono text-[11px] uppercase tracking-[.08em] text-copper">{group.title}</h2>
        <ul className="mt-5 space-y-3">{group.links.map(([href, label]) => <li key={href}><Link href={href} className="border-b border-transparent text-sm font-semibold hover:border-copper hover:text-copper">{label}</Link></li>)}</ul>
      </div>)}
    </div>
    <div className="editorial-shell border-t border-[#4d534e] px-6 py-5 text-[11px] leading-relaxed text-[#9ea49e] md:px-8">
      <p className="max-w-5xl">Commercial consultancy only. This website does not provide legal, tax, audit or regulated financial advice. Specialist work should be handled by appropriately qualified professionals.</p>
      <p className="mt-3">© {new Date().getFullYear()} Scrap Finance Partners.</p>
    </div>
  </footer>;
}