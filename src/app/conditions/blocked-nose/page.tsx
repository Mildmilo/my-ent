// TODO: CLINICAL REVIEW — awaiting Dr Banks sign-off (Tier C)

import type { Metadata } from 'next'
import Image from 'next/image'
import { ConditionPageTemplate } from '@/components/templates/ConditionPageTemplate'

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
    />
  )
}
