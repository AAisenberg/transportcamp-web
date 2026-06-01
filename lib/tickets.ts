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

/** Homepage / nav when any upcoming events exist but none on sale yet */
export function getPrimaryTicketCta(events: Event[]): TicketCta {
  const upcoming = events.filter((e) => e.status === 'upcoming')
  const onSale = upcoming.find((e) => e.ticketUrl)

  if (onSale?.ticketUrl) {
    return {
      label: 'Book tickets',
      href: onSale.ticketUrl,
      onSale: true,
    }
  }

  return {
    label: 'Tickets on sale soon',
    href: '/events/',
    onSale: false,
  }
}
