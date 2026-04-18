import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Getting to My-ENT | Parking & Transport | 135 Macquarie Street Sydney',
  description:
    'Directions, parking and public transport options for My-ENT at 135 Macquarie Street, Sydney CBD. Train, metro, light rail, bus and nearby car parks.',
}

export default function GettingHerePage() {
  return (
    <>
      {/* ── Header ── */}
      <section className="myent-section border-b border-neutral-200 bg-white">
        <div className="myent-container">
          <p className="myent-eyebrow">Getting here</p>
          <h1 className="mt-4 text-4xl lg:text-5xl">Finding My-ENT</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">
            My-ENT is located at Suite 303, Level 3, BMA House, 135 Macquarie Street, Sydney CBD NSW 2000.
            Public transport is the easiest and most reliable way to reach us — Martin Place Metro station
            is a 2-minute walk from our front door.
          </p>
        </div>
      </section>

      {/* ── Transport options ── */}
      <section className="myent-section">
        <div className="myent-container">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

            {/* Public transport */}
            <div className="space-y-6">
              <div className="myent-card">
                <p className="myent-eyebrow">Recommended</p>
                <h2 className="mt-3 text-3xl">Public transport</h2>
                <p className="mt-4 text-sm leading-relaxed text-neutral-500">
                  Public transport is significantly easier and cheaper than driving to Macquarie Street.
                  Street parking is extremely limited and unreliable for medical appointments.
                </p>

                <div className="mt-6 space-y-5">

                  {/* Metro */}
                  <div className="border-t border-neutral-100 pt-4">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-500 text-xs font-semibold text-white">M</span>
                      <div>
                        <p className="font-medium text-neutral-800">Martin Place Metro — 2 min walk</p>
                        <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                          The closest and most convenient option. Exit on the Macquarie Street side —
                          BMA House is immediately in front of you. The M1 Metro line runs from
                          Tallawong through Chatswood, Barangaroo, and into the CBD.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Train */}
                  <div className="border-t border-neutral-100 pt-4">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">T</span>
                      <div>
                        <p className="font-medium text-neutral-800">St James Station — 5 min walk</p>
                        <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                          City Circle line. Exit onto Elizabeth Street and walk north to Macquarie Street.
                          All suburban train lines connect through the City Circle.
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                          <span className="font-medium">Martin Place Station</span> — also 5 min walk,
                          served by T1, T4, and T9 lines.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Light Rail */}
                  <div className="border-t border-neutral-100 pt-4">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-600 text-xs font-semibold text-white">L</span>
                      <div>
                        <p className="font-medium text-neutral-800">Bridge Street Light Rail — 4 min walk</p>
                        <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                          L2 Randwick and L3 Kingsford lines run along George Street. Exit at Bridge Street
                          and walk east through the CBD to Macquarie Street. Convenient from Randwick,
                          UNSW, Central, and Circular Quay.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bus */}
                  <div className="border-t border-neutral-100 pt-4">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500 text-xs font-semibold text-white">B</span>
                      <div>
                        <p className="font-medium text-neutral-800">Bus — 2 min walk</p>
                        <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                          Multiple bus routes stop on Macquarie Street and Phillip Street, directly outside
                          BMA House. Use the Transport NSW Trip Planner or Opal Travel app to find
                          the best route from your suburb.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Ferry */}
                  <div className="border-t border-neutral-100 pt-4">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-500 text-xs font-semibold text-white">F</span>
                      <div>
                        <p className="font-medium text-neutral-800">Ferry via Circular Quay — 12 min walk</p>
                        <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                          All ferry services arrive at Circular Quay. Walk south along Macquarie Street —
                          BMA House is approximately 12 minutes on foot. A good option for patients
                          travelling from the North Shore, Manly, or Parramatta River suburbs.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-neutral-100 pt-4">
                    <p className="text-sm text-neutral-500">
                      Plan your journey:{' '}
                      <a
                        href="https://transportnsw.info/trip"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-500 hover:text-teal-600"
                      >
                        transportnsw.info/trip
                      </a>
                      {' '}— enter 135 Macquarie Street as your destination.
                      Pay with Opal card or tap-and-go using any credit or debit card.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Parking + Driving */}
            <div className="space-y-6">
              <div className="myent-card">
                <p className="myent-eyebrow">By car</p>
                <h2 className="mt-3 text-3xl">Parking</h2>
                <p className="mt-4 text-sm leading-relaxed text-neutral-500">
                  Street parking on Macquarie Street is very limited and typically capped at 1–2 hours.
                  We strongly recommend using a nearby car park and allowing extra time.
                  Budget approximately $20–$35 for a standard appointment.
                </p>

                <div className="mt-6 space-y-5">

                  {/* Hudson House */}
                  <div className="rounded-lg border border-teal-100 bg-teal-50/50 p-4">
                    <p className="text-sm font-semibold text-teal-800">Closest — Wilson Parking Hudson House</p>
                    <p className="mt-1 text-sm text-teal-700">131 Macquarie Street — next door to BMA House</p>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                      The most convenient option. Enter from Macquarie Street. Open 7 days.
                      Prepay online via the Wilson Parking app for discounted rates.
                    </p>
                    <a
                      href="https://www.wilsonparking.com.au/parking-locations/new-south-wales/cbd-sydney-north/hudson-house-car-park/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-sm font-medium text-teal-600 hover:text-teal-700"
                    >
                      View rates and book online →
                    </a>
                  </div>

                  {/* Parkhouse */}
                  <div className="border-t border-neutral-100 pt-4">
                    <p className="font-medium text-neutral-800">Wilson Parking — Parkhouse</p>
                    <p className="text-sm text-neutral-500">187 Macquarie Street — 5 min walk south</p>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                      Enter from Macquarie Street. Monday–Friday 7am–7pm.
                      Height restriction 1.85m — not suitable for large SUVs or 4WDs.
                      Prepay online for best rates.
                    </p>
                    <a
                      href="https://www.wilsonparking.com.au/parking-locations/new-south-wales/cbd-sydney-north/parkhouse-car-park/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block text-sm font-medium text-teal-600 hover:text-teal-700"
                    >
                      View rates and book online →
                    </a>
                  </div>

                  {/* Opera House */}
                  <div className="border-t border-neutral-100 pt-4">
                    <p className="font-medium text-neutral-800">Wilson Parking — Sydney Opera House</p>
                    <p className="text-sm text-neutral-500">2A Macquarie Street — 10 min walk north</p>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                      Open 24 hours, 7 days including public holidays. 1,200 bays — most likely
                      to have availability during peak times. Disabled parking on Levels 1 and 6.
                      Rates from approximately $9 per hour, maximum $59 per day.
                    </p>
                    <a
                      href="https://www.wilsonparking.com.au/parking-locations/new-south-wales/sydney-cbd/sydney-opera-house-car-park-2A-macquarie-st-sydney/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block text-sm font-medium text-teal-600 hover:text-teal-700"
                    >
                      View rates and book online →
                    </a>
                  </div>

                  {/* Street parking note */}
                  <div className="border-t border-neutral-100 pt-4">
                    <p className="font-medium text-neutral-800">Street parking</p>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                      Metered parking on Macquarie Street is typically limited to 1–2 hours and
                      extremely competitive during business hours. Rates are approximately $4.40–$7.20
                      per hour. Do not rely on finding street parking for a medical appointment.
                    </p>
                  </div>

                  {/* Taxi/Rideshare */}
                  <div className="border-t border-neutral-100 pt-4">
                    <p className="font-medium text-neutral-800">Taxi and rideshare</p>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                      Taxis and Uber can drop off and pick up directly on Macquarie Street outside
                      BMA House. The nearest taxi rank is on Phillip Street, opposite the Sofitel Hotel.
                    </p>
                  </div>

                </div>
              </div>

              {/* Accessibility */}
              <div className="myent-card">
                <p className="myent-eyebrow">Accessibility</p>
                <h2 className="mt-3 text-2xl font-serif">Accessible access</h2>
                <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                  BMA House has lift access to all levels. Suite 303 is on Level 3.
                  Disabled parking is available at Wilson Parking Sydney Opera House
                  (Levels 1 and 6, RTA Mobility Parking Permit holders). Please call us
                  on{' '}
                  <a href="tel:0292471762" className="text-teal-500 hover:text-teal-600">
                    02 9247 1762
                  </a>{' '}
                  if you require any assistance with your visit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Map ── */}
      <section className="myent-section border-t border-neutral-200 bg-neutral-50">
        <div className="myent-container">
          <h2 className="text-2xl text-neutral-800">135 Macquarie Street, Sydney CBD</h2>
          <p className="mt-2 text-sm text-neutral-500">Suite 303, Level 3, BMA House</p>
          <div className="mt-6 overflow-hidden rounded-xl border border-neutral-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.5!2d151.2134!3d-33.8688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae3f5c8f3b9d%3A0x1!2s135+Macquarie+St%2C+Sydney+NSW+2000!5e0!3m2!1sen!2sau!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="My-ENT location — 135 Macquarie Street Sydney"
            />
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="https://maps.google.com/?q=135+Macquarie+Street+Sydney+NSW+2000"
              target="_blank"
              rel="noopener noreferrer"
              className="myent-btn-primary"
            >
              Open in Google Maps
            </a>
            <Link href="/contact" className="myent-btn-outline">
              Contact directory
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
