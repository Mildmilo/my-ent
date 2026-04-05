import type { Metadata } from 'next'
import Link from 'next/link'

import { AppointmentRequestClient } from './AppointmentRequestClient'

export const metadata: Metadata = {
  title: 'Request an Appointment Sydney | ENT Booking Request Form | My-ENT',
  description:
    'Submit a structured My-ENT appointment request with referral, clinical details, and preferences so reception can confirm your booking pathway quickly.',
}

export default function AppointmentsPage() {
  return (
    <>
      <section className="myent-section bg-white">
        <div className="myent-container">
          <div className="max-w-4xl space-y-6">
            <p className="myent-eyebrow">Appointment booking request</p>
            <p className="text-lg leading-relaxed text-neutral-600">
              This page is for patients booking a consultation at My-ENT, 135 Macquarie Street, Sydney. Appointments at this location require a current GP referral. If your referral is to a different location or you are a public patient, please use our contact directory to find the right details.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link className="myent-btn-primary" href="#booking-request-form">
                Continue to booking request
              </Link>
              <Link className="myent-btn-outline" href="/contact/finding-the-right-contact">
                Contact directory
              </Link>
            </div>
          </div>
        </div>
      </section>

      <AppointmentRequestClient />
    </>
  )
}
