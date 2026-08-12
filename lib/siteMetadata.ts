import type { Metadata } from 'next'

export const siteUrl = 'https://transportcamp.city'

/** Canonical metadata for static pages (trailing slash paths). */
export function pageMetadata({
  path,
  title,
  description,
  openGraphTitle,
}: {
  path: `/${string}/` | '/'
  title?: string
  description: string
  openGraphTitle?: string
}): Metadata {
  const pageTitle = title ? `${title} | TransportCamp` : 'TransportCamp'

  return {
    ...(title ? { title } : {}),
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: 'website',
      url: `${siteUrl}${path === '/' ? '/' : path}`,
      siteName: 'TransportCamp',
      locale: 'en_AU',
      title: openGraphTitle ?? pageTitle,
      description,
    },
    twitter: {
      card: 'summary_large_image',
      title: openGraphTitle ?? pageTitle,
      description,
    },
  }
}
