import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Patient Info',
  description:
    'Patient information hub for pre-operative preparation, post-operative care, FAQs, and resources at My-ENT.',
  alternates: {
    canonical: '/patient-info',
  },
}

interface PatientInfoLink {
  title: string
  description: string
  href: '/patient-info/before-your-procedure' | '/patient-info/after-your-procedure' | '/patient-info/faq' | '/patient-info/resources-and-downloads'
}

const patientInfoLinks: PatientInfoLink[] = [
  {
    title: 'Before Your Procedure',
    description:
      'General pre-operative preparation including fasting, medications, transport, and planning for recovery at home.',
    href: '/patient-info/before-your-procedure',
  },
  {
    title: 'After Your Procedure',
    description:
      'General post-operative guidance, expected recovery symptoms, and clear escalation pathways for concerns.',
    href: '/patient-info/after-your-procedure',
  },
  {
    title: 'FAQ',
    description:
      'Answers to common questions about referrals, appointments, fees, procedures, and recovery.',
    href: '/patient-info/faq',
  },
  {
    title: 'Resources and Downloads',
    description:
      'Downloadable patient information and referral support materials as they become available.',
    href: '/patient-info/resources-and-downloads',
  },
]

export default function PatientInfoIndexPage() {
  return (
    <>
      <section className="myent-section bg-white">
        <div className="myent-container">
          <p className="myent-eyebrow">Patient information</p>
          <div className="mt-4 max-w-3xl space-y-6">
            <h1 className="text-4xl leading-tight tracking-tight lg:text-5xl">Patient Info</h1>
            <p className="text-lg leading-relaxed text-neutral-500">
              Use this section to prepare for your procedure, understand recovery expectations, and
              find practical information that helps reduce avoidable calls to reception.
            </p>
          </div>
        </div>
      </section>

      <section className="myent-section border-t border-neutral-200 bg-neutral-100">
        <div className="myent-container">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {patientInfoLinks.map((item) => (
              <article key={item.href} className="myent-card h-full">
                <h2 className="text-2xl leading-tight text-neutral-800">{item.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-neutral-500">{item.description}</p>
                <div className="mt-6">
                  <Link className="myent-btn-outline" href={item.href}>
                    Open section
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
