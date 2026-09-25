import Link from "next/link";

const groups = [
  {
    title: "Work",
    links: [
      ["/health-check", "Finance Health Check"],
      ["/services", "How we help"],
      ["/case-studies", "Case study"],
      ["/ways-to-work-together", "Ways to work together"],
    ],
  },
  {
    title: "Reference",
    links: [
      ["/about", "About"],
      ["/updates", "Updates"],
      ["/contact", "Contact"],
      ["/privacy", "Privacy"],
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="border-t-2 border-black bg-graphite text-white">
      <div className="editorial-shell grid grid-cols-1 md:grid-cols-12">
        <div className="border-b border-[#4d534e] p-6 md:col-span-6 md:border-b-0 md:border-r md:p-8">
          <Link href="/" className="font-serif text-2xl font-bold tracking-[-.025em]">
            Scrap Finance Partners
          </Link>
          <p className="mt-5 max-w-lg text-sm text-[#c6cbc5]">
            Commercial finance insight for UK scrap and recycling businesses. Trading, stock,
            transport and finance considered as one commercial picture.
          </p>

          <p className="mt-6 border-t border-[#4d534e] pt-5 text-sm text-[#c6cbc5]">
            Portfolio demo — no business services or enquiries are available through this site.
          </p>
        </div>

        {groups.map((group) => (
          <div
            key={group.title}
            className="border-b border-[#4d534e] p-6 last:border-b-0 md:col-span-3 md:border-b-0 md:border-r md:last:border-r-0 md:p-8"
          >
            <h2 className="font-mono text-[11px] uppercase tracking-[.08em] text-copper">
              {group.title}
            </h2>
            <ul className="mt-5 space-y-1">
              {group.links.map(([href, label]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="inline-flex min-h-11 items-center border-b border-transparent text-sm font-semibold hover:border-copper hover:text-copper"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="editorial-shell border-t border-[#4d534e] px-6 py-5 text-[11px] leading-relaxed text-[#9ea49e] md:px-8">
        <p className="max-w-5xl">
          Commercial consultancy only. This website does not provide legal, tax, audit or
          regulated financial advice, and no saving, margin improvement or financial outcome is
          promised or implied. Specialist work should be handled by appropriately qualified
          professionals.
        </p>
        <p className="mt-3">© {new Date().getFullYear()} Scrap Finance Partners.</p>
        <p className="mt-2"><a href="https://www.mazworks.uk" className="inline-flex min-h-11 items-center underline hover:text-white">Website built by Maz Works</a></p>
      </div>
    </footer>
  );
}
