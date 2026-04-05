import { ConditionsGrid } from '@/components/homepage/ConditionsGrid'
import { GpStrip } from '@/components/homepage/GpStrip'
import { Hero } from '@/components/homepage/Hero'
import { LocationsCard } from '@/components/homepage/LocationsCard'
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

const locations = [
  {
    name: 'Prince of Wales Private',
    suburb: 'Randwick',
    note: 'Confirmed affiliation.',
  },
  {
    name: "St Luke's Private",
    suburb: 'Potts Point',
    note: 'Confirmed affiliation.',
  },
  {
    name: "Sydney Children's Hospital",
    suburb: 'Randwick',
    note: 'Confirmed affiliation.',
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
      <LocationsCard
        primaryAddress="Level 3, Suite 303, BMA House, 135 Macquarie Street, Sydney CBD NSW 2000"
        locations={locations}
      />
      <ReviewsStrip
        summary="My-ENT publishes patient feedback with strict AHPRA-aligned review controls."
        reviewStatus={reviewStatus}
      />
      <GpStrip />
    </>
  )
}
