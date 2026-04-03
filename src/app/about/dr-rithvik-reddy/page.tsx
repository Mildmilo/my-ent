import type { Metadata } from 'next'

const biographyParagraphs: string[] = [
  'Subspecialties: Complex Otology, Auditory Implants, Lateral Skull Base Surgery, General and Paediatric ENT.',
  'Qualifications: FRACS (Otolaryngology, Head and Neck Surgery).',
  "Fellowship: Advanced fellowship in Complex Otology, Auditory Implants and Lateral Skull Base Surgery, Guy's and St Thomas' NHS Trust, London. Executive Fellowship in Surgical Leadership and Innovation, King's College London.",
  "Consultant appointments: Sydney Children's Hospital; Liverpool Hospital (adult and paediatric).",
  "Training centres: Sydney Children's Hospital; Westmead Children's Hospital; John Hunter Children's Hospital — trained across all three major NSW paediatric centres.",
  'Clinical expertise (subspecialty): cochlear implantation; middle ear implants; paediatric hearing loss; chronic ear disease; exostoses; cholesteatoma; skull base tumours.',
  'Clinical expertise (general ENT): ear infections; hearing loss; tonsillitis; glue ear; nasal obstruction; sinus disease; snoring — adults and children.',
  'Actively involved in clinical research and surgical education. Numerous peer-reviewed publications and textbook chapters. Presents regularly at national and international conferences. Works closely with GPs, audiologists, and allied health teams.',
]

const confirmedPublicAppointments: string[] = [
  'Prince of Wales Hospital',
  'Sydney Hospital',
  "Sydney Children's Hospital (Randwick)",
  'Liverpool Hospital',
]

export const metadata: Metadata = {
  title: 'Dr Rithvik Reddy | My-ENT',
  description:
    'Verified profile for Dr Rithvik Reddy including otology and lateral skull base scope, fellowship training, and confirmed public tertiary hospital appointments.',
}

export default function DrRithvikReddyPage() {
  return (
    <section className="myent-section">
      {/* TODO: TIER B — awaiting individual sign-off before publishing. */}
      <div className="myent-container">
        <p className="myent-eyebrow">Team profile</p>
        <h1 className="mt-4 text-4xl lg:text-5xl">Dr Rithvik Reddy</h1>
        <p className="mt-4 text-xl text-neutral-600">FRACS (ORL-HNS)</p>

        <article className="myent-card mt-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
            <div
              aria-hidden="true"
              className="flex h-28 w-28 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-3xl font-medium text-teal-400"
            >
              RR
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