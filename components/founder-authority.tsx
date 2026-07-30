import Image from "next/image";
import Link from "next/link";

import {
  approvedExperienceStatement,
  founderContact,
  founderIdentity,
  hasApprovedContact,
  hasApprovedIdentity,
} from "@/data/founder";

/**
 * Founder authority block.
 *
 * Renders whatever the client has approved and silently omits the rest. While
 * the identity is PENDING it still makes a substantive statement — the approved
 * experience claim, and the fact that one person does the work — rather than
 * leaving a visible hole or inventing a name.
 */
export default function FounderAuthority({
  variant = "compact",
}: {
  variant?: "compact" | "full";
}) {
  const identity = hasApprovedIdentity() ? founderIdentity : null;
  const contact = hasApprovedContact() ? founderContact : null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12">
      <div className="border-b-2 border-black bg-copper p-6 text-graphite sm:p-8 lg:col-span-5 lg:border-b-0 lg:border-r-2 lg:p-10">
        {identity?.portrait ? (
          <Image
            src={identity.portrait.src}
            alt={identity.portrait.alt}
            width={identity.portrait.width}
            height={identity.portrait.height}
            className="mb-7 w-full max-w-xs border-2 border-graphite"
          />
        ) : null}

        {identity?.name ? (
          <>
            <p className="font-serif text-3xl font-bold leading-tight">{identity.name}</p>
            {identity.role && (
              <p className="mt-2 font-mono text-sm uppercase tracking-[.08em]">{identity.role}</p>
            )}
            <p className="mt-6 border-t-2 border-graphite pt-5 font-bold">
              {approvedExperienceStatement}
            </p>
          </>
        ) : (
          <p className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] font-bold leading-[1.05]">
            {approvedExperienceStatement}
          </p>
        )}
      </div>

      <div className="lg:col-span-7">
        <div className="border-b border-black p-6 sm:p-8 lg:p-10">
          <h2 className="text-[clamp(1.5rem,2.4vw,2.2rem)]">
            One person does the work, and you will know who.
          </h2>
          <p className="mt-5 text-ink-secondary">
            {identity?.personalStatement ??
              "The review is carried out by the person you speak to. There is no team of analysts behind the curtain, no work passed down to a junior, and no sales function between you and the person doing the thinking. That is the point of a practice this size."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="border-b border-black p-6 sm:border-b-0 sm:border-r sm:p-8">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[.08em] text-copper-dim">
              Sector
            </p>
            <p className="mt-3 font-semibold">
              UK scrap metal, recycling and waste — not a general practice that also takes scrap
              clients.
            </p>
          </div>
          <div className="p-6 sm:p-8">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[.08em] text-copper-dim">
              Direct contact
            </p>
            {contact ? (
              <p className="mt-3 font-semibold">
                {contact.email && (
                  <a href={`mailto:${contact.email}`} className="editorial-link">
                    {contact.email}
                  </a>
                )}
                {contact.telephone && contact.telephoneHref && (
                  <>
                    <br />
                    <a href={contact.telephoneHref} className="editorial-link mt-2">
                      {contact.telephone}
                    </a>
                  </>
                )}
              </p>
            ) : (
              <p className="mt-3 font-semibold">
                Enquiries go straight to the person who would do the work.{" "}
                <Link href="/contact" className="editorial-link">
                  Send one here
                </Link>
              </p>
            )}
          </div>
        </div>

        {variant === "full" && (
          <div className="border-t border-black p-6 sm:p-8">
            <p className="text-sm text-ink-muted">
              The full professional background, including name and photograph, is published once
              confirmed. Nothing about the person doing this work is stated on this site until it
              can be evidenced.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
