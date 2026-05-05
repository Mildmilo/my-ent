// TODO: CLINICAL REVIEW - awaiting Dr Banks sign-off (Tier C)

import type { Metadata } from 'next'
import Image from 'next/image'
import { ConditionPageTemplate } from '@/components/templates/ConditionPageTemplate'

const postNasalDripFaqItems = [
  {
    question: 'What exactly is post-nasal drip and is it a diagnosis?',
    answer:
      'Post-nasal drip describes the sensation of mucus accumulating at the back of the nose and dripping down the throat. Importantly, it is a symptom — not a diagnosis in itself. The same sensation can arise from completely different underlying conditions including allergic rhinitis, non-allergic rhinitis, chronic rhinosinusitis, laryngopharyngeal reflux, or even medication side effects. This is why treatment varies so significantly between patients, and why a thorough assessment to identify the underlying cause is essential before starting treatment.',
  },
  {
    question: 'How is post-nasal drip different from laryngopharyngeal reflux?',
    answer:
      'This is one of the most important distinctions in ENT practice. True post-nasal drip involves excess mucus produced by the nasal lining dripping down the throat. Laryngopharyngeal reflux (LPR) occurs when stomach acid travels up the oesophagus and irritates the back of the throat and voice box — producing an identical sensation of mucus or phlegm, along with throat clearing, mild hoarseness, and a lump-in-throat feeling, but without the heartburn that typically accompanies GERD. LPR is commonly misidentified as post-nasal drip and requires completely different treatment — dietary modification and acid suppression rather than nasal therapy.',
  },
  {
    question: 'What causes post-nasal drip to be worse in the morning?',
    answer:
      'Morning worsening of post-nasal drip is a classic feature of house dust mite allergy. Dust mite allergen concentrates in bedding — mattresses, pillows, and duvets — and exposure overnight drives nasal inflammation that peaks on waking. It can also reflect acid reflux, which is often worse overnight when lying flat allows stomach acid to travel higher. If symptoms are consistently worst on waking and improve through the day, both of these causes are worth investigating.',
  },
  {
    question: 'Can post-nasal drip cause a chronic cough?',
    answer:
      'Yes — chronic cough is one of the most common consequences of post-nasal drip and is recognised in international guidelines as a distinct syndrome called upper airway cough syndrome. Mucus dripping onto the posterior pharynx and larynx stimulates cough receptors directly. However, both EPOS 2020 and ICAR-RS-2021 acknowledge that in some patients, rhinosinusitis may directly stimulate cough receptors through airway inflammation independently of visible mucus drip. Chronic cough with post-nasal drip that does not improve with nasal treatment warrants assessment for coexisting reflux or asthma.',
  },
  {
    question: 'What does EPOS 2020 recommend for post-nasal drip?',
    answer:
      'EPOS 2020 — the European Position Paper on Rhinosinusitis and Nasal Polyps, the international clinical standard used in Australian ENT practice — includes post-nasal drip as one of seven key outcome measures for chronic rhinosinusitis disease control. According to EPOS 2020, chronic rhinosinusitis is only considered controlled when post-nasal drip, alongside nasal blockage, facial pain, smell impairment, sleep disturbance, and endoscopic findings, is absent or well managed. The guideline recommends intranasal corticosteroids as Grade A evidence and saline irrigation as baseline treatment for all forms of chronic rhinosinusitis-related post-nasal drip.',
  },
  {
    question: 'Is saline nasal rinsing actually effective for post-nasal drip?',
    answer:
      'Yes — high-volume saline nasal irrigation is one of the most consistently supported measures across all major guidelines. EPOS 2020 notes that high-volume rinsing shows a larger effect on post-nasal drip than low-volume spray. ICAR-RS-2021 gives saline irrigation a Grade B recommendation for chronic rhinosinusitis. Mechanically, saline clears mucus, allergens, and inflammatory mediators from the nasal cavity, improves mucociliary clearance, and allows better penetration of any corticosteroid spray used afterwards. It is effective regardless of the underlying cause and safe for daily long-term use. Use a high-volume device such as NeilMed Sinus Rinse or Flo Sinus Care with cooled boiled water and a sterile sachet.',
  },
  {
    question: 'When do I need a nasendoscopy for post-nasal drip?',
    answer:
      'A nasendoscopy — where a thin flexible camera is passed gently through the nose — allows the ENT surgeon to directly visualise the nasal lining, sinus openings, adenoids, and the back of the throat and voice box. It is the key diagnostic step when post-nasal drip has not responded to appropriate medical treatment, when the cause is unclear from the history alone, or when there are associated symptoms such as one-sided symptoms, blood-stained mucus, change in voice, or difficulty swallowing. It is a quick, well-tolerated outpatient procedure performed at consultation.',
  },
  {
    question: 'Can thick post-nasal drip be improved without medication?',
    answer:
      'Yes — adequate hydration is one of the most consistently effective and underutilised measures for thick post-nasal secretions. Dehydration significantly thickens mucus. Drinking at least two litres of water daily, reducing caffeine and alcohol, and using a high-volume saline rinse before any nasal spray will noticeably improve mucus consistency in most patients. Dry indoor environments — particularly in winter with heating running — also thicken secretions and can be helped by a humidifier. These measures complement rather than replace medical treatment.',
  },
  {
    question: 'What is the role of surgery for post-nasal drip?',
    answer:
      'Surgery is considered when the underlying cause has been confirmed to be structural or inflammatory and has not responded to an adequate trial of medical treatment. For chronic rhinosinusitis-related post-nasal drip, endoscopic sinus surgery (ESS) opens the blocked sinus drainage pathways, removes obstructing disease, and creates better access for topical medications to reach the sinuses post-operatively. Both ICAR-RS-2021 and EPOS 2020 support surgery as the appropriate next step when medical management is insufficient. Surgery does not replace post-operative medical care — nasal irrigation and corticosteroid sprays remain important after surgery to maintain the result.',
  },
  {
    question: 'Can post-nasal drip affect children differently?',
    answer:
      'In children, post-nasal drip most commonly results from enlarged adenoids or allergic rhinitis. Children often present with nocturnal cough rather than the throat-clearing and mucus sensation that adults describe, because they tend to swallow rather than clear secretions. ICAR-RS-2021 includes paediatric rhinosinusitis as a distinct section given the different diagnostic criteria and treatment considerations that apply. Any child with persistent nasal discharge, cough, or mouth breathing should be assessed by an ENT surgeon experienced in paediatric care.',
  },
  {
    question: 'Does diet affect post-nasal drip?',
    answer:
      'Dairy products are frequently blamed by patients for worsening post-nasal drip, but the evidence for this is limited — dairy increases the viscosity of saliva temporarily but does not increase mucus production. The exception is in patients where post-nasal drip is driven by laryngopharyngeal reflux — in these patients, dietary modification is an important part of treatment, including reducing fatty foods, caffeine, alcohol, chocolate, citrus, and carbonated drinks, and avoiding eating within three hours of lying down.',
  },
  {
    question: 'Will every surgeon at My-ENT approach my condition the same way?',
    answer:
      'Individual surgeons within My-ENT may approach assessment and management differently based on their subspecialty training and clinical experience. Your surgeon will discuss the most appropriate pathway for your specific situation at your consultation.',
  },
]

