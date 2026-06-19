import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { EventHero } from '@/components/events/EventHero'
import { EventMap } from '@/components/events/EventMap'
import { EventPhoto } from '@/components/events/EventPhoto'
import { EventVenueHost } from '@/components/events/EventVenueHost'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/ui/FadeIn'
import { events } from '@/data/events'
import { getEventBySlug } from '@/lib/events'
import { isVenuePending } from '@/lib/formatVenue'
import { getTicketCta } from '@/lib/tickets'

interface EventPageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }))
}

export function generateMetadata({ params }: EventPageProps): Metadata {
  const event = getEventBySlug(params.slug)
  if (!event) return { title: 'Event' }

  const venueLine = event.venuePending
    ? 'Venue to be announced'
    : event.venue

  return {
    title: `${event.city} ${event.year}`,
    description:
      event.description ??
      `TransportCamp ${event.city} ${event.year} — ${event.date}. ${venueLine}.`,
  }
}

export default function EventPage({ params }: EventPageProps) {
  const event = getEventBySlug(params.slug)
  if (!event) notFound()

  const ticketCta = getTicketCta(event)

  return (
    <>
      <Navbar />
      <main>
        <EventHero event={event} />
        <EventPhoto event={event} />

        {(event.description || event.status === 'upcoming') && (
          <section className="py-12 md:py-16">
            <div className="mx-auto max-w-6xl px-5 md:px-8">
              <div className="grid gap-10 lg:grid-cols-[1fr_280px] lg:gap-16">
                <div>
                  {event.description && (
                    <FadeIn>
                      <h2 className="font-sans text-sm font-semibold uppercase tracking-widest text-tc-muted">
                        About this event
                      </h2>
                      <p className="mt-4 max-w-2xl font-sans text-lg text-tc-muted leading-relaxed">
                        {event.description}
                      </p>
                    </FadeIn>
                  )}
                  {event.venueHost && (
                    <EventVenueHost venueHost={event.venueHost} />
                  )}
                  <EventMap event={event} />
                </div>

                <FadeIn>
                  <aside className="rounded-md border border-black/8 bg-tc-off-white p-6">
                    <h2 className="font-sans text-xs font-semibold uppercase tracking-widest text-tc-muted">
                      Details
                    </h2>
                    <dl className="mt-4 space-y-4 font-sans text-sm">
                      <div>
                        <dt className="text-tc-muted">Date</dt>
                        <dd className="mt-1 font-medium text-tc-text">
                          {event.date}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-tc-muted">Venue</dt>
                        <dd
                          className={`mt-1 font-medium text-tc-text ${
                            isVenuePending(event) ? 'italic text-tc-muted' : ''
                          }`}
                        >
                          {event.venue}
                        </dd>
                      </div>
                      {event.registrationOpens && (
                        <div>
                          <dt className="text-tc-muted">Registration opens</dt>
                          <dd className="mt-1 font-medium text-tc-text">
                            {event.registrationOpens}
                          </dd>
                        </div>
                      )}
                      {event.eventStart && (
                        <div>
                          <dt className="text-tc-muted">Event starts</dt>
                          <dd className="mt-1 font-medium text-tc-text">
                            {event.eventStart}
                          </dd>
                        </div>
                      )}
                      {event.capacity && (
                        <div>
                          <dt className="text-tc-muted">Capacity</dt>
                          <dd className="mt-1 font-medium text-tc-text">
                            ~{event.capacity} participants
                          </dd>
                        </div>
                      )}
                    </dl>

                    {ticketCta && (
                      <div className="mt-6">
                        {ticketCta.onSale ? (
                          <Button variant="primary" size="md" href={ticketCta.href}>
                            {ticketCta.label}
                          </Button>
                        ) : (
                          <p className="font-sans text-sm font-medium text-tc-orange">
                            {ticketCta.label}
                          </p>
                        )}
                      </div>
                    )}

                    {ticketCta && !ticketCta.onSale && (
                      <p className="mt-3 font-sans text-xs text-tc-muted leading-relaxed">
                        {isVenuePending(event)
                          ? 'Venue and ticket links will be added when announced.'
                          : 'Ticket link will be added when sales open.'}
                      </p>
                    )}

                    {event.status === 'past' && (
                      <p className="mt-6">
                        <Link
                          href="/events/"
                          className="font-sans text-sm font-medium text-tc-blue hover:text-tc-orange transition-colours"
                        >
                          View all events →
                        </Link>
                      </p>
                    )}
                  </aside>
                </FadeIn>
              </div>
            </div>
          </section>
        )}

        {event.sponsors && event.sponsors.length > 0 && (
          <section className="border-t border-black/5 bg-tc-off-white py-12">
            <div className="mx-auto max-w-6xl px-5 md:px-8">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-tc-muted">
                Sponsors
              </p>
              <ul className="mt-6 flex flex-wrap gap-6">
                {event.sponsors.map((sponsor) => (
                  <li key={sponsor.name}>
                    <a
                      href={sponsor.url}
                      className="font-sans text-tc-blue hover:text-tc-orange transition-colours"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {sponsor.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
