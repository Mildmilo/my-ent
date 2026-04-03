interface ConditionsGridItem {
  title: string
  detail: string
  href: string
}

interface ConditionsGridProps {
  conditions: ConditionsGridItem[]
}

export function ConditionsGrid({ conditions }: ConditionsGridProps) {
  return (
    <section className="myent-section bg-white">
      <div className="myent-container">
        <p className="myent-eyebrow">Find your pathway</p>
        <h2 className="mt-4 text-4xl">Common reasons patients contact My-ENT</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {conditions.map((condition) => (
            <a key={condition.title} href={condition.href} className="myent-card block">
              <h3 className="text-2xl">{condition.title}</h3>
              <p className="mt-3 text-sm text-neutral-600">{condition.detail}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}