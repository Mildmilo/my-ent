// TODO: CLINICAL REVIEW — awaiting Dr Banks sign-off (Tier C)

import type { Metadata } from 'next'
import Image from 'next/image'
import { ConditionPageTemplate } from '@/components/templates/ConditionPageTemplate'

export const metadata: Metadata = {
  title: 'Post-Nasal Drip Sydney | Sinus and Throat Specialist',
  description:
    'Post-nasal drip information for Sydney patients, covering sinus and throat symptoms, key causes, and specialist ENT treatment pathways at My-ENT.',
  alternates: {
    canonical: '/conditions/post-nasal-drip',
  },
}

export default function PostNasalDripPage() {
  return (
    <ConditionPageTemplate
      title="Post-Nasal Drip"
      clinicalTerm="Posterior Rhinorrhoea"
      plainEnglishSummary="Post-nasal drip (posterior rhinorrhoea) occurs when excess mucus drains down the back of the throat rather than clearing through the nostrils. It is a common but often underrecognised symptom that can cause persistent throat clearing, cough, or the sensation of something sitting at the back of the throat. The contributing cause is frequently nasal, but reflux and throat factors can play a role in some patients."
            heroImageSlot={
        <Image
          src="/images/Conditions/post-nasal-drip-condition-myent.webp"
          alt="Patient with post-nasal drip symptoms during ENT assessment."
          width={1200}
          height={675}
          priority={true}
          className="h-full w-full object-cover"
        />
      }
      symptoms={[
        'A sensation of mucus or liquid collecting at the back of the throat.',
        'Frequent throat clearing, which may be habitual or driven by genuine secretions.',
        'A dry or tickly cough, often worse at night or on waking.',
        'A feeling of something stuck in the throat that does not resolve with swallowing.',
        'An intermittently hoarse or irritated voice, particularly in the mornings.',
        'A mildly sore or scratchy throat in the absence of obvious infection.',
      ]}
      causes={[
        'Allergies or hayfever stimulating excess mucus production in the nasal lining.',
        'Sinus infections causing thicker mucus that is more noticeable as it drains down the throat.',
        'Cold air, dry environments, or strong smells triggering mucus secretion in sensitive individuals.',
        'Acid reflux reaching the throat, which can produce a sensation of post-nasal drip even without excess mucus being present.',
        'Certain blood pressure medications contributing to changes in nasal secretion in some patients.',
      ]}
      causesCitation="Fokkens WJ et al. EPOS 2020. Rhinology. 2020;58(Suppl S29):1-464."
      whenToSeekHelp="Arrange specialist review when throat clearing or post-nasal drip is persistent, when it has not responded to allergy or reflux management, or when associated symptoms such as nasal blockage, facial pressure, or a change in voice are present. A nasendoscopy can assess the nasal cavity, post-nasal space, and larynx in a single clinic visit."
      treatmentOverview="Management depends on identifying the primary contributing cause. Where sinusitis or rhinitis is present, treatment is directed at reducing nasal inflammation and improving mucus clearance. Where laryngopharyngeal reflux (silent reflux) is suspected, this is addressed alongside nasal care. In patients with a mixed picture, both contributors are assessed and treated in sequence or simultaneously as appropriate."
      relatedProcedures={[
        {
          title: 'Nasendoscopy',
          href: '/procedures/nasendoscopy',
        },
        {
          title: 'Endoscopic sinus surgery (ESS)',
          href: '/procedures/endoscopic-sinus-surgery',
        },
      ]}
    />
  )
}
