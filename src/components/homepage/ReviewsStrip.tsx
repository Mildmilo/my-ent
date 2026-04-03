interface ReviewsStripProps {
  summary: string
  reviewStatus: string[]
}

export function ReviewsStrip({ summary, reviewStatus }: ReviewsStripProps) {
  return (
    <section className="border-y border-neutral-200 bg-white py-10">
      <div className="myent-container grid gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="myent-eyebrow">Patient feedback</p>
          <p className="mt-3 text-lg text-neutral-700">{summary}</p>
          <p className="mt-3 text-sm text-neutral-500">
            AHPRA REVIEW NEEDED: Publish verified verbatim review excerpts from public platforms.
          </p>
        </div>
        <ul className="grid gap-2 text-sm text-neutral-600">
          {reviewStatus.map((item) => (
            <li key={item} className="rounded-md border border-neutral-200 px-4 py-3">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}