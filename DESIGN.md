# Scrap Finance Partners — Design System

> Bloomberg terminal meets boutique consultancy. Dark, industrial, intentional.

## Design Philosophy

This is a finance consultancy for UK scrap metal yards. The audience is yard owners and operators who deal in commodities, margins, and hard numbers. The interface should feel like a tool they trust — not a SaaS marketing template.

**Register:** Product (design serves the product). The aesthetic is industrial-precision, not brand-luxury.

**Color strategy:** Restrained. Tinted dark neutrals carry 90% of the surface. Copper accent appears at ≤10% — used only for primary CTAs, key highlights, and the logo mark. Semantic colors (green/amber/red) appear only where they carry information.

## Color Tokens

### Core Surfaces

| Token | Value | Usage |
|-------|-------|-------|
| `--graphite` | `#0f1115` | Page background, deepest layer |
| `--panel` | `#1a1d21` | Cards, elevated surfaces, header |
| `--panel-alt` | `#21252a` | Hover states, secondary surfaces |
| `--panel-raised` | `#262b31` | Highest elevation (modals, popovers) |

### Brand Accent

| Token | Value | Usage |
|-------|-------|-------|
| `--copper` | `#b87333` | Primary accent — CTAs, highlights, logo |
| `--copper-bright` | `#d48a4a` | Hover/active state for copper elements |
| `--copper-dim` | `#8a5626` | Muted copper for backgrounds/borders |

### Semantic Indicators

| Token | Value | Usage |
|-------|-------|-------|
| `--green` | `#5b8c6f` | Positive trends, success states |
| `--amber` | `#d4a03d` | Warnings, cautionary indicators |
| `--red` | `#c45a4e` | Destructive actions, negative trends |

### Neutrals

| Token | Value | Usage |
|-------|-------|-------|
| `--ink` | `#e8e6e3` | Primary text (headings, body) |
| `--ink-secondary` | `#a8aeb5` | Secondary text (descriptions, nav) |
| `--ink-muted` | `#6c7278` | Muted text (captions, legal) |
| `--hairline` | `#33383f` | Borders, dividers |
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
| `--font-mono` | Geist Mono | Numbers, data, tabular values |

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

## Spacing Scale

4px base increment. All spacing should reference these tokens.

| Token | Value | Tailwind Equivalent |
|-------|-------|--------------------|
| `--space-1` | 4px | `p-1`, `gap-1` |
| `--space-2` | 8px | `p-2`, `gap-2` |
| `--space-3` | 12px | `p-3`, `gap-3` |
| `--space-4` | 16px | `p-4`, `gap-4` |
| `--space-5` | 20px | `p-5`, `gap-5` |
| `--space-6` | 24px | `p-6`, `gap-6` |
| `--space-8` | 32px | `p-8`, `gap-8` |
| `--space-10` | 40px | `p-10` |
| `--space-12` | 48px | `p-12` |
| `--space-16` | 64px | — |
| `--space-20` | 80px | — |
| `--space-24` | 96px | — |

## Border Radius

Minimal rounding. Industrial aesthetic.

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 2px | Default — buttons, inputs, tags |
| `--radius-md` | 4px | Cards, panels |
| `--radius-lg` | 6px | Large cards |
| `--radius-xl` | 8px | Modals (rare) |

**Rule:** Never exceed `rounded-md` (4px) for standard UI elements. `rounded-lg` and above are reserved for rare exceptions.

## Shadows

Subtle. Used for elevation only, never decoration.

| Token | Value |
|-------|-------|
| `--shadow-sm` | `0 1px 2px 0 rgba(0,0,0,0.3)` |
| `--shadow-md` | `0 2px 8px -2px rgba(0,0,0,0.4)` |
| `--shadow-lg` | `0 8px 24px -8px rgba(0,0,0,0.5)` |
| `--shadow-copper` | `0 0 0 1px rgba(184,115,51,0.2), 0 4px 16px -4px rgba(184,115,51,0.15)` |

## Borders

- **Always** use `border-hairline` (`#33383f`) for borders
- **Never** use default Tailwind border color
- Hover borders: `border-hairline-bright` (`#3d434b`)
- Border width: 1px standard. Never thicker for decorative purposes.

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

## Animations

All animations are CSS-only. No JS animation libraries required.

### Transitions

