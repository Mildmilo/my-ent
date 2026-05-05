// TODO: CLINICAL REVIEW - awaiting Dr Banks sign-off (Tier C)

import type { Metadata } from 'next'
import Image from 'next/image'
import { ConditionPageTemplate } from '@/components/templates/ConditionPageTemplate'

const lprFaqItems = [
  {
    question: 'What is laryngopharyngeal reflux and how is it different from heartburn?',
    answer:
      'Laryngopharyngeal reflux (LPR) occurs when stomach contents — acid, pepsin, and bile — travel up the oesophagus and reach the back of the throat, voice box, and nasal passages. Unlike classic gastro-oesophageal reflux disease (GERD), LPR often occurs without heartburn. This is because the larynx and pharynx are far more sensitive to even small amounts of reflux than the oesophagus — a single reflux event reaching the throat can cause significant irritation and symptoms. Many patients with LPR have no awareness of reflux occurring, which is why it is also called silent reflux.',
  },
  {
    question: 'What are the most common symptoms of LPR?',
    answer:
      'The most common symptoms are persistent throat clearing, a sensation of mucus or a lump in the throat (globus), chronic dry cough — particularly after meals or when lying down — hoarseness or voice change especially in the morning, mild sore throat or throat discomfort, and a feeling of post-nasal drip. Less commonly, LPR can cause difficulty swallowing, excess saliva, or worsening asthma. Importantly, fewer than half of patients with confirmed LPR experience heartburn — the absence of heartburn does not exclude the diagnosis.',
  },
  {
    question: 'Why does LPR cause a sensation of post-nasal drip?',
    answer:
      'LPR causes irritation and inflammation of the back of the throat and the area behind the nasal passages. This produces a sensation of phlegm or mucus that feels identical to post-nasal drip from the nose — but originates from throat irritation rather than nasal mucus production. Patients often describe it as mucus they cannot clear no matter how much they throat-clear or swallow. The throat clearing itself can become a habit that perpetuates irritation even after the reflux is controlled. This distinction matters because nasal sprays and antihistamines — the correct treatment for true post-nasal drip — are not effective for LPR.',
  },
  {
    question: 'How is LPR diagnosed?',
    answer:
      'Diagnosis of LPR is challenging because no symptom or sign is highly specific to the condition. The 2024 IFOS Consensus — the most current international guideline — acknowledges that many LPR symptoms overlap with allergic laryngopathies, chronic rhinosinusitis, and muscle tension dysphonia. At consultation, a nasendoscopy allows direct visualisation of the larynx and the back of the throat to look for characteristic signs of reflux-related inflammation. The gold standard diagnostic test is hypopharyngeal multichannel intraluminal impedance-pH monitoring, which measures both acid and non-acid reflux events reaching the throat. In practice, an empirical treatment trial is often the starting point, with formal testing reserved for patients who do not respond.',
  },
  {
    question: 'Are proton pump inhibitors (PPIs) always needed for LPR?',
    answer:
      'Not necessarily — and this is an important recent development in LPR management. Unlike GERD, which is predominantly driven by acid reflux, LPR often involves weakly acidic or non-acidic reflux events that are not fully suppressed by proton pump inhibitors. The 2024 IFOS Consensus and recent evidence suggest that for mild-to-moderate LPR without typical GERD symptoms, alginates and magaldrate — mucosal protective agents that form a physical barrier — are preferred as first-line empirical treatment over PPIs. PPIs combined with alginates are reserved for more severe cases or where typical heartburn is also present. A clinical trial found that a Mediterranean-style diet with alkaline water achieved equivalent symptom improvement to PPIs alone.',
  },
  {
    question: 'What dietary changes help LPR?',
    answer:
      'Diet is one of the most effective and evidence-supported treatments for LPR. The following measures are consistently recommended: avoid trigger foods and drinks including coffee, tea, alcohol, chocolate, carbonated drinks, fatty foods, spicy foods, citrus, and tomato-based foods; eat smaller meals more frequently rather than large meals; do not eat within two to three hours of lying down; drink plain or alkaline water as the primary beverage. A Mediterranean-style, plant-based, low-fat diet has been shown in studies to reduce LPR symptoms as effectively as proton pump inhibitors. Keeping a food diary for two to four weeks helps identify individual triggers, which vary between patients.',
  },
  {
    question: 'What lifestyle changes help LPR?',
    answer:
      'Beyond diet, the following lifestyle measures consistently reduce LPR symptoms: elevate the head of the bed by 15 to 20 centimetres — using bed risers rather than extra pillows, which can worsen reflux by flexing the neck; avoid tight clothing around the abdomen; lose weight if overweight, as excess abdominal pressure worsens reflux; avoid lying down for at least two to three hours after eating; stop smoking; manage stress, as stress increases stomach acid production and slows gastric emptying; avoid vigorous exercise immediately after meals.',
  },
  {
    question: 'How long does LPR take to improve with treatment?',
    answer:
      'LPR typically responds more slowly than GERD. The larynx and pharynx are slow to heal once inflamed, and symptom improvement usually takes eight to twelve weeks of consistent dietary change and medication if prescribed. Many patients notice improvement in cough and throat clearing before hoarseness resolves. Throat clearing as a habit can persist even after the underlying reflux is controlled, because the movement itself continues to irritate the throat. Voice therapy with a speech pathologist can help break this cycle if throat clearing persists despite adequate reflux control.',
  },
  {
    question: 'Can LPR damage the voice box or cause serious complications?',
    answer:
      'Chronic untreated LPR can cause persistent inflammation of the larynx, contribute to the development of vocal cord granulomas, and may worsen conditions such as subglottic stenosis in susceptible individuals. There is an association between chronic laryngeal acid exposure and laryngeal carcinoma, though the causative relationship is not firmly established and the absolute risk for an individual patient is low. More commonly, the practical consequence of untreated LPR is ongoing voice deterioration, persistent cough, and significantly impaired quality of life.',
  },
  {
    question: 'When should I see an ENT specialist rather than my GP for LPR?',
    answer:
      'See an ENT specialist if your symptoms have not improved after eight to twelve weeks of dietary modification and GP-managed treatment, if you have voice changes lasting more than three weeks, if you have difficulty swallowing, if you notice blood in saliva or phlegm, or if a lump in the neck accompanies throat symptoms. A nasendoscopy at ENT consultation allows direct assessment of the larynx and throat that cannot be performed in a GP setting.',
  },
  {
    question: 'Can LPR occur in children?',
    answer:
      'Yes — LPR occurs in children at all ages, though the clinical presentation differs significantly from adults. Infants with LPR often present with feeding difficulties, regurgitation, and respiratory symptoms. Older children more commonly present with chronic cough, recurrent croup, throat clearing, and voice change. Paediatric LPR is managed with dietary and positional measures as the first approach, with medication used selectively under specialist guidance.',
  },
  {
    question: 'Will every surgeon at My-ENT approach my condition the same way?',
    answer:
      'Individual surgeons within My-ENT may approach assessment and management differently based on their subspecialty training and clinical experience. Your surgeon will discuss the most appropriate pathway for your specific situation at your consultation.',
  },
]

