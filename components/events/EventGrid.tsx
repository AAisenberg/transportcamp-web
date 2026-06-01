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

        return (
          <article
            key={event.slug}
            className={`group rounded-sm border p-6 transition-colours ${
              isUpcoming && accent === 'blue'
                ? 'border-tc-blue/30 border-l-4 border-l-tc-blue bg-white'
                : isUpcoming
                  ? 'border-tc-orange/30 border-l-4 border-l-tc-orange bg-white'
                  : 'border-black/8 bg-white hover:border-tc-blue/30'
            }`}
          >
            <Link href={`/events/${event.slug}/`} className="block">
              <h3
                className={`font-sans text-2xl font-semibold text-tc-text transition-colours ${hoverTitle}`}
              >
                {event.city} {event.year}
              </h3>
              <p className="mt-2 font-sans text-sm text-tc-muted">{event.date}</p>
              <p
                className={`mt-1 font-sans text-sm line-clamp-2 ${
                  event.venuePending ? 'italic text-tc-muted/80' : 'text-tc-muted/80'
                }`}
              >
                {event.venue}
              </p>
            </Link>

            {isUpcoming && ticketCta && (
              <div className="mt-4 flex flex-col gap-2">
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
