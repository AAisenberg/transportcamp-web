import type { Event } from '@/data/events'
import { legalEntity } from '@/data/organisers'
import { siteUrl } from '@/lib/siteMetadata'

const schemaContext = 'https://schema.org'

export function organizationJsonLd(): Record<string, unknown> {
  return {
    '@context': schemaContext,
    '@type': 'Organization',
    name: 'TransportCamp',
    legalName: legalEntity.name,
    url: siteUrl,
    logo: `${siteUrl}/logo.svg`,
    sameAs: [
      'https://x.com/TransportCampAU',
      'https://www.linkedin.com/company/transportcamp',
    ],
  }
}

function eventStartDateIso(event: Event): string {
  if (event.eventStart?.includes('9:00')) {
    return `${event.dateISO}T09:00:00+11:00`
  }
  return event.dateISO
}

function eventImageUrls(event: Event): string[] {
  const urls: string[] = []
  if (event.shareImage) {
    urls.push(`${siteUrl}${event.shareImage.split('?')[0]}`)
  }
  if (event.photo) {
    urls.push(`${siteUrl}${event.photo}`)
  }
  return urls
}

export function eventJsonLd(event: Event): Record<string, unknown> {
  const pageUrl = `${siteUrl}/events/${event.slug}/`
  const images = eventImageUrls(event)

  const payload: Record<string, unknown> = {
    '@context': schemaContext,
    '@type': 'Event',
    name: `TransportCamp ${event.city} ${event.year}`,
    description:
      event.description ??
      `TransportCamp ${event.city} ${event.year} — ${event.date}. ${event.venue}.`,
    startDate: eventStartDateIso(event),
    endDate: event.dateISO,
    eventStatus: `${schemaContext}/EventScheduled`,
    eventAttendanceMode: `${schemaContext}/OfflineEventAttendanceMode`,
    location: {
      '@type': 'Place',
      name: event.venue,
      address: {
        '@type': 'PostalAddress',
        addressLocality: event.city,
        addressCountry: 'AU',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: legalEntity.name,
      url: siteUrl,
    },
    url: pageUrl,
  }

  if (images.length > 0) {
    payload.image = images.length === 1 ? images[0] : images
  }

  if (event.attendees != null) {
    payload.maximumAttendeeCapacity = event.attendees
  } else if (event.capacity != null) {
    payload.maximumAttendeeCapacity = event.capacity
  }

  return payload
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
): Record<string, unknown> {
  return {
    '@context': schemaContext,
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path === '/' ? '/' : item.path}`,
    })),
  }
}
