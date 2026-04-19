// TODO: CLINICAL REVIEW — awaiting Dr Banks sign-off (Tier C)

import type { Metadata } from 'next'
import Image from 'next/image'
import { ConditionPageTemplate } from '@/components/templates/ConditionPageTemplate'

const hearingLossFaqItems = [
  {
    question: 'Is sudden hearing loss an emergency?',
    answer:
      'A sudden drop in hearing over hours or a few days should be treated as urgent and assessed the same day where possible. Early specialist review is important because timing can influence treatment options and outcomes.',
  },
  {
    question: 'What is the difference between conductive and sensorineural hearing loss?',
    answer:
      'Conductive loss relates to problems transmitting sound through the outer or middle ear, while sensorineural loss involves the inner ear or auditory nerve. Hearing tests and examination help distinguish these patterns.',
  },
  {
    question: 'Do I always need surgery for hearing loss?',
    answer:
      'No. Many patients are managed without surgery, depending on the cause and severity. Management may include medical treatment, wax removal, monitoring, hearing rehabilitation, or surgery only when clinically appropriate.',
  },
  {
    question: 'Can hearing loss happen in only one ear?',
    answer:
      'Yes. Unilateral hearing changes can occur and should be assessed carefully, particularly if they are new, progressive, or associated with tinnitus, imbalance, or other neurological symptoms.',
  },
  {
    question: 'Can earwax be enough to cause noticeable hearing loss?',
    answer:
      'Yes. A build-up of wax against the eardrum can cause a blocked sensation and a measurable reduction in hearing, often in one ear. Removal by microsuction in the rooms commonly restores hearing when wax is the main cause, and examination helps confirm whether other factors also need investigation.',
  },
  {
    question: 'Will every surgeon at My-ENT approach my condition the same way?',
    answer:
      'Individual surgeons within My-ENT may approach assessment and management differently based on their subspecialty training and clinical experience. Your surgeon will discuss the most appropriate pathway for your specific situation at your consultation.',
  },
]

export const metadata: Metadata = {
  title: 'Hearing Loss Assessment Sydney | ENT Specialist',
  description:
    'Hearing loss information for Sydney patients, including warning signs, when urgent review is needed, and specialist management pathways at My-ENT.',
  alternates: {
    canonical: '/conditions/hearing-loss',
  },
}

export default function HearingLossPage() {
  return (
    <ConditionPageTemplate
      title="Hearing loss"
      clinicalTerm="Conductive and sensorineural hearing loss"
      plainEnglishSummary="Hearing loss may develop gradually or come on suddenly, and it can involve one ear or both. Some causes are temporary and treatable, while others need long-term monitoring and hearing support. Specialist assessment helps identify the cause and the most appropriate next steps."
            heroImageSlot={
        <Image
          src="/images/Conditions/hearing-loss-condition-myent.webp"
          alt="ENT hearing assessment consultation at My-ENT Sydney."
          width={1200}
          height={675}
          priority={true}
          className="h-full w-full object-cover"
        />
      }
      symptoms={[
        'Needing higher volume on television or devices than before.',
        'Difficulty hearing in background noise or group conversations.',
        'Frequently asking others to repeat themselves.',
        'A sensation of ear fullness or imbalance in sound between ears.',
        'Sudden change in hearing, with or without tinnitus or dizziness.',
      ]}
      causes={[
        'Wax build-up, glue ear, a perforated eardrum, or otosclerosis causing conductive hearing loss - where sound cannot travel efficiently through the outer or middle ear.',
        'Age-related changes in the inner ear (presbyacusis) - the most common cause of sensorineural hearing loss in adults over 60.',
        'Noise exposure over time damaging the hair cells within the cochlea - largely preventable with appropriate hearing protection.',
        'Viral illness, certain medications, or other conditions affecting the inner ear or auditory nerve.',
        'Sudden hearing loss - a noticeable drop in hearing over hours or days - which should always be assessed urgently as early treatment significantly affects the outcome.',
      ]}
      causesCitation="Chandrasekhar SS et al. Clinical Practice Guideline: Sudden Hearing Loss. Otolaryngol Head Neck Surg. 2019;161(1 Suppl):S1-S45. British Society of Audiology Practice Guidance. 2018."
      whenToSeekHelp="Seek ENT review when hearing changes are persistent, affecting communication, or asymmetrical between ears. Urgent same-day assessment is recommended for sudden hearing loss, especially if it developed over hours to a few days."
      treatmentOverview="Management is guided by hearing tests, ear examination, and symptom history. Treatment may include wax removal, infection or inflammation management, middle-ear procedures, surgical reconstruction in selected cases, and referral for hearing rehabilitation options when needed."
      relatedProcedures={[
        {
          title: 'Myringoplasty',
          href: '/procedures/myringoplasty',
        },
        {
          title: 'Wax microsuction',
          href: '/procedures/wax-microsuction',
        },
      ]}
      faqItems={hearingLossFaqItems}
    />
  )
}