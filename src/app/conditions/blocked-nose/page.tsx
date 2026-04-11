// TODO: CLINICAL REVIEW — awaiting Dr Banks sign-off (Tier C)

import type { Metadata } from 'next'
import Image from 'next/image'
import { ConditionPageTemplate } from '@/components/templates/ConditionPageTemplate'

const blockedNoseFaqItems = [
  {
    question: 'Can a blocked nose be caused by a deviated septum?',
    answer:
      'Yes. A deviated septum is a common structural cause of persistent blockage, especially when symptoms are more noticeable on one side. Examination and nasendoscopy help confirm whether this is a significant contributor.',
  },
  {
    question: 'Why does my nose feel more blocked at night?',
    answer:
      'Nasal blood flow and tissue swelling can increase when lying down, which can worsen congestion overnight. Coexisting allergy, inflammation, or structural narrowing may make this more pronounced.',
  },
  {
    question: 'Will medicated nasal sprays fix every blocked nose problem?',
    answer:
      'Nasal sprays can be very effective for inflammatory causes, but they do not correct every structural issue. Treatment depends on identifying the main cause, which is why specialist assessment is useful when symptoms persist.',
  },
  {
    question: 'When is surgery considered for nasal obstruction?',
    answer:
      'Surgery is considered for selected patients when a structural cause is confirmed and symptoms remain significant despite appropriate conservative care. The decision is individualized after examination and discussion of options.',
  },
  {
    question: 'Can allergies cause an ongoing blocked nose?',
    answer:
      'Yes. Hayfever and perennial allergic rhinitis are common contributors to intermittent or persistent nasal blockage. Allergy management, correct nasal spray technique, and reducing known triggers can make a meaningful difference, and specialist assessment helps clarify whether allergy is playing a significant role in your case.',
  },
  {
    question: 'Will every surgeon at My-ENT approach my condition the same way?',
    answer:
      'Individual surgeons within My-ENT may approach assessment and management differently based on their subspecialty training and clinical experience. Your surgeon will discuss the most appropriate pathway for your specific situation at your consultation.',
  },
]

export const metadata: Metadata = {
  title: 'Blocked Nose Treatment Sydney | Nasal Obstruction | My-ENT',
  description:
    'Blocked nose and nasal obstruction information for Sydney patients, including common causes, when to seek specialist review, and treatment pathways at My-ENT.',
}

export default function BlockedNosePage() {
  return (
    <ConditionPageTemplate
      title="Blocked Nose"
      clinicalTerm="Nasal Obstruction"
      plainEnglishSummary="A persistently blocked nose (nasal obstruction) is one of the most common reasons patients seek ENT review. Blockage can affect one or both sides and may be structural, inflammatory, or a combination of both. Understanding the cause is the first step towards effective management."
            heroImageSlot={
        <Image
          src="/images/Conditions/blocked-nose-condition-myent.webp"
          alt="Patient with blocked nose symptoms during ENT consultation at My-ENT Sydney."
          width={1200}
          height={675}
          priority={true}
          className="h-full w-full object-cover"
        />
      }
      symptoms={[
        'Difficulty breathing through one or both nostrils, at rest or during exercise.',
        'Mouth breathing, particularly during sleep.',
        'Snoring or disrupted sleep related to nasal blockage.',
        'Reduced or altered sense of smell.',
        'Sensation of facial pressure or heaviness that worsens with congestion.',
        'Recurrent colds that seem to take longer to resolve than expected.',
      ]}
      causes={[
        'A deviated nasal septum - where the central dividing wall of the nose sits off-centre - is one of the most common structural causes.',
        'Swelling of the turbinates, the soft tissue structures inside the nose that warm and filter incoming air.',
        'Hayfever or perennial allergic rhinitis causing intermittent or persistent congestion.',
        'Nasal polyps, which can grow silently and cause progressive obstruction before other symptoms appear.',
        'Enlarged adenoids - particularly in children, where adenoid hypertrophy is one of the most frequent causes of persistent nasal blockage.',
      ]}
      causesCitation="Fokkens WJ et al. EPOS 2020. Rhinology. 2020;58(Suppl S29):1-464."
      whenToSeekHelp="Arrange specialist review if nasal blockage is affecting sleep, breathing comfortably during daily activities, or has been persistent for several weeks without a clear cause. A nasendoscopy can usually identify the cause during a single clinic visit and guide management from there."
      treatmentOverview="Treatment is directed at the underlying cause. Many patients respond well to medical management, including nasal sprays and allergy care. Where a structural cause such as a deviated septum or enlarged turbinates is identified, septoplasty or turbinate reduction may be discussed after conservative measures. Nasal polyps, where present, are assessed and treated as a separate condition."
      sinusQuestionnaireCalloutHeading="Prepare for your appointment."
      relatedProcedures={[
        {
          title: 'Septoplasty and turbinate reduction',
          href: '/procedures/septoplasty-turbinate-reduction',
        },
        {
          title: 'Nasendoscopy',
          href: '/procedures/nasendoscopy',
        },
      ]}
      faqItems={blockedNoseFaqItems}
    />
  )
}
