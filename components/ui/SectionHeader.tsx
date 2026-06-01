export interface SectionHeaderProps {
  label?: string
  title: string
  description?: string
  className?: string
  dark?: boolean
}

export function SectionHeader({
  label,
  title,
  description,
  className = '',
  dark = false,
}: SectionHeaderProps) {
  return (
    <div className={className}>
      {label && (
        <p
          className={`mb-3 font-sans text-xs font-semibold uppercase tracking-widest ${
            dark ? 'text-white/50' : 'text-tc-muted'
          }`}
        >
          {label}
        </p>
      )}
      <h2
        className={`font-sans text-3xl font-semibold tracking-tight md:text-4xl ${
          dark ? 'text-white' : 'text-tc-text'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-2xl font-sans text-lg leading-relaxed ${
            dark ? 'text-white/70' : 'text-tc-muted'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
