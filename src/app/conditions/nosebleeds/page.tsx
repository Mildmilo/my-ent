// TODO: CLINICAL REVIEW — awaiting Dr Banks sign-off (Tier C)

import type { Metadata } from 'next'
import Image from 'next/image'
import { ConditionPageTemplate } from '@/components/templates/ConditionPageTemplate'

export const metadata: Metadata = {
  title: 'Nosebleeds Treatment Sydney | Epistaxis Specialist',
  description:
    'Nosebleed and epistaxis information for Sydney patients, including common causes, when to seek specialist review, and treatment pathways at My-ENT.',
  alternates: {
    canonical: '/conditions/nosebleeds',
  },
}

export default function NosebleedsPage() {
  return (
    <ConditionPageTemplate
      title="Nosebleeds"
      clinicalTerm="Epistaxis"
      plainEnglishSummary="Most nosebleeds (epistaxis) are brief and settle without specialist care. When bleeding is frequent, heavy, or not responding to simple first aid, ENT review can identify the underlying cause and guide appropriate management. In most cases, a clear explanation is found and a practical plan can be put in place."
            heroImageSlot={
        <Image
          src="/images/Conditions/nosebleeds-condition-myent.webp"
          alt="ENT consultation for recurrent nosebleeds at My-ENT Sydney."
          width={1200}
          height={675}
          priority={true}
          className="h-full w-full object-cover"
        />
      }
      symptoms={[
        'Bleeding from one or both nostrils, either spontaneous or triggered by nose blowing or minor contact.',
        'Bleeding that takes longer than 15 to 20 minutes to settle with sustained direct pressure.',
        'Recurrent episodes occurring several times per week or month.',
        'Heavier bleeding than expected, or bleeding that is difficult to control at home.',
        'Associated nasal blockage, crusting, or structural symptoms that suggest an underlying cause.',
      ]}
      causes={[
        'Dry air or low humidity making the nasal lining fragile and prone to minor bleeding.',
        'Nose picking, particularly in children - the most common direct cause of nosebleeds in younger patients.',
        'Hayfever, sinus infections, or other nasal inflammation increasing the fragility of nasal blood vessels.',
        'Blood-thinning medications including aspirin, warfarin, and newer anticoagulants making nosebleeds harder to stop once started.',
        'Less commonly, a bleeding disorder or vascular abnormality such as hereditary haemorrhagic telangiectasia - relevant when nosebleeds are recurrent, heavy, or difficult to control.',
      ]}
      causesCitation="Tunkel DE et al. Clinical Practice Guideline: Nosebleed (Epistaxis). Otolaryngol Head Neck Surg. 2020;162(1 Suppl):S1-S38."
      whenToSeekHelp="Arrange specialist review for frequent or heavy nosebleeds, bleeding that does not settle with sustained direct pressure applied for 15 to 20 minutes, or nosebleeds occurring alongside other nasal symptoms such as blockage or crusting. Patients on anticoagulant or antiplatelet therapy with recurrent epistaxis should be reviewed early."
      treatmentOverview="Assessment typically includes a nasendoscopy to examine the nasal lining and identify any obvious bleeding point, polyp, or other findings. Management depends on the cause and may include nasal cauterisation to treat a visible bleeding vessel, targeted treatment of an underlying inflammatory or structural condition, or coordination with the treating physician where medications are contributing to bleeding frequency."
      relatedProcedures={[
        {
          title: 'Nasendoscopy',
          href: '/procedures/nasendoscopy',
        },
      ]}
    />
  )
}
