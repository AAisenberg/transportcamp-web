import type { ReactNode } from 'react'

export interface ChipProps {
  children: ReactNode
  className?: string
  icon?: ReactNode
}

export function Chip({ children, className = '', icon }: ChipProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 font-sans text-sm text-white/90 ${className}`}
    >
      {icon}
      {children}
    </span>
  )
}
