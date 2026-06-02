import {
  heroEventCardVariants,
  type HeroEventCardVariantId,
} from '@/data/design-tokens'

type CityAccent = 'orange' | 'blue'

interface PreviewEvent {
  city: string
  year: number
  date: string
  venue: string
  ticketNote: string
  accent: CityAccent
}

const previewEvents: PreviewEvent[] = [
  {
    city: 'Sydney',
    year: 2026,
    date: 'Friday 14 August 2026',
    venue: 'Venue announcement coming soon',
    ticketNote: 'Tickets on sale soon',
    accent: 'orange',
  },
  {
    city: 'Melbourne',
    year: 2026,
    date: 'Friday 9 October 2026',
    venue: 'Monash University, 750 Collins Street, Docklands',
    ticketNote: 'Tickets on sale soon',
    accent: 'blue',
  },
]

function accentClasses(accent: CityAccent) {
  return {
    label: accent === 'blue' ? 'text-tc-blue' : 'text-tc-orange',
    left: accent === 'blue' ? 'border-l-tc-blue' : 'border-l-tc-orange',
    top: accent === 'blue' ? 'bg-tc-blue' : 'bg-tc-orange',
    border: accent === 'blue' ? 'border-tc-blue/35' : 'border-tc-orange/35',
  }
}

function HeroEventCardPreview({
  variant,
  event,
}: {
  variant: HeroEventCardVariantId
  event: PreviewEvent
}) {
  const a = accentClasses(event.accent)
  const shell = 'rounded-md border bg-black/40 p-5 backdrop-blur-sm'

  const content = (
    <>
      <p
        className={`font-sans text-xs font-semibold uppercase tracking-widest ${a.label}`}
      >
        {event.city} {event.year}
      </p>
      <h3 className="mt-2 font-sans text-xl font-semibold text-white">
        {event.date}
      </h3>
      <p
        className={`mt-2 font-sans text-sm text-white/70 ${
          event.city === 'Sydney' ? 'italic text-white/50' : ''
        }`}
      >
        {event.venue}
      </p>
      <p className="mt-3 font-sans text-xs text-white/50">{event.ticketNote}</p>
      <span
        className={`mt-4 inline-flex font-sans text-sm font-medium ${a.label} transition-colours hover:text-white`}
      >
        View details →
      </span>
    </>
  )

  switch (variant) {
    case 'current':
      return (
        <aside className={`${shell} border-white/10 border-l-4 ${a.left}`}>
          {content}
        </aside>
      )
    case 'minimal':
      return <aside className={`${shell} border-white/10`}>{content}</aside>
    case 'top-bar':
      return (
        <aside className={`${shell} relative overflow-hidden border-white/10 pt-6`}>
          <div className={`absolute inset-x-0 top-0 h-1 ${a.top}`} aria-hidden />
          {content}
        </aside>
      )
    case 'tinted-border':
      return <aside className={`${shell} border ${a.border}`}>{content}</aside>
    default:
      return null
  }
}

export function HeroEventCardVariants() {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {heroEventCardVariants.map((option) => (
        <article
          key={option.id}
          className={`overflow-hidden rounded-md border bg-white ${
            option.pick ? 'ring-2 ring-tc-orange/50' : 'border-black/10'
          }`}
        >
          <div className="border-b border-black/5 px-5 py-4 md:px-6">
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="font-sans text-sm font-semibold text-tc-orange">
                {option.letter}
              </span>
              <h3 className="font-sans text-lg font-semibold text-tc-text">
                {option.name}
              </h3>
              {option.pick && (
                <span className="font-sans text-xs font-semibold uppercase tracking-widest text-tc-orange">
                  Suggested
                </span>
              )}
              {option.id === 'minimal' && (
                <span className="font-sans text-xs font-medium text-tc-muted">
                  · live today
                </span>
              )}
            </div>
            <p className="mt-2 font-sans text-sm text-tc-muted leading-relaxed">
              {option.description}
            </p>
          </div>

          <div className="dot-grid p-5 md:p-6">
            <p className="mb-4 font-sans text-xs font-medium uppercase tracking-widest text-white/40">
              Hero context (Sydney + Melbourne)
            </p>
            <div className="flex max-w-sm flex-col gap-4">
              {previewEvents.map((event) => (
                <HeroEventCardPreview
                  key={`${option.id}-${event.city}`}
                  variant={option.id}
                  event={event}
                />
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
