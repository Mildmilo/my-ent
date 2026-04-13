'use client'

import { useState } from 'react'
import Image from 'next/image'

interface NavItem {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Conditions', href: '/conditions' },
  { label: 'Procedures', href: '/procedures' },
  { label: 'Appointments', href: '/appointments' },
  { label: 'Patient Info', href: '/patient-info' },
  { label: 'For GPs', href: '/for-gps' },
  { label: 'Contact', href: '/contact' },
]

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-neutral-50/95 backdrop-blur">
      <div className="myent-container flex items-center justify-between gap-6 py-4">
        <a href="/" aria-label="My-ENT home">
          <Image
            src="/images/myent-logo-teal.png"
            alt="My-ENT"
            width={126}
            height={40}
            priority
          />
        </a>

        <nav className="hidden lg:block" aria-label="Primary navigation">
          <ul className="flex items-center gap-6 text-sm font-medium text-neutral-700">
            {navItems.map((item) => (
              <li key={item.href}>
                <a className="transition-colors hover:text-teal-500" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a className="myent-btn-primary hidden lg:inline-flex" href="/appointments">
          Request Appointment
        </a>

        <button
          type="button"
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm font-medium text-neutral-700 transition-colors duration-150 hover:border-teal-200 hover:text-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-400 lg:hidden"
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-primary-nav"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          Menu
        </button>
      </div>

      {isMenuOpen ? (
        <div className="border-t border-neutral-200 bg-white lg:hidden" id="mobile-primary-nav">
          <div className="myent-container py-4">
            <nav aria-label="Mobile primary navigation">
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      className="flex min-h-[44px] items-center rounded-lg px-3 text-base text-neutral-700 transition-colors duration-150 hover:bg-teal-50 hover:text-teal-400"
                      href={item.href}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <a className="myent-btn-primary mt-4 flex w-full justify-center" href="/appointments" onClick={closeMenu}>
              Request appointment
            </a>
          </div>
        </div>
      ) : null}
    </header>
  )
}