// TODO: CLINICAL REVIEW - awaiting Dr Reddy sign-off (Tier B)

import type { Metadata } from 'next'
import { ProcedurePageTemplate } from '@/components/templates/ProcedurePageTemplate'

export const metadata: Metadata = {
  title: 'Hearing Implant Surgery Sydney | BAHA & Cochlear Implants',
  description:
    'Bone-anchored hearing aids (BAHA) and cochlear implants for conductive, mixed, and sensorineural hearing loss. My-ENT specialist otology, 135 Macquarie Street Sydney.',
  alternates: {
    canonical: '/procedures/hearing-implant-surgery',
  },
}

export default function HearingImplantSurgeryPage() {
  return (
    <ProcedurePageTemplate
      title="Hearing Implant Surgery"
      plainEnglishSummary="Hearing implants are surgically placed devices that restore hearing when conventional hearing aids are not suitable or not effective. The two main types are bone-anchored hearing aids (BAHA), which transmit sound through the skull bone to the inner ear, and cochlear implants, which bypass a damaged inner ear and stimulate the hearing nerve directly. The right implant depends on the type and severity of hearing loss, the condition of the inner ear, and individual anatomy."
      heroImage={{
        src: '/images/Procedures/hearing-implant-surgery-myent.webp',
        alt: 'Hearing implant surgery consultation at My-ENT Sydney.',
      }}
      indications={[
        'Conductive or mixed hearing loss not adequately corrected by conventional hearing aids — for example, hearing loss due to chronic ear disease, congenital ear abnormalities, or failed previous ear surgery. BAHA is the preferred option in these situations.',
        'Single-sided deafness — where one ear has no functional hearing and the patient is not benefiting from a conventional hearing aid. BAHA transmits sound from the deaf side to the functioning cochlea via bone conduction.',
        'Congenital aural atresia — absent or severely narrowed ear canals that prevent conventional hearing aid fitting. BAHA bypasses the ear canal entirely.',
        'Severe to profound sensorineural hearing loss in both ears where conventional hearing aids provide inadequate benefit. Cochlear implants are considered in this situation and can provide significant improvement in speech understanding.',
        'Cochlear otosclerosis — where abnormal bone growth affects both the middle ear and the inner ear, resulting in a sensorineural component that does not respond to stapes surgery alone.',
        'Children aged five years and above with appropriate hearing loss types. Younger children may use a softband or headband device while awaiting sufficient skull thickness for implantation.',
      ]}
      whatToExpect="Your assessment begins with a comprehensive audiological evaluation including pure-tone audiometry and speech discrimination testing. For BAHA candidates, a trial using a softband or adhesive device is arranged before surgery so you can experience the likely benefit. Imaging of the temporal bone may be requested to assess bone quality and anatomy. BAHA implant surgery is day surgery performed under general anaesthetic or local anaesthetic with sedation, taking approximately 30 to 60 minutes. A small titanium implant is placed in the bone behind the ear. The implant osseointegrates — fuses with the surrounding bone — over approximately one to three months before the external sound processor is fitted. Cochlear implant surgery is performed under general anaesthetic and takes two to three hours. An electrode array is inserted into the cochlea and an internal receiver is placed under the skin behind the ear. The external speech processor is activated four to six weeks after surgery, followed by an ongoing programme of audiology mapping and rehabilitation. Both BAHA and cochlear implant devices are listed on the Australian Prosthesis List and are covered by private health insurance at an appropriate level of cover."
      recoveryOverview="BAHA surgery is well tolerated. Most patients return home the same day with a bandage over the implant site. Mild swelling and tenderness around the incision resolve within one to two weeks. The implant site requires regular cleaning as advised by your surgeon. Strenuous activity should be avoided for two weeks. The sound processor is not fitted until osseointegration is confirmed, typically one to three months after surgery. Cochlear implant recipients spend one to two nights in hospital. The external processor is activated at four to six weeks and initial activation is often a gradual process — sound quality improves progressively over months as the brain adapts to the new signal. Regular audiology sessions are scheduled in the months following activation. Driving and return to work depend on individual recovery and will be discussed with your surgeon at your pre-operative appointment."
      relatedConditions={[
        { title: 'Hearing Loss', href: '/conditions/hearing-loss' },
        { title: 'Ear Infections', href: '/conditions/ear-infections' },
        { title: 'Tinnitus', href: '/conditions/tinnitus' },
      ]}
    />
  )
}
