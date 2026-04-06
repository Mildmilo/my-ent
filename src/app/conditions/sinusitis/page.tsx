// TODO: CLINICAL REVIEW - awaiting Dr Banks sign-off (Tier C)

import type { Metadata } from 'next'
import Image from 'next/image'
import { ConditionPageTemplate } from '@/components/templates/ConditionPageTemplate'

export const metadata: Metadata = {
  title: 'Sinusitis Treatment Sydney | Sinus Specialist | My-ENT',
  description:
    'Sinusitis information for Sydney patients, including common symptoms, when to seek specialist review, and practical treatment pathways at My-ENT.',
}

export default function SinusitisPage() {
  return (
    <ConditionPageTemplate
      title="Sinusitis"
      clinicalTerm="Rhinosinusitis"
      plainEnglishSummary="Sinusitis means inflammation in the lining of the sinuses. Many people notice blocked breathing, facial pressure, thick nasal discharge, or reduced smell. Some episodes settle with simple care, while ongoing or repeated symptoms may need specialist ENT review."
      heroImageSlot={
        <Image
          src="/images/Conditions/sinusitis-condition-myent.webp"
          alt="ENT consultation for sinusitis symptoms at My-ENT Sydney."
          width={1200}
          height={675}
          priority={true}
          className="h-full w-full object-cover"
        />
      }
      symptoms={[
        'Nasal blockage that lasts beyond a typical cold.',
        'Facial pressure, pain, or heaviness across cheeks, forehead, or around the eyes.',
        'Thick nasal discharge or ongoing post-nasal drip.',
        'Reduced or altered sense of smell.',
        'Sleep disturbance, tiredness, or difficulty concentrating due to persistent congestion.',
      ]}
      causes={[
        'A cold or viral illness that triggers inflammation lasting beyond the initial infection.',
        'Allergy may contribute to ongoing nasal inflammation in some patients, though its role varies between individuals and subtypes of sinusitis.',
        'Nasal polyps or structural narrowing that block normal sinus drainage - allergy alone does not cause polyps.',
        'Cigarette smoke, air pollution, or other airborne irritants worsening sinonasal inflammation.',
        'Less commonly, an underlying inflammatory condition such as aspirin-exacerbated respiratory disease requiring specialist assessment.',
      ]}
      causesCitation="Fokkens WJ et al. European Position Paper on Rhinosinusitis and Nasal Polyps (EPOS) 2020. Rhinology. 2020;58(Suppl S29):1-464."
      whenToSeekHelp="Arrange specialist review if symptoms continue beyond several weeks, keep recurring, or are affecting sleep, school, work, or day-to-day function. Prompt review is also important when symptoms are severe, one-sided, or not improving with GP-led treatment."
      treatmentOverview="Treatment is tailored to the symptom pattern and likely cause. Many patients begin with medical treatment and nasal care plans, with imaging or endoscopic assessment when needed. For selected patients with persistent disease, endoscopic sinus surgery (ESS) may be discussed as part of a broader management pathway."
      sinusQuestionnaireCalloutHeading="Prepare for your appointment."
      relatedProcedures={[
        {
          title: 'Endoscopic sinus surgery (ESS)',
          href: '/procedures/endoscopic-sinus-surgery',
        },
        {
          title: 'Nasendoscopy',
          href: '/procedures/nasendoscopy',
        },
      ]}
    />
  )
}