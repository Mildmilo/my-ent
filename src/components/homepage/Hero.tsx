interface HeroAction {
  label: string
  href: string
  summary: string
}

interface HeroProps {
  actions: HeroAction[]
}

export function Hero({ actions }: HeroProps) {
  return (
    <section className="myent-section pb-10">
      <div className="myent-container grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <div>
          <p className="myent-eyebrow">Sydney ENT Practice</p>
          <h1 className="mt-4 text-display">Referral-ready ENT care for adults and children</h1>
          <p className="mt-6 max-w-2xl text-lg text-neutral-600">
            My-ENT helps patients move from referral to appointment with clear steps for booking,
            document upload, and first-visit preparation, with care across rhinology and anterior
            skull base surgery, general ENT, and paediatric ENT.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a className="myent-btn-primary" href="/appointments">
              Request an appointment
            </a>
            <a className="myent-btn-outline" href="/appointments/referral-information">
              Upload referral or imaging
            </a>
          </div>
        </div>

        <aside className="grid gap-3" aria-label="Patient quick actions">
          {actions.map((action, index) => (
            <a
              key={action.label}
              href={action.href}
              className="myent-card block border-neutral-200 bg-white/90"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-teal-400">
                Action {index + 1}
              </p>
              <h2 className="mt-2 text-2xl">{action.label}</h2>
              <p className="mt-2 text-sm text-neutral-600">{action.summary}</p>
            </a>
          ))}
        </aside>
      </div>
    </section>
  )
}