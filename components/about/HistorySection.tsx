import Image from 'next/image'
import { FadeIn } from '@/components/ui/FadeIn'

export function HistorySection() {
  return (
    <section className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
          <FadeIn>
            <h2 className="font-sans text-2xl font-semibold text-tc-text md:text-3xl">
              History
            </h2>
            <p className="mt-5 font-sans text-lg text-tc-muted leading-relaxed">
              Since the inaugural Melbourne event in 2014, TransportCamp has
              grown into a national series across Melbourne, Sydney, Brisbane
              and Perth. Each city brings its own transport challenges; the
              unconference format stays the same — open, collaborative and
              participant-led.
            </p>
            <p className="mt-4 font-sans text-base text-tc-muted leading-relaxed">
              The photo shows TransportCamp Melbourne 2025 — one of the largest
              gatherings in the series to date.
            </p>
          </FadeIn>

          <FadeIn delay={0.08}>
            <figure className="overflow-hidden rounded-md border border-black/8 lg:sticky lg:top-28">
              <Image
                src="/images/events/melbourne-2025.png"
                alt="TransportCamp Melbourne 2025 group photo"
                width={1024}
                height={768}
                className="h-auto w-full object-cover"
              />
              <figcaption className="border-t border-black/5 bg-tc-off-white px-4 py-3 font-sans text-sm text-tc-muted">
                TransportCamp Melbourne 2025
              </figcaption>
            </figure>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
