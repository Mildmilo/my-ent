// TODO: CLINICAL REVIEW - awaiting Dr Reddy sign-off (Tier B)

import type { Metadata } from 'next'
import { ProcedurePageTemplate } from '@/components/templates/ProcedurePageTemplate'

export const metadata: Metadata = {
  title: 'Acoustic Neuroma Surgery Sydney | Vestibular Schwannoma | My-ENT',
  description:
    'Acoustic neuroma (vestibular schwannoma) assessment and surgical management in Sydney. My-ENT specialist otology and skull base, 135 Macquarie Street.',
}

export default function AcousticNeuromaSurgeryPage() {
  return (
    <ProcedurePageTemplate
      title="Acoustic Neuroma Surgery"
      plainEnglishSummary="An acoustic neuroma — more accurately called a vestibular schwannoma — is a benign, slow-growing tumour that arises from the balance nerve connecting the inner ear to the brain. Although not cancerous, it can cause progressive hearing loss, tinnitus, and balance disturbance, and larger tumours can compress surrounding structures. Management depends on tumour size, growth rate, patient age, hearing status, and individual preference, and includes active surveillance, stereotactic radiosurgery, or microsurgical removal."
      heroImage={{
        src: '/images/Procedures/acoustic-neuroma-surgery-myent.webp',
        alt: 'Acoustic neuroma surgical consultation at My-ENT Sydney.',
      }}
      indications={[
        'Confirmed vestibular schwannoma on MRI with gadolinium contrast, in a patient with symptoms including unilateral sensorineural hearing loss, tinnitus, or balance disturbance.',
        'Growing tumour on serial MRI surveillance — defined as an increase in maximum diameter of 2 mm or more over a surveillance interval.',
        'Tumour causing significant symptoms disproportionate to size, including disabling vertigo, progressive facial nerve compromise, or brainstem compression.',
        'Larger tumours (typically greater than 2.5 to 3 cm in maximum diameter) where the risk of brainstem or cerebellar compression warrants surgical consideration regardless of growth rate.',
        'Patient preference for definitive treatment over ongoing surveillance or radiosurgery, following full discussion of treatment options, outcomes, and risks.',
        'Younger patients with small tumours and serviceable hearing where hearing preservation surgery via a middle fossa or retrosigmoid approach may be considered.',
        'Note: not all acoustic neuromas require surgery. Many small tumours are managed with active surveillance using serial MRI, and stereotactic radiosurgery (Gamma Knife or CyberKnife) is an established alternative for tumours up to approximately 3 cm. Your treating team will discuss all options in detail.',
      ]}
      whatToExpect="Assessment includes MRI of the internal auditory canals with gadolinium contrast to characterise the tumour, comprehensive audiological evaluation including pure-tone audiometry and speech discrimination, and vestibular function testing. Larger or complex tumours are discussed in a multidisciplinary setting with neurosurgery. Surgical approaches vary according to tumour size, position, and hearing status. The retrosigmoid (suboccipital) approach provides access to tumours of all sizes and offers a chance of hearing preservation in selected patients. The translabyrinthine approach provides wide exposure for larger tumours and is used when hearing preservation is not the goal. The middle fossa approach is used for small intracanalicular tumours with serviceable hearing. Surgery is performed under general anaesthetic by a surgical team combining otological and neurosurgical expertise. Operating time varies from three to six hours depending on tumour size and approach. Continuous facial nerve monitoring is used throughout the procedure to protect the facial nerve, which runs in close proximity to the tumour."
      recoveryOverview="Patients spend two to four nights in hospital following acoustic neuroma surgery. Dizziness and imbalance in the days following surgery are expected and typically improve progressively over weeks to months as the brain compensates for the change in balance function — this process is called vestibular compensation and is aided by physiotherapy. Facial nerve function is monitored closely post-operatively; the degree of any temporary or permanent weakness depends on tumour size and the extent of nerve involvement, and will be discussed fully before surgery. Hearing outcomes vary by surgical approach and tumour characteristics. Headache at the incision site is common and managed with regular analgesia. Return to light activity typically occurs at four to six weeks; full recovery takes three to six months depending on the individual. Follow-up MRI is arranged to confirm complete removal or to monitor for recurrence."
      relatedConditions={[
        { title: 'Hearing Loss', href: '/conditions/hearing-loss' },
        { title: 'Tinnitus', href: '/conditions/tinnitus' },
        { title: 'Vertigo', href: '/conditions/vertigo' },
        { title: 'Skull Base', href: '/conditions/skull-base' },
      ]}
    />
  )
}
