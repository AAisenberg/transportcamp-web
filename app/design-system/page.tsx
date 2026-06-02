import type { Metadata } from 'next'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { Button } from '@/components/ui/Button'
import { Chip } from '@/components/ui/Chip'
import { Logo } from '@/components/ui/Logo'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { HeroEventCardVariants } from '@/components/design-system/HeroEventCardVariants'
import {
  borderRadii,
  brandLanguage,
  colours,
  heroEventCardVariants,
  radiusComparisonSamples,
  radiusGuidance,
  typeScale,
  typography,
} from '@/data/design-tokens'

const designSystemSections = [
  { id: 'logo', label: 'Logo' },
  { id: 'colours', label: 'Colours' },
  { id: 'border-radius', label: 'Border radius' },
  { id: 'hero-event-cards', label: 'Hero event cards' },
  { id: 'typography', label: 'Typography' },
  { id: 'components', label: 'Components' },
  { id: 'principles', label: 'Principles' },
] as const

function RadiusCornerSwatch({
  px,
  label,
  sublabel,
  recommended = false,
}: {
  px: number
  label: string
  sublabel: string
  recommended?: boolean
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div
        className={`relative h-32 w-full max-w-[11rem] border-[3px] border-tc-orange bg-white shadow-sm ${
          recommended ? 'ring-2 ring-tc-orange ring-offset-4 ring-offset-tc-off-white' : ''
        }`}
        style={{ borderRadius: px }}
        aria-hidden
      />
      <p className="mt-5 font-sans text-lg font-semibold text-tc-text">{label}</p>
      <p className="mt-1 font-sans text-xs text-tc-muted">{sublabel}</p>
      {recommended && (
        <span className="mt-2 font-sans text-xs font-semibold uppercase tracking-widest text-tc-orange">
          Recommended
        </span>
      )}
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Design system',
  description: 'TransportCamp brand tokens — colours, typography, and UI components.',
  robots: { index: false, follow: false },
}

function Swatch({
  name,
  hex,
  usage,
  textDark = false,
}: {
  name: string
  hex: string
  usage: string
  textDark?: boolean
}) {
  return (
    <div className="overflow-hidden rounded-md border border-black/10">
      <div
        className="flex h-24 items-end p-4"
        style={{ backgroundColor: hex }}
      >
        <span
          className={`font-sans text-xs font-semibold ${
            textDark ? 'text-tc-text' : 'text-white'
          }`}
        >
          {hex}
        </span>
      </div>
      <div className="bg-white p-4">
        <p className="font-sans text-sm font-semibold text-tc-text">{name}</p>
        <p className="mt-1 font-sans text-xs text-tc-muted leading-relaxed">
          {usage}
        </p>
      </div>
    </div>
  )
}

export default function DesignSystemPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-tc-off-white pt-28 pb-12 md:pt-32">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <SectionHeader
              label="Internal reference"
              title="TransportCamp design system"
              description="Brand tokens for transportcamp.city — Helvetica-led typography, orange and blue from the logo, minimal UI patterns. Use this page when extending the site or briefing designers."
            />
            <nav
              className="mt-10 flex flex-wrap gap-2 border-t border-black/10 pt-8"
              aria-label="On this page"
            >
              {designSystemSections.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="rounded-md border border-black/10 bg-white px-3 py-1.5 font-sans text-sm font-medium text-tc-text transition-colours hover:border-tc-orange hover:text-tc-orange"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* Logo */}
        <section id="logo" className="scroll-mt-28 py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <h2 className="font-sans text-sm font-semibold uppercase tracking-widest text-tc-muted">
              Logo
            </h2>
            <p className="mt-3 max-w-2xl font-sans text-sm text-tc-muted leading-relaxed">
              Wordmark set in <strong className="font-semibold text-tc-text">Helvetica</strong>{' '}
              (bold). <strong className="font-semibold text-tc-text">TransportCamp</strong> is one
              word — orange Transport and blue Camp with tight letter-spacing, no gap. Always use{' '}
              <code className="rounded bg-tc-off-white px-1.5 py-0.5 text-xs">
                Logo.tsx
              </code>{' '}
              — never a raster image for the wordmark.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-md border border-black/10 bg-white p-10">
                <Logo className="h-8 w-auto" />
                <p className="mt-4 font-sans text-xs text-tc-muted">On light</p>
              </div>
              <div className="rounded-md border border-white/10 bg-tc-dark p-10">
                <Logo variant="light" className="h-8 w-auto" />
                <p className="mt-4 font-sans text-xs text-white/50">On dark</p>
              </div>
            </div>
          </div>
        </section>

        {/* Brand language */}
        <section className="py-16 md:py-20 border-t border-black/5">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <h2 className="font-sans text-sm font-semibold uppercase tracking-widest text-tc-muted">
              Brand language
            </h2>
            <div className="mt-8 max-w-2xl space-y-4 font-sans text-tc-muted leading-relaxed">
              <p>
                <strong className="text-tc-text">{brandLanguage.productName}</strong> —{' '}
                {brandLanguage.rule}
              </p>
              <p>
                Legal entity: {brandLanguage.legalEntity} (ABN {brandLanguage.abn})
              </p>
              <p>{brandLanguage.organisersLine}</p>
            </div>
          </div>
        </section>

        {/* Colours */}
        <section
          id="colours"
          className="scroll-mt-28 border-t border-black/5 bg-tc-off-white py-16 md:py-20"
        >
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <h2 className="font-sans text-sm font-semibold uppercase tracking-widest text-tc-muted">
              Colours
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Swatch {...colours.orange} name={colours.orange.name} />
              <Swatch {...colours.blue} name={colours.blue.name} />
              <Swatch {...colours.dark} name={colours.dark.name} />
              <Swatch {...colours.offWhite} name={colours.offWhite.name} textDark />
              <Swatch {...colours.white} name={colours.white.name} textDark />
              <Swatch {...colours.text} name={colours.text.name} />
              <Swatch {...colours.muted} name={colours.muted.name} />
            </div>
            <div className="mt-10 flex gap-1 h-3 max-w-md rounded-md overflow-hidden" aria-hidden>
              <div className="flex-1 bg-tc-orange" title="Orange stripe" />
              <div className="flex-1 bg-tc-blue" title="Blue stripe" />
            </div>
            <p className="mt-3 font-sans text-xs text-tc-muted">
              Vertical hero stripe uses orange → blue (stripe-accent utility). Avoid
              full gradient hero backgrounds.
            </p>
          </div>
        </section>

        {/* Border radius — enlarged comparison */}
        <section
          id="border-radius"
          className="scroll-mt-28 border-t-4 border-tc-orange bg-tc-off-white py-16 md:py-20"
        >
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-tc-orange">
              Live token
            </p>
            <h2 className="mt-2 font-sans text-2xl font-semibold tracking-tight text-tc-text md:text-3xl">
              Border radius
            </h2>
            <p className="mt-4 max-w-2xl font-sans text-base text-tc-muted leading-relaxed">
              {radiusGuidance.summary} At 2px and 6px the difference is subtle on small
              buttons — use the <strong className="font-semibold text-tc-text">large orange
              boxes</strong> below to compare corners side by side.
            </p>

            <div className="mt-12 rounded-md border border-black/10 bg-white p-6 md:p-10">
              <h3 className="font-sans text-sm font-semibold uppercase tracking-widest text-tc-muted">
                Corner comparison (enlarged)
              </h3>
              <div className="mt-8 grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-6">
                {radiusComparisonSamples.map((sample) => (
                  <RadiusCornerSwatch
                    key={sample.px}
                    px={sample.px}
                    label={sample.label}
                    sublabel={sample.sublabel}
                    recommended={sample.recommended}
                  />
                ))}
              </div>
            </div>

            <div className="mt-10 rounded-md border border-black/10 bg-white p-6 md:p-10">
              <h3 className="font-sans text-sm font-semibold uppercase tracking-widest text-tc-muted">
                On real-sized UI
              </h3>
              <p className="mt-2 font-sans text-sm text-tc-muted">
                Same pixel values on button-sized controls — compare sharp (0px) through to
                recommended ({radiusGuidance.recommendedPx}px).
              </p>
              <div className="mt-8 flex flex-col gap-8 sm:flex-row sm:flex-wrap sm:items-end">
                {borderRadii.map((radius) => (
                  <div key={radius.token} className="flex flex-col gap-3">
                    <span
                      className="inline-flex min-w-[10rem] justify-center border-2 border-tc-orange bg-tc-orange px-6 py-3 font-sans text-sm font-medium text-white"
                      style={{ borderRadius: radius.px }}
                    >
                      Button · {radius.px}px
                    </span>
                    <span className="font-mono text-xs text-tc-muted">{radius.tailwind}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 overflow-x-auto">
              <table className="w-full min-w-[28rem] border-collapse font-sans text-sm">
                <thead>
                  <tr className="border-b border-black/10 text-left">
                    <th className="py-3 pr-4 font-semibold text-tc-text">Token</th>
                    <th className="py-3 pr-4 font-semibold text-tc-text">Pixels</th>
                    <th className="py-3 pr-4 font-semibold text-tc-text">Tailwind</th>
                    <th className="py-3 font-semibold text-tc-text">Notes</th>
                  </tr>
                </thead>
                <tbody className="text-tc-muted">
                  {borderRadii.map((radius) => (
                    <tr
                      key={radius.token}
                      className={`border-b border-black/5 ${
                        radius.token === radiusGuidance.recommended
                          ? 'bg-tc-orange/5'
                          : ''
                      }`}
                    >
                      <td className="py-3 pr-4 font-medium text-tc-text">{radius.token}</td>
                      <td className="py-3 pr-4 font-mono text-xs">{radius.px}px</td>
                      <td className="py-3 pr-4 font-mono text-xs">{radius.tailwind}</td>
                      <td className="py-3">{radius.usage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-8 rounded-md border border-tc-orange/30 bg-tc-orange/5 px-4 py-3 font-sans text-sm text-tc-text">
              <strong className="font-semibold">Live site:</strong>{' '}
              <code className="font-mono text-xs">{radiusGuidance.liveSiteClass}</code> (
              {radiusGuidance.liveSitePx}px) on buttons, cards, and form fields.{' '}
              {radiusGuidance.keepFullRadius}.
            </p>
          </div>
        </section>

        {/* Hero event card accents */}
        <section
          id="hero-event-cards"
          className="scroll-mt-28 border-t border-black/5 py-16 md:py-20"
        >
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-tc-orange">
              Live · B minimal
            </p>
            <h2 className="mt-2 font-sans text-2xl font-semibold tracking-tight text-tc-text md:text-3xl">
              Hero event cards
            </h2>
            <p className="mt-4 max-w-2xl font-sans text-base text-tc-muted leading-relaxed">
              The live site uses <strong className="font-semibold text-tc-text">B — Minimal</strong>
              : uniform card border with city colour on the label and links only. Archive below
              for reference.
            </p>

            <HeroEventCardVariants />

            <ul className="mt-10 space-y-2 font-sans text-sm text-tc-muted">
              {heroEventCardVariants.map((v) => (
                <li key={v.id}>
                  <strong className="text-tc-text">{v.letter} — {v.name}:</strong>{' '}
                  {v.description}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Typography */}
        <section id="typography" className="scroll-mt-28 py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <h2 className="font-sans text-sm font-semibold uppercase tracking-widest text-tc-muted">
              Typography
            </h2>

            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <article className="rounded-md border border-black/10 p-6">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-tc-orange">
                  {typography.brand.name}
                </p>
                <p
                  className="mt-4 text-3xl font-bold"
                  style={{ fontFamily: typography.brand.stack }}
                >
                  TransportCamp
                </p>
                <p className="mt-3 font-sans text-sm text-tc-muted">
                  {typography.brand.usage}
                </p>
                <p className="mt-4 font-mono text-xs text-tc-muted/80 break-all">
                  {typography.brand.stack}
                </p>
              </article>

              <article className="rounded-md border border-black/10 p-6">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-tc-muted">
                  {typography.optionalSerif.name}
                </p>
                <p
                  className="mt-4 text-3xl"
                  style={{ fontFamily: typography.optionalSerif.stack }}
                >
                  Optional editorial accent
                </p>
                <p className="mt-3 font-sans text-sm text-tc-muted">
                  {typography.optionalSerif.usage}
                </p>
              </article>
            </div>

            <div className="mt-12 space-y-10">
              {typeScale.map((scale) => (
                <div
                  key={scale.name}
                  className="border-b border-black/5 pb-10 last:border-0"
                >
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-tc-muted">
                    {scale.name}
                  </p>
                  <p className={`mt-3 text-tc-text ${scale.className}`}>
                    {scale.sample}
                  </p>
                  <p className="mt-2 font-mono text-xs text-tc-muted/70">
                    {scale.className}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Components */}
        <section
          id="components"
          className="scroll-mt-28 border-t border-black/5 bg-tc-off-white py-16 md:py-20"
        >
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <h2 className="font-sans text-sm font-semibold uppercase tracking-widest text-tc-muted">
              Components
            </h2>

            <div className="mt-10">
              <p className="font-sans text-xs font-semibold text-tc-text">Buttons</p>
              <div className="mt-4 flex flex-wrap gap-4">
                <Button variant="primary" size="md">
                  Primary
                </Button>
                <Button variant="outline" size="md">
                  Outline
                </Button>
              </div>
              <div className="mt-4 rounded-md dot-grid p-6">
                <Button variant="ghost" size="md">
                  Ghost on dark
                </Button>
              </div>
            </div>

            <div className="mt-10">
              <p className="font-sans text-xs font-semibold text-tc-text">Chip</p>
              <div className="mt-4 rounded-md dot-grid inline-block p-6">
                <Chip>14 August 2026 · Sydney</Chip>
              </div>
            </div>

            <div className="mt-10">
              <p className="font-sans text-xs font-semibold text-tc-text">
                Section header
              </p>
              <div className="mt-4 max-w-xl">
                <SectionHeader
                  label="Label"
                  title="Section title"
                  description="Supporting description in muted body text."
                />
              </div>
            </div>

            <div className="mt-10">
              <p className="font-sans text-xs font-semibold text-tc-text">
                Dot grid (hero)
              </p>
              <div className="mt-4 h-32 max-w-md rounded-md dot-grid border border-white/10" />
            </div>
          </div>
        </section>

        {/* Principles */}
        <section id="principles" className="scroll-mt-28 py-16 md:pb-24">
          <div className="mx-auto max-w-3xl px-5 md:px-8">
            <h2 className="font-sans text-sm font-semibold uppercase tracking-widest text-tc-muted">
              Principles
            </h2>
            <ul className="mt-6 list-disc space-y-3 pl-5 font-sans text-tc-muted leading-relaxed">
              <li>Sans-serif Helvetica throughout — no decorative serif on live pages unless deliberately added later.</li>
              <li>Generous whitespace, editorial hierarchy via size and weight — not heavy shadows or gradient heroes.</li>
              <li>Orange and blue echo the logo; Sydney/Melbourne accents on labels and links — not left-border stripes on cards.</li>
              <li>Subtle Framer Motion entrances only (fade + slight translateY).</li>
              <li>All event copy and dates live in <code className="text-xs bg-tc-off-white px-1 rounded">data/events.ts</code>.</li>
              <li>{brandLanguage.rule}</li>
              <li>{brandLanguage.organisersLine}</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
