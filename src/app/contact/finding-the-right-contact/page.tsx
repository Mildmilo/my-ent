import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Finding the Right Contact | ENT Sydney | My-ENT',
  description:
    'Contact details for My-ENT Macquarie Street rooms, other private consulting locations, and public hospital contacts in Sydney.',
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


const surgeonLocations: SurgeonLocations[] = [
  {
    surgeonLabel: 'Dr Lyndon Chan',
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
    surgeonLabel: 'Dr June Huang',
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
    surgeonLabel: 'Dr Rithvik Reddy',
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
      {/* Page heading */}
      <section className="myent-section bg-white">
        <div className="myent-container">
          <p className="myent-eyebrow">Contact</p>
          <div className="mt-4 max-w-3xl space-y-6">
            <h1 className="text-4xl leading-tight tracking-tight lg:text-5xl">
              {"Let\u2019s get you to the right place."}
            </h1>
            <p className="text-lg leading-relaxed text-neutral-500">
              {"No problem at all \u2014 specialists see patients across multiple locations. Find your surgeon\u2019s rooms below and give them a call directly. They will be expecting referrals like yours."}
            </p>
          </div>
        </div>
      </section>

      {/* Urgent warning */}
      <section className="border-t border-neutral-200 bg-neutral-100 px-0 py-6">
        <div className="myent-container">
          <p className="max-w-3xl text-sm leading-relaxed text-neutral-600">
            <span className="font-medium text-neutral-800">Urgent or after-hours concern?</span>{' '}
            If you are experiencing significant bleeding, breathing difficulty, or sudden severe pain, call{' '}
            <a className="font-medium text-teal-400 hover:text-teal-300" href="tel:000">000</a>{' '}
            or present to your nearest emergency department immediately.
          </p>
        </div>
      </section>

      {/* Section 1 — Other private consulting rooms */}
      <section className="myent-section border-t border-neutral-200">
        <div className="myent-container">
          <div className="section-header mb-10 max-w-3xl">
            <p className="myent-eyebrow">Other locations</p>
            <h2 className="mt-3 text-3xl leading-tight">Other private consulting rooms</h2>
          </div>

          <div className="space-y-10">
            {surgeonLocations.map((surgeon) => (
              <section key={surgeon.surgeonLabel} className="rounded-xl border border-neutral-200 bg-white p-6 lg:p-8">
                <p className="myent-eyebrow">Private rooms</p>
                <h3 className="mt-3 text-2xl leading-tight">{surgeon.surgeonLabel}</h3>
                <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
                  {surgeon.locations.map((loc) => (
                    <article key={loc.practiceName} className="myent-card">
                      <h4 className="font-medium text-neutral-800">{loc.practiceName}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-500">{loc.address}</p>
                      <a
                        className="myent-btn-primary mt-4 inline-flex min-h-[44px] w-full items-center justify-center sm:w-fit"
                        href={loc.phoneHref}
                      >
                        Call {loc.phone}
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
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — Public hospital appointments */}
      <section className="myent-section border-t border-neutral-200 bg-neutral-100">
        <div className="myent-container">
          <div className="section-header mb-10 max-w-3xl">
            <p className="myent-eyebrow">Public hospitals</p>
            <h2 className="mt-3 text-3xl leading-tight">Public hospital appointments</h2>
          </div>

          <p className="mb-8 max-w-3xl rounded-xl border border-teal-100 bg-teal-50 p-5 text-base leading-relaxed text-neutral-700">
            If you are a public patient, please contact the relevant hospital directly. Public
            hospital appointments, waiting times, and scheduling are managed entirely by the hospital
            and are outside the control of our private rooms. We are unable to assist with public
            hospital enquiries, bookings, or follow-up on your behalf — please direct all public
            hospital enquiries to the hospital administration team.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {publicHospitals.map((hospital) => (
              <article key={hospital.name} className="myent-card">
                <h3 className="font-medium text-neutral-800">{hospital.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">{hospital.address}</p>
                <a
                  className="mt-4 block text-lg font-medium text-teal-400 hover:text-teal-300"
                  href={hospital.phoneHref}
                >
                  {hospital.phone}
                </a>
                {hospital.appointmentsPhone && hospital.appointmentsPhoneHref && (
                  <p className="mt-2 text-sm text-neutral-500">
                    Appointments:{' '}
                    <a className="hover:text-teal-400" href={hospital.appointmentsPhoneHref}>
                      {hospital.appointmentsPhone}
                    </a>
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Actually at Macquarie Street? */}
      <section className="myent-section border-t border-neutral-200 bg-white">
        <div className="myent-container">
          <div className="section-header mb-10 max-w-3xl">
            <p className="myent-eyebrow">Macquarie Street</p>
            <h2 className="mt-3 text-3xl leading-tight">Actually at Macquarie Street?</h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-500">
              {"No worries \u2014 you are in the right place after all."}
            </p>
          </div>

          <div className="myent-card max-w-2xl">
            <p className="font-serif text-2xl text-neutral-800">My-ENT</p>
            <dl className="mt-6 divide-y divide-neutral-100 text-sm">
              <div className="flex flex-col gap-1 py-3 sm:flex-row sm:gap-6">
                <dt className="w-16 flex-shrink-0 font-medium text-neutral-700">Address</dt>
                <dd className="text-neutral-600">
                  Level 3, Suite 303, BMA House, 135 Macquarie Street, Sydney CBD NSW 2000
                </dd>
              </div>
              <div className="flex flex-col gap-1 py-3 sm:flex-row sm:gap-6">
                <dt className="w-16 flex-shrink-0 font-medium text-neutral-700">Phone</dt>
                <dd>
                  <a className="text-neutral-600 hover:text-teal-400" href="tel:0292471762">
                    02 9247 1762
                  </a>
                </dd>
              </div>
              <div className="flex flex-col gap-1 py-3 sm:flex-row sm:gap-6">
                <dt className="w-16 flex-shrink-0 font-medium text-neutral-700">Email</dt>
                <dd>
                  <a className="text-neutral-600 hover:text-teal-400" href="mailto:contact@my-ent.com.au">
                    contact@my-ent.com.au
                  </a>
                </dd>
              </div>
              <div className="flex flex-col gap-1 py-3 sm:flex-row sm:gap-6">
                <dt className="w-16 flex-shrink-0 font-medium text-neutral-700">Hours</dt>
                <dd className="text-neutral-600">
                  {"8:30\u00a0am \u2013 5:00\u00a0pm, Monday to Friday"}
                </dd>
              </div>
            </dl>
            <div className="mt-6">
              <Link className="myent-btn-primary" href="/appointments">
                Request an appointment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
