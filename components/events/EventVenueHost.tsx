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
          Venue Partner — {venueHost.name}
        </p>
        <a
          href={venueHost.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block rounded-md border border-black/8 bg-white p-4 transition-colours hover:border-tc-blue/30"
          aria-label={`${venueHost.name} (opens in new tab)`}
        >
          <span
            role="img"
            aria-hidden
            className="block h-24 w-[220px] max-w-full bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${venueHost.logo})` }}
          />
        </a>
      </div>
    </FadeIn>
  )
}
