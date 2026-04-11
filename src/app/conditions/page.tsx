import type { Metadata } from 'next'
import Link from 'next/link'

type ConditionHref =
  | '/conditions/sinusitis'
  | '/conditions/nasal-polyps'
  | '/conditions/blocked-nose'
  | '/conditions/hayfever-allergic-rhinitis'
  | '/conditions/nosebleeds'
  | '/conditions/post-nasal-drip'
  | '/conditions/skull-base-conditions'
  | '/conditions/ear-infections'
  | '/conditions/hearing-loss'
  | '/conditions/tinnitus'
  | '/conditions/wax-impaction'
  | '/conditions/vertigo-dizziness'
  | '/conditions/tonsillitis'
  | '/conditions/snoring-sleep-apnoea'
  | '/conditions/voice-disorders'
  | '/conditions/swallowing-problems'
  | '/conditions/reflux-lpr'
  | '/conditions/cough'
  | '/conditions/paediatric-ear-infections'
  | '/conditions/paediatric-hearing-loss'
  | '/conditions/paediatric-tonsillitis'
  | '/conditions/paediatric-blocked-nose'
  | '/conditions/paediatric-snoring-osa'

interface ConditionEntry {
  title: string
  summary: string
  href: ConditionHref
}

interface ConditionCategory {
  label: string
  eyebrow: string
  conditions: ConditionEntry[]
}

const categories: ConditionCategory[] = [
  {
    label: 'Nose and sinuses',
    eyebrow: 'Nose & sinuses',
    conditions: [
      {
        title: 'Sinusitis',
        summary: 'Inflammation of the sinus lining causing facial pressure, blocked breathing, and discharge.',
        href: '/conditions/sinusitis',
      },
      {
        title: 'Nasal polyps',
        summary: 'Fleshy growths in the nasal passages that can cause persistent blockage and loss of smell.',
        href: '/conditions/nasal-polyps',
      },
      {
        title: 'Blocked nose',
        summary: 'Nasal obstruction from a range of causes including a deviated septum, turbinate enlargement, or inflammation.',
        href: '/conditions/blocked-nose',
      },
      {
        title: 'Hayfever and allergic rhinitis',
        summary: 'Allergic inflammation of the nasal lining causing sneezing, watery eyes, and congestion.',
        href: '/conditions/hayfever-allergic-rhinitis',
      },
      {
        title: 'Nosebleeds',
        summary: 'Recurrent or difficult-to-control nosebleeds (epistaxis) that may need specialist assessment.',
        href: '/conditions/nosebleeds',
      },
      {
        title: 'Post-nasal drip',
        summary: 'Excess mucus draining down the throat, often causing chronic cough or throat clearing.',
        href: '/conditions/post-nasal-drip',
      },
      {
        title: 'Skull base conditions',
        summary: 'Lesions and tumours at the anterior skull base that may require specialist ENT review.',
        href: '/conditions/skull-base-conditions',
      },
    ],
  },
  {
    label: 'Ear and hearing',
    eyebrow: 'Ear & hearing',
    conditions: [
      {
        title: 'Ear infections',
        summary: 'Acute or recurrent ear infections causing pain, discharge, or temporary hearing difficulty.',
        href: '/conditions/ear-infections',
      },
      {
        title: 'Hearing loss',
        summary: 'Gradual or sudden reduction in hearing from a range of treatable causes.',
        href: '/conditions/hearing-loss',
      },
      {
        title: 'Tinnitus',
        summary: 'Persistent ringing, buzzing, or other sounds in one or both ears.',
        href: '/conditions/tinnitus',
      },
      {
        title: 'Wax impaction',
        summary: 'Build-up of earwax that blocks the ear canal, causing hearing muffling or discomfort.',
        href: '/conditions/wax-impaction',
      },
      {
        title: 'Vertigo and dizziness',
        summary: 'Balance disturbance and a spinning sensation often linked to inner-ear conditions.',
        href: '/conditions/vertigo-dizziness',
      },
    ],
  },
  {
    label: 'Throat, voice, and airway',
    eyebrow: 'Throat, voice & airway',
    conditions: [
      {
        title: 'Tonsillitis',
        summary: 'Frequent or severe tonsil infections causing sore throat, fever, and swallowing difficulty.',
        href: '/conditions/tonsillitis',
      },
      {
        title: 'Snoring and sleep apnoea',
        summary: 'Disrupted breathing during sleep that may range from simple snoring to obstructive sleep apnoea.',
        href: '/conditions/snoring-sleep-apnoea',
      },
      {
        title: 'Voice disorders',
        summary: 'Changes in voice quality, hoarseness, or vocal fatigue that persist beyond a few weeks.',
        href: '/conditions/voice-disorders',
      },
      {
        title: 'Swallowing problems',
        summary: 'Difficulty swallowing (dysphagia) that warrants specialist assessment to identify the cause.',
        href: '/conditions/swallowing-problems',
      },
      {
        title: 'Reflux and LPR',
        summary: 'Laryngopharyngeal reflux causing throat irritation, chronic cough, and voice changes.',
        href: '/conditions/reflux-lpr',
      },
      {
        title: 'Cough',
        summary: 'Persistent cough driven by upper-airway causes including post-nasal drip, reflux, or infection.',
        href: '/conditions/cough',
      },
    ],
  },
  {
    label: 'Paediatric ENT',
    eyebrow: 'Paediatric',
    conditions: [
      {
        title: 'Paediatric ear infections',
        summary: 'Recurrent middle-ear infections in children that may need grommets or specialist review.',
        href: '/conditions/paediatric-ear-infections',
      },
      {
        title: 'Paediatric hearing loss',
        summary: 'Hearing difficulty in children, including glue ear and other causes of delayed speech development.',
        href: '/conditions/paediatric-hearing-loss',
      },
      {
        title: 'Paediatric tonsillitis',
        summary: 'Frequent tonsil infections in children, with assessment for tonsillectomy where appropriate.',
        href: '/conditions/paediatric-tonsillitis',
      },
      {
        title: 'Paediatric blocked nose',
        summary: 'Nasal obstruction in children from enlarged adenoids, deviation, or structural causes.',
        href: '/conditions/paediatric-blocked-nose',
      },
      {
        title: 'Paediatric snoring and OSA',
        summary: 'Snoring and sleep-disordered breathing in children assessed for adenotonsillar or structural causes.',
        href: '/conditions/paediatric-snoring-osa',
      },
    ],
  },
]

