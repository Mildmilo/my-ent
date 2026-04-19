// TODO: CLINICAL REVIEW - awaiting Dr Banks sign-off (Tier C)

import type { Metadata } from 'next'
import Image from 'next/image'
import { ConditionPageTemplate } from '@/components/templates/ConditionPageTemplate'

const nasalPolypsFaqItems = [
  {
    question: 'What exactly are nasal polyps and are they dangerous?',
    answer:
      'Nasal polyps are soft, non-cancerous growths that form in the lining of the nose and sinuses. They arise from chronic inflammation — not from infection or abnormal cell growth. They are benign and are not a sign of cancer. Small polyps may cause no symptoms at all. As they grow, they block airflow, trap mucus, and progressively impair the sense of smell. Left unmanaged, they can cause recurrent sinus infections, worsen asthma, and significantly affect sleep and quality of life. They do not resolve on their own without treatment.',
  },
  {
    question: 'Why do nasal polyps keep coming back after treatment?',
    answer:
      'Polyp recurrence is one of the defining features of this condition. Polyps are a symptom of ongoing chronic inflammation — they are not the underlying disease itself. Treating the polyps without controlling the inflammation that drives them means they will usually return. This is why management focuses on suppressing the underlying inflammatory process using intranasal corticosteroid sprays, saline irrigation, and in selected patients, biologic therapy. Surgery removes polyps and opens blocked drainage pathways, but it does not cure the inflammation. Post-surgical medical treatment — particularly ongoing nasal corticosteroid sprays and saline rinses — is essential to delay or prevent recurrence.',
  },
  {
    question: 'What is the standard first-line treatment for nasal polyps in Australia?',
    answer:
      'According to EPOS 2020 — the international guideline used as the clinical standard in Australia — the cornerstone of first-line treatment is daily intranasal corticosteroid sprays combined with regular saline nasal irrigation. Australian options for intranasal corticosteroids include mometasone furoate (Nasonex), budesonide (Rhinocort), and fluticasone furoate (Avamys). Short courses of oral corticosteroids — such as prednisolone — may be used to rapidly reduce polyp size before or after surgery. Saline rinsing should be performed before using any nasal spray so the medication reaches clean mucosa. These measures are the foundation of treatment at every stage.',
  },
  {
    question: 'When is surgery recommended for nasal polyps?',
    answer:
      'Endoscopic sinus surgery (ESS) is recommended when symptoms remain significant despite an adequate trial of medical treatment — typically intranasal corticosteroids with or without a course of oral corticosteroids. Surgery does not remove the polyps in isolation: it opens the natural drainage pathways of the sinuses, removes obstructing polyp tissue, and creates a larger surface area for topical medications to reach the affected mucosa after the operation. Surgery is not a cure — it is part of a broader long-term management plan. Most patients continue nasal corticosteroid sprays and saline rinses after surgery.',
  },
  {
    question: 'What are biologic treatments for nasal polyps and who qualifies in Australia?',
    answer:
      'Biologics are injectable monoclonal antibodies that target the specific inflammatory pathways driving polyp formation. Three biologics are currently TGA-approved for nasal polyps in Australia: dupilumab (Dupixent), mepolizumab (Nucala — PBS-listed from April 2023), and omalizumab (Xolair — PBS-listed from March 2025). Based on EPOS 2020 criteria, biologics are considered for patients who have bilateral polyps, have already undergone appropriate sinus surgery, and continue to have uncontrolled disease meeting at least three of five type 2 inflammation criteria — including elevated tissue eosinophils, need for repeated courses of oral corticosteroids, significant quality of life impairment, severe smell loss, and comorbid asthma. An important note for Australian patients: PBS-subsidised biologics for nasal polyps must be prescribed by a clinical immunologist, allergist, or respiratory physician — ENT surgeons are not eligible PBS prescribers for this indication. Your rhinologist will assess your candidacy and refer you to the appropriate specialist to initiate subsidised treatment. Both work together to manage your care.',
  },
  {
    question: 'What does dupilumab (Dupixent) do for nasal polyps?',
    answer:
      'Dupilumab (Dupixent) is a fortnightly subcutaneous injection that blocks the IL-4 and IL-13 signalling pathways — two key drivers of the type 2 inflammatory response that causes polyp formation. Clinical trials have shown that dupilumab significantly reduces polyp size, improves nasal congestion, and restores the sense of smell in patients with severe uncontrolled disease. It is TGA-approved in Australia for this indication and given by self-injection under the skin of the thigh or abdomen, typically every two weeks, alongside intranasal corticosteroids. In Australia, PBS-subsidised dupilumab for nasal polyps must be prescribed by a clinical immunologist, allergist, or respiratory physician. Your rhinologist can assess whether you are a candidate and refer you to the appropriate specialist.',
  },
  {
    question: 'Can nasal polyps cause loss of smell permanently?',
    answer:
      'Loss of smell — known as anosmia — is one of the most distressing and impactful symptoms of nasal polyps. It occurs when polyps physically block the airflow needed to reach the olfactory receptor region high in the nasal cavity. In most patients, smell improves significantly with treatment — whether with corticosteroids, surgery, or biologic therapy. However, prolonged untreated anosmia can result in more persistent changes that are slower to recover. This is one of the reasons early assessment and appropriate treatment is important when smell loss is a significant symptom.',
  },
  {
    question: 'Is there a link between nasal polyps and asthma?',
    answer:
      'Yes — the connection is well established and clinically important. A significant proportion of patients with nasal polyps also have asthma, and the two conditions share the same underlying type 2 inflammatory pathway. This is sometimes called the unified airway — the nose and lungs are part of the same mucosal system, and inflammation in one area commonly affects the other. In patients with both conditions, treating nasal polyps effectively often leads to improvement in asthma control as well. Your surgeon will ask about your respiratory history as part of your assessment.',
  },
  {
    question: 'What is aspirin-exacerbated respiratory disease and how does it relate to polyps?',
    answer:
      'Aspirin-exacerbated respiratory disease — formerly called Samter\'s triad — is a recognised clinical pattern involving nasal polyps, asthma, and sensitivity to aspirin and non-steroidal anti-inflammatory drugs (NSAIDs) such as ibuprofen. Patients with this condition typically have more aggressive polyp disease with a higher recurrence rate after surgery. Taking aspirin or NSAIDs can trigger severe respiratory reactions in these patients. If you have polyps and asthma and notice that aspirin or anti-inflammatories worsen your breathing, this is important information to share with your surgeon.',
  },
  {
    question: 'Should I avoid aspirin and anti-inflammatory tablets if I have nasal polyps?',
    answer:
      'Not necessarily — this depends on whether you have aspirin-exacerbated respiratory disease (AERD). Most patients with nasal polyps can take aspirin and ibuprofen safely. However, if you also have asthma and notice that these medications worsen your breathing or nasal symptoms, you should avoid them and discuss this with your surgeon. Paracetamol (Panadol) is generally well tolerated in patients with nasal polyps, including those with AERD.',
  },
  {
    question: 'Are nasal polyps in children the same as in adults?',
    answer:
      'Nasal polyps are uncommon in children. When they do occur in a child under twelve, cystic fibrosis must always be investigated — it is a recognised cause of nasal polyposis in children and warrants genetic and respiratory assessment if not already excluded. In adults, the common driver is type 2 eosinophilic inflammation; in children this pattern is less typical. Any child found to have nasal polyps should be assessed by a specialist with experience in paediatric sinonasal disease.',
  },
  {
    question: 'Will every surgeon at My-ENT approach my condition the same way?',
    answer:
      'Individual surgeons within My-ENT may approach assessment and management differently based on their subspecialty training and clinical experience. Your surgeon will discuss the most appropriate pathway for your specific situation at your consultation.',
  },
]

