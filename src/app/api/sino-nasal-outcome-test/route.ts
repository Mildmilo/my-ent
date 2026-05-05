import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const SNOT22_ITEMS = [
  // Rhinologic
  'Need to blow nose',
  'Nasal blockage',
  'Sneezing',
  'Runny nose',
  'Cough',
  'Post-nasal discharge',
  'Thick nasal discharge',
  'Decreased sense of smell and taste',
  // Ear and facial
  'Facial pressure/pain',
  'Ear fullness',
  'Dizziness',
  'Ear pain',
  // Function
  'Difficulty falling asleep',
  'Wake up at night',
  'Lack of a good night\'s sleep',
  'Wake up tired',
  'Fatigue',
  'Reduced productivity',
  'Reduced concentration',
  'Frustrated/restless/irritable',
  // Emotion
  'Sad',
  'Embarrassed',
]

const SNOT22_SCALE = ['No problem', 'Very mild', 'Mild/slight', 'Moderate', 'Severe', 'As bad as it can be']
const TNSS_ITEMS = ['Nasal congestion', 'Runny nose (rhinorrhoea)', 'Sneezing', 'Nasal itching']
const TNSS_SCALE = ['None (0)', 'Mild (1)', 'Moderate (2)', 'Severe (3)']
const NOSE_ITEMS = [
  'Nasal congestion or stuffiness',
  'Nasal blockage or obstruction',
  'Trouble breathing through my nose',
  'Trouble sleeping',
  'Unable to get enough air through my nose during exertion',
]
const NOSE_SCALE = ['Not a problem', 'Very mild problem', 'Moderate problem', 'Fairly bad problem', 'Severe problem']

const DOMAIN_RANGES = [
  { name: 'Rhinologic symptoms', start: 0, end: 8, max: 40 },
  { name: 'Ear and facial', start: 8, end: 12, max: 20 },
  { name: 'Sleep and function', start: 12, end: 20, max: 40 },
  { name: 'Emotion', start: 20, end: 22, max: 10 },
]

function snot22Interpretation(score: number): string {
  if (score <= 20) return 'Mild impact on quality of life'
  if (score <= 50) return 'Moderate impact on quality of life'
  return 'Severe impact on quality of life'
}

function tnssInterpretation(score: number): string {
  if (score <= 3) return 'Mild'
  if (score <= 7) return 'Moderate'
  return 'Severe'
}

function noseInterpretation(score: number): string {
  if (score < 25) return 'Mild obstruction'
  if (score < 45) return 'Moderate obstruction'
  if (score < 65) return 'Severe obstruction — consider surgical evaluation'
  return 'Extreme obstruction — surgical evaluation indicated'
}

