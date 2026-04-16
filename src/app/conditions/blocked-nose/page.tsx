// TODO: CLINICAL REVIEW - awaiting Dr Banks sign-off (Tier C)

import type { Metadata } from 'next'
import Image from 'next/image'
import { ConditionPageTemplate } from '@/components/templates/ConditionPageTemplate'

const blockedNoseFaqItems = [
  {
    question: 'Why does my nose block on only one side?',
    answer:
      'Single-sided nasal blockage most commonly points to a structural cause — particularly a deviated nasal septum, where the central wall of the nose sits off-centre and narrows one passage. Turbinate enlargement on the wider side can compound this, as the turbinate expands to fill the additional space. A nasal polyp on one side, a septal spur, or rarely a nasal tumour can also cause unilateral obstruction. Unilateral blockage that is persistent and does not fluctuate with season or position warrants specialist assessment, particularly to exclude an underlying mass.',
  },
  {
    question: 'Why does my nose switch sides — one nostril blocked, then the other?',
    answer:
      'This is almost always the normal nasal cycle — a predictable physiological process in which the turbinates on each side of the nose alternately swell and shrink every two to six hours. The total nasal airflow remains roughly constant but the dominant side shifts. Most people never notice this unless their nasal passages are already narrowed by a deviated septum or turbinate hypertrophy, at which point the congested side feels completely blocked. It is not a sign of disease.',
  },
  {
    question: 'What is a deviated nasal septum and does everyone have one?',
    answer:
      'The nasal septum is the cartilage and bone that divides the nose into left and right passages. A perfectly straight septum is actually uncommon — most people have some degree of deviation. The deviation only becomes clinically significant when it narrows one nasal passage enough to cause persistent obstruction, affect sleep, limit exercise tolerance, or contribute to recurrent sinus infections. Minor deviations that cause no symptoms require no treatment.',
  },
  {
    question: 'What are turbinates and why do they get enlarged?',
    answer:
      'The turbinates are three bony shelf-like structures on each side of the nasal cavity. They filter, warm, and humidify incoming air — an essential function. The inferior turbinates, the largest pair, are the most common cause of nasal obstruction when enlarged. They swell in response to allergens such as dust mite, pollen, and pet dander, to irritants like cigarette smoke, to viral infections, or as a compensatory response when the septum deviates to the opposite side. In some patients the swelling becomes chronic and no longer responds fully to medical treatment.',
  },
  {
    question: 'What is nasal valve collapse and how is it different from a deviated septum?',
    answer:
      'The nasal valve is the narrowest section of the nasal airway, located just inside the nostril. It can collapse or narrow due to weak cartilage, previous nasal surgery, trauma, or the natural changes of ageing. Patients often describe a feeling of the nostril pinching closed when breathing in. Unlike a deviated septum, nasal valve collapse is frequently missed on standard nasal examination and requires specific assessment. It can coexist with a deviated septum and may need to be addressed at the same time for surgery to be effective.',
  },
  {
    question: 'What is the difference between allergic and non-allergic rhinitis?',
    answer:
      'Allergic rhinitis — commonly called hayfever — occurs when the immune system overreacts to a specific allergen such as pollen, dust mite, or pet dander. Symptoms are typically triggered by exposure to the relevant allergen and often include sneezing and itchy, watery eyes alongside congestion. Non-allergic rhinitis produces identical nasal symptoms — congestion, runny nose, post-nasal drip — but allergy testing is negative and there is no identifiable allergen trigger. Common triggers for non-allergic rhinitis include temperature changes, strong smells, humidity, smoke, alcohol, and certain medications.',
  },
  {
    question: 'Can nasal decongestant sprays make a blocked nose worse?',
    answer:
      'Yes — this is one of the most important things to understand about nasal decongestants. Sprays containing oxymetazoline — sold in Australia as Dimetapp, Sudafed nasal spray, Otrivin, and similar products — work rapidly by constricting nasal blood vessels. However, using them for more than three to five days causes a rebound effect: the blood vessels dilate even more when the spray wears off, producing worse congestion than before. This leads to dependence and a cycle of escalating use. The condition is called rhinitis medicamentosa. Breaking the cycle requires stopping the spray and replacing it with a saline rinse and an intranasal corticosteroid spray prescribed or recommended by a clinician.',
  },
  {
    question: 'What is the first-line medical treatment for a persistently blocked nose?',
    answer:
      'The first-line treatment depends on the cause. For inflammatory causes — allergic rhinitis, non-allergic rhinitis, or chronic rhinosinusitis — daily intranasal corticosteroid sprays are the evidence-based first choice. Australian options include mometasone furoate (Nasonex), budesonide (Rhinocort), and fluticasone furoate (Avamys). These reduce mucosal inflammation and turbinate swelling with consistent daily use — maximum benefit develops over one to two weeks. Saline nasal irrigation used before the spray improves penetration and is recommended alongside it. For structural causes such as a deviated septum, medical treatment reduces any overlying inflammation but cannot correct the underlying anatomy.',
  },
  {
    question: 'When is surgery needed for a blocked nose?',
    answer:
      'Surgery is considered when symptoms are significant and persistent despite an adequate trial of medical treatment, or when the cause is structural and therefore not amenable to medication. The most common operation is septoplasty — correction of a deviated septum — usually combined with turbinoplasty to reduce enlarged inferior turbinates. This combined procedure is performed under general anaesthetic as day surgery, takes approximately 60 minutes, and leaves no external scars or bruising. In Australia, septoplasty attracts a Medicare rebate and private health insurance cover when documented nasal airflow obstruction is present. Your surgeon will advise on candidacy at your consultation.',
  },
  {
    question: 'Does a blocked nose affect sleep?',
    answer:
      'Significantly. Nasal obstruction is a major driver of mouth breathing during sleep, which contributes to snoring, disrupted sleep architecture, and in some patients obstructive sleep apnoea. Mouth breathing during sleep also dries the throat, causes morning sore throat, and impairs the filtering and humidifying function that nasal breathing provides. Children with persistent nasal obstruction from enlarged adenoids are particularly susceptible to sleep-disordered breathing. Improving nasal airflow — whether through medical or surgical treatment — often produces meaningful improvements in sleep quality.',
  },
  {
    question: 'Can a blocked nose in a child mean something different from an adult?',
    answer:
      'Yes. In children the most common cause of persistent nasal obstruction is enlarged adenoids — lymphoid tissue at the back of the nasal cavity that is proportionally much larger in children and can block the airway completely. This is uncommon in adults. Other causes in children include allergic rhinitis, a foreign body in the nose (particularly relevant when one nostril is blocked and there is an unusual smell or discharge), and in young children or infants, congenital narrowing. A nasal polyp in a child should always prompt investigation for cystic fibrosis.',
  },
  {
    question: 'Will every surgeon at My-ENT approach my condition the same way?',
    answer:
      'Individual surgeons within My-ENT may approach assessment and management differently based on their subspecialty training and clinical experience. Your surgeon will discuss the most appropriate pathway for your specific situation at your consultation.',
  },
]

