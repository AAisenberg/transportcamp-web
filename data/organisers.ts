export interface Organiser {
  name: string
  href: string
  logo: string
}

export const organisers: Organiser[] = [
  {
    name: 'CrowdLab',
    href: 'https://crowdlab.com.au/',
    logo: '/organisers/crowdlab.png',
  },
  {
    name: 'Movement in Place Consulting',
    href: 'https://www.movementandplace.com.au/',
    logo: '/organisers/movement-in-place.jpg',
  },
]

export const legalEntity = {
  name: 'TransportCamp Pty Ltd',
  abn: '14 661 835 098',
  abnStatus: 'Active from 19 August 2022',
  state: 'VIC',
} as const
