import type { Metadata } from 'next'

const biographyParagraphs: string[] = [
  'Subspecialties: Obstructive Sleep Apnoea and Snoring, Rhinology, Skull Base, Adult and Paediatric ENT.',
  'Triple fellowship certified: Duke University Hospital, USA; Singapore General Hospital, Singapore; Wollongong Hospital, Australia.',
  'Public hospital appointment: Northern Beach Hospital.',
  'University appointment: Wollongong University.',
  'Board member: International Surgical Sleep Society (ISSS).',
  'Website: www.drlyndonchan.com',
  'Clinical expertise: adult and paediatric obstructive sleep apnoea and snoring; nasal obstruction, allergic rhinitis, sinus disease; palate reconstruction and tongue reduction; implantable devices for OSA; lesions and tumours of the sinuses, head and neck.',
  'Ongoing collaboration with ENT faculties in Asia and America.',
]

const confirmedPublicAppointments: string[] = ['Northern Beach Hospital', 'Wollongong Hospital']

export const metadata: Metadata = {
  title: 'Dr Lyndon Chan | My-ENT',
  description:
    'Verified profile for Dr Lyndon Chan including fellowship pathway, subspecialty scope, and confirmed public tertiary hospital appointments.',
}

export default function DrLyndonChanPage() {
  return (
    <section className="myent-section">
      {/* TODO: TIER B — awaiting individual sign-off before publishing. */}
      <div className="myent-container">
        <p className="myent-eyebrow">Team profile</p>
        <h1 className="mt-4 text-4xl lg:text-5xl">Dr Lyndon Chan</h1>
        <p className="mt-4 text-xl text-neutral-600">MBBS (Hons), FRACS (Otorhinolaryngologist)</p>

        <article className="myent-card mt-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
            <div
              aria-hidden="true"
              className="flex h-28 w-28 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-3xl font-medium text-teal-400"
            >
              LC
            </div>

            <div className="space-y-4">
              {biographyParagraphs.map((paragraph) => (
                <p key={paragraph} className="text-base text-neutral-600">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </article>

        <article className="myent-card mt-6">
          <p className="myent-eyebrow">Public appointments</p>
          <h2 className="mt-3 text-3xl">Confirmed public tertiary hospital appointments</h2>
          <ul className="mt-4 space-y-2 text-base text-neutral-600">
            {confirmedPublicAppointments.map((appointment) => (
              <li key={appointment}>{appointment}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}