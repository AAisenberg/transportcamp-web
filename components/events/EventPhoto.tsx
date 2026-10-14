import Image from 'next/image'
import type { Event } from '@/data/events'
import { FadeIn } from '@/components/ui/FadeIn'

export interface EventPhotoProps {
  event: Event
}

function EventPhotoFigure({
  src,
  alt,
  caption,
  width,
  height,
  priority,
}: {
  src: string
  alt: string
  caption?: string
  width: number
  height: number
  priority?: boolean
}) {
  return (
    <figure className="overflow-hidden rounded-md border border-black/8 bg-white">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-auto w-full object-contain"
        priority={priority}
      />
      {caption && (
        <figcaption className="border-t border-black/5 px-5 py-3 font-sans text-sm text-tc-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

export function EventPhoto({ event }: EventPhotoProps) {
  if (!event.photo) return null

  const width = event.photoWidth ?? 1024
  const height = event.photoHeight ?? 768
  const alt =
    event.photoCaption ?? `TransportCamp ${event.city} ${event.year}`

  return (
    <section className="bg-tc-off-white pt-10 pb-10 md:pt-12 md:pb-12">
      <div className="mx-auto max-w-6xl space-y-8 px-5 md:space-y-10 md:px-8">
        <FadeIn>
          <EventPhotoFigure
            src={event.photo}
            alt={alt}
            caption={event.photoCaption}
            width={width}
            height={height}
            priority
          />
        </FadeIn>
        {event.morePhotos?.map((item) => (
          <FadeIn key={item.src}>
            <EventPhotoFigure
              src={item.src}
              alt={item.caption ?? alt}
              caption={item.caption}
              width={item.width}
              height={item.height}
            />
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
