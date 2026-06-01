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
  openGraph: {
    siteName: 'TransportCamp',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
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
