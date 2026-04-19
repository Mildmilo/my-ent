// TODO: CLINICAL REVIEW — awaiting Dr Banks sign-off.

import type { Metadata } from 'next'
import { ProcedurePageTemplate } from '@/components/templates/ProcedurePageTemplate'

export const metadata: Metadata = {
  title: 'Endoscopic Sinus Surgery Sydney | ESS Surgeon',
  description:
    'Endoscopic sinus surgery (ESS) information for Sydney patients, including when ESS is considered, how surgery is performed, and recovery planning at My-ENT.',
  alternates: {
    canonical: '/procedures/endoscopic-sinus-surgery',
  },
}

export default function EndoscopicSinusSurgeryPage() {
  return (
    <ProcedurePageTemplate
      title="Endoscopic sinus surgery (ESS)"
      plainEnglishSummary="Endoscopic sinus surgery (ESS) is a procedure performed through the nostrils to improve sinus ventilation and drainage. It is performed under general anaesthetic in an operating theatre. It is usually considered when chronic sinus symptoms continue despite appropriate medical treatment and specialist review."
      heroImage={{
        src: '/images/Procedures/endoscopic-sinus-surgery-procedure-myent.webp',
        alt: 'Endoscopic sinus surgery view showing a controlled nasal procedure environment.',
      }}
      indications={[
        'Persistent sinusitis symptoms despite structured medical treatment.',
        'Recurrent sinus flare-ups affecting sleep, work, or daily function.',
        'Nasal polyps causing ongoing blockage or smell disturbance.',
        'Sinus pathways narrowed by inflammation or anatomical factors identified on specialist assessment.',
        'Cases where endoscopic access is required to manage selected sinonasal disease.',
      ]}
      whatToExpect="Before surgery, your ENT surgeon reviews symptom history, examination findings, and imaging to confirm whether ESS is appropriate. Endoscopic sinus surgery is performed under general anaesthetic in an operating theatre. The procedure is performed endoscopically through the nose, without external facial incisions. The exact operative plan depends on your anatomy and disease pattern, and this is discussed in consultation."
      recoveryOverview="Recovery planning is individual. Patients are given practical guidance on nasal care, activity pacing, and follow-up appointments after surgery. Ongoing medical therapy may still be part of long-term sinus management, especially for inflammatory conditions such as nasal polyps."
      relatedConditions={[
        {
          title: 'Sinusitis',
          href: '/conditions/sinusitis',
        },
        {
          title: 'Nasal polyps',
          href: '/conditions/nasal-polyps',
        },
        {
          title: 'Blocked nose',
          href: '/conditions/blocked-nose',
        },
      ]}
    />
  )
}