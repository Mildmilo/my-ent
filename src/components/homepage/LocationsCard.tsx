interface LocationItem {
  name: string
  suburb: string
  note: string
}

interface LocationsCardProps {
  primaryAddress: string
  locations: LocationItem[]
}

export function LocationsCard({ primaryAddress, locations }: LocationsCardProps) {
  return (
    <section className="myent-section bg-teal-50/40">
      <div className="myent-container grid gap-8 lg:grid-cols-[1fr_1fr]">
        <article className="myent-card border-teal-100 bg-white">
          <p className="myent-eyebrow">Primary Rooms</p>
          <h2 className="mt-3 text-3xl">Sydney CBD</h2>
          <p className="mt-4 text-neutral-600">{primaryAddress}</p>
          <p className="mt-4 text-sm text-neutral-500">
            Opening hours: 8:30 am to 5:00 pm, Monday to Friday
          </p>
        </article>

        <article className="myent-card border-teal-100 bg-white">
          <p className="myent-eyebrow">Hospital Affiliations</p>
          <ul className="mt-4 space-y-4">
            {locations.map((location) => (
              <li key={location.name}>
                <h3 className="text-xl">{location.name}</h3>
                <p className="text-sm text-neutral-600">{location.suburb}</p>
                <p className="text-sm text-neutral-500">{location.note}</p>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}