/** City accent colours for 2026 upcoming events */
export function eventAccentColour(slug: string): 'orange' | 'blue' {
  if (slug === 'melbourne-2026') return 'blue'
  return 'orange'
}
