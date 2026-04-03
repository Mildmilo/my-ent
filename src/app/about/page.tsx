import type { Metadata } from 'next'
import Link from 'next/link'

interface TeamMemberCard {
  id: string
  name: string
  role: string
  credentials: string
  initials: string
  href: '/about/dr-catherine-banks' | '/about/dr-lyndon-chan' | '/about/dr-june-huang' | '/about/dr-rithvik-reddy' | '/about/justine-oates'
}

const teamCards: TeamMemberCard[] = [
  {
    id: 'dr-catherine-banks',
    name: 'Dr Catherine Banks',
    role: 'Rhinology, Skull Base Surgery, Adult and Paediatric ENT, General ENT',
    credentials:
      "MBChB, FRACS (ORL-HNS). First Australasian surgeon to complete the Harvard/MEEI rhinology fellowship. NHMRC grant holder. PhD candidate at UNSW. Research in sinus stem cell therapeutics.",
    initials: 'CB',
    href: '/about/dr-catherine-banks',
  },
  {
    id: 'dr-lyndon-chan',
    name: 'Dr Lyndon Chan',
    role: 'Obstructive Sleep Apnoea and Snoring, Rhinology, Skull Base, Adult and Paediatric ENT',
    credentials:
      'MBBS (Hons), FRACS (Otorhinolaryngologist). Board member, International Surgical Sleep Society (ISSS). Triple fellowship-certified.',
    initials: 'LC',
    href: '/about/dr-lyndon-chan',
  },
  {
    id: 'dr-june-huang',
    name: 'Dr June Huang',
    role: 'Otology, General and Paediatric ENT',
    credentials:
      "MBChB, FRACS (OHNS). Fellowship in Otology, St Vincent's Hospital, Sydney.",
    initials: 'JH',
    href: '/about/dr-june-huang',
  },
  {
    id: 'dr-rithvik-reddy',
    name: 'Dr Rithvik Reddy',
    role: 'Complex Otology, Auditory Implants, Lateral Skull Base Surgery, General and Paediatric ENT',
    credentials:
      "FRACS (ORL-HNS). Fellowship in Complex Otology and Auditory Implants, Guy's and St Thomas' NHS Trust, London.",
    initials: 'RR',
    href: '/about/dr-rithvik-reddy',
  },
  {
    id: 'justine-oates',
    name: 'Justine Oates',
    role: 'Nurse Practitioner — Head and Neck / Rhinology',
    credentials:
      'Master of Nursing, Sydney University (2016). One of only three nurse practitioners in this scope of practice in Australia at the time of her appointment.',
    initials: 'JO',
    href: '/about/justine-oates',
  },
]

export const metadata: Metadata = {
  title: 'About My-ENT | Our Team, Locations, and Practice | My-ENT Sydney',
  description:
    'Learn about My-ENT — our ENT surgeons, nurse practitioner, clinic locations, and research activity in Sydney.',
}

export default function AboutIndexPage() {
  return (
    <main>
      <section className="myent-section bg-teal-50">
        <div className="myent-container">
          <p className="myent-eyebrow">About My-ENT</p>
          <h1 className="mt-4 text-4xl lg:text-5xl">A subspecialty ENT practice in Sydney</h1>
          <p className="mt-6 max-w-3xl text-base text-neutral-600">
            My-ENT is a subspecialty ear, nose, and throat practice based at Macquarie Street, Sydney
            CBD. Our surgeons hold fellowship training in rhinology, otology, skull base surgery, sleep
            surgery, and general and paediatric ENT, alongside active roles in research, education, and
            public hospital care.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="myent-btn-primary" href="/about/our-surgeons">
              Meet the team
            </Link>
            <Link className="myent-btn-outline" href="/contact/finding-the-right-contact">
              Find our locations
            </Link>
          </div>
        </div>
      </section>

      <section className="myent-section">
        <div className="myent-container">
          <p className="myent-eyebrow">The surgeons</p>
          <h2 className="mt-3 text-3xl">Our surgical team</h2>
          <p className="mt-5 max-w-2xl text-neutral-600">
            All four My-ENT surgeons hold public tertiary hospital appointments and fellowship
            training from recognised international centres.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {teamCards.map((member) => (
              <Link
                key={member.id}
                href={member.href}
                className="myent-card group flex flex-col"
              >
                <div
                  aria-hidden="true"
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-teal-50 font-medium text-teal-500"
                >
                  {member.initials}
                </div>
                <h3 className="mt-4 text-xl group-hover:text-teal-400 transition-colors duration-150">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-teal-400">{member.role}</p>
                <p className="mt-3 text-sm text-neutral-500 grow">{member.credentials}</p>
                <p className="mt-5 text-sm font-medium text-teal-400">View profile →</p>
              </Link>
            ))}
          </div>

          <div className="mt-8">
            <Link className="myent-btn-outline" href="/about/our-surgeons">
              View full team page
            </Link>
          </div>
        </div>
      </section>

      <section className="myent-section border-t border-neutral-200 bg-neutral-100">
        <div className="myent-container">
          <p className="myent-eyebrow">Ready to be seen?</p>
          <h2 className="mt-3 text-3xl">Request an appointment</h2>
          <p className="mt-5 max-w-2xl text-base text-neutral-600">
            A GP referral is required for a Medicare rebate to apply to your specialist consultation.
            If you have a referral and are ready to proceed, submit your appointment request below.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="myent-btn-primary" href="/appointments">
              Request an appointment
            </Link>
            <Link className="myent-btn-outline" href="/appointments/fees-and-medicare">
              Fees and Medicare rebates
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
