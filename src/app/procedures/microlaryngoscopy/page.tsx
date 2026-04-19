// TODO: CLINICAL REVIEW - awaiting Dr Banks sign-off (Tier C)

import type { Metadata } from 'next'
import { ProcedurePageTemplate } from '@/components/templates/ProcedurePageTemplate'

export const metadata: Metadata = {
  title: 'Microlaryngoscopy Sydney | Voice and Throat Procedure',
  description:
    'Microlaryngoscopy information for Sydney patients, including indications for laryngeal assessment and treatment, perioperative planning, and follow-up care.',
  alternates: {
    canonical: '/procedures/microlaryngoscopy',
  },
}

export default function MicrolaryngoscopyPage() {
  return (
    <ProcedurePageTemplate
      title="Microlaryngoscopy"
      plainEnglishSummary="Microlaryngoscopy is a procedure that allows detailed examination and treatment of the voice box (larynx) under anaesthesia. It may be used to investigate persistent voice change, throat symptoms, or selected laryngeal lesions after specialist assessment."
      heroImage={{
        src: '/images/Procedures/microlaryngoscopy-procedure-myent.webp',
        alt: 'Microlaryngoscopy theatre setup for close examination of the voice box.',
      }}
      indications={[
        'Persistent hoarseness or voice change requiring direct laryngeal assessment.',
        'Laryngeal lesions needing biopsy or treatment in a controlled operative setting.',
        'Throat symptoms where clinic examination is limited or inconclusive.',
        'Need for precise diagnosis to guide further voice or airway management.',
        'Selected swallowing or airway complaints linked to laryngeal pathology.',
      ]}
      whatToExpect="Before surgery, your surgeon reviews symptoms, prior examinations, and treatment history. The larynx is examined under magnification using specialised instruments, and additional treatment may be performed if indicated and consented. Perioperative instructions include fasting, medication review, and voice-care planning."
      recoveryOverview="Recovery depends on the procedure performed and may include temporary throat discomfort or voice rest advice. Follow-up review focuses on pathology findings where relevant, symptom progression, and next-step voice or throat management."
      relatedConditions={[
        {
          title: 'Voice disorders',
          href: '/conditions/voice-disorders',
        },
        {
          title: 'Swallowing problems',
          href: '/conditions/swallowing-problems',
        },
        {
          title: 'Reflux (LPR)',
          href: '/conditions/reflux-lpr',
        },
      ]}
    />
  )
}
