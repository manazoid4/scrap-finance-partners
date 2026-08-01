import Link from "next/link";

import { engagement } from "@/data/health-check";
import { founderContact, hasApprovedContact } from "@/data/founder";

const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "";

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
  const approved = hasApprovedContact() ? founderContact : null;
  const email = approved?.email ?? contactEmail;

  return (
    <footer className="border-t-2 border-black bg-graphite text-white">
      <div className="editorial-shell grid grid-cols-1 md:grid-cols-12">
        <div className="border-b border-[#4d534e] p-6 md:col-span-6 md:border-b-0 md:border-r md:p-8">
          <Link href="/" className="text-2xl font-bold uppercase tracking-[-.04em]">
            Scrap Finance <span className="text-copper">Partners</span>
          </Link>
          <p className="mt-5 max-w-lg text-sm text-[#c6cbc5]">
            Commercial finance insight for UK scrap and recycling businesses. Trading, stock,
            transport and finance considered as one commercial picture.
          </p>

          <div className="mt-6 border-t border-[#4d534e] pt-5">
            <p className="font-mono text-[11px] uppercase tracking-[.08em] text-copper">
              Rather talk than fill in a form?
            </p>
            {email ? (
              <p className="mt-3">
                <a
                  href={`mailto:${email}`}
                  className="inline-flex min-h-11 items-center border-b-2 border-copper font-bold hover:text-copper"
                >
                  {email}
                </a>
              </p>
            ) : (
              <p className="mt-3 text-sm text-[#c6cbc5]">
                <Link href="/contact" className="font-bold underline hover:text-copper">
                  Send an enquiry
                </Link>{" "}
                and you will get a reply {engagement.responseWindow}.
              </p>
            )}
            {approved?.telephone && approved.telephoneHref && (
              <p className="mt-2">
                <a
                  href={approved.telephoneHref}
                  className="inline-flex min-h-11 items-center border-b-2 border-copper font-bold hover:text-copper"
                >
                  {approved.telephone}
                </a>
              </p>
            )}
          </div>
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
      </div>
    </footer>
  );
}
