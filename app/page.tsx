import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/home/Hero'
import { RecentEventsStrip } from '@/components/home/RecentEventsStrip'
import { SponsorsStrip } from '@/components/home/SponsorsStrip'
import { WhatIsTC } from '@/components/home/WhatIsTC'
import { getFeaturedRecentEvents } from '@/lib/events'
import { pageMetadata } from '@/lib/siteMetadata'

export const metadata = pageMetadata({
  path: '/',
  title: 'Transport unconference — Australia',
  description:
    'TransportCamp is a participant-led transport unconference in Australia. Sydney and Melbourne 2026 are in the archive — subscribe for news on future events.',
})

export default function HomePage() {
  const recentEvents = getFeaturedRecentEvents()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <RecentEventsStrip events={recentEvents} />
        <WhatIsTC />
        <SponsorsStrip />
      </main>
      <Footer />
    </>
  )
}
