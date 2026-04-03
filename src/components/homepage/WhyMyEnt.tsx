interface WhyMyEntPoint {
  title: string
  body: string
}

interface WhyMyEntProps {
  points: WhyMyEntPoint[]
}

export function WhyMyEnt({ points }: WhyMyEntProps) {
  return (
    <section className="myent-section">
      <div className="myent-container grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div>
          <p className="myent-eyebrow">Why My-ENT</p>
          <h2 className="mt-4 text-4xl">Built to reduce uncertainty before your first appointment</h2>
          <p className="mt-5 text-neutral-600">
            The website is structured to reduce repetitive calls by giving patients the exact information
            reception needs them to have before booking.
          </p>
        </div>
        <div className="grid gap-4">
          {points.map((point) => (
            <article key={point.title} className="myent-card">
              <h3 className="text-2xl">{point.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{point.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}