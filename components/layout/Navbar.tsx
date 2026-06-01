'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/ui/Logo'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { getUpcomingEvents } from '@/lib/events'
import { getPrimaryTicketCta } from '@/lib/tickets'

const staticNavLinks = [
  { href: '/about/', label: 'About' },
  { href: '/events/', label: 'Events' },
  { href: '/sponsor/', label: 'Sponsor' },
]

export function Navbar() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const scrolled = useScrollPosition()
  const [menuOpen, setMenuOpen] = useState(false)
  const upcomingEvents = getUpcomingEvents()
  const ticketCta = getPrimaryTicketCta(upcomingEvents)
  const solid = !isHome || scrolled || menuOpen

  const eventNavLinks = upcomingEvents.map((event) => ({
    href: `/events/${event.slug}/`,
    label: `${event.city} ${event.year}`,
  }))

  const navLinks = [...eventNavLinks, ...staticNavLinks]

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? 'border-b border-black/10 bg-white/95 backdrop-blur-sm'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="relative z-50" onClick={() => setMenuOpen(false)}>
          <Logo variant="colour" className="h-7 w-auto" />
        </Link>

        <ul className="hidden items-center gap-6 lg:gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`font-sans text-sm font-medium transition-colours hover:text-tc-orange ${
                  solid ? 'text-tc-text' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button
            variant="primary"
            size="sm"
            href={ticketCta.href}
            className={solid ? '' : '!border-tc-orange'}
          >
            {ticketCta.label}
          </Button>
        </div>

        <button
          type="button"
          className={`relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden ${
            solid ? 'text-tc-text' : 'text-white'
          }`}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span
            className={`block h-0.5 w-6 bg-current transition-transform ${
              menuOpen ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition-opacity ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition-transform ${
              menuOpen ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col bg-tc-dark pt-24 md:hidden">
          <ul className="flex flex-col gap-6 px-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-sans text-2xl font-semibold text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-10 px-8">
            <Button
              variant="primary"
              size="lg"
              href={ticketCta.href}
              className="w-full justify-center"
            >
              {ticketCta.label}
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
