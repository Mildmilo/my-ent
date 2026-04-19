import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Your First Visit',
  description:
    'Prepare for your first My-ENT appointment with referral, documentation, arrival, and follow-up guidance for patients and families.',
  alternates: {
    canonical: '/appointments/your-first-visit',
  },
}

interface VisitChecklistItem {
  title: string
  detail: string
}

interface VisitQuestion {
  question: string
  answer: string
}

interface DayOfVisitStep {
  title: string
  detail: string
}

const beforeYouCome: VisitChecklistItem[] = [
  {
    title: 'Bring your GP referral',
    detail:
      'Please bring a current GP referral and upload it ahead of time where possible. This helps reception confirm your pathway and reduces check-in delays.',
  },
  {
    title: 'Bring your Medicare card and photo identification',
    detail:
      'Reception uses these details to verify your record accurately before your consultation.',
  },
  {
    title: 'Bring any relevant imaging and reports',
    detail:
      'If you have had CT, MRI, hearing tests, sleep studies, or other specialist reports, bring copies or upload them before your visit.',
  },
  {
    title: 'List your current medications and allergies',
    detail:
      'A written list supports a safer, more complete review during your consultation.',
  },
  {
    title: 'Bring support person details if someone is attending with you',
    detail:
      'For paediatric patients, a parent or guardian should attend. For adult patients, you may bring a support person if helpful.',
  },
]

const dayOfVisit: DayOfVisitStep[] = [
  {
    title: 'Arrive with enough time for check-in',
    detail:
      'Arriving a little early allows reception to verify your documents and update your details before the consultation begins.',
  },
  {
    title: 'Share your main concerns clearly',
    detail:
      'At the start of the consult, explain the key symptoms or questions you want addressed so the appointment can focus on what matters most to you.',
  },
  {
    title: 'Expect examination and discussion of next steps',
    detail:
      'Your clinician will assess your concern and explain appropriate management options, investigations, or follow-up plans relevant to your case.',
  },
  {
    title: 'Confirm your plan before leaving',
    detail:
      'Before you leave, make sure you understand any referrals, tests, follow-up timing, and who to contact if you have practical booking questions.',
  },
]

const visitQuestions: VisitQuestion[] = [
  {
    question: 'Do I need a referral for my first appointment?',
    answer:
      'A valid GP referral is generally needed for Medicare specialist rebate eligibility. If you are unsure about your referral status, call reception before your visit.',
  },
  {
    question: 'Can I send my referral and imaging before the appointment?',
    answer:
      'Yes. Uploading documents before your visit helps reception prepare your file and may reduce phone follow-up for missing information.',
  },
  {
    question: 'How long will my first appointment take?',
    answer:
      'Appointment timing varies depending on your concern and whether prior imaging or reports need review. Reception can guide you on practical timing when confirming your booking.',
  },
  {
    question: 'Can I attend if I am booking for a child?',
    answer:
      'Yes. A parent or legal guardian should attend paediatric appointments and bring relevant referral and medical information.',
  },
  {
    question: 'What if I need to change my appointment?',
    answer:
      'Please call the rooms as early as possible so reception can update your booking and offer alternative times where available.',
  },
  {
    question: 'Who should I contact for urgent same-day concerns?',
    answer:
      'For urgent same-day concerns, call the rooms immediately. If it is after hours and your concern is urgent, attend your nearest emergency department.',
  },
]

export default function YourFirstVisitPage() {
  return (
    <>
      <section className="myent-section bg-white">
        <div className="myent-container">
          <p className="myent-eyebrow">Appointments</p>
          <div className="mt-4 max-w-3xl space-y-6">
            <h1 className="text-4xl leading-tight tracking-tight lg:text-5xl">
              Your first visit at My-ENT
            </h1>
            <p className="text-lg leading-relaxed text-neutral-500">
              This guide answers the most common first-appointment questions so you can arrive
              prepared and avoid unnecessary calls to reception.
            </p>
          </div>
        </div>
      </section>

      <section className="myent-section border-t border-neutral-200 bg-neutral-100">
        <div className="myent-container grid grid-cols-1 gap-12 lg:grid-cols-[1fr_380px]">
          <div>
            <div className="section-header mb-10">
              <p className="myent-eyebrow">Before You Attend</p>
              <h2 className="mt-3 text-3xl leading-tight">First-visit checklist</h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-500">
                Bringing complete information helps your clinician and reception team action your
                care plan without avoidable delays.
              </p>
            </div>

            <div className="space-y-6">
              {beforeYouCome.map((item) => (
                <article key={item.title} className="rounded-xl border border-neutral-200 bg-white p-6">
                  <h3 className="text-2xl leading-snug">{item.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-neutral-500">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="flex h-fit flex-col gap-6">
            <article className="myent-card border border-teal-200 bg-teal-50/60">
              <p className="myent-eyebrow">Pre-appointment</p>
              <h2 className="mt-3 text-3xl leading-tight">Nose or sinus concern?</h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-500">
                A pre-appointment questionnaire will be sent by email after your appointment is
                confirmed.
              </p>
            </article>

            <article className="myent-card">
              <p className="myent-eyebrow">Need help now?</p>
              <h2 className="mt-3 text-3xl leading-tight">Reception support and urgent pathway</h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-500">
                For practical booking questions, call reception during business hours. For urgent
                same-day concerns, call immediately. After hours, attend your nearest emergency
                department for urgent care.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <a className="myent-btn-primary w-fit" href="tel:0292471762">
                  Call 02 9247 1762
                </a>
                <Link className="myent-btn-outline w-fit" href="/appointments/fees-and-medicare">
                  Fees and Medicare
                </Link>
                <Link className="myent-btn-outline w-fit" href="/appointments/fees-and-medicare">
                  Fees and Medicare
                </Link>
              </div>
            </article>
          </aside>
        </div>
      </section>

      <section className="myent-section border-t border-neutral-200 bg-white">
        <div className="myent-container">
          <div className="section-header mb-10 max-w-3xl">
            <p className="myent-eyebrow">On The Day</p>
            <h2 className="mt-3 text-3xl leading-tight">What to expect at your appointment</h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-500">
              Knowing the day-of flow can reduce stress and keep your visit focused on your care.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {dayOfVisit.map((step) => (
              <article key={step.title} className="myent-card h-full">
                <h3 className="text-2xl leading-snug">{step.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-neutral-500">{step.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="myent-section border-t border-neutral-200 bg-neutral-100">
        <div className="myent-container">
          <div className="section-header mb-10 max-w-3xl">
            <p className="myent-eyebrow">Common Questions</p>
            <h2 className="mt-3 text-3xl leading-tight">First-visit FAQs</h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-500">
              These answers cover routine questions that patients often ask before attending.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {visitQuestions.map((item) => (
              <article key={item.question} className="myent-card h-full">
                <h3 className="text-2xl leading-snug">{item.question}</h3>
                <p className="mt-4 text-base leading-relaxed text-neutral-500">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
