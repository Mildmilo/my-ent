// TODO: CLINICAL REVIEW — awaiting Dr Banks sign-off (Tier C)

import type { Metadata } from 'next'
import Image from 'next/image'
import { ConditionPageTemplate } from '@/components/templates/ConditionPageTemplate'

export const metadata: Metadata = {
  title: 'Blocked Nose in Children Sydney | Paediatric ENT',
  description:
    'Nasal obstruction information for parents of children in Sydney — causes, symptoms, when to seek specialist review, and paediatric treatment options at My-ENT.',
  alternates: {
    canonical: '/conditions/paediatric-blocked-nose',
  },
}

export default function PaediatricBlockedNosePage() {
  return (
    <ConditionPageTemplate
      title="Blocked nose in children"
      clinicalTerm="Paediatric nasal obstruction"
      plainEnglishSummary="A persistently blocked nose is not uncommon in children, but when it is affecting sleep, breathing through the mouth, speech development, or day-to-day quality of life, it deserves specialist attention. The causes in children differ from adults — enlarged adenoids, allergic rhinitis, and structural nasal factors all play a role — and the right treatment depends on identifying the underlying contributors."
            heroImageSlot={
        <Image
          src="/images/Conditions/paediatric-blocked-nose-condition-myent.webp"
          alt="Child assessed for persistent blocked nose symptoms at My-ENT Sydney."
          width={1200}
          height={675}
          priority={true}
          className="h-full w-full object-cover"
        />
      }
      symptoms={[
        'Persistent mouth breathing during the day and while asleep.',
        'Snoring or noisy breathing at night.',
        'Frequent nasal congestion or clear nasal discharge not related to illness.',
        'Sniffling, nose rubbing, or an upward nose rub (allergic salute) in children with allergies.',
        'Change in the sound of the voice — muffled, hyponasal, or "blocked" quality.',
        'Restless sleep, open-mouth sleep posture, or frequent waking.',
        'Reduced appetite or difficulty eating due to difficulty breathing and swallowing simultaneously.',
        'Recurrent ear infections or hearing problems associated with Eustachian tube dysfunction.',
      ]}
      causes={[
        'Enlarged adenoids at the back of the nasal cavity blocking airflow and causing mouth breathing, snoring, and restless sleep - the most common cause in children.',
        'Hayfever or other allergies causing ongoing swelling of the nasal lining.',
        'A deviated nasal septum, which may be congenital or follow a knock to the nose, contributing to blockage in some children.',
        'A foreign body in the nose - particularly relevant in young children with a blocked nose on one side only, especially if there is an unusual smell or discharge.',
      ]}
      causesCitation="Fokkens WJ et al. EPOS 2020. Rhinology. 2020;58(Suppl S29):1-464."
      whenToSeekHelp="Arrange specialist review if your child breathes predominantly through the mouth, snores heavily, has a noticeably blocked voice, or if nasal symptoms have persisted for more than several weeks without improvement. Early review is also warranted if hearing concerns have arisen alongside nasal symptoms, if there is a history of recurrent ear infections, or if your GP has recommended an ENT opinion."
      treatmentOverview="Assessment includes a full ENT examination and typically nasendoscopy to view the adenoids and the back of the nasal airway. Allergy review and a skin prick test may be arranged where this is suspected. A hearing test is often included given the close relationship between Eustachian tube function and nasal health. Treatment is guided by the findings and may include nasal saline rinses, allergy management, nasal steroid sprays, or surgical intervention such as adenoidectomy, turbinate reduction, or septoplasty — depending on the child's age and the clinical picture."
      relatedProcedures={[
        {
          title: 'Adenoidectomy',
          href: '/procedures/adenoidectomy',
        },
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
