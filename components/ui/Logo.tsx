export interface LogoProps {
  variant?: 'colour' | 'light'
  className?: string
}

export function Logo({ variant = 'colour', className = '' }: LogoProps) {
  const transportFill =
    variant === 'light' ? 'rgba(255,255,255,0.95)' : '#E34F26'
  const campFill =
    variant === 'light' ? 'rgba(255,255,255,0.75)' : '#1E6EB4'

  return (
    <svg
      viewBox="0 0 200 40"
      width="200"
      height="40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      overflow="visible"
      className={`block shrink-0 ${className}`}
      aria-label="TransportCamp"
      role="img"
    >
      <text
        x="0"
        y="30"
        fontFamily="var(--font-brand)"
        fontSize="28"
        fontWeight="700"
        letterSpacing="-0.5"
      >
        <tspan fill={transportFill}>Transport</tspan>
        <tspan fill={campFill}>Camp</tspan>
      </text>
    </svg>
  )
}
