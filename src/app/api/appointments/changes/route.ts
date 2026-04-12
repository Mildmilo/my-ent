import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

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

function getPatientSurname(fullName: string): string {
  const nameParts = fullName.trim().split(/\s+/)
  return nameParts[nameParts.length - 1] || 'Unknown'
}

function getActionLabel(action: AppointmentChangePayload['preferredAction']): string {
  return action === 'cancel' ? 'Cancel my appointment' : 'Change my appointment'
}

function hasValidPayload(payload: AppointmentChangePayload): boolean {
  return Boolean(
    payload.patientFullName.trim() &&
      payload.dateOfBirth &&
      payload.currentAppointmentDate &&
      payload.surgeonName.trim() &&
      (payload.preferredAction === 'change' || payload.preferredAction === 'cancel') &&
      (payload.preferredContactMethod === 'phone' || payload.preferredContactMethod === 'email') &&
      payload.phoneNumber.trim() &&
      payload.emailAddress.trim(),
  )
}

function buildEmail(payload: AppointmentChangePayload): { subject: string; body: string } {
  const surname = getPatientSurname(payload.patientFullName)
  const actionLabel = getActionLabel(payload.preferredAction)

  const subject = `APPOINTMENT CHANGE OR CANCELLATION — ${surname} — ${actionLabel}`

  const body = [
    'APPOINTMENT CHANGE OR CANCELLATION REQUEST',
    '',
    'PATIENT DETAILS',
    `Patient full name: ${payload.patientFullName}`,
    `Date of birth: ${payload.dateOfBirth}`,
    `Current appointment date: ${payload.currentAppointmentDate}`,
    `Name of surgeon: ${payload.surgeonName}`,
    '',
    'REQUEST DETAILS',
    `Preferred action: ${actionLabel}`,
    `Reason or notes: ${payload.reasonOrNotes || 'None provided'}`,
    `Preferred contact method for confirmation: ${payload.preferredContactMethod}`,
    `Phone number: ${payload.phoneNumber}`,
    `Email address: ${payload.emailAddress}`,
  ].join('\n')

  return { subject, body }
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  const resendApiKey = process.env.RESEND_API_KEY

  if (!resendApiKey) {
    return NextResponse.json({ error: 'Email service is not configured' }, { status: 500 })
  }

  let payload: AppointmentChangePayload

  try {
    payload = (await request.json()) as AppointmentChangePayload
  } catch {
    return NextResponse.json({ error: 'Invalid request payload' }, { status: 400 })
  }

  if (!hasValidPayload(payload)) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const { subject, body } = buildEmail(payload)

  const resend = new Resend(resendApiKey)

  try {
    await resend.emails.send({
      from: 'noreply@my-ent.com.au',
      to: 'contact@my-ent.com.au',
      replyTo: payload.emailAddress,
      subject,
      text: body,
    })
  } catch {
    return NextResponse.json({ error: 'Failed to send request email' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
