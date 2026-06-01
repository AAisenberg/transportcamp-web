import { FadeIn } from '@/components/ui/FadeIn'

interface Pillar {
  title: string
  description: string
  accent: 'orange' | 'blue' | 'dark'
}

const pillars: Pillar[] = [
  {
    title: 'Everyone leads',
    description:
      'Sessions are proposed and facilitated by attendees — no keynotes, no passive rows.',
    accent: 'orange',
  },
  {
    title: 'No passive audience',
    description:
      'You vote on the agenda, join discussions, and share what you are working on.',
    accent: 'blue',
  },
  {
    title: 'Cross-sector mix',
    description:
      'Planners, operators, researchers, technologists and advocates in one room.',
    accent: 'dark',
  },
]

const accentMap = {
  orange: 'bg-tc-orange text-white',
  blue: 'bg-tc-blue text-white',
  dark: 'bg-tc-dark text-white',
}

export function Pillars() {
  return (
    <div className="flex flex-col gap-4">
      {pillars.map((pillar, index) => (
        <FadeIn key={pillar.title} delay={index * 0.08}>
          <article className="rounded-md border border-black/5 bg-white p-5 md:p-6">
            <div
              className={`mb-4 flex h-10 w-10 items-center justify-center rounded-md font-sans text-sm font-semibold ${accentMap[pillar.accent]}`}
              aria-hidden
            >
              {index + 1}
            </div>
            <h3 className="font-sans text-xl text-tc-text">{pillar.title}</h3>
            <p className="mt-2 font-sans text-sm text-tc-muted leading-relaxed">
              {pillar.description}
            </p>
          </article>
        </FadeIn>
      ))}
    </div>
  )
}
