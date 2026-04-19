// TODO: CLINICAL REVIEW — awaiting Dr Banks sign-off.

import type { Metadata } from 'next'
import { ProcedurePageTemplate } from '@/components/templates/ProcedurePageTemplate'

export const metadata: Metadata = {
  title: 'Septoplasty and Turbinate Reduction Sydney | Nasal Airway Surgery',
  description:
    'Septoplasty and turbinate reduction information for Sydney patients, including when surgery may be considered, preparation, and practical recovery planning.',
  alternates: {
    canonical: '/procedures/septoplasty-turbinate-reduction',
  },
}

export default function SeptoplastyTurbinateReductionPage() {
  return (
    <ProcedurePageTemplate
      title="Septoplasty and turbinate reduction"
      plainEnglishSummary="Septoplasty and turbinate reduction are procedures used to improve nasal airflow when long-term blockage is linked to a deviated septum and enlarged turbinates. They are usually considered after specialist assessment and medical treatment planning."
      heroImage={{
        src: '/images/Procedures/septoplasty-turbinate-reduction-procedure-myent.webp',
        alt: 'Septoplasty and turbinate reduction procedure view focused on improving nasal airflow.',
      }}
      indications={[
        'Persistent blocked nasal breathing despite appropriate medical therapy.',
        'Septal deviation contributing to one-sided or bilateral airflow limitation.',
        'Turbinate enlargement with ongoing congestion affecting sleep or exercise tolerance.',
        'Nasal obstruction associated with recurrent sinus or pressure symptoms in selected patients.',
        'Need for improved surgical access to other planned endonasal procedures.',
      ]}
      whatToExpect="Your surgeon reviews symptoms, examination findings, and any imaging before recommending surgery. The procedure is performed through the nostrils, without external cuts. The operative plan is tailored to your anatomy and clinical goals, and postoperative nasal care is discussed before the day of surgery."
      recoveryOverview="Recovery usually includes temporary congestion, mild discomfort, and follow-up visits to support healing. Most patients are given guidance about nasal rinses, activity pacing, and when to restart normal routines. Follow-up timing and recovery milestones are individual."
      relatedConditions={[
        {
          title: 'Blocked nose',
          href: '/conditions/blocked-nose',
        },
        {
          title: 'Snoring and sleep apnoea',
          href: '/conditions/snoring-sleep-apnoea',
        },
        {
          title: 'Sinusitis',
          href: '/conditions/sinusitis',
        },
      ]}
    />
  )
}