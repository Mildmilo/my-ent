'use client'

import { useState } from 'react'

type ConditionArea = 'nose-sinuses' | 'ear-hearing' | 'throat-voice' | 'skull-base-other' | ''
type PatientType = 'private' | 'public' | ''
type PreferredSurgeon =
  | 'dr-catherine-banks'
  | 'dr-lyndon-chan'
  | 'dr-june-huang'
  | 'dr-rithvik-reddy'
  | 'no-preference'
  | ''

interface FormState {
  fullLegalName: string
  dateOfBirth: string
  mobile: string
  mobileConfirm: string
  email: string
  patientType: PatientType
  conditionArea: ConditionArea
  preferredSurgeon: PreferredSurgeon
  referringDoctor: string
  briefReason: string
}

interface ErrorMap {
  fullLegalName?: string
  dateOfBirth?: string
  mobile?: string
  mobileConfirm?: string
  email?: string
  patientType?: string
  conditionArea?: string
  preferredSurgeon?: string
}

const initialFormState: FormState = {
  fullLegalName: '',
  dateOfBirth: '',
  mobile: '',
  mobileConfirm: '',
  email: '',
  patientType: '',
  conditionArea: '',
  preferredSurgeon: '',
  referringDoctor: '',
  briefReason: '',
}

const conditionAreaLabels: Record<Exclude<ConditionArea, ''>, string> = {
  'nose-sinuses': 'Nose and sinuses',
  'ear-hearing': 'Ear and hearing',
  'throat-voice': 'Throat and voice',
  'skull-base-other': 'Skull base / other',
}

const surgeonOptions: { value: PreferredSurgeon; label: string }[] = [
  { value: 'dr-catherine-banks', label: 'Dr Catherine Banks' },
  { value: 'dr-lyndon-chan', label: 'Dr Lyndon Chan' },
  { value: 'dr-june-huang', label: 'Dr June Huang' },
  { value: 'dr-rithvik-reddy', label: 'Dr Rithvik Reddy' },
  { value: 'no-preference', label: 'No preference' },
]

function validate(form: FormState): ErrorMap {
  const errors: ErrorMap = {}

  if (!form.fullLegalName.trim()) {
    errors.fullLegalName = 'Please enter your full legal name.'
  }

  if (!form.dateOfBirth) {
    errors.dateOfBirth = 'Please enter your date of birth.'
  }

  const mobileClean = form.mobile.replace(/\s/g, '')
  if (!mobileClean) {
    errors.mobile = 'Please enter your mobile number.'
  } else if (!/^04\d{8}$/.test(mobileClean)) {
    errors.mobile = 'Please enter a valid Australian mobile number starting with 04.'
  }

  const mobileConfirmClean = form.mobileConfirm.replace(/\s/g, '')
  if (!mobileConfirmClean) {
    errors.mobileConfirm = 'Please confirm your mobile number.'
  } else if (mobileClean !== mobileConfirmClean) {
    errors.mobileConfirm = 'Mobile numbers do not match — please check and try again.'
  }

  if (!form.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!form.patientType) {
    errors.patientType = 'Please indicate whether you are a private or public patient.'
  }

  if (!form.conditionArea) {
    errors.conditionArea = 'Please select the area your condition relates to.'
  }

  if (!form.preferredSurgeon) {
    errors.preferredSurgeon = 'Please select a preferred surgeon or choose no preference.'
  }

  return errors
}

