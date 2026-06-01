import Link from 'next/link'
import type { Event } from '@/data/events'
import { getTicketCta } from '@/lib/tickets'

export interface EventCardProps {
  event: Event
  accent?: 'orange' | 'blue'
  compact?: boolean
}

export function EventCard({
  event,
  accent = 'orange',
  compact = false,
}: EventCardProps) {
  const borderAccent =
    accent === 'blue' ? 'border-l-tc-blue' : 'border-l-tc-orange'
  const labelAccent = accent === 'blue' ? 'text-tc-blue' : 'text-tc-orange'
  const ticketCta = getTicketCta(event)

  return (
    <aside
      className={`rounded-md border border-white/10 border-l-4 bg-black/40 backdrop-blur-sm ${borderAccent} ${
        compact ? 'p-5' : 'p-6'
      }`}
    >
      <p
        className={`font-sans text-xs font-semibold uppercase tracking-widest ${labelAccent}`}
      >
        {event.city} {event.year}
      </p>
      <h2 className="mt-2 font-sans text-xl font-semibold text-white md:text-2xl">
        {event.date}
      </h2>
      <p
        className={`mt-2 font-sans text-sm text-white/70 ${
          event.venuePending ? 'italic text-white/50' : ''
        }`}
      >
        {event.venue}
      </p>
      {ticketCta && !ticketCta.onSale && (
        <p className="mt-3 font-sans text-xs text-white/50">{ticketCta.label}</p>
      )}
      {event.capacity && (
        <p className="mt-2 font-sans text-xs text-white/40">
          Capacity ~{event.capacity} participants
        </p>
      )}
      {ticketCta && (
        <Link
          href={ticketCta.href}
          className={`inline-flex font-sans text-sm font-medium transition-colours hover:text-white ${
            compact ? 'mt-4' : 'mt-6'
          } ${labelAccent}`}
        >
          {ticketCta.onSale ? 'Book tickets →' : 'View details →'}
        </Link>
      )}
    </aside>
  )
}
