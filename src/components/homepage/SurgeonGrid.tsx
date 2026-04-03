interface SurgeonGridItem {
  name: string
  role: string
  credentials: string
  profileHref: string
}

interface SurgeonGridProps {
  surgeons: SurgeonGridItem[]
}

export function SurgeonGrid({ surgeons }: SurgeonGridProps) {
  return (
    <section className="myent-section">
      <div className="myent-container">
        <p className="myent-eyebrow">Our Team</p>
        <div className="mt-4 flex items-end justify-between gap-4">
          <h2 className="text-4xl">Surgeons and nurse practitioner</h2>
          <a className="text-sm font-medium text-teal-500" href="/about/our-surgeons">
            View all profiles
          </a>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {surgeons.map((surgeon) => (
            <article key={surgeon.name} className="myent-card">
              <p className="text-sm uppercase tracking-wide text-teal-400">{surgeon.role}</p>
              <h3 className="mt-2 text-3xl">{surgeon.name}</h3>
              <p className="mt-3 text-sm text-neutral-600">{surgeon.credentials}</p>
              <a className="mt-5 inline-block text-sm font-medium text-teal-500" href={surgeon.profileHref}>
                Read profile
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}