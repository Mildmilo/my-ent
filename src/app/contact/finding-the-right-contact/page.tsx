import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Finding the Right Contact | ENT Sydney | My-ENT',
  description:
    'Contact details for My-ENT Macquarie Street rooms, other private consulting locations, and public hospital contacts in Sydney.',
}

interface ContactRow {
  label: string
  value: string
  href?: string
}

interface PrivateLocation {
  practiceName: string
  address: string
  phone: string
  phoneHref: string
  email: string
}

interface SurgeonLocations {
  surgeonLabel: string
  locations: PrivateLocation[]
}

interface HospitalContact {
  name: string
  address: string
  phone: string
  phoneHref: string
  appointmentsPhone?: string
  appointmentsPhoneHref?: string
  email?: string
}

const practiceContacts: ContactRow[] = [
  {
    label: 'Address',
    value: 'Level 3, Suite 303, BMA House, 135 Macquarie Street, Sydney CBD NSW 2000',
  },
  { label: 'Phone', value: '02 9247 1762', href: 'tel:0292471762' },
  { label: 'Fax', value: '02 9247 2141', href: 'tel:0292472141' },
  { label: 'Email', value: 'contact@my-ent.com.au', href: 'mailto:contact@my-ent.com.au' },
  { label: 'Hours', value: '8:30 am – 5:00 pm, Monday to Friday' },
]

const surgeonLocations: SurgeonLocations[] = [
  {
    surgeonLabel: 'Dr Chan',
    locations: [
      {
        practiceName: 'Sydney North ENT — Lindfield',
        address: 'Suite 1, 295–303 Pacific Highway, Lindfield NSW 2070',
        phone: '(02) 8090 2525',
        phoneHref: 'tel:0280902525',
        email: 'secretary@therooms.com.au',
      },
      {
        practiceName: 'Sydney North ENT — Crows Nest',
        address: 'Suite 211, 300 Pacific Highway, Crows Nest NSW 2065',
        phone: '(02) 8090 2525',
        phoneHref: 'tel:0280902525',
        email: 'secretary@therooms.com.au',
      },
      {
        practiceName: 'Illawarra ENT — Wollongong',
        address: 'Suite 1–2, 8/10 Victoria Street, Wollongong NSW 2500',
        phone: '(02) 4226 1055',
        phoneHref: 'tel:0242261055',
        email: 'reception@illawarraent.com.au',
      },
    ],
  },
  {
    surgeonLabel: 'Dr Huang',
    locations: [
      {
        practiceName: 'Trinity ENT — Kogarah',
        address: 'Suite 7J, St George Private Hospital, 1 South Street, Kogarah NSW 2217',
        phone: '(02) 4208 5521',
        phoneHref: 'tel:0242085521',
        email: 'TrinityENT.contactus@gmail.com',
      },
    ],
  },
  {
    surgeonLabel: 'Dr Reddy',
    locations: [
      {
        practiceName: 'MacArthur ENT — Gregory Hills',
        address: 'Shop 2101, Level 2, 31A Lasso Road, Gregory Hills NSW 2557',
        phone: '(02) 4625 1682',
        phoneHref: 'tel:0246251682',
        email: 'referrals@drrithvikreddy.com',
      },
    ],
  },
]

const publicHospitals: HospitalContact[] = [
  {
    name: 'Prince of Wales Hospital',
    address: 'Barker Street, Randwick NSW 2031',
    phone: '(02) 9382 2222',
    phoneHref: 'tel:0293822222',
    email: 'seslhd-generalmanager-powhsseh@health.nsw.gov.au',
  },
  {
    name: 'Sydney Children\u2019s Hospital, Randwick',
    address: 'High Street, Randwick NSW 2031',
    phone: '(02) 9382 1111',
    phoneHref: 'tel:0293821111',
    appointmentsPhone: '(02) 9382 1212',
    appointmentsPhoneHref: 'tel:0293821212',
  },
  {
    name: 'Sydney Hospital and Sydney Eye Hospital',
    address: '8 Macquarie Street, Sydney NSW 2000',
    phone: '(02) 9382 7111',
    phoneHref: 'tel:0293827111',
    email: 'SESLHD-SSEHExecutiveServices@health.nsw.gov.au',
  },
  {
    name: 'Northern Beaches Hospital',
    address: '105 Frenchs Forest Road West, Frenchs Forest NSW 2086',
    phone: '(02) 9105 5000',
    phoneHref: 'tel:0291055000',
    email: 'nbh@healthscope.com.au',
  },
  {
    name: 'Wollongong Hospital',
    address: 'Loftus Street, Wollongong NSW 2500',
    phone: '(02) 4222 5000',
    phoneHref: 'tel:0242225000',
  },
  {
    name: 'St George Hospital',
    address: 'Gray Street, Kogarah NSW 2217',
    phone: '(02) 9113 1111',
    phoneHref: 'tel:0291131111',
  },
  {
    name: 'Liverpool Hospital',
    address: 'Corner of Elizabeth and Goulburn Streets, Liverpool NSW 2170',
    phone: '(02) 8738 3000',
    phoneHref: 'tel:0287383000',
  },
]

