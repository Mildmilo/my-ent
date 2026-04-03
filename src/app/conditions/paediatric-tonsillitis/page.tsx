// TODO: CLINICAL REVIEW — awaiting Dr Banks sign-off (Tier C)

import type { Metadata } from 'next'
import Image from 'next/image'
import { ConditionPageTemplate } from '@/components/templates/ConditionPageTemplate'

export const metadata: Metadata = {
  title: 'Tonsillitis in Children Sydney | Paediatric ENT | My-ENT',
  description:
    'Tonsillitis information for parents of children in Sydney — symptoms, causes, when specialist review is needed, and treatment options including tonsillectomy at My-ENT.',
}

export default function PaediatricTonsillitisPage() {
  return (
    <ConditionPageTemplate
      title="Tonsillitis in children"
      clinicalTerm="Paediatric recurrent and chronic tonsillitis"
      plainEnglishSummary="Tonsillitis is one of the most common reasons children see a doctor. For most children, episodes are infrequent and settle with rest and simple treatment. When episodes become frequent, severe, or are disrupting sleep, school attendance, and day-to-day life, specialist ENT review is worthwhile. Tonsillectomy is one of the most commonly performed paediatric surgical procedures and can significantly reduce the burden of recurrent illness."
            heroImageSlot={
        <Image
          src="/images/Conditions/paediatric-tonsillitis-condition-myent.webp"
          alt="Child reviewed for recurrent tonsillitis in paediatric ENT clinic."
          width={1200}
          height={675}
          priority={true}
          className="h-full w-full object-cover"
        />
      }
      symptoms={[
        'Sore throat that comes on quickly and makes swallowing painful.',
        'Fever, chills, and general fatigue — particularly with bacterial infection.',
        'White or yellow patches on visibly enlarged, red tonsils.',
        'Swollen and tender lymph nodes in the neck.',
        'Bad breath and a muffled quality to the voice when tonsils are very enlarged.',
        'Recurrent episodes causing repeated absences from school or childcare.',
        'Snoring or noisy breathing, especially when enlarged tonsils are present.',
      ]}
      causes={[
        'A viral infection - the cause in the majority of cases in children.',
        'Bacterial infection with Group A Streptococcus, which is important to identify and treat with antibiotics to prevent rare but serious complications.',
        'Regular close contact with other children in school and childcare settings, explaining why tonsillitis clusters in school-age children.',
        'Glandular fever caused by the Epstein-Barr virus, which should be considered in older children and teenagers with a severe or prolonged episode.',
      ]}
      causesCitation="Scottish Intercollegiate Guidelines Network (SIGN). Guideline 117. 2010, updated 2019."
      whenToSeekHelp="Seek specialist review if your child is experiencing seven or more episodes of tonsillitis in a year, five or more in each of the past two years, or three or more in each of the past three years. Review is also warranted when episodes involve very difficult swallowing, breathing difficulty, or suspected peritonsillar abscess. Enlarged tonsils affect sleep and airway, so please seek early review if your child snores heavily or pauses in breathing while asleep."
      treatmentOverview="Bacterial tonsillitis is treated with antibiotics. Viral episodes are managed with rest, adequate hydration, and pain relief appropriate for the child's age and weight. When episodes meet criteria for recurrence, or when enlarged tonsils are affecting sleep or breathing, tonsillectomy may be recommended following specialist assessment. The decision considers the pattern of illness, its impact on the child's health and schooling, and family circumstances. Adenoidectomy may be performed at the same time where there is a clinical indication."
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
