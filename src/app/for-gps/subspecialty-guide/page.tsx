import type { Metadata } from 'next'

type GuideItem = {
  surgeon: string
  subspecialties: string
  expertise: string
  publicAppointments: string
}

const guideItems: GuideItem[] = [
  {
    surgeon: 'Dr Catherine Banks',
    subspecialties: 'Rhinology, Skull Base Surgery, Adult and Paediatric ENT, General ENT.',
    expertise:
      'All adult and paediatric nasal disorders; nasal obstruction and snoring; sinusitis; allergic rhinitis; cystic fibrosis; nasal masses and growths; anterior skull base lesions; pituitary lesions; epistaxis; dacryocystorhinostomy (DCR) / nasolacrimal sac obstruction; endoscopic orbital decompression and orbital surgery. General ENT, grommets, tonsillectomies, adenoidectomies.',
    publicAppointments:
      "Prince of Wales Hospital; Sydney Hospital; Sydney Eye Hospital; Sydney Children's Hospital (Randwick)",
  },
  {
    surgeon: 'Dr Lyndon Chan',
    subspecialties:
      'Obstructive Sleep Apnoea and Snoring, Rhinology, Skull Base, Adult and Paediatric ENT.',
    expertise:
      'Adult and paediatric obstructive sleep apnoea and snoring; nasal obstruction, allergic rhinitis, sinus disease; palate reconstruction and tongue reduction; implantable devices for OSA; lesions and tumours of the sinuses, head and neck.',
    publicAppointments: 'Northern Beach Hospital; Wollongong Hospital',
  },
  {
    surgeon: 'Dr June Huang',
    subspecialties: 'Otology, General and Paediatric ENT.',
    expertise:
      'General nasal conditions (sinus, breathing, snoring, allergy, nosebleeds); ear infections, tonsils, sinuses; throat and voice disorders including silent reflux; general head and neck conditions; general paediatric ENT (grommets, tonsillectomies, adenoidectomies); ear conditions with special interest in eardrum repair, exostoses, cholesteatoma, hearing issues including cochlear implants, and balance disorders.',
    publicAppointments: 'St George Hospital',
  },
  {
    surgeon: 'Dr Rithvik Reddy',
    subspecialties:
      'Complex Otology, Auditory Implants, Lateral Skull Base Surgery, General and Paediatric ENT.',
    expertise:
      'Clinical expertise (subspecialty): cochlear implantation; middle ear implants; paediatric hearing loss; chronic ear disease; exostoses; cholesteatoma; skull base tumours. Clinical expertise (general ENT): ear infections; hearing loss; tonsillitis; glue ear; nasal obstruction; sinus disease; snoring - adults and children.',
    publicAppointments:
      "Prince of Wales Hospital; Sydney Hospital; Sydney Children's Hospital (Randwick); Liverpool Hospital",
  },
]

export const metadata: Metadata = {
  title: 'GP Subspecialty Guide Sydney | ENT Referrals | My-ENT',
  description:
    'Subspecialty guide for GPs in Sydney with surgeon scope, clinical focus areas, and verified public tertiary hospital appointments.',
}

export default function GpSubspecialtyGuidePage() {
  return (
    <main>
      {/* TODO: TIER B — awaiting individual sign-off before publishing. */}
      {/* AHPRA REVIEW NEEDED: this page contains surgeon credential and scope detail that requires individual verification before publish. */}
      <section className="myent-section bg-neutral-100">
        <div className="myent-container">
          <p className="myent-eyebrow">For GPs</p>
          <h1 className="mt-4 text-4xl lg:text-5xl">Subspecialty referral guide</h1>
          <p className="mt-6 max-w-3xl text-base text-neutral-600">
            Use this guide to align referrals to surgeon scope. Where urgency is present, call the
            rooms directly for same-day triage support.
          </p>
        </div>
      </section>

      <section className="myent-section">
        <div className="myent-container space-y-6">
          {guideItems.map((item) => (
            <article key={item.surgeon} className="myent-card">
              <h2 className="text-3xl">{item.surgeon}</h2>
              <p className="mt-4 text-base text-neutral-600">
                <span className="font-medium text-neutral-700">Subspecialties:</span>{' '}
                {item.subspecialties}
              </p>
              <p className="mt-3 text-base text-neutral-600">
                <span className="font-medium text-neutral-700">Clinical expertise:</span>{' '}
                {item.expertise}
              </p>
              <p className="mt-3 text-base text-neutral-600">
                <span className="font-medium text-neutral-700">
                  Confirmed public tertiary hospital appointments:
                </span>{' '}
                {item.publicAppointments}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
