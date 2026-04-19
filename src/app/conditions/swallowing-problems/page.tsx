// TODO: CLINICAL REVIEW — awaiting Dr Banks sign-off (Tier C)

import type { Metadata } from 'next'
import Image from 'next/image'
import { ConditionPageTemplate } from '@/components/templates/ConditionPageTemplate'

export const metadata: Metadata = {
  title: 'Swallowing Problems Sydney | Dysphagia Specialist ENT',
  description:
    'Swallowing problem information for Sydney patients — symptoms of dysphagia, causes, when to seek specialist ENT review, and assessment options at My-ENT.',
  alternates: {
    canonical: '/conditions/swallowing-problems',
  },
}

export default function SwallowingProblemsPage() {
  return (
    <ConditionPageTemplate
      title="Swallowing problems"
      clinicalTerm="Dysphagia"
      plainEnglishSummary="Swallowing involves a coordinated sequence of muscle movements from the mouth through the throat and into the oesophagus. When this process is disrupted, patients may notice food or liquid catching, coughing during meals, or a sense that something is not passing through easily. Swallowing problems should always be assessed, as the underlying cause varies widely and accurate diagnosis guides the management approach."
            heroImageSlot={
        <Image
          src="/images/Conditions/swallowing-problems-condition-myent.webp"
          alt="Specialist assessment for swallowing problems at My-ENT Sydney."
          width={1200}
          height={675}
          priority={true}
          className="h-full w-full object-cover"
        />
      }
      symptoms={[
        'A sensation of food sticking in the throat or behind the breastbone.',
        'Coughing, choking, or spluttering during or immediately after eating.',
        'Pain with swallowing — either mild discomfort or more significant pain.',
        'Regurgitation of undigested food or liquid.',
        'A persistent sensation of a lump or obstruction in the throat, even between meals.',
        'Difficulty managing thin liquids, which may cause coughing.',
        'Unexplained weight loss or reduced appetite related to avoiding certain foods.',
      ]}
      causes={[
        'Acid reflux causing inflammation and sensitivity in the throat and upper oesophagus.',
        'Large tonsils causing mechanical difficulty swallowing solid food - relevant in both children and adults.',
        'A pharyngeal pouch - a small pouch forming at the junction of the throat and oesophagus - trapping food and causing regurgitation, particularly in older patients.',
        'Neurological conditions or weakness of the swallowing muscles affecting the coordination required for safe swallowing.',
        'Progressive difficulty swallowing or swallowing problems accompanied by weight loss always warrant prompt investigation.',
      ]}
      causesCitation="Baijens LW et al. European Society for Swallowing Disorders White Paper. Clin Interv Aging. 2016;11:1403-1428."
      whenToSeekHelp="Seek specialist review for any swallowing difficulty that persists beyond a few weeks, worsens progressively, is associated with weight loss, or where solids and then liquids become increasingly hard to manage. Sudden-onset swallowing difficulty or pain that features alongside voice change, neck swelling, or unexplained fatigue warrants prompt assessment."
      treatmentOverview="The approach to assessment depends on the nature and pattern of symptoms. Nasendoscopy allows the throat and vocal cords to be examined directly. A modified barium swallow or oesophagoscopy may be arranged depending on findings. Management is directed at the underlying cause — this may involve reflux treatment, speech pathology, dietary modification, or in selected cases, a procedural or surgical approach. Care is often coordinated with gastroenterology, speech pathology, or other specialists depending on the diagnosis."
      relatedProcedures={[
        {
          title: 'Nasendoscopy',
          href: '/procedures/nasendoscopy',
        },
        {
          title: 'Microlaryngoscopy',
          href: '/procedures/microlaryngoscopy',
        },
      ]}
    />
  )
}
