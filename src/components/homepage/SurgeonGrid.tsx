import Image from 'next/image'

interface SurgeonGridItem {
  name: string
  role: string
  credentials: string
  profileHref: string
  imageSrc: string
}

interface SurgeonGridProps {
  surgeons: SurgeonGridItem[]
}

const TEAM_CARD_HEIGHT_CLASS = 'h-[280px]'

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

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {surgeons.map((surgeon) => (
            <article key={surgeon.name} className={`myent-card ${TEAM_CARD_HEIGHT_CLASS}`}>
              <div className="flex h-full gap-5">
                <div className="h-full w-[160px] shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={surgeon.imageSrc}
                    alt={surgeon.name}
                    width={160}
                    height={280}
                    className="h-full w-full object-cover object-[50%_18%]"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-3xl">{surgeon.name}</h3>
                  <p className="myent-eyebrow mt-2">{surgeon.role}</p>
                  <p className="mt-3 text-sm text-neutral-400">{surgeon.credentials}</p>
                  <a className="mt-5 inline-block text-sm font-medium text-teal-500" href={surgeon.profileHref}>
                    Read profile
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}