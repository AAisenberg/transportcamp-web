import type { Metadata } from 'next'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/ui/FadeIn'
import { SectionHeader } from '@/components/ui/SectionHeader'

export const metadata: Metadata = {
  title: 'Sponsor',
  description:
    'Support TransportCamp and connect with transport professionals, researchers and innovators.',
}

const valueProps = [
  {
    title: 'Reach the transport community',
    body: 'Connect with planners, operators, researchers, technologists and advocates in one engaged room.',
  },
  {
    title: 'Open knowledge sharing',
    body: 'Associate your brand with a participant-led format built on collaboration, not sales pitches.',
  },
  {
    title: 'Support an independent event',
    body: 'Help keep TransportCamp accessible and community-driven across Australian cities.',
  },
]

export default function SponsorPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-tc-off-white pt-28 pb-12 md:pt-32 md:pb-16">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <FadeIn>
              <SectionHeader
                title="Support TransportCamp"
                description="Partner with Australia's transport unconference series. Sponsorship keeps tickets accessible and the format independent."
              />
            </FadeIn>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <h2 className="font-sans text-2xl font-semibold text-tc-text md:text-3xl">
              Why sponsor
            </h2>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              {valueProps.map((item, index) => (
                <FadeIn key={item.title} delay={index * 0.06}>
                  <article className="border-t-2 border-tc-orange pt-6">
                    <h3 className="font-sans text-xl font-semibold text-tc-text">
                      {item.title}
                    </h3>
                    <p className="mt-3 font-sans text-sm text-tc-muted leading-relaxed">
                      {item.body}
                    </p>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-black/5 bg-tc-off-white py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">
              <FadeIn>
                <h2 className="font-sans text-2xl font-semibold text-tc-text md:text-3xl">
                  What your support enables
                </h2>
                <p className="mt-5 font-sans text-lg text-tc-muted leading-relaxed">
                  TransportCamp is seeking sponsors for 2026 events in{' '}
                  <strong className="font-semibold text-tc-text">Sydney</strong>{' '}
                  (14 August) and{' '}
                  <strong className="font-semibold text-tc-text">Melbourne</strong>{' '}
                  (9 October). Sponsorship helps cover venue and production costs,
                  keeps ticket prices accessible, and supports an open format where
                  participants set the agenda.
                </p>
                <p className="mt-4 font-sans text-lg text-tc-muted leading-relaxed">
                  Packages are tailored to each event and city. We will publish tier
                  details when 2026 partnerships are confirmed — for now, get in touch
                  to discuss what would work for your organisation.
                </p>
              </FadeIn>

              <FadeIn delay={0.06}>
                <aside className="rounded-md border border-black/8 bg-white p-6 md:p-8 lg:sticky lg:top-28">
                  <h2 className="font-sans text-2xl font-semibold text-tc-text">
                    Get in touch
                  </h2>
                  <p className="mt-4 font-sans text-tc-muted leading-relaxed">
                    Email us to discuss sponsorship for Sydney and Melbourne 2026, or
                    future TransportCamp events in other cities.
                  </p>
                  <div className="mt-8">
                    <Button
                      variant="primary"
                      size="lg"
                      href="mailto:hello@transportcamp.city?subject=TransportCamp%20sponsorship"
                      className="w-full justify-center sm:w-auto"
                    >
                      hello@transportcamp.city
                    </Button>
                  </div>
                  <p className="mt-6 font-sans text-xs text-tc-muted leading-relaxed">
                    We typically respond within a few business days. Ask about logo
                    placement, session support, and community ticketing.
                  </p>
                </aside>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
