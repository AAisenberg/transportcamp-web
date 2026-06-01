# TransportCamp Web — Cursor Rules

## Stack
- Next.js 14 App Router, TypeScript strict, Tailwind CSS
- Static export only — no server components that use Node APIs, no API routes, no Supabase
- All event data lives in `/data/events.ts` — never hardcode event info in components

## Language
- Australian English in all copy, comments, and variable names
- colour (not color), organise (not organize), centre (not center)
- Exception: CSS property names (background-color, etc.) stay as-is

## Brand naming
- **TransportCamp** is always one word in user-facing copy, titles, and UI — never "Transport Camp"
- Legal line may use **TransportCamp Pty Ltd** (registered entity) — see `data/organisers.ts`
- Co-organisers: **CrowdLab** with **Movement in Place Consulting** — see `data/organisers.ts` and `data/design-tokens.ts` (`brandLanguage`)

## Components
- Server Components by default — only add 'use client' for: useState, useEffect, event handlers, browser APIs
- Props interface required for every component
- No inline styles — use Tailwind classes or CSS variables (design system preview page may use inline colour swatches)

## Design
- Fonts: **Helvetica Neue / Helvetica** (`--font-brand`) for logo, headings, body, UI — sans-serif only on live pages
- Brand tokens: `data/design-tokens.ts` — preview at `/design-system/`
- Colours: --tc-orange #E34F26, --tc-blue #1E6EB4, --tc-dark #0C0C0C
- Logo: always use inline SVG from /components/ui/Logo.tsx — never an <img> tag for the wordmark
- Organiser logos: `public/organisers/` via `components/about/Organisers.tsx`
- NO gradient hero backgrounds, NO heavy drop shadows, NO animated counters
- Entrance animations via Framer Motion only — keep subtle (fade + slight translateY)
- The dot-grid hero pattern is CSS only: radial-gradient on background-image

## File naming
- Components: PascalCase (Hero.tsx)
- Utilities: camelCase (formatDate.ts)
- Pages: Next.js App Router convention (page.tsx)

## DO NOT
- Add Supabase
- Add authentication
- Use the Pages Router
- Use any types in TypeScript
- Hardcode event dates or venues outside of /data/events.ts
- Reintroduce Google Fonts (DM Sans / DM Serif) without an explicit brand decision
- Split "TransportCamp" into two words in marketing copy
- Ticket CTAs: use `lib/tickets.ts` — **Tickets on sale soon** when no `ticketUrl`; **Book tickets** only when Humanitix (or similar) is set on the event
