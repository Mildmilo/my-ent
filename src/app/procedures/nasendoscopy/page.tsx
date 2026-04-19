// TODO: CLINICAL REVIEW - awaiting Dr Banks sign-off (Tier C)

import type { Metadata } from 'next'
import { ProcedurePageTemplate } from '@/components/templates/ProcedurePageTemplate'

export const metadata: Metadata = {
  title: 'Nasendoscopy Sydney | Nasal and Throat Endoscopic Assessment',
  description:
    'Nasendoscopy information for Sydney patients, including what this in-clinic scope examination assesses and how findings guide ENT treatment plans.',
  alternates: {
    canonical: '/procedures/nasendoscopy',
  },
}

export default function NasendoscopyPage() {
  return (
    <ProcedurePageTemplate
      title="Nasendoscopy"
      plainEnglishSummary="Nasendoscopy is a scope examination of the nose and throat used to assess breathing pathways, sinus openings, voice structures, and related symptoms. It is a common ENT diagnostic procedure that helps guide clear, personalised treatment planning."
      heroImage={{
        src: '/images/Procedures/nasendoscopy-procedure-myent.webp',
        alt: 'Nasendoscopy equipment and examination setting used for ENT airway assessment.',
      }}
      indications={[
        'Persistent nasal blockage, discharge, or sinus-related symptoms.',
        'Snoring and sleep breathing concerns requiring airway assessment.',
        'Voice, throat, cough, or swallowing symptoms needing direct visualisation.',
        'One-sided nasal symptoms, bleeding, or suspected intranasal lesions.',
        'Preoperative and postoperative review for selected ENT procedures.',
      ]}
      whatToExpect="Nasendoscopy is usually performed in the consultation setting using a thin flexible or rigid endoscope. Local anaesthetic spray may be used to improve comfort. Findings are discussed immediately, including how they relate to your symptoms and whether additional tests or procedures are needed."
      recoveryOverview="Recovery is generally immediate, with most people returning to normal activity straight after the appointment. Mild temporary throat or nasal awareness can occur. Follow-up planning depends on findings and the agreed treatment pathway."
      relatedConditions={[
        {
          title: 'Blocked nose',
          href: '/conditions/blocked-nose',
        },
        {
          title: 'Post-nasal drip',
          href: '/conditions/post-nasal-drip',
        },
        {
          title: 'Voice disorders',
          href: '/conditions/voice-disorders',
        },
      ]}
    />
  )
}
