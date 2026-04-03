// TODO: CLINICAL REVIEW — awaiting Dr Banks sign-off (Tier C)

import type { Metadata } from 'next'
import Image from 'next/image'
import { ConditionPageTemplate } from '@/components/templates/ConditionPageTemplate'

export const metadata: Metadata = {
  title: 'Reflux and LPR Sydney | Silent Reflux ENT Specialist | My-ENT',
  description:
    'Reflux and laryngopharyngeal reflux (LPR) information for Sydney patients — symptoms, causes, when to seek ENT review, and treatment options at My-ENT.',
}

export default function RefluxLprPage() {
  return (
    <ConditionPageTemplate
      title="Reflux and LPR"
      clinicalTerm="Laryngopharyngeal reflux (LPR); gastro-oesophageal reflux disease (GORD)"
      plainEnglishSummary="Reflux occurs when stomach contents travel upward into the oesophagus and, in some cases, reach the throat and voice box. Laryngopharyngeal reflux (LPR) — sometimes called silent reflux — affects the throat region and often occurs without the classic heartburn that patients associate with reflux. It is a common and under-recognised cause of chronic throat symptoms."
            heroImageSlot={
        <Image
          src="/images/Conditions/reflux-lpr-condition-myent.webp"
          alt="ENT review for reflux and laryngopharyngeal reflux symptoms at My-ENT Sydney."
          width={1200}
          height={675}
          priority={true}
          className="h-full w-full object-cover"
        />
      }
      symptoms={[
        'Persistent throat clearing, often worse in the morning or after eating.',
        'Chronic cough or an irritating tickle in the throat.',
        'Hoarse or rough voice quality, particularly noticeable on waking.',
        'A sensation of a lump, tightness, or something stuck in the throat (globus).',
        'Post-nasal drip sensation or excess mucus in the throat.',
        'Difficulty swallowing or mild discomfort when swallowing.',
        'Heartburn may be absent — many patients with LPR have no chest symptoms.',
      ]}
      causes={[
        'The valve between the stomach and oesophagus not closing fully, allowing stomach contents to reach the throat - this can relate to diet, body weight, eating habits, or individual anatomy.',
        'Dietary triggers including caffeine, alcohol, fatty or spicy foods, and eating large meals.',
        'Eating late at night or lying down shortly after meals, which increases the likelihood of reflux events.',
        'Being overweight, which increases intra-abdominal pressure and is associated with more frequent and severe reflux.',
        'Unlike typical heartburn, many people with LPR feel no burning in the chest - which is why the condition is often not recognised without specialist assessment.',
      ]}
      causesCitation="Koufman JA. Laryngoscope. 1991;101(Suppl 53):1-78. Lechien JR et al. Eur Ann Otorhinolaryngol Head Neck Dis. 2019;136(2):101-108."
      whenToSeekHelp="Seek specialist review if throat symptoms persist beyond several weeks despite dietary changes, if hoarseness is not settling, or if swallowing is affected. An ENT assessment is important to examine the throat and vocal cords directly — LPR shares symptoms with other conditions that require their own management, and accurate diagnosis matters. Prompt review is warranted when symptoms are associated with weight loss, difficulty swallowing solids, or blood in mucus."
      treatmentOverview="Assessment involves direct visualisation of the throat and larynx using nasendoscopy, which allows the characteristic changes of LPR to be identified. Management typically begins with dietary and lifestyle modification — reducing trigger foods, adjusting meal timing, and elevating the head of the bed. Acid-suppressing medication is often recommended. Symptoms from LPR can take several months to fully settle with consistent management. If there is uncertainty about the diagnosis or an incomplete response to treatment, further investigation with a gastroenterologist may be coordinated."
      relatedProcedures={[
        {
          title: 'Nasendoscopy',
          href: '/procedures/nasendoscopy',
        },
      ]}
    />
  )
}
