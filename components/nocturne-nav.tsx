"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/health-check", label: "Health Check" },
  { href: "/software", label: "YardLedger" },
  { href: "/pricing", label: "Pricing" },
  { href: "/founder", label: "Founder" },
  { href: "/contact", label: "Contact" },
];

export default function NocturneNav() {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(10px)",
        background: "color-mix(in srgb, var(--color-bg) 86%, transparent)",
        borderBottom: "1px solid var(--color-divider)",
      }}
    >
      <nav
        className="nav"
        style={{
          padding: "14px clamp(20px,5vw,72px)",
          justifyContent: "space-between",
        }}
      >
        <Link
          href="/"
          className="nav-brand"
          style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", color: "var(--color-text)", whiteSpace: "nowrap" }}
          onClick={() => setOpen(false)}
        >
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--color-accent)", boxShadow: "0 0 12px var(--color-accent)", flex: "none" }} />
          Scrap Finance Partners
        </Link>

        <div className="hidden lg:flex" style={{ alignItems: "center", gap: "clamp(10px,2vw,28px)" }}>
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} style={{ whiteSpace: "nowrap" }}>
              {l.label}
            </Link>
          ))}
          <Link href="/health-check" className="btn btn-primary" style={{ whiteSpace: "nowrap" }}>
            Book a Health Check
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 44,
            width: 44,
            color: "var(--color-text)",
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <nav
          className="lg:hidden"
          style={{ borderTop: "1px solid var(--color-divider)" }}
        >
          <ul style={{ listStyle: "none", margin: 0, padding: "8px clamp(20px,5vw,72px) 16px" }}>
            {navLinks.map((l) => (
              <li key={l.href} style={{ borderBottom: "1px solid var(--color-divider)" }}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{ display: "block", padding: "14px 0", fontSize: 16, color: "var(--color-text)" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li style={{ paddingTop: 16 }}>
              <Link
                href="/health-check"
                className="btn btn-primary"
                onClick={() => setOpen(false)}
                style={{ width: "100%", height: 46 }}
              >
                Book a Health Check
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
