const SITE_URL = 'https://www.my-ent.com.au'

interface PhysicianSchemaInput {
  name: string
  url: string
  image: string
  medicalSpecialty: string[]
  subspecialties: string[]
  hospitals: string[]
}

interface NursePractitionerSchemaInput {
  name: string
  url: string
  image: string
}

export function buildMedicalClinicSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: 'My-ENT',
    url: SITE_URL,
    telephone: '+61-2-9247-1762',
    faxNumber: '+61-2-9247-2141',
    email: 'contact@my-ent.com.au',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Suite 303, Level 3, BMA House, 135 Macquarie Street',
      addressLocality: 'Sydney',
      addressRegion: 'NSW',
      postalCode: '2000',
      addressCountry: 'AU',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -33.8633,
      longitude: 151.2112,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:30',
        closes: '17:00',
      },
    ],
    medicalSpecialty: ['Otolaryngology'],
    employee: [
      {
        '@type': 'Physician',
        name: 'Dr Catherine Banks',
        url: `${SITE_URL}/about/dr-catherine-banks`,
      },
      {
        '@type': 'Physician',
        name: 'Dr Lyndon Chan',
        url: `${SITE_URL}/about/dr-lyndon-chan`,
      },
      {
        '@type': 'Physician',
        name: 'Dr June Huang',
        url: `${SITE_URL}/about/dr-june-huang`,
      },
      {
        '@type': 'Physician',
        name: 'Dr Rithvik Reddy',
        url: `${SITE_URL}/about/dr-rithvik-reddy`,
      },
      {
        '@type': 'Person',
        name: 'Justine Oates',
        jobTitle: 'Nurse Practitioner',
        url: `${SITE_URL}/about/justine-oates`,
      },
    ],
  }
}

export function buildPhysicianSchema({
  name,
  url,
  image,
  medicalSpecialty,
  subspecialties,
  hospitals,
}: PhysicianSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name,
    url: `${SITE_URL}${url}`,
    image: `${SITE_URL}${image}`,
    medicalSpecialty,
    knowsAbout: subspecialties,
    hospitalAffiliation: hospitals.map((h) => ({
      '@type': 'Hospital',
      name: h,
    })),
    worksFor: {
      '@type': 'MedicalOrganization',
      name: 'My-ENT',
      url: SITE_URL,
    },
  }
}

interface MedicalConditionSchemaInput {
  name: string
  alternateName?: string
  description: string
  url: string
}

interface MedicalProcedureSchemaInput {
  name: string
  description: string
  url: string
  bodyLocation?: string
  howPerformed?: string
  preparation?: string
  followup?: string
}

export function buildMedicalConditionSchema({
  name,
  alternateName,
  description,
  url,
}: MedicalConditionSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalCondition',
    name,
    ...(alternateName ? { alternateName } : {}),
    description,
    url: `${SITE_URL}${url}`,
  }
}

export function buildMedicalProcedureSchema({
  name,
  description,
  url,
  bodyLocation,
  howPerformed,
  preparation,
  followup,
}: MedicalProcedureSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name,
    description,
    url: `${SITE_URL}${url}`,
    ...(bodyLocation ? { bodyLocation } : {}),
    ...(howPerformed ? { howPerformed } : {}),
    ...(preparation ? { preparation } : {}),
    ...(followup ? { followup } : {}),
  }
}

export function buildNursePractitionerSchema({
  name,
  url,
  image,
}: NursePractitionerSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    jobTitle: 'Nurse Practitioner',
    url: `${SITE_URL}${url}`,
    image: `${SITE_URL}${image}`,
    worksFor: {
      '@type': 'MedicalOrganization',
      name: 'My-ENT',
      url: SITE_URL,
    },
    colleague: [
      {
        '@type': 'Physician',
        name: 'Dr Catherine Banks',
        url: `${SITE_URL}/about/dr-catherine-banks`,
      },
    ],
  }
}
