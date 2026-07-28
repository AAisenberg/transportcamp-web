import type { MetadataRoute } from 'next'
import { events } from '@/data/events'

const siteUrl = 'https://transportcamp.city'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/`,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteUrl}/events/`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/about/`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/sponsor/`,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${siteUrl}/contact/`,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]

  const eventRoutes: MetadataRoute.Sitemap = events.map((event) => ({
    url: `${siteUrl}/events/${event.slug}/`,
    lastModified: event.dateISO,
    changeFrequency: event.status === 'upcoming' ? 'weekly' : 'yearly',
    priority: event.status === 'upcoming' ? 0.9 : 0.4,
  }))

  return [...staticRoutes, ...eventRoutes]
}
