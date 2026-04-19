import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'GP Referral Information',
  description:
    'Understand referral requirements, referral submission options, and what to include so My-ENT reception can process your booking pathway efficiently.',
  alternates: {
    canonical: '/appointments/referral-information',
  },
}

export default function ReferralInformationPage() {
  return (
    <>
      <section className="myent-section bg-white">
        <div className="myent-container max-w-3xl">
          <p className="myent-eyebrow">Appointments</p>
          <div className="mt-4 space-y-6">
            <h1 className="font-serif text-3xl leading-tight text-neutral-800">GP referral information</h1>
          </div>
        </div>
      </section>

      <section className="myent-section border-t border-neutral-200 bg-neutral-100">
        <div className="myent-container max-w-3xl space-y-6">
          <h2 className="text-3xl leading-tight">Do I need a referral?</h2>
          <p className="text-base leading-relaxed text-neutral-600">
            A GP referral is required for a Medicare rebate to apply to your specialist
            consultation. The referral is valid for three months from the date of issue. If you
            attend without a referral, the full consultation fee applies and no Medicare rebate is
            available for that visit.
          </p>
        </div>
      </section>

      <section className="myent-section border-t border-neutral-200 bg-white">
        <div className="myent-container max-w-3xl space-y-6">
          <h2 className="text-3xl leading-tight">How to send your referral</h2>
          <p className="text-base leading-relaxed text-neutral-600">
            You can send your referral by email to contact@my-ent.com.au, by fax to 02 9247 2141,
            or by uploading it through the appointment request form.
          </p>
        </div>
      </section>

      <section className="myent-section border-t border-neutral-200 bg-neutral-100">
        <div className="myent-container max-w-3xl space-y-6">
          <h2 className="text-3xl leading-tight">What your referral should include</h2>
          <p className="text-base leading-relaxed text-neutral-600">
            Your referral should include the patient&apos;s name and date of birth, the referring GP&apos;s
            details, the reason for referral, and any relevant history or investigation results.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link className="myent-btn-primary" href="/appointments">
              Go to appointments
            </Link>
            <Link className="myent-btn-outline" href="/patient-info/faq">
              Read FAQs
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
