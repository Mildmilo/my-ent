export function GpStrip() {
  return (
    <section className="myent-section bg-neutral-800 text-neutral-50">
      <div className="myent-container grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-teal-100">For GPs</p>
          <h2 className="mt-3 font-serif text-4xl text-neutral-50">Referral and triage pathways for your patients</h2>
          <p className="mt-4 max-w-2xl text-neutral-100">
            Access subspecialty guidance, referral information, and practical booking details for patients
            requiring ENT review.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          <a className="myent-btn-primary bg-teal-300 text-neutral-800 hover:bg-teal-200" href="/for-gps">
            Go to For GPs
          </a>
          <a
            className="myent-btn-outline border-neutral-300 text-neutral-100 hover:bg-neutral-700"
            href="/appointments/referral-information"
          >
            Referral information
          </a>
        </div>
      </div>
    </section>
  )
}