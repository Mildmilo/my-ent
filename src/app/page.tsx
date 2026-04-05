import Image from 'next/image'

import { ConditionsGrid } from '@/components/homepage/ConditionsGrid'
import { GpStrip } from '@/components/homepage/GpStrip'
import { Hero } from '@/components/homepage/Hero'
import { ReviewsStrip } from '@/components/homepage/ReviewsStrip'
import { SubspecialtyStrip } from '@/components/homepage/SubspecialtyStrip'
import { SurgeonGrid } from '@/components/homepage/SurgeonGrid'
import { WhyMyEnt } from '@/components/homepage/WhyMyEnt'

interface HeroActionData {
  label: string
  href: string
  summary: string
}

interface SurgeonData {
  name: string
  role: string
  credentials: string
  profileHref: string
  imageSrc: string
}

interface ConditionData {
  title: string
  detail: string
  href: string
}

const heroActions: HeroActionData[] = [
  {
    label: 'Request an appointment',
    href: '/appointments',
    summary: 'Start your booking request when you have a GP referral and are ready to be seen.',
  },
  {
    label: 'Upload a referral or imaging',
    href: '/appointments/referral-information',
    summary: 'Send referral and scan documents before your visit to reduce reception follow-up calls.',
  },
  {
    label: 'Fees and first-visit questions',
    href: '/appointments/fees-and-medicare',
    summary: 'Understand Medicare rebate pathways, what to bring, and what happens at your first visit.',
  },
  {
    label: 'Post-operative concern',
    href: '/patient-info/after-your-procedure',
    summary: 'For urgent post-op concerns, call the rooms immediately or present to your nearest ED after hours.',
  },
]

const subspecialties = [
  'Rhinology and anterior skull base',
  'General and paediatric ENT',
  'Otology and hearing conditions',
  'Head and neck care',
]

const surgeons: SurgeonData[] = [
  {
    name: 'Dr Catherine Banks',
    role: 'Rhinology and Anterior Skull Base · Paediatric and Adult General ENT',
    credentials: 'MBChB, FRACS (ORL-HNS), NHMRC grant holder, PhD candidate at UNSW.',
    profileHref: '/about/dr-catherine-banks',
    imageSrc: '/images/Team/dr-catherine-banks-myent.jpg',
  },
  {
    name: 'Dr Lyndon Chan',
    role: 'Sleep surgery, rhinology, skull base',
    credentials: 'MBBS (Hons), FRACS (Otorhinolaryngologist), triple fellowship certified.',
    profileHref: '/about/dr-lyndon-chan',
    imageSrc: '/images/Team/dr-lyndon-chan-myent.jpg',
  },
  {
    name: 'Dr June Huang',
    role: 'Otology, general and paediatric ENT',
    credentials: 'MBChB, FRACS (OHNS), otology fellowship at St Vincent\'s Hospital Sydney.',
    profileHref: '/about/dr-june-huang',
    imageSrc: '/images/Team/dr-june-huang-myent.jpg',
  },
  {
    name: 'Dr Rithvik Reddy',
    role: 'Complex otology and auditory implants',
    credentials: 'FRACS (ORL-HNS), advanced fellowship-trained in complex otology and lateral skull base surgery.',
    profileHref: '/about/dr-rithvik-reddy',
    imageSrc: '/images/Team/dr-rithvik-reddy-myent.jpg',
  },
  {
    name: 'Justine Oates',
    role: 'Nurse practitioner',
    credentials: 'Master of Nursing, Sydney University, Head and Neck / Rhinology Nurse Practitioner.',
    profileHref: '/about/justine-oates',
    imageSrc: '/images/Team/justine-oates-myent.jpg',
  },
]

const conditions: ConditionData[] = [
  {
    title: 'Sinusitis',
    detail: 'Persistent sinus symptoms with a pathway through assessment, imaging review, and treatment planning.',
    href: '/conditions/sinusitis',
  },
  {
    title: 'Nasal polyps',
    detail: 'Support for ongoing blocked nose and smell changes with medical and surgical options where appropriate.',
    href: '/conditions/nasal-polyps',
  },
  {
    title: 'Hearing loss',
    detail: 'Assessment options for new and chronic hearing change in adults and children.',
    href: '/conditions/hearing-loss',
  },
  {
    title: 'Ear infections',
    detail: 'Review pathways for recurrent ear infections and related hearing or pain concerns.',
    href: '/conditions/ear-infections',
  },
  {
    title: 'Snoring and sleep apnoea',
    detail: 'Clear next steps for snoring and sleep-disordered breathing concerns in adults and children.',
    href: '/conditions/snoring-sleep-apnoea',
  },
  {
    title: 'Tonsillitis',
    detail: 'Consultation pathways for repeated infections and throat-related quality-of-life concerns.',
    href: '/conditions/tonsillitis',
  },
]

const reviewStatus = [
  'Public-platform review excerpts are being compiled and verified.',
  'Only verbatim, attributable reviews will be published once approved.',
  'No edited testimonial copy is used on this page.',
]

export default function Home() {
  return (
    <>
      <Hero actions={heroActions} />
      <SubspecialtyStrip items={subspecialties} />
      <SurgeonGrid surgeons={surgeons} />
      <ConditionsGrid conditions={conditions} />
      <WhyMyEnt />
      <section className="myent-section bg-white">
        <div className="myent-container">
          <div className="mb-10">
            <p className="myent-eyebrow">Location</p>
            <h2 className="mt-3 text-3xl lg:text-4xl">Visit My-ENT in Sydney CBD</h2>
          </div>
          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
            <article className="myent-card h-full lg:min-h-[38rem]">
              <div className="flex h-full flex-col justify-center divide-y divide-neutral-200">
                <div className="pb-6">
                  <p className="font-serif text-3xl text-neutral-800">My-ENT</p>
                </div>
                <div className="py-6">
                  <p className="text-lg text-neutral-700">
                    Suite 303, Level 3, BMA House, 135 Macquarie Street, Sydney CBD NSW 2000
                  </p>
                </div>
                <div className="py-6">
                  <a
                    href="tel:0292471762"
                    className="text-xl font-medium text-teal-400 transition-colors duration-150 hover:text-teal-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-400"
                  >
                    02 9247 1762
                  </a>
                </div>
                <div className="py-6">
                  <a
                    href="mailto:contact@my-ent.com.au"
                    className="text-lg text-teal-400 transition-colors duration-150 hover:text-teal-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-400"
                  >
                    contact@my-ent.com.au
                  </a>
                </div>
                <div className="pt-6">
                  <p className="text-base text-neutral-500">Monday to Friday, 8:30am – 5:00pm</p>
                </div>
              </div>
            </article>

            <article className="myent-card h-full overflow-hidden p-0 lg:min-h-[38rem]">
              <div className="grid h-full min-h-[32rem] grid-rows-[3fr_1fr] lg:min-h-0">
                <div className="relative">
                  <Image
                    src="/images/bma-house-myent.jpg"
                    alt="BMA House at 135 Macquarie Street, Sydney CBD"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
                <iframe
                  title="My-ENT location map"
                  src="https://www.google.com/maps?q=135+Macquarie+Street+Sydney+NSW+2000&output=embed"
                  className="h-full w-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </article>
          </div>
        </div>
      </section>
      <ReviewsStrip
        summary="My-ENT publishes patient feedback with strict AHPRA-aligned review controls."
        reviewStatus={reviewStatus}
      />
      <GpStrip />
    </>
  )
}
