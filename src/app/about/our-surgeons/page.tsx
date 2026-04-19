import type { Metadata } from 'next'
import Image from 'next/image'
import { surgeons } from '@/content/surgeons'

interface TeamCard {
  id: string
  name: string
  role: string
  credentials: string
  contextualNote?: string
  href: string
  imageSrc: string
}

const justineOates: TeamCard = {
  id: 'justine-oates',
  name: 'Justine Oates',
  role: 'Nurse Practitioner - Head and Neck / Rhinology',
  credentials: 'Master of Nursing, Sydney University (2016)',
  href: '/about/justine-oates',
  imageSrc: '/images/Team/justine-oates-myent.jpg',
}

const teamCards: TeamCard[] = [
  ...surgeons.map((surgeon) => ({
    id: surgeon.id,
    name: surgeon.name,
    role: surgeon.role,
    credentials: surgeon.credentials,
    contextualNote: surgeon.contextualNote,
    href: `/about/${surgeon.slug}`,
    imageSrc: `/images/Team/${surgeon.slug}-myent.jpg`,
  })),
  justineOates,
]

export const metadata: Metadata = {
  title: 'Our Surgeons Sydney | ENT Team Profiles',
  description:
    'Meet the My-ENT surgeons and nurse practitioner in Sydney, with profile pages for rhinology, otology, paediatric ENT, and skull base expertise.',
  alternates: {
    canonical: '/about/our-surgeons',
  },
}

export default function OurSurgeonsPage() {
  return (
    <section className="myent-section">
      <div className="myent-container">
        <p className="myent-eyebrow">About</p>
        <h1 className="mt-4 text-4xl lg:text-5xl">Our surgeons and nurse practitioner</h1>
        <p className="mt-5 max-w-3xl text-neutral-600">
          Meet the clinical team and open each profile for full credentials, subspecialty focus, and
          appointment pathway details.
        </p>

        <div className="mt-10 space-y-6">
          {teamCards.map((person) => (
            <article key={person.id} className="myent-card overflow-hidden p-0">
              <div className="grid gap-0 lg:grid-cols-[1fr_5rem_400px]">
                <div className="p-6 lg:p-8">
                  <p className="myent-eyebrow">Team profile</p>
                  <h2 className="mt-3 text-3xl lg:text-4xl">{person.name}</h2>
                  <p className="mt-4 text-sm font-medium text-neutral-700">{person.role}</p>
                  <p className="mt-3 text-sm text-neutral-600">{person.credentials}</p>
                  {person.contextualNote ? (
                    <p className="mt-2 text-sm text-neutral-400">{person.contextualNote}</p>
                  ) : null}

                  <a className="mt-6 inline-block text-sm font-medium text-teal-500" href={person.href}>
                    View full profile
                  </a>
                </div>

                <div
                  aria-hidden="true"
                  className="hidden bg-gradient-to-r from-teal-300/40 to-transparent lg:block"
                />

                <div className="h-[320px] overflow-hidden lg:h-full lg:min-h-[320px]">
                  <Image
                    src={person.imageSrc}
                    alt={`Headshot of ${person.name} at My-ENT`}
                    className="h-full w-full object-cover object-[50%_18%]"
                    width={400}
                    height={480}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}