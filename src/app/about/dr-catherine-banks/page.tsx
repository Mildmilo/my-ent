import type { Metadata } from 'next'
import Image from 'next/image'

const biographyParagraphs: string[] = [
  'Subspecialties: Rhinology, Skull Base Surgery, Adult and Paediatric ENT, General ENT.',
  'Qualifications: MBChB, FRACS (ORL-HNS).',
  'Dual fellowship certified: Harvard Medical School / Massachusetts Eye and Ear Hospital / Massachusetts General Hospital, Boston; University of Birmingham, Alabama.',
  'First Australasian surgeon to complete the Harvard/MEEI rhinology fellowship.',
  "UNSW PhD candidate (supervisor A/Prof Shafagh Waters). NHMRC grant holder (research in sinus stem cell therapeutics — see Rule 3 for confidentiality constraints). RACS Court of Examiners for Royal Australasian College of Surgeons, (RACS) ASOHNS. Founder, Base of Skull Service,(BOSS) Sydney Children's Hospital. Finalist for NSW innovation awards 2025. Co-Director of the International Orbital and Skullbase Workshop.",
  'Actively involved in clinical research and surgical education. Numerous peer-reviewed publications and textbook chapters. Presents regularly at national and international conferences.',
  "Private hospital appointments: St Luke's Private; Prince of Wales Private.",
  'Clinical expertise: All adult and paediatric nasal disorders; nasal obstruction and snoring; sinusitis; allergic rhinitis; cystic fibrosis; nasal masses and growths; anterior skull base lesions; pituitary lesions; epistaxis; dacryocystorhinostomy (DCR) / nasolacrimal sac obstruction; endoscopic orbital decompression and orbital surgery. General ENT, grommets, tonsillectomies, adenoidectomies.',
  'Works closely with neurosurgical and oculoplastic teams.',
  'Actively involved in academic research, teaching, mentoring, curriculum and examinations.',
  "Training centres: Sydney Children's Hospital; Westmead Children's Hospital; John Hunter Children's Hospital — trained across all three major NSW paediatric centres.",
  'website:drcatherinebanks.com',
]

const confirmedPublicAppointments: string[] = [
  'Prince of Wales Hospital',
  'Sydney Hospital',
  'Sydney Eye Hospital',
  "Sydney Children's Hospital (Randwick)",
]

export const metadata: Metadata = {
  title: 'Dr Catherine Banks | My-ENT',
  description:
    'Verified profile for Dr Catherine Banks including qualifications, subspecialty scope, and confirmed public tertiary hospital appointments.',
}

export default function DrCatherineBanksPage() {
  return (
    <section className="myent-section">
      {/* TODO: TIER B — awaiting individual sign-off before publishing. */}
      {/* AHPRA REVIEW NEEDED: "First Australasian surgeon" is a comparative-first claim and must be explicitly approved before publish. */}
      <div className="myent-container">
        <p className="myent-eyebrow">Team profile</p>
        <h1 className="mt-4 text-4xl lg:text-5xl">Dr Catherine Banks</h1>
        <p className="mt-4 text-xl text-neutral-600">MBChB, FRACS</p>

        <article className="myent-card mt-10 overflow-hidden p-0">
          <div className="grid gap-0 lg:grid-cols-[1fr_5rem_400px]">
            <div className="p-6 lg:p-8">
              <p className="myent-eyebrow">Team profile</p>
              <h2 className="mt-3 text-3xl">Dr Catherine Banks</h2>
              <p className="mt-3 text-base text-neutral-600">MBChB, FRACS</p>

              <div className="mt-6 space-y-4">
                {biographyParagraphs.map((paragraph) => (
                  <p key={paragraph} className="text-base text-neutral-600">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div
              aria-hidden="true"
              className="hidden bg-gradient-to-r from-teal-300/40 to-transparent lg:block"
            />

            <div className="h-[320px] overflow-hidden lg:h-full lg:min-h-[320px]">
              <Image
                src="/images/Team/dr-catherine-banks-myent.jpg"
                alt="Headshot of Dr Catherine Banks, ENT surgeon at My-ENT"
                className="h-full w-full object-cover object-[50%_18%]"
                width={400}
                height={480}
              />
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