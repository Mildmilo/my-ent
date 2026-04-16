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
      <section className="myent-section border-b border-neutral-200 bg-white">
        <div className="myent-container">
          <p className="myent-eyebrow">Appointments</p>
          <h1 className="mt-4 text-4xl lg:text-5xl">You have come to the right place.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">
            Complete the form below to request a consultation at My-ENT, 135 Macquarie Street, Sydney CBD. Reception will confirm your booking pathway — no follow-up calls for missing details.
          </p>
          <p className="mt-3 text-sm text-neutral-400">
            Booking for a different location?{' '}
            <Link className="text-teal-500 underline hover:text-teal-600" href="/contact/finding-the-right-contact">
              Find the right contact.
            </Link>
          </p>
        </div>
      </section>

      <AppointmentRequestClient />
    </>
  )
}
