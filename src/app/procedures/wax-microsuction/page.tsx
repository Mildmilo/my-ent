// TODO: CLINICAL REVIEW - awaiting Dr Banks sign-off (Tier C)

import type { Metadata } from 'next'
import { ProcedurePageTemplate } from '@/components/templates/ProcedurePageTemplate'

export const metadata: Metadata = {
  title: 'Wax Microsuction Sydney | Ear Wax Removal Procedure | My-ENT',
  description:
    'Wax microsuction information for Sydney patients, including when specialist ear cleaning is appropriate and what to expect during and after treatment.',
}

export default function WaxMicrosuctionPage() {
  return (
    <ProcedurePageTemplate
      title="Wax microsuction"
      plainEnglishSummary="Wax microsuction is a specialist technique to remove impacted ear wax under magnified visual control. It may be recommended when wax is causing blocked hearing, discomfort, tinnitus, or when accurate ear examination is needed."
      heroImage={{
        src: '/images/Procedures/wax-microsuction-procedure-myent.webp',
        alt: 'Wax microsuction clinic setup showing precise ear cleaning under magnified vision.',
      }}
      indications={[
        'Impacted wax causing hearing reduction, pressure, or fullness.',
        'Ear discomfort, itch, or tinnitus associated with wax blockage.',
        'Need for safe wax removal before hearing tests, fitting, or specialist review.',
        'Wax that has not responded to drops or community-based cleaning attempts.',
        'Patients with prior ear surgery or perforation requiring careful specialist technique.',
      ]}
      whatToExpect="Microsuction is usually performed in clinic using microscopy and fine suction instruments. The ear canal is examined first, then wax is removed under direct vision with techniques adjusted to comfort and safety. Your ENT team explains aftercare and whether further ear health follow-up is needed."
      recoveryOverview="Most patients notice immediate relief of blockage symptoms. Temporary sensitivity can occur for a short period after cleaning. Follow-up is individual, especially for patients with recurrent wax build-up, chronic ear conditions, or hearing pathway concerns."
      relatedConditions={[
        {
          title: 'Wax impaction',
          href: '/conditions/wax-impaction',
        },
        {
          title: 'Hearing loss',
          href: '/conditions/hearing-loss',
        },
        {
          title: 'Tinnitus',
          href: '/conditions/tinnitus',
        },
      ]}
    />
  )
}