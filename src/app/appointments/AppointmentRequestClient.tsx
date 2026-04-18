'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'

type TriageState =
  | 'ready-to-book'
  | 'questions'

type PatientType = 'Adult' | 'Paediatric'
type Sex = 'Male' | 'Female' | 'Other'
type SymptomCategory =
  | 'Nose and sinuses'
  | 'Ear'
  | 'Throat'
  | 'Paediatric ENT'
  | 'Skull base'
  | 'Other'

type ReferralStatus = 'Attached' | 'Not yet available'

type ImagingPerformed = 'CT scan' | 'MRI' | 'Other' | 'None'
type ImagingHeld = 'With GP' | 'At imaging facility' | 'Uploaded directly'

interface ImagingStudy {
  studyType: Exclude<ImagingPerformed, 'None'>
  studyDate: string
  facility: string
  heldLocation: ImagingHeld
}

interface FormState {
  fullLegalName: string
  dateOfBirth: string
  sex: '' | Sex
  streetAddress: string
  suburb: string
  state: string
  postcode: string
  mobile: string
  email: string
  medicareNumber: string
  medicareExpiry: string
  completedBy: 'Patient' | 'Parent or guardian'
  guardianRelationship: string
  guardianFullName: string
  guardianContact: string
  patientType: '' | PatientType
  gpFullName: string
  gpPracticeName: string
  gpPracticeAddress: string
  gpPracticePhone: string
  gpPracticeFax: string
  gpEmail: string
  referralIssued: boolean
  otherTreatingDoctors: string
  symptomCategory: '' | SymptomCategory
  presentingConcern: string
  symptomDuration: string
  priorSpecialistReview: 'Yes' | 'No'
  priorSpecialistDetail: string
  priorRelevantSurgery: 'Yes' | 'No'
  priorRelevantSurgeryDetail: string
  imagingPerformed: '' | ImagingPerformed
  pathologyOrAudiometry: 'Available' | 'None'
  pathologyOrAudiometryLocation: string
  preferredSurgeon: string
  preferredContactMethod: '' | 'Phone' | 'Email'
  consentPrivacyPolicy: boolean
  consentAccuracy: boolean
}

type ErrorMap = Record<string, string>

const stepTitles = [
  'Patient details',
  'Referring doctor details',
  'Clinical information',
  'Imaging and investigations',
  'Appointment preferences and consent',
]

const surgeonOptions = [
  'Dr Catherine Banks',
  'Dr Lyndon Chan',
  'Dr June Huang',
  'Dr Rithvik Reddy',
  'No preference - next available',
]

const initialFormState: FormState = {
  fullLegalName: '',
  dateOfBirth: '',
  sex: '',
  streetAddress: '',
  suburb: '',
  state: '',
  postcode: '',
  mobile: '',
  email: '',
  medicareNumber: '',
  medicareExpiry: '',
  completedBy: 'Patient',
  guardianRelationship: '',
  guardianFullName: '',
  guardianContact: '',
  patientType: '',
  gpFullName: '',
  gpPracticeName: '',
  gpPracticeAddress: '',
  gpPracticePhone: '',
  gpPracticeFax: '',
  gpEmail: '',
  referralIssued: false,
  otherTreatingDoctors: '',
  symptomCategory: '',
  presentingConcern: '',
  symptomDuration: '',
  priorSpecialistReview: 'No',
  priorSpecialistDetail: '',
  priorRelevantSurgery: 'No',
  priorRelevantSurgeryDetail: '',
  imagingPerformed: '',
  pathologyOrAudiometry: 'None',
  pathologyOrAudiometryLocation: '',
  preferredSurgeon: '',
  preferredContactMethod: '',
  consentPrivacyPolicy: false,
  consentAccuracy: false,
}

function required(value: string): boolean {
  return value.trim().length > 0
}

function surnameFromName(name: string): string {
  const parts = name.trim().split(/\s+/)
  if (parts.length === 0 || !parts[0]) {
    return 'Unknown'
  }
  return parts[parts.length - 1]
}

function formatDateForEmail(isoDate: string): string {
  if (!isoDate) {
    return 'Not provided'
  }

  const [year, month, day] = isoDate.split('-')
  if (!year || !month || !day) {
    return isoDate
  }

  return `${day}/${month}/${year}`
}

function formatAddress(form: FormState): string {
  return `${form.streetAddress}, ${form.suburb}, ${form.state} ${form.postcode}`
}

