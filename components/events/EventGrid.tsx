import Image from 'next/image'
import Link from 'next/link'
import type { Event } from '@/data/events'
import { Button } from '@/components/ui/Button'
import { eventAccentColour } from '@/lib/brand'
import { getTicketCta } from '@/lib/tickets'

export interface EventGridProps {
  events: Event[]
  showUpcoming?: boolean
}

function titleHoverClass(isUpcoming: boolean, accent: 'orange' | 'blue' | null): string {
  if (!isUpcoming) return 'group-hover:text-tc-blue'
  return accent === 'blue' ? 'group-hover:text-tc-blue' : 'group-hover:text-tc-orange'
}

export function EventGrid({ events, showUpcoming = false }: EventGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => {
        const isUpcoming = event.status === 'upcoming'
        if (!showUpcoming && isUpcoming) return null
        if (showUpcoming && !isUpcoming) return null

        const accent = isUpcoming ? eventAccentColour(event.slug) : null
        const ticketCta = getTicketCta(event)
        const hoverTitle = titleHoverClass(isUpcoming, accent)

        const titleClass = isUpcoming
          ? accent === 'blue'
            ? 'text-tc-blue group-hover:text-tc-blue/80'
            : 'text-tc-orange group-hover:text-[#c9451f]'
          : `text-tc-text ${hoverTitle}`

        return (
          <article
            key={event.slug}
            className="group overflow-hidden rounded-md border border-black/8 bg-white transition-colours hover:border-tc-blue/30"
          >
            <Link href={`/events/${event.slug}/`} className="block">
              {event.photo && (
                <div className="relative aspect-[2/1] overflow-hidden border-b border-black/5 bg-tc-off-white">
                  <Image
                    src={event.photo}
                    alt={
                      event.photoCaption ??
                      `TransportCamp ${event.city} ${event.year}`
                    }
                    width={event.photoWidth ?? 800}
                    height={event.photoHeight ?? 400}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
              )}
              <div className="p-6">
              {isUpcoming && (
                <p
                  className={`font-sans text-xs font-semibold uppercase tracking-widest ${
                    accent === 'blue' ? 'text-tc-blue' : 'text-tc-orange'
                  }`}
                >
                  {event.city} {event.year}
                </p>
              )}
              <h3
                className={`font-sans text-2xl font-semibold transition-colours ${
                  isUpcoming ? `mt-1 ${titleClass}` : titleClass
                }`}
              >
                {isUpcoming ? event.date : `${event.city} ${event.year}`}
              </h3>
              <p className="mt-2 font-sans text-sm text-tc-muted">{event.date}</p>
              <p
                className={`mt-1 font-sans text-sm line-clamp-2 ${
                  event.venuePending ? 'italic text-tc-muted/80' : 'text-tc-muted/80'
                }`}
              >
                {event.venue}
              </p>
              </div>
            </Link>

            {isUpcoming && ticketCta && (
              <div className="mx-6 mb-6 mt-0 flex flex-col gap-2">
                {!ticketCta.onSale && (
                  <p className="font-sans text-xs text-tc-muted">{ticketCta.label}</p>
                )}
                <Button
                  variant={ticketCta.onSale ? 'primary' : 'outline'}
                  size="sm"
                  href={ticketCta.href}
                >
                  {ticketCta.onSale ? ticketCta.label : 'View event'}
                </Button>
              </div>
            )}
          </article>
        )
      })}
    </div>
  )
}
