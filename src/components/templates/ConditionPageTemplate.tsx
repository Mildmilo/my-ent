import type { ReactNode } from 'react'
import { BreadcrumbNav } from '@/components/shared/BreadcrumbNav'
import { buildMedicalConditionSchema } from '@/lib/schema'

interface RelatedLink {
  title: string
  href: string
}

interface FaqItem {
  question: string
  answer: string
}

interface TreatmentBlock {
  heading: string
  body: string
}

interface WhenToSeekHelp {
  overview: string
  warningSignsHeading?: string
  warningSigns?: string[]
}

interface TreatmentOverview {
  overview: string
  treatments?: TreatmentBlock[]
}

interface ConditionPageTemplateProps {
  slug: string
  title: string
  clinicalTerm?: string
  plainEnglishSummary: string
  /** Optional hero image node. Rendered with a gradient overlay and title treatment in the template. */
  heroImageSlot?: ReactNode
  symptoms: string[]
  symptomsNote?: string
  causes: string[]
  causesCitation?: string
  whenToSeekHelp: WhenToSeekHelp | string
  treatmentOverview: TreatmentOverview | string
  relatedProcedures: RelatedLink[]
  sinusQuestionnaireCalloutHeading?: string
  faqItems?: FaqItem[]
}

// DO NOT list individual surgeons on condition pages - see CLAUDE.md Section 2 for rationale.
const choosingYourSurgeonStatement =
  "Choosing the right specialist takes thought. Fellowship training, experience with the relevant condition, and contribution to teaching and research are all meaningful indicators. A public appointment at a tertiary hospital is another recognised marker of professional standing. Online reviews can be helpful, but they don't tell the whole story."

function isWhenToSeekHelpObject(val: WhenToSeekHelp | string): val is WhenToSeekHelp {
  return typeof val === 'object' && val !== null
}

function isTreatmentOverviewObject(val: TreatmentOverview | string): val is TreatmentOverview {
  return typeof val === 'object' && val !== null
}

export function ConditionPageTemplate({
  slug,
  title,
  clinicalTerm,
  plainEnglishSummary,
  heroImageSlot,
  symptoms,
  symptomsNote,
  causes,
  causesCitation,
  whenToSeekHelp,
  treatmentOverview,
  relatedProcedures,
  sinusQuestionnaireCalloutHeading,
  faqItems,
}: ConditionPageTemplateProps) {
  const conditionSchema = buildMedicalConditionSchema({
    name: title,
    ...(clinicalTerm ? { alternateName: clinicalTerm } : {}),
    description: plainEnglishSummary,
    url: `/conditions/${slug}`,
  })

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(conditionSchema) }}
      />
      <section className="myent-section border-b border-neutral-200 bg-white">
        <div className="myent-container">
          <BreadcrumbNav sectionLabel="Conditions" pageTitle={title} />
          <p className="myent-eyebrow">Condition</p>
          {heroImageSlot ? (
            <div className="relative mt-8 h-56 overflow-hidden rounded-xl bg-teal-800 lg:h-[26rem]">
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
            {symptomsNote ? (
              <p className="mt-5 rounded-lg bg-neutral-50 px-4 py-3 text-sm leading-relaxed text-neutral-500">
                {symptomsNote}
              </p>
            ) : null}
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
            {causesCitation ? (
              <p className="mt-4 text-xs italic text-neutral-400">{causesCitation}</p>
            ) : null}
          </article>
        </div>
      </section>

      <section className="myent-section bg-neutral-100">
        <div className="myent-container grid grid-cols-1 gap-8 lg:grid-cols-2">
          <article className="myent-card">
            <p className="myent-eyebrow">When to seek help</p>
            <h2 className="mt-3 text-3xl">When to arrange review</h2>
            {isWhenToSeekHelpObject(whenToSeekHelp) ? (
              <>
                <p className="mt-5 text-neutral-600">{whenToSeekHelp.overview}</p>
                {whenToSeekHelp.warningSigns && whenToSeekHelp.warningSigns.length > 0 ? (
                  <div className="mt-5 rounded-lg border border-red-100 bg-red-50 px-4 py-4">
                    <p className="text-sm font-semibold text-red-700">
                      {whenToSeekHelp.warningSignsHeading ?? 'Seek urgent attention if you notice:'}
                    </p>
                    <ul className="mt-2 space-y-1">
                      {whenToSeekHelp.warningSigns.map((sign) => (
                        <li key={sign} className="flex items-start gap-2 text-sm text-red-700">
                          <span aria-hidden="true" className="mt-0.5 shrink-0">→</span>
                          {sign}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </>
            ) : (
              <p className="mt-5 text-neutral-600">{whenToSeekHelp}</p>
            )}
            <div className="mt-6">
              <a className="myent-btn-primary" href="/appointments">
                Request an appointment
              </a>
            </div>
          </article>

          <article className="myent-card">
            <p className="myent-eyebrow">Treatment</p>
            <h2 className="mt-3 text-3xl">Treatment overview</h2>
            {isTreatmentOverviewObject(treatmentOverview) ? (
              <>
                <p className="mt-5 text-neutral-600">{treatmentOverview.overview}</p>
                {treatmentOverview.treatments && treatmentOverview.treatments.length > 0 ? (
                  <div className="mt-6 space-y-5">
                    {treatmentOverview.treatments.map((block) => (
                      <div key={block.heading} className="border-t border-neutral-100 pt-4">
                        <p className="text-sm font-semibold text-neutral-800">{block.heading}</p>
                        <p className="mt-1 text-sm leading-relaxed text-neutral-600">{block.body}</p>
                      </div>
                    ))}
                  </div>
                ) : null}
              </>
            ) : (
              <p className="mt-5 text-neutral-600">{treatmentOverview}</p>
            )}
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
                <h2 className="mt-3 font-serif text-2xl text-neutral-800">
                  {sinusQuestionnaireCalloutHeading}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-neutral-600">
                  If you are attending My-ENT for a nose or sinus concern, our pre-appointment
                  questionnaire helps our clinical team prepare for your consultation. It takes most
                  patients four to six minutes to complete.
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
              <p className="mt-5 text-base leading-relaxed text-neutral-600">
                {choosingYourSurgeonStatement}
              </p>
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
                  <details
                    key={item.question}
                    className="group rounded-xl border border-neutral-200 bg-white px-5 py-4"
                  >
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