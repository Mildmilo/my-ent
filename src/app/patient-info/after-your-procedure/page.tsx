import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'After Your Procedure',
  description:
    'General post-operative guidance after ENT surgery at My-ENT, including normal recovery expectations and when to seek urgent care.',
  alternates: {
    canonical: '/patient-info/after-your-procedure',
  },
}

interface GuidanceCard {
  title: string
  points: string[]
}

const recoveryGuidance: GuidanceCard[] = [
  {
    title: 'What is usually normal after ENT surgery',
    points: [
      'Mild to moderate pain, fatigue, and swelling are common in the early recovery period.',
      'Some blood-stained discharge can occur after certain procedures and should settle over time.',
      'Appetite, sleep, and energy can be reduced for several days while healing progresses.',
    ],
  },
  {
    title: 'When to call the rooms on 02 9247 1762',
    points: [
      'Call during business hours if pain is worsening rather than gradually improving.',
      'Call if you are unsure whether your symptoms are expected for your procedure.',
      'Call if medications are causing side effects or you need help with your follow-up plan.',
    ],
  },
  {
    title: 'When to call 000 or attend emergency',
    points: [
      'Call 000 immediately for breathing difficulty, chest pain, collapse, or severe drowsiness.',
      'Attend your nearest emergency department for heavy bleeding, repeated vomiting, dehydration, or sudden severe deterioration.',
      'Do not wait for routine callback pathways if symptoms are urgent or rapidly worsening.',
    ],
  },
]

export default function AfterYourProcedurePage() {
  return (
    <>
      <section className="myent-section bg-white">
        <div className="myent-container">
          <p className="myent-eyebrow">Patient information</p>
          <div className="mt-4 max-w-3xl space-y-6">
            <h1 className="text-4xl leading-tight tracking-tight lg:text-5xl">After your procedure</h1>
            <p className="text-lg leading-relaxed text-neutral-500">
              This page provides general post-operative guidance after ENT surgery. Always follow
              your specific discharge instructions, as your procedure and medical history may require
              tailored advice.
            </p>
          </div>
        </div>
      </section>

      <section className="myent-section border-t border-neutral-200 bg-neutral-100">
        <div className="myent-container">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {recoveryGuidance.map((card) => (
              <article key={card.title} className="myent-card h-full">
                <h2 className="text-2xl leading-tight">{card.title}</h2>
                <ul className="mt-4 space-y-3 text-base leading-relaxed text-neutral-500">
                  {card.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="myent-section border-t border-neutral-200 bg-white">
        <div className="myent-container">
          <article className="myent-card max-w-3xl border-teal-200 bg-teal-50/60">
            <p className="myent-eyebrow">Urgent warning</p>
            <h2 className="mt-3 text-3xl leading-tight">Emergency symptoms need emergency care</h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-600">
              For urgent concerns after surgery, call 000 immediately or attend your nearest
              emergency department. For non-urgent recovery questions, call My-ENT on 02 9247 1762
              during business hours.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="myent-btn-primary" href="tel:0292471762">
                Call 02 9247 1762
              </a>
              <Link className="myent-btn-outline" href="/contact">
                View contact details
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}
