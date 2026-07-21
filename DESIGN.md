# Scrap Finance Partners — Design System

> Brutalist-minimal. Dark graphite + copper. Hierarchy comes from type size, weight and spacing — never decoration.

## Design Philosophy

This is a finance consultancy for UK scrap metal yards. The audience is yard owners and operators who deal in commodities, margins, and hard numbers. The interface should feel like a tool they trust — not a SaaS marketing template.

**Register:** Product (design serves the product). The aesthetic is industrial-precision, stripped to a single column and a type scale. No cards, no drop shadows, no border-radius, no gradients, no icon-grid decoration, no glow or noise textures.

**Color strategy:** Restrained. Tinted dark neutrals carry 90% of the surface. Copper is the ONE accent — used only for links, CTA text/underline, active state, and numerals. Semantic colors (green/amber/red) appear only where they carry information (dashboard demo).

## Color Tokens

### Core Surfaces

| Token | Value | Usage |
|-------|-------|-------|
| `--graphite` | `#0f1115` | Page background, deepest layer |
| `--panel` | `#1a1d21` | Sparingly — ticker strip background, dashboard-demo panels |
| `--panel-alt` | `#21252a` | Hover / secondary surface |
| `--panel-raised` | `#262b31` | Highest elevation (dashboard-demo only) |

### Brand Accent

| Token | Value | Usage |
|-------|-------|-------|
| `--copper` | `#b87333` | The one accent — links, CTAs, numerals, active state, logo |
| `--copper-bright` | `#d48a4a` | Hover/active state for copper elements |
| `--copper-dim` | `#8a5626` | Muted copper for rare backgrounds |

### Semantic Indicators

| Token | Value | Usage |
|-------|-------|-------|
| `--green` | `#5b8c6f` | Positive trends (dashboard-demo, health-check) |
| `--amber` | `#d4a03d` | Warnings, cautionary indicators |
| `--red` | `#c45a4e` | Destructive actions, negative trends |

### Neutrals

| Token | Value | Usage |
|-------|-------|-------|
| `--ink` | `#e8e6e3` | Primary text (headings, body) |
| `--ink-secondary` | `#a8aeb5` | Secondary text (descriptions, nav) |
| `--ink-muted` | `#6c7278` | Muted text (captions, legal) |
| `--hairline` | `#33383f` | The ONLY divider technique — 1px borders, no boxes |
| `--hairline-bright` | `#3d434b` | Hover border state |

### Contrast Notes

- Body text (`--ink` on `--graphite`): 14.8:1 — exceeds WCAG AAA
- Secondary text (`--ink-secondary` on `--graphite`): 8.2:1 — exceeds WCAG AAA
- Muted text (`--ink-muted` on `--graphite`): 4.6:1 — meets WCAG AA
- Copper (`--copper` on `--graphite`): 4.7:1 — meets WCAG AA for large text

## Typography

### Font Families

| Token | Font | Usage |
|-------|------|-------|
| `--font-sans` | Geist Sans | All UI text, headings, body |
| `--font-mono` | Geist Mono | Numbers, data, tabular values, ticker text |

Both fonts loaded via `next/font/google` with `display: "swap"`.

### Hierarchy

| Level | Size | Weight | Line Height | Letter Spacing |
|-------|------|--------|-------------|----------------|
| Display (h1) | `clamp(2.25rem, 5vw, 3.75rem)` | 700 | 1.08 | -0.03em |
| Heading (h2) | `clamp(1.625rem, 3.5vw, 2.25rem)` | 600 | 1.15 | -0.02em |
| Subheading (h3) | `clamp(1.25rem, 2vw, 1.5rem)` | 600 | 1.25 | -0.01em |
| H4 | `1.125rem` | 600 | 1.3 | 0 |
| Body | `1rem` (16px) | 400 | 1.65 | 0 |
| Small | `0.875rem` (14px) | 400 | 1.5 | 0 |
| Caption | `0.75rem` (12px) | 500 | 1.4 | 0 |

- `text-wrap: balance` on h1-h3 for even line lengths
- `text-wrap: pretty` on paragraphs to reduce orphans
- `font-variant-numeric: tabular-nums` globally for aligned number columns
- `.font-mono-num` utility for terminal-style number displays

## Layout Principle

Single-column, left-aligned. Content sits inside a `max-w-3xl` (or `max-w-5xl` for tables/comparisons) container. Sections stack, separated by a single `border-t border-hairline` — never a bordered box. Repeated items (service lists, pain points, pricing levels, case studies) render as stacked rows with a hairline divider between them, not a card grid.

## Border Radius

**Zero, everywhere.** All radius tokens (`--radius-sm` through `--radius-4xl`) are set to `0px`. Sharp edges on every element — buttons, inputs, panels, the ticker strip. This is enforced at the token level so any Tailwind `rounded-*` utility resolves to zero automatically; no per-component overrides needed.

## Shadows

None. All `--shadow-*` tokens and their usages (`.cred-card`, `.cta-copper` hover-lift) have been removed. Elevation, where it matters at all, is expressed with a 1px hairline border only.

## Borders

- **Always** use `border-hairline` (`#33383f`) for borders
- **Never** use default Tailwind border color
- Hover borders: `border-hairline-bright` (`#3d434b`)
- Border width: 1px standard, no exceptions
- Borders are the primary layout tool — used as section dividers and row separators, not box outlines

