// TODO: CLINICAL REVIEW — awaiting Dr Banks sign-off.

import type { Metadata } from 'next'
import { ProcedurePageTemplate } from '@/components/templates/ProcedurePageTemplate'

export const metadata: Metadata = {
  title: 'Adenoidectomy Sydney | Paediatric ENT Surgery | My-ENT',
  description:
    'Adenoidectomy information for Sydney families, including when enlarged adenoids may need surgery, what happens on the day, and recovery guidance.',
}

export default function AdenoidectomyPage() {
  return (
    <ProcedurePageTemplate
      title="Adenoidectomy"
      plainEnglishSummary="Adenoidectomy is surgery to remove enlarged adenoid tissue at the back of the nose. It is commonly discussed for children with persistent nasal blockage, snoring, or recurrent ear and sinus-related problems after medical management has been considered."
      heroImage={{
        src: '/images/Procedures/adenoidectomy-procedure-myent.webp',
        alt: 'Adenoidectomy procedure setting prepared for paediatric ENT airway surgery.',
      }}
      indications={[
        'Long-term nasal blockage with mouth breathing and disrupted sleep.',
        'Snoring and sleep breathing symptoms linked to enlarged adenoid tissue.',
        'Recurrent or persistent middle ear problems in selected children.',
        'Frequent upper airway infections where adenoid disease is a contributing factor.',
        'Ongoing symptoms despite suitable GP and specialist medical treatment.',
      ]}
      whatToExpect="Your ENT surgeon reviews history, examination findings, and hearing or sleep-related concerns before recommending adenoidectomy. The operation is performed through the mouth under general anaesthesia, with no external scars. Families receive clear instructions about fasting, medications, and day-surgery planning."
      recoveryOverview="Most children recover over several days with temporary sore throat, nasal congestion, or altered breath smell. Hydration, pain relief, and rest are important early steps. Follow-up is arranged to review breathing, sleep, and any related ear or sinus concerns."
      relatedConditions={[
        {
          title: 'Paediatric blocked nose',
          href: '/conditions/paediatric-blocked-nose',
        },
        {
          title: 'Paediatric snoring and sleep apnoea',
          href: '/conditions/paediatric-snoring-osa',
        },
        {
          title: 'Paediatric ear infections',
          href: '/conditions/paediatric-ear-infections',
        },
      ]}
    />
  )
}
