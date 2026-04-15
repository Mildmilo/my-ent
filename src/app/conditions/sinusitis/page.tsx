// TODO: CLINICAL REVIEW - awaiting Dr Banks sign-off (Tier C)

import type { Metadata } from 'next'
import Image from 'next/image'
import { ConditionPageTemplate } from '@/components/templates/ConditionPageTemplate'

const sinusitisFaqItems = [
  {
    question: 'How can I tell if my sinus symptoms are more than a common cold?',
    answer:
      'A cold usually improves within 7 to 10 days. If congestion, facial pressure, thick discharge, or reduced smell persists beyond this, keeps recurring, or worsens after initial improvement — particularly with a "double worsening" pattern where you feel better briefly then deteriorate again — specialist review is appropriate. That rebound pattern often signals a bacterial component on top of a viral illness.',
  },
  {
    question: 'What is the difference between viral and bacterial sinusitis?',
    answer:
      'The vast majority of sinus infections — around 90 to 98 percent — are viral and resolve without antibiotics, usually within 10 to 14 days. Bacterial sinusitis typically persists beyond 10 days without improving, or worsens after a period of initial improvement. Antibiotics are only appropriate when bacterial infection is suspected based on symptom duration and pattern, and are not needed for most sinus episodes.',
  },
  {
    question: 'When is imaging needed for sinusitis?',
    answer:
      'Imaging is not required for most sinus episodes. A CT scan of the sinuses is considered when symptoms are persistent or recurrent, one-sided, not responding to appropriate treatment, or when surgical planning is needed. Routine X-rays add little in sinusitis and are generally not useful. CT without contrast is the gold standard when imaging is clinically indicated.',
  },
  {
    question: 'Does everyone with sinusitis need surgery?',
    answer:
      'No. Many patients improve with a structured medical programme — nasal saline irrigation, intranasal corticosteroid sprays, and addressing any underlying allergy or anatomical factors. Surgery is discussed only when symptoms remain significant despite appropriate conservative management over time.',
  },
  {
    question: 'How do I do a saline nasal rinse properly?',
    answer:
      'Use a pre-mixed sterile saline sachet dissolved in cooled boiled water — not tap water. Stand over a sink, tilt your head sideways, and gently pour or squeeze the solution into the upper nostril, allowing it to drain from the lower nostril. Breathe through your mouth throughout. Rinse both sides. Clean your rinse device thoroughly after each use and allow it to air dry. Common products available in Australian pharmacies include NeilMed Sinus Rinse and Flo Sinus Care. Your surgeon can advise on volume and frequency for your specific situation.',
  },
  {
    question: 'What nasal sprays are used to treat sinusitis in Australia?',
    answer:
      'Intranasal corticosteroid sprays are the mainstay of medical treatment for chronic and recurrent sinusitis. Available Australian options include mometasone furoate (Nasonex), budesonide (Rhinocort), and fluticasone furoate (Avamys). These reduce inflammation in the nasal lining and improve sinus drainage. They require consistent daily use — maximum benefit typically develops over one to two weeks. They are safe for long-term use and are available at Australian pharmacies, some without prescription. Your surgeon will advise on the most appropriate option and technique for your situation.',
  },
  {
    question: 'Can saline rinses and nasal sprays be used together?',
    answer:
      'Yes, and the combination is more effective than either alone. The recommended sequence is to rinse first with saline to clear mucus and debris, then apply the corticosteroid spray to clean mucosa where it can work more effectively. This approach is a standard component of a structured sinus care plan.',
  },
  {
    question: 'Can sinusitis affect sleep and concentration?',
    answer:
      'Yes. Persistent nasal blockage, facial pressure, and post-nasal drip can significantly disrupt sleep quality and daytime focus. Research comparing chronic sinusitis with other long-term conditions has found that patients report similar impairment of energy, work performance, and mental health. Improving sinonasal control often produces meaningful improvement in day-to-day function.',
  },
  {
    question: 'Which sinus causes which symptom?',
    answer:
      'Different sinuses produce different pain patterns. The frontal sinuses — behind the forehead — tend to cause forehead pain that worsens when lying on your back. The ethmoid sinuses — between the eyes — cause pain between or behind the eyes, and sometimes eyelid swelling. The maxillary sinuses — behind the cheeks — produce pain across the cheeks and upper teeth, which is sometimes mistaken for a dental problem. The sphenoid sinuses, deep behind the nose, can cause a diffuse deep headache. In practice, symptoms often overlap and are not always predictable.',
  },
  {
    question: 'When should I go to an emergency department rather than waiting for an appointment?',
    answer:
      'Sinusitis very rarely causes serious complications, but they do occur. Go to an emergency department promptly if you develop: swelling or redness around one or both eyes; vision changes, double vision, or loss of vision; severe headache that is different from your usual headaches; a stiff neck; significant facial swelling; or high fever with confusion or drowsiness. These are potential signs of spread to the eye socket or brain and require immediate assessment.',
  },
  {
    question: 'Are there things I can do at home to help while waiting for an appointment?',
    answer:
      'Yes. Saline nasal irrigation is the single most evidence-supported self-care measure and can be started straight away using products from any Australian pharmacy. Stay well hydrated — this helps thin mucus and supports drainage. Inhaling steam in a hot shower may temporarily ease congestion. Paracetamol or ibuprofen can help with facial pain and pressure. Sleeping with your head slightly elevated may reduce overnight congestion. Avoid decongestant nasal sprays containing oxymetazoline (such as Dimetapp or Sudafed nasal spray) for more than three to five days — prolonged use causes rebound congestion.',
  },
  {
    question: 'Will every surgeon at My-ENT approach my condition the same way?',
    answer:
      'Individual surgeons within My-ENT may approach assessment and management differently based on their subspecialty training and clinical experience. Your surgeon will discuss the most appropriate pathway for your specific situation at your consultation.',
  },
]

