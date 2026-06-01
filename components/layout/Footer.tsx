import Link from 'next/link'
import { legalEntity } from '@/data/organisers'
import { contactEmail } from '@/data/social'
import { Logo } from '@/components/ui/Logo'
import { SocialLinks } from '@/components/ui/SocialLinks'

const footerLinks = [
  { href: '/about/', label: 'About' },
  { href: '/events/', label: 'Events' },
  { href: '/sponsor/', label: 'Sponsor' },
  { href: '/contact/', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-tc-dark text-white">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <Link href="/">
              <Logo variant="light" className="h-7 w-auto" />
            </Link>
            <p className="mt-4 max-w-sm font-sans text-sm text-white/60 leading-relaxed">
              An unconference for transport professionals, researchers,
              technologists and advocates working on the future of urban mobility.
            </p>
            <SocialLinks variant="dark" className="mt-6" />
            <p className="mt-6 font-sans text-xs text-white/40 leading-relaxed">
              {legalEntity.name} · ABN {legalEntity.abn}
              <br />
              Co-organised by CrowdLab with Movement in Place Consulting
            </p>
          </div>

          <ul className="flex flex-wrap gap-x-8 gap-y-3 font-sans text-sm">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/70 transition-colours hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-8 font-sans text-xs text-white/40 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} TransportCamp</p>
          <p>
            <a
              href={`mailto:${contactEmail}`}
              className="transition-colours hover:text-white/70"
            >
              {contactEmail}
            </a>
            {' · '}
            transportcamp.city
          </p>
        </div>
      </div>
    </footer>
  )
}
