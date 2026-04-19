// TODO: CLINICAL REVIEW - awaiting Dr Banks sign-off (Tier C)

import type { Metadata } from 'next'
import { ProcedurePageTemplate } from '@/components/templates/ProcedurePageTemplate'

export const metadata: Metadata = {
  title: 'Grommets Sydney | Ear Ventilation Tubes',
  description:
    'Grommets information for Sydney children and adults, including indications for middle ear ventilation procedures, what to expect, and follow-up care.',
  alternates: {
    canonical: '/procedures/grommets',
  },
}

export default function GrommetsPage() {
  return (
    <ProcedurePageTemplate
      slug="grommets"
      title="Grommets"
      plainEnglishSummary="Grommets are tiny ventilation tubes placed in the eardrum to help equalise middle ear pressure and reduce fluid build-up. They are commonly considered for persistent glue ear, recurrent ear infections, or hearing concerns after ENT assessment."
      heroImage={{
        src: '/images/Procedures/grommets-procedure-myent.webp',
        alt: 'Microscopic ear procedure setup representing grommet insertion treatment.',
      }}
      indications={[
        'Persistent middle ear fluid with hearing impact.',
        'Recurrent ear infections despite appropriate medical management.',
        'Pressure-related ear symptoms linked to eustachian tube dysfunction.',
        'Speech, learning, or behaviour concerns where hearing status needs optimisation.',
        'Selected adult ear ventilation pathways after specialist review.',
      ]}
      whatToExpect="Assessment includes symptom history, ear examination, and often hearing testing. Grommet insertion is usually a short procedure, often day surgery in children. Your surgeon explains water precautions, follow-up schedule, and what changes to expect in hearing and infection frequency."
      recoveryOverview="Grommets is a brief day procedure performed under a short general anaesthetic. Most children and adults return to normal activities the following day. There is no requirement for extended time off school or work."
      relatedConditions={[
        {
          title: 'Paediatric ear infections',
          href: '/conditions/paediatric-ear-infections',
        },
        {
          title: 'Ear infections',
          href: '/conditions/ear-infections',
        },
        {
          title: 'Paediatric hearing loss',
          href: '/conditions/paediatric-hearing-loss',
        },
      ]}
    />
  )
}
