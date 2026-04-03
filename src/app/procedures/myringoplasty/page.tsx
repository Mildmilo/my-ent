// TODO: CLINICAL REVIEW - awaiting Dr Banks sign-off (Tier C)

import type { Metadata } from 'next'
import { ProcedurePageTemplate } from '@/components/templates/ProcedurePageTemplate'

export const metadata: Metadata = {
  title: 'Myringoplasty Sydney | Eardrum Repair Surgery | My-ENT',
  description:
    'Myringoplasty information for Sydney patients, including when eardrum repair may be advised, perioperative planning, and postoperative ear care.',
}

export default function MyringoplastyPage() {
  return (
    <ProcedurePageTemplate
      title="Myringoplasty"
      plainEnglishSummary="Myringoplasty is surgery to repair a hole in the eardrum. It may be discussed for persistent perforations causing hearing difficulty, recurrent discharge, or water-related ear problems after specialist ear assessment."
      heroImage={{
        src: '/images/Procedures/myringoplasty-procedure-myent.webp',
        alt: 'Ear surgery field prepared for eardrum repair during myringoplasty.',
      }}
      indications={[
        'Persistent eardrum perforation that has not healed naturally.',
        'Recurrent ear discharge related to a perforated eardrum.',
        'Hearing concerns associated with tympanic membrane defects.',
        'Need to improve water tolerance in selected lifestyle or occupational contexts.',
        'Chronic middle ear pathways where repair forms part of broader management.',
      ]}
      whatToExpect="Preoperative planning includes ear microscopy, hearing assessment, and discussion of graft technique options. Surgery is commonly performed under general anaesthesia. Patients receive clear instructions on keeping the ear dry, activity restrictions, and follow-up timing for graft healing checks."
      recoveryOverview="Recovery includes a period of ear protection and staged follow-up to confirm healing. Temporary fullness or altered hearing can occur early after surgery. Hearing and symptom outcomes are reviewed over time as the eardrum repair matures."
      relatedConditions={[
        {
          title: 'Hearing loss',
          href: '/conditions/hearing-loss',
        },
        {
          title: 'Ear infections',
          href: '/conditions/ear-infections',
        },
        {
          title: 'Wax impaction',
          href: '/conditions/wax-impaction',
        },
      ]}
    />
  )
}