export const metadata: Metadata = {
  title: 'Laryngopharyngeal Reflux (LPR) Treatment Sydney | Silent Reflux | My-ENT',
  description:
    'Laryngopharyngeal reflux (LPR) and silent reflux information for Sydney patients — symptoms, diagnosis, diet, and treatment at My-ENT, 135 Macquarie Street.',
}

export default function RefluxLprPage() {
  return (
    <ConditionPageTemplate
      slug="reflux-lpr"
      title="Laryngopharyngeal Reflux (LPR)"
      clinicalTerm="Laryngopharyngeal reflux disease (LPRD) / Silent reflux"
      plainEnglishSummary="Laryngopharyngeal reflux — also called LPR or silent reflux — occurs when stomach contents travel up the oesophagus and irritate the back of the throat and voice box. Unlike typical heartburn, LPR often occurs without any burning sensation. It is one of the most commonly missed causes of chronic throat clearing, persistent cough, hoarseness, and a sensation of mucus or a lump in the throat."
      heroImageSlot={
        <Image
          src="/images/Conditions/reflux-lpr-condition-myent.webp"
          alt="Patient with laryngopharyngeal reflux seeking specialist care at My-ENT Sydney."
          width={1200}
          height={675}
          priority={true}
          className="h-full w-full object-cover"
        />
      }
      symptoms={[
        'Persistent throat clearing — often the most prominent and bothersome symptom.',
        'A sensation of mucus, phlegm, or a lump in the throat that does not clear — known as globus pharyngeus.',
        'Chronic dry cough — particularly after meals, in the evening, or when lying down.',
        'Hoarseness or voice fatigue, especially in the morning or after prolonged speaking.',
        'Mild sore throat or throat discomfort — often described as a raw or scratchy feeling.',
        'A sensation of post-nasal drip without confirmed nasal pathology.',
        'Difficulty swallowing — particularly when eating quickly or eating dry foods.',
        'Worsening asthma or recurrent chest infections in some patients.',
      ]}
      symptomsNote="Fewer than half of patients with confirmed LPR experience heartburn. The absence of heartburn does not exclude the diagnosis. LPR is frequently misattributed to post-nasal drip, chronic sinusitis, or allergies — and may not respond to treatment for those conditions. If throat symptoms persist despite nasal treatment, LPR should be actively considered."
      causes={[
        'Dysfunction of the upper and lower oesophageal sphincters — allowing stomach contents to travel up the oesophagus and reach the throat and voice box.',
        'Acid and pepsin — the primary irritants. Pepsin, a digestive enzyme, can remain active in the throat long after a reflux event and continue causing damage even at near-neutral pH.',
        'Non-acid and weakly acidic reflux — an important distinction from GERD. Much of the reflux reaching the throat in LPR is not strongly acidic, which explains why proton pump inhibitors alone are often insufficient.',
        'Diet — fatty foods, caffeine, alcohol, chocolate, carbonated drinks, citrus, and spicy foods all reduce lower oesophageal sphincter tone and increase reflux events.',
        'Lifestyle factors — obesity, smoking, large meals, eating close to bedtime, and tight clothing all increase intra-abdominal pressure and promote reflux.',
        'Stress — increases gastric acid production and slows gastric emptying, worsening both the frequency and severity of reflux events.',
        'Hiatus hernia — a structural factor where part of the stomach protrudes above the diaphragm, impairing the natural reflux barrier.',
      ]}
      causesCitation="Lechien JR et al. The Dubai definition and diagnostic criteria of laryngopharyngeal reflux: the IFOS consensus. Laryngoscope. 2024;134(4):1614–1624. Zalvan CH et al. A comparison of alkaline water and Mediterranean diet vs proton pump inhibition for treatment of laryngopharyngeal reflux. JAMA Otolaryngol Head Neck Surg. 2017;143(10):1023–1029."
      whenToSeekHelp={{
        overview:
          'See your GP if throat symptoms — clearing, cough, hoarseness, or globus — are persistent and affecting your quality of life. ENT specialist review is appropriate when symptoms have not resolved after a trial of dietary change and GP-managed treatment, when voice change has persisted for more than three weeks, or when the diagnosis is uncertain. A nasendoscopy at consultation provides direct visualisation of the larynx and allows the ENT surgeon to assess for LPR-related changes, exclude other causes of throat symptoms, and guide treatment decisions.',
        warningSignsHeading: 'Seek prompt review if you develop:',
        warningSigns: [
          'Hoarseness lasting more than three weeks without clear cause',
          'Difficulty or pain on swallowing — particularly with solids',
          'Blood in saliva, phlegm, or coughed-up material',
          'A lump or swelling in the neck',
          'Unexplained weight loss alongside throat symptoms',
          'Progressive breathing difficulty or stridor',
        ],
      }}
      treatmentOverview={{
        overview:
          'LPR management is stepwise and differs meaningfully from GERD management. Because much of the reflux reaching the throat is weakly acidic or non-acidic, acid suppression alone is often insufficient. The 2024 IFOS Consensus emphasises dietary modification and mucosal protective agents as the foundation of treatment, with proton pump inhibitors reserved for more severe presentations. Improvement typically takes eight to twelve weeks of sustained treatment.',
        treatments: [
          {
            heading: 'Dietary modification',
            body: 'The most evidence-supported first-line treatment for LPR. A Mediterranean-style, plant-based, low-fat diet with alkaline water has been shown in a controlled study to achieve equivalent symptom improvement to proton pump inhibitors alone. Key dietary changes: avoid coffee, tea, alcohol, chocolate, carbonated drinks, fatty foods, spicy foods, citrus, and tomato-based foods; eat smaller, more frequent meals; avoid eating within two to three hours of lying down; drink plain or alkaline water as the primary beverage.',
          },
          {
            heading: 'Lifestyle measures',
            body: 'Elevate the head of the bed by 15 to 20 centimetres using bed risers — not extra pillows, which flex the neck and can worsen reflux. Avoid lying down for at least two to three hours after meals. Lose weight if overweight. Stop smoking. Avoid tight clothing around the abdomen. Manage stress. Avoid vigorous exercise immediately after eating.',
          },
          {
            heading: 'Mucosal protective agents — alginates',
            body: 'For mild-to-moderate LPR without heartburn, the 2024 IFOS Consensus supports alginates and magaldrate as preferred first-line medical treatment over proton pump inhibitors. Alginates — available in Australia as Gaviscon Advance and similar products — form a physical raft on the surface of stomach contents that prevents reflux from reaching the throat. They are effective against both acid and non-acid reflux, work immediately, and have an excellent safety profile. Taken after meals and at bedtime.',
          },
          {
            heading: 'Proton pump inhibitors (PPIs)',
            body: 'PPIs reduce gastric acid production and are appropriate for LPR with coexisting GERD symptoms, or when dietary measures and alginates have been insufficient. For LPR, PPIs are typically prescribed at double-dose for eight to twelve weeks. Response is slower than for GERD and should not be assessed before eight weeks. PPIs alone are not always effective for LPR because much of the reflux reaching the throat is non-acid.',
          },
          {
            heading: 'Voice therapy and speech pathology',
            body: 'Throat clearing as a habit can persist even after reflux is well controlled. A speech pathologist experienced in voice disorders can help break the throat-clearing habit using suppression techniques and vocal hygiene strategies. Voice therapy is also valuable when hoarseness or vocal fatigue persists despite reflux control, or when muscle tension dysphonia has developed as a secondary consequence of chronic throat irritation.',
          },
          {
            heading: 'Nasendoscopy and specialist assessment',
            body: 'A nasendoscopy at ENT consultation allows direct visualisation of the larynx, voice box, and posterior pharynx. This is the key step when diagnosis is uncertain, when symptoms are not responding to empirical treatment, or when symptoms have persisted for more than three months. It allows the ENT surgeon to assess for LPR-related laryngeal changes, exclude other diagnoses including vocal cord lesions, and guide the most appropriate treatment pathway.',
          },
        ],
      }}
      extraContent={
        <section className="myent-section border-t border-neutral-100 bg-neutral-50">
          <div className="myent-container">
            <div className="mx-auto max-w-3xl">

              {/* Koufman intro */}
              <div className="rounded-xl border border-teal-100 bg-white p-6 shadow-sm">
                <p className="myent-eyebrow">Reflux management protocol</p>
                <h2 className="mt-3 font-serif text-2xl text-neutral-800">
                  Dr Jamie Koufman&apos;s Reflux Detox Program
                </h2>

                {/* Who is Koufman */}
                <div className="mt-4 rounded-lg bg-teal-50 border border-teal-100 p-4">
                  <p className="text-sm font-semibold text-teal-800 mb-1">About Dr Jamie Koufman</p>
                  <p className="text-sm leading-relaxed text-teal-700">
                    Dr Jamie A. Koufman MD FACS is the laryngologist who coined the terms
                    &ldquo;laryngopharyngeal reflux&rdquo; and &ldquo;silent reflux&rdquo; — placing this
                    condition on the global medical map. Professor of Clinical Otolaryngology at
                    New York Medical College and former Professor of Surgery at Wake Forest University,
                    she has 45 years of clinical and research experience in reflux disease. A
                    New York Times bestselling author, past president of the American
                    Bronchoesophagological Association, and recipient of the Honor Award and
                    Distinguished Service Award of the American Academy of Otolaryngology, Dr Koufman
                    is widely regarded as the world&apos;s pre-eminent authority on LPR. Her seminal
                    research established that LPR frequently occurs without heartburn and that dietary
                    modification is as effective as medication for many patients.
                  </p>
                </div>

                {/* My-ENT endorsement */}
                <p className="mt-5 text-sm leading-relaxed text-neutral-600">
                  At My-ENT, we employ the principles of Dr Koufman&apos;s Reflux Detox Program
                  as a practical framework for patients managing LPR. The program combines
                  evidence-based dietary, lifestyle, positional, and pharmacological strategies
                  into a structured approach that patients can follow at home. Any medication
                  component should be discussed with your treating doctor before commencing.
                </p>

                {/* The 11 tips */}
                <div className="mt-6">
                  <p className="text-sm font-semibold text-neutral-700 mb-4">
                    The 11 tips — Dr Koufman&apos;s Reflux Detox Program:
                  </p>
                  <div className="space-y-3">
                    {[
                      {
                        number: '01',
                        tip: 'Go to bed with an empty stomach',
                        detail: 'Allow at least 7 hours of fasting before sleep — sometimes called a reverse fast. An empty stomach means significantly less reflux overnight.',
                      },
                      {
                        number: '02',
                        tip: 'Use gravity — sleep elevated',
                        detail: 'Sleep at approximately 45 degrees using pillows, a recliner, or an adjustable bed. Gravity is one of the most effective barriers against nocturnal reflux reaching the throat.',
                      },
                      {
                        number: '03',
                        tip: 'Do not make dinner your largest meal',
                        detail: 'Avoid major refuelling at the end of the day. Eat your largest meal at lunch when you have hours of upright activity ahead to aid gastric emptying.',
                      },
                      {
                        number: '04',
                        tip: 'Follow a low-fat, low-acid diet',
                        detail: 'Preferred fruits: melon and banana. Preferred protein: fish and poultry. Avoid fatty, fried, spicy, and acidic foods which relax the oesophageal sphincter and increase reflux.',
                      },
                      {
                        number: '05',
                        tip: 'No alcohol, carbonated, or fruit beverages',
                        detail: 'Avoid anything in a bottle or can other than alkaline water. Carbonation increases gastric pressure; alcohol and fruit juices are acidic and relax the oesophageal sphincter.',
                      },
                      {
                        number: '06',
                        tip: 'Drink alkaline water — limit caffeine',
                        detail: 'Drink water with a pH above 9.5. If you drink coffee or tea, limit caffeine to less than 120 mg per day. Alkaline water helps neutralise pepsin — the enzyme that damages the throat lining.',
                      },
                      {
                        number: '07',
                        tip: 'Use alkaline water spray in throat and nose',
                        detail: 'Applying alkaline water directly to the throat and nasal passages as a spray or dropper helps neutralise any pepsin that has reached these surfaces.',
                      },
                      {
                        number: '08',
                        tip: 'Famotidine — discuss with your doctor',
                        detail: 'Dr Koufman\'s protocol includes famotidine (an H2 blocker) taken before breakfast, before dinner, and at bedtime. Discuss this and any medication component with your treating doctor before commencing.',
                      },
                      {
                        number: '09',
                        tip: 'Take alginate after dinner and before bed',
                        detail: 'A tablespoon of alginate — available in Australia as Gaviscon Advance — after dinner and before bed forms a physical raft on stomach contents that prevents reflux from reaching the throat.',
                      },
                      {
                        number: '10',
                        tip: 'Chew gum or suck a hard candy after eating',
                        detail: 'Chewing stimulates saliva production. Saliva is alkaline and helps neutralise any acid or pepsin in the throat. It also promotes swallowing, which mechanically clears the oesophagus.',
                      },
                      {
                        number: '11',
                        tip: 'Take one probiotic daily',
                        detail: 'A daily probiotic supports gut microbiome health and may improve gastric motility, reducing the likelihood of reflux events. Choose a high-quality refrigerated probiotic from an Australian pharmacy.',
                      },
                    ].map((item) => (
                      <div
                        key={item.number}
                        className="flex gap-4 rounded-lg border border-neutral-100 bg-neutral-50 p-4"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-400 text-xs font-bold text-white">
                          {item.number}
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-neutral-800">{item.tip}</p>
                          <p className="mt-0.5 text-sm leading-relaxed text-neutral-500">{item.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Attribution and disclaimer */}
                <div className="mt-6 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3">
                  <p className="text-xs leading-relaxed text-neutral-500">
                    Protocol attributed to Dr Jamie A. Koufman MD FACS. Source:{' '}
                    <a
                      href="https://jamiekoufman.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-500 hover:text-teal-600"
                    >
                      jamiekoufman.com
                    </a>
                    . Any medication components should be discussed with your treating doctor
                    before commencing. This information is educational and does not constitute
                    medical advice.
                  </p>
                </div>
              </div>

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
          title: 'Microlaryngoscopy',
          href: '/procedures/microlaryngoscopy',
        },
      ]}
      faqItems={lprFaqItems}
    />
  )
}
