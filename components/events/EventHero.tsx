import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Chip } from '@/components/ui/Chip'
import type { Event } from '@/data/events'
import { eventAccentColour } from '@/lib/brand'
import { isVenuePending } from '@/lib/formatVenue'
import { getTicketCta } from '@/lib/tickets'

export interface EventHeroProps {
  event: Event
}

export function EventHero({ event }: EventHeroProps) {
  const accent = eventAccentColour(event.slug)
  const stripeClass =
    accent === 'blue' ? 'bg-tc-blue' : 'bg-tc-orange'
  const venuePending = isVenuePending(event)
  const ticketCta = getTicketCta(event)

  const statusLabel =
    event.status === 'upcoming'
      ? ticketCta?.onSale
        ? 'Upcoming'
        : 'Coming soon'
      : 'Past event'

  return (
    <section className="relative dot-grid pt-28 pb-14 md:pt-32 md:pb-16">
      <div
        className={`absolute left-0 top-0 bottom-0 w-1 ${stripeClass}`}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col items-start gap-4">
          <Link
            href="/events/"
            className="font-sans text-sm text-white/50 transition-colours hover:text-white"
          >
            ← All events
          </Link>
          <Chip className="!border-white/20 !text-white/80">{statusLabel}</Chip>
        </div>

        <h1 className="mt-8 font-sans text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
          TransportCamp {event.city} {event.year}
        </h1>
        <p className="mt-4 font-sans text-xl text-white/80">{event.date}</p>
        <p
          className={`mt-2 font-sans text-lg ${
            venuePending ? 'italic text-white/50' : 'text-white/60'
          }`}
        >
          {event.venue}
        </p>

        {ticketCta?.onSale && (
          <div className="mt-8 flex flex-wrap gap-4">
            <Button variant="primary" size="lg" href={ticketCta.href}>
              {ticketCta.label}
            </Button>
          </div>
        )}

        {ticketCta && !ticketCta.onSale && (
          <p className="mt-8 font-sans text-base font-medium text-tc-orange">
            {ticketCta.label}
          </p>
        )}

        {event.status === 'upcoming' && !ticketCta?.onSale && (
          <p className="mt-3 max-w-xl font-sans text-sm text-white/50 leading-relaxed">
            {venuePending
              ? 'Subscribe on the homepage for venue and registration updates.'
              : 'Subscribe on the homepage for ticket announcements.'}
          </p>
        )}
      </div>
    </section>
  )
}
