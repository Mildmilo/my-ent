// ARCHITECTURAL GAP — Session 18
// This route currently sends the clinician report to a single recipient (EMAIL_TO env var).
// Rule 10 (Questionnaire Gating) and Rule 9 (Justine Oates Scope) require dual-recipient
// routing once the token/KV system is built:
//   - Dr Banks's patients: send to BOTH contact@my-ent.com.au AND justineoates@my-ent.com.au
//   - Other surgeons' patients: send to contact@my-ent.com.au plus reception-specified clinician email
// This routing logic is DEFERRED until the Vercel KV token system is implemented.
// Do NOT add a surgeonName form field or routing logic to this route as an interim measure —
// it will be replaced by token-record-based routing when the token system arrives.

import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

type DurationOption =
  | 'less-than-10-days'
  | 'between-10-days-and-12-weeks'
  | 'more-than-12-weeks'
  | 'come-and-go'
  | ''

type SymptomFreeIntervalOption = 'yes' | 'no' | ''
type EpisodeFrequencyOption = '1-to-3' | '4-or-more' | 'not-sure' | ''
type EposClassification = 'ARS' | 'RARS' | 'CRS Adult' | 'CRSc Paediatric' | 'Insufficient data'

interface AssessmentRequestBody {
  formData: SinusAssessmentFormData
}

interface PersonalDetails {
  fullName: string
  email: string
  dateOfBirth: string
  phone: string
  postConsultationOptIn: boolean
}

interface EposSymptoms {
  cardinalSymptoms: string[]
  duration: DurationOption
  symptomFreeInterval: SymptomFreeIntervalOption
  episodeFrequency: EpisodeFrequencyOption
  provisionalClassification: EposClassification
}

interface MedicalHistory {
  relevantConditions: string[]
  priorSinusSurgery: 'yes' | 'no' | 'not-sure' | ''
  priorSurgeryDetails: string
  currentIntranasalTreatment: 'steroid' | 'other' | 'no' | ''
  biologicTherapy: 'yes' | 'no' | 'not-sure' | ''
}

interface InstrumentResponses {
  snot22: number[]
  snot22Total: number | null
  nose: number[]
  noseScore: number | null
  tnss: number[]
  tnssTotal: number | null
  rqlq: number[]
  rqlqMean: number | null
  ess: number[]
  essTotal: number | null
}

interface SubmissionState {
  additionalConcerns: string
  clinicianEmailSubject: string
  clinicianEmailBody: string
}

interface SinusAssessmentFormData {
  patientType: 'new-patient' | 'existing-same-concern' | 'existing-new-concern' | ''
  personalDetails: PersonalDetails
  eposSymptoms: EposSymptoms
  medicalHistory: MedicalHistory
  instruments: InstrumentResponses
  submission: SubmissionState
}

interface InstrumentSummary {
  name: string
  scoreText: string
  severity: string
  grade: number
}

function calculateAge(dateOfBirth: string): number | null {
  if (!dateOfBirth) {
    return null
  }

  const dob = new Date(dateOfBirth)
  if (Number.isNaN(dob.getTime())) {
    return null
  }

  const today = new Date()
  let age = today.getFullYear() - dob.getFullYear()
  const monthDifference = today.getMonth() - dob.getMonth()

  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
    age -= 1
  }

  return age
}

function calculateTotalIfComplete(values: number[]): number | null {
  if (values.some((value) => value < 0)) {
    return null
  }

  return values.reduce((total, value) => total + value, 0)
}