function buildEmailHtml(data: {
  patientName: string
  dob: string
  surgeon: string
  snot22: number[]
  snot22Top5: string[]
  snot22Total: number
  domainScores: Record<string, number>
  tnss: number[]
  tnssTotal: number
  nose: number[]
  noseTotal: number
  submittedAt: string
}): string {
  const dobFormatted = new Date(data.dob).toLocaleDateString('en-AU', {
    day: '2-digit', month: 'long', year: 'numeric',
  })

  const nosePossibleSurgery = data.noseTotal >= 45

  const domainRows = DOMAIN_RANGES.map(d => {
    const score = data.snot22.slice(d.start, d.end).reduce((a: number, b: number) => a + (b >= 0 ? b : 0), 0)
    return `<tr><td>${d.name}</td><td style="text-align:center;font-weight:bold;">${score}</td><td style="text-align:center;">${d.max}</td></tr>`
  }).join('')

  const snot22Rows = SNOT22_ITEMS.map((item, i) => {
    const domain = DOMAIN_RANGES.find(d => i >= d.start && i < d.end)
    return `<tr ${i === 8 || i === 12 || i === 20 ? 'style="border-top:2px solid #4A7C8F"' : ''}>
      <td style="padding:5px 8px;font-size:12px;color:#6b7280;">${domain?.name ?? ''}</td>
      <td style="padding:5px 8px;">${item}</td>
      <td style="padding:5px 8px;text-align:center;font-weight:bold;">${data.snot22[i] >= 0 ? data.snot22[i] : '-'}</td>
      <td style="padding:5px 8px;">${data.snot22[i] >= 0 ? SNOT22_SCALE[data.snot22[i]] : ''}</td>
    </tr>`
  }).join('')

  const tnssRows = TNSS_ITEMS.map((item, i) => `
    <tr>
      <td style="padding:5px 8px;">${item}</td>
      <td style="padding:5px 8px;text-align:center;font-weight:bold;">${data.tnss[i] >= 0 ? data.tnss[i] : '-'}</td>
      <td style="padding:5px 8px;">${data.tnss[i] >= 0 ? TNSS_SCALE[data.tnss[i]] : ''}</td>
    </tr>`).join('')

  const noseRows = NOSE_ITEMS.map((item, i) => `
    <tr>
      <td style="padding:5px 8px;">${item}</td>
      <td style="padding:5px 8px;text-align:center;font-weight:bold;">${data.nose[i] >= 0 ? data.nose[i] : '-'}</td>
      <td style="padding:5px 8px;">${data.nose[i] >= 0 ? NOSE_SCALE[data.nose[i]] : ''}</td>
    </tr>`).join('')

  return `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8">
<style>
  body { font-family: Arial, sans-serif; font-size: 14px; color: #1a1a1a; max-width: 800px; margin: 0 auto; padding: 20px; }
  h1 { font-size: 20px; color: #1E3A5F; border-bottom: 2px solid #4A7C8F; padding-bottom: 8px; }
  h2 { font-size: 15px; color: #4A7C8F; margin-top: 24px; border-bottom: 1px solid #e5e7eb; padding-bottom: 4px; }
  .header-box { background: #EAF3F6; border: 1px solid #B8D8E3; border-radius: 8px; padding: 16px; margin-bottom: 20px; }
  .score-box { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 12px 16px; margin: 10px 0; }
  .score-total { font-size: 22px; font-weight: bold; color: #1E3A5F; }
  .score-label { font-size: 11px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em; }
  .score-interp { font-size: 13px; color: #374151; margin-top: 4px; }
  .surgery-flag { background: #fef3c7; border: 1px solid #f59e0b; border-radius: 8px; padding: 12px 16px; margin: 10px 0; font-weight: bold; color: #92400e; }
  table { width: 100%; border-collapse: collapse; margin-top: 8px; font-size: 13px; }
  th { text-align: left; background: #f3f4f6; padding: 7px 8px; border: 1px solid #e5e7eb; font-weight: 600; }
  td { border: 1px solid #e5e7eb; }
  tr:nth-child(even) td { background: #f9fafb; }
  .footer { margin-top: 32px; font-size: 11px; color: #9ca3af; border-top: 1px solid #e5e7eb; padding-top: 12px; }
</style>
</head>
<body>
<h1>My-ENT — Sino-Nasal Symptom Questionnaire Results</h1>
<div class="header-box">
  <strong>Patient:</strong> ${data.patientName}<br>
  <strong>Date of birth:</strong> ${dobFormatted}<br>
  <strong>Surgeon:</strong> ${data.surgeon}<br>
  <strong>Submitted:</strong> ${data.submittedAt}
</div>

<h2>SNOT-22 — Sino-Nasal Outcome Test</h2>
<div class="score-box">
  <div class="score-label">Total score</div>
  <div class="score-total">${data.snot22Total} / 110</div>
  <div class="score-interp">Interpretation: <strong>${snot22Interpretation(data.snot22Total)}</strong></div>
</div>

<h2>SNOT-22 Domain Scores</h2>
<table>
  <tr><th>Domain</th><th style="text-align:center;">Score</th><th style="text-align:center;">Max</th></tr>
  ${domainRows}
</table>

<h2>SNOT-22 Item Detail</h2>
<table>
  <tr><th>Domain</th><th>Item</th><th style="text-align:center;">Score</th><th>Rating</th></tr>
  ${snot22Rows}
</table>

${data.snot22Top5 && data.snot22Top5.length > 0 ? `
<h2>Patient's Five Most Important Symptoms</h2>
<div class="score-box">
${data.snot22Top5.map((item: string, i: number) => `<div style="padding:3px 0;"><strong>${i + 1}.</strong> ${item}</div>`).join('')}
</div>` : ''}

<h2>Total Nasal Symptom Score (TNSS)</h2>
<div class="score-box">
  <div class="score-label">Total score</div>
  <div class="score-total">${data.tnssTotal} / 12</div>
  <div class="score-interp">Severity: <strong>${tnssInterpretation(data.tnssTotal)}</strong></div>
</div>
<table>
  <tr><th>Item</th><th style="text-align:center;">Score</th><th>Rating</th></tr>
  ${tnssRows}
</table>

<h2>NOSE — Nasal Obstruction Symptom Evaluation</h2>
<div class="score-box">
  <div class="score-label">Total score (raw ${data.nose.reduce((a: number, b: number) => a + b, 0)} × 5)</div>
  <div class="score-total">${data.noseTotal} / 100</div>
  <div class="score-interp">Interpretation: <strong>${noseInterpretation(data.noseTotal)}</strong></div>
</div>
${nosePossibleSurgery ? `<div class="surgery-flag">⚠ NOSE score ≥ 45 — possible surgical candidate. Please discuss with surgeon at consultation.</div>` : ''}
<table>
  <tr><th>Item</th><th style="text-align:center;">Score</th><th>Rating</th></tr>
  ${noseRows}
</table>

<div class="footer">
  Generated by My-ENT Sino-Nasal Questionnaire · my-ent.com.au · 02 9247 1762<br>
  Suite 303, Level 3, BMA House, 135 Macquarie Street, Sydney CBD NSW 2000
</div>
</body>
</html>`.trim()
}

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const body = await req.json()

    const {
      patientName, dob, surgeon,
      snot22, snot22Top5, snot22Total, domainScores,
      tnss, tnssTotal,
      nose, noseTotal,
    } = body

    if (!patientName || !dob || !surgeon) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const submittedAt = new Date().toLocaleString('en-AU', {
      timeZone: 'Australia/Sydney',
      day: '2-digit', month: 'long', year: 'numeric',
      hour: '2-digit', minute: '2-digit',
    })

    const html = buildEmailHtml({
      patientName, dob, surgeon,
      snot22, snot22Top5, snot22Total, domainScores,
      tnss, tnssTotal,
      nose, noseTotal,
      submittedAt,
    })

    const { error } = await resend.emails.send({
      from: 'noreply@my-ent.com.au',
      to: ['contact@my-ent.com.au', 'justineoates@my-ent.com.au'],
      subject: `SNOT-22 Results | ${patientName} | ${surgeon} | SNOT-22: ${snot22Total}/110 | NOSE: ${noseTotal}/100`,
      html,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Email delivery failed' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Sino-nasal error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
