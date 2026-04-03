import type { Metadata } from 'next'
import Link from 'next/link'

const surgeonScopes: Array<{ name: string; scope: string }> = [
  {
    name: 'Dr Catherine Banks',
    scope:
      'Rhinology, skull base surgery, adult and paediatric ENT, and general ENT with clinical expertise across nasal, sinus, and anterior skull base disorders.',
  },
  {
    name: 'Dr Lyndon Chan',
    scope:
      'Obstructive sleep apnoea and snoring, rhinology, skull base, and adult and paediatric ENT including palate and tongue surgery pathways.',
  },
  {
    name: 'Dr June Huang',
    scope:
      'Otology, general ENT, and paediatric ENT including ear disease, hearing conditions, and broader nose and throat presentations.',
  },
  {
    name: 'Dr Rithvik Reddy',
    scope:
      'Complex otology, auditory implants, lateral skull base surgery, and general and paediatric ENT presentations.',
  },
]

const verifiedPublicAppointments: Array<{ surgeon: string; appointments: string }> = [
  {
    surgeon: 'Dr Catherine Banks',
    appointments:
      "Prince of Wales Hospital; Sydney Hospital; Sydney Eye Hospital; Sydney Children's Hospital (Randwick)",
  },
  {
    surgeon: 'Dr Lyndon Chan',
    appointments: 'Northern Beach Hospital; Wollongong Hospital',
  },
  {
    surgeon: 'Dr June Huang',
    appointments: 'St George Hospital',
  },
  {
    surgeon: 'Dr Rithvik Reddy',
    appointments:
      "Prince of Wales Hospital; Sydney Hospital; Sydney Children's Hospital (Randwick); Liverpool Hospital",
  },
]

export const metadata: Metadata = {
  title: 'For GPs Sydney | ENT Referral Hub | My-ENT',
  description:
    'Referral hub for GPs in Sydney with surgeon subspecialty scope, urgent referral instructions, and practical referral process guidance.',
}

export default function ForGpsHubPage() {
  return (
    <main>
      {/* TODO: TIER A — practice manager review before publishing. */}
      <section className="myent-section bg-teal-50">
        <div className="myent-container">
          <p className="myent-eyebrow">For GPs</p>
          <h1 className="mt-4 text-4xl lg:text-5xl">Referral hub for GPs</h1>
          <p className="mt-6 max-w-3xl text-base text-neutral-600">
            Thank you for referring to My-ENT. This hub is designed to help you quickly identify the
            appropriate surgeon, submit a complete referral, and escalate urgent concerns without
            delay.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="myent-btn-primary" href="/for-gps/subspecialty-guide">
              View subspecialty guide
            </Link>
            <Link className="myent-btn-outline" href="/for-gps/gp-resources">
              Open GP resources
            </Link>
          </div>
        </div>
      </section>

      <section className="myent-section">
        <div className="myent-container">
          <p className="myent-eyebrow">Urgent referrals</p>
          <h2 className="mt-3 text-3xl">Urgent same-day concerns</h2>
          <div className="myent-card mt-6">
            <p className="text-base text-neutral-600">
              For acute concerns such as sudden hearing loss, post-operative bleeding, or airway
              concern, please call the rooms immediately on 02 9247 1762.
            </p>
            <p className="mt-3 text-base text-neutral-600">
              If after hours and immediate clinical assessment is required, direct the patient to
              their nearest emergency department.
            </p>
          </div>
        </div>
      </section>

      <section className="myent-section bg-neutral-100">
        <div className="myent-container">
          <p className="myent-eyebrow">Subspecialty scope</p>
          <h2 className="mt-3 text-3xl">Surgeon scope at a glance</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {surgeonScopes.map((item) => (
              <article key={item.name} className="myent-card">
                <h3 className="text-2xl">{item.name}</h3>
                <p className="mt-3 text-base text-neutral-600">{item.scope}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="myent-section">
        <div className="myent-container">
          <p className="myent-eyebrow">Referral process</p>
          <h2 className="mt-3 text-3xl">What helps us triage quickly</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_380px]">
            <article className="myent-card">
              <ul className="space-y-3 text-base text-neutral-600">
                <li>
                  Include the presenting concern and urgency in the referral so reception can triage
                  the request on arrival.
                </li>
                <li>
                  Include relevant imaging and reports where available, or advise if imaging is
                  pending.
                </li>
                <li>
                  Include whether the referral is for an adult or paediatric patient.
                </li>
                <li>
                  If a specific surgeon is preferred, include this in the referral. If not,
                  referrals can be triaged to next available within scope.
                </li>
              </ul>
            </article>
            <article className="myent-card">
              <h3 className="text-2xl">Contact details</h3>
              <p className="mt-3 text-base text-neutral-600">Phone: 02 9247 1762</p>
              <p className="mt-2 text-base text-neutral-600">Fax: 02 9247 2141</p>
              <p className="mt-2 text-base text-neutral-600">Email: contact@my-ent.com.au</p>
              <p className="mt-4 text-sm text-neutral-500">
                {'// TODO: INSERT secure digital referral upload pathway'}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="myent-section bg-neutral-100">
        <div className="myent-container">
          <p className="myent-eyebrow">Trust signal</p>
          <h2 className="mt-3 text-3xl">Verified public tertiary hospital appointments</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {verifiedPublicAppointments.map((item) => (
              <article key={item.surgeon} className="myent-card">
                <h3 className="text-2xl">{item.surgeon}</h3>
                <p className="mt-3 text-base text-neutral-600">{item.appointments}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
