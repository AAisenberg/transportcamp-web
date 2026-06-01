import Link from 'next/link'
import type { ReactNode } from 'react'

export interface ButtonProps {
  variant: 'primary' | 'ghost' | 'outline'
  size: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  children: ReactNode
  className?: string
  type?: 'button' | 'submit'
}

const variantClasses: Record<ButtonProps['variant'], string> = {
  primary:
    'bg-tc-orange text-white hover:bg-[#c9451f] border border-tc-orange',
  ghost:
    'bg-transparent text-white border border-white/40 hover:border-white hover:bg-white/5',
  outline:
    'bg-transparent text-tc-text border border-tc-text/20 hover:border-tc-orange hover:text-tc-orange',
}

const sizeClasses: Record<ButtonProps['size'], string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
}

export function Button({
  variant,
  size,
  href,
  onClick,
  children,
  className = '',
  type = 'button',
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center font-sans font-medium rounded-sm transition-colours ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if (href) {
    const isExternal = href.startsWith('http')
    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