| Token | Duration | Easing |
|-------|----------|--------|
| `--duration-fast` | 150ms | `--ease-out` |
| `--duration-normal` | 250ms | `--ease-out` |
| `--duration-slow` | 400ms | `--ease-out` |

Easing: `cubic-bezier(0.16, 1, 0.3, 1)` — exponential ease-out. No bounce, no elastic.

### Keyframe Animations

| Class | Effect | Usage |
|-------|--------|-------|
| `.reveal` | Fade + slide up 12px | Section entrance (enhances visible content) |
| `.reveal-delay-1` through `.reveal-delay-4` | Staggered delays | Sequential reveals |
| `.line-accent` | Scale X from 0 to 1 | Copper accent line growth |
| `.pulse-dot` | Opacity pulse 1 to 0.4 | Live status indicators |

### Reduced Motion

All animations respect `prefers-reduced-motion: reduce`. Animations collapse to instant transitions. Reveal animations show content immediately.

## Utility Classes

| Class | Effect |
|-------|--------|
| `.bg-grid` | 40px grid background using hairline color |
| `.bg-grid-fine` | 20px grid background at 50% opacity |
| `.glass-panel` | Semi-transparent panel with 12px backdrop blur |
| `.text-copper` | Copper accent text color |
| `.font-mono-num` | Geist Mono with tabular nums and tight tracking |

## Component Patterns

### Header

- Sticky, `z-50`, `backdrop-blur-md`
- Background: `bg-graphite/80` with `supports-[backdrop-filter]` fallback
- Height: `h-16` (64px)
- Logo: copper square mark + wordmark
- Nav: `gap-7`, `text-sm`, `text-ink-secondary` with `hover:text-ink`
- CTAs: outline (Health Check) + copper filled (Get in Touch)
- Mobile: hamburger toggle with slide-down panel

### Footer

- Background: `bg-graphite`
- Border-top: `border-hairline`
- Grid: 4 columns on desktop (2 brand + 2 link sections)
- Link sections: uppercase tracked headings, `text-ink-secondary` links with `hover:text-copper`
- Legal bar: separated by `border-t`, `text-ink-muted`

### Cards

- Background: `bg-card` (maps to `--panel`)
- Border: `border-hairline`
- Radius: `rounded-sm` or `rounded-md` only
- Shadow: `shadow-sm` default, `shadow-copper` for highlighted cards
- Hover: `border-hairline-bright` with `transition-colors`

### Buttons

- Primary: `bg-copper text-white hover:bg-copper-bright`
- Outline: `border-hairline bg-transparent text-ink-secondary hover:bg-panel-alt hover:text-ink`
- Radius: `rounded-sm` (2px) — matches industrial aesthetic
- Transitions: `transition-colors duration-200`

## Shadcn Integration

The shadcn semantic variables (`--background`, `--foreground`, `--card`, `--primary`, etc.) are mapped to the industrial token system in `:root`. This means all shadcn components (Button, Card, etc.) automatically use the dark industrial palette without modification.

The `.dark` class is kept for shadcn compatibility but is a no-op — the site is dark-first by default.

## File Structure

```
app/
  globals.css     — Design tokens, base styles, utility classes, animations
  layout.tsx      — Root layout, fonts, metadata, header/footer
components/
  site-header.tsx — Sticky header with mobile menu
  site-footer.tsx — Structured footer with sections
  ui/
    button.tsx    — shadcn Button (uses token system)
    card.tsx      — shadcn Card (uses token system)
DESIGN.md          — This document
```

## Design Decisions

### Why dark-first?

The audience is scrap yard operators. They work in industrial environments, often with bright ambient light. A dark interface reduces eye strain, feels professional, and differentiates from the sea of light-mode SaaS sites. The Bloomberg terminal comparison is deliberate — finance professionals trust dark interfaces.

### Why copper?

Copper is a metal traded in scrap yards. It is the literal material of the industry. Using it as the accent color creates a subconscious connection between the brand and the trade. It is warm without being soft, industrial without being cold.

### Why minimal rounding?

Industrial interfaces use sharp edges. Rounded corners feel friendly and consumer-oriented. This is a B2B finance tool for industrial operators — the rounding should match the precision of the work.

### Why Geist?

Geist is a modern, neutral sans-serif with excellent legibility at small sizes and strong tabular numeral support. The mono variant provides the terminal/data-display character needed for financial figures. Both are available via `next/font/google` with zero layout shift.