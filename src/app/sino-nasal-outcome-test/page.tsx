'use client'

import { useState, useEffect } from 'react'

// ── SNOT-22 domains ───────────────────────────────────────────────────────
const SNOT22_DOMAINS = [
  {
    id: 'rhinologic',
    name: 'Rhinologic symptoms',
    intro: 'How much have the following nose and sinus symptoms affected you over the past two weeks?',
    color: 'teal',
    items: [
      { label: 'Need to blow nose', description: 'How often do you feel the need to blow your nose?' },
      { label: 'Nasal blockage', description: 'How blocked or congested does your nose feel?' },
      { label: 'Sneezing', description: 'How much does sneezing affect you?' },
      { label: 'Runny nose', description: 'How much does a runny or dripping nose bother you?' },
      { label: 'Cough', description: 'How much does coughing affect you?' },
      { label: 'Post-nasal discharge', description: 'Mucus dripping down the back of your throat — how much does this bother you?' },
      { label: 'Thick nasal discharge', description: 'Thick or discoloured mucus from your nose — how much does this affect you?' },
      { label: 'Decreased sense of smell and taste', description: 'How much has your sense of smell or taste been reduced or lost?' },
    ],
  },
  {
    id: 'ear-facial',
    name: 'Ear and facial symptoms',
    intro: 'How much have the following ear and facial symptoms affected you over the past two weeks?',
    color: 'blue',
    items: [
      { label: 'Facial pressure/pain', description: 'Pain, pressure, or heaviness across your cheeks, forehead, or around your eyes.' },
      { label: 'Ear fullness', description: 'A blocked, full, or muffled feeling in your ears.' },
      { label: 'Dizziness', description: 'How much does dizziness or feeling off-balance affect you?' },
      { label: 'Ear pain', description: 'How much does pain or discomfort in your ears affect you?' },
    ],
  },
  {
    id: 'function',
    name: 'Sleep and function',
    intro: 'How much have the following affected your sleep and daily functioning over the past two weeks?',
    color: 'indigo',
    items: [
      { label: 'Difficulty falling asleep', description: 'How much do your symptoms make it hard to fall asleep?' },
      { label: 'Wake up at night', description: 'How much do your symptoms wake you during the night?' },
      { label: 'Lack of a good night\'s sleep', description: 'Overall, how much do your symptoms stop you getting a good night\'s sleep?' },
      { label: 'Wake up tired', description: 'How often do you wake feeling unrefreshed or tired because of your symptoms?' },
      { label: 'Fatigue', description: 'How much does tiredness or low energy — related to your symptoms — affect your day?' },
      { label: 'Reduced productivity', description: 'How much do your symptoms get in the way of what you need to get done?' },
      { label: 'Reduced concentration', description: 'How much do your symptoms affect your ability to focus or concentrate?' },
      { label: 'Frustrated/restless/irritable', description: 'How much do your symptoms make you feel frustrated, restless, or irritable?' },
    ],
  },
  {
    id: 'emotion',
    name: 'Emotional impact',
    intro: 'Finally, how much have your symptoms affected you emotionally over the past two weeks?',
    color: 'purple',
    items: [
      { label: 'Sad', description: 'How much do your symptoms make you feel low or sad?' },
      { label: 'Embarrassed', description: 'How much do your symptoms cause you embarrassment in social situations?' },
    ],
  },
]

const SNOT22_SCALE = [
  { value: 0, label: 'No problem' },
  { value: 1, label: 'Very mild' },
  { value: 2, label: 'Mild/slight' },
  { value: 3, label: 'Moderate' },
  { value: 4, label: 'Severe' },
  { value: 5, label: 'As bad as it can be' },
]

// ── TNSS ─────────────────────────────────────────────────────────────────
const TNSS_ITEMS = [
  { label: 'Nasal congestion', description: 'How blocked or stuffy does your nose feel?' },
  { label: 'Runny nose (rhinorrhoea)', description: 'How much does a runny or dripping nose bother you?' },
  { label: 'Sneezing', description: 'How much does sneezing affect you day to day?' },
  { label: 'Nasal itching', description: 'How much does itching inside your nose bother you?' },
]

const TNSS_SCALE = [
  { value: 0, label: 'None', description: 'No symptoms' },
  { value: 1, label: 'Mild', description: 'Present but easy to tolerate' },
  { value: 2, label: 'Moderate', description: 'Bothersome but tolerable' },
  { value: 3, label: 'Severe', description: 'Hard to tolerate, affects daily life' },
]

