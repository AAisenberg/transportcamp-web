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
2. Framework preset: **Next.js**. Build command: `npm run build` (default).
3. **Leave Output Directory empty** (do not set `out`). With `output: 'export'` in `next.config.mjs`, Vercel runs the Next.js build and serves the static export automatically. Setting Output Directory to `out` causes a `routes-manifest.json` error because that folder is plain HTML, not a `.next` server build.
4. Add `NEXT_PUBLIC_*` env vars in the Vercel project, then redeploy.
5. Point `transportcamp.city` DNS to the new project.

## Content

All events live in `data/events.ts`. Update dates, venues and ticket URLs there — never in components.

## Newsletter (Mailchimp)

1. In Mailchimp, open your TransportCamp audience → **Signup forms** → **Embedded forms**.
2. Copy the form `action` URL from the generated HTML (`https://…/subscribe/post?u=…&id=…`). Use `&` not `&amp;`.
3. Add to `.env.local` and **Vercel → Environment Variables** (Production):

```bash
NEXT_PUBLIC_MAILCHIMP_FORM_ACTION=https://YOUR_DC.list-manage.com/subscribe/post?u=...&id=...
```

4. Redeploy — static export bakes in `NEXT_PUBLIC_*` at build time.

Signup uses Mailchimp’s JSONP API and only shows success after Mailchimp responds. If double opt-in is enabled in Mailchimp, subscribers must click the confirmation email (check spam). In Mailchimp: **Audience → Settings → Audience name and defaults → Form settings**.

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
