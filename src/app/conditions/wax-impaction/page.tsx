// TODO: CLINICAL REVIEW — awaiting Dr Banks sign-off (Tier C)

import type { Metadata } from 'next'
import Image from 'next/image'
import { ConditionPageTemplate } from '@/components/templates/ConditionPageTemplate'

export const metadata: Metadata = {
  title: 'Wax Impaction Treatment Sydney | Ear Cleaning',
  description:
    'Wax impaction information for Sydney patients, including blocked hearing symptoms, safe ear wax removal options, and ENT review timing at My-ENT.',
  alternates: {
    canonical: '/conditions/wax-impaction',
  },
}

export default function WaxImpactionPage() {
  return (
    <ConditionPageTemplate
      slug="wax-impaction"
      title="Wax impaction"
      clinicalTerm="Cerumen impaction"
      plainEnglishSummary="Ear wax protects the ear canal, but sometimes it builds up and becomes impacted. This can cause blocked hearing, discomfort, and noise symptoms. Specialist review helps confirm the diagnosis and remove wax safely when needed."
            heroImageSlot={
        <Image
          src="/images/Conditions/wax-impaction-condition-myent.webp"
          alt="Clinical assessment and treatment planning for ear wax impaction."
          width={1200}
          height={675}
          priority={true}
          className="h-full w-full object-cover"
        />
      }
      symptoms={[
        'Blocked or reduced hearing, often worse on one side.',
        'Ear fullness, pressure, or mild discomfort.',
        'Intermittent tinnitus or echoing of your own voice.',
        'Hearing-aid feedback or reduced hearing-aid effectiveness.',
        'Occasional dizziness or cough triggered by ear canal irritation.',
      ]}
      causes={[
        'Using cotton buds, which push wax deeper into the canal rather than removing it - one of the most common causes.',
        'Wearing hearing aids or in-ear earphones regularly, which slows the natural outward migration of wax.',
        'Narrow or tortuous ear canals making natural clearance more difficult - more common in older adults and some people with Down syndrome.',
        'Simply producing more wax than average, or producing a drier, flakier wax consistency that is less likely to migrate naturally.',
      ]}
      causesCitation="Schwartz SR et al. Clinical Practice Guideline: Earwax (Cerumen Impaction). Otolaryngol Head Neck Surg. 2017;156(1 Suppl):S1-S29."
      whenToSeekHelp="Arrange review if hearing feels blocked, symptoms keep recurring, or you have pain, discharge, or previous eardrum problems. Avoid self-instrumentation inside the ear canal, particularly if you have had prior ear surgery or a known eardrum perforation."
      treatmentOverview="Management may include softening drops when appropriate and wax removal under direct vision, often with microsuction. Technique is chosen based on ear history, eardrum status, and comfort. Ongoing prevention advice is provided for patients who experience repeated buildup."
      relatedProcedures={[
        {
          title: 'Wax microsuction',
          href: '/procedures/wax-microsuction',
        },
        {
          title: 'Nasendoscopy',
          href: '/procedures/nasendoscopy',
        },
      ]}
    />
  )
}