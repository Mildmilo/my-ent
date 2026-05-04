// TODO: CLINICAL REVIEW - awaiting Dr Banks sign-off (Tier C)

import type { Metadata } from 'next'
import Image from 'next/image'
import { ConditionPageTemplate } from '@/components/templates/ConditionPageTemplate'

const hayfeverFaqItems = [
  {
    question: 'What is the difference between hayfever and allergic rhinitis?',
    answer:
      'They are essentially the same condition. Hayfever is the common term most people use, particularly when symptoms are triggered by seasonal pollen exposure. Allergic rhinitis is the medical term and includes both seasonal symptoms and year-round symptoms caused by triggers such as house dust mite, pet dander, or mould. Many patients have both seasonal and perennial components.',
  },
  {
    question: 'How common is hayfever in Australia?',
    answer:
      'Very common. According to the Australian Institute of Health and Welfare, around 6.1 million Australians — approximately one in four people — had allergic rhinitis in 2022. This makes allergic rhinitis one of the most common chronic allergic conditions in Australia.',
  },
  {
    question: 'What are the most common triggers of hayfever in Sydney?',
    answer:
      'In Sydney, common triggers include grass pollen during spring and early summer, as well as year-round exposure to house dust mite, pet dander, mould, and cockroach allergen. Some patients are also sensitive to weed pollens. House dust mite is a particularly important perennial trigger in Sydney\'s humid coastal environment. Wattle is often blamed for spring symptoms, but allergy testing less commonly confirms it as the main cause.',
  },
  {
    question: 'Can hayfever affect asthma?',
    answer:
      'Yes — the link is well established and clinically important. The nose and lungs are part of the same airway, and inflammation in one area often affects the other. Poorly controlled allergic rhinitis can worsen asthma control, and treating hayfever properly often helps asthma symptoms as well. In Australia, grass pollen is also associated with thunderstorm asthma, where storm conditions break pollen into very small particles that can reach deep into the lungs and trigger severe asthma attacks. Patients with asthma and seasonal hayfever should make sure their asthma treatment is optimised before pollen season.',
  },
  {
    question: 'What is the difference between seasonal and perennial allergic rhinitis?',
    answer:
      'Seasonal allergic rhinitis causes symptoms at particular times of year, usually when certain pollens are present. Perennial allergic rhinitis causes symptoms throughout the year because triggers such as house dust mite, pet dander, or mould are present more continuously in the environment. Many patients have a year-round baseline with seasonal flares on top of that.',
  },
  {
    question: 'What nasal spray is best for hayfever in Australia?',
    answer:
      'Intranasal corticosteroid sprays are the evidence-based first-line treatment for moderate or persistent hayfever. They are generally more effective than oral antihistamines alone for nasal blockage and ongoing nasal symptoms. Common Australian options include mometasone furoate (Nasonex), budesonide (Rhinocort), and fluticasone furoate (Avamys). They work best when used consistently, and the full benefit may take one to two weeks to develop. For some patients, a combined corticosteroid-antihistamine nasal spray may also be appropriate. For mild or intermittent symptoms, a non-sedating oral antihistamine such as cetirizine, loratadine, or fexofenadine may be enough. Eye drops can be added when eye symptoms are prominent.',
  },
  {
    question: 'Are antihistamine tablets enough to treat hayfever?',
    answer:
      'For mild or occasional symptoms — especially sneezing, itch, or watery eyes — a non-sedating antihistamine tablet may be appropriate and effective. However, for persistent or more troublesome hayfever, particularly when nasal blockage is a major issue, antihistamine tablets alone are often not enough. In those situations, an intranasal corticosteroid spray is usually more effective. Older sedating antihistamines such as promethazine can cause drowsiness and are best avoided during the day.',
  },
  {
    question: 'What is allergen immunotherapy and is it available in Australia?',
    answer:
      'Allergen immunotherapy — sometimes called desensitisation — is the only treatment that aims to modify the underlying allergic response rather than simply control symptoms. It works by exposing the immune system to carefully controlled amounts of the relevant allergen over time, with the goal of reducing sensitivity. In Australia it is available as subcutaneous injections given in a clinic, or as prescribed sublingual tablets for selected allergens such as grass pollen and house dust mite. Treatment usually continues for three to five years, and the benefits can persist for years after completion. Immunotherapy should be initiated and supervised by a clinical immunology or allergy specialist.',
  },
  {
    question: 'Can hayfever be cured?',
    answer:
      'There is no guaranteed permanent cure. However, allergen immunotherapy can produce long-lasting improvement in carefully selected patients by reducing sensitivity to the relevant allergen. For most people, the goal is excellent symptom control that allows normal sleep, concentration, and daily function, using the minimum treatment needed.',
  },
  {
    question: 'Should I see an ENT or an allergist for hayfever?',
    answer:
      'Both may have a role. An ENT surgeon is particularly helpful when nasal blockage is prominent, when there may be structural problems such as a deviated septum or nasal polyps, or when symptoms are not settling with standard treatment. An allergist or clinical immunologist is the appropriate specialist for formal allergy testing, confirmation of allergen sensitivities, and consideration of allergen immunotherapy. Your GP is usually the best starting point and can help direct you to the right specialist.',
  },
  {
    question: 'Does hayfever get worse as you get older?',
    answer:
      'Symptoms often fluctuate over time rather than steadily worsening. Some people find their symptoms improve, while others develop new sensitivities or notice symptoms change after moving to a different environment or climate. Pregnancy can also make rhinitis symptoms worse. If symptoms that were previously manageable become more troublesome, it is worth seeking review.',
  },
  {
    question: 'Will every surgeon at My-ENT approach my condition the same way?',
    answer:
      'Individual surgeons within My-ENT may approach assessment and management differently based on their subspecialty training and clinical experience. Your surgeon will discuss the most appropriate pathway for your specific situation at your consultation.',
  },
]

