import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact My-ENT | Macquarie Street Sydney',
  description:
    'Contact My-ENT at 135 Macquarie Street, Sydney for bookings and enquiries, with map, hours, and urgent care guidance.',
}

const openingHours: string[] = [
  'Monday to Friday: 8:30 am – 5:00 pm',
  'Saturday: Closed',
  'Sunday: Closed',
]

export default function ContactPage() {
  return (
    <>
      <section className="myent-section bg-white">
        <div className="myent-container">
          <p className="myent-eyebrow">Contact</p>
          <div className="mt-4 max-w-3xl space-y-6">
            <h1 className="text-4xl leading-tight tracking-tight lg:text-5xl">Contact My-ENT</h1>
            <p className="text-lg leading-relaxed text-neutral-500">
              My-ENT reception manages bookings and enquiries for our Macquarie Street rooms.
              Contact details and opening hours are listed below.
            </p>
          </div>
        </div>
      </section>

      <section className="myent-section border-t border-neutral-200 bg-neutral-100">
        <div className="myent-container grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr]">
          <article className="myent-card">
            <p className="myent-eyebrow">Practice details</p>
            <h2 className="mt-3 text-3xl leading-tight">My-ENT</h2>

            <dl className="mt-6 space-y-5 text-base leading-relaxed">
              <div>
                <dt className="text-sm font-medium text-neutral-700">Address</dt>
                <dd className="mt-1 text-neutral-600">
                  Level 3, Suite 303, BMA House, 135 Macquarie Street, Sydney CBD NSW 2000
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-neutral-700">Phone</dt>
                <dd className="mt-1 text-neutral-600">
                  <a className="hover:text-teal-400" href="tel:0292471762">
                    02 9247 1762
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-neutral-700">Email</dt>
                <dd className="mt-1 text-neutral-600">
                  <a className="hover:text-teal-400" href="mailto:contact@my-ent.com.au">
                    contact@my-ent.com.au
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-neutral-700">Opening hours</dt>
                <dd className="mt-2">
                  <ul className="space-y-1 text-neutral-600">
                    {openingHours.map((hours) => (
                      <li key={hours}>{hours}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <a className="myent-btn-primary" href="tel:0292471762">
                Call the rooms
              </a>
              <a className="myent-btn-outline" href="mailto:contact@my-ent.com.au">
                Email reception
              </a>
            </div>
          </article>

          <article className="myent-card">
            <p className="myent-eyebrow">Urgent concerns</p>
            <h2 className="mt-3 text-3xl leading-tight">Need urgent medical care?</h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-600">
              If you have urgent concerns, call 000 immediately or attend your nearest emergency
              department. Do not wait for a callback from the rooms for emergency symptoms.
            </p>
            <p className="mt-4 text-base leading-relaxed text-neutral-600">
              For non-urgent booking and administrative enquiries, call reception during opening
              hours on 02 9247 1762.
            </p>
            <div className="mt-8">
              <Link className="myent-btn-outline" href="/contact/finding-the-right-contact">
                Need another location?
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="myent-section border-t border-neutral-200 bg-white">
        <div className="myent-container">
          <div className="section-header mb-10 max-w-3xl">
            <p className="myent-eyebrow">Map</p>
            <h2 className="mt-3 text-3xl leading-tight">Find us at 135 Macquarie Street</h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-500">
              My-ENT is located in BMA House, Level 3, Suite 303, on Macquarie Street in Sydney CBD.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white">
            <iframe
              title="My-ENT at 135 Macquarie Street Sydney"
              src="https://www.google.com/maps?q=135+Macquarie+Street+Sydney+NSW+2000&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[420px] w-full"
            />
          </div>

          <p className="mt-6 text-sm leading-relaxed text-neutral-500">
            Looking for another consulting location? Use our full contact directory.
            <Link className="ml-1 text-teal-400 hover:text-teal-300" href="/contact/finding-the-right-contact">
              Go to finding the right contact
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  )
}
