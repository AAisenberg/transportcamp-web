export interface VenueHost {
  name: string
  url: string
  logo: string
}

export interface Event {
  slug: string
  city: string
  year: number
  date: string
  dateISO: string
  venue: string
  status: 'upcoming' | 'past'
  ticketUrl?: string
  description?: string
  sponsors?: Sponsor[]
  venueHost?: VenueHost
  registrationOpens?: string
  eventStart?: string
  wayfindingNote?: string
  mapEmbedUrl?: string
  mapLinks?: { label: string; href: string }[]
  capacity?: number
  photo?: string
  photoCaption?: string
  venuePending?: boolean
}

export interface Sponsor {
  name: string
  url: string
  logo?: string
  tier: 'principal' | 'supporting' | 'community'
}

export const events: Event[] = [
  {
    slug: 'sydney-2026',
    city: 'Sydney',
    year: 2026,
    date: 'Friday 14 August 2026',
    dateISO: '2026-08-14',
    venue: 'UNSW Sydney — Science & Engineering Building (K-E8)',
    status: 'upcoming',
    ticketUrl: 'https://events.humanitix.com/transportcamp-sydney-2026',
    description:
      'TransportCamp returns to Sydney on Friday 14 August 2026, hosted at UNSW Sydney’s Science & Engineering Building. Join transport professionals, researchers, technologists and advocates for a participant-led day of open sessions on urban mobility and innovation.',
    registrationOpens: '8:30am',
    eventStart: '9:00am (prompt start)',
    wayfindingNote:
      'Kensington campus, Science & Engineering Building (K-E8). Detailed directions will be shared before the event.',
    mapEmbedUrl:
      'https://maps.google.com/maps?q=Science+and+Engineering+Building,+UNSW+Sydney,+Kensington,+NSW+2052&output=embed',
    mapLinks: [
      {
        label: 'Open in Google Maps',
        href: 'https://maps.google.com/?q=Science+and+Engineering+Building,+UNSW+Sydney,+Kensington,+NSW+2052',
      },
      {
        label: 'UNSW campus map',
        href: 'https://www.unsw.edu.au/maps/campus-maps',
      },
    ],
    venueHost: {
      name: 'UNSW Sydney',
      url: 'https://www.unsw.edu.au',
      logo: '/images/venue-hosts/unsw-sydney.png',
    },
  },
  {
    slug: 'melbourne-2026',
    city: 'Melbourne',
    year: 2026,
    date: 'Friday 9 October 2026',
    dateISO: '2026-10-09',
    venue: 'Monash University, 750 Collins Street, Docklands',
    status: 'upcoming',
    description:
      'TransportCamp Melbourne returns to Monash University in Docklands. Join transport professionals, researchers, technologists and advocates for a participant-led day of open sessions on urban mobility and innovation. Tickets on sale soon.',
    capacity: 120,
  },
  {
    slug: 'melbourne-2025',
    city: 'Melbourne',
    year: 2025,
    date: 'Friday 3 October 2025',
    dateISO: '2025-10-03',
    venue: 'Monash College, 750 Collins Street, Docklands',
    status: 'past',
    description:
      'TransportCamp Melbourne 2025 at Monash University, Docklands — the unconference for transport, mobility and the future of cities.',
    photo: '/images/events/melbourne-2025.png',
    photoCaption: 'TransportCamp Melbourne 2025',
  },
  {
    slug: 'perth-2025',
    city: 'Perth',
    year: 2025,
    date: 'Friday 22 August 2025',
    dateISO: '2025-08-22',
    venue: 'Department of Transport, 140 William Street, Perth',
    status: 'past',
    description:
      'The inaugural TransportCamp Perth brought together transport professionals and advocates across Western Australia.',
  },
  {
    slug: 'sydney-2025',
    city: 'Sydney',
    year: 2025,
    date: 'Friday 25 July 2025',
    dateISO: '2025-07-25',
    venue: 'Abercrombie Building, The University of Sydney',
    status: 'past',
    description:
      'TransportCamp Sydney returned for its fifth event at the University of Sydney.',
    photo: '/images/events/sydney-2025.png',
    photoCaption: 'TransportCamp Sydney 2025',
  },
  {
    slug: 'brisbane-2025',
    city: 'Brisbane',
    year: 2025,
    date: 'Friday 21 February 2025',
    dateISO: '2025-02-21',
    venue:
      'Queensland Department of Transport and Main Roads Conference Centre',
    status: 'past',
    description:
      'The second TransportCamp Brisbane connected innovators across government, operations, planning and entrepreneurship.',
  },
  {
    slug: 'melbourne-2024',
    city: 'Melbourne',
    year: 2024,
    date: 'Friday 4 October 2024',
    dateISO: '2024-10-04',
    venue: 'Melbourne Town Hall',
    status: 'past',
    description:
      'Marking ten years since the first TransportCamp Melbourne, this event returned to Melbourne Town Hall.',
  },
  {
    slug: 'sydney-2024',
    city: 'Sydney',
    year: 2024,
    date: 'Friday 19 July 2024',
    dateISO: '2024-07-19',
    venue: 'The University of Sydney',
    status: 'past',
    description:
      'TransportCamp Sydney 2024 brought the unconference back to the University of Sydney.',
  },
  {
    slug: 'brisbane-2023',
    city: 'Brisbane',
    year: 2023,
    date: 'Friday 27 October 2023',
    dateISO: '2023-10-27',
    venue:
      'Queensland Department of Transport and Main Roads Conference Centre',
    status: 'past',
    description:
      'The inaugural TransportCamp Brisbane welcomed participants from across Queensland.',
  },
  {
    slug: 'melbourne-2023',
    city: 'Melbourne',
    year: 2023,
    date: 'Friday 6 October 2023',
    dateISO: '2023-10-06',
    venue: 'Melbourne Town Hall',
    status: 'past',
  },
  {
    slug: 'sydney-2023',
    city: 'Sydney',
    year: 2023,
    date: 'Friday 28 July 2023',
    dateISO: '2023-07-28',
    venue: 'Abercrombie Building, The University of Sydney',
    status: 'past',
    description:
      'After a three-year hiatus, TransportCamp returned to Sydney with much to discuss.',
  },
  {
    slug: 'sydney-2022',
    city: 'Sydney',
    year: 2022,
    date: 'Friday 2 December 2022',
    dateISO: '2022-12-02',
    venue: 'Abercrombie Building, The University of Sydney',
    status: 'past',
  },
  {
    slug: 'melbourne-2022',
    city: 'Melbourne',
    year: 2022,
    date: 'Friday 30 September 2022',
    dateISO: '2022-09-30',
    venue: 'Melbourne Town Hall',
    status: 'past',
    description:
      'The fifth TransportCamp Melbourne after a three-year hiatus.',
  },
  {
    slug: 'melbourne-2019',
    city: 'Melbourne',
    year: 2019,
    date: 'Friday 4 October 2019',
    dateISO: '2019-10-04',
    venue: 'Melbourne Town Hall',
    status: 'past',
  },
  {
    slug: 'sydney-2019',
    city: 'Sydney',
    year: 2019,
    date: 'Friday 22 February 2019',
    dateISO: '2019-02-22',
    venue: 'Abercrombie Building, The University of Sydney',
    status: 'past',
    description:
      'The inaugural TransportCamp Sydney brought together transport professionals and researchers.',
  },
  {
    slug: 'melbourne-2017',
    city: 'Melbourne',
    year: 2017,
    date: 'Friday 6 October 2017',
    dateISO: '2017-10-06',
    venue: 'Melbourne Town Hall, 90–120 Swanston Street',
    status: 'past',
    description:
      'Over 130 participants explored urban mobility at Melbourne Town Hall.',
  },
  {
    slug: 'melbourne-2016',
    city: 'Melbourne',
    year: 2016,
    date: 'Tuesday 15 November 2016',
    dateISO: '2016-11-15',
    venue: 'City of Melbourne, 90–120 Swanston Street',
    status: 'past',
  },
  {
    slug: 'melbourne-2014',
    city: 'Melbourne',
    year: 2014,
    date: 'Saturday 1 November 2014',
    dateISO: '2014-11-01',
    venue: 'Sidney Myer Asia Centre, University of Melbourne, Parkville',
    status: 'past',
    description:
      'The inaugural Melbourne TransportCamp — an unconference at the intersection of transport and technology.',
  },
]
