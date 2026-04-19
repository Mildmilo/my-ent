// TODO: CLINICAL REVIEW - awaiting Dr Banks sign-off (Tier C)

import type { Metadata } from 'next'
import Image from 'next/image'
import { ConditionPageTemplate } from '@/components/templates/ConditionPageTemplate'

const hayfeverFaqItems = [
  {
    question: 'What is the difference between hayfever and allergic rhinitis?',
    answer:
      'They are the same condition. Hayfever is the common name used when symptoms are triggered by seasonal pollen exposure — typically in spring and summer. Allergic rhinitis is the clinical term that covers both seasonal reactions (pollen-driven) and perennial reactions that occur year-round, triggered by dust mites, pet dander, mould spores, or other indoor allergens. Many patients have both seasonal and perennial components.',
  },
  {
    question: 'How common is hayfever in Australia?',
    answer:
      'Extremely common. According to the Australian Institute of Health and Welfare, around 6.1 million Australians — approximately one in four people — had allergic rhinitis in 2022. Prevalence has been rising steadily, up from 16% in 2001 to 24% in 2022. Australia has one of the highest rates of allergic rhinitis in the world, driven in part by high grass pollen loads particularly in spring and early summer.',
  },
  {
    question: 'What are the most common triggers of hayfever in Sydney?',
    answer:
      'In Sydney and the NSW coastal strip, the most significant seasonal trigger is ryegrass pollen, which peaks in October through December. Other important pollen triggers include wattle (Acacia) in late winter and spring, and Paterson\'s Curse, which has spread into rural NSW. Year-round triggers include house dust mite — which thrives in Sydney\'s warm, humid coastal climate — cat and dog dander, mould spores, and cockroach allergen. Pollen counts on the NSW east coast are generally lower than Victoria because the Great Dividing Range provides some protection from westerly winds carrying inland pollen.',
  },
  {
    question: 'Can hayfever affect asthma?',
    answer:
      'Yes — the connection is well established and clinically important. The nose and lungs share the same mucosal airway, and inflammation in one area commonly drives inflammation in the other — a concept called the unified airway. Poorly controlled allergic rhinitis is a recognised risk factor for worsening asthma control, and treating hayfever effectively often leads to improved asthma outcomes. In Australia, ryegrass pollen is also a specific trigger for thunderstorm asthma — a phenomenon where pollen grains rupture in thunderstorm conditions and release particles small enough to penetrate deep into the airways, causing acute severe asthma. Patients with seasonal hayfever who also have asthma should be aware of this risk and ensure their asthma preventer therapy is optimised before the pollen season.',
  },
  {
    question: 'What is the difference between seasonal and perennial allergic rhinitis?',
    answer:
      'Seasonal allergic rhinitis causes symptoms at the same time each year, corresponding to specific pollen seasons — typically spring and early summer for grass pollen, and late winter for wattle. Symptoms clear when the season ends. Perennial allergic rhinitis causes symptoms throughout the year because the triggering allergens — most commonly house dust mite, pet dander, and mould — are present continuously in the home environment. Many patients in Sydney have both: a perennial baseline driven by dust mite, with a seasonal flare driven by spring grass pollen.',
  },
  {
    question: 'What nasal spray is best for hayfever in Australia?',
    answer:
      'Intranasal corticosteroid sprays are the evidence-based first-line treatment for moderate to persistent hayfever — more effective than oral antihistamines alone for nasal congestion and post-nasal drip. Australian options include mometasone furoate (Nasonex), budesonide (Rhinocort), and fluticasone furoate (Avamys). Several of these are available without prescription at Australian pharmacies. They work best when used consistently — maximum effect develops over one to two weeks of daily use. For intermittent or mild symptoms, a non-sedating oral antihistamine such as cetirizine, loratadine, or fexofenadine is appropriate. Eye drops (sodium cromoglycate or ketotifen) can be added when eye symptoms are prominent.',
  },
  {
    question: 'Are antihistamine tablets enough to treat hayfever?',
    answer:
      'For mild or intermittent symptoms — such as sneezing and watery eyes on high pollen days — a non-sedating antihistamine tablet (cetirizine, loratadine, or fexofenadine) is appropriate and effective. However, for persistent or moderate-to-severe hayfever, particularly when nasal congestion is prominent, antihistamine tablets alone are usually insufficient. Current ARIA 2024 guidelines and ASCIA 2024 recommendations support intranasal corticosteroid sprays as the more effective option for persistent symptoms, either alone or combined with an antihistamine. Older sedating antihistamines such as promethazine impair learning and concentration and are not recommended during the day.',
  },
  {
    question: 'What is allergen immunotherapy and is it available in Australia?',
    answer:
      'Allergen immunotherapy — also called desensitisation — is the only treatment that addresses the underlying immune mechanism of allergic rhinitis rather than just controlling symptoms. It involves regular, gradually increasing exposure to the specific allergens causing your symptoms, which over time retrains the immune system to become less reactive. In Australia it is available as subcutaneous injections (allergy shots given in a clinic) or sublingual preparations — daily tablets or drops placed under the tongue at home. TGA-approved sublingual tablets are available in Australia for grass pollen and house dust mite. A full course typically takes three to five years. Benefits have been shown to persist for five to eight years after completing treatment. Allergen immunotherapy for allergic rhinitis must be initiated by a clinical immunologist or allergist — your rhinologist or GP can assess whether you are a candidate and refer you to the appropriate specialist.',
  },
  {
    question: 'Can hayfever be cured?',
    answer:
      'There is no permanent cure in the conventional sense. However, allergen immunotherapy (desensitisation) comes closest — a completed three to five year course substantially reduces sensitivity to the triggering allergen and can produce lasting benefit for several years after stopping treatment. For most patients, the goal of management is excellent symptom control that allows normal daily function and sleep, using the minimum treatment needed. Many patients find that consistent use of an intranasal corticosteroid spray before and through the pollen season — rather than reacting to symptoms after they develop — significantly reduces the overall burden of hayfever.',
  },
  {
    question: 'Should I see an ENT or an allergist for hayfever?',
    answer:
      'Both have a role, and in many patients both are involved. A rhinologist or ENT surgeon is particularly helpful when nasal obstruction is a significant symptom, when hayfever coexists with structural nasal problems such as a deviated septum or nasal polyps, or when symptoms are not adequately controlled with standard medications. An allergist or clinical immunologist is the appropriate specialist to initiate formal allergy testing, confirm specific allergen sensitivities, and prescribe allergen immunotherapy. Your GP is the right starting point for mild-to-moderate hayfever, and will refer you to the appropriate specialist based on how your symptoms respond to initial management.',
  },
  {
    question: 'Does hayfever get worse as you get older?',
    answer:
      'For many people hayfever fluctuates significantly over a lifetime rather than consistently worsening. Some patients find symptoms improve in their 40s and 50s as immune reactivity naturally changes with age. Others find new sensitisations develop over time. Moving between climates or regions — for example relocating to Sydney from a different pollen zone — can also trigger the development of new sensitivities. Hayfever during pregnancy commonly worsens, typically in the second trimester. If symptoms that were previously well controlled become more difficult to manage, specialist review is worthwhile.',
  },
  {
    question: 'Will every surgeon at My-ENT approach my condition the same way?',
    answer:
      'Individual surgeons within My-ENT may approach assessment and management differently based on their subspecialty training and clinical experience. Your surgeon will discuss the most appropriate pathway for your specific situation at your consultation.',
  },
]

