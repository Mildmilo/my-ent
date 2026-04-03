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
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-neutral-50/95 backdrop-blur">
      <div className="myent-container flex items-center justify-between gap-6 py-4">
        <a href="/" className="flex items-center gap-3" aria-label="My-ENT home">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-teal-50 text-sm font-semibold text-teal-500">
            ME
          </span>
          <span className="font-serif text-2xl text-neutral-800">My-ENT</span>
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

        <a className="myent-btn-primary" href="/appointments">
          Request Appointment
        </a>
      </div>
    </header>
  )
}