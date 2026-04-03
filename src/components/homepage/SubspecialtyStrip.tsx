interface SubspecialtyStripProps {
  items: string[]
}

export function SubspecialtyStrip({ items }: SubspecialtyStripProps) {
  return (
    <section className="border-y border-neutral-200 bg-white">
      <div className="myent-container py-7">
        <p className="myent-eyebrow">Subspecialties</p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <li key={item} className="rounded-lg border border-teal-100 bg-teal-50 px-4 py-3 text-sm">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}