export const metadata: Metadata = {
  title: 'Nasal Polyps Treatment Sydney | Sinus Specialist',
  description:
    'Nasal polyps information for Sydney patients — symptoms, causes, when surgery is needed, and biologic treatment options including Dupixent and Nucala at My-ENT.',
  alternates: {
    canonical: '/conditions/nasal-polyps',
  },
}

export default function NasalPolypsPage() {
  return (
    <ConditionPageTemplate
      title="Nasal Polyps"
      clinicalTerm="Chronic rhinosinusitis with nasal polyposis (CRSwNP)"
      plainEnglishSummary="Nasal polyps are soft, non-cancerous growths that develop in the lining of the nose and sinuses as a result of chronic inflammation. They can cause progressive nasal blockage, loss of smell, and recurrent sinus infections. Treatment ranges from nasal sprays and saline irrigation through to surgery and, for selected patients with severe disease, biologic therapy."
      heroImageSlot={
        <Image
          src="/images/Conditions/nasal-polyps-condition-myent.webp"
          alt="ENT consultation for nasal polyps at My-ENT Sydney."
          width={1200}
          height={675}
          priority={true}
          className="h-full w-full object-cover"
        />
      }
      symptoms={[
        'Progressive nasal blockage or congestion affecting one or both sides.',
        'Reduced or lost sense of smell — often the most impactful symptom for patients.',
        'Reduced sense of taste, which follows loss of smell.',
        'Thick nasal discharge or post-nasal drip.',
        'A sensation of pressure or fullness across the face.',
        'Recurrent or persistent sinus infections.',
        'Snoring or disrupted sleep caused by nasal obstruction.',
        'Worsening asthma control in patients with pre-existing asthma.',
      ]}
      symptomsNote="Small polyps may cause no symptoms and are sometimes found incidentally on imaging or endoscopy. Progressive loss of smell — particularly when it develops gradually over months — is a hallmark symptom that warrants specialist assessment even when other symptoms seem mild."
      causes={[
        'Prolonged type 2 eosinophilic inflammation of the nasal and sinus lining — the most common underlying mechanism, driven by immune dysregulation rather than infection or allergy alone.',
        'Coexisting asthma, which shares the same type 2 inflammatory pathway — a significant proportion of patients with nasal polyps also have asthma.',
        'Sensitivity to aspirin or NSAIDs in some patients — this triad of polyps, asthma, and aspirin sensitivity is a recognised clinical pattern called aspirin-exacerbated respiratory disease.',
        'Allergy may be present alongside polyps in some patients but is not the direct cause of polyp formation.',
        'In children, nasal polyps are uncommon and should always prompt investigation for cystic fibrosis.',
      ]}
      causesCitation="Fokkens WJ et al. European Position Paper on Rhinosinusitis and Nasal Polyps (EPOS) 2020. Rhinology. 2020;58(Suppl S29):1–464."
      whenToSeekHelp={{
        overview:
          'Arrange specialist review if you have persistent nasal blockage, loss of smell, or recurrent sinus infections — particularly if symptoms have been progressive over weeks or months. Loss of smell that develops gradually is one of the most important reasons to seek early assessment, as prolonged anosmia is slower to recover. If you have asthma and your respiratory symptoms are worsening alongside nasal symptoms, this warrants prompt combined assessment.',
        warningSignsHeading: 'Seek urgent review if you develop:',
        warningSigns: [
          'Swelling or redness around one or both eyes',
          'Vision changes or double vision',
          'A severe or unusual headache',
          'Polyps that are one-sided — unilateral nasal polyps require exclusion of other diagnoses including tumour',
          'Nosebleeds associated with the polyp area',
        ],
      }}
      treatmentOverview={{
        overview:
          'Management of nasal polyps is long-term and stepwise, based on the EPOS 2020 framework used as the clinical standard across Australian rhinology practice. The goal is to control the underlying inflammation, reduce polyp bulk, restore airflow and smell, and prevent recurrence. No single treatment is a permanent cure — the most successful outcomes involve a combination of consistent medical treatment and, where indicated, surgery and biologic therapy.',
        treatments: [
          {
            heading: 'Saline nasal irrigation',
            body: 'High-volume saline rinsing is the foundation of daily nasal care at every stage of treatment. It clears mucus, removes inflammatory mediators, and improves the penetration of corticosteroid sprays into the nasal cavity. Use a pre-mixed sterile sachet dissolved in cooled boiled water — not tap water. Australian products available from any pharmacy include NeilMed Sinus Rinse and Flo Sinus Care. Always rinse before applying a nasal spray.',
          },
          {
            heading: 'Intranasal corticosteroid sprays',
            body: 'Daily intranasal corticosteroid sprays reduce nasal inflammation and can shrink small polyps over time. They are the mainstay of ongoing medical treatment before and after surgery. Australian options include mometasone furoate (Nasonex), budesonide (Rhinocort), and fluticasone furoate (Avamys). In post-surgical patients, corticosteroid irrigation — delivering the medication in a high-volume rinse rather than a spray — is often more effective at reaching the sinus cavities.',
          },
          {
            heading: 'Oral corticosteroids',
            body: 'Short courses of oral prednisolone can rapidly reduce polyp size and temporarily restore airflow and smell. They are useful for bridging treatment before surgery or for assessing how well a patient responds to corticosteroid therapy. Long-term oral corticosteroids are not appropriate for nasal polyps due to significant systemic side effects — they are used in short, supervised courses only.',
          },
          {
            heading: 'Endoscopic sinus surgery (ESS)',
            body: 'Surgery is recommended when symptoms persist despite appropriate medical treatment. Endoscopic sinus surgery removes obstructing polyp tissue and opens the natural drainage pathways of the sinuses without any external incisions. This allows better mucus clearance and creates space for topical medications to work more effectively post-operatively. Polyps commonly recur after surgery — surgery is part of a long-term management plan, not a one-time solution. Post-surgical care with nasal irrigation and corticosteroid sprays is essential.',
          },
          {
            heading: 'Biologic therapy',
            body: 'For patients with severe, recurrent, or uncontrolled disease meeting EPOS 2020 criteria, biologic injections targeting the underlying type 2 inflammatory pathway are available in Australia. These are fortnightly or monthly subcutaneous injections, self-administered at home. Your rhinologist will assess whether you meet criteria and can either prescribe or further refer you to a respiratory physician or allergist/immunologist. Both work together to manage your ongoing care.',
          },
        ],
      }}
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
      faqItems={nasalPolypsFaqItems}
    />
  )
}
