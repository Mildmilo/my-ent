// TODO: CLINICAL REVIEW — awaiting Dr Banks sign-off (Tier C)

import type { Metadata } from 'next'
import Image from 'next/image'
import { ConditionPageTemplate } from '@/components/templates/ConditionPageTemplate'

export const metadata: Metadata = {
  title: 'Hayfever and Allergic Rhinitis Sydney | ENT Specialist | My-ENT',
  description:
    'Hayfever and allergic rhinitis information for Sydney patients, including triggers, symptoms, when to seek specialist review, and treatment pathways at My-ENT.',
}

export default function HayfeverAllergicRhinitisPage() {
  return (
    <ConditionPageTemplate
      title="Hayfever and Allergic Rhinitis"
      clinicalTerm="Allergic Rhinitis"
      plainEnglishSummary="Hayfever and allergic rhinitis (allergic rhinitis) describe an immune response that causes inflammation of the nasal lining when a person is exposed to allergens such as pollen, dust mites, pet dander, or mould. Symptoms can be seasonal, year-round, or triggered by specific environments. While common, persistent allergic rhinitis can significantly affect sleep and day-to-day wellbeing."
            heroImageSlot={
        <Image
          src="/images/Conditions/hayfever-condition-myent.webp"
          alt="Patient with hayfever and allergic rhinitis symptoms in an ENT clinic setting."
          width={1200}
          height={675}
          priority={true}
          className="h-full w-full object-cover"
        />
      }
      symptoms={[
        'Frequent sneezing, particularly on waking or in response to specific environments or seasons.',
        'Itchy, runny, or persistently blocked nose.',
        'Post-nasal drip causing throat clearing or a persistent tickly cough.',
        'Itchy or watery eyes during periods of high pollen or allergen exposure.',
        'Waking unrefreshed due to nasal congestion at night.',
        'Reduced sense of smell during periods of significant nasal swelling.',
      ]}
      causes={[
        'The immune system overreacting to a harmless substance - such as pollen, dust mites, or pet hair - triggering inflammation in the nasal lining each time it is encountered.',
        'Seasonal triggers including grass, tree, and weed pollens, producing symptoms that follow predictable patterns throughout the year.',
        'Year-round triggers such as house dust mite, cockroach allergen, and pet dander, producing symptoms that persist regardless of season.',
        'A family history of allergy, asthma, or eczema - an inherited tendency toward atopic conditions is common in people with allergic rhinitis.',
      ]}
      causesCitation="Bousquet J et al. ARIA 2019 update. J Allergy Clin Immunol. 2019;144(5):1308-1316. Fokkens WJ et al. EPOS 2020. Rhinology. 2020;58(Suppl S29):1-464."
      whenToSeekHelp="Arrange specialist review when allergy symptoms are disrupting sleep, work, or daily activity, or when they have not responded adequately to antihistamines and nasal sprays available over the counter. ENT review is also helpful when it is unclear whether symptoms are primarily allergic or have a structural contributor such as a deviated septum."
      treatmentOverview="Management typically begins with identifying triggers, structured nasal care, and medical therapy. Where a structural contributor such as enlarged turbinates is present, addressing it can improve the response to allergy treatment. Immunotherapy referral may be considered in appropriate cases following specialist assessment."
      sinusQuestionnaireCalloutHeading="Prepare for your appointment."
      relatedProcedures={[
        {
          title: 'Nasendoscopy',
          href: '/procedures/nasendoscopy',
        },
        {
          title: 'Septoplasty and turbinate reduction',
          href: '/procedures/septoplasty-turbinate-reduction',
        },
      ]}
    />
  )
}
