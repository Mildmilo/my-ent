# Sinus and Nasal Pre-Appointment Questionnaire — Build Specification
# My-ENT · 135 Macquarie Street, Sydney
# Last updated: April 2026

---

## Purpose and scope

This specification defines the pre-appointment clinical questionnaire for patients attending My-ENT with nasal, sinus, or related conditions. The questionnaire is presented only to patients who have indicated a nose or sinus concern — it is not shown to patients presenting primarily with ear, throat, or paediatric concerns unrelated to nasal disease.

The instrument uses validated patient-reported outcome measures aligned with the EPOS 2020 framework. It is a clinical decision support tool for use by the nurse practitioner (Justine Oates) and the treating surgeon. It is not a diagnostic instrument and must not be represented as such.

Clinical decision-making authority rests with the treating surgeon and nurse practitioner at all times.

---

## AHPRA and privacy compliance

The questionnaire must comply with the following requirements before deployment.

The Privacy Policy page at /privacy-policy must reference pre-appointment clinical questionnaire data collection explicitly. The following paragraph must appear in the Privacy Policy under the section covering information collected:

"Where clinically appropriate, patients attending My-ENT for assessment of nasal, sinus, or related conditions may be invited to complete a pre-appointment clinical questionnaire. This questionnaire uses validated patient-reported outcome measures to assist the clinical team in preparing for your consultation. Responses are transmitted securely to the treating clinician and are not shared with any third party. Completion of the questionnaire is voluntary, and declining to complete it will not affect your access to care. If you have questions about how this information is used, please contact the practice manager at contact@my-ent.com.au."

No EPOS classification, severity grade, instrument score, or management recommendation is ever displayed to the patient in any form on any screen. The patient-facing completion screen contains only a confirmation message. All clinical output is generated exclusively in the structured clinician email sent to contact@my-ent.com.au.

---

## Route and access

The questionnaire is built as a standalone Next.js page at:
`src/app/appointments/sinus-assessment/page.tsx`

It is linked from:
- The appointment confirmation flow (linked in the confirmation email sent after a booking request is submitted)
- The Your First Visit page at /appointments/your-first-visit
- The condition pages for sinusitis, nasal polyps, blocked nose, hayfever-allergic-rhinitis, and post-nasal-drip (as an optional pre-appointment step)

It is not linked from the main navigation. It is accessed via a direct link provided to the patient after their appointment is confirmed.

---

## Design system

The questionnaire must match the My-ENT design system precisely.

Primary teal: #4A7C8F. Headings: Cormorant Garamond serif. Body text: DM Sans sans-serif. Background: neutral-50 (#FAFAFA). Card backgrounds: white with border-neutral-200. No heavy drop shadows. No gradient backgrounds on cards. Progress bar uses teal-400. Buttons use myent-btn-primary and myent-btn-outline classes. Mobile-first responsive layout. Minimum touch target size 44×44px for all interactive elements.

---

## Opening screen — informed consent

Before any questions are presented, the patient sees a single screen containing the following elements in this order.

A warm personalised greeting using the patient's first name if available from the appointment request data, or "Hello" if not: "Hello [FirstName]. Before your appointment, we'd like to understand how your symptoms have been affecting you."

A purpose statement: "Your answers help our clinical team prepare so that your consultation is focused on what matters most to you. This takes most patients four to six minutes."

A consent statement: "Your responses are sent securely to our clinical team and will only be reviewed by the healthcare professionals involved in your care. This assessment does not constitute a clinical consultation. If you have any urgent symptoms, please call 000 or attend your nearest emergency department."

A single primary button reading "Begin assessment" in myent-btn-primary styling.

---

## Progress indicator

A visible progress bar and step counter appear at the top of every question screen after the opening consent screen. The progress bar fills incrementally as the patient advances through the steps. The step counter reads "Step X of 9" — or the appropriate total if conditional steps change the count. The indicator is styled using teal-400 for the filled portion and neutral-200 for the unfilled portion.

---

## Step 1 — Patient type

Screen heading: "About your visit"
Screen subtext: "Help us understand your visit type."

Three radio options:
- New patient — first consultation at My-ENT for this concern
- Existing patient — same concern — follow-up for a previously discussed nasal or sinus issue
- Existing patient — new concern — a new nasal or sinus issue not previously discussed

No micro-affirmation on this step.

---

## Step 2 — Personal details

