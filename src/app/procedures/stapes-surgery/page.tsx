// TODO: CLINICAL REVIEW - awaiting Dr Reddy sign-off (Tier B)

import type { Metadata } from 'next'
import { ProcedurePageTemplate } from '@/components/templates/ProcedurePageTemplate'

export const metadata: Metadata = {
  title: 'Stapes Surgery Sydney | Stapedectomy & Stapedotomy | My-ENT',
  description:
    'Stapes surgery (stapedotomy and stapedectomy) for otosclerosis-related conductive hearing loss. Fellowship-trained otology at My-ENT, 135 Macquarie Street Sydney.',
}

export default function StapesSurgeryPage() {
  return (
    <ProcedurePageTemplate
      title="Stapes Surgery"
      plainEnglishSummary="Stapes surgery restores hearing loss caused by otosclerosis — a condition in which abnormal bone growth fixes the stapes, the smallest bone in the body, preventing it from transmitting sound to the inner ear. The operation replaces the fixed stapes with a tiny prosthesis, restoring the sound conduction pathway. In appropriately selected patients, nine out of ten procedures result in significantly improved hearing, making this one of the most effective operations in all of surgery."
      heroImage={{
        src: '/images/Procedures/stapes-surgery-myent.webp',
        alt: 'Stapes surgery consultation at My-ENT Sydney.',
      }}
      indications={[
        'Otosclerosis causing progressive conductive hearing loss confirmed by audiometry — typically a gradually worsening hearing loss in one or both ears, most commonly in women between the ages of 20 and 45, often with a family history.',
        'An air-bone gap of at least 15 dB across three or more frequencies on audiometry, with good cochlear reserve demonstrated by adequate bone conduction thresholds and speech discrimination.',
        'Absent stapedial reflexes on tympanometry, consistent with stapes fixation.',
        'Patients who prefer a surgical solution over long-term hearing aid use, or for whom hearing aids provide inadequate benefit.',
        'Bilateral otosclerosis — the worse-hearing ear is operated on first. The second ear may be considered six months later once recovery of the first is confirmed.',
        'Note: stapes surgery corrects the conductive component of hearing loss only. Any sensorineural component caused by cochlear otosclerosis does not improve with surgery and should be discussed with your surgeon before deciding on treatment.',
      ]}
      whatToExpect="Assessment involves pure-tone audiometry, tympanometry with stapedial reflex testing, and tuning fork tests. CT imaging of the temporal bone is occasionally requested to assess the extent of otosclerosis and confirm anatomy. Surgery is performed under general or local anaesthetic as day surgery, typically taking 45 to 90 minutes. The procedure is carried out entirely through the ear canal — there are no external incisions, scars, or bruising. Using an operating microscope or endoscope, the surgeon accesses the middle ear through a small incision inside the ear canal. The preferred modern technique is stapedotomy, in which a precisely measured small hole is created in the fixed stapes footplate and a tiny titanium or teflon prosthesis is inserted to restore the ossicular chain. Stapedectomy, in which the stapes footplate is partially or fully removed, is performed in selected cases. Hearing improvement is typically noticeable within days of surgery as post-operative swelling resolves, with further improvement over the following weeks."
      recoveryOverview="Stapes surgery is well tolerated. Most patients go home the same day. The ear is packed with a small dissolvable dressing that does not require removal. Mild dizziness for the first 24 to 48 hours is common and usually settles quickly. Avoid nose blowing, heavy lifting, and strenuous activity for two weeks — pressure changes can displace the prosthesis in the early healing period. Taste disturbance on the side of the tongue occurs in approximately 10 to 15 percent of patients due to retraction of the chorda tympani nerve during the procedure; this is almost always temporary. The risk of significant sensorineural hearing loss is less than one percent in experienced hands. Most patients return to desk work within one week. Flying should be avoided for three weeks. A hearing test is arranged at six to eight weeks to confirm the result."
      relatedConditions={[
        { title: 'Hearing Loss', href: '/conditions/hearing-loss' },
        { title: 'Tinnitus', href: '/conditions/tinnitus' },
        { title: 'Vertigo', href: '/conditions/vertigo' },
      ]}
    />
  )
}
