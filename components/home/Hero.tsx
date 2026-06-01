import { Button } from '@/components/ui/Button'
import { Chip } from '@/components/ui/Chip'
import { EventCard } from '@/components/home/EventCard'
import { NewsletterSignup } from '@/components/home/NewsletterSignup'
import { eventAccentColour } from '@/lib/brand'
import { getUpcomingEvents } from '@/lib/events'
import { getPrimaryTicketCta } from '@/lib/tickets'

function CalendarIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  )
}

export function Hero() {
  const upcomingEvents = getUpcomingEvents()
  const nextEvent = upcomingEvents[0]
  const ticketCta = getPrimaryTicketCta(upcomingEvents)

  return (
    <section className="relative min-h-[90vh] dot-grid pt-24 pb-16 md:pt-28">
      <div
        className="absolute left-0 top-0 bottom-0 w-1 stripe-accent"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[1fr_minmax(300px,400px)] md:items-end md:gap-12 md:px-8">
        <div className="max-w-2xl">
          {upcomingEvents.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {upcomingEvents.length === 1 && nextEvent ? (
                <Chip icon={<CalendarIcon />}>
                  {nextEvent.date.replace(/^[A-Za-z]+ /, '')} · {nextEvent.city}
                </Chip>
              ) : (
                <Chip icon={<CalendarIcon />}>
                  2026 · Sydney & Melbourne
                </Chip>
              )}
            </div>
          )}

          <h1 className="mt-8 font-sans text-4xl font-semibold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
            Where transport meets{' '}
            <span className="text-tc-orange">ideas</span>.
          </h1>

          <p className="mt-6 font-sans text-lg text-white/70 leading-relaxed md:text-xl">
            A participant-led unconference connecting planners, researchers,
            technologists and advocates shaping urban mobility.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button
              variant={ticketCta.onSale ? 'primary' : 'ghost'}
              size="lg"
              href={ticketCta.href}
            >
              {ticketCta.label}
            </Button>
            <Button variant="ghost" size="lg" href="/sponsor/">
              Become a sponsor
            </Button>
          </div>

          <NewsletterSignup className="mt-10 border-t border-white/10 pt-10" />
        </div>

        {upcomingEvents.length > 0 && (
          <div className="flex flex-col gap-4">
            {upcomingEvents.map((event) => (
              <EventCard
                key={event.slug}
                event={event}
                accent={eventAccentColour(event.slug)}
                compact={upcomingEvents.length > 1}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