Screen heading: "Your details"
Screen subtext: "Your contact information and a few key details."

Fields (all mandatory):
- Full name (text)
- Email address (email)
- Date of birth (date — used to apply the paediatric CRSc threshold automatically for patients under 18)
- Phone number (tel)

Optional opt-in at the base of this screen, as a clearly labelled checkbox:
"I would like to receive educational information about my condition by email after my appointment."

This opt-in is the consent capture for post-consultation condition information emails. It must be unchecked by default. It must not be a mandatory field.

No micro-affirmation on this step.

---

## Step 3 — EPOS 2020 symptom classification

Screen heading: "Your symptoms"
Screen subtext: "These questions help us understand the nature and pattern of your symptoms."

This is the EPOS 2020 diagnostic classification component. It presents four sequential question groups on a single screen.

### Question group 3a — Cardinal symptom checklist

Instruction text: "Please select all symptoms you currently have."

Checkbox options (patient selects all that apply):
- Blocked nose or nasal congestion
- Runny nose or mucus dripping down the back of your throat
- Pain or pressure in your face, cheeks, or forehead
- Reduced or lost sense of smell

### Question group 3b — Symptom duration

Instruction text: "How long have you had these symptoms?"

Radio options:
- Less than 10 days
- Between 10 days and 12 weeks
- More than 12 weeks (approximately 3 months or longer)
- They come and go — I have had more than one episode

### Question group 3c — Symptom-free interval (conditional)

Displayed only if the patient selects "They come and go" in question group 3b.

Instruction text: "Between episodes, do your symptoms clear up completely?"

Radio options:
- Yes — I feel completely normal between episodes
- No — some symptoms are always present

### Question group 3d — Episode frequency (conditional)

Displayed only if the patient answers "Yes" in question group 3c.

Instruction text: "How many separate episodes have you had in the last 12 months?"

Radio options:
- 1 to 3 episodes
- 4 or more episodes
- I am not sure

### Background EPOS 2020 classification logic

The following classification runs silently in the background on the patient's responses. It appears only in the clinician email — never on any patient-facing screen.

ARS: 2 or more cardinal symptoms selected, duration less than 12 weeks, complete symptom-free intervals between episodes, fewer than 4 episodes in 12 months.

RARS: 2 or more cardinal symptoms selected, duration less than 12 weeks, complete symptom-free intervals between episodes, 4 or more episodes in 12 months.

CRS (adult): 2 or more cardinal symptoms selected, at least one being nasal blockage or nasal discharge, persisting for 12 weeks or more. OR: 2 or more cardinal symptoms with no complete symptom-free intervals reported.

CRSc (paediatric): Same criteria as adult CRS, applied automatically for patients whose date of birth from Step 2 indicates age under 18 years.

All classifications must be labelled in the clinician email as: "Provisional EPOS 2020 classification based on patient-reported symptom pattern — for clinical review only."

### Micro-affirmation after Step 3

"Thank you. Understanding when your symptoms started and how they have changed over time is one of the most important things we can know before your appointment."

---

## Step 4 — Medical history

Screen heading: "Your medical history"
Screen subtext: "This helps us understand what conditions and treatments may be relevant to your care."

### Question 4a — Relevant conditions

Instruction text: "Do you have any of the following? Select all that apply."

Checkbox options:
- Asthma
- Allergies (to pollen, dust mites, animals, or other environmental triggers)
- Aspirin or anti-inflammatory sensitivity
- Cystic fibrosis
- An immune system condition or immunodeficiency
- None of the above

### Question 4b — Prior sinus surgery

Instruction text: "Have you had any surgery on your nose or sinuses before?"

Radio options:
- Yes
- No
- I am not sure

If Yes: a free-text field appears reading "Please briefly describe the surgery and approximately when it was performed."

### Question 4c — Current intranasal treatment

Instruction text: "Are you currently using a nasal spray prescribed by a doctor?"

Radio options:
- Yes — a steroid nasal spray (such as Nasonex, Flonase, Rhinocort, or similar)
- Yes — a different nasal spray
- No

### Question 4d — Biologic therapy

Instruction text: "Have you ever been prescribed an injectable biological therapy for sinus disease or asthma (such as dupilumab, mepolizumab, or a similar treatment)?"

Radio options:
- Yes
- No
- I am not sure

### Micro-affirmation after Step 4

"This information about your medical history helps us understand what treatments have already been tried and what options may be available for you."

---

