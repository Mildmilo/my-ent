// TODO: CLINICAL REVIEW - awaiting Dr Banks sign-off (Tier C)

import type { Metadata } from 'next'
import { ProcedurePageTemplate } from '@/components/templates/ProcedurePageTemplate'

export const metadata: Metadata = {
  title: 'Sleep Endoscopy (DISE) Sydney | Snoring and Sleep Apnoea Assessment',
  description:
    'Sleep endoscopy (DISE) information for Sydney patients, including why this airway assessment is used and how it supports personalised treatment planning.',
  alternates: {
    canonical: '/procedures/sleep-endoscopy-dise',
  },
}

export default function SleepEndoscopyDisePage() {
  return (
    <ProcedurePageTemplate
      slug="sleep-endoscopy-dise"
      title="Sleep endoscopy (DISE)"
      plainEnglishSummary="Sleep endoscopy (drug-induced sleep endoscopy, DISE) is a dynamic airway assessment performed under sedation. It helps identify where airway narrowing occurs during sleep-like conditions and supports personalised planning for snoring and sleep apnoea management."
      // TODO: INSERT hero image - sleep-endoscopy-dise-hero-sydney.webp
      indications={[
        'Snoring and sleep apnoea pathways where airway collapse level is unclear.',
        'Preoperative planning before targeted sleep surgery in selected patients.',
        'Review of persistent symptoms after prior sleep-related treatment.',
        'Cases requiring individualised mapping of multilevel airway obstruction.',
        'Specialist assessment to guide whether surgery is appropriate and where.',
      ]}
      whatToExpect="DISE is typically done as a day procedure with monitored sedation. A flexible endoscope is used to assess airway behaviour in a controlled setting, and findings are discussed alongside your broader clinical history. The goal is to improve treatment matching rather than to provide treatment on its own."
      recoveryOverview="Most patients recover quickly from sedation, with same-day discharge in routine cases. Follow-up focuses on explaining findings and integrating them into a practical management plan, which may include non-surgical therapies, surgery, or combined approaches."
      relatedConditions={[
        {
          title: 'Snoring and sleep apnoea',
          href: '/conditions/snoring-sleep-apnoea',
        },
        {
          title: 'Blocked nose',
          href: '/conditions/blocked-nose',
        },
      ]}
    />
  )
}
