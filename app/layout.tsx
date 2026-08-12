import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'TransportCamp',
    template: '%s | TransportCamp',
  },
  description:
    'An unconference bringing together transport professionals, researchers, technologists and advocates working on the future of urban mobility.',
  metadataBase: new URL('https://transportcamp.city'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    siteName: 'TransportCamp',
    type: 'website',
    locale: 'en_AU',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TransportCamp — Where transport meets ideas.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-AU">
      <body>{children}</body>
    </html>
  )
}
