import type { Metadata } from 'next'
import { EventGrid } from '@/components/events/EventGrid'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { FadeIn } from '@/components/ui/FadeIn'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { getPastEvents, getUpcomingEvents } from '@/lib/events'

export const metadata: Metadata = {
  title: 'Events',
  description:
    'TransportCamp in Sydney and Melbourne in 2026, plus unconferences across Australia since 2014.',
}

export default function EventsPage() {
  const upcomingEvents = getUpcomingEvents()
  const pastEvents = getPastEvents()

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-tc-off-white pt-28 pb-10 md:pt-32 md:pb-12">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <FadeIn>
              <SectionHeader
                title="Events"
                description="In 2026, TransportCamp is planned for Sydney (14 August) and Melbourne (9 October). Sydney venue and tickets will be announced soon; Melbourne tickets are on sale soon."
              />
              <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-tc-muted md:text-lg">
                We also host participant-led unconferences across Melbourne,
                Sydney, Brisbane and Perth. Explore the archive below.
              </p>
            </FadeIn>
          </div>
        </section>

        {upcomingEvents.length > 0 && (
          <section className="bg-tc-off-white pb-16 md:pb-24">
            <div className="mx-auto max-w-6xl px-5 md:px-8">
              <EventGrid events={upcomingEvents} showUpcoming />
            </div>
          </section>
        )}

        <section className="border-t border-black/5 bg-white pb-20 md:pb-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <h2 className="pt-20 font-sans text-sm font-semibold uppercase tracking-widest text-tc-muted md:pt-28">
              Past events
            </h2>
            <div className="mt-6">
              <EventGrid events={pastEvents} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
