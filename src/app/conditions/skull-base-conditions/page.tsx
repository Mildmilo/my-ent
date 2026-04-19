// TODO: CLINICAL REVIEW — awaiting Dr Banks sign-off (Tier C)

import type { Metadata } from 'next'
import { ConditionPageTemplate } from '@/components/templates/ConditionPageTemplate'

export const metadata: Metadata = {
  title: 'Skull Base Conditions Sydney | Skull Base Surgeon',
  description:
    'Skull base conditions information for Sydney patients, including anterior skull base and pituitary conditions, warning signs, and endoscopic pathways.',
  alternates: {
    canonical: '/conditions/skull-base-conditions',
  },
}

export default function SkullBaseConditionsPage() {
  return (
    <ConditionPageTemplate
      slug="skull-base-conditions"
      title="Skull Base Conditions"
      clinicalTerm="Anterior Skull Base Pathology"
      plainEnglishSummary="The skull base is the floor of the skull, forming the boundary between the brain and the nasal cavity, sinuses, and face. Conditions affecting the anterior skull base include benign growths, pituitary lesions, encephaloceles (herniation of brain tissue into the nasal cavity), and other pathologies. Many of these can now be assessed and treated through endoscopic approaches from within the nose, without the need for open surgery or external incisions."
      heroImageSlot={
        <div
          aria-hidden="true"
          className="mt-8 h-48 rounded-xl border border-neutral-200 bg-neutral-100 lg:h-64"
        >
          {/* TODO: INSERT condition image — skull-base-conditions-condition-myent.webp */}
        </div>
      }
      symptoms={[
        'Persistent one-sided nasal blockage that does not respond to standard treatment.',
        'Reduced or absent sense of smell, particularly when sudden in onset or one-sided.',
        'Clear, watery nasal discharge — this may indicate cerebrospinal fluid (CSF) leaking from around the brain and warrants prompt assessment.',
        'Visual changes or double vision in association with nasal or sinus symptoms.',
        'Headache or facial pressure that is unusual in character or not typical of sinusitis.',
        'A nasal lesion or mass identified on imaging.',
        'Spontaneous nosebleeds without an obvious cause.',
      ]}
      causes={[
        'Most skull base conditions do not have an identifiable external cause - they arise from the tissues of the skull base itself.',
        'Slow-growing benign tumours, such as pituitary adenomas or meningiomas, arising from cells normally present in the region.',
        'Congenital abnormalities of the skull base that have been present since birth and may present at any age.',
        'Rarely, previous injury, radiation treatment, or certain genetic conditions increasing the likelihood of skull base pathology.',
      ]}
      causesCitation="Snyderman CH, Gardner PA. Endoscopic Skull Base Surgery. 2nd ed. Thieme; 2020."
      whenToSeekHelp="Seek specialist review for one-sided nasal symptoms that persist or are not explained by common sinus disease, clear watery nasal discharge, any visual change in association with nasal symptoms, or an unexplained nasal or sinus lesion found on imaging. These presentations benefit from early ENT assessment to guide further workup and ensure appropriate management."
      treatmentOverview="Management is highly individualised and depends on the nature, location, and size of the condition. Where surgical intervention is appropriate, endoscopic approaches are used where possible, allowing access through the nose without external incisions. A multidisciplinary team including neurosurgical and, where relevant, oculoplastic colleagues is involved when required. Not all skull base findings require surgery, and the management pathway is determined following thorough assessment."
      relatedProcedures={[
        {
          title: 'Skull base surgery',
          href: '/procedures/skull-base-surgery',
        },
        {
          title: 'Transsphenoidal pituitary surgery',
          href: '/procedures/transsphenoidal-pituitary-surgery',
        },
        {
          title: 'Nasendoscopy',
          href: '/procedures/nasendoscopy',
        },
      ]}
    />
  )
}