export const metadata: Metadata = {
  title: 'Hayfever Treatment Sydney | Allergic Rhinitis Specialist',
  description:
    'Hayfever and allergic rhinitis information for Sydney patients — causes, triggers, nasal sprays, immunotherapy, and when to see a specialist at My-ENT.',
  alternates: {
    canonical: '/conditions/hayfever-allergic-rhinitis',
  },
}

export default function HayfeverAllergicRhinitisPage() {
  return (
    <ConditionPageTemplate
      slug="hayfever-allergic-rhinitis"
      title="Hayfever & Allergic Rhinitis"
      clinicalTerm="Allergic rhinitis"
      plainEnglishSummary="Hayfever — or allergic rhinitis — is the most common allergic condition in Australia, affecting approximately one in four people. It occurs when the immune system overreacts to airborne substances such as grass pollen, dust mite, or pet dander, causing nasal congestion, sneezing, runny nose, and itchy eyes. Symptoms can be seasonal, year-round, or both. Treatment ranges from nasal sprays and antihistamines through to allergen immunotherapy — the only treatment that addresses the underlying cause."
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
        'Frequent sneezing, often in bursts — particularly on waking or on going outdoors during pollen season.',
        'Runny nose with clear, watery discharge.',
        'Nasal congestion or blockage — often worse in the morning, or on exposure to triggers.',
        'Itchy nose, palate, or throat.',
        'Itchy, red, or watery eyes — known as allergic conjunctivitis, which commonly accompanies allergic rhinitis.',
        'Post-nasal drip causing throat clearing, mild cough, or a sensation of mucus at the back of the throat.',
        'Fatigue and reduced concentration — particularly during pollen season when symptoms are at their peak.',
        'Worsening of asthma symptoms in patients with coexisting asthma.',
      ]}
      symptomsNote="Symptoms that occur at the same time each year — typically spring and early summer in Sydney — suggest a seasonal pollen trigger. Symptoms present throughout the year, particularly in the morning or after time at home, suggest a perennial trigger such as house dust mite. Both patterns can coexist in the same patient."
      causes={[
        'Grass pollen — the dominant seasonal trigger in Sydney and coastal NSW. Ryegrass pollen peaks from October through December. Pollen counts are generally lower on the NSW east coast than Victoria due to the protection of the Great Dividing Range.',
        'House dust mite — the most common year-round trigger in Sydney, which thrives in the warm, humid coastal climate. Mite allergen is found in bedding, carpets, soft furnishings, and soft toys.',
        'Cat and dog dander — a major perennial trigger for patients with household pets. Allergen from cats in particular is highly sticky and persists in homes long after the animal is removed.',
        'Wattle (Acacia) pollen — a significant trigger in late winter and early spring across NSW.',
        'Mould spores — common in damp environments and after wet weather. A particular issue in bathrooms, under-house spaces, and older Sydney homes.',
        'Cockroach allergen — relevant in urban environments and recognised as a trigger particularly in inner-city Sydney.',
        'Paterson\'s Curse — an introduced weed spreading through rural NSW that produces highly allergenic pollen.',
      ]}
      causesCitation="Australian Institute of Health and Welfare. Allergic rhinitis (hay fever). 2026. ASCIA Allergic Rhinitis Clinical Update 2024. ARIA Guidelines 2024–2025 Revision. Rhinology. 2025."
      whenToSeekHelp="See your GP if hayfever symptoms are affecting sleep, work, school, or daily function despite using over-the-counter antihistamines or nasal sprays. Specialist ENT review is appropriate when nasal congestion is a dominant symptom, when hayfever coexists with structural nasal problems such as polyps or a deviated septum, or when symptoms remain poorly controlled despite adequate medical treatment. Allergy specialist review is appropriate to confirm specific sensitisations and consider allergen immunotherapy. If you have asthma alongside hayfever, ensure your asthma preventer is reviewed before the grass pollen season — particularly given the risk of thunderstorm asthma in Sydney during spring."
      treatmentOverview={{
        overview:
          'Treatment is stepped according to symptom severity and frequency, following ASCIA 2024 and ARIA 2024–2025 guidelines. The goal is to achieve excellent symptom control that allows normal daily function, using the minimum treatment needed. Starting treatment before the pollen season begins — rather than reacting to symptoms after they develop — produces significantly better control.',
        treatments: [
          {
            heading: 'Allergen avoidance',
            body: 'Reducing exposure to identified triggers is a useful adjunct to medication, though it rarely achieves adequate control on its own. Practical measures for Sydney patients include: checking the daily pollen count at AusPollen.org.au and staying indoors on high-count days; keeping windows closed during peak pollen hours (morning); showering after outdoor activities during pollen season; encasing mattresses and pillows in dust mite-proof covers; washing bedding weekly in hot water (above 55°C); removing carpets in bedrooms where dust mite is the primary trigger; and limiting household pets for sensitised patients.',
          },
          {
            heading: 'Intranasal corticosteroid sprays',
            body: 'The evidence-based first-line treatment for moderate-to-persistent hayfever. More effective than antihistamine tablets alone for nasal congestion and post-nasal drip. Australian options available at pharmacies include mometasone furoate (Nasonex), budesonide (Rhinocort), and fluticasone furoate (Avamys). Use daily, starting one to two weeks before the expected pollen season for best results. Maximum effect develops with consistent use — do not stop when symptoms improve. Saline nasal irrigation before the spray improves penetration. These sprays are safe for long-term use.',
          },
          {
            heading: 'Antihistamine tablets and nasal sprays',
            body: 'Non-sedating oral antihistamines — cetirizine, loratadine, or fexofenadine — are effective for sneezing, runny nose, and eye symptoms, particularly for intermittent or mild hayfever. They work within one to two hours of taking. Intranasal antihistamines provide faster relief of nasal symptoms than oral tablets and can be used alongside intranasal corticosteroids for difficult-to-control symptoms. Avoid older sedating antihistamines (such as promethazine) during the day — they significantly impair driving and concentration.',
          },
          {
            heading: 'Eye drops',
            body: 'When eye symptoms are prominent, topical eye drops can be added alongside nasal treatment. Sodium cromoglycate drops (available over the counter in Australia) are useful when started before the season. Ketotifen drops provide faster relief and combine antihistamine and mast cell stabilising effects. Wearing wraparound sunglasses outdoors during pollen season also reduces direct pollen exposure to the eyes.',
          },
          {
            heading: 'Allergen immunotherapy (desensitisation)',
            body: 'The only treatment that addresses the underlying immune mechanism of allergic rhinitis. Recommended by ASCIA 2024 for patients with severe or inadequately controlled hayfever. Available in Australia as subcutaneous injections (given in a clinic) or TGA-approved sublingual daily tablets for grass pollen and house dust mite. A full course takes three to five years; benefits typically persist for five to eight years after completing treatment. Must be initiated by a clinical immunologist or allergist — your ENT surgeon or GP can assess candidacy and refer to the appropriate specialist.',
          },
        ],
      }}
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
