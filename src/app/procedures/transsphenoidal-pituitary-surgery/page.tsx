// TODO: CLINICAL REVIEW — awaiting Dr Banks sign-off.

import type { Metadata } from 'next'
import { ProcedurePageTemplate } from '@/components/templates/ProcedurePageTemplate'

export const metadata: Metadata = {
  title: 'Transsphenoidal Pituitary Surgery Sydney | Endoscopic Skull Base',
  description:
    'Transsphenoidal pituitary surgery information for Sydney patients, including team-based planning, surgical pathway details, and follow-up expectations.',
  alternates: {
    canonical: '/procedures/transsphenoidal-pituitary-surgery',
  },
}

export default function TranssphenoidalPituitarySurgeryPage() {
  return (
    <ProcedurePageTemplate
      title="Transsphenoidal pituitary surgery"
      plainEnglishSummary="Transsphenoidal pituitary surgery is an endoscopic approach through the nose to access selected pituitary lesions. It is planned jointly by ENT and neurosurgical teams, with treatment decisions guided by imaging, endocrine assessment, and the broader clinical picture."
      heroImage={{
        src: '/images/Procedures/transsphenoidal-pituitary-surgery-procedure-myent.webp',
        alt: 'Transsphenoidal pituitary surgery view representing endoscopic access through the nose.',
      }}
      indications={[
        'Selected pituitary lesions identified on specialist imaging and endocrine review.',
        'Symptoms or functional concerns linked to pituitary mass effect in appropriate cases.',
        'Cases where minimally invasive transnasal access is considered suitable by the team.',
        'Need for tissue diagnosis or decompression as part of multidisciplinary management.',
        'Situations where combined ENT-neurosurgical planning supports this approach.',
      ]}
      whatToExpect="Preoperative planning typically includes imaging, blood tests, and coordinated specialist review. The surgery is performed endoscopically via the nasal passages with no external facial incisions. The operative approach, potential risks, and hospital planning are discussed carefully before treatment."
      recoveryOverview="Hospital and home recovery plans are individual and coordinated with surgical and endocrine teams. Follow-up may include endoscopic nasal review, endocrine monitoring, and repeat imaging where indicated. Patients receive practical guidance about activity, nasal care, and escalation pathways for concerns."
      relatedConditions={[
        {
          title: 'Skull base conditions',
          href: '/conditions/skull-base-conditions',
        },
        {
          title: 'Blocked nose',
          href: '/conditions/blocked-nose',
        },
      ]}
    />
  )
}
