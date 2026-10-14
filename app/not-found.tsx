import Link from 'next/link'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="dot-grid min-h-[70vh] pt-28 pb-16 md:pt-32">
        <div className="mx-auto max-w-lg px-5 text-center md:px-8">
          <p className="font-sans text-sm font-semibold uppercase tracking-widest text-white/50">
            404
          </p>
          <h1 className="mt-4 font-sans text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Page not found
          </h1>
          <p className="mt-4 font-sans text-base text-white/60 leading-relaxed">
            That URL doesn&apos;t exist. Try the events archive or head back to the
            homepage.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" size="md" href="/">
              Home
            </Button>
            <Button variant="ghost" size="md" href="/events/">
              Events
            </Button>
          </div>
          <p className="mt-8 font-sans text-sm text-white/50">
            <Link href="/about/" className="hover:text-white transition-colours">
              About TransportCamp
            </Link>
            {' · '}
            <Link href="/contact/" className="hover:text-white transition-colours">
              Contact
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
