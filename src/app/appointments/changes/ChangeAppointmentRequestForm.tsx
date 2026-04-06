'use client'

import { FormEvent, useMemo, useState } from 'react'

interface AppointmentChangeFormState {
  patientFullName: string
  dateOfBirth: string
  currentAppointmentDate: string
  surgeonName: string
  preferredAction: 'change' | 'cancel' | ''
  reasonOrNotes: string
  preferredContactMethod: 'phone' | 'email' | ''
  phoneNumber: string
  emailAddress: string
}

interface AppointmentChangePayload {
  patientFullName: string
  dateOfBirth: string
  currentAppointmentDate: string
  surgeonName: string
  preferredAction: 'change' | 'cancel'
  reasonOrNotes: string
  preferredContactMethod: 'phone' | 'email'
  phoneNumber: string
  emailAddress: string
}

const SURGEON_OPTIONS = [
  'Dr Catherine Banks',
  'Dr Lyndon Chan',
  'Dr June Huang',
  'Dr Rithvik Reddy',
  'Justine Oates',
] as const

const EMPTY_FORM: AppointmentChangeFormState = {
  patientFullName: '',
  dateOfBirth: '',
  currentAppointmentDate: '',
  surgeonName: '',
  preferredAction: '',
  reasonOrNotes: '',
  preferredContactMethod: '',
  phoneNumber: '',
  emailAddress: '',
}

