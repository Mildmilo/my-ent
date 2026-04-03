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
    role: 'Rhinology and anterior skull base, general ENT, paediatric ENT',
    credentials:
      "FRACS (ORL-HNS), NHMRC grant holder, PhD candidate at UNSW, research in sinus stem cell therapeutics. Also sees general ENT patients and holds a paediatric ENT appointment at Sydney Children's Hospital, a tertiary paediatric centre.",
    profileHref: '/about/dr-catherine-banks',
  },
  {
    name: 'Dr Lyndon Chan',
    role: 'General and paediatric ENT',
    credentials: 'MBBS, FRACS. Hospital affiliations: // TODO: INSERT [Dr Lyndon Chan affiliations].',
    profileHref: '/about/dr-lyndon-chan',
  },
  {
    name: 'Dr June Huang',
    role: 'Otology and general ENT',
    credentials: 'FRACS, fellowship-trained. Hospital affiliations: // TODO: INSERT [Dr June Huang affiliations].',
    profileHref: '/about/dr-june-huang',
  },
  {
    name: 'Dr Rithvik Reddy',
    role: 'Complex otology, auditory implants, lateral skull base surgery, general and paediatric ENT',
    credentials:
      "FRACS (ORL-HNS). Fellowships: Guy's and St Thomas' NHS Trust, London; King's College London. Consultant appointments: Sydney Children's Hospital and Liverpool Hospital (adult and paediatric).",
    profileHref: '/about/dr-rithvik-reddy',
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

const whyPoints = [
  {
    title: 'Reception-first intake design',
    body: 'Appointment requests are structured so reception can action bookings in Genie without a return call for missing details.',
  },
  {
    title: 'Nurse practitioner pathway',
    body: 'Patients who need triage, follow-up, or scope-appropriate review can be directed to the nurse practitioner consultation stream.',
  },
  {
    title: 'Clear urgent escalation',
    body: 'Urgent same-day concerns are signposted with immediate call instructions and after-hours emergency department guidance.',
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
      <WhyMyEnt points={whyPoints} />
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
