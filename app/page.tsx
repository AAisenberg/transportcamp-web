import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/home/Hero'
import { SponsorsStrip } from '@/components/home/SponsorsStrip'
import { WhatIsTC } from '@/components/home/WhatIsTC'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatIsTC />
        <SponsorsStrip />
      </main>
      <Footer />
    </>
  )
}
