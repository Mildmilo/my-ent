import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const conditionAreaLabels: Record<string, string> = {
  'nose-sinuses': 'Nose and sinuses → Send SNOT-22, NOSE, and Allergy questionnaire Genie link',
  'ear-hearing': 'Ear and hearing → Send otology intake Genie link',
  'throat-voice': 'Throat and voice → Send throat intake Genie link',
  'skull-base-other': 'Skull base / other → Send general intake Genie link',
}

const surgeonLabels: Record<string, string> = {
  'dr-catherine-banks': 'Dr Catherine Banks',
  'dr-lyndon-chan': 'Dr Lyndon Chan',
  'dr-june-huang': 'Dr June Huang',
  'dr-rithvik-reddy': 'Dr Rithvik Reddy',
  'no-preference': 'No preference',
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const {
      fullLegalName,
      dateOfBirth,
      mobile,
      mobileConfirm,
      email,
      patientType,
      conditionArea,
      preferredSurgeon,
      referringDoctor,
      briefReason,
    } = body

    // Basic server-side validation
    if (
      !fullLegalName ||
      !dateOfBirth ||
      !mobile ||
      !email ||
      !patientType ||
      !conditionArea ||
      !preferredSurgeon
    ) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    if (mobile.replace(/\s/g, '') !== mobileConfirm.replace(/\s/g, '')) {
      return NextResponse.json({ error: 'Mobile numbers do not match' }, { status: 400 })
    }

    const conditionLabel = conditionAreaLabels[conditionArea] ?? conditionArea
    const surgeonLabel = surgeonLabels[preferredSurgeon] ?? preferredSurgeon
    const patientTypeLabel = patientType === 'private' ? 'Private' : 'Public'
    const isBanksPatient = preferredSurgeon === 'dr-catherine-banks'

    const dobFormatted = new Date(dateOfBirth).toLocaleDateString('en-AU', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    })

    const emailBody = `
NEW APPOINTMENT REQUEST — My-ENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PATIENT DETAILS
───────────────
Full legal name:  ${fullLegalName}
Date of birth:    ${dobFormatted}
Mobile:           ${mobile}
Email:            ${email}
Patient type:     ${patientTypeLabel}
Preferred surgeon: ${surgeonLabel}${isBanksPatient ? ' ⭐ (Justine Oates has also been notified)' : ''}
${referringDoctor ? `Referring doctor: ${referringDoctor}` : ''}

CONDITION AREA & ACTION REQUIRED
──────────────────────────────────
${conditionLabel}

${briefReason ? `REASON FOR VISIT\n────────────────\n${briefReason}\n` : ''}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Action: SMS the patient on ${mobile} with the appropriate Genie registration link.
Backup: Email ${email} if SMS is undeliverable.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    `.trim()

    // Build recipient list — always reception, CC Justine for Banks patients
    const toAddresses = ['contact@my-ent.com.au']
    if (isBanksPatient) {
      toAddresses.push('justineoates@my-ent.com.au')
    }

    const { error } = await resend.emails.send({
      from: 'noreply@my-ent.com.au',
      to: toAddresses,
      replyTo: email,
      subject: `New appointment request — ${fullLegalName} (${surgeonLabel} / ${patientTypeLabel})`,
      text: emailBody,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Email delivery failed' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Appointment request error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
