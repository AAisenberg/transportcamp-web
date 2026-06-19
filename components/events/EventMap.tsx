import type { Event } from '@/data/events'
import { FadeIn } from '@/components/ui/FadeIn'

export interface EventMapProps {
  event: Event
}

export function EventMap({ event }: EventMapProps) {
  if (!event.mapEmbedUrl) return null

  return (
    <FadeIn>
      <div className="mt-10 border-t border-black/5 pt-10">
        <h2 className="font-sans text-sm font-semibold uppercase tracking-widest text-tc-muted">
          Location
        </h2>
        {event.wayfindingNote && (
          <p className="mt-4 max-w-2xl font-sans text-base text-tc-muted leading-relaxed">
            {event.wayfindingNote}
          </p>
        )}
        <div className="mt-6 overflow-hidden rounded-md border border-black/8 bg-white">
          <iframe
            title={`Map — ${event.venue}`}
            src={event.mapEmbedUrl}
            className="aspect-[4/3] w-full border-0 md:aspect-[16/9]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        {event.mapLinks && event.mapLinks.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
            {event.mapLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm font-medium text-tc-blue hover:text-tc-orange transition-colours"
                >
                  {link.label} →
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </FadeIn>
  )
}
