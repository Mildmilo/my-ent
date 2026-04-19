import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sinus Assessment Questionnaire | My-ENT Sydney',
  description:
    'Information about the My-ENT sinus assessment questionnaire — what it covers, when you will receive it, and how it helps your surgeon prepare for your consultation.',
}

export default function SinusAssessmentInfoPage() {
  return (
    <>
      <section className="myent-section bg-white">
        <div className="myent-container">
          <p className="myent-eyebrow">Appointments</p>
          <div className="mt-4 max-w-3xl space-y-6">
            <h1 className="text-4xl leading-tight tracking-tight lg:text-5xl">
              Sinus Assessment Questionnaire
            </h1>
            <p className="text-lg leading-relaxed text-neutral-500">
              If you have been booked for a sinus-related consultation at My-ENT, you will receive a
              questionnaire by email shortly after your appointment is confirmed. It takes about ten
              minutes to complete and asks about your symptoms, their severity, and how they affect
              your daily life.
            </p>
          </div>
        </div>
      </section>

      <section className="myent-section border-t border-neutral-200 bg-neutral-100">
        <div className="myent-container grid grid-cols-1 gap-8 lg:grid-cols-2">
          <article className="myent-card">
            <p className="myent-eyebrow">About</p>
            <h2 className="mt-3 text-3xl leading-tight">Why we use a questionnaire</h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-500">
              Sinus symptoms are difficult to describe in a short consultation. The questionnaire —
              built around the validated SNOT-22 instrument used internationally in rhinology — gives
              your surgeon a complete, structured picture of your symptoms before you arrive. This
              means less time in your appointment gathering history and more time discussing what to
              do about it.
            </p>
          </article>

          <article className="myent-card">
            <p className="myent-eyebrow">Timing</p>
            <h2 className="mt-3 text-3xl leading-tight">When you will receive it</h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-500">
              Once your appointment is confirmed, our team will send you a link by email. Please
              complete it before your consultation — ideally at least 24 hours beforehand — so the
              information is available to your surgeon.
            </p>
          </article>
        </div>
      </section>

      <section className="myent-section border-t border-neutral-200 bg-white">
        <div className="myent-container grid grid-cols-1 gap-8 lg:grid-cols-2">
          <article className="myent-card">
            <p className="myent-eyebrow">Help</p>
            <h2 className="mt-3 text-3xl leading-tight">If you have not received it</h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-500">
              Check your spam folder first. If it is not there, please contact reception on{' '}
              <a className="text-teal-400 hover:text-teal-300" href="tel:0292471762">
                02 9247 1762
              </a>{' '}
              or email{' '}
              <a className="text-teal-400 hover:text-teal-300" href="mailto:contact@my-ent.com.au">
                contact@my-ent.com.au
              </a>
              .
            </p>
          </article>

          <article className="myent-card">
            <p className="myent-eyebrow">Not yet booked?</p>
            <h2 className="mt-3 text-3xl leading-tight">Have not booked yet?</h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-500">
              If you have not yet requested an appointment, you can do so on the Appointments page.
              The questionnaire will follow once your booking is confirmed.
            </p>
            <div className="mt-6">
              <Link className="myent-btn-primary" href="/appointments">
                Request an appointment
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}
