// TODO: CLINICAL REVIEW — awaiting Dr Banks sign-off (Tier C)

import type { Metadata } from 'next'
import Image from 'next/image'
import { ConditionPageTemplate } from '@/components/templates/ConditionPageTemplate'

export const metadata: Metadata = {
  title: 'Tonsillitis Treatment Sydney | Throat Specialist',
  description:
    'Tonsillitis information for Sydney patients — symptoms, causes, when to seek specialist review, and treatment options including tonsillectomy at My-ENT.',
  alternates: {
    canonical: '/conditions/tonsillitis',
  },
}

export default function TonsillitisPage() {
  return (
    <ConditionPageTemplate
      slug="tonsillitis"
      title="Tonsillitis"
      clinicalTerm="Acute and recurrent tonsillitis"
      plainEnglishSummary="Tonsillitis is inflammation of the tonsils, usually caused by a viral or bacterial infection. It produces a sore throat, difficulty swallowing, and sometimes fever. Most episodes settle with rest and simple care, but recurrent or severe tonsillitis may need specialist review and, in some cases, surgical treatment."
            heroImageSlot={
        <Image
          src="/images/Conditions/tonsillitis-condition-myent.webp"
          alt="ENT review for recurrent tonsillitis at My-ENT Sydney."
          width={1200}
          height={675}
          priority={true}
          className="h-full w-full object-cover"
        />
      }
      symptoms={[
        'Sore or scratchy throat, often coming on quickly.',
        'Difficulty or pain on swallowing.',
        'Fever, chills, and general fatigue.',
        'Swollen, tender lymph nodes in the neck.',
        'White or yellow patches or coating on the tonsils.',
        'Bad breath and a muffled or hoarse quality to the voice.',
        'In children, recurrent episodes disrupting school and sleep.',
      ]}
      causes={[
        'A viral infection - the cause in the majority of cases, similar to a common cold.',
        'Bacterial infection with Group A Streptococcus, which is important to identify as it responds to antibiotics and can occasionally lead to complications if untreated.',
        'Regular close contact with other children in school and childcare settings, which explains why tonsillitis is particularly common in school-age children.',
        'Glandular fever caused by the Epstein-Barr virus, which should be considered in teenagers and young adults with a severe or unusually prolonged episode.',
      ]}
      causesCitation="Scottish Intercollegiate Guidelines Network (SIGN). Guideline 117: Management of sore throat and indications for tonsillectomy. 2010, updated 2019."
      whenToSeekHelp="Seek specialist review if episodes are occurring four or more times in a year, if a sore throat lasts beyond a week without improvement, or if symptoms are affecting sleep, school attendance, or daily activities. Prompt review is important when swallowing is severely painful, breathing feels laboured, or when glandular fever is suspected."
      treatmentOverview="Bacterial tonsillitis is treated with antibiotics. Viral episodes are managed with rest, hydration, and pain relief. For patients with recurrent episodes or significantly enlarged tonsils causing sleep-related symptoms, tonsillectomy may be considered after specialist assessment. The decision involves the frequency and severity of episodes, the impact on quality of life, and individual clinical factors."
      relatedProcedures={[
        {
          title: 'Tonsillectomy',
          href: '/procedures/tonsillectomy',
        },
        {
          title: 'Nasendoscopy',
          href: '/procedures/nasendoscopy',
        },
      ]}
    />
  )
}
