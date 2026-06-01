import Link from 'next/link'
import { FadeIn } from '@/components/ui/FadeIn'

export function SponsorsStrip() {
  return (
    <section className="border-t border-black/5 bg-[#FAFAFA] py-14 md:py-16">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <FadeIn>
          <p className="font-sans text-xs font-semibold uppercase tracking-widest text-tc-muted">
            Sponsorship
          </p>
          <h2 className="mt-3 font-sans text-2xl font-semibold tracking-tight text-tc-text md:text-3xl">
            Partner with TransportCamp
          </h2>
          <p className="mt-4 font-sans text-lg text-tc-muted leading-relaxed">
            TransportCamp is currently seeking sponsors for 2026 events in Sydney
            and Melbourne. Sponsorship helps keep tickets accessible and supports
            an independent, participant-led format.
          </p>
          <p className="mt-6">
            <Link
              href="/sponsor/"
              className="font-sans text-sm font-medium text-tc-blue hover:text-tc-orange transition-colours"
            >
              Learn about sponsorship →
            </Link>
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