export const metadata: Metadata = {
  title: 'ENT Conditions Explained | Nose, Ear, Throat, Paediatric | My-ENT Sydney',
  description:
    'Explore ENT conditions treated at My-ENT in Sydney, including sinusitis, hearing loss, tinnitus, tonsillitis, and paediatric ENT care pathways.',
}

export default function ConditionsIndexPage() {
  return (
    <main>
      <section className="myent-section bg-teal-50">
        <div className="myent-container">
          <p className="myent-eyebrow">Conditions</p>
          <h1 className="mt-4 text-4xl lg:text-5xl">ENT conditions we treat</h1>
          <p className="mt-6 max-w-3xl text-base text-neutral-600">
            Each condition page explains what the condition is, how it presents, and the assessment
            and treatment pathways at My-ENT. Select a condition below to read more, or{' '}
            <Link className="font-medium text-teal-400 underline underline-offset-2" href="/appointments">
              request an appointment
            </Link>{' '}
            if you have a GP referral and are ready to be seen.
          </p>
        </div>
      </section>

      {categories.map((category) => (
        <section key={category.label} className="myent-section border-t border-neutral-200">
          <div className="myent-container">
            <p className="myent-eyebrow">{category.eyebrow}</p>
            <h2 className="mt-3 text-3xl">{category.label}</h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {category.conditions.map((condition) => (
                <Link
                  key={condition.href}
                  href={condition.href}
                  className="myent-card block group"
                >
                  <h3 className="text-xl group-hover:text-teal-400 transition-colors duration-150">
                    {condition.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-500">{condition.summary}</p>
                  <p className="mt-4 text-sm font-medium text-teal-400">Read more →</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="myent-section bg-neutral-100">
        <div className="myent-container">
          <p className="myent-eyebrow">Ready to be seen?</p>
          <h2 className="mt-3 text-3xl">Request an appointment</h2>
          <p className="mt-5 max-w-2xl text-base text-neutral-600">
            A GP referral is required for a Medicare rebate to apply to your specialist consultation.
            If you have a referral and are ready to proceed, submit your appointment request below.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="myent-btn-primary" href="/appointments">
              Request an appointment
            </Link>
            <Link className="myent-btn-outline" href="/appointments/fees-and-medicare">
              Fees and Medicare rebates
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
