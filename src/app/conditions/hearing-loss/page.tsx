// TODO: CLINICAL REVIEW — awaiting Dr Banks sign-off (Tier C)

import type { Metadata } from 'next'
import Image from 'next/image'
import { ConditionPageTemplate } from '@/components/templates/ConditionPageTemplate'

export const metadata: Metadata = {
  title: 'Hearing Loss Assessment Sydney | ENT Specialist | My-ENT',
  description:
    'Hearing loss information for Sydney patients, including warning signs, when urgent review is needed, and specialist management pathways at My-ENT.',
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
    />
  )
}