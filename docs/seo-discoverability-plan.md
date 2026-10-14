# TransportCamp — SEO & discoverability implementation plan

**Site:** https://transportcamp.city  
**Stack:** Next.js 14 static export (Vercel)  
**Context (Oct 2026):** No upcoming events confirmed for 2027. Sydney & Melbourne 2026 are archived. GSC available. Single domain (`transportcamp.city`). Analytics: Vercel Analytics (recommended). Session titles on-site: nice-to-have. No external recap/deck links yet.

**Goal:** Improve search snippets, social sharing, crawl clarity, and on-site discovery with minimal scope — no CMS, no blog unless we commit to ongoing publishing later.

---

## How to use this doc

- Work **top to bottom within each tier** unless noted.
- Ship in **small PRs** (see [Suggested PR sequence](#suggested-pr-sequence)) so each deploy is verifiable in GSC / Vercel.
- After each production deploy: [Post-deploy checklist](#post-deploy-checklist).

**Out of scope (for now):** Blog, paid SEO tools, transportcamp.com, Humanitix embeds, full session CMS, 2027 event pages until dates are confirmed.

---

## Tier 1 — Low effort, high reward

### 1.1 Homepage metadata & social defaults

**Problem:** Homepage `<title>` is generic (“TransportCamp”). Description doesn’t mention Australia, unconference, or recent cities.

**Tasks**

| # | Task | Files |
|---|------|--------|
| 1 | Add `pageMetadata()` (or equivalent) on `app/page.tsx` with keyword-natural title/description | `app/page.tsx`, `lib/siteMetadata.ts` |
| 2 | Set `openGraph.url` to `https://transportcamp.city/` | same |
| 3 | Optional: `openGraphTitle` distinct from `<title>` if we want a shorter browser tab | same |

**Copy direction (draft — edit before ship)**

- **Title:** `Transport unconference — Australia` (or `TransportCamp — Transport unconference in Australia`)
- **Description:** Mention participant-led format, Melbourne/Sydney 2026 in archive, newsletter for future dates.

**Acceptance criteria**

- View source on `/`: canonical, description, `og:title`, `og:description`, `og:url`, Twitter card present.
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) and Twitter card validator show updated text after cache bust if needed.

**Estimate:** 30–45 min

---

### 1.2 Melbourne 2026 meta description tweak

**Problem:** Snippet doesn’t highlight attendance or venue keywords.

**Tasks**

| # | Task | Files |
|---|------|--------|
| 1 | Extend `description` in `data/events.ts` for `melbourne-2026` to include *169 attendees* and *Monash Docklands* in one sentence (stay &lt; ~160 chars if possible) | `data/events.ts` |

**Acceptance criteria**

- `generateMetadata` output for `/events/melbourne-2026/` reflects new copy in static `out/` HTML.

**Estimate:** 15 min (can ship with 1.1)

---

### 1.3 JSON-LD structured data

**Problem:** No machine-readable entity/event data for Google and social platforms.

**Tasks**

| # | Task | Files |
|---|------|--------|
| 1 | Create `lib/structuredData.ts` helpers: `organizationJsonLd()`, `eventJsonLd(event)` | new |
| 2 | **Organization** on all pages via root layout `script type="application/ld+json"` | `app/layout.tsx` |
| 3 | **Event** on each event slug page: name, startDate (`dateISO`), location (Place + address from venue), `eventStatus` (`EventScheduled` vs `EventCancelled` / use `https://schema.org/EventScheduled` for past with end date same day), `eventAttendanceMode` offline, `maximumAttendeeCapacity` or `attendee` count when `attendees` set | `app/events/[slug]/page.tsx` |
| 4 | Use `siteUrl` + canonical paths from existing metadata helpers | `lib/siteMetadata.ts`, `lib/eventMetadata.ts` |
| 5 | Validate with [Google Rich Results Test](https://search.google.com/test/rich-results) on Melbourne & Sydney 2026 URLs | — |

**Schema notes**

- Past events: `eventStatus`: `EventScheduled` with past dates is acceptable; alternatively document as completed using endDate on same day as start.
- Include `organizer` (TransportCamp Pty Ltd / Organization with url).
- Include `image` array: event `shareImage` or `photo` when present.

**Acceptance criteria**

- No JSON-LD errors in Rich Results Test for at least two event URLs + homepage.
- Single Organization block sitewide; one Event block per event page.

**Estimate:** 2–3 hrs

---

### 1.4 Legacy redirects — 2026 session paths

**Problem:** `vercel.json` redirects `*-sessions` through 2025; 2026 paths may 404 and lose migrated Squarespace equity.

**Tasks**

| # | Task | Files |
|---|------|--------|
| 1 | Add permanent redirects (mirror existing pattern): | `vercel.json` |
|   | `/2026-melbourne-sessions` → `/events/melbourne-2026/` | |
|   | `/2026-melbourne-sessions/:path*` → `/events/melbourne-2026/` | |
|   | `/2026-sydney-sessions` → `/events/sydney-2026/` | |
|   | `/2026-sydney-sessions/:path*` → `/events/sydney-2026/` | |
| 2 | GSC → Pages → note any 404s containing `2026` and `session`; add aliases if discovered | `vercel.json` |

**Acceptance criteria**

- `curl -I` returns 308/301 to correct event URL for each new rule.

**Estimate:** 20–30 min

---

### 1.5 Homepage “Recent events” strip

**Problem:** With no upcoming event, homepage has no strong path to fresh content (Melbourne/Sydney 2026).

**Tasks**

| # | Task | Files |
|---|------|--------|
| 1 | Add `getRecentEvents(limit)` in `lib/events.ts` — e.g. latest past by `dateISO`, or explicit slug list `[melbourne-2026, sydney-2026]` for control | `lib/events.ts` |
| 2 | New component `RecentEventsStrip` — 2 cards, photo thumb, city/year, date, link to event page | `components/home/RecentEventsStrip.tsx` |
| 3 | Insert on homepage after `Hero` or after `WhatIsTC` (design: off-white band, matches SponsorsStrip) | `app/page.tsx` |
| 4 | Copy: “Recent events” + one line that 2027 dates aren’t announced; newsletter CTA already in hero | component |

**Acceptance criteria**

- Homepage HTML contains internal links to both 2026 event URLs.
- Works when `getUpcomingEvents()` is empty (current state).

**Estimate:** 2–3 hrs

---

### 1.6 Event grid thumbnails

**Problem:** `/events/` archive cards are text-only; weak CTR and no image search signal.

**Tasks**

| # | Task | Files |
|---|------|--------|
| 1 | When `event.photo` exists, show top thumbnail in `EventGrid` card (fixed aspect, `object-cover`) | `components/events/EventGrid.tsx` |
| 2 | Meaningful `alt`: reuse `photoCaption` or template `TransportCamp {city} {year}` | same |
| 3 | Prefer `next/image` with known dimensions from event or sensible defaults | same |

**Acceptance criteria**

- Melbourne 2026, Sydney 2026, 2025 events with photos show thumbs on `/events/`.
- Lighthouse: no major CLS regression (width/height set).

**Estimate:** 1.5–2 hrs

---

### 1.7 Default Open Graph image refresh

**Problem:** Root `og-image.png` may still reflect pre-2026 marketing; shares of homepage/generic links look stale.

**Tasks**

| # | Task | Files |
|---|------|--------|
| 1 | Design/export 1200×630 asset: group photo or “TransportCamp 2026 — Sydney & Melbourne” composite | `public/og-image.png` |
| 2 | Bump cache: optional query on references or replace file in place | `app/layout.tsx` |
| 3 | Re-scrape in LinkedIn Post Inspector | — |

**Acceptance criteria**

- New image visible on `/` OG tags in production.

**Estimate:** 30 min dev + design time (asset-dependent)

**Dependency:** Needs a chosen creative (can use cropped Melbourne group photo as interim).

---

### 1.8 Vercel Web Analytics

**Problem:** No visibility into traffic or which pages drive newsletter interest.

**Recommendation:** **Vercel Web Analytics** — zero cookie banner for basic page views on many sites, integrated with deploys, enough for “which event page gets traffic.” Plausible/Fathom are privacy-first third-party alternatives if you later want independent analytics or EU-focused compliance; not required now.

**Tasks**

| # | Task | Files |
|---|------|--------|
| 1 | Vercel dashboard → Project → Analytics → Enable Web Analytics | Vercel UI |
| 2 | Install `@vercel/analytics` and add `<Analytics />` to root layout | `package.json`, `app/layout.tsx` |
| 3 | Redeploy; confirm data in Vercel Analytics tab after browsing production | — |

**Acceptance criteria**

- Page views recorded for `/`, `/events/melbourne-2026/`, `/events/`.

**Estimate:** 30 min

**Note:** Analytics does not replace GSC for search performance; use both.

---

### 1.9 Branded 404 page

**Problem:** Default Next.js 404 — missed branding and internal links.

**Tasks**

| # | Task | Files |
|---|------|--------|
| 1 | Add `app/not-found.tsx` with Navbar, short message, links to `/events/`, `/about/`, `/` | new |
| 2 | Match TransportCamp visual system (dot-grid or off-white) | same |
| 3 | Static export: verify `out/404.html` | build |

**Acceptance criteria**

- Unknown path shows branded 404 with working navigation.

**Estimate:** 1 hr

---

## Tier 2 — Medium effort, strong ROI

### 2.1 Indexable session list (nice-to-have — phased)

**Problem:** Melbourne schedule is a JPG only — Google can’t index session titles; old Squarespace session URLs were a major long-tail asset.

**Phase A (MVP — recommended first)**

| # | Task | Files |
|---|------|--------|
| 1 | Add optional `sessions?: string[]` (or `{ title: string; room?: string }[]`) on `Event` | `data/events.ts` |
| 2 | Populate **Melbourne 2026** with titles transcribed from schedule photo (curated top 15–20 if full list is too tedious) | `data/events.ts` |
| 3 | Render section “Sessions on the board” below schedule image on event page — semantic `<ul>` | new `EventSessions.tsx` or extend `[slug]/page.tsx` |
| 4 | Optional: anchor id `#sessions` for sharing | same |

**Phase B (later)**

- Full grid transcription or CSV import.
- Separate `/events/melbourne-2026/sessions/` only if list becomes long (≥30 items) for cleaner UX.

**Acceptance criteria**

- Session titles visible in view-source without JavaScript.
- Rich Results / normal indexing picks up unique phrases (verify in GSC over weeks).

**Estimate:** Phase A 3–5 hrs (transcription-heavy); Phase B TBD

**Priority:** After Tier 1 ships; content work dominates.

---

### 2.2 FAQ structured data (About page)

**Problem:** “What is TransportCamp / unconference?” queries aren’t eligible for FAQ rich results.

**Tasks**

| # | Task | Files |
|---|------|--------|
| 1 | Define 4–6 FAQs aligned with About copy (unconference, who attends, who organises, how agenda works, how to sponsor) | `data/faqs.ts` or inline |
| 2 | Render FAQ section on About (accessible `<details>` or visible Q&A) | `app/about/page.tsx` |
| 3 | `FAQPage` JSON-LD from same source of truth | `lib/structuredData.ts`, About page |

**Acceptance criteria**

- FAQ content visible to users (not JSON-LD-only).
- Rich Results Test shows FAQPage without errors.

**Estimate:** 2–3 hrs

---

### 2.3 BreadcrumbList JSON-LD

**Problem:** SERPs don’t show breadcrumb trail for event pages.

**Tasks**

| # | Task | Files |
|---|------|--------|
| 1 | `breadcrumbJsonLd([{ name, path }])` helper | `lib/structuredData.ts` |
| 2 | Event pages: Home → Events → `{City} {Year}` | `app/events/[slug]/page.tsx` |
| 3 | Optional: Events index, About, Sponsor (lower priority) | respective pages |

**Acceptance criteria**

- Valid BreadcrumbList on event URLs in Rich Results Test.

**Estimate:** 1 hr (after 1.3)

---

### 2.4 Sitemap `lastModified` accuracy

**Problem:** Event URLs use `dateISO` (event day) as `lastModified`, not content update time — weak recrawl signal after archive edits.

**Tasks**

| # | Task | Files |
|---|------|--------|
| 1 | Add optional `updatedAt?: string` (ISO date) on `Event` for manual bump when content changes | `data/events.ts` |
| 2 | Set `melbourne-2026` and `sydney-2026` `updatedAt` to archive publish date | `data/events.ts` |
| 3 | Sitemap: `lastModified: event.updatedAt ?? event.dateISO` | `app/sitemap.ts` |
| 4 | Homepage/static routes: use build time or fixed `updatedAt` in sitemap helper | `app/sitemap.ts` |

**Acceptance criteria**

- `sitemap.xml` shows recent `lastmod` for updated events post-deploy.

**Estimate:** 45 min

---

### 2.5 Past-event UX polish (sidebar & details)

**Problem:** Past events still show “Registration opens / Event starts” like a live ticket page — confusing, not a search issue but hurts trust and sharing.

**Tasks**

| # | Task | Files |
|---|------|--------|
| 1 | When `status === 'past'`, hide registration/time fields or group under “Schedule (archive)” | `app/events/[slug]/page.tsx` |
| 2 | Keep attendees, date, venue prominent | same |

**Acceptance criteria**

- Melbourne 2026 sidebar reads as archive, not ticket funnel.

**Estimate:** 45 min

---

### 2.6 Motion / SEO hardening (FadeIn)

**Problem:** Framer Motion `initial={{ opacity: 0 }}` can delay visible content for users; minor risk for crawlers that don’t execute JS fully.

**Tasks**

| # | Task | Files |
|---|------|--------|
| 1 | In `FadeIn`, respect `prefers-reduced-motion: reduce` → render without opacity animation | `components/ui/FadeIn.tsx` |
| 2 | Optional: remove FadeIn from above-the-fold event photos (already static for partner banners) | `EventPhoto.tsx` |

**Acceptance criteria**

- With reduced motion OS setting, content appears immediately.
- Event photo HTML still present in static export (already true for images).

**Estimate:** 30–60 min

---

### 2.7 Search Console hygiene (ongoing, not code)

**Tasks**

| # | Task |
|---|------|
| 1 | URL Inspection → Request indexing for `/`, `/events/melbourne-2026/`, `/events/sydney-2026/` after Tier 1 deploy |
| 2 | Monitor **Pages** → Indexed vs Not indexed; fix redirect chains or 404s |
| 3 | **Performance** report: note queries containing “transportcamp”, “transport unconference”, city names — informs Phase B session copy |
| 4 | After 2026 session redirects (1.4), validate old session URLs show “Page with redirect” not 404 |

**Estimate:** 30 min per release + monthly review

---

## Suggested PR sequence

| PR | Scope | Tier |
|----|--------|------|
| **PR A** | 1.1 Homepage metadata + 1.2 Melbourne description + 1.4 2026 redirects | 1 |
| **PR B** | 1.3 JSON-LD Organization + Event | 1 |
| **PR C** | 1.5 Recent events strip + 1.6 Event grid thumbnails | 1 |
| **PR D** | 1.8 Vercel Analytics + 1.9 Branded 404 | 1 |
| **PR E** | 1.7 OG image (when asset ready) | 1 |
| **PR F** | 2.3 Breadcrumbs + 2.4 Sitemap lastModified + 2.5 Past sidebar | 2 |
| **PR G** | 2.2 FAQ About + FAQ schema | 2 |
| **PR H** | 2.1 Session list Phase A (when time allows) | 2 |
| **PR I** | 2.6 FadeIn reduced motion | 2 |

Each PR: `npm run build`, spot-check `out/`, merge, verify production, run [Post-deploy checklist](#post-deploy-checklist).

---

## Post-deploy checklist

- [ ] https://transportcamp.city/sitemap.xml loads; new/updated URLs present  
- [ ] https://transportcamp.city/robots.txt unchanged (still allows crawl, blocks design-system)  
- [ ] Sample pages: view-source confirms meta + JSON-LD (if shipped)  
- [ ] GSC URL Inspection on changed URLs → **Request indexing**  
- [ ] LinkedIn Post Inspector on homepage + Melbourne event (if OG changed)  
- [ ] Vercel Analytics receiving hits (if enabled)  
- [ ] Manual test: one old session URL from GSC (if any) hits 301 to correct event page  

---

## When 2027 dates are confirmed

- Set `status: 'upcoming'` in `data/events.ts`, restore ticket CTA flow, event nav links, homepage chip/card (existing behaviour).
- Add new event OG image, sitemap priority, JSON-LD Event with future dates.
- Update homepage metadata from “archive” wording to “next event” wording.
- New PR — do not block Tier 1/2 on this.

---

## Open decisions (defaults assumed in plan)

| Question | Assumption in this plan |
|----------|-------------------------|
| Session list depth | Phase A: partial list acceptable |
| OG creative | Interim: Melbourne group photo crop until designed composite |
| Recent events | Explicit Sydney + Melbourne 2026 until a generic “latest N past” rule is preferred |
| Analytics | Vercel Web Analytics only |

---

## References (in repo today)

- Metadata helpers: `lib/siteMetadata.ts`, `lib/eventMetadata.ts`
- Redirects: `vercel.json`
- Sitemap: `app/sitemap.ts`
- Robots: `public/robots.txt`
- Event data: `data/events.ts`

*Last updated: 15 October 2026*
