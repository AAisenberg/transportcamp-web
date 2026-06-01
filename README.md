# TransportCamp Web

Static marketing site for [TransportCamp](https://transportcamp.city) — Next.js 14 App Router with static export for Vercel.

## Stack

- Next.js 14 (App Router, `output: 'export'`)
- TypeScript (strict)
- Tailwind CSS
- Framer Motion (subtle entrance animations)
- DM Serif Display + DM Sans via `next/font/google`

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Static output is written to `out/` — deploy that directory to Vercel (or any static host).

## Deploy to Vercel

1. Import this repo as a new Vercel project (separate from CrowdLab).
2. Framework preset: Next.js (build command `npm run build`, output directory `out` for static export).
3. Point `transportcamp.city` DNS to the new project.

## Content

All events live in `data/events.ts`. Update dates, venues and ticket URLs there — never in components.

## Newsletter (Mailchimp)

1. In Mailchimp, open your TransportCamp audience → **Signup forms** → **Embedded forms**.
2. Copy the form `action` URL from the generated HTML.
3. Add to `.env.local`:

```bash
NEXT_PUBLIC_MAILCHIMP_FORM_ACTION=https://YOUR_DC.list-manage.com/subscribe/post?u=...&id=...
```

4. Rebuild (`npm run build`) — static export bakes in `NEXT_PUBLIC_*` at build time.

The hero shows a placeholder message until this variable is set.

## Social links

Add to `.env.local` (icons show in footer and `/contact/` when set):

```bash
NEXT_PUBLIC_X_URL=https://x.com/your-handle
NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/...
# Optional — omit until you have an Instagram account
NEXT_PUBLIC_INSTAGRAM_URL=
```

Instagram is optional and stays hidden until set. X is the main social channel for now.

## Open items

- Replace Humanitix ticket URL in `melbourne-2026` when live
- Add real sponsor logos to `SponsorsStrip` and `public/sponsors/`
- Replace `public/og-image.png` with a designed 1200×630 asset
