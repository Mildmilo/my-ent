// TODO: CLINICAL REVIEW — awaiting Dr Banks sign-off (Tier C)

import type { Metadata } from 'next'
import Image from 'next/image'
import { ConditionPageTemplate } from '@/components/templates/ConditionPageTemplate'

export const metadata: Metadata = {
  title: 'Snoring and Sleep Apnoea in Children Sydney | Paediatric ENT | My-ENT',
  description:
    'Children\'s snoring and sleep apnoea information for Sydney parents — symptoms, causes, when to seek specialist review, and paediatric treatment options at My-ENT.',
}

export default function PaediatricSnoringOsaPage() {
  return (
    <ConditionPageTemplate
      title="Snoring and sleep apnoea in children"
      clinicalTerm="Paediatric obstructive sleep apnoea (OSA)"
      plainEnglishSummary="Snoring is common in children, but it is not always harmless. When a child's upper airway becomes repeatedly blocked during sleep, breathing pauses occur — this is paediatric obstructive sleep apnoea (OSA). Unlike adults, children with OSA often do not appear sleepy during the day; instead they may be restless, hyperactive, or struggling at school. Enlarged tonsils and adenoids are the most common underlying cause and can be treated."
            heroImageSlot={
        <Image
          src="/images/Conditions/paediatric-snoring-condition-myent.webp"
          alt="Paediatric ENT consultation for snoring and sleep apnoea concerns."
          width={1200}
          height={675}
          priority={true}
          className="h-full w-full object-cover"
        />
      }
      symptoms={[
        'Loud, frequent snoring most nights — not only during colds.',
        'Witnessed pauses in breathing or gasping during sleep.',
        'Restless, unsettled sleep with frequent position changes.',
        'Mouth breathing at night and sometimes during the day.',
        'Waking unrefreshed, appearing tired despite adequate hours in bed.',
        'Unusual behaviour during the day — hyperactivity, inattention, or mood changes rather than sleepiness.',
        'Bedwetting beyond the typical age, which can be associated with sleep-disordered breathing.',
        'Slow growth or poor weight gain in some younger children.',
      ]}
      causes={[
        'Enlarged tonsils and adenoids - the most common cause in children, where these tissues can grow large enough to partially or fully block the airway during sleep.',
        'Age between three and six years, when the tonsils and adenoids are at their largest relative to the size of the child\'s airway.',
        'Being overweight, which is an increasingly common contributing factor in children as well as adults.',
        'Craniofacial conditions affecting the shape of the jaw or face, or neurological conditions reducing the tone of the throat muscles, which increase the risk of sleep-disordered breathing.',
      ]}
      causesCitation="Mitchell RB et al. Clinical Practice Guideline: Tonsillectomy in Children. Otolaryngol Head Neck Surg. 2019;160(1 Suppl):S1-S42. Marcus CL et al. Pediatrics. 2012;130(3):e714-e755."
      whenToSeekHelp="Arrange specialist review if your child snores loudly on most nights, if you have witnessed breathing pauses during sleep, if your child seems excessively restless at night, or if there are concerns about behaviour, concentration, or school performance that have not resolved. Does not have to wait for episodes to become severe — earlier assessment allows more options and avoids prolonged disruption to sleep and development."
      treatmentOverview="Assessment includes a thorough ENT examination, often with nasendoscopy to assess the adenoids and upper airway, and a hearing test where fluid in the ears is present. A sleep study may be arranged to characterise the severity of breathing disruption. In most children, adenotonsillectomy — removal of both the tonsils and adenoids — significantly improves airway obstruction and sleep quality. Nasal treatment for allergy or inflammation may also be recommended. Following surgery, some children benefit from further sleep-related review to confirm resolution."
      relatedProcedures={[
        {
          title: 'Tonsillectomy',
          href: '/procedures/tonsillectomy',
        },
        {
          title: 'Adenoidectomy',
          href: '/procedures/adenoidectomy',
        },
        {
          title: 'Nasendoscopy',
          href: '/procedures/nasendoscopy',
        },
      ]}
    />
  )
}
