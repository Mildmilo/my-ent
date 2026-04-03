import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Fees and Medicare | My-ENT',
  description:
    'Understand specialist consultation fees, Medicare rebate requirements, and how referrals work before your My-ENT appointment.',
}

interface FeePoint {
  title: string
  detail: string
}

interface RebateStep {
  title: string
  detail: string
}

interface FeeQuestion {
  question: string
  answer: string
}

const feePoints: FeePoint[] = [
  {
    title: 'My-ENT is a private specialist practice',
    detail:
      'Consultations are private specialist consultations. My-ENT does not offer bulk billing. Please call the rooms for an individual quote based on your appointment type.',
  },
  {
    title: 'Medicare rebates depend on referral status',
    detail:
      'A valid GP referral is generally needed for a Medicare specialist consultation rebate to apply. Without a current referral, a rebate may not be available for that visit.',
  },
  {
    title: 'Private health and consultation fees are separate',
    detail:
      'Private health insurance does not usually cover outpatient specialist consultation fees. If surgery is recommended, private health may contribute to hospital and procedural costs depending on your cover.',
  },
]

const rebateSteps: RebateStep[] = [
  {
    title: '1. Obtain a GP referral before your appointment',
    detail:
      'Ask your GP to issue a current referral addressed to My-ENT. Bring a copy to your visit, or upload it when you submit your appointment request.',
  },
  {
    title: '2. Confirm your referral is still valid',
    detail:
      'Referral validity can vary depending on the type of referral and your care pathway. If you are unsure whether your referral is current, call the rooms before your appointment.',
  },
  {
    title: '3. Keep your details aligned across documents',
    detail:
      'Please ensure the name and date of birth on your referral match your Medicare details and appointment request to avoid delays with processing.',
  },
  {
    title: '4. Bring your Medicare card and referral on the day',
    detail:
      'Reception can process your consultation details more efficiently when your referral and Medicare card are available at check-in.',
  },
]

const feeQuestions: FeeQuestion[] = [
  {
    question: 'Can I attend without a referral?',
    answer:
      'You can contact the rooms to discuss your circumstances, but a valid GP referral is usually needed for a Medicare specialist rebate pathway.',
  },
  {
    question: 'Why are fee amounts not listed online?',
    answer:
      'Consultation type, complexity, and pathway requirements vary between patients. Please call reception so the team can provide a quote that matches your situation.',
  },
  {
    question: 'Does private health insurance cover my consultation?',
    answer:
      'Private health insurance generally does not cover specialist consultation fees in outpatient rooms. It may contribute to procedure-related hospital costs if surgery is later required and your policy includes appropriate cover.',
  },
  {
    question: 'What if my referral has expired?',
    answer:
      'Please contact your GP for an updated referral and let reception know. This helps avoid delays and clarifies whether a rebate can be processed for your visit.',
  },
]

export default function FeesAndMedicarePage() {
  return (
    <>
      <section className="myent-section bg-white">
        <div className="myent-container">
          <p className="myent-eyebrow">Appointments</p>
          <div className="mt-4 max-w-3xl space-y-6">
            <h1 className="text-4xl leading-tight tracking-tight lg:text-5xl">
              Fees and Medicare at My-ENT
            </h1>
            <p className="text-lg leading-relaxed text-neutral-500">
              This page explains how specialist consultation fees and Medicare rebates work at
              My-ENT so you can prepare before your appointment and avoid avoidable follow-up calls.
            </p>
          </div>
        </div>
      </section>

      <section className="myent-section border-t border-neutral-200">
        <div className="myent-container grid grid-cols-1 gap-6 lg:grid-cols-3">
          {feePoints.map((point) => (
            <article key={point.title} className="myent-card h-full">
              <h2 className="text-2xl leading-snug">{point.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-500">{point.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="myent-section border-t border-neutral-200 bg-neutral-100">
        <div className="myent-container grid grid-cols-1 gap-12 lg:grid-cols-[1fr_380px]">
          <div>
            <div className="section-header mb-10">
              <p className="myent-eyebrow">Medicare Pathway</p>
              <h2 className="mt-3 text-3xl leading-tight">How to prepare for a rebate-eligible visit</h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-500">
                Following these steps helps reception process your appointment smoothly and reduces
                delays in confirming your consultation pathway.
              </p>
            </div>

            <div className="space-y-6">
              {rebateSteps.map((step) => (
                <article key={step.title} className="rounded-xl border border-neutral-200 bg-white p-6">
                  <h3 className="text-2xl leading-snug">{step.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-neutral-500">{step.detail}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="myent-card h-fit">
            <p className="myent-eyebrow">Need a specific quote?</p>
            <h2 className="mt-3 text-3xl leading-tight">Call reception for tailored fee guidance</h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-500">
              For the most accurate quote, have your referral status, concern type, and preferred
              appointment location ready when you call.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a className="myent-btn-primary w-fit" href="tel:0292471762">
                Call 02 9247 1762
              </a>
              <Link className="myent-btn-outline w-fit" href="/">
                Return to homepage
              </Link>
              <Link className="myent-btn-outline w-fit" href="/appointments/your-first-visit">
                First-visit checklist
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="myent-section border-t border-neutral-200 bg-white">
        <div className="myent-container">
          <div className="section-header mb-10 max-w-3xl">
            <p className="myent-eyebrow">Common Questions</p>
            <h2 className="mt-3 text-3xl leading-tight">Fees and referral FAQs</h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-500">
              These answers cover the most common pre-appointment questions reception receives.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {feeQuestions.map((item) => (
              <article key={item.question} className="myent-card h-full">
                <h3 className="text-2xl leading-snug">{item.question}</h3>
                <p className="mt-4 text-base leading-relaxed text-neutral-500">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="myent-section border-t border-neutral-200 bg-neutral-100">
        <div className="myent-container max-w-3xl">
          <p className="rounded-xl border border-teal-100 bg-teal-50 p-6 text-base leading-relaxed text-neutral-700">
            If you are a public patient and have any concerns, please contact the relevant hospital
            directly. Waiting times and appointment scheduling are managed by the hospital and are
            outside the control of our private rooms.
          </p>
        </div>
      </section>
    </>
  )
}
