import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Before Your Procedure | My-ENT Sydney',
  description:
    'General pre-operative preparation for ENT procedures at My-ENT, including fasting, medications, transport, and home recovery planning.',
}

interface PreparationCard {
  title: string
  points: string[]
}

const preparationCards: PreparationCard[] = [
  {
    title: 'Nil by mouth from midnight',
    points: [
      'Unless your surgeon or anaesthetist gives you different written instructions, do not eat or drink after midnight before your procedure day.',
      'This includes food, milk drinks, and chewing gum. Follow your procedure-specific hospital instructions if they differ from general guidance.',
    ],
  },
  {
    title: 'Medication management, including blood thinners',
    points: [
      'Tell your surgeon about all medications, vitamins, and supplements as early as possible before surgery.',
      'Blood thinners and some anti-inflammatory medications may need adjustment before surgery. Only change medications on advice from your treating doctors.',
      'If you are unsure whether to continue a medicine, call the rooms on 02 9247 1762 before your procedure date.',
    ],
  },
  {
    title: 'What to bring on the day',
    points: [
      'Bring your Medicare card, photo identification, and private health insurance details (if relevant).',
      'Bring a list of current medications and allergies.',
      'Bring any requested forms, imaging, or reports related to your procedure.',
    ],
  },
  {
    title: 'Arrange transport home',
    points: [
      'If you are having a general anaesthetic or sedation, arrange a responsible adult to take you home.',
      'Do not drive yourself home after sedation or general anaesthetic unless your medical team specifically advises otherwise.',
    ],
  },
  {
    title: 'Arrange support for recovery',
    points: [
      'Plan quiet recovery time, meals, and practical support for the first few days after surgery.',
      'Organise time away from work, school, sport, or heavy physical activity based on your procedure-specific advice.',
      'If you care for young children or other dependants, arrange help at home in advance.',
    ],
  },
]

export default function BeforeYourProcedurePage() {
  return (
    <>
      <section className="myent-section bg-white">
        <div className="myent-container">
          <p className="myent-eyebrow">Patient information</p>
          <div className="mt-4 max-w-3xl space-y-6">
            <h1 className="text-4xl leading-tight tracking-tight lg:text-5xl">Before your procedure</h1>
            <p className="text-lg leading-relaxed text-neutral-500">
              This page covers general preparation before ENT surgery. Your surgeon and hospital
              instructions always take priority for your specific procedure.
            </p>
          </div>
        </div>
      </section>

      <section className="myent-section border-t border-neutral-200 bg-neutral-100">
        <div className="myent-container">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {preparationCards.map((card) => (
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
            <p className="myent-eyebrow">Need to confirm details?</p>
            <h2 className="mt-3 text-3xl leading-tight">Check before your surgery date</h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-600">
              If you are uncertain about fasting times, medications, or admission instructions,
              call the rooms on 02 9247 1762 during business hours so your plan is clear before the
              day of surgery.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="myent-btn-primary" href="tel:0292471762">
                Call 02 9247 1762
              </a>
              <Link className="myent-btn-outline" href="/patient-info/after-your-procedure">
                Read after-procedure guidance
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}