function calculateEposClassification(formData: SinusAssessmentFormData): EposClassification {
  const { cardinalSymptoms, duration, symptomFreeInterval, episodeFrequency } = formData.eposSymptoms
  const symptomCount = cardinalSymptoms.length
  const hasRequiredCrsSymptom =
    cardinalSymptoms.includes('Blocked nose or nasal congestion') ||
    cardinalSymptoms.includes('Runny nose or mucus dripping down the back of your throat')

  if (symptomCount < 2 || !duration) {
    return 'Insufficient data'
  }

  const age = calculateAge(formData.personalDetails.dateOfBirth)
  const isPaediatric = age !== null && age < 18
  const hasChronicPattern =
    (duration === 'more-than-12-weeks' && hasRequiredCrsSymptom) ||
    (duration === 'come-and-go' && symptomFreeInterval === 'no' && hasRequiredCrsSymptom)

  if (hasChronicPattern) {
    return isPaediatric ? 'CRSc Paediatric' : 'CRS Adult'
  }

  if (
    (duration === 'less-than-10-days' ||
      duration === 'between-10-days-and-12-weeks' ||
      duration === 'come-and-go') &&
    symptomFreeInterval === 'yes'
  ) {
    if (episodeFrequency === '4-or-more') {
      return 'RARS'
    }

    if (episodeFrequency === '1-to-3') {
      return 'ARS'
    }
  }

  if (
    (duration === 'less-than-10-days' || duration === 'between-10-days-and-12-weeks') &&
    symptomCount >= 2
  ) {
    return 'ARS'
  }

  return 'Insufficient data'
}

