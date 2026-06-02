/** TransportCamp design tokens — single source for the design system page and docs */

export const colours = {
  orange: { name: 'TC Orange', hex: '#E34F26', usage: 'Primary CTAs, accents, Transport in logo' },
  blue: { name: 'TC Blue', hex: '#1E6EB4', usage: 'Links, secondary accents, Camp in logo' },
  dark: { name: 'TC Dark', hex: '#0C0C0C', usage: 'Hero backgrounds, footer' },
  offWhite: { name: 'TC Off-white', hex: '#F7F7F7', usage: 'Section backgrounds' },
  white: { name: 'TC White', hex: '#FFFFFF', usage: 'Cards, nav when scrolled' },
  text: { name: 'TC Text', hex: '#1A1A1A', usage: 'Body copy' },
  muted: { name: 'TC Muted', hex: '#6B7280', usage: 'Supporting text, labels' },
} as const

export const typography = {
  brand: {
    name: 'Helvetica (brand)',
    stack: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    usage: 'Logo, headings, UI — the standard TransportCamp typeface',
  },
  body: {
    name: 'Helvetica (body)',
    stack: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    usage: 'Body copy, navigation, buttons, chips',
  },
  optionalSerif: {
    name: 'Georgia (optional accent)',
    stack: 'Georgia, "Times New Roman", serif',
    usage: 'Not used on the live site by default — available for editorial pull quotes if needed',
  },
} as const

export const typeScale = [
  { name: 'Display / H1', className: 'text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight', sample: 'Where transport meets ideas.' },
  { name: 'H2', className: 'text-3xl md:text-4xl font-semibold tracking-tight', sample: 'Not a conference. A conversation.' },
  { name: 'H3', className: 'text-xl md:text-2xl font-semibold', sample: 'Everyone leads' },
  { name: 'Body large', className: 'text-lg leading-relaxed', sample: 'A participant-led unconference connecting planners and advocates.' },
  { name: 'Body', className: 'text-base leading-relaxed', sample: 'TransportCamp has been held across Australia since 2014.' },
  { name: 'Small / UI', className: 'text-sm font-medium', sample: 'Get tickets · Past events' },
  { name: 'Label', className: 'text-xs font-semibold uppercase tracking-widest', sample: 'Sponsorship' },
] as const

/** Production radius tokens */
export const borderRadii = [
  {
    token: 'sharp',
    px: 0,
    className: 'rounded-none',
    tailwind: 'rounded-none',
    usage: 'Square corners — not used on the live site today',
  },
  {
    token: 'sm',
    px: 2,
    className: 'rounded-sm',
    tailwind: 'rounded-sm',
    usage: 'Previous default (2px)',
  },
  {
    token: 'md',
    px: 6,
    className: 'rounded-md',
    tailwind: 'rounded-md',
    usage: 'Live site — buttons, cards, and inputs',
  },
  {
    token: 'lg',
    px: 12,
    className: 'rounded-xl',
    tailwind: 'rounded-xl (12px)',
    usage: 'Softer alternate if md still feels too sharp',
  },
] as const

export const radiusComparisonSamples = borderRadii.map((r) => ({
  px: r.px,
  label: `${r.px}px`,
  sublabel: r.token === 'md' ? `${r.token} · live site` : r.token,
  recommended: r.token === 'md',
  tailwind: r.tailwind,
}))

export const radiusGuidance = {
  recommended: 'md' as const,
  recommendedPx: 6,
  liveSitePx: 6,
  liveSiteClass: 'rounded-md',
  keepFullRadius: 'Chips and pills stay rounded-full',
  summary:
    'The live site uses 6px corners (rounded-md) on buttons, cards, and inputs. Comparison below shows how that differs from sharper options.',
} as const

/** Homepage hero event card accent options — preview on /design-system/#hero-event-cards */
export const heroEventCardVariants = [
  {
    id: 'current',
    letter: 'A',
    name: 'Left accent',
    description:
      'Thick left border in city colour. Fast to scan; common in Tailwind-heavy and AI-generated layouts.',
    pick: false,
  },
  {
    id: 'minimal',
    letter: 'B',
    name: 'Minimal (live)',
    description:
      'Uniform card border only — city label, date, and link carry orange or blue. More editorial, less “dashboard”.',
    pick: true,
  },
  {
    id: 'top-bar',
    letter: 'C',
    name: 'Top accent',
    description:
      'Thin full-width bar at the top of the card. Still codes Sydney/Melbourne without the side stripe.',
    pick: false,
  },
  {
    id: 'tinted-border',
    letter: 'D',
    name: 'Tinted border',
    description:
      'Whole card outline in a soft orange or blue tint. Softer than a left bar, clearer than minimal.',
    pick: false,
  },
] as const

export type HeroEventCardVariantId = (typeof heroEventCardVariants)[number]['id']

export const brandLanguage = {
  productName: 'TransportCamp',
  rule: 'Always one word in brand copy — never "Transport Camp".',
  legalEntity: 'TransportCamp Pty Ltd',
  abn: '14 661 835 098',
  organisersLine: 'Co-organised by CrowdLab with Movement in Place Consulting',
  organisers: ['CrowdLab', 'Movement in Place Consulting'] as const,
} as const