// ── NOSE ─────────────────────────────────────────────────────────────────
const NOSE_ITEMS = [
  { label: 'Nasal congestion or stuffiness', description: 'Overall stuffiness or congestion in your nose' },
  { label: 'Nasal blockage or obstruction', description: 'Feeling that one or both sides of your nose are blocked' },
  { label: 'Trouble breathing through my nose', description: 'Difficulty getting air through your nose during normal breathing' },
  { label: 'Trouble sleeping', description: 'Difficulty sleeping because you can\'t breathe easily through your nose' },
  { label: 'Unable to get enough air through my nose during exertion', description: 'Feeling short of breath through your nose when exercising or being active' },
]

const NOSE_SCALE = [
  { value: 0, label: 'Not a problem' },
  { value: 1, label: 'Very mild' },
  { value: 2, label: 'Moderate' },
  { value: 3, label: 'Fairly bad' },
  { value: 4, label: 'Severe' },
]

// ── Types ─────────────────────────────────────────────────────────────────
type Stage =
  | 'intro' | 'patient'
  | 'snot-rhinologic' | 'snot-rhinologic-done'
  | 'snot-ear-facial' | 'snot-ear-facial-done'
  | 'snot-function' | 'snot-function-done'
  | 'snot-emotion' | 'snot-top5'
  | 'snot-done'
  | 'tnss' | 'tnss-done'
  | 'nose' | 'submitting' | 'done'

