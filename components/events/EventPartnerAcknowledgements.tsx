import type { Event } from '@/data/events'

export interface EventPartnerAcknowledgementsProps {
  event: Event
}

export function hasPartnerAcknowledgements(event: Event): boolean {
  return Boolean(event.partnerBanner)
}

export function EventPartnerAcknowledgements({
  event,
}: EventPartnerAcknowledgementsProps) {
  if (!event.partnerBanner) return null

  return (
    <div className="mt-10 border-t border-black/5 pt-10">
      <p className="font-sans text-xs font-semibold uppercase tracking-widest text-tc-muted">
        Thank you to our event sponsors
      </p>
      <figure className="mt-6 max-w-[846px]">
        <img
          src={event.partnerBanner}
          alt="Monash University, Stantec and Modal Planning — TransportCamp Melbourne 2026 sponsors"
          width={1024}
          height={91}
          className="block h-auto w-full"
          loading="lazy"
          decoding="async"
        />
      </figure>

      {event.organiserBanner && (
        <div className="mt-8 border-t border-black/5 pt-8">
          <p className="font-sans text-xs font-semibold uppercase tracking-widest text-tc-muted">
            Co-organised by
          </p>
          <figure className="mt-6 max-w-[846px]">
            <img
              src={event.organiserBanner}
              alt="Co-organised by CrowdLab and Movement in Place Consulting"
              width={1024}
              height={159}
              className="block h-auto w-full"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      )}
    </div>
  )
}
