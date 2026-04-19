// TODO: CLINICAL REVIEW — awaiting Dr Banks sign-off.

import type { Metadata } from 'next'
import { ProcedurePageTemplate } from '@/components/templates/ProcedurePageTemplate'

export const metadata: Metadata = {
  title: 'Skull Base Surgery Sydney | Endoscopic ENT-Neurosurgical Care',
  description:
    'Skull base surgery information for Sydney patients, including multidisciplinary assessment, procedural planning, and coordinated recovery follow-up.',
  alternates: {
    canonical: '/procedures/skull-base-surgery',
  },
}

export default function SkullBaseSurgeryPage() {
  return (
    <ProcedurePageTemplate
      title="Skull base surgery"
      plainEnglishSummary="Skull base surgery covers procedures for selected lesions at the interface of the nose, sinuses, orbit, and brain base. Treatment planning is multidisciplinary, often involving ENT, neurosurgery, and other specialist teams to match the approach to the condition and patient needs."
      heroImage={{
        src: '/images/Procedures/skull-base-surgery-procedure-myent.webp',
        alt: 'Skull base surgery operating environment for complex endoscopic ENT care.',
      }}
      indications={[
        'Sinonasal or skull base lesions requiring specialist endoscopic assessment.',
        'Conditions where disease extends near critical orbital or intracranial structures.',
        'Selected pituitary or anterior skull base pathways requiring collaborative planning.',
        'Complex recurrent disease after prior surgery or treatment elsewhere.',
        'Cases where multidisciplinary review supports a skull base operative approach.',
      ]}
      whatToExpect="Patients undergo detailed consultation, imaging review, and multidisciplinary discussion to decide whether surgery is suitable. The operative plan, expected hospital stay, and follow-up sequence are explained in plain language. Depending on the condition, surgery may be undertaken with co-surgeons from neurosurgery or related specialties."
      recoveryOverview="Recovery varies significantly depending on diagnosis and operative extent. Patients are monitored closely, with structured outpatient follow-up, endoscopic review, and coordinated care across involved specialties. Return-to-activity timing is tailored to the individual pathway."
      relatedConditions={[
        {
          title: 'Skull base conditions',
          href: '/conditions/skull-base-conditions',
        },
        {
          title: 'Nasal polyps',
          href: '/conditions/nasal-polyps',
        },
        {
          title: 'Sinusitis',
          href: '/conditions/sinusitis',
        },
      ]}
    />
  )
}
