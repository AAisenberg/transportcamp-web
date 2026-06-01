import { events, type Event } from '@/data/events'

export function getUpcomingEvents(): Event[] {
  return events
    .filter((e) => e.status === 'upcoming')
    .sort((a, b) => a.dateISO.localeCompare(b.dateISO))
}

/** Earliest upcoming event (chronological) */
export function getUpcomingEvent(): Event | undefined {
  return getUpcomingEvents()[0]
}

export function getEventBySlug(slug: string): Event | undefined {
  return events.find((e) => e.slug === slug)
}

export function getPastEvents(): Event[] {
  return events
    .filter((e) => e.status === 'past')
    .sort((a, b) => b.dateISO.localeCompare(a.dateISO))
}

export function getAllEventsSorted(): Event[] {
  return [...events].sort((a, b) => b.dateISO.localeCompare(a.dateISO))
}
