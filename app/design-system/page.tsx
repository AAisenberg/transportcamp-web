import type { Metadata } from 'next'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { Button } from '@/components/ui/Button'
import { Chip } from '@/components/ui/Chip'
import { Logo } from '@/components/ui/Logo'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { brandLanguage, colours, typeScale, typography } from '@/data/design-tokens'

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
    <div className="overflow-hidden rounded-sm border border-black/10">
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
          </div>
        </section>

        {/* Logo */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <h2 className="font-sans text-sm font-semibold uppercase tracking-widest text-tc-muted">
              Logo
            </h2>
            <p className="mt-3 max-w-2xl font-sans text-sm text-tc-muted leading-relaxed">
              Wordmark set in <strong className="font-semibold text-tc-text">Helvetica</strong>{' '}
              (bold). Transport in orange, Camp in blue. Always use{' '}
              <code className="rounded bg-tc-off-white px-1.5 py-0.5 text-xs">
                Logo.tsx
              </code>{' '}
              — never a raster image for the wordmark.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-sm border border-black/10 bg-white p-10">
                <Logo className="h-8 w-auto" />
                <p className="mt-4 font-sans text-xs text-tc-muted">On light</p>
              </div>
              <div className="rounded-sm border border-white/10 bg-tc-dark p-10">
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
        <section className="border-t border-black/5 bg-tc-off-white py-16 md:py-20">
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
            <div className="mt-10 flex gap-1 h-3 max-w-md rounded-sm overflow-hidden" aria-hidden>
              <div className="flex-1 bg-tc-orange" title="Orange stripe" />
              <div className="flex-1 bg-tc-blue" title="Blue stripe" />
            </div>
            <p className="mt-3 font-sans text-xs text-tc-muted">
              Vertical hero stripe uses orange → blue (stripe-accent utility). Avoid
              full gradient hero backgrounds.
            </p>
          </div>
        </section>

        {/* Typography */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <h2 className="font-sans text-sm font-semibold uppercase tracking-widest text-tc-muted">
              Typography
            </h2>

            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <article className="rounded-sm border border-black/10 p-6">
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

              <article className="rounded-sm border border-black/10 p-6">
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
        <section className="border-t border-black/5 bg-tc-off-white py-16 md:py-20">
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
              <div className="mt-4 rounded-sm dot-grid p-6">
                <Button variant="ghost" size="md">
                  Ghost on dark
                </Button>
              </div>
            </div>

            <div className="mt-10">
              <p className="font-sans text-xs font-semibold text-tc-text">Chip</p>
              <div className="mt-4 rounded-sm dot-grid inline-block p-6">
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
              <div className="mt-4 h-32 max-w-md rounded-sm dot-grid border border-white/10" />
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="py-16 md:pb-24">
          <div className="mx-auto max-w-3xl px-5 md:px-8">
            <h2 className="font-sans text-sm font-semibold uppercase tracking-widest text-tc-muted">
              Principles
            </h2>
            <ul className="mt-6 list-disc space-y-3 pl-5 font-sans text-tc-muted leading-relaxed">
              <li>Sans-serif Helvetica throughout — no decorative serif on live pages unless deliberately added later.</li>
              <li>Generous whitespace, editorial hierarchy via size and weight — not heavy shadows or gradient heroes.</li>
              <li>Orange and blue echo the logo; use city accent (orange for Sydney, blue for Melbourne) on 2026 event cards.</li>
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
