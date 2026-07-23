import Link from "next/link";
import type { Metadata } from "next";
import "./nocturne.css";

export const metadata: Metadata = {
  title: "Scrap Finance Partners — Turn yard chaos into board-grade numbers",
  description:
    "Stock that doesn't match reality. Margin that's a guess. Transport cost nobody can see. We fix it — as a hands-on consultancy, and as YardLedger, the reporting software built for the yard.",
};

const problems = [
  { title: "Stock doesn't match reality", body: "Physical stock and system stock disagree, and nobody has time to find out why." },
  { title: "Margin is a guess", body: "Gross margin is reported late, or not broken down by material category." },
  { title: "Transport cost is invisible", body: "No cost-per-tonne view, so overspend is only found at month-end." },
  { title: "Reports nobody trusts", body: "Commercial, Operations and Finance all quote different numbers." },
  { title: "Manual spreadsheet risk", body: "Multiple spreadsheet versions in circulation, with no single source of truth." },
  { title: "No finance business partner", body: "Can't justify a full-time FD, but decisions are made without finance input." },
];

const stats = [
  { value: "£120k", label: "Manual reporting cost removed" },
  { value: "£90k", label: "Supplier overpayments recovered" },
  { value: "£20k", label: "Overpayment uncovered by audit" },
  { value: "26 yrs", label: "Inside scrap metal finance" },
];

const services = [
  { n: "01", title: "KPI Dashboard & Reporting", body: "Turn messy data into clear decisions — monthly throughput, gross margin by category, transport cost per tonne, debtor days." },
  { n: "02", title: "Outsourced Finance Director", body: "Senior financial leadership without the full-time cost — board-style packs, monthly strategy meetings, cashflow forecasting." },
  { n: "03", title: "Stock Accuracy & Reconciliation", body: "Find hidden margin leaks — discrepancy investigation, visibility processes, yard map reporting, reconciliation controls." },
  { n: "04", title: "Fred Reporting Improvement", body: "Get the most out of your Fred system — stock sheet optimisation, EWC code maintenance, transport module workflow." },
];

const caseStudies = [
  { kicker: "Manual Reporting Reduction", title: "Redundant spreadsheets, digitised", body: "Removed duplicate manual processes across teams.", figure: "£120k annual saving" },
  { kicker: "Supplier Reconciliation", title: "250+ accounts reconciled", body: "Supplier overpayments going unnoticed across sites.", figure: "£90k recovered" },
  { kicker: "Audit Validation Control", title: "Stronger supplier controls", body: "Introduced audit checks against overpayment risk.", figure: "£20k uncovered" },
];

