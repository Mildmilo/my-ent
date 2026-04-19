// TODO: CLINICAL REVIEW - awaiting Dr Banks sign-off (Tier C)

import type { Metadata } from 'next'
import { ProcedurePageTemplate } from '@/components/templates/ProcedurePageTemplate'

export const metadata: Metadata = {
  title: 'Snoring Surgery (UPPP) Sydney | Sleep Airway ENT Surgery',
  description:
    'Snoring surgery (UPPP) information for Sydney patients, including candidacy, preoperative airway assessment, and practical recovery expectations.',
  alternates: {
    canonical: '/procedures/snoring-surgery-uppp',
  },
}

export default function SnoringSurgeryUpppPage() {
  return (
    <ProcedurePageTemplate
      slug="snoring-surgery-uppp"
      title="Snoring surgery (UPPP)"
      plainEnglishSummary="Snoring surgery (uvulopalatopharyngoplasty, UPPP) targets selected soft palate and throat structures to address airway vibration or collapse. It is considered only after detailed sleep and airway assessment, often as part of a broader management plan."
      heroImage={{
        src: '/images/Procedures/snoring-surgery-uppp-procedure-myent.webp',
        alt: 'Snoring surgery theatre setup for upper airway and soft palate treatment.',
      }}
      indications={[
        'Snoring and sleep apnoea symptoms with confirmed upper airway involvement.',
        'Persistent symptoms after non-surgical therapies have been reviewed.',
        'Anatomical findings suggesting palatal surgery may be beneficial in selected cases.',
        'Multilevel airway plans where palatal surgery forms one component of treatment.',
        'Patients seeking structured specialist discussion about operative options.',
      ]}
      whatToExpect="Assessment usually includes sleep history, examination, and sometimes dynamic airway evaluation such as sleep endoscopy (DISE). If UPPP is recommended, the plan outlines which structures are addressed and how this fits with other therapies. Surgery is performed under general anaesthesia with detailed perioperative guidance."
      recoveryOverview="Recovery often involves sore throat, swallowing discomfort, and temporary diet modification. Follow-up focuses on healing, symptom progression, and whether additional sleep pathway management is needed. Recovery timelines and outcomes vary by airway pattern and overall treatment plan."
      relatedConditions={[
        {
          title: 'Snoring and sleep apnoea',
          href: '/conditions/snoring-sleep-apnoea',
        },
        {
          title: 'Paediatric snoring and sleep apnoea',
          href: '/conditions/paediatric-snoring-osa',
        },
        {
          title: 'Blocked nose',
          href: '/conditions/blocked-nose',
        },
      ]}
    />
  )
}
