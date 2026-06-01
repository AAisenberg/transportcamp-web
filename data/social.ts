/** Set in .env.local — each icon hidden until its URL is provided */
export const contactEmail = 'hello@transportcamp.city'

export const socialLinks = {
  /** X (formerly Twitter) — TransportCamp’s active channel for now */
  x: process.env.NEXT_PUBLIC_X_URL ?? '',
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? '',
  /** Add when an Instagram account exists */
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? '',
} as const

export function hasSocialLinks(): boolean {
  return Boolean(socialLinks.x || socialLinks.linkedin || socialLinks.instagram)
}
