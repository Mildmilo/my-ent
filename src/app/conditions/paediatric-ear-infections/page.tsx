// TODO: CLINICAL REVIEW — awaiting Dr Banks sign-off (Tier C)

import type { Metadata } from 'next'
import Image from 'next/image'
import { ConditionPageTemplate } from '@/components/templates/ConditionPageTemplate'

export const metadata: Metadata = {
  title: 'Paediatric Ear Infections Sydney | Children\'s ENT | My-ENT',
  description:
    'Paediatric ear infections information for Sydney parents, covering symptoms, hearing impact, specialist review timing, and grommets pathways at My-ENT.',
}

export default function PaediatricEarInfectionsPage() {
  return (
    <ConditionPageTemplate
      title="Ear infections in children"
      clinicalTerm="Paediatric otitis media and otitis media with effusion"
      plainEnglishSummary="Ear infections are common in young children and one of the most frequent reasons for GP and specialist visits in the paediatric age group. They can cause ear pain, temporary hearing loss, and in some children, recurrent or persistent fluid behind the eardrum that affects speech and learning. Specialist review is often helpful when episodes keep returning or hearing does not recover fully between infections."
            heroImageSlot={
        <Image
          src="/images/Conditions/paediatric-ear-infections-condition-myent.webp"
          alt="Paediatric ENT review for recurrent ear infections at My-ENT Sydney."
          width={1200}
          height={675}
          priority={true}
          className="h-full w-full object-cover"
        />
      }
      symptoms={[
        'Ear pain or discomfort — younger children may pull or tug at their ear.',
        'Irritability, crying, or disturbed sleep, particularly at night.',
        'Difficulty hearing, not responding to their name, or turning the television up loudly.',
        'Discharge or fluid coming from the ear.',
        'Fever or feeling generally unwell, especially with an acute infection.',
        'Delayed speech development or unclear speech in toddlers with ongoing fluid behind the eardrum.',
        'Difficulty concentrating at school or reduced engagement in class.',
      ]}
      causes={[
        'The Eustachian tube in young children being shorter and flatter than in adults, making it much easier for bacteria and viruses to travel from the nose to the middle ear.',
        'A cold or viral upper respiratory infection causing swelling that blocks the drainage tube and allows fluid or infection to build up behind the eardrum.',
        'Enlarged adenoids obstructing the Eustachian tube opening and harbouring bacteria that contribute to repeated infections.',
        'Exposure to cigarette smoke, which is a well-established risk factor for both acute and recurrent ear infections in children.',
      ]}
      causesCitation="Rosenfeld RM et al. Clinical Practice Guideline: Otitis Media with Effusion. Otolaryngol Head Neck Surg. 2016;154(1 Suppl):S1-S41. NICE guideline NG91. 2018."
      whenToSeekHelp="Arrange specialist review if your child is having three or more ear infections in six months, six or more in a year, if hearing remains flat between episodes, or if fluid behind the eardrum (glue ear) has persisted for more than three months. Early review is also worthwhile when speech development seems delayed, when school performance is affected, or if your GP has recommended an ENT opinion."
      treatmentOverview="Treatment depends on the pattern of infections and whether hearing is consistently affected. Many episodes resolve with GP care and watchful waiting. Where infections are frequent or fluid persists and is affecting hearing or development, procedures such as grommets may be discussed. Enlarged adenoids contributing to Eustachian tube blockage may be considered alongside grommet insertion in appropriate cases. A hearing test is typically arranged as part of the assessment."
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
          title: 'Nasendoscopy',
          href: '/procedures/nasendoscopy',
        },
      ]}
    />
  )
}