export function ChangeAppointmentRequestForm() {
  const [formState, setFormState] = useState<AppointmentChangeFormState>(EMPTY_FORM)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionError, setSubmissionError] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const isFormValid = useMemo(() => {
    return Boolean(
      formState.patientFullName.trim() &&
        formState.dateOfBirth &&
        formState.currentAppointmentDate &&
        formState.surgeonName &&
        formState.preferredAction &&
        formState.preferredContactMethod &&
        formState.phoneNumber.trim() &&
        formState.emailAddress.trim(),
    )
  }, [formState])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!isFormValid || isSubmitting) {
      return
    }

    if (formState.preferredAction !== 'change' && formState.preferredAction !== 'cancel') {
      return
    }

    if (
      formState.preferredContactMethod !== 'phone' &&
      formState.preferredContactMethod !== 'email'
    ) {
      return
    }

    setIsSubmitting(true)
    setSubmissionError('')

    const payload: AppointmentChangePayload = {
      patientFullName: formState.patientFullName.trim(),
      dateOfBirth: formState.dateOfBirth,
      currentAppointmentDate: formState.currentAppointmentDate,
      surgeonName: formState.surgeonName,
      preferredAction: formState.preferredAction,
      reasonOrNotes: formState.reasonOrNotes.trim(),
      preferredContactMethod: formState.preferredContactMethod,
      phoneNumber: formState.phoneNumber.trim(),
      emailAddress: formState.emailAddress.trim(),
    }

    try {
      const response = await fetch('/api/appointments/changes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error('Request failed')
      }

      setIsSubmitted(true)
      setFormState(EMPTY_FORM)
    } catch {
      setSubmissionError(
        'We could not send your request right now. Please call reception on 02 9247 1762.',
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="rounded-xl border border-teal-200 bg-teal-50 p-6">
        <p className="text-base leading-relaxed text-neutral-700">
          Your request has been received. Reception will be in touch within one business day.
        </p>
      </div>
    )
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-neutral-700" htmlFor="patientFullName">
            Patient full name <span aria-hidden="true">*</span>
          </label>
          <input
            id="patientFullName"
            name="patientFullName"
            type="text"
            required
            value={formState.patientFullName}
            onChange={(event) => setFormState((current) => ({ ...current, patientFullName: event.target.value }))}
            className="min-h-[44px] w-full rounded-lg border border-neutral-200 bg-white px-4 py-2 text-base text-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-400"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-neutral-700" htmlFor="dateOfBirth">
            Date of birth <span aria-hidden="true">*</span>
          </label>
          <input
            id="dateOfBirth"
            name="dateOfBirth"
            type="date"
            required
            value={formState.dateOfBirth}
            onChange={(event) => setFormState((current) => ({ ...current, dateOfBirth: event.target.value }))}
            className="min-h-[44px] w-full rounded-lg border border-neutral-200 bg-white px-4 py-2 text-base text-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-400"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-neutral-700" htmlFor="currentAppointmentDate">
            Current appointment date <span aria-hidden="true">*</span>
          </label>
          <input
            id="currentAppointmentDate"
            name="currentAppointmentDate"
            type="date"
            required
            value={formState.currentAppointmentDate}
            onChange={(event) =>
              setFormState((current) => ({ ...current, currentAppointmentDate: event.target.value }))
            }
            className="min-h-[44px] w-full rounded-lg border border-neutral-200 bg-white px-4 py-2 text-base text-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-400"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-neutral-700" htmlFor="surgeonName">
            Name of surgeon <span aria-hidden="true">*</span>
          </label>
          <select
            id="surgeonName"
            name="surgeonName"
            required
            value={formState.surgeonName}
            onChange={(event) => setFormState((current) => ({ ...current, surgeonName: event.target.value }))}
            className="min-h-[44px] w-full rounded-lg border border-neutral-200 bg-white px-4 py-2 text-base text-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-400"
          >
            <option value="">Select a surgeon</option>
            {SURGEON_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <fieldset className="rounded-xl border border-neutral-200 p-4">
        <legend className="px-1 text-sm font-medium text-neutral-700">
          Preferred action <span aria-hidden="true">*</span>
        </legend>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:gap-8">
          <label className="inline-flex min-h-[44px] items-center gap-2 text-base text-neutral-700">
            <input
              type="radio"
              name="preferredAction"
              value="change"
              required
              checked={formState.preferredAction === 'change'}
              onChange={() => setFormState((current) => ({ ...current, preferredAction: 'change' }))}
              className="h-4 w-4 border-neutral-300 text-teal-400 focus:ring-teal-400"
            />
            Change my appointment
          </label>
          <label className="inline-flex min-h-[44px] items-center gap-2 text-base text-neutral-700">
            <input
              type="radio"
              name="preferredAction"
              value="cancel"
              checked={formState.preferredAction === 'cancel'}
              onChange={() => setFormState((current) => ({ ...current, preferredAction: 'cancel' }))}
              className="h-4 w-4 border-neutral-300 text-teal-400 focus:ring-teal-400"
            />
            Cancel my appointment
          </label>
        </div>
      </fieldset>

      <div>
        <label className="mb-2 block text-sm font-medium text-neutral-700" htmlFor="reasonOrNotes">
          Reason or notes (optional)
        </label>
        <textarea
          id="reasonOrNotes"
          name="reasonOrNotes"
          rows={4}
          value={formState.reasonOrNotes}
          onChange={(event) => setFormState((current) => ({ ...current, reasonOrNotes: event.target.value }))}
          className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-base text-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-400"
        />
      </div>

      <fieldset className="rounded-xl border border-neutral-200 p-4">
        <legend className="px-1 text-sm font-medium text-neutral-700">
          Preferred contact method for confirmation <span aria-hidden="true">*</span>
        </legend>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:gap-8">
          <label className="inline-flex min-h-[44px] items-center gap-2 text-base text-neutral-700">
            <input
              type="radio"
              name="preferredContactMethod"
              value="phone"
              required
              checked={formState.preferredContactMethod === 'phone'}
              onChange={() => setFormState((current) => ({ ...current, preferredContactMethod: 'phone' }))}
              className="h-4 w-4 border-neutral-300 text-teal-400 focus:ring-teal-400"
            />
            Phone
          </label>
          <label className="inline-flex min-h-[44px] items-center gap-2 text-base text-neutral-700">
            <input
              type="radio"
              name="preferredContactMethod"
              value="email"
              checked={formState.preferredContactMethod === 'email'}
              onChange={() => setFormState((current) => ({ ...current, preferredContactMethod: 'email' }))}
              className="h-4 w-4 border-neutral-300 text-teal-400 focus:ring-teal-400"
            />
            Email
          </label>
        </div>
      </fieldset>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-neutral-700" htmlFor="phoneNumber">
            Phone number <span aria-hidden="true">*</span>
          </label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            required
            value={formState.phoneNumber}
            onChange={(event) => setFormState((current) => ({ ...current, phoneNumber: event.target.value }))}
            className="min-h-[44px] w-full rounded-lg border border-neutral-200 bg-white px-4 py-2 text-base text-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-400"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-neutral-700" htmlFor="emailAddress">
            Email address <span aria-hidden="true">*</span>
          </label>
          <input
            id="emailAddress"
            name="emailAddress"
            type="email"
            required
            value={formState.emailAddress}
            onChange={(event) => setFormState((current) => ({ ...current, emailAddress: event.target.value }))}
            className="min-h-[44px] w-full rounded-lg border border-neutral-200 bg-white px-4 py-2 text-base text-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-400"
          />
        </div>
      </div>

      {submissionError ? <p className="text-sm text-red-700">{submissionError}</p> : null}

      <div className="flex flex-col gap-4">
        <button className="myent-btn-primary w-fit" type="submit" disabled={!isFormValid || isSubmitting}>
          {isSubmitting ? 'Sending request...' : 'Submit request'}
        </button>
        <p className="text-sm leading-relaxed text-neutral-500">
          Please give as much notice as possible when cancelling. Late cancellations and
          non-attendance may attract a fee.
        </p>
      </div>
    </form>
  )
}
