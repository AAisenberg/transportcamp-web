import type { Metadata } from 'next'
import type { Event } from '@/data/events'

const siteUrl = 'https://transportcamp.city'

/** Bump when replacing a share image so LinkedIn/Slack pick up the new asset. */
const shareImageVersion = '2'

export function getEventMetadata(event: Event): Metadata {
  const venueLine = event.venuePending ? 'Venue to be announced' : event.venue
  const title = `${event.city} ${event.year}`
  const pageTitle = `${title} | TransportCamp`
  const description =
    event.description ??
    `TransportCamp ${event.city} ${event.year} — ${event.date}. ${venueLine}.`
  const canonicalPath = `/events/${event.slug}/`
  const canonicalUrl = `${siteUrl}${canonicalPath}`

  const shareImageUrl = event.shareImage
    ? `${event.shareImage}?v=${shareImageVersion}`
    : undefined

  const absoluteShareImageUrl = shareImageUrl
    ? `${siteUrl}${shareImageUrl}`
    : undefined

  const shareImage = shareImageUrl
    ? {
        url: shareImageUrl,
        width: 1200,
        height: 630,
        alt: `TransportCamp ${event.city} ${event.year} — ${event.date}`,
        type: 'image/png',
      }
    : undefined

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      type: 'website',
      url: canonicalUrl,
      siteName: 'TransportCamp',
      locale: 'en_AU',
      title: pageTitle,
      description,
      ...(shareImage ? { images: [shareImage] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description,
      ...(absoluteShareImageUrl ? { images: [absoluteShareImageUrl] } : {}),
    },
    other: absoluteShareImageUrl
      ? {
          'linkedin:image': absoluteShareImageUrl,
        }
      : undefined,
  }
}