function formatDateForSubject(date: Date): string {
  return new Intl.DateTimeFormat('en-AU', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(date)
}

function getSurname(fullName: string): string {
  const parts = fullName.trim().split(/\s+/).filter(Boolean)
  if (parts.length === 0) {
    return 'Unknown Surname'
  }

  return parts[parts.length - 1]
}

function mapPatientType(patientType: SinusAssessmentFormData['patientType']): string {
  if (patientType === 'new-patient') {
    return 'New patient — first consultation at My-ENT for this concern'
  }

  if (patientType === 'existing-same-concern') {
    return 'Existing patient — same concern'
  }

  if (patientType === 'existing-new-concern') {
    return 'Existing patient — new concern'
  }

  return 'Not provided'
}

function mapDuration(duration: DurationOption): string {
  if (duration === 'less-than-10-days') {
    return 'Less than 10 days'
  }

  if (duration === 'between-10-days-and-12-weeks') {
    return 'Between 10 days and 12 weeks'
  }

  if (duration === 'more-than-12-weeks') {
    return 'More than 12 weeks'
  }

  if (duration === 'come-and-go') {
    return 'They come and go — more than one episode'
  }

  return 'Not provided'
}

function mapSymptomFreeInterval(value: SymptomFreeIntervalOption, duration: DurationOption): string {
  if (duration !== 'come-and-go') {
    return 'Not applicable'
  }

  if (value === 'yes') {
    return 'Yes'
  }

  if (value === 'no') {
    return 'No'
  }

  return 'Not provided'
}

function mapEpisodeFrequency(value: EpisodeFrequencyOption, symptomFreeInterval: SymptomFreeIntervalOption): string {
  if (symptomFreeInterval !== 'yes') {
    return 'Not applicable'
  }

  if (value === '1-to-3') {
    return '1 to 3 episodes'
  }

  if (value === '4-or-more') {
    return '4 or more episodes'
  }

  if (value === 'not-sure') {
    return 'Not sure'
  }

  return 'Not provided'
}

function getSnot22Summary(score: number | null): InstrumentSummary {
  if (score === null) {
    return {
      name: 'SNOT-22',
      scoreText: 'Not completed',
      severity: 'Not available',
      grade: 0,
    }
  }

  let severity = 'Minimal'
  if (score >= 21 && score <= 50) {
    severity = 'Moderate'
  }
  if (score > 50) {
    severity = 'Severe'
  }

  let grade = 0
  if (score > 0 && score <= 10) {
    grade = 1
  } else if (score <= 20) {
    grade = 2
  } else if (score <= 35) {
    grade = 3
  } else if (score <= 50) {
    grade = 4
  } else {
    grade = 5
  }

  return {
    name: 'SNOT-22',
    scoreText: `Total score ${score}/110`,
    severity,
    grade,
  }
}

function getNoseSummary(score: number | null): InstrumentSummary {
  if (score === null) {
    return {
      name: 'NOSE',
      scoreText: 'Not completed',
      severity: 'Not available',
      grade: 0,
    }
  }

  let severity = 'Mild'
  if (score >= 30 && score <= 50) {
    severity = 'Moderate'
  } else if (score >= 55 && score <= 75) {
    severity = 'Severe'
  } else if (score >= 80) {
    severity = 'Extreme'
  }

  let grade = 0
  if (score > 0 && score <= 10) {
    grade = 1
  } else if (score <= 25) {
    grade = 2
  } else if (score <= 50) {
    grade = 3
  } else if (score <= 75) {
    grade = 4
  } else {
    grade = 5
  }

  return {
    name: 'NOSE',
    scoreText: `Total score ${score}/100`,
    severity,
    grade,
  }
}

function getTnssSummary(score: number | null): InstrumentSummary {
  if (score === null) {
    return {
      name: 'TNSS',
      scoreText: 'Not triggered or not completed',
      severity: 'Not available',
      grade: 0,
    }
  }

  let grade = 0
  if (score > 0 && score <= 3) {
    grade = 1
  } else if (score <= 5) {
    grade = 2
  } else {
    grade = 3
  }

  return {
    name: 'TNSS',
    scoreText: `Total score ${score}/12`,
    severity: score >= 6 ? 'Significant allergic component' : 'Not significant',
    grade,
  }
}

function getRqlqSummary(score: number | null): InstrumentSummary {
  if (score === null) {
    return {
      name: 'RQLQ',
      scoreText: 'Not triggered or not completed',
      severity: 'Not available',
      grade: 0,
    }
  }

  let severity = 'Minimal'
  if (score >= 1.5 && score <= 2.4) {
    severity = 'Mild'
  } else if (score >= 2.5 && score <= 3.4) {
    severity = 'Moderate'
  } else if (score >= 3.5 && score <= 4.4) {
    severity = 'Severe'
  } else if (score >= 4.5) {
    severity = 'Very severe'
  }

  let grade = 0
  if (score > 0 && score <= 1.4) {
    grade = 1
  } else if (score <= 2.4) {
    grade = 2
  } else if (score <= 3.4) {
    grade = 3
  } else if (score <= 4.4) {
    grade = 4
  } else {
    grade = 5
  }

  return {
    name: 'RQLQ',
    scoreText: `Mean score ${score.toFixed(2)}/6`,
    severity,
    grade,
  }
}

function getEssSummary(score: number | null): InstrumentSummary {
  if (score === null) {
    return {
      name: 'ESS',
      scoreText: 'Not triggered or not completed',
      severity: 'Not available',
      grade: 0,
    }
  }

  let severity = 'Normal'
  if (score >= 8 && score <= 10) {
    severity = 'Mild'
  } else if (score >= 11 && score <= 15) {
    severity = 'Moderate'
  } else if (score >= 16) {
    severity = 'Severe'
  }

  let grade = 0
  if (score > 0 && score <= 7) {
    grade = 1
  } else if (score <= 10) {
    grade = 3
  } else if (score <= 15) {
    grade = 4
  } else {
    grade = 5
  }

  return {
    name: 'ESS',
    scoreText: `Total score ${score}/24`,
    severity,
    grade,
  }
}

function buildClinicianEmail(formData: SinusAssessmentFormData): { subject: string; body: string } {
  const submissionDate = new Date()
  const submissionDateLabel = formatDateForSubject(submissionDate)
  const ageAtAssessment = calculateAge(formData.personalDetails.dateOfBirth)
  const eposClassification = calculateEposClassification(formData)

  const snot22Total = calculateTotalIfComplete(formData.instruments.snot22)
  const noseRawTotal = calculateTotalIfComplete(formData.instruments.nose)
  const noseScore = noseRawTotal === null ? null : noseRawTotal * 5
  const tnssTotal = calculateTotalIfComplete(formData.instruments.tnss)
  const rqlqTotal = calculateTotalIfComplete(formData.instruments.rqlq)
  const rqlqMean = rqlqTotal === null ? null : rqlqTotal / formData.instruments.rqlq.length
  const essTotal = calculateTotalIfComplete(formData.instruments.ess)

  const instrumentSummaries = [
    getSnot22Summary(snot22Total),
    getNoseSummary(noseScore),
    getTnssSummary(tnssTotal),
    getRqlqSummary(rqlqMean),
    getEssSummary(essTotal),
  ]

  const highestGrade = instrumentSummaries.reduce((highest, current) => Math.max(highest, current.grade), 0)
  const patientSurname = getSurname(formData.personalDetails.fullName)

  const subject = `PRE-APPOINTMENT ASSESSMENT — ${patientSurname} — ${submissionDateLabel} — Highest Grade: ${highestGrade}/5 — EPOS: ${eposClassification}`

  const sectionThreeLines = instrumentSummaries.map((summary) => {
    return `${summary.name}: ${summary.scoreText}. Severity: ${summary.severity}. Grade: ${summary.grade}/5.`
  })

  const body = [
    'SECTION 1 — Patient details',
    `Name: ${formData.personalDetails.fullName || 'Not provided'}`,
    `Email: ${formData.personalDetails.email || 'Not provided'}`,
    `Date of birth: ${formData.personalDetails.dateOfBirth || 'Not provided'}`,
    `Phone: ${formData.personalDetails.phone || 'Not provided'}`,
    `Patient type: ${mapPatientType(formData.patientType)}`,
    `Post-consultation information email opt-in: ${formData.personalDetails.postConsultationOptIn ? 'Yes' : 'No'}`,
    '',
    'SECTION 2 — EPOS 2020 provisional classification',
    `Provisional EPOS 2020 classification: ${eposClassification}`,
    `Cardinal symptoms selected: ${
      formData.eposSymptoms.cardinalSymptoms.length > 0
        ? formData.eposSymptoms.cardinalSymptoms.join('; ')
        : 'None selected'
    }`,
    `Duration: ${mapDuration(formData.eposSymptoms.duration)}`,
    `Symptom-free intervals: ${mapSymptomFreeInterval(
      formData.eposSymptoms.symptomFreeInterval,
      formData.eposSymptoms.duration,
    )}`,
    `Episodes in 12 months: ${mapEpisodeFrequency(
      formData.eposSymptoms.episodeFrequency,
      formData.eposSymptoms.symptomFreeInterval,
    )}`,
    `Age at assessment: ${ageAtAssessment === null ? 'Not available' : ageAtAssessment}`,
    'Label: Provisional classification based on patient-reported symptom pattern — for clinical review only.',
    '',
    'SECTION 3 — Validated instrument scores and grades',
    'Grading scale used: Grade 0 (no clinically significant finding), Grade 1 (mild impact), Grade 2 (mild to moderate impact), Grade 3 (moderate impact — warrants clinical attention), Grade 4 (significant impact — warrants clinical attention), Grade 5 (severe impact — priority review).',
    ...sectionThreeLines,
    '',
    'SECTION 4 — Nurse practitioner quick reference',
    'NURSE PRACTITIONER QUICK REFERENCE',
    `Highest grade: ${highestGrade}/5`,
    '',
    'Grade 5 — Priority review: SNOT-22 >50 OR NOSE >75 OR ESS >15 OR RQLQ mean >4.5',
    'Grade 4 — Warrants attention: SNOT-22 21-50 OR NOSE 51-75 OR ESS 11-15 OR RQLQ mean 3.5-4.4',
    'Grade 3 — Moderate: SNOT-22 21-50 OR NOSE 26-50 OR TNSS >=6 OR ESS 8-10',
    'Grade 0-2 — Routine: All scores below moderate thresholds',
    '',
    'Note: All grades are for internal clinical reference only. No grade or score is displayed to the patient.',
    '',
    'SECTION 5 — Medical history summary',
    `Relevant conditions: ${
      formData.medicalHistory.relevantConditions.length > 0
        ? formData.medicalHistory.relevantConditions.join('; ')
        : 'None reported'
    }`,
    `Prior sinus surgery: ${
      formData.medicalHistory.priorSinusSurgery === 'yes'
        ? `Yes — ${formData.medicalHistory.priorSurgeryDetails || 'Details not provided'}`
        : formData.medicalHistory.priorSinusSurgery === 'no'
          ? 'No'
          : formData.medicalHistory.priorSinusSurgery === 'not-sure'
            ? 'Unsure'
            : 'Not provided'
    }`,
    `Current nasal spray: ${
      formData.medicalHistory.currentIntranasalTreatment === 'steroid'
        ? 'Yes — steroid'
        : formData.medicalHistory.currentIntranasalTreatment === 'other'
          ? 'Yes — other'
          : formData.medicalHistory.currentIntranasalTreatment === 'no'
            ? 'No'
            : 'Not provided'
    }`,
    `Biologic therapy history: ${
      formData.medicalHistory.biologicTherapy === 'yes'
        ? 'Yes'
        : formData.medicalHistory.biologicTherapy === 'no'
          ? 'No'
          : formData.medicalHistory.biologicTherapy === 'not-sure'
            ? 'Unsure'
            : 'Not provided'
    }`,
    '',
    'SECTION 6 — Additional concerns',
    formData.submission.additionalConcerns.trim() || 'None provided',
    '',
    'SECTION 7 — References',
    'This assessment uses the following validated instruments:',
    '- SNOT-22: Fokkens WJ et al. EPOS 2020. Rhinology. 2020;58(Suppl S29):1-464.',
    '- NOSE: Stewart MG et al. Otolaryngol Head Neck Surg. 2004;130(2):157-163.',
    '- TNSS: Fokkens WJ et al. EPOS 2020.',
    '- RQLQ: Juniper EF, Guyatt GH. Clin Exp Allergy. 1991;21(1):77-83.',
    '- ESS: Johns MW. Sleep. 1991;14(6):540-545.',
    '- EPOS 2020 classification: Fokkens WJ et al. Rhinology. 2020;58(Suppl S29):1-464. DOI: 10.4193/Rhin20.600.',
  ].join('\n')

  return { subject, body }
}

function hasValidCoreData(formData: SinusAssessmentFormData): boolean {
  const { fullName, email, dateOfBirth, phone } = formData.personalDetails
  return Boolean(fullName.trim() && email.trim() && dateOfBirth && phone.trim())
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  const resendApiKey = process.env.RESEND_API_KEY
  const emailTo = process.env.EMAIL_TO

  if (!resendApiKey || !emailTo) {
    return NextResponse.json({ error: 'Email service is not configured' }, { status: 500 })
  }

  let payload: AssessmentRequestBody

  try {
    payload = (await request.json()) as AssessmentRequestBody
  } catch {
    return NextResponse.json({ error: 'Invalid request payload' }, { status: 400 })
  }

  if (!payload.formData || !hasValidCoreData(payload.formData)) {
    return NextResponse.json({ error: 'Missing required assessment fields' }, { status: 400 })
  }

  const { subject, body } = buildClinicianEmail(payload.formData)

  const resend = new Resend(resendApiKey)

  try {
    await resend.emails.send({
      from: 'noreply@my-ent.com.au',
      to: emailTo,
      replyTo: payload.formData.personalDetails.email,
      subject,
      text: body,
    })
  } catch {
    return NextResponse.json({ error: 'Failed to send clinician email' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