export const metadata: Metadata = {
  title: 'Hayfever Treatment Sydney | Allergic Rhinitis Specialist | My-ENT',
  description:
    'Hayfever and allergic rhinitis information for Sydney patients — causes, triggers, nasal sprays, immunotherapy, and when to see a specialist at My-ENT.',
}

export default function HayfeverAllergicRhinitisPage() {
  return (
    <ConditionPageTemplate
      slug="hayfever-allergic-rhinitis"
      title="Hayfever & Allergic Rhinitis"
      clinicalTerm="Allergic rhinitis"
      plainEnglishSummary="Hayfever — or allergic rhinitis — is a very common allergic condition in Australia, affecting around one in four people. It happens when the immune system overreacts to airborne allergens such as grass pollen, house dust mite, or pet dander, leading to symptoms such as sneezing, a runny or blocked nose, and itchy or watery eyes. Symptoms may be seasonal, present all year, or a combination of both. Treatment ranges from nasal sprays and antihistamines through to allergen immunotherapy, which can reduce sensitivity to the underlying trigger in selected patients."
      heroImageSlot={
        <Image
          src="/images/Conditions/hayfever-allergic-rhinitis-condition-myent.webp"
          alt="Patient with hayfever and allergic rhinitis seeking specialist care at My-ENT Sydney."
          width={1200}
          height={675}
          priority={true}
          className="h-full w-full object-cover"
        />
      }
      symptoms={[
        'Frequent sneezing, often in bursts — particularly on waking or after exposure to outdoor pollen or other triggers.',
        'Runny nose with clear, watery discharge.',
        'Nasal congestion or blockage.',
        'Itchy nose, palate, or throat.',
        'Itchy, red, or watery eyes — often occurring alongside allergic rhinitis.',
        'Post-nasal drip causing throat clearing, mild cough, or a sensation of mucus at the back of the throat.',
        'Fatigue and reduced concentration when symptoms are poorly controlled.',
        'Worsening of asthma symptoms in patients with coexisting asthma.',
      ]}
      symptomsNote="Symptoms that occur at similar times each year suggest a seasonal pollen trigger. Symptoms present throughout the year — particularly at home or on waking — may suggest perennial triggers such as house dust mite or pet dander. Many patients have a mixture of both."
      causes={[
        'Grass pollen — an important seasonal trigger in Sydney, usually during spring and early summer.',
        'House dust mite — a major year-round trigger in Sydney, particularly in bedding, carpets, and soft furnishings.',
        'Cat and dog dander — an important perennial trigger for sensitised patients.',
        'Mould spores — more common in damp indoor environments and after wet weather.',
        'Cockroach allergen — relevant in some urban environments.',
        'Weed pollens — a trigger for some patients.',
      ]}
      causesCitation="Australian Institute of Health and Welfare. Allergic rhinitis (hay fever). ASCIA Allergic Rhinitis Clinical Update 2024. ARIA 2024 update."
      whenToSeekHelp="See your GP if hayfever symptoms are affecting sleep, work, school, or day-to-day function despite appropriate over-the-counter treatment. ENT review is helpful when nasal blockage is a major symptom, when there may be structural nasal problems such as a deviated septum or polyps, or when symptoms remain poorly controlled despite medical therapy. Allergy specialist review is appropriate when specific allergen confirmation or allergen immunotherapy is being considered. If you have asthma as well as hayfever, your asthma treatment should be reviewed before pollen season."
      treatmentOverview={{
        overview:
          'Treatment is guided by symptom severity and frequency. The goal is good symptom control with the least treatment needed. Starting treatment before a known pollen season can improve control in patients with predictable seasonal symptoms.',
        treatments: [
          {
            heading: 'Allergen avoidance',
            body: 'Reducing exposure to known triggers can help, although it is rarely enough on its own. Practical measures may include monitoring local pollen forecasts at auspollen.org.au, keeping windows closed on high pollen days, showering after time outdoors during pollen season, using dust mite covers on pillows and mattresses, washing bedding weekly in hot water above 60°C, and reducing indoor dampness or mould exposure where relevant.',
          },
          {
            heading: 'Intranasal corticosteroid sprays',
            body: 'These are the evidence-based first-line treatment for moderate or persistent hayfever. They are generally more effective than antihistamine tablets alone for nasal blockage and ongoing nasal symptoms. Common Australian options include mometasone furoate (Nasonex), budesonide (Rhinocort), and fluticasone furoate (Avamys). They work best when used regularly and may take one to two weeks to reach full effect. Saline irrigation beforehand may help improve comfort and penetration.',
          },
          {
            heading: 'Antihistamine tablets and nasal sprays',
            body: 'Non-sedating oral antihistamines such as cetirizine, loratadine, or fexofenadine can help with sneezing, itch, and runny nose, particularly in mild or intermittent disease. Intranasal antihistamines can provide relatively rapid relief and may be used alone or in combination with an intranasal corticosteroid depending on symptom pattern and severity.',
          },
          {
            heading: 'Eye drops',
            body: 'When eye symptoms are prominent, topical eye drops can be added. Options available in Australia include sodium cromoglycate and ketotifen. Simple measures such as wearing sunglasses outdoors may also reduce pollen exposure to the eyes.',
          },
          {
            heading: 'Allergen immunotherapy (desensitisation)',
            body: 'This is the only treatment that aims to modify the underlying allergic response. In Australia it is available as clinic-based injections or prescribed sublingual tablets for selected allergens such as grass pollen and house dust mite. Treatment typically runs for three to five years and should be initiated by a clinical immunology or allergy specialist.',
          },
        ],
      }}
      extraContent={
        <section className="myent-section border-t border-neutral-100 bg-neutral-50">
          <div className="myent-container">
            <h2 className="text-2xl text-neutral-800">Useful resources</h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-500">
              The following Australian organisations provide reliable, evidence-based patient information on hayfever and allergic rhinitis.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: 'ASCIA — Allergic Rhinitis',
                  description: 'Australia\'s peak allergy body. Patient information, treatment plans, and specialist locator.',
                  href: 'https://www.allergy.org.au/patients/allergic-rhinitis-hay-fever-and-sinusitis',
                },
                {
                  name: 'ASCIA — Allergen Immunotherapy',
                  description: 'Information on desensitisation — how it works, who is eligible, and what to expect.',
                  href: 'https://www.allergy.org.au/patients/allergy-treatments/allergen-immunotherapy',
                },
                {
                  name: 'Allergy & Anaphylaxis Australia',
                  description: 'Patient support organisation with practical guides on managing hayfever and allergic conditions.',
                  href: 'https://allergyfacts.org.au/__interest/allergic-rhinitis/',
                },
                {
                  name: 'AusPollen — Daily Pollen Forecast',
                  description: 'National pollen monitoring network. Check daily pollen counts for Sydney and across Australia.',
                  href: 'https://auspollen.edu.au',
                },
                {
                  name: 'AIHW — Allergic Rhinitis Data',
                  description: 'Australian Institute of Health and Welfare statistics on allergic rhinitis prevalence and trends.',
                  href: 'https://www.aihw.gov.au/reports/chronic-respiratory-conditions/allergic-rhinitis-hay-fever',
                },
                {
                  name: 'Healthdirect — Hayfever',
                  description: 'Australian Government health information service — plain English overview of hayfever causes and management.',
                  href: 'https://www.healthdirect.gov.au/hay-fever',
                },
              ].map((resource) => (
                <a
                  key={resource.href}
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="myent-card block hover:border-teal-200 transition-colors"
                >
                  <p className="text-sm font-medium text-teal-600">{resource.name}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-neutral-500">{resource.description}</p>
                  <p className="mt-2 text-xs text-neutral-400">External link ↗</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      }
      relatedProcedures={[
        {
          title: 'Nasendoscopy',
          href: '/procedures/nasendoscopy',
        },
        {
          title: 'Septoplasty and turbinate reduction',
          href: '/procedures/septoplasty-turbinate-reduction',
        },
        {
          title: 'Endoscopic sinus surgery (ESS)',
          href: '/procedures/endoscopic-sinus-surgery',
        },
      ]}
      faqItems={hayfeverFaqItems}
    />
  )
}