export default function FindingTheRightContactPage() {
  return (
    <>
      <section className="myent-section bg-white">
        <div className="myent-container">
          <p className="myent-eyebrow">Contact</p>
          <div className="mt-4 max-w-3xl space-y-6">
            <h1 className="text-4xl leading-tight tracking-tight lg:text-5xl">
              Finding the right contact
            </h1>
            <p className="text-lg leading-relaxed text-neutral-500">
              Use this directory to find the correct contact point for My-ENT Macquarie Street,
              other private consulting rooms, and public hospital appointments.
            </p>
          </div>
        </div>
      </section>

      <section className="myent-section border-t border-neutral-200">
        <div className="myent-container">
          <div className="section-header mb-10 max-w-3xl">
            <p className="myent-eyebrow">Macquarie Street</p>
            <h2 className="mt-3 text-3xl leading-tight">My-ENT Macquarie Street</h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-500">
              The My-ENT reception team manages bookings and enquiries for 135 Macquarie Street only.
              If your referral is addressed to another consulting location, please contact those rooms
              directly.
            </p>
          </div>

          <div className="myent-card max-w-4xl">
            <div className="grid gap-6 lg:grid-cols-[18rem_minmax(0,1fr)]">
              <div className="rounded-xl border border-teal-100 bg-teal-50 p-6">
                <p className="myent-eyebrow">Reception phone</p>
                <a className="mt-3 block text-3xl leading-none text-neutral-800 hover:text-teal-400" href="tel:0292471762">
                  02 9247 1762
                </a>
                <p className="mt-4 text-sm leading-relaxed text-neutral-500">
                  Bookings and enquiries for 135 Macquarie Street are managed through this line.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a className="myent-btn-primary" href="tel:0292471762">
                    Call the rooms
                  </a>
                  <Link className="myent-btn-outline" href="/appointments">
                    Request an appointment
                  </Link>
                </div>
              </div>

              <dl className="divide-y divide-neutral-100">
                {practiceContacts.map((item) => (
                  <div key={item.label} className="flex flex-col gap-1 py-4 sm:flex-row sm:gap-6">
                    <dt className="w-24 flex-shrink-0 text-sm font-medium text-neutral-700">
                      {item.label}
                    </dt>
                    <dd className="text-sm leading-relaxed text-neutral-600">
                      {item.href ? (
                        <a className="hover:text-teal-400" href={item.href}>
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="myent-section border-t border-neutral-200 bg-neutral-100">
        <div className="myent-container">
          <div className="section-header mb-10 max-w-3xl">
            <p className="myent-eyebrow">Other locations</p>
            <h2 className="mt-3 text-3xl leading-tight">Other private consulting locations</h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-500">
              If your referral is addressed to one of the locations below, please contact those rooms
              directly. The My-ENT reception team cannot manage bookings or enquiries for these
              separate private consulting practices.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {surgeonLocations.map((surgeon) => (
              <div key={surgeon.surgeonLabel}>
                <p className="myent-eyebrow mb-4">{surgeon.surgeonLabel}</p>
                <div className="space-y-4">
                  {surgeon.locations.map((loc) => (
                    <article key={loc.practiceName} className="myent-card">
                      <h3 className="font-medium text-neutral-800">{loc.practiceName}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-500">{loc.address}</p>
                      <p className="mt-4 text-xs uppercase tracking-[0.06em] text-teal-400">
                        Phone
                      </p>
                      <a className="mt-2 block text-2xl leading-none text-neutral-800 hover:text-teal-400" href={loc.phoneHref}>
                        {loc.phone}
                      </a>
                      <dl className="mt-4 space-y-2 text-sm">
                        <div className="flex gap-3">
                          <dt className="w-12 flex-shrink-0 text-neutral-400">Email</dt>
                          <dd>
                            <a className="break-all hover:text-teal-400" href={`mailto:${loc.email}`}>
                              {loc.email}
                            </a>
                          </dd>
                        </div>
                      </dl>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="myent-section border-t border-neutral-200 bg-white">
        <div className="myent-container">
          <div className="section-header mb-10 max-w-3xl">
            <p className="myent-eyebrow">Public hospitals</p>
            <h2 className="mt-3 text-3xl leading-tight">Public hospital contacts</h2>
          </div>

          <p className="mb-8 max-w-3xl rounded-xl border border-teal-100 bg-teal-50 p-5 text-base leading-relaxed text-neutral-700">
            If you are a public patient and have any concerns, please contact the relevant hospital
            directly. Waiting times and appointment scheduling are managed by the hospital and are
            outside the control of our private rooms.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {publicHospitals.map((hospital) => (
              <article key={hospital.name} className="myent-card">
                <h3 className="font-medium text-neutral-800">{hospital.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">{hospital.address}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.06em] text-teal-400">Phone</p>
                <a className="mt-2 block text-2xl leading-none text-neutral-800 hover:text-teal-400" href={hospital.phoneHref}>
                  {hospital.phone}
                </a>
                <dl className="mt-4 space-y-2 text-sm">
                  {hospital.appointmentsPhone && hospital.appointmentsPhoneHref && (
                    <div className="flex gap-3">
                      <dt className="w-20 flex-shrink-0 text-neutral-400">Appointments</dt>
                      <dd>
                        <a className="hover:text-teal-400" href={hospital.appointmentsPhoneHref}>
                          {hospital.appointmentsPhone}
                        </a>
                      </dd>
                    </div>
                  )}
                  {hospital.email && (
                    <div className="flex gap-3">
                      <dt className="w-20 flex-shrink-0 text-neutral-400">Email</dt>
                      <dd>
                        <a className="break-all hover:text-teal-400" href={`mailto:${hospital.email}`}>
                          {hospital.email}
                        </a>
                      </dd>
                    </div>
                  )}
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
