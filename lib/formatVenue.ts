import type { Event } from '@/data/events'

export function formatVenueDisplay(event: Event): string {
  return event.venue
}

export function isVenuePending(event: Event): boolean {
  return Boolean(event.venuePending)
}