export function AppointmentRequestClient() {
  const [form, setForm] = useState<FormState>(initialFormState)
  const [errors, setErrors] = useState<ErrorMap>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof ErrorMap]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const validationErrors = validate(form)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      const firstError = document.querySelector('[data-error]')
      firstError?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }

    setSubmitting(true)
    setServerError(null)

    try {
      const response = await fetch('/api/appointments/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!response.ok) {
        throw new Error('Submission failed')
      }

      setSubmitted(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch {
      setServerError(
        'Something went wrong submitting your request. Please try again or call us on 02 9247 1762.'
      )
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <section className="myent-section">
        <div className="myent-container">
          <div className="mx-auto max-w-2xl rounded-xl border border-teal-100 bg-teal-50 p-8 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-400">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl text-neutral-800">Request received</h2>
            <p className="mt-4 leading-relaxed text-neutral-600">
              Thank you — our reception team will be in touch by SMS within one business day with a
              link to complete your patient registration.
            </p>
            <p className="mt-3 text-sm text-neutral-500">
              Please ensure your mobile is switched on and accepting messages from unknown numbers.
              If you do not hear from us within one business day, please call us on{' '}
              <a href="tel:0292471762" className="text-teal-500 hover:text-teal-600">
                02 9247 1762
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="myent-section">
      <div className="myent-container">
        <div className="mx-auto max-w-2xl">
          <form onSubmit={handleSubmit} noValidate className="space-y-6">

            {/* Full legal name */}
            <div>
              <label htmlFor="fullLegalName" className="block text-sm font-medium text-neutral-700">
                Full legal name <span className="text-red-500">*</span>
              </label>
              <p className="mt-0.5 text-xs text-neutral-400">
                As it appears on your Medicare or insurance card
              </p>
              <input
                id="fullLegalName"
                name="fullLegalName"
                type="text"
                autoComplete="name"
                value={form.fullLegalName}
                onChange={handleChange}
                className={`mt-1.5 block w-full rounded-lg border px-4 py-3 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-teal-400 ${
                  errors.fullLegalName ? 'border-red-400 bg-red-50' : 'border-neutral-200 bg-white'
                }`}
              />
              {errors.fullLegalName && (
                <p data-error className="mt-1.5 text-xs text-red-500">{errors.fullLegalName}</p>
              )}
            </div>

            {/* Date of birth */}
            <div>
              <label htmlFor="dateOfBirth" className="block text-sm font-medium text-neutral-700">
                Date of birth <span className="text-red-500">*</span>
              </label>
              <input
                id="dateOfBirth"
                name="dateOfBirth"
                type="date"
                autoComplete="bday"
                value={form.dateOfBirth}
                onChange={handleChange}
                max={new Date().toISOString().split('T')[0]}
                className={`mt-1.5 block w-full rounded-lg border px-4 py-3 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-teal-400 ${
                  errors.dateOfBirth ? 'border-red-400 bg-red-50' : 'border-neutral-200 bg-white'
                }`}
              />
              {errors.dateOfBirth && (
                <p data-error className="mt-1.5 text-xs text-red-500">{errors.dateOfBirth}</p>
              )}
            </div>

            {/* Mobile */}
            <div>
              <label htmlFor="mobile" className="block text-sm font-medium text-neutral-700">
                Mobile number <span className="text-red-500">*</span>
              </label>
              <p className="mt-0.5 text-xs text-neutral-400">
                Our team will contact you by SMS at this number
              </p>
              <input
                id="mobile"
                name="mobile"
                type="tel"
                autoComplete="tel"
                placeholder="04XX XXX XXX"
                value={form.mobile}
                onChange={handleChange}
                className={`mt-1.5 block w-full rounded-lg border px-4 py-3 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-teal-400 ${
                  errors.mobile ? 'border-red-400 bg-red-50' : 'border-neutral-200 bg-white'
                }`}
              />
              {errors.mobile && (
                <p data-error className="mt-1.5 text-xs text-red-500">{errors.mobile}</p>
              )}
            </div>

            {/* Confirm mobile */}
            <div>
              <label htmlFor="mobileConfirm" className="block text-sm font-medium text-neutral-700">
                Confirm mobile number <span className="text-red-500">*</span>
              </label>
              <input
                id="mobileConfirm"
                name="mobileConfirm"
                type="tel"
                autoComplete="off"
                placeholder="04XX XXX XXX"
                value={form.mobileConfirm}
                onChange={handleChange}
                className={`mt-1.5 block w-full rounded-lg border px-4 py-3 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-teal-400 ${
                  errors.mobileConfirm ? 'border-red-400 bg-red-50' : 'border-neutral-200 bg-white'
                }`}
              />
              {errors.mobileConfirm && (
                <p data-error className="mt-1.5 text-xs text-red-500">{errors.mobileConfirm}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700">
                Email address <span className="text-red-500">*</span>
              </label>
              <p className="mt-0.5 text-xs text-neutral-400">
                Used as a backup if we cannot reach you by SMS
              </p>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                className={`mt-1.5 block w-full rounded-lg border px-4 py-3 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-teal-400 ${
                  errors.email ? 'border-red-400 bg-red-50' : 'border-neutral-200 bg-white'
                }`}
              />
              {errors.email && (
                <p data-error className="mt-1.5 text-xs text-red-500">{errors.email}</p>
              )}
            </div>

            {/* Private or public */}
            <div>
              <p className="block text-sm font-medium text-neutral-700">
                Are you a private or public patient? <span className="text-red-500">*</span>
              </p>
              <div className="mt-2 grid grid-cols-2 gap-3">
                {(['private', 'public'] as const).map((type) => (
                  <label
                    key={type}
                    className={`flex cursor-pointer items-center justify-center rounded-lg border px-4 py-3 text-sm font-medium transition-colors ${
                      form.patientType === type
                        ? 'border-teal-400 bg-teal-50 text-teal-700'
                        : 'border-neutral-200 bg-white text-neutral-600 hover:border-teal-200'
                    }`}
                  >
                    <input
                      type="radio"
                      name="patientType"
                      value={type}
                      checked={form.patientType === type}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </label>
                ))}
              </div>
              {errors.patientType && (
                <p data-error className="mt-1.5 text-xs text-red-500">{errors.patientType}</p>
              )}
            </div>

            {/* Condition area */}
            <div>
              <p className="block text-sm font-medium text-neutral-700">
                What area does your condition relate to? <span className="text-red-500">*</span>
              </p>
              <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {(Object.entries(conditionAreaLabels) as [Exclude<ConditionArea, ''>, string][]).map(
                  ([value, label]) => (
                    <label
                      key={value}
                      className={`flex cursor-pointer items-center rounded-lg border px-4 py-3 text-sm font-medium transition-colors ${
                        form.conditionArea === value
                          ? 'border-teal-400 bg-teal-50 text-teal-700'
                          : 'border-neutral-200 bg-white text-neutral-600 hover:border-teal-200'
                      }`}
                    >
                      <input
                        type="radio"
                        name="conditionArea"
                        value={value}
                        checked={form.conditionArea === value}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      {label}
                    </label>
                  )
                )}
              </div>
              {errors.conditionArea && (
                <p data-error className="mt-1.5 text-xs text-red-500">{errors.conditionArea}</p>
              )}
            </div>

            {/* Preferred surgeon */}
            <div>
              <label htmlFor="preferredSurgeon" className="block text-sm font-medium text-neutral-700">
                Preferred surgeon <span className="text-red-500">*</span>
              </label>
              <p className="mt-0.5 text-xs text-neutral-400">
                If you have been referred to a specific surgeon, please select them here
              </p>
              <select
                id="preferredSurgeon"
                name="preferredSurgeon"
                value={form.preferredSurgeon}
                onChange={handleChange}
                className={`mt-1.5 block w-full rounded-lg border px-4 py-3 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-teal-400 ${
                  errors.preferredSurgeon ? 'border-red-400 bg-red-50' : 'border-neutral-200 bg-white'
                }`}
              >
                <option value="">Select a surgeon…</option>
                {surgeonOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              {errors.preferredSurgeon && (
                <p data-error className="mt-1.5 text-xs text-red-500">{errors.preferredSurgeon}</p>
              )}
            </div>

            {/* Referring doctor */}
            <div>
              <label htmlFor="referringDoctor" className="block text-sm font-medium text-neutral-700">
                Referring doctor and practice{' '}
                <span className="font-normal text-neutral-400">(optional)</span>
              </label>
              <p className="mt-0.5 text-xs text-neutral-400">
                e.g. Dr John Smith, Smith Family Practice, Mosman
              </p>
              <input
                id="referringDoctor"
                name="referringDoctor"
                type="text"
                value={form.referringDoctor}
                onChange={handleChange}
                className="mt-1.5 block w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>

            {/* Brief reason (optional) */}
            <div>
              <label htmlFor="briefReason" className="block text-sm font-medium text-neutral-700">
                Brief reason for visit{' '}
                <span className="font-normal text-neutral-400">(optional)</span>
              </label>
              <p className="mt-0.5 text-xs text-neutral-400">2–3 sentences is enough</p>
              <textarea
                id="briefReason"
                name="briefReason"
                rows={3}
                value={form.briefReason}
                onChange={handleChange}
                className="mt-1.5 block w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>

            {/* Server error */}
            {serverError && (
              <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                {serverError}
              </div>
            )}

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={submitting}
                className="myent-btn-primary w-full justify-center disabled:opacity-60"
              >
                {submitting ? 'Sending request…' : 'Send appointment request'}
              </button>
              <p className="mt-3 text-center text-xs text-neutral-400">
                Our reception team will contact you by SMS within one business day.
              </p>
            </div>

          </form>
        </div>
      </div>
    </section>
  )
}
