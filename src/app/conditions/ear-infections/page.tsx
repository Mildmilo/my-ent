// TODO: CLINICAL REVIEW — awaiting Dr Banks sign-off (Tier C)

import type { Metadata } from 'next'
import Image from 'next/image'
import { ConditionPageTemplate } from '@/components/templates/ConditionPageTemplate'

export const metadata: Metadata = {
  title: 'Ear Infections Treatment Sydney | Ear Specialist | My-ENT',
  description:
    'Ear infection information for Sydney patients, including common symptoms, when specialist review is needed, and practical treatment pathways at My-ENT.',
}

export default function EarInfectionsPage() {
  return (
    <ConditionPageTemplate
      title="Ear infections"
      clinicalTerm="Otitis externa and otitis media"
      plainEnglishSummary="Ear infections can affect the outer ear canal or the middle ear space behind the eardrum. Symptoms may include pain, pressure, reduced hearing, or discharge. While many infections settle with GP care, repeated episodes or persistent symptoms often benefit from ENT assessment."
            heroImageSlot={
        <Image
          src="/images/Conditions/ear-infections-condition-myent.webp"
          alt="Clinical assessment for ear infection symptoms at My-ENT Sydney."
          width={1200}
          height={675}
          priority={true}
          className="h-full w-full object-cover"
        />
      }
      symptoms={[
        'Ear pain, tenderness, or pressure that can worsen when lying down.',
        'Blocked hearing or muffled sound on one or both sides.',
        'Ear discharge, including fluid or pus, in some infections.',
        'Fever or feeling generally unwell, particularly with acute middle-ear infection.',
        'Irritability, sleep disturbance, or pulling at the ear in children.',
      ]}
      causes={[
        'A cold or viral upper respiratory infection causing swelling that blocks the tube connecting the nose to the middle ear.',
        'The Eustachian tube in young children being shorter and flatter than in adults, making it easier for bacteria and viruses to reach the middle ear - this explains why ear infections are far more common in children under five.',
        'Enlarged adenoids blocking the drainage pathway and harbouring bacteria that contribute to recurrent infections.',
        'Glue ear - thick fluid accumulating in the middle ear without acute infection - often following repeated ear infections or persistent Eustachian tube dysfunction.',
        'Exposure to cigarette smoke, which is a well-established risk factor for both acute and recurrent ear infections in children.',
      ]}
      causesCitation="Rosenfeld RM et al. Clinical Practice Guideline: Otitis Media with Effusion. Otolaryngol Head Neck Surg. 2016;154(1 Suppl):S1-S41. NICE guideline NG91: Otitis media (acute). 2018."
      whenToSeekHelp="Arrange specialist review if infections are recurring, hearing remains reduced after treatment, discharge persists, or symptoms are affecting school, sleep, or day-to-day function. Same-day medical review is important for severe pain, high fever, swelling behind the ear, or sudden worsening."
      treatmentOverview="Treatment depends on where the infection is and how often episodes occur. Management can include targeted ear drops, oral medicines, pain control, hearing review, and investigation of contributing nasal or middle-ear factors. For selected patients with recurrent middle-ear disease, procedures such as grommets may be discussed."
      relatedProcedures={[
        {
          title: 'Grommets',
          href: '/procedures/grommets',
        },
        {
          title: 'Myringoplasty',
          href: '/procedures/myringoplasty',
        },
      ]}
    />
  )
}