## Step 5 — SNOT-22

Screen heading: "How your symptoms affect you"
Screen subtext: "The following questions ask about how your nose and sinus symptoms have been affecting you over the past two weeks. There are no right or wrong answers — we simply want to understand your experience."

The full 22-item SNOT-22 (Sino-Nasal Outcome Test) is presented as a table. Each of the 22 items is scored 0 to 5 using the standard SNOT-22 response scale:

0 = No problem
1 = Very mild problem
2 = Mild or slight problem
3 = Moderate problem
4 = Severe problem
5 = Problem as bad as it can be

The 22 items are:

1. Need to blow nose
2. Sneezing
3. Runny nose
4. Cough
5. Post-nasal discharge (mucus draining from the back of your nose down your throat)
6. Thick nasal discharge
7. Ear fullness
8. Dizziness
9. Ear pain
10. Facial pain or pressure
11. Difficulty falling asleep
12. Waking up at night
13. Lack of a good night's sleep
14. Waking up tired
15. Fatigue
16. Reduced productivity
17. Reduced concentration
18. Frustrated, restless, or irritable
19. Sad
20. Embarrassed
21. Reduced sense of taste or smell
22. Blocked nose or nasal obstruction

The total SNOT-22 score is calculated by summing all 22 items (range 0–110). This calculation occurs silently in the background. The score is included in the clinician email only — it is not displayed to the patient.

### Micro-affirmation after Step 5

"Thank you for completing that section. These questions are one of the most widely used tools in the world for understanding the real impact of sinus disease on daily life. Your answers will be reviewed carefully before your appointment."

---

## Step 6 — NOSE scale

Screen heading: "Nasal breathing"
Screen subtext: "These questions focus specifically on how much your nasal breathing is affecting your quality of life."

The 5-item NOSE (Nasal Obstruction Symptom Evaluation) scale is presented. Each item is scored 0 to 4 using the standard NOSE response scale:

0 = Not a problem
1 = Very mild problem
2 = Moderate problem
3 = Fairly bad problem
4 = Severe problem

The 5 items are:

1. Nasal congestion or stuffiness
2. Nasal blockage or obstruction
3. Trouble breathing through my nose
4. Trouble sleeping
5. Unable to get enough air through my nose during exercise or exertion

The raw NOSE score is multiplied by 5 to produce a score out of 100. This calculation occurs silently in the background. The score is included in the clinician email only — it is not displayed to the patient.

### Micro-affirmation after Step 6

"Nasal obstruction affects far more than breathing — it impacts sleep, concentration, and energy. Your answers help us understand the full picture."

---

## Step 7 — TNSS (conditional)

This step is displayed only when the patient has indicated nasal discharge, sneezing, or allergy-related conditions in Steps 3 or 4. If not triggered, the patient advances directly to Step 8.

Screen heading: "Allergy symptoms"
Screen subtext: "These questions help us understand whether allergy is contributing to your nasal symptoms."

The 4-item TNSS (Total Nasal Symptom Score) is presented. Each item is scored 0 to 3 using the standard TNSS response scale:

0 = None — symptom is absent
1 = Mild — symptom is present but not bothersome
2 = Moderate — symptom is present and bothersome but does not interfere with daily activities or sleep
3 = Severe — symptom is present and so bothersome that it interferes with daily activities or sleep

The 4 items are:

1. Nasal congestion
2. Runny nose
3. Nasal itching
4. Sneezing

The total TNSS score is the sum of all 4 items (range 0–12). A score of 6 or greater suggests a significant allergic rhinitis component. This calculation occurs silently in the background. The score is included in the clinician email only — it is not displayed to the patient.

If TNSS is elevated (6 or greater), the RQLQ in Step 8 is triggered automatically.

### Micro-affirmation after Step 7

"Allergy is a common contributor to nasal symptoms, and understanding its role helps us direct your treatment more precisely."

---

## Step 8 — Conditional assessments (RQLQ and ESS)

This step is displayed only when one or both of the following conditions are met:
- TNSS score from Step 7 is 6 or greater (triggers RQLQ)
- Patient indicated snoring, sleep problems, or sleep disruption in earlier steps (triggers ESS)

If neither condition is met, the patient advances directly to Step 9.

Screen heading: "Additional questions"
Screen subtext: "Based on your earlier responses, we have a few additional questions to help us understand your situation more fully."

### RQLQ (conditional — displayed when TNSS ≥ 6)

