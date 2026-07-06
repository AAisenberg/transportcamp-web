import type { Event } from '@/data/events'

export interface TicketCta {
  label: string
  href: string
  /** True when Humanitix (or similar) is live — show primary Book tickets */
  onSale: boolean
}

export function getTicketCta(event: Event): TicketCta | null {
  if (event.status !== 'upcoming') return null

  if (event.ticketUrl) {
    return {
      label: 'Book tickets',
      href: event.ticketUrl,
      onSale: true,
    }
  }

  return {
    label: 'Tickets on sale soon',
    href: `/events/${event.slug}/`,
    onSale: false,
  }
}

/** Homepage / nav — event page when one city is on sale; events hub when several are. */
export function getPrimaryTicketCta(events: Event[]): TicketCta {
  const upcoming = events.filter((e) => e.status === 'upcoming')
  const onSale = upcoming.filter((e) => e.ticketUrl)

  if (onSale.length === 1) {
    const event = onSale[0]
    return {
      label: `Book ${event.city} tickets`,
      href: `/events/${event.slug}/`,
      onSale: true,
    }
  }

  if (onSale.length > 1) {
    return {
      label: 'View events',
      href: '/events/',
      onSale: true,
    }
  }

  return {
    label: 'Tickets on sale soon',
    href: '/events/',
    onSale: false,
  }
}
