// TODO: CLINICAL REVIEW — awaiting Dr Banks sign-off (Tier C)

import type { Metadata } from 'next'
import Image from 'next/image'
import { ConditionPageTemplate } from '@/components/templates/ConditionPageTemplate'

export const metadata: Metadata = {
  title: 'Hearing Loss in Children Sydney | Paediatric ENT',
  description:
    'Paediatric hearing loss information for Sydney parents, including warning signs, causes, hearing test pathways, and specialist treatment options at My-ENT.',
  alternates: {
    canonical: '/conditions/paediatric-hearing-loss',
  },
}

export default function PaediatricHearingLossPage() {
  return (
    <ConditionPageTemplate
      title="Hearing loss in children"
      clinicalTerm="Paediatric hearing impairment — conductive and sensorineural"
      plainEnglishSummary="Hearing is fundamental to speech development, learning, and social connection in childhood. Hearing loss in children can be present from birth or develop later, and it ranges from mild and temporary to permanent and requiring intervention. Early identification and management make a significant difference to outcomes — if you have any concern about your child's hearing, specialist assessment is always worthwhile."
            heroImageSlot={
        <Image
          src="/images/Conditions/paediatric-hearing-loss-condition-myent.webp"
          alt="Paediatric hearing assessment consultation at My-ENT Sydney."
          width={1200}
          height={675}
          priority={true}
          className="h-full w-full object-cover"
        />
      }
      symptoms={[
        'Not responding consistently to their name or to sound — particularly in infants.',
        'Delayed or unclear speech and language development.',
        'Frequently asking for repetition or saying "what?" more than expected for their age.',
        'Turning the television or devices to a high volume.',
        'Difficulty hearing in noisy environments such as classrooms or busy rooms.',
        'Appearing inattentive or easily distracted — sometimes mistaken for behavioural concerns.',
        'Recurrent ear infections, fluid in the ears (glue ear), or a blocked sensation.',
        'Failed newborn hearing screen or school hearing check.',
      ]}
      causes={[
        'Glue ear - thick fluid building up in the middle ear - the most common cause of hearing difficulty in children, often following ear infections or Eustachian tube dysfunction.',
        'Congenital hearing loss present from birth, which may be genetic or may result from a viral infection during pregnancy or complications around the time of birth.',
        'Acquired sensorineural hearing loss following a serious illness such as meningitis, certain viral infections, or ototoxic medications used in the treatment of serious illness.',
        'Progressive or gradually worsening hearing loss in a child, which always warrants thorough investigation including genetic testing and imaging where appropriate.',
      ]}
      causesCitation="Rosenfeld RM et al. Otolaryngol Head Neck Surg. 2016;154(1 Suppl):S1-S41. British Society of Audiology Newborn Hearing Screening Programme guidance. 2019."
      whenToSeekHelp="Seek specialist review promptly if your child has not passed a newborn or school hearing check, if speech development seems delayed at any age, or if teachers or parents have raised concerns about attention or listening. Do not wait if there is a strong family history of childhood hearing loss, or if your child has had recurrent ear infections with hearing that has not fully recovered. Early assessment preserves options for treatment and support."
      treatmentOverview="Assessment includes age-appropriate hearing testing — audiometry, tympanometry, and where indicated, specialised testing for infants. ENT examination will identify structural factors such as fluid behind the eardrum or adenoid enlargement. Where glue ear and conductive hearing loss are present, grommets (ventilation tubes) allow the middle ear to drain and ventilate, which restores hearing in most cases. For permanent sensorineural hearing loss, management involves collaboration with audiologists and may include hearing aids or, for selected children with severe to profound loss, cochlear implantation. Speech therapy support is often recommended alongside medical or surgical treatment."
      relatedProcedures={[
        {
          title: 'Grommets',
          href: '/procedures/grommets',
        },
        {
          title: 'Adenoidectomy',
          href: '/procedures/adenoidectomy',
        },
        {
          title: 'Myringoplasty',
          href: '/procedures/myringoplasty',
        },
        {
          title: 'Nasendoscopy',
          href: '/procedures/nasendoscopy',
        },
      ]}
    />
  )
}