export const metadata: Metadata = {
  title: 'Sinusitis Treatment Sydney | Sinus Specialist | My-ENT',
  description:
    'Sinusitis information for Sydney patients, including common symptoms, when to seek specialist review, and practical treatment pathways at My-ENT.',
}

export default function SinusitisPage() {
  return (
    <ConditionPageTemplate
      title="Sinusitis"
      clinicalTerm="Rhinosinusitis"
      plainEnglishSummary="Sinusitis means inflammation in the lining of the sinuses. Many people notice blocked breathing, facial pressure, thick nasal discharge, or reduced smell. Some episodes settle with simple self-care, while ongoing or repeated symptoms may need specialist ENT review. The vast majority of cases do not require surgery."
      heroImageSlot={
        <Image
          src="/images/Conditions/sinusitis-condition-myent.webp"
          alt="ENT consultation for sinusitis symptoms at My-ENT Sydney."
          width={1200}
          height={675}
          priority={true}
          className="h-full w-full object-cover"
        />
      }
      symptoms={[
        'Nasal blockage or congestion that lasts beyond a typical cold.',
        'Facial pressure, pain, or heaviness across cheeks, forehead, or around the eyes — sometimes felt as toothache in the upper jaw.',
        'Thick nasal discharge — yellow or green — or ongoing post-nasal drip.',
        'Reduced or altered sense of smell.',
        'Sleep disturbance, fatigue, or difficulty concentrating due to persistent congestion.',
        'Cough, particularly at night, from mucus draining down the back of the throat.',
      ]}
      symptomsNote="The location of facial pain can reflect which sinuses are involved. Cheek or upper tooth pain often points to the maxillary sinuses; forehead pain to the frontal sinuses; pain between the eyes to the ethmoid sinuses. In practice symptoms overlap and are not always predictable."
      causes={[
        'A cold or viral illness that triggers inflammation lasting beyond the initial infection — the most common starting point.',
        'Allergy may contribute to ongoing nasal inflammation in some patients, though its role varies between individuals and subtypes of sinusitis.',
        'Nasal polyps or structural narrowing that block normal sinus drainage — allergy alone does not cause polyps.',
        'Cigarette smoke, air pollution, or other airborne irritants worsening sinonasal inflammation.',
        'Less commonly, an underlying inflammatory condition such as aspirin-exacerbated respiratory disease, primary ciliary dyskinesia, or immunodeficiency requiring specialist assessment.',
      ]}
      causesCitation="Fokkens WJ et al. European Position Paper on Rhinosinusitis and Nasal Polyps (EPOS) 2020. Rhinology. 2020;58(Suppl S29):1–464."
      whenToSeekHelp={{
        overview:
          'Arrange specialist review if symptoms continue beyond several weeks, keep recurring, or are affecting sleep, school, work, or day-to-day function. If your symptoms initially improve but then worsen again — a pattern called double worsening — this may suggest bacterial involvement and warrants assessment. Prompt review is also appropriate when symptoms are severe, one-sided, or not responding to GP-led treatment.',
        warningSignsHeading: 'Go to an emergency department immediately if you develop:',
        warningSigns: [
          'Swelling or redness around one or both eyes',
          'Vision changes, double vision, or loss of vision',
          'A severe headache that is different from your usual headaches',
          'A stiff neck',
          'Significant facial swelling',
          'High fever with confusion or altered consciousness',
        ],
      }}
      treatmentOverview={{
        overview:
          'Treatment is tailored to the symptom pattern and likely cause. Most patients begin with a structured medical programme before any consideration of surgery. The two cornerstones of medical treatment are nasal saline irrigation and intranasal corticosteroid sprays — used together, they are more effective than either alone.',
        treatments: [
          {
            heading: 'Saline nasal irrigation',
            body: 'High-volume saline rinses are the most evidence-supported first step. They flush mucus, allergens, and inflammatory mediators from the nasal lining and improve mucociliary function. Use a pre-mixed sterile sachet dissolved in cooled boiled water — not tap water. Common Australian products include NeilMed Sinus Rinse and Flo Sinus Care, available from any pharmacy. Rinse before applying any nasal spray so the spray reaches clean mucosa.',
          },
          {
            heading: 'Intranasal corticosteroid sprays',
            body: 'These reduce inflammation in the nasal lining and improve sinus drainage. Options available in Australia include mometasone furoate (Nasonex), budesonide (Rhinocort), and fluticasone furoate (Avamys). They require consistent daily use — maximum benefit takes one to two weeks to develop. They are safe for long-term use and do not carry the rebound risk of decongestant sprays. Use after saline rinsing for best effect.',
          },
          {
            heading: 'Antibiotics',
            body: 'Most sinus infections are viral and do not require antibiotics. When bacterial sinusitis is suspected — typically when symptoms persist beyond 10 days or show a double-worsening pattern — a short antibiotic course may be appropriate. Your GP or specialist will assess this based on symptom duration and clinical findings.',
          },
          {
            heading: 'Endoscopic sinus surgery (ESS)',
            body: 'Reserved for selected patients where significant symptoms persist despite appropriate medical management. Surgery opens the natural drainage pathways of the sinuses, allowing better mucus clearance and improving access for ongoing topical treatments. Surgery is not a cure for sinusitis — medical treatment continues afterwards. Your surgeon will discuss whether you are a candidate at your consultation.',
          },
        ],
      }}
      sinusQuestionnaireCalloutHeading="Prepare for your appointment."
      relatedProcedures={[
        {
          title: 'Endoscopic sinus surgery (ESS)',
          href: '/procedures/endoscopic-sinus-surgery',
        },
        {
          title: 'Nasendoscopy',
          href: '/procedures/nasendoscopy',
        },
      ]}
      faqItems={sinusitisFaqItems}
    />
  )
}
