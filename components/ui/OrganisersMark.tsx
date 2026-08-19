import Link from 'next/link'
import { organisers } from '@/data/organisers'

export interface OrganisersMarkProps {
  variant?: 'light' | 'dark'
  className?: string
}

export function OrganisersMark({
  variant = 'light',
  className = '',
}: OrganisersMarkProps) {
  const borderClass =
    variant === 'dark'
      ? 'border-white/15 hover:border-white/30'
      : 'border-black/8 hover:border-tc-blue/30'

  return (
    <div className={className}>
      <p
        className={`font-sans text-xs font-semibold uppercase tracking-widest ${
          variant === 'dark' ? 'text-white/50' : 'text-tc-muted'
        }`}
      >
        Co-organisers
      </p>
      <ul className="mt-4 flex flex-wrap items-center gap-4">
        {organisers.map((organiser) => (
          <li key={organiser.name}>
            <Link
              href={organiser.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center rounded-md border bg-white px-4 py-3 transition-colours ${borderClass}`}
              aria-label={`${organiser.name} (opens in new tab)`}
            >
              <span
                role="img"
                aria-hidden
                className={`block bg-contain bg-center bg-no-repeat ${
                  organiser.name === 'CrowdLab'
                    ? 'h-7 w-[7.5rem]'
                    : 'h-9 w-[9.5rem]'
                }`}
                style={{ backgroundImage: `url(${organiser.logo})` }}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
