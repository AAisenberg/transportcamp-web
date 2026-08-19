import type { Sponsor } from '@/data/events'
import { FadeIn } from '@/components/ui/FadeIn'

export interface EventSponsorsProps {
  sponsors: Sponsor[]
}

export function EventSponsors({ sponsors }: EventSponsorsProps) {
  if (sponsors.length === 0) return null

  return (
    <FadeIn>
      <div className="mt-10 border-t border-black/5 pt-10">
        <p className="font-sans text-xs font-semibold uppercase tracking-widest text-tc-muted">
          Event sponsors
        </p>
        <ul className="mt-4 flex flex-wrap gap-4">
          {sponsors.map((sponsor) => (
            <li key={sponsor.name}>
              <a
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[5.5rem] items-center rounded-md border border-black/8 bg-white px-5 py-4 transition-colours hover:border-tc-blue/30"
                aria-label={`${sponsor.name} (opens in new tab)`}
              >
                {sponsor.logo ? (
                  <span
                    role="img"
                    aria-hidden
                    className={`block bg-contain bg-center bg-no-repeat ${
                      sponsor.name === 'Modal Planning'
                        ? 'h-10 w-[11rem] max-w-full'
                        : 'h-8 w-[8.5rem] max-w-full'
                    }`}
                    style={{ backgroundImage: `url(${sponsor.logo})` }}
                  />
                ) : (
                  <span className="font-sans text-sm font-medium text-tc-blue">
                    {sponsor.name}
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </FadeIn>
  )
}
