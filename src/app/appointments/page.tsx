import type { Metadata } from 'next'

import { AppointmentRequestClient } from './AppointmentRequestClient'

export const metadata: Metadata = {
  title: 'Request an Appointment Sydney | ENT Intake Form | My-ENT',
  description:
    'Submit a structured My-ENT appointment request with referral, clinical details, and preferences so reception can confirm your booking pathway quickly.',
}

export default function AppointmentsPage() {
  return <AppointmentRequestClient />
}