export const metadata: Metadata = {
  title: 'Blocked Nose Treatment Sydney | Nasal Obstruction Specialist | My-ENT',
  description:
    'Blocked nose causes and treatment for Sydney patients — deviated septum, turbinate hypertrophy, rhinitis, and when surgery helps. My-ENT, 135 Macquarie Street.',
}

export default function BlockedNosePage() {
  return (
    <ConditionPageTemplate
      title="Blocked Nose"
      clinicalTerm="Nasal obstruction"
      plainEnglishSummary="A persistently blocked nose affects breathing, sleep, exercise, and quality of life. It can result from inflammatory causes — such as allergic rhinitis or sinusitis — or from structural issues like a deviated septum or enlarged turbinates. The right treatment depends on the underlying cause, and many patients need both addressed."
      heroImageSlot={
        <Image
          src="/images/Conditions/blocked-nose-condition-myent.webp"
          alt="ENT consultation for blocked nose at My-ENT Sydney."
          width={1200}
          height={675}
          priority={true}
          className="h-full w-full object-cover"
        />
      }
      symptoms={[
        'Persistent nasal blockage or congestion affecting one or both sides.',
        'Mouth breathing, particularly during sleep, leading to dry mouth and snoring.',
        'Reduced airflow through one nostril that does not fluctuate with seasons or position — more likely structural.',
        'Nasal blockage that alternates sides in a predictable pattern — often the normal nasal cycle exaggerated by underlying narrowing.',
        'Disturbed sleep, fatigue, or reduced exercise tolerance due to impaired nasal breathing.',
        'Recurrent sinus infections or post-nasal drip associated with impaired nasal drainage.',
        'In children, mouth breathing, snoring, restless sleep, or noisy nasal breathing during the day.',
      ]}
      symptomsNote="The pattern of blockage provides important diagnostic information. Blockage that is constant and one-sided points toward a structural cause. Blockage that fluctuates with allergen exposure, season, or environment suggests an inflammatory cause. Both can coexist in the same patient."
      causes={[
        'A deviated nasal septum — where the central wall of the nose sits off-centre — is one of the most common structural causes. Most people have some degree of deviation; it becomes significant when it narrows the airway enough to cause symptoms.',
        'Turbinate hypertrophy — swelling of the soft tissue structures inside the nose that warm and filter incoming air. Turbinates enlarge in response to allergy, chronic inflammation, or as a compensatory response to a deviated septum on the other side.',
        'Allergic rhinitis (hayfever) or perennial allergic rhinitis causing intermittent or persistent mucosal swelling.',
        'Non-allergic rhinitis — identical symptoms to allergic rhinitis but triggered by temperature change, strong smells, humidity, smoke, or other non-allergenic stimuli rather than a specific allergen.',
        'Nasal polyps, which can grow silently and cause progressive obstruction before other symptoms appear.',
        'Rebound congestion from overuse of decongestant nasal sprays containing oxymetazoline — products including Dimetapp, Sudafed nasal spray, and Otrivin. Using these for more than three to five days causes a rebound effect that worsens congestion.',
        'Enlarged adenoids — particularly in children, where adenoid hypertrophy is one of the most frequent causes of persistent nasal blockage and mouth breathing.',
        'Less commonly, nasal valve collapse, a foreign body (especially in children), or rarely a nasal tumour.',
      ]}
      causesCitation="Fokkens WJ et al. European Position Paper on Rhinosinusitis and Nasal Polyps (EPOS) 2020. Rhinology. 2020;58(Suppl S29):1–464. Cleveland Clinic. Nasal Obstruction. 2024. Stanford Medicine — Department of Otolaryngology. Nasal Obstruction Patient Guide."
      whenToSeekHelp={{
        overview:
          'Arrange specialist review if nasal blockage is persistent, affecting sleep, limiting exercise, or not responding to nasal sprays and saline rinsing after a reasonable trial. Single-sided blockage that does not fluctuate and is not explained by a known cause warrants assessment to exclude an underlying mass. Children with persistent mouth breathing, snoring, or restless sleep should be assessed, as adenoid hypertrophy and associated sleep-disordered breathing is treatable.',
        warningSignsHeading: 'Seek prompt review if you develop:',
        warningSigns: [
          'Blockage on one side only with no clear cause — requires examination to exclude tumour',
          'Nosebleeds associated with the blocked side',
          'A visible swelling inside the nostril',
          'Facial pain or pressure alongside one-sided blockage',
          'In a child — a blocked nostril with an unusual smell or discharge, which may indicate a foreign body',
        ],
      }}
      treatmentOverview={{
        overview:
          'Treatment is directed at the underlying cause. Inflammatory causes respond to medical treatment; structural causes may ultimately require surgery. Most patients begin with a trial of medical treatment regardless of cause, as reducing inflammation often improves symptoms significantly even when an anatomical problem is also present.',
        treatments: [
          {
            heading: 'Saline nasal irrigation',
            body: 'The first step in any nasal care programme. High-volume saline rinsing clears mucus, allergens, and inflammatory mediators from the nasal lining. Use a pre-mixed sterile sachet dissolved in cooled boiled water — not tap water. Products available at any Australian pharmacy include NeilMed Sinus Rinse and Flo Sinus Care. Rinse before applying any nasal spray to allow better penetration.',
          },
          {
            heading: 'Intranasal corticosteroid sprays',
            body: 'The evidence-based first-line treatment for inflammatory nasal blockage — including allergic rhinitis, non-allergic rhinitis, and chronic rhinosinusitis. Australian options include mometasone furoate (Nasonex), budesonide (Rhinocort), and fluticasone furoate (Avamys). These reduce mucosal swelling with consistent daily use — maximum effect takes one to two weeks to develop. They do not carry the rebound risk of decongestant sprays and are safe for long-term use.',
          },
          {
            heading: 'Stopping decongestant nasal sprays',
            body: 'If you have been using oxymetazoline-containing sprays (Dimetapp, Sudafed nasal spray, Otrivin) for more than a few days, stopping them is part of treatment. The rebound congestion from prolonged use resolves over days to weeks once the spray is discontinued. A saline rinse and intranasal corticosteroid spray help manage the transition. Your surgeon can advise on the best approach.',
          },
          {
            heading: 'Allergy assessment and management',
            body: 'When allergic rhinitis is contributing to nasal obstruction, identifying the specific allergens through skin prick or blood testing allows targeted avoidance measures. Antihistamine tablets or nasal sprays, and in some patients allergen immunotherapy (desensitisation), may be appropriate alongside intranasal corticosteroids.',
          },
          {
            heading: 'Septoplasty and turbinate reduction',
            body: 'For structural causes — particularly a deviated septum and turbinate hypertrophy — surgery is considered when symptoms persist despite adequate medical treatment. Septoplasty straightens the deviated septum through incisions inside the nose, leaving no external scars. It is almost always combined with turbinoplasty to reduce the inferior turbinates. The combined procedure is day surgery under general anaesthetic, taking approximately 60 minutes. In Australia, septoplasty attracts a Medicare rebate and private health insurance cover when documented nasal airflow obstruction is present. Your surgeon will assess whether you are a candidate at your consultation.',
          },
        ],
      }}
      sinusQuestionnaireCalloutHeading="Prepare for your appointment."
      relatedProcedures={[
        {
          title: 'Septoplasty and turbinate reduction',
          href: '/procedures/septoplasty-turbinate-reduction',
        },
        {
          title: 'Nasendoscopy',
          href: '/procedures/nasendoscopy',
        },
        {
          title: 'Endoscopic sinus surgery (ESS)',
          href: '/procedures/endoscopic-sinus-surgery',
        },
      ]}
      faqItems={blockedNoseFaqItems}
    />
  )
}
