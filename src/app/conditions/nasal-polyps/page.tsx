// TODO: CLINICAL REVIEW - awaiting Dr Banks sign-off (Tier C)

import type { Metadata } from 'next'
import Image from 'next/image'
import { ConditionPageTemplate } from '@/components/templates/ConditionPageTemplate'

export const metadata: Metadata = {
  title: 'Nasal Polyps Treatment Sydney | ENT Specialist | My-ENT',
  description:
    'Nasal polyps information for Sydney patients, covering symptoms, specialist review timing, and treatment pathways including medical care and ESS.',
}

export default function NasalPolypsPage() {
  return (
    <ConditionPageTemplate
      title="Nasal polyps"
      clinicalTerm="Chronic rhinosinusitis with nasal polyps"
      plainEnglishSummary="Nasal polyps are soft, non-cancerous swellings in the lining of the nose and sinuses. They can block airflow, affect smell, and contribute to long-standing sinus symptoms. A specialist review helps confirm the diagnosis and build a treatment plan that fits your symptoms and history."
      heroImageSlot={
        <Image
          src="/images/Conditions/nasal-polyps-condition-myent.webp"
          alt="Specialist review for nasal polyps at My-ENT Sydney."
          width={1200}
          height={675}
          priority={true}
          className="h-full w-full object-cover"
        />
      }
      symptoms={[
        'Persistent blocked nose on one or both sides.',
        'Reduced or absent sense of smell and taste.',
        'Ongoing post-nasal drip or thick mucus.',
        'Facial pressure, congestion, or frequent sinus flare-ups.',
        'Snoring or disturbed sleep related to nasal obstruction.',
      ]}
      causes={[
        'Prolonged inflammation of the nasal and sinus lining, most commonly associated with a specific pattern of immune response called type 2 eosinophilic inflammation.',
        'Coexisting asthma, particularly in adults - a significant proportion of patients with polyps also have asthma.',
        'Sensitivity to aspirin or anti-inflammatory medications in some patients - this triad of polyps, asthma, and aspirin sensitivity is a recognised clinical pattern.',
        'Allergy may be present in some patients but is not the cause of polyp formation.',
        'In children, nasal polyps are uncommon and may be associated with cystic fibrosis, which should always be investigated.',
      ]}
      causesCitation="Fokkens WJ et al. EPOS 2020. Rhinology. 2020;58(Suppl S29):1-464."
      whenToSeekHelp="Seek specialist review when blockage and smell loss are ongoing, when symptoms continue despite GP treatment, or when symptoms repeatedly return. Assessment can clarify whether polyps are present and whether further medical therapy, endoscopic assessment, or surgical discussion is appropriate."
      treatmentOverview="Treatment usually starts with medical management to reduce inflammation and improve nasal airflow. Endoscopic assessment may be used to map disease extent. For selected patients with persistent symptoms or recurrent obstruction, endoscopic sinus surgery (ESS) can be discussed as one part of long-term care planning."
      sinusQuestionnaireCalloutHeading="Prepare for your appointment."
      relatedProcedures={[
        {
          title: 'Endoscopic sinus surgery (ESS)',
          href: '/procedures/endoscopic-sinus-surgery',
        },
        {
          title: 'Nasendoscopy',
          href: '/procedures/nasendoscopy',
        },
      ]}
    />
  )
}