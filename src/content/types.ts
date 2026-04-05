export interface Surgeon {
  id: string
  name: string
  slug: string
  role: string
  credentials: string
  contextualNote?: string
  fellowships: string[]
  hospitals: string[]
  researchNote?: string
  initials: string
  imageSrc?: string
}

export interface Condition {
  id: string
  title: string
  clinicalTerm?: string
  slug: string
  category: 'nose-sinuses' | 'ear' | 'throat' | 'paediatric'
  publishingTier: 'C'
  metaTitle: string
  metaDescription: string
  heroSummary: string
  symptoms: string[]
  causes: string[]
  whenToSeekHelp: string
  treatmentOverview: string
  relatedProcedures: string[]
  relatedSurgeons: string[]
}

export interface Procedure {
  id: string
  title: string
  slug: string
  publishingTier: 'C'
  metaTitle: string
  metaDescription: string
  heroSummary: string
  indications: string[]
  whatToExpect: string
  recoveryOverview: string
  relatedConditions: string[]
  performedBy: string[]
}

export interface StaffMember {
  id: string
  name: string
  slug: string
  role: string
  qualifications: string[]
  bio: string
  initials: string
  imageSrc?: string
  publishingTier: 'B'
}

export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}