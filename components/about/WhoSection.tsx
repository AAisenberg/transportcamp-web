import Link from 'next/link'
import { organisers } from '@/data/organisers'
import { FadeIn } from '@/components/ui/FadeIn'

export function WhoSection() {
  return (
    <section className="border-t border-black/5 bg-tc-off-white py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 lg:items-start">
          <FadeIn>
            <h2 className="font-sans text-2xl font-semibold text-tc-text md:text-3xl">
              Who comes
            </h2>
            <p className="mt-4 font-sans text-base text-tc-muted leading-relaxed md:text-lg">
              TransportCamp attracts a deliberately mixed room: transport planners
              and policy makers, researchers and students, technologists and data
              specialists, operators and consultants, and community advocates
              working on mobility, accessibility and liveability.
            </p>
            <p className="mt-3 font-sans text-base text-tc-muted leading-relaxed">
              You do not need to be an expert speaker — curiosity and willingness
              to contribute are enough.
            </p>
          </FadeIn>

          <FadeIn delay={0.06}>
            <h2 className="font-sans text-2xl font-semibold text-tc-text md:text-3xl">
              Who organises TransportCamp
            </h2>
            <p className="mt-4 font-sans text-base text-tc-muted leading-relaxed md:text-lg">
              TransportCamp is co-organised by{' '}
              <Link
                href={organisers[0].href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-tc-blue hover:text-tc-orange transition-colours"
              >
                CrowdLab
              </Link>{' '}
              with{' '}
              <Link
                href={organisers[1].href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-tc-blue hover:text-tc-orange transition-colours"
              >
                Movement in Place Consulting
              </Link>
              . Together they bring transport planning, engagement and event
              delivery experience from years of running unconferences across
              Australia.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
