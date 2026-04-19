// TODO: CLINICAL REVIEW — awaiting Dr Banks sign-off (Tier C)

import type { Metadata } from 'next'
import Image from 'next/image'
import { ConditionPageTemplate } from '@/components/templates/ConditionPageTemplate'

export const metadata: Metadata = {
  title: 'Snoring and Sleep Apnoea Sydney | Sleep Specialist ENT',
  description:
    'Snoring and sleep apnoea information for Sydney patients — symptoms, causes, when to seek specialist review, and treatment options at My-ENT.',
  alternates: {
    canonical: '/conditions/snoring-sleep-apnoea',
  },
}

export default function SnoringAndSleepApnoeaPage() {
  return (
    <ConditionPageTemplate
      title="Snoring and sleep apnoea"
      clinicalTerm="Obstructive sleep apnoea (OSA)"
      plainEnglishSummary="Snoring is caused by partial obstruction of the upper airway during sleep. Obstructive sleep apnoea (OSA) occurs when this obstruction becomes complete, causing breathing to stop repeatedly through the night. Both conditions disrupt sleep quality and can have broader effects on energy, concentration, and health over time."
            heroImageSlot={
        <Image
          src="/images/Conditions/snoring-sleep-apnoea-condition-myent.webp"
          alt="ENT consultation for snoring and sleep apnoea symptoms at My-ENT Sydney."
          width={1200}
          height={675}
          priority={true}
          className="h-full w-full object-cover"
        />
      }
      symptoms={[
        'Loud or persistent snoring noticed by a bed partner.',
        'Witnessed pauses in breathing during sleep.',
        'Waking with a gasp, choking sensation, or dry mouth.',
        'Unrefreshing sleep despite adequate hours in bed.',
        'Excessive daytime sleepiness or difficulty staying alert.',
        'Morning headaches and difficulty concentrating.',
        'Mood changes, irritability, or low motivation attributed to poor sleep.',
      ]}
      causes={[
        'The soft tissues at the back of the throat - soft palate, uvula, tongue base - vibrating as airflow is restricted during sleep.',
        'Being overweight, which is the most significant changeable risk factor as excess soft tissue around the neck reduces the airway.',
        'Alcohol and sedative medications relaxing the throat muscles and worsening both snoring and sleep apnoea.',
        'Structural factors including enlarged tonsils, a large tongue base, or a narrow jaw, which may be amenable to treatment in appropriate patients.',
        'OSA is significantly more prevalent in men, though the risk in women increases after menopause.',
      ]}
      causesCitation="Kapur VK et al. Clinical Practice Guideline for Diagnostic Testing for Adult Obstructive Sleep Apnea. J Clin Sleep Med. 2017;13(3):479-504."
      whenToSeekHelp="Seek specialist review if snoring is significantly disrupting you or your partner, if you wake unrefreshed most mornings, or if anyone has witnessed you stopping breathing during sleep. OSA that is left unmanaged can affect cardiovascular health, blood pressure, and concentration over the longer term — early assessment is worthwhile."
      treatmentOverview="Assessment typically begins with a sleep study to characterise the nature and severity of sleep-disordered breathing. Treatment is tailored to the individual and may include continuous positive airway pressure (CPAP), weight management, positional therapy, dental devices, or surgical options. Sleep endoscopy (DISE) allows assessment of where and how the airway collapses during sleep, which helps guide surgical planning. Procedures such as palate surgery or nasal surgery may be appropriate for selected patients following specialist evaluation."
      relatedProcedures={[
        {
          title: 'Sleep endoscopy (DISE)',
          href: '/procedures/sleep-endoscopy-dise',
        },
        {
          title: 'Snoring surgery (UPPP)',
          href: '/procedures/snoring-surgery-uppp',
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
