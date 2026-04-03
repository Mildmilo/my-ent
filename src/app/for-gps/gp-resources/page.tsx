import type { Metadata } from 'next'

const referralChecklist: string[] = [
  'Valid GP referral with presenting concern and requested review focus.',
  'Clear urgency level if same-day assessment is required.',
  'Relevant imaging and reports attached where available.',
  'Adult or paediatric patient status for triage routing.',
  'Preferred surgeon if required, or next available within scope.',
]

const trustSignalRows: Array<{ surgeon: string; appointments: string }> = [
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
  title: 'GP Resources Sydney | Referral Pathways | My-ENT',
  description:
    'Practical GP resources for My-ENT referrals in Sydney, including urgent pathway instructions, referral checklist, and verified public appointments.',
}

export default function GpResourcesPage() {
  return (
    <main>
      {/* TODO: TIER A — practice manager review before publishing. */}
      <section className="myent-section">
        <div className="myent-container">
          <p className="myent-eyebrow">For GPs</p>
          <h1 className="mt-4 text-4xl lg:text-5xl">GP resources and referral support</h1>
          <p className="mt-6 max-w-3xl text-base text-neutral-600">
            This page centralises practical referral details so urgent and routine referrals can be
            triaged efficiently.
          </p>
        </div>
      </section>

      <section className="myent-section bg-teal-50">
        <div className="myent-container">
          <p className="myent-eyebrow">Urgent pathway</p>
          <h2 className="mt-3 text-3xl">For urgent cases</h2>
          <article className="myent-card mt-6">
            <p className="text-base text-neutral-600">
              For urgent same-day concerns, call 02 9247 1762 so reception can coordinate immediate
              triage.
            </p>
            <p className="mt-3 text-base text-neutral-600">
              If after hours and emergency assessment is required, direct the patient to their
              nearest emergency department.
            </p>
          </article>
        </div>
      </section>

      <section className="myent-section">
        <div className="myent-container">
          <p className="myent-eyebrow">Referral checklist</p>
          <h2 className="mt-3 text-3xl">Information to include with referral</h2>
          <article className="myent-card mt-6">
            <ul className="space-y-3 text-base text-neutral-600">
              {referralChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="myent-card mt-6">
            <h3 className="text-2xl">Contact channels</h3>
            <p className="mt-3 text-base text-neutral-600">Phone: 02 9247 1762</p>
            <p className="mt-2 text-base text-neutral-600">Fax: 02 9247 2141</p>
            <p className="mt-2 text-base text-neutral-600">Email: contact@my-ent.com.au</p>
            <p className="mt-4 text-sm text-neutral-500">
              {'// TODO: INSERT secure digital referral upload pathway'}
            </p>
          </article>
        </div>
      </section>

      <section className="myent-section bg-neutral-100">
        <div className="myent-container">
          <p className="myent-eyebrow">Trust signal</p>
          <h2 className="mt-3 text-3xl">Confirmed public tertiary hospital appointments</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {trustSignalRows.map((row) => (
              <article key={row.surgeon} className="myent-card">
                <h3 className="text-2xl">{row.surgeon}</h3>
                <p className="mt-3 text-base text-neutral-600">{row.appointments}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