export default function Home() {
  return (
    <div className="nocturne" style={{ minHeight: "100vh" }}>
      <nav
        className="nav"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backdropFilter: "blur(10px)",
          background: "color-mix(in srgb, var(--color-bg) 86%, transparent)",
          borderBottom: "1px solid var(--color-divider)",
          padding: "14px clamp(20px,5vw,72px)",
          gap: "clamp(10px,2vw,28px)",
          flexWrap: "wrap",
        }}
      >
        <Link href="/" className="nav-brand" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", color: "var(--color-text)", whiteSpace: "nowrap" }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--color-accent)", boxShadow: "0 0 12px var(--color-accent)", flex: "none" }} />
          Scrap Finance Partners
        </Link>
        <Link href="/services" style={{ whiteSpace: "nowrap" }}>Services</Link>
        <Link href="/health-check" style={{ whiteSpace: "nowrap" }}>Health Check</Link>
        <Link href="/software" style={{ whiteSpace: "nowrap" }}>YardLedger</Link>
        <Link href="/pricing" style={{ whiteSpace: "nowrap" }}>Pricing</Link>
        <Link href="/founder" style={{ whiteSpace: "nowrap" }}>Founder</Link>
        <Link href="/contact" style={{ whiteSpace: "nowrap" }}>Contact</Link>
        <Link href="/health-check" className="btn btn-primary" style={{ whiteSpace: "nowrap" }}>Book a Health Check</Link>
      </nav>

      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 clamp(20px,5vw,72px)" }}>
        <section style={{ padding: "88px 0 64px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(420px,1fr))", gap: 56, alignItems: "center" }}>
          <div>
            <span style={{ display: "block", position: "relative", paddingLeft: 56, fontSize: 13, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 20 }}>
              <span style={{ position: "absolute", left: 0, top: "50%", width: 44, height: 1, background: "var(--color-accent)" }} />
              For UK scrap &amp; recycling businesses
            </span>
            <h1 style={{ fontSize: "clamp(40px,5.4vw,74px)", lineHeight: 1.04, letterSpacing: "-0.02em", maxWidth: "15ch", marginBottom: 24 }}>
              Turn yard chaos into board&#8209;grade numbers.
            </h1>
            <p style={{ fontSize: 19, lineHeight: 1.6, maxWidth: "54ch", color: "color-mix(in srgb, var(--color-text) 78%, transparent)", marginBottom: 32 }}>
              Stock that doesn&rsquo;t match reality. Margin that&rsquo;s a guess. Transport cost nobody can see. We fix it &mdash; as a hands&#8209;on consultancy, and as YardLedger, the reporting software built for the yard.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 32 }}>
              <Link href="/health-check" className="btn btn-primary" style={{ height: 44, paddingInline: 20, fontSize: 15, whiteSpace: "nowrap" }}>
                Book a Health Check &mdash; &pound;2,500
              </Link>
              <Link href="/software" className="btn btn-secondary" style={{ height: 44, paddingInline: 20, fontSize: 15, whiteSpace: "nowrap" }}>
                See YardLedger
              </Link>
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <span className="tag tag-outline">26 years inside scrap finance</span>
              <span className="tag tag-outline">&pound;230k+ recovered for clients</span>
              <span className="tag tag-outline">Fred &middot; Xero &middot; D365 fluent</span>
            </div>
          </div>

          <div className="card elev-lg" style={{ padding: 20, gap: 16 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span className="card-kicker">Yard health &mdash; this month</span>
              <span className="tag tag-accent">Live in YardLedger</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              <div style={{ background: "var(--color-bg)", borderRadius: "var(--radius-md)", padding: 14 }}>
                <div style={{ fontSize: 11, letterSpacing: ".06em", textTransform: "uppercase", color: "color-mix(in srgb, var(--color-text) 60%, transparent)", marginBottom: 6 }}>Throughput</div>
                <div style={{ fontSize: 24, fontFeatureSettings: "'tnum' 1" }}>4,280 <span style={{ fontSize: 13, fontWeight: 400, color: "color-mix(in srgb, var(--color-text) 60%, transparent)" }}>t</span></div>
                <div style={{ fontSize: 12, color: "var(--color-accent-300)", marginTop: 2 }}>&#9650; 3.1% vs last month</div>
                <svg width="100%" height="30" viewBox="0 0 100 30" preserveAspectRatio="none" style={{ marginTop: 8, display: "block" }}>
                  <polyline points="0,30 20,21.5 40,17.6 60,25.4 80,8.5 100,0" fill="none" stroke="var(--color-accent)" strokeWidth={2} />
                </svg>
              </div>
              <div style={{ background: "var(--color-bg)", borderRadius: "var(--radius-md)", padding: 14 }}>
                <div style={{ fontSize: 11, letterSpacing: ".06em", textTransform: "uppercase", color: "color-mix(in srgb, var(--color-text) 60%, transparent)", marginBottom: 6 }}>Gross margin</div>
                <div style={{ fontSize: 24, fontFeatureSettings: "'tnum' 1" }}>18.6%</div>
                <div style={{ fontSize: 12, color: "var(--color-accent-300)", marginTop: 2 }}>&#9650; 0.8pp vs last month</div>
              </div>
              <div style={{ background: "var(--color-bg)", borderRadius: "var(--radius-md)", padding: 14 }}>
                <div style={{ fontSize: 11, letterSpacing: ".06em", textTransform: "uppercase", color: "color-mix(in srgb, var(--color-text) 60%, transparent)", marginBottom: 6 }}>Transport cost / tonne</div>
                <div style={{ fontSize: 24, fontFeatureSettings: "'tnum' 1" }}>&pound;14.20</div>
                <div style={{ fontSize: 12, color: "var(--color-neutral-400)", marginTop: 2 }}>&#9660; up &pound;0.60 &mdash; flagged</div>
              </div>
              <div style={{ background: "var(--color-bg)", borderRadius: "var(--radius-md)", padding: 14 }}>
                <div style={{ fontSize: 11, letterSpacing: ".06em", textTransform: "uppercase", color: "color-mix(in srgb, var(--color-text) 60%, transparent)", marginBottom: 6 }}>Debtor days</div>
                <div style={{ fontSize: 24, fontFeatureSettings: "'tnum' 1" }}>42</div>
                <div style={{ fontSize: 12, color: "var(--color-accent-300)", marginTop: 2 }}>&#9650; 3 days better</div>
              </div>
            </div>
            <Link href="/dashboard-demo" className="btn btn-ghost" style={{ alignSelf: "flex-start" }}>Open the full dashboard demo &rarr;</Link>
          </div>
        </section>

        <hr className="hr" style={{ margin: "8px 0 64px" }} />

        <section style={{ paddingBottom: 72 }}>
          <span style={{ display: "block", position: "relative", paddingLeft: 56, fontSize: 13, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 16 }}>
            <span style={{ position: "absolute", left: 0, top: "50%", width: 44, height: 1, background: "var(--color-accent)" }} />
            The problem
          </span>
          <h2 style={{ fontSize: "clamp(28px,3vw,38px)", maxWidth: "20ch", marginBottom: 40 }}>Why the numbers stop being trusted</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 16 }}>
            {problems.map((p) => (
              <div className="card" key={p.title}>
                <div className="card-title">{p.title}</div>
                <p className="card-body">{p.body}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section
        style={{
          background: "radial-gradient(900px 420px at 85% -40%, var(--color-section-glow), transparent 64%), var(--color-section)",
          padding: "64px 0",
        }}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 clamp(20px,5vw,72px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 32 }}>
            {stats.map((s) => (
              <div key={s.label}>
                <div style={{ fontSize: "clamp(32px,3.4vw,48px)", marginBottom: 6 }}>{s.value}</div>
                <div style={{ fontSize: 13, letterSpacing: ".06em", textTransform: "uppercase", color: "color-mix(in srgb, var(--color-text) 70%, transparent)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 clamp(20px,5vw,72px)" }}>
        <section style={{ padding: "72px 0" }}>
          <span style={{ display: "block", position: "relative", paddingLeft: 56, fontSize: 13, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 16 }}>
            <span style={{ position: "absolute", left: 0, top: "50%", width: 44, height: 1, background: "var(--color-accent)" }} />
            How we help
          </span>
          <h2 style={{ fontSize: "clamp(28px,3vw,38px)", maxWidth: "22ch", marginBottom: 12 }}>A few of the ways we bring finance under control</h2>
          <p style={{ fontSize: 16, color: "color-mix(in srgb, var(--color-text) 70%, transparent)", maxWidth: "60ch", marginBottom: 40 }}>
            Six services, one goal: numbers the owner can act on. <Link href="/services">See all six &rarr;</Link>
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(64px,120px) minmax(0,1fr)", gap: "20px clamp(20px,4vw,56px)" }}>
            {services.map((s, i) => (
              <div style={{ display: "contents" }} key={s.n}>
                <div style={{ fontSize: 15, color: "var(--color-accent)", fontFeatureSettings: "'tnum' 1" }}>{s.n}</div>
                <div
                  style={
                    i < services.length - 1
                      ? { borderBottom: "1px solid var(--color-divider)", paddingBottom: 28, marginBottom: 4 }
                      : { paddingBottom: 4 }
                  }
                >
                  <h3 style={{ fontSize: 22, marginBottom: 6 }}>{s.title}</h3>
                  <p style={{ margin: 0, fontSize: 15, color: "color-mix(in srgb, var(--color-text) 78%, transparent)", maxWidth: "60ch" }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="hr" style={{ margin: "8px 0 64px" }} />

        <section style={{ paddingBottom: 72 }}>
          <span style={{ display: "block", position: "relative", paddingLeft: 56, fontSize: 13, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 16 }}>
            <span style={{ position: "absolute", left: 0, top: "50%", width: 44, height: 1, background: "var(--color-accent)" }} />
            Two ways to work with us
          </span>
          <h2 style={{ fontSize: "clamp(28px,3vw,38px)", maxWidth: "24ch", marginBottom: 40 }}>Hands-on consultancy, or software that does it for you</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(360px,1fr))", gap: 24 }}>
            <div className="card elev-md" style={{ padding: 28, gap: 16 }}>
              <span className="tag tag-outline" style={{ alignSelf: "flex-start" }}>Consultancy</span>
              <div className="card-title" style={{ fontSize: 24 }}>Scrap Finance Partners</div>
              <p className="card-body" style={{ fontSize: 15, opacity: 1, color: "color-mix(in srgb, var(--color-text) 82%, transparent)" }}>
                A finance director who already knows Fred, EWC codes and stock sheets &mdash; working alongside your team monthly.
              </p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: 8, fontSize: 14 }}>
                <li>&mdash; Health Check diagnostic, from &pound;2,500</li>
                <li>&mdash; Fixed-scope sprints, from &pound;4,000</li>
                <li>&mdash; Monthly retainers, from &pound;1,500/mo</li>
              </ul>
              <Link href="/services" className="btn btn-primary" style={{ alignSelf: "flex-start", marginTop: 8 }}>Explore services</Link>
            </div>
            <div className="card elev-md" style={{ padding: 28, gap: 16 }}>
              <span className="tag tag-accent" style={{ alignSelf: "flex-start" }}>Software</span>
              <div className="card-title" style={{ fontSize: 24 }}>YardLedger</div>
              <p className="card-body" style={{ fontSize: 15, opacity: 1, color: "color-mix(in srgb, var(--color-text) 82%, transparent)" }}>
                The reporting layer built for scrap yards &mdash; stock, margin, transport and cash in one owner-grade dashboard.
              </p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: 8, fontSize: 14 }}>
                <li>&mdash; Grade-level stock bridge</li>
                <li>&mdash; Margin per tonne by material</li>
                <li>&mdash; Board-ready PDF snapshot</li>
              </ul>
              <Link href="/software" className="btn btn-primary" style={{ alignSelf: "flex-start", marginTop: 8 }}>See YardLedger</Link>
            </div>
          </div>
        </section>

        <hr className="hr" style={{ margin: "8px 0 64px" }} />

        <section style={{ paddingBottom: 72 }}>
          <span style={{ display: "block", position: "relative", paddingLeft: 56, fontSize: 13, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 16 }}>
            <span style={{ position: "absolute", left: 0, top: "50%", width: 44, height: 1, background: "var(--color-accent)" }} />
            Proven results
          </span>
          <h2 style={{ fontSize: "clamp(28px,3vw,38px)", marginBottom: 40 }}>Real numbers, real yards</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 16, marginBottom: 32 }}>
            {caseStudies.map((c) => (
              <div className="card" key={c.kicker}>
                <div className="card-kicker">{c.kicker}</div>
                <div className="card-title">{c.title}</div>
                <p className="card-body">{c.body}</p>
                <div style={{ fontSize: 22, color: "var(--color-accent-300)", marginTop: 4 }}>{c.figure}</div>
              </div>
            ))}
          </div>
          <Link href="/case-studies">See all case studies &rarr;</Link>
        </section>

        <hr className="hr" style={{ margin: "8px 0 64px" }} />

        <section style={{ paddingBottom: 80, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 48, alignItems: "center" }}>
          <div
            aria-hidden="true"
            style={{
              width: "100%",
              aspectRatio: "4 / 5",
              borderRadius: 14,
              background: "var(--color-surface)",
              border: "1px solid var(--color-divider)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 13,
              color: "color-mix(in srgb, var(--color-text) 55%, transparent)",
            }}
          >
            Founder photograph
          </div>
          <div>
            <span style={{ display: "block", position: "relative", paddingLeft: 56, fontSize: 13, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 16 }}>
              <span style={{ position: "absolute", left: 0, top: "50%", width: 44, height: 1, background: "var(--color-accent)" }} />
              Why trust us
            </span>
            <h2 style={{ fontSize: "clamp(26px,2.8vw,34px)", marginBottom: 16 }}>Operator-grade finance knowledge, not consultancy theory</h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "color-mix(in srgb, var(--color-text) 80%, transparent)", marginBottom: 20, maxWidth: "52ch" }}>
              26 years inside Finance, Operations, Commercial, Transport and Systems at real scrap and recycling businesses &mdash; building the reports, fixing the stock sheets, sitting in the transport performance meetings.
            </p>
            <Link href="/founder" className="btn btn-secondary">Meet the founder</Link>
          </div>
        </section>
      </div>

      <section
        style={{
          padding: "72px 0",
          background: "var(--color-surface)",
          borderTop: "1px solid var(--color-divider)",
          borderBottom: "1px solid var(--color-divider)",
        }}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 clamp(20px,5vw,72px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(360px,1fr))", gap: 40, alignItems: "center" }}>
          <div>
            <span style={{ display: "block", position: "relative", paddingLeft: 56, fontSize: 13, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 16 }}>
              <span style={{ position: "absolute", left: 0, top: "50%", width: 44, height: 1, background: "var(--color-accent)" }} />
              Start here
            </span>
            <h2 style={{ fontSize: "clamp(28px,3vw,38px)", marginBottom: 12 }}>Book the Scrap Yard Finance Health Check</h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "color-mix(in srgb, var(--color-text) 80%, transparent)", maxWidth: "56ch" }}>
              A one-week diagnostic across stock, margin, cash, Fred/Xero data and controls. Written findings, a recoverable-value estimate and a 30-day action plan.
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "flex-start" }}>
            <Link href="/health-check" className="btn btn-primary" style={{ height: 46, paddingInline: 22, fontSize: 15, whiteSpace: "nowrap" }}>Book a Health Check &mdash; &pound;2,500</Link>
            <Link href="/contact" className="btn btn-ghost" style={{ height: 46, paddingInline: 12, fontSize: 15, whiteSpace: "nowrap" }}>Talk to us first</Link>
          </div>
        </div>
      </section>

      <footer style={{ padding: "56px 0 32px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 clamp(20px,5vw,72px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 32, marginBottom: 40 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 16, marginBottom: 12 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--color-accent)", boxShadow: "0 0 12px var(--color-accent)" }} />
                Scrap Finance Partners
              </div>
              <p style={{ fontSize: 13, color: "color-mix(in srgb, var(--color-text) 60%, transparent)", maxWidth: "32ch" }}>
                Finance clarity for UK scrap metal and recycling businesses. Consultancy and YardLedger software, one coherent standard.
              </p>
            </div>
            <div>
              <div style={{ fontSize: 12, letterSpacing: ".08em", textTransform: "uppercase", color: "color-mix(in srgb, var(--color-text) 55%, transparent)", marginBottom: 14 }}>Consultancy</div>
              <div style={{ display: "grid", gap: 10, fontSize: 14 }}>
                <Link href="/services" style={{ whiteSpace: "nowrap" }}>Services</Link>
                <Link href="/health-check" style={{ whiteSpace: "nowrap" }}>Health Check</Link>
                <Link href="/pricing" style={{ whiteSpace: "nowrap" }}>Pricing</Link>
                <Link href="/case-studies">Case studies</Link>
              </div>
            </div>
            <div>
              <div style={{ fontSize: 12, letterSpacing: ".08em", textTransform: "uppercase", color: "color-mix(in srgb, var(--color-text) 55%, transparent)", marginBottom: 14 }}>YardLedger</div>
              <div style={{ display: "grid", gap: 10, fontSize: 14 }}>
                <Link href="/software">Overview</Link>
                <Link href="/dashboard-demo" style={{ whiteSpace: "nowrap" }}>Dashboard demo</Link>
              </div>
            </div>
            <div>
              <div style={{ fontSize: 12, letterSpacing: ".08em", textTransform: "uppercase", color: "color-mix(in srgb, var(--color-text) 55%, transparent)", marginBottom: 14 }}>Company</div>
              <div style={{ display: "grid", gap: 10, fontSize: 14 }}>
                <Link href="/founder" style={{ whiteSpace: "nowrap" }}>Founder</Link>
                <Link href="/contact" style={{ whiteSpace: "nowrap" }}>Contact</Link>
                <Link href="/privacy">Privacy</Link>
              </div>
            </div>
          </div>
          <hr className="hr" style={{ margin: "0 0 20px" }} />
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, fontSize: 12, color: "color-mix(in srgb, var(--color-text) 50%, transparent)" }}>
            <span>&copy; 2026 Scrap Finance Partners. Positioning only &mdash; not regulated legal, tax or audit advice.</span>
            <span>UK &middot; Fred &middot; Xero &middot; D365 &middot; Sage</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
