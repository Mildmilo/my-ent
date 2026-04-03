// TODO: CLINICAL REVIEW — awaiting Dr Banks sign-off (Tier C)

import type { Metadata } from 'next'
import Image from 'next/image'
import { ConditionPageTemplate } from '@/components/templates/ConditionPageTemplate'

export const metadata: Metadata = {
  title: 'Vertigo and Dizziness Assessment Sydney | ENT Review | My-ENT',
  description:
    'Vertigo and dizziness information for Sydney patients, including key symptoms, warning signs, and specialist assessment pathways at My-ENT.',
}

export default function VertigoDizzinessPage() {
  return (
    <ConditionPageTemplate
      title="Vertigo and dizziness"
      clinicalTerm="Vestibular disorders"
      plainEnglishSummary="Vertigo and dizziness are common symptoms with many possible causes, including inner-ear conditions. Some people describe spinning, while others feel unsteady or off balance. ENT assessment helps determine whether symptoms are ear-related and what further management is appropriate."
            heroImageSlot={
        <Image
          src="/images/Conditions/vertigo-dizziness-condition-myent.webp"
          alt="Specialist consultation for vertigo and dizziness symptoms at My-ENT Sydney."
          width={1200}
          height={675}
          priority={true}
          className="h-full w-full object-cover"
        />
      }
      symptoms={[
        'A spinning sensation (vertigo), especially with head movement or position changes.',
        'Feeling unsteady, lightheaded, or off balance during daily activities.',
        'Nausea or motion sensitivity during episodes.',
        'Associated hearing symptoms such as muffled hearing, tinnitus, or ear fullness.',
        'Episodes that recur or cause concern about falls and safety.',
      ]}
      causes={[
        'BPPV (benign paroxysmal positional vertigo) - tiny crystals in the balance organ of the inner ear shifting out of place, causing brief intense spinning triggered by head movement such as rolling over in bed.',
        'A viral illness affecting the balance nerve, producing a prolonged episode of severe dizziness that typically improves over days to weeks as the brain adjusts.',
        'Meniere\'s disease causing recurring attacks of vertigo lasting between twenty minutes and several hours, accompanied by ringing in the ear and fluctuating hearing loss.',
        'Less commonly, a central cause arising from the brain or brainstem - important to exclude in patients with accompanying neurological symptoms such as double vision, weakness, or difficulty speaking.',
      ]}
      causesCitation="Bhattacharyya N et al. Clinical Practice Guideline: Benign Paroxysmal Positional Vertigo. Otolaryngol Head Neck Surg. 2017;156(3 Suppl):S1-S47. NICE guideline CG124. 2014."
      whenToSeekHelp="Seek medical review if vertigo is severe, recurrent, associated with hearing change, or affecting safe mobility. Emergency assessment is recommended for sudden neurological symptoms such as weakness, facial droop, severe headache, chest pain, or new speech difficulty."
      treatmentOverview="Treatment depends on the diagnosed cause and may include repositioning manoeuvres, vestibular exercises, medication strategies, hearing evaluation, and coordinated care with allied health or other specialists. A structured plan aims to reduce episode frequency and improve day-to-day stability."
      relatedProcedures={[
        {
          title: 'Nasendoscopy',
          href: '/procedures/nasendoscopy',
        },
        {
          title: 'Myringoplasty',
          href: '/procedures/myringoplasty',
        },
      ]}
    />
  )
}