Section heading: "How allergy affects your life"
Section subtext: "How much have you been bothered by each of the following problems in the last week?"

The RQLQ (Rhinoconjunctivitis Quality of Life Questionnaire) uses a 0 to 6 response scale:

0 = Not bothered
1 = Hardly bothered
2 = Somewhat bothered
3 = Quite bothered
4 = Very bothered
5 = Extremely bothered
6 = Completely bothered

The items are presented in the 7 RQLQ domains. A representative set of items from the validated instrument is used, covering activities, sleep, non-nasal symptoms, practical problems, nasal symptoms, eye symptoms, and emotional function.

The RQLQ total score is the mean of all item scores (range 0–6). Severity interpretation: 0–1.4 minimal; 1.5–2.4 mild; 2.5–3.4 moderate; 3.5–4.4 severe; 4.5–6.0 very severe. These interpretations appear in the clinician email only.

### ESS (conditional — displayed when sleep problems indicated)

Section heading: "Daytime sleepiness"
Section subtext: "How likely are you to doze off or fall asleep in the following situations? This refers to your usual way of life recently. Even if you have not done some of these things recently, try to work out how they would have affected you."

The Epworth Sleepiness Scale uses a 0 to 3 response scale:

0 = Would never doze
1 = Slight chance of dozing
2 = Moderate chance of dozing
3 = High chance of dozing

The 8 items are:

1. Sitting and reading
2. Watching television
3. Sitting inactive in a public place (for example, in a theatre or a meeting)
4. As a passenger in a car for an hour without a break
5. Lying down to rest in the afternoon when circumstances permit
6. Sitting and talking to someone
7. Sitting quietly after a lunch without alcohol
8. In a car, while stopped for a few minutes in traffic

The ESS total score is the sum of all 8 items (range 0–24). Severity interpretation: 0–7 normal; 8–10 mild; 11–15 moderate; 16–24 severe. A score greater than 15 triggers a Grade 5 flag in the clinician email. These interpretations appear in the clinician email only.

### Micro-affirmation after Step 8

"Almost there. These final questions help us understand how your symptoms are affecting your sleep and overall wellbeing — two areas that are often underestimated in sinus and nasal conditions."

---

## Step 9 — Additional concerns and submission

Screen heading: "Anything else?"
Screen subtext: "Is there anything else about your symptoms, previous treatments, or concerns that you would like our team to know before your appointment?"

A free-text textarea field with placeholder text: "Please describe any other symptoms, concerns, or questions you have..."

The field is optional. There is no minimum character count.

An encouragement note above the submit button: "You are almost finished. Your responses will be reviewed carefully before your appointment."

The submit button reads "Submit my assessment" in myent-btn-primary styling with a green confirmation variant on hover.

---

## Patient-facing completion screen

After submission, the patient sees the following screen. No scores, no grades, no clinical language of any kind appear on this screen.

Heading: "Thank you — your assessment has been received."

Body text: "Your responses have been securely sent to our clinical team and will be reviewed before your appointment. There is nothing further you need to do. If you have any questions before your appointment, please call the rooms on 02 9247 1762 during business hours. After hours, if you have an urgent concern, call 000 or attend your nearest emergency department."

Two action buttons side by side:
- "Return to My-ENT" (myent-btn-primary) — links to /
- "Call the rooms" (myent-btn-outline) — links to tel:+61292471762

A small privacy notice at the base: "Your assessment data is handled in accordance with the My-ENT Privacy Policy and the Australian Privacy Principles."

---

## Clinician email — two-section structure

The clinician email is generated automatically on form submission and sent to contact@my-ent.com.au. It is the only place where clinical scoring, grading, and classification appear.

### Subject line format

PRE-APPOINTMENT ASSESSMENT — [Patient Surname] — [Appointment Date if known, otherwise date of submission] — Highest Grade: [X]/5 — EPOS: [Provisional Classification]

Example: PRE-APPOINTMENT ASSESSMENT — Thompson — 14 Apr 2026 — Highest Grade: 4/5 — EPOS: CRS (Adult)

### Section 1 — Patient details

Name, email, date of birth, phone, patient type (new / existing same / existing new), email opt-in status for post-consultation information.

### Section 2 — EPOS 2020 provisional classification

