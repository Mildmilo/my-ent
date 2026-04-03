import type { Metadata } from 'next'

const biographyParagraphs: string[] = [
  'Subspecialties: Otology, General and Paediatric ENT.',
  'Medical degree: University of Manchester, England. Foundation training in the United Kingdom. ENT training across NSW including Newcastle, Wollongong, and Canberra.',
  "Fellowship: Otology, St Vincent's Hospital, Sydney.",
  "Private hospital appointments: St Luke's Hospital; Norwest Private Hospital; Lakeview Private Hospital; Southern Highlands Hospital; Tamara Private Hospital.",
  'Also provides services in regional NSW including Bowral and Tamworth.',
  'Clinical expertise: general nasal conditions (sinus, breathing, snoring, allergy, nosebleeds); ear infections, tonsils, sinuses; throat and voice disorders including silent reflux; general head and neck conditions; general paediatric ENT (grommets, tonsillectomies, adenoidectomies); ear conditions with special interest in eardrum repair, exostoses, cholesteatoma, hearing issues including cochlear implants, and balance disorders.',
]

const confirmedPublicAppointments: string[] = ['St George Hospital']

export const metadata: Metadata = {
  title: 'Dr June Huang | My-ENT',
  description:
    'Verified profile for Dr June Huang including otology and ENT scope, fellowship training, and confirmed public tertiary hospital appointments.',
}

export default function DrJuneHuangPage() {
  return (
    <section className="myent-section">
      {/* TODO: TIER B — awaiting individual sign-off before publishing. */}
      <div className="myent-container">
        <p className="myent-eyebrow">Team profile</p>
        <h1 className="mt-4 text-4xl lg:text-5xl">Dr June Huang</h1>
        <p className="mt-4 text-xl text-neutral-600">MBChB, FRACS (OHNS)</p>

        <article className="myent-card mt-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
            <div
              aria-hidden="true"
              className="flex h-28 w-28 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-3xl font-medium text-teal-400"
            >
              JH
            </div>

            <div className="space-y-4">
              {biographyParagraphs.map((paragraph) => (
                <p key={paragraph} className="text-base text-neutral-600">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </article>

        <article className="myent-card mt-6">
          <p className="myent-eyebrow">Public appointments</p>
          <h2 className="mt-3 text-3xl">Confirmed public tertiary hospital appointments</h2>
          <ul className="mt-4 space-y-2 text-base text-neutral-600">
            {confirmedPublicAppointments.map((appointment) => (
              <li key={appointment}>{appointment}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}