function getSectionErrors(
  sectionIndex: number,
  form: FormState,
  referralFile: File | null,
  imagingStudies: ImagingStudy[]
): ErrorMap {
  const errors: ErrorMap = {}

  if (sectionIndex === 0) {
    if (!required(form.fullLegalName)) errors.fullLegalName = 'Full legal name is required.'
    if (!required(form.dateOfBirth)) errors.dateOfBirth = 'Date of birth is required.'
    if (!required(form.sex)) errors.sex = 'Sex is required.'
    if (!required(form.streetAddress)) errors.streetAddress = 'Street address is required.'
    if (!required(form.suburb)) errors.suburb = 'Suburb is required.'
    if (!required(form.state)) errors.state = 'State is required.'
    if (!required(form.postcode)) errors.postcode = 'Postcode is required.'
    if (!required(form.mobile)) errors.mobile = 'Mobile phone number is required.'
    if (!required(form.email)) {
      errors.email = 'Email is required.'
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      errors.email = 'Please enter a valid email address.'
    }
    if (!required(form.medicareNumber)) errors.medicareNumber = 'Medicare number is required.'
    if (!required(form.medicareExpiry)) errors.medicareExpiry = 'Medicare expiry is required.'
    if (!required(form.patientType)) errors.patientType = 'Please select adult or paediatric.'

    if (form.completedBy === 'Parent or guardian') {
      if (!required(form.guardianRelationship)) {
        errors.guardianRelationship = 'Relationship to patient is required.'
      }
      if (!required(form.guardianFullName)) {
        errors.guardianFullName = 'Guardian full name is required.'
      }
      if (!required(form.guardianContact)) {
        errors.guardianContact = 'Guardian contact details are required.'
      }
    }
  }

  if (sectionIndex === 1) {
    if (!required(form.gpFullName)) errors.gpFullName = 'GP full name is required.'
    if (!required(form.gpPracticeName)) errors.gpPracticeName = 'GP practice name is required.'
    if (!required(form.gpPracticeAddress)) errors.gpPracticeAddress = 'GP practice address is required.'
    if (!required(form.gpPracticePhone)) errors.gpPracticePhone = 'GP practice phone is required.'
    if (!required(form.gpPracticeFax)) errors.gpPracticeFax = 'GP practice fax is required.'
    if (required(form.gpEmail) && !/^\S+@\S+\.\S+$/.test(form.gpEmail)) {
      errors.gpEmail = 'Please enter a valid GP email address.'
    }
    if (form.referralIssued && !referralFile) {
      errors.referralFile = 'Please upload the referral letter (PDF, JPG, or PNG).' 
    }
  }

  if (sectionIndex === 2) {
    if (!required(form.symptomCategory)) errors.symptomCategory = 'Symptom category is required.'
    if (!required(form.presentingConcern)) {
      errors.presentingConcern = 'Presenting concern is required.'
    } else if (form.presentingConcern.trim().length < 10) {
      errors.presentingConcern = 'Presenting concern must be at least 10 characters.'
    }
    if (!required(form.symptomDuration)) errors.symptomDuration = 'Symptom duration is required.'
    if (form.priorSpecialistReview === 'Yes' && !required(form.priorSpecialistDetail)) {
      errors.priorSpecialistDetail = 'Please provide prior specialist details.'
    }
    if (form.priorRelevantSurgery === 'Yes' && !required(form.priorRelevantSurgeryDetail)) {
      errors.priorRelevantSurgeryDetail = 'Please provide prior surgery details.'
    }
  }

  if (sectionIndex === 3) {
    if (!required(form.imagingPerformed)) {
      errors.imagingPerformed = 'Please indicate whether imaging exists.'
    }

    if (form.imagingPerformed && form.imagingPerformed !== 'None') {
      if (imagingStudies.length === 0) {
        errors.imagingStudies = 'Add at least one imaging study.'
      }
      imagingStudies.forEach((study, index) => {
        if (!required(study.studyDate)) {
          errors[`imagingDate-${index}`] = 'Date is required for each imaging study.'
        }
        if (!required(study.facility)) {
          errors[`imagingFacility-${index}`] = 'Facility is required for each imaging study.'
        }
      })
    }

    if (form.pathologyOrAudiometry === 'Available' && !required(form.pathologyOrAudiometryLocation)) {
      errors.pathologyOrAudiometryLocation =
        'Please provide where pathology or audiometry results are held.'
    }
  }

  if (sectionIndex === 4) {
    if (!required(form.preferredSurgeon)) errors.preferredSurgeon = 'Preferred surgeon is required.'
    if (!required(form.preferredContactMethod)) {
      errors.preferredContactMethod = 'Preferred contact method is required.'
    }
    if (!form.consentPrivacyPolicy) {
      errors.consentPrivacyPolicy = 'Privacy Policy consent is mandatory.'
    }
    if (!form.consentAccuracy) {
      errors.consentAccuracy = 'Information accuracy confirmation is mandatory.'
    }
  }

  return errors
}

function defaultStudyType(imagingPerformed: FormState['imagingPerformed']): ImagingStudy['studyType'] {
  if (imagingPerformed === 'CT scan' || imagingPerformed === 'MRI' || imagingPerformed === 'Other') {
    return imagingPerformed
  }
  return 'Other'
}

