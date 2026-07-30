import {
  sampleOutputDisclaimer,
  sampleOutputMeta,
  sampleOutputSections,
} from "@/data/sample-output";

/**
 * Illustrative Health Check output, rendered as a document artifact.
 *
 * Server component — no interactivity. Redaction blocks are marked up so that
 * screen readers announce "redacted" rather than reading out block characters.
 */
export default function SampleOutput() {
  return (
    <figure className="exhibit m-0">
      <figcaption className="exhibit-head p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[.08em] text-copper">
              Illustrative document
            </p>
            <p className="mt-3 font-serif text-2xl font-bold leading-tight">
              {sampleOutputMeta.documentTitle}
            </p>
          </div>
          <span className="stamp stamp-invert">{sampleOutputMeta.status}</span>
        </div>
      </figcaption>

      <dl className="exhibit-meta m-0">
        <div>
          <dt className="text-ink-muted">Reference</dt>
          <dd className="m-0 font-bold">
            SFP/HC/
            <Redaction />
          </dd>
        </div>
        <div>
          <dt className="text-ink-muted">Prepared for</dt>
          <dd className="m-0 font-bold">
            <Redaction /> (illustrative)
          </dd>
        </div>
        <div>
          <dt className="text-ink-muted">Issued</dt>
          <dd className="m-0 font-bold">
            <Redaction />
          </dd>
        </div>
        <div>
          <dt className="text-ink-muted">Basis</dt>
          <dd className="m-0 font-bold">Format example</dd>
        </div>
      </dl>

      {sampleOutputSections.map((section) => (
        <section key={section.id} className="exhibit-section">
          <h3 className="font-mono text-[11px] font-bold uppercase tracking-[.08em] text-copper-dim">
            {section.label}
          </h3>
          <p className="mt-3 text-ink-secondary">{section.body}</p>
          {section.rows && (
            <dl className="mt-5 border-t border-hairline">
              {section.rows.map((row) => (
                <div
                  key={row.term}
                  className="flex flex-wrap items-baseline justify-between gap-2 border-b border-hairline py-2.5 last:border-b-0"
                >
                  <dt className="text-sm">{row.term}</dt>
                  <dd className="m-0 font-mono text-sm font-bold">
                    <Redaction />
                    <span className="ml-2 font-sans font-normal text-ink-muted">
                      {row.value.replace(/█+\s*/, "")}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </section>
      ))}

      <p className="border-t-2 border-black bg-graphite p-5 text-sm text-[#c6cbc5]">
        {sampleOutputDisclaimer}
      </p>
    </figure>
  );
}

/** A redacted figure. Announced as "redacted" rather than read out as blocks. */
function Redaction() {
  return (
    <>
      <span className="redacted" aria-hidden>
        ███████
      </span>
      <span className="sr-only">redacted</span>
    </>
  );
}