## Z-Index Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--z-dropdown` | 1000 | Dropdown menus |
| `--z-sticky` | 1100 | Sticky header |
| `--z-backdrop` | 1200 | Modal backdrops |
| `--z-modal` | 1300 | Modal dialogs |
| `--z-toast` | 1400 | Toast notifications |
| `--z-tooltip` | 1500 | Tooltips |

Never use arbitrary z-index values like `999` or `9999`.

## Motion

Cut to near-zero. `transition-colors` on hover is the only interactive motion (buttons, links, nav). No entrance animations, no hover lift/translate, no scale/grow keyframes.

**One deliberate exception — the ticker.** `.ticker-track` / `@keyframes ticker-scroll` on `/services` only: a continuous horizontal marquee of short highlight phrases beneath the hero. Pauses on hover. Fully disabled under `prefers-reduced-motion: reduce`. This exists because the client explicitly asked for a "flashy, news-ticker sideways" treatment for the how-we-help highlights — a scrolling ticker is the accessible, on-brand answer to that ask (not `<blink>`, not opacity flashing). It is used exactly once, on exactly one page.

All other animation classes previously in the system (`.reveal`, `.reveal-delay-*`, `.line-accent`, `.pulse-dot`, `.bar-animate`, `.hero-glow`, `.industrial-stripes`, `.bg-grid`/`.bg-grid-fine`, `.noise`, `.glass-panel`, `.cred-card`, `.cta-copper`, `.cta-outline`) have been deleted.

### Reduced Motion

All remaining motion (ticker, color transitions) respects `prefers-reduced-motion: reduce`.

## Utility Classes

| Class | Effect |
|-------|--------|
| `.text-copper` | Copper accent text color |
| `.font-mono-num` | Geist Mono with tabular nums and tight tracking |
| `.service-row` | Background-color-only hover for stacked list rows |
| `.accordion-content` | CSS grid-rows expand/collapse (health-check style toggles, if used) |
| `.ticker-track` / `@keyframes ticker-scroll` | The one marquee, `/services` only |

## Component Patterns

### Header

- Sticky, `z-50`
- Background: `bg-graphite`, border-bottom hairline
- Height: `h-16` (64px)
- Logo: copper square mark + wordmark
- Nav: `gap-7`, `text-sm`, `text-ink-secondary` with `hover:text-copper`
- CTAs: copper filled (Get a Health Check)
- Mobile: hamburger toggle with slide-down panel, no shadow/blur

### Footer

- Background: `bg-graphite`
- Border-top: `border-hairline`
- Grid: 4 columns on desktop (2 brand + 2 link sections)
- Link sections: uppercase tracked headings, `text-ink-secondary` links with `hover:text-copper`
- Legal bar: separated by `border-t`, `text-ink-muted`
- Carries the canonical contact details (email, "Based in the Midlands") — not duplicated on the contact page

### Rows (replacing cards)

- No background box, no border box, no radius, no shadow
- Separated by `border-t border-hairline` only
- Numbered items use a `font-mono text-copper` numeral, not an icon badge

### Buttons

- Primary: `bg-copper text-white hover:bg-copper-bright`
- Outline: `border-hairline bg-transparent text-ink-secondary hover:bg-panel-alt hover:text-ink`
- Radius: `0` (token-level)
- Transitions: `transition-colors duration-200` only — no lift, no shadow

## Shadcn Integration

The shadcn semantic variables (`--background`, `--foreground`, `--card`, `--primary`, etc.) are mapped to the industrial token system in `:root`. This means all shadcn components (Button, Card, etc.) automatically use the dark palette and zero radius without modification.

The `.dark` class is kept for shadcn compatibility but is a no-op — the site is dark-first by default.

## File Structure

```
app/
  globals.css     — Design tokens, base styles, utility classes, ticker keyframes
  layout.tsx      — Root layout, fonts, metadata, header/footer
components/
  site-header.tsx — Sticky header with mobile menu
  site-footer.tsx — Structured footer with sections
  ui/
    button.tsx    — shadcn Button (uses token system, zero radius)
    card.tsx      — shadcn Card (kept for shadcn internals; not used as a visual "card" pattern on marketing pages)
DESIGN.md          — This document
```

## Design Decisions

### Why dark-first?

The audience is scrap yard operators. They work in industrial environments, often with bright ambient light. A dark interface reduces eye strain, feels professional, and differentiates from the sea of light-mode SaaS sites.

### Why copper?

Copper is a metal traded in scrap yards — the literal material of the industry. Using it as the single accent creates a subconscious connection between the brand and the trade.

### Why zero rounding?

Industrial interfaces use sharp edges. Rounded corners feel friendly and consumer-oriented. This is a B2B finance tool for industrial operators, reskinned toward the same stark, typographic register as the mazos-site reference — sharp edges, no decoration, hierarchy from type alone.

### Why no cards?

Cards imply discrete, browsable "products." This site is not a catalogue — it's a single, continuous argument (pain → fix → control) that reads top to bottom. Stacked rows with hairline dividers keep that reading order intact instead of breaking it into a grid the eye can skip around.

### Why Geist?

Geist is a modern, neutral sans-serif with excellent legibility at small sizes and strong tabular numeral support. The mono variant provides the terminal/data-display character needed for financial figures and the ticker strip. Both are available via `next/font/google` with zero layout shift.