export function AppointmentRequestClient() {
  const [triageState, setTriageState] = useState<TriageState | null>(null)
  const [stepIndex, setStepIndex] = useState(0)
  const [form, setForm] = useState<FormState>(initialFormState)
  const [referralFile, setReferralFile] = useState<File | null>(null)
  const [imagingReportFile, setImagingReportFile] = useState<File | null>(null)
  const [imagingStudies, setImagingStudies] = useState<ImagingStudy[]>([])
  const [errors, setErrors] = useState<ErrorMap>({})
  const [submitted, setSubmitted] = useState(false)

  const activeSectionErrors = useMemo(
    () => getSectionErrors(stepIndex, form, referralFile, imagingStudies),
    [stepIndex, form, referralFile, imagingStudies]
  )

  const allSectionsValid = useMemo(() => {
    const checks = stepTitles.map((_, index) =>
      getSectionErrors(index, form, referralFile, imagingStudies)
    )
    return checks.every((check) => Object.keys(check).length === 0)
  }, [form, referralFile, imagingStudies])

  const canSubmit =
    triageState === 'ready-to-book' && allSectionsValid

  useEffect(() => {
    const targetHash = '#booking-request-form'

    function syncTriageWithHash(): void {
      if (window.location.hash === targetHash) {
        setTriageState('ready-to-book')
      }
    }

    syncTriageWithHash()
    window.addEventListener('hashchange', syncTriageWithHash)

    return () => {
      window.removeEventListener('hashchange', syncTriageWithHash)
    }
  }, [])

  useEffect(() => {
    if (triageState !== 'ready-to-book') {
      return
    }
    if (window.location.hash !== '#booking-request-form') {
      return
    }
    const target = document.getElementById('booking-request-form')
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [triageState])

  function updateForm<K extends keyof FormState>(key: K, value: FormState[K]): void {
    const nextForm = { ...form, [key]: value }
    setForm(nextForm)
    setErrors(getSectionErrors(stepIndex, nextForm, referralFile, imagingStudies))
  }

  function validateFile(file: File, acceptedTypes: string[], maxSizeMb: number): string {
    const isAccepted = acceptedTypes.includes(file.type)
    if (!isAccepted) {
      return 'File type is not accepted.'
    }
    if (file.size > maxSizeMb * 1024 * 1024) {
      return `File must be ${maxSizeMb}MB or less.`
    }
    return ''
  }

  function onReferralChange(file: File | null): void {
    if (!file) {
      setReferralFile(null)
      setErrors(getSectionErrors(stepIndex, form, null, imagingStudies))
      return
    }

    const message = validateFile(file, ['application/pdf', 'image/jpeg', 'image/png'], 10)
    if (message) {
      setErrors((prev) => ({ ...prev, referralFile: message }))
      return
    }

    setReferralFile(file)
    setErrors(getSectionErrors(stepIndex, form, file, imagingStudies))
  }

  function onImagingReportChange(file: File | null): void {
    if (!file) {
      setImagingReportFile(null)
      setErrors(getSectionErrors(stepIndex, form, referralFile, imagingStudies))
      return
    }

    const message = validateFile(file, ['application/pdf'], 10)
    if (message) {
      setErrors((prev) => ({ ...prev, imagingReportFile: message }))
      return
    }

    setImagingReportFile(file)
    setErrors(getSectionErrors(stepIndex, form, referralFile, imagingStudies))
  }

  function handleNext(): void {
    const nextErrors = getSectionErrors(stepIndex, form, referralFile, imagingStudies)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      return
    }
    setStepIndex((prev) => Math.min(prev + 1, stepTitles.length - 1))
  }

  function handleBack(): void {
    setStepIndex((prev) => Math.max(prev - 1, 0))
    setErrors({})
  }

  function buildEmailBody(): string {
    const referralStatus: ReferralStatus = form.referralIssued
      ? referralFile
        ? 'Attached'
        : 'Not yet available'
      : 'Not yet available'

    const formattedStudies =
      form.imagingPerformed !== 'None' && imagingStudies.length > 0
        ? imagingStudies
            .map(
              (study) =>
                `${study.studyType}: ${formatDateForEmail(study.studyDate)}, ${study.facility}, ${study.heldLocation}`
            )
            .join('\n')
        : 'None'

    const imagingReportStatus =
      form.imagingPerformed === 'None'
        ? 'Not applicable'
        : imagingReportFile
          ? `Attached (${imagingReportFile.name})`
          : 'Optional - patient may provide imaging reports at the appointment'

    const priorReview =
      form.priorSpecialistReview === 'Yes'
        ? `Yes - ${form.priorSpecialistDetail}`
        : 'No'

    const priorSurgery =
      form.priorRelevantSurgery === 'Yes'
        ? `Yes - ${form.priorRelevantSurgeryDetail}`
        : 'No'

    return [
      'PATIENT DETAILS',
      `Name: ${form.fullLegalName}`,
      `Date of birth: ${formatDateForEmail(form.dateOfBirth)}`,
      `Sex: ${form.sex}`,
      `Address: ${formatAddress(form)}`,
      `Mobile: ${form.mobile}`,
      `Email: ${form.email}`,
      `Medicare number: ${form.medicareNumber} (Expiry: ${formatDateForEmail(form.medicareExpiry)})`,
      `Form completed by: ${
        form.completedBy === 'Patient'
          ? 'Patient'
          : `Parent or guardian - ${form.guardianFullName}, ${form.guardianRelationship}, ${form.guardianContact}`
      }`,
      '',
      'REFERRING DOCTOR',
      `GP name: ${form.gpFullName}`,
      `Practice: ${form.gpPracticeName}`,
      `Address: ${form.gpPracticeAddress}`,
      `Phone: ${form.gpPracticePhone}`,
      `Fax: ${form.gpPracticeFax}`,
      `GP email: ${form.gpEmail || 'Not provided'}`,
      `Referral letter: ${referralStatus}${referralFile ? ` (${referralFile.name})` : ''}`,
      `Other treating doctors: ${form.otherTreatingDoctors || 'None provided'}`,
      '',
      'CLINICAL INFORMATION',
      `Symptom category: ${form.symptomCategory}`,
      `Presenting concern: ${form.presentingConcern}`,
      `Duration: ${form.symptomDuration}`,
      `Prior ENT or specialist review: ${priorReview}`,
      `Prior relevant surgery: ${priorSurgery}`,
      '',
      'IMAGING AND INVESTIGATIONS',
      `Imaging performed: ${form.imagingPerformed}`,
      formattedStudies,
      `Imaging report: ${imagingReportStatus}`,
      `Pathology or audiometry: ${
        form.pathologyOrAudiometry === 'Available'
          ? `Available - ${form.pathologyOrAudiometryLocation}`
          : 'None'
      }`,
      '',
      'APPOINTMENT PREFERENCES',
      `Preferred surgeon: ${form.preferredSurgeon}`,
      'Consulting location: Macquarie Street, Sydney CBD',
      `Preferred contact for confirmation: ${form.preferredContactMethod}`,
      'Time-sensitive concerns: Patient instructed to call the rooms directly on 02 9247 1762 during business hours. After hours, present to the nearest emergency department.',
      '',
      'CONSENT',
      'Privacy Policy accepted: Yes',
      'Information accuracy confirmed: Yes',
    ].join('\n')
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    if (!canSubmit) {
      setErrors(getSectionErrors(stepIndex, form, referralFile, imagingStudies))
      return
    }

    const subject = `[NEW PATIENT REQUEST] - ${form.patientType} - ${form.symptomCategory} - ${surnameFromName(form.fullLegalName)}`
    const body = buildEmailBody()
    const mailto = `mailto:contact@my-ent.com.au?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
    window.location.href = mailto
  }

  function triageCard(
    value: TriageState,
    title: string,
    detail: string,
    buttonLabel: string,
    buttonStyle: 'myent-btn-primary' | 'myent-btn-outline' = 'myent-btn-outline'
  ): React.ReactElement {
    return (
      <article className="myent-card h-full">
        <h3 className="text-2xl leading-snug">{title}</h3>
        <p className="mt-4 text-base leading-relaxed text-neutral-500">{detail}</p>
        <button
          type="button"
          className={`${buttonStyle} mt-6`}
          onClick={() => setTriageState(value)}
        >
          {buttonLabel}
        </button>
      </article>
    )
  }

  return (
    <main>
      <section className="myent-section bg-white">
        <div className="myent-container">
          <p className="myent-eyebrow">Appointments</p>
          <div className="mt-4 max-w-3xl space-y-6">
            <h1 className="text-4xl leading-tight tracking-tight lg:text-5xl">
              Request an appointment
            </h1>
            <p className="text-lg leading-relaxed text-neutral-500">
              This booking request form helps reception action your booking request without follow-up calls
              for missing details. Need a number for another consulting room or a public hospital?{' '}
              <Link className="font-medium text-teal-400 underline hover:text-teal-500" href="/contact/finding-the-right-contact">
                Find the right contact for your situation.
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="myent-section border-t border-neutral-200 bg-neutral-100">
        <div className="myent-container">
          <div className="section-header mb-10 max-w-3xl">
            <p className="myent-eyebrow">First Step</p>
            <h2 className="mt-3 text-3xl leading-tight">Tell us your current situation</h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-500">
              Choose the pathway that matches your next step.
            </p>
          </div>

          <p className="mb-8 text-base leading-relaxed text-neutral-600">
            For urgent concerns during business hours, please call us directly on 02 9247 1762.
            After hours, please present to your nearest emergency department.
          </p>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {triageCard(
              'ready-to-book',
              'I have a GP referral and I am ready to request an appointment',
              'Complete the booking request form so reception can action your booking request quickly.',
              'Start booking request form',
              'myent-btn-primary'
            )}
            {triageCard(
              'questions',
              'I have questions about fees or my first visit',
              'Review key information before submitting an appointment request.',
              'View patient information'
            )}
          </div>
        </div>
      </section>

      {triageState === 'questions' ? (
        <section className="myent-section border-t border-neutral-200 bg-white">
          <div className="myent-container max-w-3xl">
            <article className="myent-card">
              <p className="myent-eyebrow">Patient information</p>
              <h2 className="mt-3 text-3xl leading-tight">Answers to common appointment questions</h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-500">
                If you are not ready to submit the booking request form yet, please review our guidance on
                consultation fees, Medicare, and what to expect at your first visit.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link className="myent-btn-primary" href="/appointments/fees-and-medicare">
                  Fees and Medicare
                </Link>
                <Link className="myent-btn-outline" href="/appointments/your-first-visit">
                  Your First Visit
                </Link>
                <button
                  type="button"
                  className="myent-btn-outline"
                  onClick={() => setTriageState(null)}
                >
                  Back to pathways
                </button>
              </div>
            </article>
          </div>
        </section>
      ) : null}

      {triageState === 'ready-to-book' && (
        <section id="booking-request-form" className="myent-section border-t border-neutral-200 bg-white">
          <div className="myent-container">
            <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {stepTitles.map((title, index) => {
                const isActive = index === stepIndex
                return (
                  <div
                    key={title}
                    className={`rounded-lg border px-4 py-3 text-sm ${
                      isActive
                        ? 'border-teal-400 bg-teal-50 text-neutral-700'
                        : 'border-neutral-200 bg-neutral-50 text-neutral-500'
                    }`}
                  >
                    <p className="text-xs uppercase tracking-[0.06em]">Section {index + 1}</p>
                    <p className="mt-1">{title}</p>
                  </div>
                )
              })}
            </div>

            <form onSubmit={handleSubmit} className="space-y-8" noValidate>
              {stepIndex === 0 ? (
                <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
                  <h3 className="text-2xl leading-snug">Section 1 - Patient details</h3>
                  <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
                    <Field
                      label="Full legal name"
                      value={form.fullLegalName}
                      onChange={(value) => updateForm('fullLegalName', value)}
                      error={errors.fullLegalName}
                    />
                    <Field
                      label="Date of birth"
                      type="date"
                      value={form.dateOfBirth}
                      onChange={(value) => updateForm('dateOfBirth', value)}
                      error={errors.dateOfBirth}
                    />
                    <SelectField
                      label="Sex"
                      value={form.sex}
                      onChange={(value) => updateForm('sex', value as FormState['sex'])}
                      options={['Male', 'Female', 'Other']}
                      error={errors.sex}
                    />
                    <SelectField
                      label="Patient type"
                      value={form.patientType}
                      onChange={(value) => updateForm('patientType', value as FormState['patientType'])}
                      options={['Adult', 'Paediatric']}
                      error={errors.patientType}
                    />
                    <Field
                      label="Street address"
                      value={form.streetAddress}
                      onChange={(value) => updateForm('streetAddress', value)}
                      error={errors.streetAddress}
                    />
                    <Field
                      label="Suburb"
                      value={form.suburb}
                      onChange={(value) => updateForm('suburb', value)}
                      error={errors.suburb}
                    />
                    <Field
                      label="State"
                      value={form.state}
                      onChange={(value) => updateForm('state', value)}
                      error={errors.state}
                    />
                    <Field
                      label="Postcode"
                      value={form.postcode}
                      onChange={(value) => updateForm('postcode', value)}
                      error={errors.postcode}
                    />
                    <Field
                      label="Mobile phone"
                      value={form.mobile}
                      onChange={(value) => updateForm('mobile', value)}
                      error={errors.mobile}
                    />
                    <Field
                      label="Email"
                      type="email"
                      value={form.email}
                      onChange={(value) => updateForm('email', value)}
                      error={errors.email}
                    />
                    <Field
                      label="Medicare number"
                      value={form.medicareNumber}
                      onChange={(value) => updateForm('medicareNumber', value)}
                      error={errors.medicareNumber}
                    />
                    <Field
                      label="Medicare expiry"
                      type="month"
                      value={form.medicareExpiry}
                      onChange={(value) => updateForm('medicareExpiry', value)}
                      error={errors.medicareExpiry}
                    />
                    <SelectField
                      label="Who is completing this form?"
                      value={form.completedBy}
                      onChange={(value) =>
                        updateForm('completedBy', value as FormState['completedBy'])
                      }
                      options={['Patient', 'Parent or guardian']}
                    />
                  </div>

                  {form.completedBy === 'Parent or guardian' ? (
                    <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
                      <Field
                        label="Relationship to patient"
                        value={form.guardianRelationship}
                        onChange={(value) => updateForm('guardianRelationship', value)}
                        error={errors.guardianRelationship}
                      />
                      <Field
                        label="Guardian full name"
                        value={form.guardianFullName}
                        onChange={(value) => updateForm('guardianFullName', value)}
                        error={errors.guardianFullName}
                      />
                      <Field
                        label="Guardian contact details"
                        value={form.guardianContact}
                        onChange={(value) => updateForm('guardianContact', value)}
                        error={errors.guardianContact}
                      />
                    </div>
                  ) : null}
                </div>
              ) : null}

              {stepIndex === 1 ? (
                <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
                  <h3 className="text-2xl leading-snug">Section 2 - Referring doctor details</h3>
                  <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
                    <Field
                      label="GP full name"
                      value={form.gpFullName}
                      onChange={(value) => updateForm('gpFullName', value)}
                      error={errors.gpFullName}
                    />
                    <Field
                      label="GP practice name"
                      value={form.gpPracticeName}
                      onChange={(value) => updateForm('gpPracticeName', value)}
                      error={errors.gpPracticeName}
                    />
                    <Field
                      label="GP practice address"
                      value={form.gpPracticeAddress}
                      onChange={(value) => updateForm('gpPracticeAddress', value)}
                      error={errors.gpPracticeAddress}
                    />
                    <Field
                      label="GP practice phone"
                      value={form.gpPracticePhone}
                      onChange={(value) => updateForm('gpPracticePhone', value)}
                      error={errors.gpPracticePhone}
                    />
                    <Field
                      label="GP practice fax"
                      value={form.gpPracticeFax}
                      onChange={(value) => updateForm('gpPracticeFax', value)}
                      error={errors.gpPracticeFax}
                    />
                    <Field
                      label="GP email (if available)"
                      type="email"
                      value={form.gpEmail}
                      onChange={(value) => updateForm('gpEmail', value)}
                      error={errors.gpEmail}
                    />
                  </div>

                  <div className="mt-5 space-y-3">
                    <label className="block text-sm text-neutral-700">
                      <span>Has a formal referral letter been issued?</span>
                      <select
                        className="mt-2 w-full rounded-lg border border-neutral-200 bg-white px-3 py-2"
                        value={form.referralIssued ? 'Yes' : 'No'}
                        onChange={(event) => updateForm('referralIssued', event.target.value === 'Yes')}
                      >
                        <option>No</option>
                        <option>Yes</option>
                      </select>
                    </label>

                    {form.referralIssued ? (
                      <label className="block text-sm text-neutral-700">
                        <span>Upload referral letter (PDF, JPG, PNG, max 10MB)</span>
                        <input
                          className="mt-2 block w-full rounded-lg border border-neutral-200 bg-white px-3 py-2"
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={(event) => onReferralChange(event.target.files?.[0] ?? null)}
                        />
                        {errors.referralFile ? (
                          <p className="mt-2 text-sm text-red-700">{errors.referralFile}</p>
                        ) : null}
                      </label>
                    ) : null}

                    <TextAreaField
                      label="Other treating doctors involved (optional)"
                      value={form.otherTreatingDoctors}
                      onChange={(value) => updateForm('otherTreatingDoctors', value)}
                      placeholder="Name, specialty, and contact details"
                    />
                  </div>
                </div>
              ) : null}

              {stepIndex === 2 ? (
                <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
                  <h3 className="text-2xl leading-snug">Section 3 - Clinical information</h3>
                  <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
                    <SelectField
                      label="Symptom category"
                      value={form.symptomCategory}
                      onChange={(value) =>
                        updateForm('symptomCategory', value as FormState['symptomCategory'])
                      }
                      options={[
                        'Nose and sinuses',
                        'Ear',
                        'Throat',
                        'Paediatric ENT',
                        'Skull base',
                        'Other',
                      ]}
                      error={errors.symptomCategory}
                    />
                    <Field
                      label="Duration of symptoms"
                      value={form.symptomDuration}
                      onChange={(value) => updateForm('symptomDuration', value)}
                      error={errors.symptomDuration}
                    />
                  </div>

                  <div className="mt-5">
                    <TextAreaField
                      label="Presenting concern (minimum 10 characters)"
                      value={form.presentingConcern}
                      onChange={(value) => updateForm('presentingConcern', value)}
                      error={errors.presentingConcern}
                      minLength={10}
                    />
                    <p className="mt-2 text-sm text-neutral-500">
                      Current count: {form.presentingConcern.trim().length} characters
                    </p>
                  </div>

                  <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
                    <SelectField
                      label="Seen by another ENT or specialist for this concern?"
                      value={form.priorSpecialistReview}
                      onChange={(value) =>
                        updateForm('priorSpecialistReview', value as FormState['priorSpecialistReview'])
                      }
                      options={['Yes', 'No']}
                    />
                    <SelectField
                      label="Any relevant prior surgery?"
                      value={form.priorRelevantSurgery}
                      onChange={(value) =>
                        updateForm('priorRelevantSurgery', value as FormState['priorRelevantSurgery'])
                      }
                      options={['Yes', 'No']}
                    />
                  </div>

                  {form.priorSpecialistReview === 'Yes' ? (
                    <div className="mt-5">
                      <TextAreaField
                        label="Prior specialist details"
                        value={form.priorSpecialistDetail}
                        onChange={(value) => updateForm('priorSpecialistDetail', value)}
                        error={errors.priorSpecialistDetail}
                      />
                    </div>
                  ) : null}

                  {form.priorRelevantSurgery === 'Yes' ? (
                    <div className="mt-5">
                      <TextAreaField
                        label="Prior surgery details"
                        value={form.priorRelevantSurgeryDetail}
                        onChange={(value) => updateForm('priorRelevantSurgeryDetail', value)}
                        error={errors.priorRelevantSurgeryDetail}
                      />
                    </div>
                  ) : null}
                </div>
              ) : null}

              {stepIndex === 3 ? (
                <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
                  <h3 className="text-2xl leading-snug">Section 4 - Imaging and investigations</h3>
                  <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
                    <SelectField
                      label="Relevant imaging performed"
                      value={form.imagingPerformed}
                      onChange={(value) => {
                        updateForm('imagingPerformed', value as FormState['imagingPerformed'])
                        if (value === 'None') {
                          setImagingStudies([])
                          setImagingReportFile(null)
                        }
                      }}
                      options={['CT scan', 'MRI', 'Other', 'None']}
                      error={errors.imagingPerformed}
                    />
                    <SelectField
                      label="Pathology or audiometry results"
                      value={form.pathologyOrAudiometry}
                      onChange={(value) =>
                        updateForm('pathologyOrAudiometry', value as FormState['pathologyOrAudiometry'])
                      }
                      options={['Available', 'None']}
                    />
                  </div>

                  {form.pathologyOrAudiometry === 'Available' ? (
                    <div className="mt-5">
                      <Field
                        label="Where are pathology or audiometry results held?"
                        value={form.pathologyOrAudiometryLocation}
                        onChange={(value) => updateForm('pathologyOrAudiometryLocation', value)}
                        error={errors.pathologyOrAudiometryLocation}
                      />
                    </div>
                  ) : null}

                  {form.imagingPerformed && form.imagingPerformed !== 'None' ? (
                    <div className="mt-6 space-y-5">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <h4 className="text-xl">Imaging studies</h4>
                        <button
                          type="button"
                          className="myent-btn-outline"
                          onClick={() =>
                            setImagingStudies((prev) => [
                              ...prev,
                              {
                                studyType: defaultStudyType(form.imagingPerformed),
                                studyDate: '',
                                facility: '',
                                heldLocation: 'With GP',
                              },
                            ])
                          }
                        >
                          Add imaging study
                        </button>
                      </div>

                      {errors.imagingStudies ? (
                        <p className="text-sm text-red-700">{errors.imagingStudies}</p>
                      ) : null}

                      {imagingStudies.map((study, index) => (
                        <div
                          key={`${study.studyType}-${index}`}
                          className="rounded-lg border border-neutral-200 bg-white p-4"
                        >
                          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                            <SelectField
                              label="Study type"
                              value={study.studyType}
                              onChange={(value) => {
                                setImagingStudies((prev) =>
                                  prev.map((entry, entryIndex) =>
                                    entryIndex === index
                                      ? {
                                          ...entry,
                                          studyType: value as ImagingStudy['studyType'],
                                        }
                                      : entry
                                  )
                                )
                              }}
                              options={['CT scan', 'MRI', 'Other']}
                            />
                            <Field
                              label="Study date"
                              type="date"
                              value={study.studyDate}
                              onChange={(value) => {
                                setImagingStudies((prev) =>
                                  prev.map((entry, entryIndex) =>
                                    entryIndex === index ? { ...entry, studyDate: value } : entry
                                  )
                                )
                              }}
                              error={errors[`imagingDate-${index}`]}
                            />
                            <SelectField
                              label="Where images/report are held"
                              value={study.heldLocation}
                              onChange={(value) => {
                                setImagingStudies((prev) =>
                                  prev.map((entry, entryIndex) =>
                                    entryIndex === index
                                      ? { ...entry, heldLocation: value as ImagingHeld }
                                      : entry
                                  )
                                )
                              }}
                              options={['With GP', 'At imaging facility', 'Uploaded directly']}
                            />
                          </div>
                          <div className="mt-4">
                            <Field
                              label="Facility performed"
                              value={study.facility}
                              onChange={(value) => {
                                setImagingStudies((prev) =>
                                  prev.map((entry, entryIndex) =>
                                    entryIndex === index ? { ...entry, facility: value } : entry
                                  )
                                )
                              }}
                              error={errors[`imagingFacility-${index}`]}
                            />
                          </div>
                          <button
                            type="button"
                            className="mt-4 text-sm text-teal-400 underline"
                            onClick={() =>
                              setImagingStudies((prev) =>
                                prev.filter((_entry, entryIndex) => entryIndex !== index)
                              )
                            }
                          >
                            Remove study
                          </button>
                        </div>
                      ))}

                      <label className="block text-sm text-neutral-700">
                        <span>Upload imaging report (PDF, max 10MB)</span>
                        <input
                          className="mt-2 block w-full rounded-lg border border-neutral-200 bg-white px-3 py-2"
                          type="file"
                          accept=".pdf"
                          onChange={(event) => onImagingReportChange(event.target.files?.[0] ?? null)}
                        />
                        <p className="mt-2 text-sm text-neutral-500">
                          Optional - you can provide imaging reports at your appointment if preferred.
                        </p>
                        {errors.imagingReportFile ? (
                          <p className="mt-2 text-sm text-red-700">{errors.imagingReportFile}</p>
                        ) : null}
                      </label>
                    </div>
                  ) : null}
                </div>
              ) : null}

              {stepIndex === 4 ? (
                <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
                  <h3 className="text-2xl leading-snug">
                    Section 5 - Appointment preferences and consent
                  </h3>

                  <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
                    <SelectField
                      label="Preferred surgeon"
                      value={form.preferredSurgeon}
                      onChange={(value) => updateForm('preferredSurgeon', value)}
                      options={surgeonOptions}
                      error={errors.preferredSurgeon}
                    />
                    <SelectField
                      label="Preferred contact method"
                      value={form.preferredContactMethod}
                      onChange={(value) =>
                        updateForm(
                          'preferredContactMethod',
                          value as FormState['preferredContactMethod']
                        )
                      }
                      options={['Phone', 'Email']}
                      error={errors.preferredContactMethod}
                    />
                  </div>

                  <p className="mt-5 text-sm text-neutral-500">
                    If your concern is time-sensitive, please call the rooms directly on 02 9247
                    1762 during business hours. After hours, please present to your nearest
                    emergency department.
                  </p>

                  <div className="mt-6 space-y-3 rounded-lg border border-neutral-200 bg-white p-4">
                    <label className="flex items-start gap-3 text-sm text-neutral-700">
                      <input
                        type="checkbox"
                        className="mt-1 h-4 w-4"
                        checked={form.consentPrivacyPolicy}
                        onChange={(event) =>
                          updateForm('consentPrivacyPolicy', event.target.checked)
                        }
                      />
                      <span>
                        I have read and understood the{' '}
                        <Link className="text-teal-400 underline" href="/privacy-policy">
                          Privacy Policy
                        </Link>
                        .
                      </span>
                    </label>
                    {errors.consentPrivacyPolicy ? (
                      <p className="text-sm text-red-700">{errors.consentPrivacyPolicy}</p>
                    ) : null}

                    <label className="flex items-start gap-3 text-sm text-neutral-700">
                      <input
                        type="checkbox"
                        className="mt-1 h-4 w-4"
                        checked={form.consentAccuracy}
                        onChange={(event) => updateForm('consentAccuracy', event.target.checked)}
                      />
                      <span>
                        The information I have provided is accurate and complete to the best of my
                        knowledge.
                      </span>
                    </label>
                    {errors.consentAccuracy ? (
                      <p className="text-sm text-red-700">{errors.consentAccuracy}</p>
                    ) : null}
                  </div>
                </div>
              ) : null}

              {Object.keys(activeSectionErrors).length > 0 ? (
                <div className="rounded-lg border border-red-600 bg-white p-4 text-sm text-red-700">
                  Please complete all required fields in this section before continuing.
                </div>
              ) : null}

              <div className="flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  className="myent-btn-outline"
                  onClick={handleBack}
                  disabled={stepIndex === 0}
                >
                  Back
                </button>

                <div className="flex flex-wrap gap-3">
                  {stepIndex < stepTitles.length - 1 ? (
                    <button type="button" className="myent-btn-primary" onClick={handleNext}>
                      Next section
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="myent-btn-primary"
                      disabled={!canSubmit}
                    >
                      Send appointment request
                    </button>
                  )}
                </div>
              </div>
            </form>

            {submitted ? (
              <article className="mt-8 rounded-xl border border-teal-200 bg-teal-50 p-6">
                <p className="myent-eyebrow">Email draft generated</p>
                <h3 className="mt-3 text-2xl leading-snug">Your request is ready to send</h3>
                <p className="mt-3 text-base text-neutral-600">
                  Your email app should now open with the required structured content addressed to
                  contact@my-ent.com.au. Attach referral and imaging files before sending if they
                  are not already included by your mail client.
                </p>
              </article>
            ) : null}
          </div>
        </section>
      )}
    </main>
  )
}

interface FieldProps {
  label: string
  value: string
  onChange: (value: string) => void
  error?: string
  type?: 'text' | 'email' | 'date' | 'month'
}

function Field({ label, value, onChange, error, type = 'text' }: FieldProps) {
  return (
    <label className="block text-sm text-neutral-700">
      <span>{label}</span>
      <input
        type={type}
        className={`mt-2 w-full rounded-lg border bg-white px-3 py-2 ${
          error ? 'border-red-600' : 'border-neutral-200'
        }`}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      {error ? <p className="mt-2 text-sm text-red-700">{error}</p> : null}
    </label>
  )
}

interface SelectFieldProps {
  label: string
  value: string
  options: string[]
  onChange: (value: string) => void
  error?: string
}

function SelectField({ label, value, options, onChange, error }: SelectFieldProps) {
  return (
    <label className="block text-sm text-neutral-700">
      <span>{label}</span>
      <select
        className={`mt-2 w-full rounded-lg border bg-white px-3 py-2 ${
          error ? 'border-red-600' : 'border-neutral-200'
        }`}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="">Select</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error ? <p className="mt-2 text-sm text-red-700">{error}</p> : null}
    </label>
  )
}

interface TextAreaFieldProps {
  label: string
  value: string
  onChange: (value: string) => void
  error?: string
  placeholder?: string
  minLength?: number
}

function TextAreaField({
  label,
  value,
  onChange,
  error,
  placeholder,
  minLength,
}: TextAreaFieldProps) {
  return (
    <label className="block text-sm text-neutral-700">
      <span>{label}</span>
      <textarea
        className={`mt-2 w-full rounded-lg border bg-white px-3 py-2 ${
          error ? 'border-red-600' : 'border-neutral-200'
        }`}
        rows={4}
        value={value}
        minLength={minLength}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
      {error ? <p className="mt-2 text-sm text-red-700">{error}</p> : null}
    </label>
  )
}
