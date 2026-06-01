import Image from 'next/image'
import type { Event } from '@/data/events'
import { FadeIn } from '@/components/ui/FadeIn'

export interface EventPhotoProps {
  event: Event
}

export function EventPhoto({ event }: EventPhotoProps) {
  if (!event.photo) return null

  return (
    <section className="-mt-2 bg-tc-off-white pb-0 pt-0">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn>
          <figure className="overflow-hidden rounded-sm border border-black/8 bg-white">
            <Image
              src={event.photo}
              alt={event.photoCaption ?? `TransportCamp ${event.city} ${event.year}`}
              width={1024}
              height={768}
              className="h-auto w-full object-cover"
              priority
            />
            {event.photoCaption && (
              <figcaption className="border-t border-black/5 px-5 py-3 font-sans text-sm text-tc-muted">
                {event.photoCaption}
              </figcaption>
            )}
          </figure>
        </FadeIn>
      </div>
    </section>
  )
}
