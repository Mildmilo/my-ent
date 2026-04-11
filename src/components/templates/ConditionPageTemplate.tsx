import type { ReactNode } from 'react'
import { BreadcrumbNav } from '@/components/shared/BreadcrumbNav'

interface RelatedLink {
  title: string
  href: string
}

interface FaqItem {
  question: string
  answer: string
}

interface ConditionPageTemplateProps {
  title: string
  clinicalTerm?: string
  plainEnglishSummary: string
  /** Optional hero image node. Rendered with a gradient overlay and title treatment in the template. */
  heroImageSlot?: ReactNode
  symptoms: string[]
  causes: string[]
  causesCitation?: string
  whenToSeekHelp: string
  treatmentOverview: string
  relatedProcedures: RelatedLink[]
  sinusQuestionnaireCalloutHeading?: string
  faqItems?: FaqItem[]
}

// DO NOT list individual surgeons on condition pages - see CLAUDE.md Section 2 for rationale.
const choosingYourSurgeonStatement =
  "Choosing the right specialist takes thought. Fellowship training, experience with the relevant condition, and contribution to teaching and research are all meaningful indicators. A public appointment at a tertiary hospital is another recognised marker of professional standing. Online reviews can be helpful, but they don't tell the whole story."

export function ConditionPageTemplate({
  title,
  clinicalTerm,
  plainEnglishSummary,
  heroImageSlot,
  symptoms,
  causes,
  causesCitation,
  whenToSeekHelp,
  treatmentOverview,
  relatedProcedures,
  sinusQuestionnaireCalloutHeading,
  faqItems,
}: ConditionPageTemplateProps) {
  const faqSchema = faqItems
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }
    : null

  return (
    <>
      <section className="myent-section border-b border-neutral-200 bg-white">
        <div className="myent-container">
          <BreadcrumbNav sectionLabel="Conditions" pageTitle={title} />
          <p className="myent-eyebrow">Condition</p>
          {heroImageSlot ? (
            <div className="relative mt-8 h-56 overflow-hidden rounded-xl lg:h-[26rem]">
              {heroImageSlot}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-teal-900/60 to-transparent"
              />
              <div className="absolute inset-y-0 left-0 flex w-full items-center p-6 lg:w-1/3 lg:p-10">
                <h1 className="text-3xl text-white lg:text-5xl">{title}</h1>
              </div>
            </div>
          ) : (
            <h1 className="mt-4 text-4xl lg:text-5xl">{title}</h1>
          )}
          {clinicalTerm ? (
            <p className="mt-4 text-sm text-neutral-500">Clinical term: {clinicalTerm}</p>
          ) : null}
          <p className="mt-6 max-w-3xl text-neutral-600">{plainEnglishSummary}</p>
        </div>
      </section>

      <section className="myent-section">
        <div className="myent-container grid grid-cols-1 gap-12 lg:grid-cols-2">
          <article className="myent-card">
            <p className="myent-eyebrow">Symptoms</p>
            <h2 className="mt-3 text-3xl">What patients often notice</h2>
            <ul className="mt-5 space-y-3 text-neutral-600">
              {symptoms.map((item) => (
                <li key={item} className="border-b border-neutral-100 pb-3 last:border-b-0 last:pb-0">
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="myent-card">
            <p className="myent-eyebrow">Causes</p>
            <h2 className="mt-3 text-3xl">Why this can happen</h2>
            <div className="mt-5 text-neutral-600">
              {causes.map((item) => (
                <p key={item} className="mb-3 last:mb-0">
                  {item}
                </p>
              ))}
            </div>
            {causesCitation ? <p className="mt-4 text-xs italic text-neutral-400">{causesCitation}</p> : null}
          </article>
        </div>
      </section>

      <section className="myent-section bg-neutral-100">
        <div className="myent-container grid grid-cols-1 gap-8 lg:grid-cols-2">
          <article className="myent-card">
            <p className="myent-eyebrow">When to seek help</p>
            <h2 className="mt-3 text-3xl">When to arrange review</h2>
            <p className="mt-5 text-neutral-600">{whenToSeekHelp}</p>
            <div className="mt-6">
              <a className="myent-btn-primary" href="/appointments">
                Request an appointment
              </a>
            </div>
          </article>

          <article className="myent-card">
            <p className="myent-eyebrow">Treatment</p>
            <h2 className="mt-3 text-3xl">Treatment overview</h2>
            <p className="mt-5 text-neutral-600">{treatmentOverview}</p>
          </article>
        </div>
      </section>

      <section className="myent-section">
        <div className="myent-container grid grid-cols-1 gap-8 lg:grid-cols-2">
          <article className="myent-card">
            <p className="myent-eyebrow">Related procedures</p>
            <h2 className="mt-3 text-3xl">Procedure pathways</h2>
            <ul className="mt-5 space-y-3">
              {relatedProcedures.map((procedure) => (
                <li key={procedure.href}>
                  <a className="text-sm font-medium text-teal-400 hover:text-teal-500" href={procedure.href}>
                    {procedure.title}
                  </a>
                </li>
              ))}
            </ul>
          </article>

          <div className="space-y-8">
            {sinusQuestionnaireCalloutHeading ? (
              <article className="myent-card border border-teal-200 bg-teal-50/60">
                <p className="myent-eyebrow">Pre-appointment</p>
                <h2 className="mt-3 font-serif text-2xl text-neutral-800">{sinusQuestionnaireCalloutHeading}</h2>
                <p className="mt-5 text-base leading-relaxed text-neutral-600">
                  If you are attending My-ENT for a nose or sinus concern, our pre-appointment questionnaire helps our
                  clinical team prepare for your consultation. It takes most patients four to six minutes to complete.
                </p>
                <div className="mt-6">
                  <a className="myent-btn-primary" href="/appointments/sinus-assessment">
                    Complete the sinus questionnaire
                  </a>
                </div>
              </article>
            ) : null}

            <article className="myent-card">
              <p className="myent-eyebrow">Choosing your surgeon</p>
              <h2 className="mt-3 font-serif text-2xl text-neutral-800">Choosing your surgeon</h2>
              <p className="mt-5 text-base leading-relaxed text-neutral-600">{choosingYourSurgeonStatement}</p>
            </article>
          </div>
        </div>
      </section>

      {faqItems ? (
        <section className="myent-section border-t border-neutral-200 bg-neutral-100">
          <div className="myent-container">
            <article className="myent-card">
              <p className="myent-eyebrow">Frequently asked questions</p>
              <h2 className="mt-3 text-3xl">Common questions about {title.toLowerCase()}</h2>
              <div className="mt-6 space-y-3">
                {faqItems.map((item) => (
                  <details key={item.question} className="group rounded-xl border border-neutral-200 bg-white px-5 py-4">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                      <span className="text-base font-medium text-neutral-800">{item.question}</span>
                      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-neutral-200 text-neutral-500 transition-colors duration-150 group-open:border-teal-400 group-open:bg-teal-400 group-open:text-white">
                        <span className="text-sm leading-none">+</span>
                      </span>
                    </summary>
                    <p className="mt-4 border-t border-neutral-100 pt-4 text-base leading-relaxed text-neutral-600">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </article>
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        </section>
      ) : null}
    </>
  )
}