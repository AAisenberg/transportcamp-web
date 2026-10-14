import Image from 'next/image'
import Link from 'next/link'
import type { Event } from '@/data/events'
import { FadeIn } from '@/components/ui/FadeIn'

export interface RecentEventsStripProps {
  events: Event[]
}

export function RecentEventsStrip({ events }: RecentEventsStripProps) {
  if (events.length === 0) return null

  return (
    <section className="border-t border-black/5 bg-white py-14 md:py-16">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn>
          <p className="font-sans text-xs font-semibold uppercase tracking-widest text-tc-muted">
            Recent events
          </p>
          <h2 className="mt-3 font-sans text-2xl font-semibold tracking-tight text-tc-text md:text-3xl">
            Sydney & Melbourne 2026
          </h2>
          <p className="mt-3 max-w-2xl font-sans text-base text-tc-muted leading-relaxed md:text-lg">
            Photos, session boards and details from our latest unconferences. Future
            dates for 2027 are not confirmed yet — subscribe on the homepage for
            announcements.
          </p>
        </FadeIn>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {events.map((event, index) => (
            <li key={event.slug}>
              <FadeIn delay={index * 0.06}>
                <Link
                  href={`/events/${event.slug}/`}
                  className="group flex h-full flex-col overflow-hidden rounded-md border border-black/8 bg-tc-off-white transition-colours hover:border-tc-blue/30"
                >
                  {event.photo && (
                    <div className="relative aspect-[21/9] overflow-hidden bg-white">
                      <Image
                        src={event.photo}
                        alt={
                          event.photoCaption ??
                          `TransportCamp ${event.city} ${event.year}`
                        }
                        width={event.photoWidth ?? 1024}
                        height={event.photoHeight ?? 440}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-5 md:p-6">
                    <p className="font-sans text-xs font-semibold uppercase tracking-widest text-tc-blue">
                      {event.city} {event.year}
                    </p>
                    <h3 className="mt-2 font-sans text-xl font-semibold text-tc-text group-hover:text-tc-blue transition-colours">
                      {event.date}
                    </h3>
                    <p className="mt-2 font-sans text-sm text-tc-muted line-clamp-2">
                      {event.venue}
                    </p>
                    {event.attendees != null && (
                      <p className="mt-3 font-sans text-sm text-tc-muted">
                        {event.attendees} attendees
                      </p>
                    )}
                    <span className="mt-4 font-sans text-sm font-medium text-tc-blue group-hover:text-tc-orange transition-colours">
                      View event →
                    </span>
                  </div>
                </Link>
              </FadeIn>
            </li>
          ))}
        </ul>

        <p className="mt-8">
          <Link
            href="/events/"
            className="font-sans text-sm font-medium text-tc-blue hover:text-tc-orange transition-colours"
          >
            Browse full event archive →
          </Link>
        </p>
      </div>
    </section>
  )
}
