import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Patient FAQ | My-ENT Sydney',
  description:
    'Answers to common patient questions about appointments, referrals, fees, and what to expect before and after your ENT procedure at My-ENT.',
}

interface FaqItem {
  question: string
  answer: string
}

interface FaqGroup {
  heading: string
  items: FaqItem[]
}

const faqGroups: FaqGroup[] = [
  {
    heading: 'Appointments and referrals',
    items: [
      {
        question: 'Do I need a referral to see a My-ENT surgeon?',
        answer:
          'Yes. A valid GP referral is required for all new specialist appointments at My-ENT. Your GP can address the referral to My-ENT or to a specific surgeon. Please bring a copy to your visit, or upload it when you submit your appointment request online.',
      },
      {
        question: 'How do I make an appointment?',
        answer:
          'Submit an appointment request through the online form on this website. Reception will contact you within one business day to confirm your appointment. You can also call the rooms directly on 02 9247 1762 during business hours (Monday to Friday, 8:30 am to 5:00 pm).',
      },
      {
        question: 'Can I request a specific surgeon?',
        answer:
          'Yes. You can indicate a preferred surgeon when completing the appointment request form. Our four surgeons have different subspecialty focuses, and reception can assist if you are unsure who best suits your needs based on your referral and concern.',
      },
      {
        question: 'What should I bring to my first appointment?',
        answer:
          'Please bring your GP referral letter, Medicare card, any relevant imaging (CT, MRI, or X-ray) on disc or as a report, and a list of current medications. If you have seen another specialist for the same concern, bring any previous letters or test results.',
      },
      {
        question: 'How long is a first appointment?',
        answer:
          'First specialist consultations typically last 30 to 45 minutes, depending on the complexity of your presenting concern. Please allow extra time for any in-room examination or hearing assessment that may be performed on the day.',
      },
    ],
  },
  {
    heading: 'Fees and Medicare',
    items: [
      {
        question: 'Is My-ENT a bulk-billing practice?',
        answer:
          'No. My-ENT is a private specialist practice and does not offer bulk billing. A Medicare rebate may apply to your consultation if you have a valid GP referral. Please call the rooms for a specific quote before your appointment.',
      },
      {
        question: 'Does private health insurance cover my consultation?',
        answer:
          'Private health insurance generally does not cover outpatient specialist consultation fees. It may contribute to procedure-related hospital and accommodation costs if surgery is later required, depending on your level of cover.',
      },
      {
        question: 'Why are fee amounts not listed on this website?',
        answer:
          'Consultation fees depend on appointment type, complexity, and pathway. Please call reception on 02 9247 1762 for a quote that reflects your situation.',
      },
    ],
  },
  {
    heading: 'Before your procedure',
    items: [
      {
        question: 'When should I stop eating and drinking before surgery?',
        answer:
          'Your surgeon and the hospital anaesthetic team will provide specific fasting instructions for your procedure. These instructions vary depending on the type of anaesthetic and will be given to you before your admission date. Follow only the instructions provided for your procedure — do not rely on general guidance.',
      },
      {
        question: 'Can I take my regular medications before surgery?',
        answer:
          'Some medications need to be paused or adjusted before surgery, particularly blood thinners and anti-inflammatory medicines. Your surgeon will advise which medications to continue or stop during your pre-operative consultation. Always confirm with your surgical team before stopping any prescribed medication.',
      },
      {
        question: 'What do I need to arrange before a day procedure?',
        answer:
          'You will need a responsible adult to drive you home and remain with you for the first night after a day procedure involving a general anaesthetic. Arrange this before your admission date. You will also receive a hospital admission pack with instructions on where to go and what to bring.',
      },
    ],
  },
  {
    heading: 'Time off school or work after surgery',
    items: [
      {
        question: 'How much time off do I need after grommets?',
        answer:
          'Grommets is a brief day procedure performed under a short general anaesthetic. Most children and adults return to normal activities the following day. There is no requirement for extended time off school or work.',
      },
      {
        question: 'How much time off do I need after a tonsillectomy?',
        answer:
          'Tonsillectomy has a longer recovery period than most ENT day procedures. Most patients experience throat pain for one to two weeks and are advised to take this time away from school or work to allow adequate rest and healing. Your surgeon will give you specific guidance based on your age, the complexity of the procedure, and your recovery progress.',
      },
      {
        question: 'How much time off do I need after endoscopic sinus surgery?',
        answer:
          'Recovery after endoscopic sinus surgery (ESS) varies depending on the extent of surgery. Most patients take one to two weeks from work and are advised to avoid strenuous activity during this time. Your surgeon will provide individual guidance following your procedure.',
      },
      {
        question: 'How much time off do I need after septoplasty or turbinate reduction?',
        answer:
          'Most patients take approximately one week off work after septoplasty or turbinate reduction. Strenuous activity, heavy lifting, and nose blowing should be avoided for the period specified by your surgeon. Full symptomatic improvement may take several weeks as swelling settles.',
      },
    ],
  },
  {
    heading: 'Concerns after your procedure',
    items: [
      {
        question: 'Who do I contact if I have a concern after surgery?',
        answer:
          'For non-urgent post-operative concerns during business hours, please call the My-ENT rooms on 02 9247 1762. If you have an urgent concern outside business hours — including significant bleeding, breathing difficulty, or sudden severe pain — please call 000 or present to your nearest emergency department immediately.',
      },
      {
        question: 'Is some pain and swelling normal after surgery?',
        answer:
          'Mild to moderate pain and swelling are expected after most ENT procedures and are part of normal healing. Your surgical team will provide a pain management plan and guidance on what is normal versus what requires prompt review. Follow the written instructions provided to you on discharge.',
      },
      {
        question: 'When will I have my post-operative follow-up appointment?',
        answer:
          'A follow-up appointment is usually arranged for two to four weeks after your procedure, depending on the surgery performed. Reception will confirm your follow-up date when your procedure is booked. Justine Oates, our nurse practitioner, may also see you for post-operative review as part of your care pathway.',
      },
    ],
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqGroups.flatMap((group) =>
    group.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    }))
  ),
}

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="myent-section bg-white">
        <div className="myent-container">
          <p className="myent-eyebrow">Patient information</p>
          <div className="mt-4 max-w-3xl space-y-6">
            <h1 className="text-4xl leading-tight tracking-tight lg:text-5xl">
              Frequently asked questions
            </h1>
            <p className="text-lg leading-relaxed text-neutral-500">
              Answers to the questions our reception team hear most often, so you can find what you
              need without having to call. If your question is not covered here, please call the rooms
              on 02 9247 1762 during business hours.
            </p>
          </div>
        </div>
      </section>

      {faqGroups.map((group, groupIndex) => (
        <section
          key={group.heading}
          className={`myent-section border-t border-neutral-200 ${groupIndex % 2 === 0 ? 'bg-neutral-100' : 'bg-white'}`}
        >
          <div className="myent-container">
            <div className="mb-10">
              <h2 className="text-3xl leading-tight">{group.heading}</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {group.items.map((item) => (
                <article key={item.question} className="myent-card h-full">
                  <h3 className="text-xl leading-snug text-neutral-800">{item.question}</h3>
                  <p className="mt-4 text-base leading-relaxed text-neutral-500">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="myent-section border-t border-neutral-200 bg-neutral-100">
        <div className="myent-container">
          <div className="myent-card max-w-2xl">
            <p className="myent-eyebrow">Still have a question?</p>
            <h2 className="mt-3 text-3xl leading-tight">Get in touch with our team</h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-500">
              Reception is available Monday to Friday, 8:30 am to 5:00 pm. For post-operative
              emergencies outside business hours, please call 000 or attend your nearest emergency
              department.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a className="myent-btn-primary w-fit" href="tel:0292471762">
                Call 02 9247 1762
              </a>
              <Link className="myent-btn-outline w-fit" href="/appointments">
                Request an appointment
              </Link>
              <Link className="myent-btn-outline w-fit" href="/appointments/your-first-visit">
                Before your first visit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