export const metadata: Metadata = {
  title: 'Post-Nasal Drip Treatment Sydney | ENT Specialist | My-ENT',
  description:
    'Post-nasal drip causes and treatment for Sydney patients — rhinitis, sinusitis, reflux, and when to see an ENT specialist. My-ENT, 135 Macquarie Street.',
}

export default function PostNasalDripPage() {
  return (
    <ConditionPageTemplate
      slug="post-nasal-drip"
      title="Post-Nasal Drip"
      clinicalTerm="Posterior rhinorrhoea / Upper airway cough syndrome"
      plainEnglishSummary="Post-nasal drip is the sensation of mucus accumulating at the back of the nose and dripping down the throat. It is one of the most common complaints in ENT practice — but it is a symptom, not a diagnosis. The same sensation arises from several different underlying conditions, each requiring different treatment. Identifying the cause is the essential first step."
      heroImageSlot={
        <Image
          src="/images/Conditions/post-nasal-drip-condition-myent.webp"
          alt="Patient experiencing post-nasal drip seeking ENT specialist care at My-ENT Sydney."
          width={1200}
          height={675}
          priority={true}
          className="h-full w-full object-cover"
        />
      }
      symptoms={[
        'A sensation of mucus dripping or pooling at the back of the throat.',
        'Frequent throat clearing — often worse in the morning or after eating.',
        'Mild chronic cough, particularly at night or on lying down — recognised as upper airway cough syndrome in international guidelines.',
        'A feeling of phlegm or a lump in the throat that does not clear with swallowing.',
        'Hoarseness or voice change, particularly in the morning.',
        'Nasal congestion or discharge — either clear, white, yellow, or green depending on the underlying cause.',
        'Nausea from mucus accumulation in the stomach overnight.',
        'Bad breath related to mucus pooling in the throat.',
      ]}
      symptomsNote="The pattern of symptoms provides important diagnostic information. Morning predominance with nasal congestion suggests allergic rhinitis or dust mite sensitivity. Symptoms triggered by meals, caffeine, or lying flat suggest laryngopharyngeal reflux. Thick discoloured discharge with facial pressure suggests chronic rhinosinusitis. Each pattern points toward a different diagnosis and a different treatment pathway."
      causes={[
        'Allergic rhinitis — triggered by dust mite, pollen, pet dander, or mould, causing excess mucus production from the nasal lining. One of the most common causes of persistent post-nasal drip in Sydney.',
        'Non-allergic rhinitis — identical symptoms to allergic rhinitis but triggered by temperature changes, humidity, smoke, strong smells, or other non-allergenic stimuli. Antihistamines are less effective for this cause.',
        'Chronic rhinosinusitis — persistent inflammation of the sinuses causing ongoing mucus production and impaired drainage. EPOS 2020 includes post-nasal drip as a primary outcome measure for rhinosinusitis disease control.',
        'Laryngopharyngeal reflux (LPR) — stomach acid travelling up the oesophagus and irritating the back of the throat, producing a sensation indistinguishable from post-nasal drip but requiring completely different treatment.',
        'Vasomotor rhinitis — a hyperreactive nasal lining that produces excess watery secretions in response to changes in temperature, humidity, or barometric pressure.',
        'Medication side effects — ACE inhibitors used for blood pressure are a recognised cause of chronic cough and post-nasal drip sensation. Certain antihistamines, blood pressure medications, and oral contraceptives can also affect nasal secretions.',
        'Anatomical factors — a deviated nasal septum or enlarged turbinates can impair normal nasal drainage and contribute to mucus accumulation.',
        'Post-infectious rhinitis — persistent post-nasal drip following a viral respiratory illness, sometimes lasting weeks to months after the acute infection has resolved.',
      ]}
      causesCitation="Fokkens WJ et al. European Position Paper on Rhinosinusitis and Nasal Polyps (EPOS) 2020. Rhinology. 2020;58(Suppl S29):1–464. Orlandi RR et al. International Consensus Statement on Allergy and Rhinology: Rhinosinusitis 2021. Int Forum Allergy Rhinol. 2021;11(3):213–739."
      whenToSeekHelp={{
        overview:
          'See your GP if post-nasal drip is persistent, affecting sleep or daily function, or associated with a chronic cough that has not resolved. ENT specialist review is appropriate when symptoms have not responded to a trial of nasal spray and saline rinsing, when the cause is unclear, or when associated symptoms suggest a structural nasal problem or reflux. A nasendoscopy at consultation allows direct assessment of the nasal cavity, sinus openings, and the back of the throat — providing a diagnosis that symptom history alone cannot reliably establish.',
        warningSignsHeading: 'Seek prompt review if you develop:',
        warningSigns: [
          'Blood-stained nasal discharge or mucus',
          'Post-nasal drip affecting only one side',
          'Progressive difficulty swallowing',
          'Change in voice lasting more than three weeks',
          'A lump in the neck alongside throat symptoms',
          'Significant facial pain or swelling',
        ],
      }}
      treatmentOverview={{
        overview:
          'Treatment is directed entirely at the underlying cause. The same symptom of post-nasal drip requires a different treatment approach depending on whether the driver is allergic rhinitis, non-allergic rhinitis, chronic rhinosinusitis, or reflux. Both EPOS 2020 and ICAR-RS-2021 support a stepwise approach beginning with saline irrigation and intranasal corticosteroids, escalating to further investigation and surgical management when needed.',
        treatments: [
          {
            heading: 'High-volume saline nasal irrigation',
            body: 'The single most universally applicable measure across all causes of post-nasal drip. High-volume saline rinsing mechanically clears mucus, allergens, and inflammatory mediators from the nasal cavity, improves mucociliary clearance, and allows better penetration of any corticosteroid spray used afterwards. EPOS 2020 notes that high-volume irrigation shows a larger effect on post-nasal drip than low-volume spray. ICAR-RS-2021 gives saline irrigation a Grade B recommendation. Use NeilMed Sinus Rinse or Flo Sinus Care with cooled boiled water and a sterile sachet, before applying any nasal spray.',
          },
          {
            heading: 'Intranasal corticosteroid sprays',
            body: 'The evidence-based first-line treatment for post-nasal drip driven by allergic rhinitis, non-allergic rhinitis, or chronic rhinosinusitis. Both EPOS 2020 and ICAR-RS-2021 give intranasal corticosteroids a Grade A recommendation. Australian options include mometasone furoate (Nasonex), budesonide (Rhinocort), and fluticasone furoate (Avamys). These require consistent daily use — maximum benefit develops over one to two weeks. They are safe for long-term use and do not carry the rebound risk of decongestant sprays.',
          },
          {
            heading: 'Antihistamines — for allergic causes only',
            body: 'Non-sedating oral antihistamines such as cetirizine, loratadine, or fexofenadine are appropriate when allergic rhinitis is the confirmed or suspected driver. For non-allergic rhinitis, antihistamines are generally less effective. Ipratropium bromide nasal spray (Atrovent) is useful specifically for watery post-nasal drip in non-allergic rhinitis where conventional sprays provide limited benefit.',
          },
          {
            heading: 'Laryngopharyngeal reflux management',
            body: 'When reflux is identified as the driver, treatment shifts to dietary and lifestyle modification — reducing fatty foods, caffeine, alcohol, chocolate, citrus, and carbonated drinks, avoiding eating within three hours of lying down, and elevating the head of the bed. Acid suppression with proton pump inhibitors is prescribed when dietary measures are insufficient. Nasal sprays are not effective for reflux-driven post-nasal drip.',
          },
          {
            heading: 'Hydration and environmental measures',
            body: 'Adequate hydration — at least two litres of water daily — is one of the most consistently effective measures for thick post-nasal secretions. Dehydration significantly thickens mucus. Reducing caffeine and alcohol, humidifying dry indoor environments in winter, and avoiding cigarette smoke all contribute to improved mucus consistency.',
          },
          {
            heading: 'Endoscopic sinus surgery (ESS)',
            body: 'When chronic rhinosinusitis is the confirmed cause and has not responded to adequate medical treatment, endoscopic sinus surgery is the appropriate next step — supported by both EPOS 2020 and ICAR-RS-2021. Surgery opens the blocked sinus drainage pathways and creates better access for topical medications post-operatively. Post-operative nasal irrigation and corticosteroid sprays remain essential to maintain the result.',
          },
        ],
      }}
      relatedProcedures={[
        {
          title: 'Nasendoscopy',
          href: '/procedures/nasendoscopy',
        },
        {
          title: 'Endoscopic sinus surgery (ESS)',
          href: '/procedures/endoscopic-sinus-surgery',
        },
        {
          title: 'Septoplasty and turbinate reduction',
          href: '/procedures/septoplasty-turbinate-reduction',
        },
      ]}
      faqItems={postNasalDripFaqItems}
    />
  )
}
