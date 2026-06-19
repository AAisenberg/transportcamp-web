import Image from 'next/image'
import type { VenueHost } from '@/data/events'
import { FadeIn } from '@/components/ui/FadeIn'

export interface EventVenueHostProps {
  venueHost: VenueHost
}

export function EventVenueHost({ venueHost }: EventVenueHostProps) {
  return (
    <FadeIn>
      <div className="mt-10 border-t border-black/5 pt-10">
        <p className="font-sans text-xs font-semibold uppercase tracking-widest text-tc-muted">
          Venue host — {venueHost.name}
        </p>
        <a
          href={venueHost.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block rounded-md border border-black/8 bg-white p-4 transition-colours hover:border-tc-blue/30"
        >
          <Image
            src={venueHost.logo}
            alt={venueHost.name}
            width={120}
            height={160}
            className="h-auto w-[100px] object-contain md:w-[120px]"
          />
        </a>
      </div>
    </FadeIn>
  )
}
