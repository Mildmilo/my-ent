// TODO: CLINICAL REVIEW — awaiting Dr Banks sign-off (Tier C)

import type { Metadata } from 'next'
import Image from 'next/image'
import { ConditionPageTemplate } from '@/components/templates/ConditionPageTemplate'

const tinnitusFaqItems = [
  {
    question: 'Is tinnitus a sign that I am going deaf?',
    answer:
      'Not always. Tinnitus can occur with or without measurable hearing loss. A hearing assessment helps clarify whether hearing changes are present and whether they are likely contributing to your symptoms.',
  },
  {
    question: 'Why is tinnitus often worse at night?',
    answer:
      'Tinnitus can feel louder in quiet environments because there is less external sound competing for attention. Fatigue and stress can also make the sound more intrusive at the end of the day.',
  },
  {
    question: 'When should tinnitus be reviewed urgently?',
    answer:
      'Urgent review is important if tinnitus starts suddenly with hearing loss, is pulsatile in time with your heartbeat, or is accompanied by severe dizziness or neurological symptoms.',
  },
  {
    question: 'Can tinnitus be managed even if it does not fully disappear?',
    answer:
      'Yes. Many patients improve with targeted management that addresses hearing status, triggers, sleep impact, and coping strategies. The goal is to reduce symptom burden and improve daily function.',
  },
  {
    question: 'Will every surgeon at My-ENT approach my condition the same way?',
    answer:
      'Individual surgeons within My-ENT may approach assessment and management differently based on their subspecialty training and clinical experience. Your surgeon will discuss the most appropriate pathway for your specific situation at your consultation.',
  },
]

export const metadata: Metadata = {
  title: 'Tinnitus Specialist Sydney | Ringing in Ears | My-ENT',
  description:
    'Tinnitus information for Sydney patients, including common triggers, assessment steps, and practical management pathways through specialist ENT review.',
}

export default function TinnitusPage() {
  return (
    <ConditionPageTemplate
      title="Tinnitus"
      clinicalTerm="Subjective tinnitus"
      plainEnglishSummary="Tinnitus is the perception of sound such as ringing, buzzing, hissing, or pulsation when no external sound is present. It may be constant or intermittent and can vary in intensity. Assessment focuses on identifying possible causes and reducing day-to-day impact."
            heroImageSlot={
        <Image
          src="/images/Conditions/tinnitus-condition-myent.webp"
          alt="ENT consultation for tinnitus and persistent ear noise symptoms."
          width={1200}
          height={675}
          priority={true}
          className="h-full w-full object-cover"
        />
      }
      symptoms={[
        'Ringing, buzzing, humming, or hissing heard in one ear, both ears, or the head.',
        'Symptoms that are worse in quiet settings or at night.',
        'Difficulty concentrating, sleeping, or relaxing due to persistent sound awareness.',
        'Association with hearing changes or sound sensitivity in some patients.',
        'Pulsatile tinnitus (sound in time with heartbeat), which needs targeted assessment.',
      ]}
      causes={[
        'Some degree of hearing change - even subtle and not yet noticeable in everyday life - triggering increased sensitivity in the auditory system that produces an internal sound signal.',
        'Noise exposure over time, which is one of the most common contributing factors.',
        'Wax build-up, ear infections, or fluid behind the eardrum - causes that often resolve once the underlying problem is treated.',
        'Certain medications including some antibiotics and high-dose aspirin, which can cause or worsen tinnitus.',
        'Stress and tiredness making tinnitus feel more prominent, even though they are not the underlying cause.',
      ]}
      causesCitation="NICE guideline NG155: Tinnitus. 2020. British Tinnitus Association Clinical Guidelines. 2018."
      whenToSeekHelp="Arrange specialist review if tinnitus is persistent, one-sided, associated with hearing loss, or affecting sleep and wellbeing. Prompt assessment is important for pulsatile tinnitus, sudden hearing change, or new neurological symptoms."
      treatmentOverview="Treatment starts with identifying contributing factors and confirming hearing status. Management may include addressing reversible ear causes, hearing support strategies, sound-based management, and coordinated care with audiology where appropriate. The aim is to reduce symptom burden and improve quality of life."
      relatedProcedures={[
        {
          title: 'Nasendoscopy',
          href: '/procedures/nasendoscopy',
        },
        {
          title: 'Wax microsuction',
          href: '/procedures/wax-microsuction',
        },
      ]}
      faqItems={tinnitusFaqItems}
    />
  )
}