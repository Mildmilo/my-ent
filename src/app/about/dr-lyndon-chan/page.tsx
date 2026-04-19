import type { Metadata } from 'next'
import Image from 'next/image'
import { buildPhysicianSchema } from '@/lib/schema'

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
  title: 'Dr Lyndon Chan',
  description:
    'Verified profile for Dr Lyndon Chan including fellowship pathway, subspecialty scope, and confirmed public tertiary hospital appointments.',
  alternates: {
    canonical: '/about/dr-lyndon-chan',
  },
}

export default function DrLyndonChanPage() {
  const physicianSchema = buildPhysicianSchema({
    name: 'Dr Lyndon Chan',
    url: '/about/dr-lyndon-chan',
    image: '/images/Team/dr-lyndon-chan-myent.jpg',
    medicalSpecialty: ['Otolaryngology', 'Sleep Medicine'],
    subspecialties: [
      'Obstructive Sleep Apnoea and Snoring',
      'Rhinology',
      'Skull Base',
      'Adult and Paediatric ENT',
    ],
    hospitals: ['Northern Beach Hospital'],
  })

  return (
    <section className="myent-section">
      {/* TODO: TIER B — awaiting individual sign-off before publishing. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
      />
      <div className="myent-container">
        <p className="myent-eyebrow">Team profile</p>
        <h1 className="mt-4 text-4xl lg:text-5xl">Dr Lyndon Chan</h1>
        <p className="mt-4 text-xl text-neutral-600">MBBS (Hons), FRACS (Otorhinolaryngologist)</p>

        <article className="myent-card mt-10 overflow-hidden p-0">
          <div className="grid gap-0 lg:grid-cols-[1fr_5rem_400px]">
            <div className="p-6 lg:p-8">
              <p className="myent-eyebrow">Team profile</p>
              <h2 className="mt-3 text-3xl">Dr Lyndon Chan</h2>
              <p className="mt-3 text-base text-neutral-600">MBBS (Hons), FRACS (Otorhinolaryngologist)</p>

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
                src="/images/Team/dr-lyndon-chan-myent.jpg"
                alt="Headshot of Dr Lyndon Chan, ENT surgeon at My-ENT"
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