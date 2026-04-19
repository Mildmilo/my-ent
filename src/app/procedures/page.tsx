import type { Metadata } from 'next'
import Link from 'next/link'

type ProcedureHref =
  | '/procedures/endoscopic-sinus-surgery'
  | '/procedures/septoplasty-turbinate-reduction'
  | '/procedures/skull-base-surgery'
  | '/procedures/transsphenoidal-pituitary-surgery'
  | '/procedures/nasendoscopy'
  | '/procedures/grommets'
  | '/procedures/myringoplasty'
  | '/procedures/wax-microsuction'
  | '/procedures/hearing-implant-surgery'
  | '/procedures/stapes-surgery'
  | '/procedures/acoustic-neuroma-surgery'
  | '/procedures/tonsillectomy'
  | '/procedures/adenoidectomy'
  | '/procedures/microlaryngoscopy'
  | '/procedures/snoring-surgery-uppp'
  | '/procedures/sleep-endoscopy-dise'

interface ProcedureEntry {
  title: string
  summary: string
  href: ProcedureHref
}

interface ProcedureCategory {
  label: string
  eyebrow: string
  procedures: ProcedureEntry[]
}

const categories: ProcedureCategory[] = [
  {
    label: 'Nose and sinuses',
    eyebrow: 'Nose & sinuses',
    procedures: [
      {
        title: 'Endoscopic sinus surgery (ESS)',
        summary: 'Minimally invasive surgery to open blocked sinuses, remove polyps, and restore normal drainage.',
        href: '/procedures/endoscopic-sinus-surgery',
      },
      {
        title: 'Septoplasty and turbinate reduction',
        summary: 'Correction of a deviated septum and enlarged turbinates to improve nasal airflow.',
        href: '/procedures/septoplasty-turbinate-reduction',
      },
      {
        title: 'Skull base surgery',
        summary: 'Endoscopic approaches to lesions and tumours at the anterior skull base.',
        href: '/procedures/skull-base-surgery',
      },
      {
        title: 'Transsphenoidal pituitary surgery',
        summary: 'Minimally invasive endoscopic removal of pituitary tumours via the nasal passages.',
        href: '/procedures/transsphenoidal-pituitary-surgery',
      },
      {
        title: 'Nasendoscopy',
        summary: 'An in-clinic diagnostic procedure using a small flexible camera to assess the nasal passages and throat.',
        href: '/procedures/nasendoscopy',
      },
    ],
  },
  {
    label: 'Ear and hearing',
    eyebrow: 'Ear & hearing',
    procedures: [
      {
        title: 'Grommets',
        summary: 'Small ventilation tubes inserted into the eardrum to treat glue ear and recurrent middle-ear infections.',
        href: '/procedures/grommets',
      },
      {
        title: 'Myringoplasty',
        summary: 'Surgical repair of a perforated eardrum to restore hearing and prevent recurrent infection.',
        href: '/procedures/myringoplasty',
      },
      {
        title: 'Wax microsuction',
        summary: 'Safe removal of earwax blockage using gentle suction under microscope guidance.',
        href: '/procedures/wax-microsuction',
      },
      {
        title: 'Hearing implant surgery',
        summary: 'Bone-anchored hearing aids (BAHA) and cochlear implants for hearing loss not corrected by conventional aids.',
        href: '/procedures/hearing-implant-surgery',
      },
      {
        title: 'Stapes surgery',
        summary: 'Stapedotomy or stapedectomy to restore hearing loss caused by otosclerosis.',
        href: '/procedures/stapes-surgery',
      },
      {
        title: 'Acoustic neuroma surgery',
        summary: 'Microsurgical removal of vestibular schwannoma — a benign tumour of the balance nerve.',
        href: '/procedures/acoustic-neuroma-surgery',
      },
    ],
  },
  {
    label: 'Throat, tonsils, and airway',
    eyebrow: 'Throat & airway',
    procedures: [
      {
        title: 'Tonsillectomy',
        summary: 'Surgical removal of the tonsils for recurrent tonsillitis or obstructive sleep-disordered breathing.',
        href: '/procedures/tonsillectomy',
      },
      {
        title: 'Adenoidectomy',
        summary: 'Removal of enlarged adenoids that obstruct breathing, cause recurrent infection, or contribute to glue ear.',
        href: '/procedures/adenoidectomy',
      },
      {
        title: 'Microlaryngoscopy',
        summary: 'Detailed examination and surgical treatment of the larynx and vocal cords under general anaesthetic.',
        href: '/procedures/microlaryngoscopy',
      },
      {
        title: 'Snoring surgery (UPPP)',
        summary: 'Uvulopalatopharyngoplasty — surgical reshaping of the palate and throat to reduce snoring and airway obstruction.',
        href: '/procedures/snoring-surgery-uppp',
      },
      {
        title: 'Sleep endoscopy (DISE)',
        summary: 'Drug-induced sleep endoscopy to identify the site and pattern of airway collapse during sleep.',
        href: '/procedures/sleep-endoscopy-dise',
      },
    ],
  },
]

export const metadata: Metadata = {
  title: 'ENT Procedures and Surgery | Nose, Ear, Throat',
  description:
    'Browse all 16 ENT procedures performed at My-ENT in Sydney. Patient-focused guides covering sinus surgery, ear procedures, tonsillectomy, and more.',
  alternates: {
    canonical: '/procedures',
  },
}

export default function ProceduresIndexPage() {
  return (
    <main>
      <section className="myent-section bg-teal-50">
        <div className="myent-container">
          <p className="myent-eyebrow">Procedures</p>
          <h1 className="mt-4 text-4xl lg:text-5xl">ENT procedures and surgery</h1>
          <p className="mt-6 max-w-3xl text-base text-neutral-600">
            Each procedure page explains what is involved, how to prepare, and what to expect
            afterward. Select a procedure below to read more, or{' '}
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
              {category.procedures.map((procedure) => (
                <Link
                  key={procedure.href}
                  href={procedure.href}
                  className="myent-card block group"
                >
                  <h3 className="text-xl group-hover:text-teal-400 transition-colors duration-150">
                    {procedure.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-500">{procedure.summary}</p>
                  <p className="mt-4 text-sm font-medium text-teal-400">Read more →</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="myent-section bg-neutral-100">
        <div className="myent-container">
          <p className="myent-eyebrow">Ready to proceed?</p>
          <h2 className="mt-3 text-3xl">Practical information for patients</h2>
          <p className="mt-5 max-w-2xl text-base text-neutral-600">
            The your-first-visit page covers what to bring, how to prepare, and what to expect from
            your consultation. When you have a GP referral, submit your appointment request to begin.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="myent-btn-primary" href="/appointments/your-first-visit">
              Your first visit
            </Link>
            <Link className="myent-btn-outline" href="/appointments">
              Request an appointment
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
