// TODO: CLINICAL REVIEW - awaiting Dr Banks sign-off (Tier C)

import type { Metadata } from 'next'
import { ProcedurePageTemplate } from '@/components/templates/ProcedurePageTemplate'

export const metadata: Metadata = {
  title: 'Tonsillectomy Sydney | ENT Throat Surgery | My-ENT',
  description:
    'Tonsillectomy information for Sydney patients and families, including when surgery may be discussed, perioperative planning, and expected recovery stages.',
}

export default function TonsillectomyPage() {
  return (
    <ProcedurePageTemplate
      title="Tonsillectomy"
      plainEnglishSummary="Tonsillectomy is surgery to remove the tonsils. It may be discussed for recurrent tonsillitis, significant sleep-disordered breathing, or other persistent tonsil-related problems after ENT specialist assessment."
      heroImage={{
        src: '/images/Procedures/tonsillectomy-procedure-myent.webp',
        alt: 'Tonsillectomy procedure setting prepared for throat surgery and airway care.',
      }}
      indications={[
        'Repeated tonsillitis episodes affecting school, work, or quality of life.',
        'Sleep-related breathing symptoms linked to enlarged tonsils.',
        'Persistent tonsil discomfort or infection despite structured treatment.',
        'Complications of tonsil disease where surgery is clinically appropriate.',
        'Combined airway surgery planning in selected paediatric or adult cases.',
      ]}
      whatToExpect="Your surgeon reviews your infection history, sleep or airway symptoms, and examination findings before recommending surgery. Tonsillectomy is performed under general anaesthesia, and day-stay or overnight planning depends on age and clinical factors. You receive clear instructions about fasting, pain management, and hydration goals."
      recoveryOverview="Recovery often involves throat pain over one to two weeks, with gradual return to eating and usual activity. Maintaining fluids and following pain plans are important. Patients and families are given clear guidance on normal healing and urgent warning signs that need immediate review."
      relatedConditions={[
        {
          title: 'Tonsillitis',
          href: '/conditions/tonsillitis',
        },
        {
          title: 'Paediatric tonsillitis',
          href: '/conditions/paediatric-tonsillitis',
        },
        {
          title: 'Snoring and sleep apnoea',
          href: '/conditions/snoring-sleep-apnoea',
        },
      ]}
    />
  )
}
