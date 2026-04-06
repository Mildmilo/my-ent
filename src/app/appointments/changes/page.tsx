import type { Metadata } from 'next'

import { ChangeAppointmentRequestForm } from './ChangeAppointmentRequestForm'

export const metadata: Metadata = {
  title: 'Change or Cancel an Appointment | My-ENT',
  description:
    'Submit an appointment change or cancellation request to My-ENT reception and receive confirmation within one business day.',
}

export default function AppointmentChangesPage() {
  return (
    <section className="myent-section bg-white">
      <div className="myent-container max-w-3xl">
        <p className="myent-eyebrow">Appointments</p>
        <div className="mt-4 space-y-6">
          <h1 className="font-serif text-3xl leading-tight text-neutral-800">
            Change or cancel an appointment
          </h1>
          <p className="text-base leading-relaxed text-neutral-600">
            To change or cancel your appointment, please complete the form below. Reception will
            confirm the change by your preferred contact method within one business day. For urgent
            changes please call us directly on 02 9247 1762.
          </p>

          <ChangeAppointmentRequestForm />
        </div>
      </div>
    </section>
  )
}
