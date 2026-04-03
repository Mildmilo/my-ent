import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | My-ENT',
  description:
    'Read how My-ENT collects, uses, stores, protects, and shares personal information, and how to request access or corrections.',
}

interface PolicySection {
  title: string
  content: string[]
}

const policySections: PolicySection[] = [
  {
    title: 'What information we collect',
    content: [
      'We collect personal and health information needed to provide specialist ENT care and manage your appointments.',
      'This can include your name, date of birth, contact details, Medicare details, referral details, medical history, imaging and test results, consultation notes, and billing information.',
      'If you contact us, we may also keep records of phone calls, emails, or forms you send to the practice.',
    ],
  },
  {
    title: 'Why we collect your information',
    content: [
      'We collect information so we can safely assess, treat, and follow up your care.',
      'We also use it for appointment scheduling, clinical communication, billing, Medicare processing, and meeting legal and professional obligations.',
      'If you do not provide key information, we may not be able to deliver some services or process your visit efficiently.',
    ],
  },
  {
    title: 'How your information is stored and protected',
    content: [
      'My-ENT uses Genie as the practice management system for clinical records, confirmed bookings, billing, and reminders.',
      'Information may be stored in secure electronic systems and, where required, in paper records.',
      'We take reasonable steps to protect your information from misuse, interference, loss, and unauthorised access, modification, or disclosure. This includes access controls, staff confidentiality obligations, and secure administrative processes.',
    ],
  },
  {
    title: 'Who we may share your information with',
    content: [
      'We only share your information where needed for your care, for practice operations, or when required by law.',
      'Depending on your circumstances, this may include your GP, other treating specialists, hospitals, pathology or imaging providers, Medicare, and service providers who support our practice systems.',
      'We take reasonable steps to ensure information sharing is limited to what is necessary for the purpose.',
    ],
  },
  {
    title: 'Accessing or correcting your information',
    content: [
      'You can ask for access to personal information we hold about you, or ask us to correct information that is inaccurate, incomplete, or out of date.',
      'Please contact the practice in writing using the details below. We may need to confirm your identity before processing a request.',
      'In some cases, access may be limited by law. If that applies, we will explain the reason and discuss available options.',
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="myent-section bg-white">
        <div className="myent-container">
          <p className="myent-eyebrow">Administrative</p>
          <div className="mt-4 max-w-3xl space-y-6">
            <h1 className="text-4xl leading-tight tracking-tight lg:text-5xl">Privacy Policy</h1>
            <p className="text-lg leading-relaxed text-neutral-500">
              This Privacy Policy explains in plain English how My-ENT handles personal and health
              information in line with the Australian Privacy Principles under the Privacy Act 1988
              (Cth).
            </p>
            <p className="text-sm text-neutral-500">Last updated: 3 April 2026</p>
          </div>
        </div>
      </section>

      <section className="myent-section border-t border-neutral-200 bg-neutral-100">
        <div className="myent-container space-y-6">
          {policySections.map((section) => (
            <article key={section.title} className="rounded-xl border border-neutral-200 bg-white p-6 lg:p-8">
              <h2 className="text-2xl leading-snug">{section.title}</h2>
              <div className="mt-4 space-y-4">
                {section.content.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-relaxed text-neutral-600">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="myent-section border-t border-neutral-200 bg-white">
        <div className="myent-container grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="myent-card h-fit">
            <p className="myent-eyebrow">Privacy enquiries</p>
            <h2 className="mt-3 text-3xl leading-tight">Contact My-ENT</h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-500">
              If you have a privacy question, concern, or complaint, please contact the practice.
              Privacy enquiries can be directed to the practice manager.
            </p>
            <p className="mt-4 text-base leading-relaxed text-neutral-500">
              We will respond as soon as practical and work with you to resolve your concern.
            </p>
          </article>

          <aside className="myent-card h-fit">
            <h3 className="text-2xl leading-snug">Practice details</h3>
            <div className="mt-4 space-y-3 text-base leading-relaxed text-neutral-600">
              <p>
                <strong>Practice:</strong> My-ENT
              </p>
              <p>
                <strong>Address:</strong> Level 3, Suite 303, BMA House, 135 Macquarie Street,
                Sydney CBD NSW 2000
              </p>
              <p>
                <strong>Phone:</strong>{' '}
                <a className="underline decoration-neutral-400 underline-offset-2" href="tel:0292471762">
                  02 9247 1762
                </a>
              </p>
              <p>
                <strong>Email:</strong>{' '}
                <a
                  className="underline decoration-neutral-400 underline-offset-2"
                  href="mailto:contact@my-ent.com.au"
                >
                  contact@my-ent.com.au
                </a>
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
