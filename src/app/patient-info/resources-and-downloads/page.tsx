import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Resources and Downloads | My-ENT Sydney',
  description:
    'Downloadable patient and GP support resources from My-ENT, including pre-operative instructions and referral guidance.',
}

export default function ResourcesAndDownloadsPage() {
  return (
    <>
      <section className="myent-section bg-white">
        <div className="myent-container">
          <p className="myent-eyebrow">Patient information</p>
          <div className="mt-4 max-w-3xl space-y-6">
            <h1 className="text-4xl leading-tight tracking-tight lg:text-5xl">Resources and downloads</h1>
            <p className="text-lg leading-relaxed text-neutral-500">
              Downloadable resources, including pre-operative instruction sheets and GP referral
              information, will be available here shortly.
            </p>
          </div>
        </div>
      </section>

      <section className="myent-section border-t border-neutral-200 bg-neutral-100">
        <div className="myent-container">
          <article className="myent-card max-w-3xl">
            <p className="myent-eyebrow">In progress</p>
            <h2 className="mt-3 text-3xl leading-tight">Preparing downloadable documents</h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-600">
              We are preparing clear, printable resources for patients, families, and referring GPs.
              Please check back soon or call the rooms on 02 9247 1762 if you need assistance now.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="myent-btn-primary" href="tel:0292471762">
                Call 02 9247 1762
              </a>
              <Link className="myent-btn-outline" href="/patient-info">
                Back to patient info
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}
