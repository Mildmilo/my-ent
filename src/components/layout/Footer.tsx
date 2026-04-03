const quickLinks = [
  { label: 'Appointments', href: '/appointments' },
  { label: 'Your First Visit', href: '/appointments/your-first-visit' },
  { label: 'Fees and Medicare', href: '/appointments/fees-and-medicare' },
  { label: 'Referral Information', href: '/appointments/referral-information' },
  { label: 'Finding the Right Contact', href: '/contact/finding-the-right-contact' },
  { label: 'For GPs', href: '/for-gps' },
]

const clinicalLinks = [
  { label: 'Conditions', href: '/conditions' },
  { label: 'Procedures', href: '/procedures' },
  { label: 'Our Surgeons', href: '/about/our-surgeons' },
  { label: 'Patient Information', href: '/patient-info' },
]

export function Footer() {
  return (
    <footer className="mt-auto border-t border-neutral-200 bg-white">
      <div className="myent-container grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4">
        <section>
          <h2 className="text-xl">My-ENT</h2>
          <p className="mt-4 text-sm text-neutral-600">
            ENT care in Sydney with pathways for referrals, appointment requests, and patient support.
          </p>
        </section>

        <section>
          <h3 className="text-base">Patient Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a className="hover:text-teal-500" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-base">Clinical Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {clinicalLinks.map((link) => (
              <li key={link.href}>
                <a className="hover:text-teal-500" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-base">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              Phone:{' '}
              <a className="hover:text-teal-500" href="tel:0292471762">
                02 9247 1762
              </a>
            </li>
            <li>
              Fax:{' '}
              <a className="hover:text-teal-500" href="tel:0292472141">
                02 9247 2141
              </a>
            </li>
            <li>
              Email:{' '}
              <a className="hover:text-teal-500" href="mailto:contact@my-ent.com.au">
                contact@my-ent.com.au
              </a>
            </li>
            <li>Hours: 8:30 am to 5:00 pm, Monday to Friday</li>
            <li>
              <a className="hover:text-teal-500" href="/contact/finding-the-right-contact">
                Contact directory
              </a>
            </li>
            <li>ABN 25 661 686 324</li>
          </ul>
        </section>
      </div>
    </footer>
  )
}