Provisional EPOS 2020 classification: [ARS / RARS / CRS Adult / CRSc Paediatric / Insufficient data]
Cardinal symptoms selected: [list]
Duration: [patient response]
Symptom-free intervals: [Yes / No / Not applicable]
Episodes in 12 months: [patient response or Not applicable]
Age at assessment: [calculated from date of birth]

Label: "Provisional classification based on patient-reported symptom pattern — for clinical review only."

### Section 3 — Validated instrument scores and grades

Each instrument is presented with its raw score, its severity interpretation from the published literature, and its internal grade on the 0–5 scale.

The grading scale is as follows:
- Grade 0: No clinically significant finding
- Grade 1: Mild impact
- Grade 2: Mild to moderate impact
- Grade 3: Moderate impact — warrants clinical attention
- Grade 4: Significant impact — warrants clinical attention
- Grade 5: Severe impact — priority review

SNOT-22: Total score [X]/110. Severity: [Minimal / Moderate / Severe]. Grade: [0–5]/5.
NOSE: Total score [X]/100. Severity: [Mild / Moderate / Severe / Extreme]. Grade: [0–5]/5.
TNSS (if completed): Total score [X]/12. Allergic component: [Significant if ≥6 / Not significant]. Grade: [0–5]/5.
RQLQ (if completed): Mean score [X]/6. Severity: [Minimal / Mild / Moderate / Severe / Very severe]. Grade: [0–5]/5.
ESS (if completed): Total score [X]/24. Severity: [Normal / Mild / Moderate / Severe]. Grade: [0–5]/5.

### Section 4 — Nurse practitioner quick reference

NURSE PRACTITIONER QUICK REFERENCE
Highest grade: [X]/5

Grade 5 — Priority review: SNOT-22 >50 OR NOSE >75 OR ESS >15 OR RQLQ mean >4.5
Grade 4 — Warrants attention: SNOT-22 21–50 OR NOSE 51–75 OR ESS 11–15 OR RQLQ mean 3.5–4.4
Grade 3 — Moderate: SNOT-22 21–50 OR NOSE 26–50 OR TNSS ≥6 OR ESS 8–10
Grade 0–2 — Routine: All scores below moderate thresholds

Note: All grades are for internal clinical reference only. No grade or score is displayed to the patient.

### Section 5 — Medical history summary

Relevant conditions: [list of checked conditions or "None reported"]
Prior sinus surgery: [Yes with details / No / Unsure]
Current nasal spray: [Yes — steroid / Yes — other / No]
Biologic therapy history: [Yes / No / Unsure]

### Section 6 — Additional concerns

[Free-text patient response, or "None provided"]

### Section 7 — References

This assessment uses the following validated instruments:
- SNOT-22: Fokkens WJ et al. EPOS 2020. Rhinology. 2020;58(Suppl S29):1–464.
- NOSE: Stewart MG et al. Otolaryngol Head Neck Surg. 2004;130(2):157–163.
- TNSS: Fokkens WJ et al. EPOS 2020.
- RQLQ: Juniper EF, Guyatt GH. Clin Exp Allergy. 1991;21(1):77–83.
- ESS: Johns MW. Sleep. 1991;14(6):540–545.
- EPOS 2020 classification: Fokkens WJ et al. Rhinology. 2020;58(Suppl S29):1–464. DOI: 10.4193/Rhin20.600.

---

## Session management

A 30-minute inactivity timeout is implemented. A warning notification appears at 25 minutes of inactivity, giving the patient 5 minutes to extend their session. If the session expires, the patient is shown a session-expired overlay and offered the option to start a new assessment. A before-unload warning is displayed if the patient attempts to navigate away with unsaved data after Step 2.

---

## Save and return functionality

Patients who do not complete the questionnaire in one sitting receive an email with a resumption link if they have completed Step 2 (personal details). The resumption link returns them to the exact step where they stopped. Saved sessions expire after 48 hours.

---

## Implementation notes for Claude Code

- This questionnaire is built as a client-side React component within the Next.js app. All scoring logic runs in the browser. No patient data is persisted on the server — it is transmitted directly to contact@my-ent.com.au on submission via a Next.js server action or API route.
- The email is sent using Resend or Nodemailer, configured with appropriate access controls.
- All submissions must occur over HTTPS — Vercel enforces this automatically.
- The questionnaire must pass npm run lint and npm run build before deployment.
- It must be fully responsive and accessible, with WCAG 2.1 AA compliance for form elements.
- TypeScript strict mode applies throughout. No any types.
