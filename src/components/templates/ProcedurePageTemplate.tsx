import Image from 'next/image'
import { BreadcrumbNav } from '@/components/shared/BreadcrumbNav'

const postOperativeCareStatement =
  'Recovery after any surgical procedure requires careful attention to the instructions provided by your treating surgeon. These instructions are tailored to your specific procedure and individual circumstances and should be followed precisely. If you have questions about your recovery, or if you experience symptoms that concern you, contact the rooms directly during business hours on 02 9247 1762. After hours, if you have an urgent concern, please present to your nearest emergency department.'

interface RelatedLink {
  title: string
  href: string
}

interface ProcedureHeroImage {
  src: string
  alt: string
}

interface ProcedurePageTemplateProps {
  title: string
  plainEnglishSummary: string
  heroImage?: ProcedureHeroImage
  indications: string[]
  whatToExpect: string
  recoveryOverview: string
  relatedConditions: RelatedLink[]
}

export function ProcedurePageTemplate({
  title,
  plainEnglishSummary,
  heroImage,
  indications,
  whatToExpect,
  recoveryOverview,
  relatedConditions,
}: ProcedurePageTemplateProps) {
  return (
    <>
      <section className="myent-section border-b border-neutral-200 bg-white">
        <div className="myent-container">
          <BreadcrumbNav sectionLabel="Procedures" pageTitle={title} />
          <p className="myent-eyebrow">Procedure</p>
          {heroImage ? (
            <div className="relative mt-4 overflow-hidden rounded-[28px] border border-neutral-200 bg-teal-800">
              <div className="absolute inset-0">
                <Image
                  src={heroImage.src}
                  alt={heroImage.alt}
                  width={1200}
                  height={675}
                  priority={true}
                  className="h-full min-h-[420px] w-full scale-[1.01] object-cover blur-[2px] lg:min-h-[520px]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(19,78,74,0.6)_0%,rgba(19,78,74,0.3)_28%,rgba(19,78,74,0)_55%)]" />
              </div>

              <div className="relative z-10 flex min-h-[420px] items-center px-6 py-8 sm:px-8 sm:py-10 lg:min-h-[520px] lg:px-12 lg:py-12">
                <div className="max-w-xl lg:max-w-[34rem]">
                  <h1 className="text-4xl text-white lg:text-5xl">{title}</h1>
                  <p className="mt-5 max-w-lg text-base leading-7 text-white/90 lg:text-xl lg:leading-8">
                    {plainEnglishSummary}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <>
              <h1 className="mt-4 text-4xl lg:text-5xl">{title}</h1>
              <p className="mt-6 max-w-3xl text-neutral-600">{plainEnglishSummary}</p>
            </>
          )}
        </div>
      </section>

      <section className="myent-section">
        <div className="myent-container grid grid-cols-1 gap-8 lg:grid-cols-2">
          <article className="myent-card">
            <p className="myent-eyebrow">Indications</p>
            <h2 className="mt-3 text-3xl">When this may be discussed</h2>
            <ul className="mt-5 space-y-3 text-neutral-600">
              {indications.map((item) => (
                <li key={item} className="border-b border-neutral-100 pb-3 last:border-b-0 last:pb-0">
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="myent-card">
            <p className="myent-eyebrow">What to expect</p>
            <h2 className="mt-3 text-3xl">Before and on the day</h2>
            <p className="mt-5 text-neutral-600">{whatToExpect}</p>
          </article>
        </div>
      </section>

      <section className="myent-section bg-neutral-100">
        <div className="myent-container">
          <article className="myent-card max-w-3xl">
            <p className="myent-eyebrow">Post-operative care</p>
            <h2 className="mt-3 text-3xl">Post-operative care</h2>
            <p className="mt-5 text-neutral-600">{postOperativeCareStatement}</p>
          </article>
        </div>
      </section>

      <section className="myent-section bg-neutral-100">
        <div className="myent-container grid grid-cols-1 gap-8 lg:grid-cols-2">
          <article className="myent-card">
            <p className="myent-eyebrow">Recovery</p>
            <h2 className="mt-3 text-3xl">Recovery overview</h2>
            <p className="mt-5 text-neutral-600">{recoveryOverview}</p>
            <div className="mt-6">
              <a className="myent-btn-outline" href="/patient-info/after-your-procedure">
                After your procedure guidance
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="myent-section">
        <div className="myent-container">
          <article className="myent-card">
            <p className="myent-eyebrow">Related conditions</p>
            <h2 className="mt-3 text-3xl">Conditions linked to this procedure</h2>
            <ul className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
              {relatedConditions.map((condition) => (
                <li key={condition.href}>
                  <a className="text-sm font-medium text-teal-400 hover:text-teal-500" href={condition.href}>
                    {condition.title}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <a className="myent-btn-primary" href="/appointments">
                Request an appointment
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}