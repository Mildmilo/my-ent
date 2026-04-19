// TODO: CLINICAL REVIEW — awaiting Dr Banks sign-off (Tier C)

import type { Metadata } from 'next'
import Image from 'next/image'
import { ConditionPageTemplate } from '@/components/templates/ConditionPageTemplate'

export const metadata: Metadata = {
  title: 'Chronic Cough Sydney | ENT Cough Specialist',
  description:
    'Chronic cough information for Sydney patients — common ENT-related causes, symptoms, when to seek specialist review, and management options at My-ENT.',
  alternates: {
    canonical: '/conditions/cough',
  },
}

export default function CoughPage() {
  return (
    <ConditionPageTemplate
      slug="cough"
      title="Chronic cough"
      plainEnglishSummary="A cough that persists beyond eight weeks is considered chronic and warrants proper assessment. While the lungs and airways are sometimes responsible, a significant proportion of chronic coughs arise from conditions in the nose, sinuses, and throat — making ENT assessment an important part of the evaluation. Identifying the cause is the first step toward effective management."
            heroImageSlot={
        <Image
          src="/images/Conditions/chronic-cough-condition-myent.webp"
          alt="Patient discussing chronic cough symptoms with an ENT specialist at My-ENT Sydney."
          width={1200}
          height={675}
          priority={true}
          className="h-full w-full object-cover"
        />
      }
      symptoms={[
        'A persistent dry or tickling cough lasting beyond eight weeks.',
        'Cough that worsens when talking, laughing, or taking a deep breath.',
        'Throat clearing that feels necessary but provides only brief relief.',
        'Coughing or spluttering when eating or drinking.',
        'Cough that is worse at night, on lying down, or first thing in the morning.',
        'A sensation of mucus at the back of the throat prompting repeated swallowing or clearing.',
        'Hoarse voice or throat discomfort accompanying the cough.',
      ]}
      causes={[
        'Mucus draining from the nose and sinuses down the back of the throat - often associated with hayfever, sinus problems, or a lingering post-viral irritation.',
        'Acid reflux reaching the throat and triggering the cough reflex, even without obvious heartburn or indigestion symptoms.',
        'A form of asthma where cough is the main or only symptom rather than wheeze - confirmed with breathing tests.',
        'Blood pressure medications called ACE inhibitors, which cause a persistent dry cough as a known side effect in a significant number of people who take them.',
      ]}
      causesCitation="Morice AH et al. ERS Task Force Report: Chronic cough. Eur Respir J. 2020;55(1):1901136."
      whenToSeekHelp="Seek specialist review for any cough that has persisted beyond eight weeks, particularly if it is affecting sleep, work, or quality of life. Prompt assessment is important when a cough is accompanied by blood in sputum, unexplained weight loss, breathlessness, or a significant change in character. A cough that begins after starting a new medication should also be discussed with a doctor promptly."
      treatmentOverview="Assessment involves a thorough history and examination of the nose, throat, and larynx using nasendoscopy. The aim is to identify ENT-related contributions — post-nasal drip, reflux changes, or vocal cord findings — that can be specifically addressed. Management depends on the identified cause and may include nasal treatment, reflux management, dietary changes, and voice therapy. Where a respiratory cause is co-suspected, care is coordinated with a respiratory physician to ensure the full picture is addressed."
      relatedProcedures={[
        {
          title: 'Nasendoscopy',
          href: '/procedures/nasendoscopy',
        },
      ]}
    />
  )
}