// ── Animated tick ─────────────────────────────────────────────────────────
function AnimatedTick({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizes = { sm: 'h-14 w-14', md: 'h-20 w-20', lg: 'h-24 w-24' }
  const iconSizes = { sm: 'h-7 w-7', md: 'h-10 w-10', lg: 'h-12 w-12' }
  return (
    <div className={`mx-auto flex items-center justify-center rounded-full bg-teal-50 border-2 border-teal-200 ${sizes[size]}`}>
      <svg className={`text-teal-400 ${iconSizes[size]}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"
        style={{ animation: 'tick-in 0.4s ease-out forwards' }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
      </svg>
    </div>
  )
}

export default function SinoNasalOutcomeTest() {
  const [stage, setStage] = useState<Stage>('intro')

  // Patient
  const [patientName, setPatientName] = useState('')
  const [dob, setDob] = useState('')
  const [surgeon, setSurgeon] = useState('')
  const [patientErrors, setPatientErrors] = useState<Record<string, string>>({})

  // SNOT-22 scores — flat array of 22
  const [snot22, setSnot22] = useState<number[]>(Array(22).fill(-1))

  // Top 5 — array of item labels in rank order (index 0 = rank 1)
  const [top5, setTop5] = useState<string[]>([])

  // TNSS
  const [tnss, setTnss] = useState<number[]>(Array(4).fill(-1))

  // NOSE
  const [nose, setNose] = useState<number[]>(Array(5).fill(-1))

  const [serverError, setServerError] = useState<string | null>(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [stage])

  // ── Scoring ──────────────────────────────────────────────────────────────
  const snot22Total = snot22.reduce((a, b) => a + (b >= 0 ? b : 0), 0)
  const tnssTotal = tnss.reduce((a, b) => a + (b >= 0 ? b : 0), 0)
  const noseRaw = nose.reduce((a, b) => a + (b >= 0 ? b : 0), 0)
  const noseTotal = noseRaw * 5

  // Domain scores
  const domainScores = {
    rhinologic: snot22.slice(0, 8).reduce((a, b) => a + (b >= 0 ? b : 0), 0),
    earFacial: snot22.slice(8, 12).reduce((a, b) => a + (b >= 0 ? b : 0), 0),
    function: snot22.slice(12, 20).reduce((a, b) => a + (b >= 0 ? b : 0), 0),
    emotion: snot22.slice(20, 22).reduce((a, b) => a + (b >= 0 ? b : 0), 0),
  }

  // ── Helpers ──────────────────────────────────────────────────────────────
  function validatePatient() {
    const errs: Record<string, string> = {}
    if (!patientName.trim()) errs.name = 'Please enter your full name.'
    if (!dob) errs.dob = 'Please enter your date of birth.'
    if (!surgeon) errs.surgeon = 'Please select your surgeon.'
    setPatientErrors(errs)
    return Object.keys(errs).length === 0
  }

  function getDomainItems(domainId: string) {
    return SNOT22_DOMAINS.find(d => d.id === domainId)?.items ?? []
  }

  function getDomainOffset(domainId: string) {
    let offset = 0
    for (const d of SNOT22_DOMAINS) {
      if (d.id === domainId) return offset
      offset += d.items.length
    }
    return 0
  }

  function isDomainComplete(domainId: string) {
    const items = getDomainItems(domainId)
    const offset = getDomainOffset(domainId)
    return items.every((_, i) => snot22[offset + i] >= 0)
  }

  function setSnot22Item(domainId: string, itemIndex: number, value: number) {
    const offset = getDomainOffset(domainId)
    const updated = [...snot22]
    updated[offset + itemIndex] = value
    setSnot22(updated)
  }

  function getSnot22Item(domainId: string, itemIndex: number) {
    const offset = getDomainOffset(domainId)
    return snot22[offset + itemIndex]
  }

  function toggleTop5(label: string) {
    if (top5.includes(label)) {
      setTop5(top5.filter(l => l !== label))
    } else if (top5.length < 5) {
      setTop5([...top5, label])
    }
  }

  async function handleSubmit() {
    setStage('submitting')
    setServerError(null)
    try {
      const response = await fetch('/api/sino-nasal-outcome-test', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          patientName, dob, surgeon,
          snot22, snot22Top5: top5,
          snot22Total, domainScores,
          tnss, tnssTotal,
          nose, noseTotal,
        }),
      })
      if (!response.ok) throw new Error()
      setStage('done')
    } catch {
      setServerError('Something went wrong. Please call us on 02 9247 1762.')
      setStage('nose')
    }
  }

  // ── Progress ─────────────────────────────────────────────────────────────
  const progressStages = ['patient', 'snot-rhinologic', 'snot-ear-facial', 'snot-function', 'snot-emotion', 'snot-top5', 'tnss', 'nose']
  const progressLabels = ['Details', 'Rhinologic', 'Ear & facial', 'Function', 'Emotion', 'Top 5', 'Nasal score', 'Obstruction']
  const progressIndex = progressStages.indexOf(stage)

  // ── Domain screen renderer ────────────────────────────────────────────────
  function renderDomain(domainId: string, _nextStage: Stage, doneStage: Stage) {
    const domain = SNOT22_DOMAINS.find(d => d.id === domainId)!
    const complete = isDomainComplete(domainId)
    const answered = domain.items.filter((_, i) => getSnot22Item(domainId, i) >= 0).length

    return (
      <div className="space-y-4 fade-up">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-500">
            SNOT-22 · {domain.name}
          </p>
          <h2 className="mt-1 font-serif text-2xl text-neutral-800">{domain.name}</h2>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600">{domain.intro}</p>
          <p className="mt-1 text-xs text-neutral-400">
            Rate each from 0 (no problem) to 5 (as bad as it can be).
          </p>
        </div>

        <div className="space-y-3">
          {domain.items.map((item, i) => {
            const val = getSnot22Item(domainId, i)
            return (
              <div key={i} className="rounded-lg border border-neutral-200 bg-white p-4">
                <p className="text-sm font-semibold text-neutral-800">{item.label}</p>
                <p className="mt-0.5 text-xs text-neutral-400">{item.description}</p>
                <div className="mt-3 grid grid-cols-3 gap-1.5 sm:grid-cols-6">
                  {SNOT22_SCALE.map((s) => (
                    <label
                      key={s.value}
                      className={`flex cursor-pointer flex-col items-center rounded-lg border p-2 text-center transition-all ${
                        val === s.value
                          ? 'border-teal-400 bg-teal-50 text-teal-700 shadow-sm'
                          : 'border-neutral-200 text-neutral-500 hover:border-teal-200'
                      }`}
                    >
                      <input
                        type="radio"
                        name={`${domainId}-${i}`}
                        value={s.value}
                        checked={val === s.value}
                        onChange={() => setSnot22Item(domainId, i, s.value)}
                        className="sr-only"
                      />
                      <span className="text-base font-bold">{s.value}</span>
                      <span className="mt-0.5 text-xs leading-tight">{s.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="rounded-lg bg-neutral-100 px-4 py-2.5 text-xs text-neutral-500">
          {answered} of {domain.items.length} answered
          {complete && <span className="ml-2 text-teal-600 font-medium">✓ Section complete</span>}
        </div>

        {!complete && (
          <p className="text-xs text-amber-600">Please answer all questions to continue.</p>
        )}

        <button
          onClick={() => { if (complete) setStage(doneStage) }}
          disabled={!complete}
          className="myent-btn-primary w-full justify-center disabled:opacity-40"
        >
          Continue →
        </button>
      </div>
    )
  }

  // ── Section complete screen ───────────────────────────────────────────────
  function renderSectionDone(
    title: string,
    subtitle: string,
    nextLabel: string,
    nextStage: Stage
  ) {
    return (
      <div className="space-y-6 text-center py-8">
        <AnimatedTick size="md" />
        <div className="fade-up">
          <h2 className="font-serif text-2xl text-neutral-800">{title}</h2>
          <p className="mt-3 text-base text-neutral-600">{subtitle}</p>
        </div>
        <button
          onClick={() => setStage(nextStage)}
          className="myent-btn-primary mx-auto justify-center fade-up-2"
        >
          {nextLabel}
        </button>
      </div>
    )
  }

  // ── RENDER ────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-neutral-50">
      <style>{`
        @keyframes tick-in {
          0% { transform: scale(0); opacity: 0; }
          60% { transform: scale(1.2); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes fade-up {
          0% { transform: translateY(10px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .fade-up { animation: fade-up 0.4s ease-out both; }
        .fade-up-2 { animation: fade-up 0.4s ease-out 0.15s both; }
        .fade-up-3 { animation: fade-up 0.4s ease-out 0.3s both; }
        .fade-up-4 { animation: fade-up 0.4s ease-out 0.45s both; }
        @keyframes pop-in {
          0% { transform: scale(0.85); opacity: 0; }
          70% { transform: scale(1.03); }
          100% { transform: scale(1); opacity: 1; }
        }
        .pop-in { animation: pop-in 0.5s ease-out both; }
      `}</style>

      {/* Sticky header + progress */}
      <div className="sticky top-0 z-10 border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-2xl px-6 py-3 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-teal-500">My-ENT</p>
            <p className="text-sm font-medium text-neutral-700">Sino-Nasal Questionnaire</p>
          </div>
          {stage !== 'intro' && stage !== 'submitting' && stage !== 'done' && (
            <p className="text-xs text-neutral-400">~5–8 min</p>
          )}
        </div>

        {progressIndex >= 0 && stage !== 'submitting' && stage !== 'done' && (
          <div className="mx-auto max-w-2xl px-6 pb-3">
            <div className="flex gap-1">
              {progressLabels.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                    i < progressIndex ? 'bg-teal-400' :
                    i === progressIndex ? 'bg-teal-200' : 'bg-neutral-100'
                  }`}
                />
              ))}
            </div>
            <p className="mt-1 text-xs text-neutral-400">
              Step {progressIndex + 1} of {progressLabels.length} — {progressLabels[progressIndex]}
            </p>
          </div>
        )}
      </div>

      <div className="mx-auto max-w-2xl px-6 py-8">

        {/* ── INTRO ── */}
        {stage === 'intro' && (
          <div className="space-y-6 fade-up">
            <div>
              <h1 className="font-serif text-3xl text-neutral-800">Help us help you.</h1>
              <div className="mt-4 space-y-3 text-base leading-relaxed text-neutral-600">
                <p>Before your appointment, we&apos;d like to understand your symptoms properly — not just from the examination room, but from your perspective.</p>
                <p>The three short questionnaires below are used by ENT specialists in over 30 countries. They&apos;re not just forms — they&apos;re internationally validated tools that help us understand exactly how your symptoms are affecting your sleep, concentration, and daily life. Your honest answers directly shape the care plan we prepare for you.</p>
                <p className="font-medium text-neutral-700">This takes about 5–8 minutes. There are no right or wrong answers — just tell us how things really are for you.</p>
              </div>
            </div>

            <div className="rounded-xl border border-neutral-200 bg-white p-5 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">What you&apos;ll complete</p>
              {[
                { name: 'SNOT-22', desc: 'How your nose and sinus symptoms affect your quality of life — 22 questions across 4 areas' },
                { name: 'Total Nasal Symptom Score', desc: '4 questions about your main nasal symptoms' },
                { name: 'NOSE Score', desc: '5 questions about nasal obstruction and breathing' },
              ].map((q, i) => (
                <div key={i} className="flex items-start gap-3 border-t border-neutral-100 pt-2 first:border-0 first:pt-0">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-50 text-xs font-bold text-teal-600">{i + 1}</span>
                  <div>
                    <p className="text-sm font-semibold text-neutral-800">{q.name}</p>
                    <p className="text-xs text-neutral-500">{q.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button onClick={() => setStage('patient')} className="myent-btn-primary w-full justify-center text-base py-4">
              Begin →
            </button>
            <p className="text-center text-xs text-neutral-400">Your responses are sent securely to the My-ENT team.</p>
          </div>
        )}

        {/* ── PATIENT DETAILS ── */}
        {stage === 'patient' && (
          <div className="space-y-5 fade-up">
            <div>
              <h2 className="font-serif text-2xl text-neutral-800">Your details</h2>
              <p className="mt-1 text-sm text-neutral-500">So we can match your responses to your appointment.</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700">Full name <span className="text-red-500">*</span></label>
              <input type="text" value={patientName} onChange={e => setPatientName(e.target.value)}
                placeholder="As it appears on your Medicare card"
                className={`mt-1.5 block w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 ${patientErrors.name ? 'border-red-400 bg-red-50' : 'border-neutral-200 bg-white'}`} />
              {patientErrors.name && <p className="mt-1 text-xs text-red-500">{patientErrors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700">Date of birth <span className="text-red-500">*</span></label>
              <input type="date" value={dob} onChange={e => setDob(e.target.value)}
                max={new Date().toISOString().split('T')[0]}
                className={`mt-1.5 block w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 ${patientErrors.dob ? 'border-red-400 bg-red-50' : 'border-neutral-200 bg-white'}`} />
              {patientErrors.dob && <p className="mt-1 text-xs text-red-500">{patientErrors.dob}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700">Your My-ENT surgeon <span className="text-red-500">*</span></label>
              <select value={surgeon} onChange={e => setSurgeon(e.target.value)}
                className={`mt-1.5 block w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 ${patientErrors.surgeon ? 'border-red-400 bg-red-50' : 'border-neutral-200 bg-white'}`}>
                <option value="">Select your surgeon…</option>
                <option>Dr Catherine Banks</option>
                <option>Dr Lyndon Chan</option>
                <option>Dr June Huang</option>
                <option>Dr Rithvik Reddy</option>
              </select>
              {patientErrors.surgeon && <p className="mt-1 text-xs text-red-500">{patientErrors.surgeon}</p>}
            </div>

            <button onClick={() => { if (validatePatient()) setStage('snot-rhinologic') }} className="myent-btn-primary w-full justify-center">
              Start questionnaire →
            </button>
          </div>
        )}

        {/* ── SNOT-22 DOMAINS ── */}
        {stage === 'snot-rhinologic' && renderDomain('rhinologic', 'snot-rhinologic-done', 'snot-rhinologic-done')}
        {stage === 'snot-rhinologic-done' && renderSectionDone(
          'Rhinologic section complete.',
          'Three more short sections to go.',
          'Continue to ear & facial →',
          'snot-ear-facial'
        )}

        {stage === 'snot-ear-facial' && renderDomain('ear-facial', 'snot-ear-facial-done', 'snot-ear-facial-done')}
        {stage === 'snot-ear-facial-done' && renderSectionDone(
          'Ear & facial section complete.',
          'You\'re doing great — halfway through SNOT-22.',
          'Continue to sleep & function →',
          'snot-function'
        )}

        {stage === 'snot-function' && renderDomain('function', 'snot-function-done', 'snot-function-done')}
        {stage === 'snot-function-done' && renderSectionDone(
          'Almost there.',
          'Just the final emotional impact section — 2 quick questions.',
          'Last section →',
          'snot-emotion'
        )}

        {stage === 'snot-emotion' && renderDomain('emotion', 'snot-top5', 'snot-top5')}

        {/* ── TOP 5 CHIP SELECTOR ── */}
        {stage === 'snot-top5' && (
          <div className="space-y-5 fade-up">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-teal-500">SNOT-22 · Final step</p>
              <h2 className="mt-1 font-serif text-2xl text-neutral-800">Your five most important symptoms</h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                From the 22 symptoms you just rated, tap the <strong>five that bother you the most</strong> — in order, starting with the most severe. This helps your surgeon understand your priorities.
              </p>
              <p className="mt-1 text-sm text-neutral-500">
                Tap a symptom to select it. Tap again to remove it. First tap = most severe (rank 1).
              </p>
            </div>

            {top5.length > 0 && (
              <div className="rounded-xl border border-teal-100 bg-teal-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-teal-600 mb-2">Your selection</p>
                <div className="space-y-1.5">
                  {top5.map((label, i) => (
                    <div key={label} className="flex items-center gap-2">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-400 text-xs font-bold text-white">{i + 1}</span>
                      <span className="text-sm text-teal-800">{label}</span>
                      <button onClick={() => toggleTop5(label)} className="ml-auto text-xs text-teal-500 hover:text-teal-700">remove</button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {SNOT22_DOMAINS.map(domain => (
              <div key={domain.id}>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-neutral-400">{domain.name}</p>
                <div className="flex flex-wrap gap-2">
                  {domain.items.map(item => {
                    const rank = top5.indexOf(item.label)
                    const selected = rank >= 0
                    const disabled = !selected && top5.length >= 5
                    return (
                      <button
                        key={item.label}
                        onClick={() => toggleTop5(item.label)}
                        disabled={disabled}
                        className={`relative rounded-full border px-3 py-1.5 text-sm transition-all ${
                          selected
                            ? 'border-teal-400 bg-teal-400 text-white shadow-sm'
                            : disabled
                            ? 'border-neutral-100 bg-neutral-50 text-neutral-300 cursor-not-allowed'
                            : 'border-neutral-200 bg-white text-neutral-700 hover:border-teal-300'
                        }`}
                      >
                        {selected && (
                          <span className="mr-1.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-white text-xs font-bold text-teal-600">
                            {rank + 1}
                          </span>
                        )}
                        {item.label}
                      </button>
                    )
                  })}
                </div>
              </div>
            ))}

            <p className="text-xs text-neutral-400">
              {top5.length} of 5 selected
              {top5.length === 5 && <span className="ml-1 text-teal-600 font-medium">✓ All 5 selected</span>}
            </p>

            <button
              onClick={() => setStage('snot-done')}
              className="myent-btn-primary w-full justify-center"
            >
              {top5.length === 0 ? 'Skip and continue →' : 'Continue →'}
            </button>
          </div>
        )}

        {/* ── SNOT-22 DONE ── */}
        {stage === 'snot-done' && renderSectionDone(
          'SNOT-22 complete.',
          'Two short sections left — just 9 more questions total.',
          'Continue →',
          'tnss'
        )}

        {/* ── TNSS ── */}
        {stage === 'tnss' && (
          <div className="space-y-4 fade-up">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-teal-500">Section 2 of 3</p>
              <h2 className="mt-1 font-serif text-2xl text-neutral-800">Total Nasal Symptom Score</h2>
              <p className="mt-1 text-sm text-neutral-500">4 questions — used worldwide for allergy-related nasal symptoms</p>
              <p className="mt-2 text-sm text-neutral-600">Over the <strong>past two weeks</strong>, how severe have these nasal symptoms been?</p>
            </div>

            <div className="space-y-3">
              {TNSS_ITEMS.map((item, i) => (
                <div key={i} className="rounded-lg border border-neutral-200 bg-white p-4">
                  <p className="text-sm font-semibold text-neutral-800">{item.label}</p>
                  <p className="mt-0.5 text-xs text-neutral-400">{item.description}</p>
                  <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {TNSS_SCALE.map(s => (
                      <label key={s.value} className={`flex cursor-pointer flex-col items-center rounded-lg border p-3 text-center transition-all ${
                        tnss[i] === s.value ? 'border-teal-400 bg-teal-50 text-teal-700 shadow-sm' : 'border-neutral-200 text-neutral-500 hover:border-teal-200'
                      }`}>
                        <input type="radio" name={`tnss-${i}`} value={s.value} checked={tnss[i] === s.value}
                          onChange={() => { const u = [...tnss]; u[i] = s.value; setTnss(u) }} className="sr-only" />
                        <span className="text-base font-bold">{s.value}</span>
                        <span className="mt-0.5 text-xs font-medium">{s.label}</span>
                        <span className="mt-0.5 text-xs text-neutral-400 leading-tight">{s.description}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-lg bg-neutral-100 px-4 py-2.5 text-xs text-neutral-500">
              {tnss.filter(v => v >= 0).length} of 4 answered
              {tnss.every(v => v >= 0) && <span className="ml-2 text-teal-600 font-medium">✓ Complete</span>}
            </div>

            <button onClick={() => { if (tnss.every(v => v >= 0)) setStage('tnss-done') }}
              disabled={!tnss.every(v => v >= 0)} className="myent-btn-primary w-full justify-center disabled:opacity-40">
              Continue →
            </button>
          </div>
        )}

        {stage === 'tnss-done' && renderSectionDone(
          'Almost done.',
          'Just 5 final questions about nasal obstruction.',
          'Last section →',
          'nose'
        )}

        {/* ── NOSE ── */}
        {stage === 'nose' && (
          <div className="space-y-4 fade-up">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-teal-500">Section 3 of 3 — final section</p>
              <h2 className="mt-1 font-serif text-2xl text-neutral-800">Nasal Obstruction Score</h2>
              <p className="mt-1 text-sm text-neutral-500">5 questions — the gold standard for assessing nasal blockage</p>
              <p className="mt-2 text-sm text-neutral-600">Over the <strong>past month</strong>, how much of a problem were the following?</p>
            </div>

            <div className="space-y-3">
              {NOSE_ITEMS.map((item, i) => (
                <div key={i} className="rounded-lg border border-neutral-200 bg-white p-4">
                  <p className="text-sm font-semibold text-neutral-800">{item.label}</p>
                  <p className="mt-0.5 text-xs text-neutral-400">{item.description}</p>
                  <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-5">
                    {NOSE_SCALE.map(s => (
                      <label key={s.value} className={`flex cursor-pointer flex-col items-center rounded-lg border p-3 text-center transition-all ${
                        nose[i] === s.value ? 'border-teal-400 bg-teal-50 text-teal-700 shadow-sm' : 'border-neutral-200 text-neutral-500 hover:border-teal-200'
                      }`}>
                        <input type="radio" name={`nose-${i}`} value={s.value} checked={nose[i] === s.value}
                          onChange={() => { const u = [...nose]; u[i] = s.value; setNose(u) }} className="sr-only" />
                        <span className="text-base font-bold">{s.value}</span>
                        <span className="mt-0.5 text-xs leading-tight">{s.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-lg bg-neutral-100 px-4 py-2.5 text-xs text-neutral-500">
              {nose.filter(v => v >= 0).length} of 5 answered
              {nose.every(v => v >= 0) && <span className="ml-2 text-teal-600 font-medium">✓ Ready to submit</span>}
            </div>

            {serverError && (
              <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">{serverError}</div>
            )}

            <button onClick={() => { if (nose.every(v => v >= 0)) handleSubmit() }}
              disabled={!nose.every(v => v >= 0)} className="myent-btn-primary w-full justify-center disabled:opacity-40">
              Submit questionnaire
            </button>
          </div>
        )}

        {/* ── SUBMITTING ── */}
        {stage === 'submitting' && (
          <div className="flex flex-col items-center py-20 text-center">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-teal-100 border-t-teal-400" />
            <p className="mt-4 text-sm text-neutral-500">Sending your responses securely…</p>
          </div>
        )}

        {/* ── DONE ── */}
        {stage === 'done' && (
          <div className="py-8 text-center pop-in">
            <AnimatedTick size="lg" />
            <h2 className="mt-6 font-serif text-3xl text-neutral-800 fade-up">All done. Thank you.</h2>
            <p className="mt-4 mx-auto max-w-md text-base leading-relaxed text-neutral-600 fade-up-2">
              Your responses have been received by the My-ENT team. Your surgeon will review your questionnaire before your appointment — so you won&apos;t need to repeat everything from scratch.
            </p>
            <p className="mt-4 text-sm text-neutral-400 fade-up-3">
              Questions before your appointment? Call us on{' '}
              <a href="tel:0292471762" className="text-teal-500 hover:text-teal-600 font-medium">02 9247 1762</a>.
            </p>
            <div className="mt-8 mx-auto max-w-sm rounded-xl border border-teal-100 bg-teal-50 px-6 py-4 fade-up-4">
              <p className="text-sm text-teal-700">
                <span className="font-semibold">Your next step:</span> Our reception team will be in touch to confirm your appointment time.
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
