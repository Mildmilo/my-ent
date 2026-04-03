import type { Metadata } from 'next'
import Image from 'next/image'
import { surgeons } from '@/content/surgeons'

interface TeamCard {
  id: string
  name: string
  role: string
  credentials: string
  initials: string
  href: string
  imageSrc?: string
}

const justineOates: TeamCard = {
  id: 'justine-oates',
  name: 'Justine Oates',
  role: 'Nurse Practitioner - Head and Neck / Rhinology',
  credentials: 'Master of Nursing, Sydney University (2016)',
  initials: 'JO',
  href: '/about/justine-oates',
}

const teamCards: TeamCard[] = [
  ...surgeons.map((surgeon) => ({
    id: surgeon.id,
    name: surgeon.name,
    role: surgeon.role,
    credentials: surgeon.credentials,
    initials: surgeon.initials,
    href: `/about/${surgeon.slug}`,
    imageSrc: surgeon.imageSrc,
  })),
  justineOates,
]

export const metadata: Metadata = {
  title: 'Our Surgeons Sydney | ENT Team Profiles | My-ENT',
  description:
    'Meet the My-ENT surgeons and nurse practitioner in Sydney, with profile pages for rhinology, otology, paediatric ENT, and skull base expertise.',
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

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {teamCards.map((person) => (
            <article key={person.id} className="myent-card flex h-full flex-col">
              <div className="flex items-start gap-4">
                {person.imageSrc ? (
                  <Image
                    src={person.imageSrc}
                    alt={`${person.name} profile photo`}
                    className="h-16 w-16 rounded-full object-cover"
                    width={64}
                    height={64}
                  />
                ) : (
                  <div
                    aria-hidden="true"
                    className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-teal-50 font-semibold text-teal-500"
                  >
                    {person.initials}
                  </div>
                )}

                <div>
                  <p className="text-xs uppercase tracking-wide text-teal-400">Team profile</p>
                  <h2 className="mt-1 text-2xl">{person.name}</h2>
                </div>
              </div>

              <p className="mt-4 text-sm font-medium text-neutral-700">{person.role}</p>
              <p className="mt-3 text-sm text-neutral-600">{person.credentials}</p>

              <a className="mt-6 inline-block text-sm font-medium text-teal-500" href={person.href}>
                View full profile
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}