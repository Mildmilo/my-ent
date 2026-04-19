import type { Metadata } from 'next'
import Image from 'next/image'
import { buildNursePractitionerSchema } from '@/lib/schema'

const biographyParagraphs: string[] = [
  'Role: Nurse practitioner for Dr Catherine Banks. Head and Neck / Rhinology Nurse Practitioner.',
  'Qualifications: Master of Nursing, Sydney University (2016).',
  'One of only three nurse practitioners in this scope of practice in Australia at the time of her appointment.',
  "Pioneered the nurse consultant role in head and neck surgery alongside Professor Chris O'Brien at Royal Prince Alfred Hospital for 15 years. Transitioned to Chris O'Brien Lifehouse at its opening in 2014, developing highly specialised nursing care for complex head and neck surgical and radiation oncology patients. Commenced as nurse practitioner in 2017. Has published and presented nationally and internationally on quality of life following head and neck cancer treatment. Invited lecturer, Sydney University Nursing School. Joined Dr Banks to expand her scope to include rhinology.",
  'Justine plays a central role in the new patient triage and nurse practitioner review pathway — see Section 5.',
]

export const metadata: Metadata = {
  title: 'Justine Oates | Nurse Practitioner Sydney',
  description:
    'Verified profile for Justine Oates including role, qualifications, and nurse practitioner pathway responsibilities.',
  alternates: {
    canonical: '/about/justine-oates',
  },
}

export default function JustineOatesPage() {
  const personSchema = buildNursePractitionerSchema({
    name: 'Justine Oates',
    url: '/about/justine-oates',
    image: '/images/Team/justine-oates-myent.jpg',
  })

  return (
    <section className="myent-section">
      {/* TODO: TIER B — awaiting individual sign-off before publishing. */}
      {/* AHPRA REVIEW NEEDED: "One of only three" is a scarcity/comparative claim and must be explicitly approved before publish. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <div className="myent-container">
        <p className="myent-eyebrow">Team profile</p>
        <h1 className="mt-4 text-4xl lg:text-5xl">Justine Oates</h1>
        <p className="mt-4 text-xl text-neutral-600">Nurse Practitioner</p>

        <article className="myent-card mt-10 overflow-hidden p-0">
          <div className="grid gap-0 lg:grid-cols-[1fr_5rem_400px]">
            <div className="p-6 lg:p-8">
              <p className="myent-eyebrow">Team profile</p>
              <h2 className="mt-3 text-3xl">Justine Oates</h2>
              <p className="mt-3 text-base text-neutral-600">Nurse Practitioner</p>

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
                src="/images/Team/justine-oates-myent.jpg"
                alt="Headshot of Justine Oates, nurse practitioner at My-ENT"
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
          <p className="mt-4 text-base text-neutral-600">
            Verified public tertiary hospital appointments are listed in Section 2 for the four My-ENT
            surgeons.
          </p>
        </article>
      </div>
    </section>
  )
}