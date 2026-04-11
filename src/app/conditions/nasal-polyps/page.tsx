// TODO: CLINICAL REVIEW - awaiting Dr Banks sign-off (Tier C)

import type { Metadata } from 'next'
import Image from 'next/image'
import { ConditionPageTemplate } from '@/components/templates/ConditionPageTemplate'

const nasalPolypsFaqItems = [
  {
    question: 'Are nasal polyps cancerous?',
    answer:
      'Nasal polyps are usually benign inflammatory swellings. They are not typically cancerous, but persistent unilateral symptoms or unusual findings still require specialist assessment to confirm the diagnosis and exclude other causes.',
  },
  {
    question: 'Why has my sense of smell changed with nasal polyps?',
    answer:
      'Polyps can physically obstruct airflow to the smell area high in the nasal cavity, and underlying inflammation can further reduce smell function. Improvement varies between patients and depends on disease severity and treatment response.',
  },
  {
    question: 'Can nasal polyps come back after treatment?',
    answer:
      'They can recur in some patients because polyps are linked to ongoing inflammatory disease. Long-term follow-up and maintenance treatment are often important, even after initial symptom improvement.',
  },
  {
    question: 'Do allergy tablets alone treat nasal polyps?',
    answer:
      'Not usually. Allergy management may help if allergy coexists, but polyps often need a broader plan that can include nasal therapies, endoscopic assessment, and occasionally surgery depending on symptom burden.',
  },
  {
    question: 'Will every surgeon at My-ENT approach my condition the same way?',
    answer:
      'Individual surgeons within My-ENT may approach assessment and management differently based on their subspecialty training and clinical experience. Your surgeon will discuss the most appropriate pathway for your specific situation at your consultation.',
  },
]

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
      faqItems={nasalPolypsFaqItems}
    />
  )
}