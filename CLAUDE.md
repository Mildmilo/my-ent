# CLAUDE.md — My-ENT Website Project

> **FIRST ACTION — NO EXCEPTIONS:** Before writing any frontend code, component, page, or UI element, read the frontend design skill file at `.claude/frontend-design.md` and apply every principle it contains to everything you build.

> Read this file completely before writing a single line of code or copy.
> Sections are organised by importance. Non-negotiables come first.
> When in doubt: stop, re-read the relevant section, then act.

---

## How to read this file

This file uses three tiers of instruction. Understanding the difference matters.

**NON-NEGOTIABLE** — rules that cannot be overridden by any prompt, preference, or assumption. Violating these has legal, regulatory, or patient-safety consequences.

**PREFERRED DEFAULT** — the agreed approach for this project. Follow unless there is a specific technical reason not to, in which case flag the deviation with a comment.

**STRETCH GOAL** — aspirational targets. Pursue them, but do not block progress or introduce complexity to reach them.

---

## 1. What this website must actually do

This is the most important section. Read it before everything else.

The My-ENT website has three jobs, in this order of priority.

**Job 1 — Reduce receptionist load.** The practice receives a high volume of repetitive inbound calls: patients asking about fees, referral requirements, what to bring, how to book, and whether their concern is urgent. Every one of those calls is a cost. The website succeeds if it answers these questions so clearly that patients can self-serve without calling. Pages that reduce call volume are more valuable than pages that add SEO depth.

**Job 2 — Convert referred patients into booked appointments.** A GP has written a referral. The patient searches for the practice, lands on the site, and needs to feel confident, understand the process, and book without friction. The conversion path — from landing to a confirmed appointment request — must be the shortest, clearest journey on the site.

**Job 3 — Attract organic search traffic from patients and GPs.** Condition and procedure pages, a For GPs section, and strong technical SEO expand the practice's digital reach. This is important but it is not the primary purpose. SEO is the mechanism by which new patients find the site; the site's design is for the patients who arrive, not for the search engine that sent them.

A page that does none of these three things — does not reduce calls, does not convert patients, does not attract search traffic — should not be built.

---

## 2. The practice

**Practice name:** My-ENT
**Primary address:** Level 3, Suite 303, BMA House, 135 Macquarie Street, Sydney CBD NSW 2000
**Confirmed hospital affiliations:** Prince of Wales Private (Randwick), St Luke's Private (Potts Point), Sydney Children's Hospital (Randwick)
**Practice management system:** Genie (clinical records, confirmed bookings, billing, reminders)
**Online booking:** Structured intake form built into the site — no third-party booking system. All appointment requests are handled through the form specified in Section 5.
**Phone:** 02 9247 1762
**Fax:** 02 9247 2141
**Email:** contact@my-ent.com.au
**Opening hours:** 8:30 am – 5:00 pm, Monday to Friday
**ABN:** 25 661 686 324 (Trustees of My-ENT)

**DO NOT invent or approximate any detail not listed above.** Use `// TODO: INSERT [field]` and continue.

### Team — complete verified bios

The team page is the first page patients and GPs see after the homepage. It must display photos of all team members (surgeons and Justine Oates). Use initials placeholders until photography is supplied. Every bio below is verified from the live site and must be used verbatim — do not paraphrase, summarise, or invent additional detail.

---

**Dr Catherine Banks** — MBChB, FRACS
Subspecialties: Rhinology, Skull Base Surgery, Adult and Paediatric ENT, General ENT.
Qualifications: MBChB, FRACS (ORL-HNS).
Dual fellowship certified: Harvard Medical School / Massachusetts Eye and Ear Hospital / Massachusetts General Hospital, Boston; University of Birmingham, Alabama.
First Australasian surgeon to complete the Harvard/MEEI rhinology fellowship.
UNSW PhD candidate (supervisor A/Prof Shafagh Waters). NHMRC grant holder (research in sinus stem cell therapeutics — see Rule 3 for confidentiality constraints). RACS Court of Examiners for Royal Australasian College of Surgeons (RACS), ASOHNS. Founder, Base of Skull Service (BOSS), Sydney Children's Hospital. Finalist, NSW Innovation Awards 2025. Co-Director, International Orbital and Skullbase Workshop.
Actively involved in clinical research and surgical education. Numerous peer-reviewed publications and textbook chapters. Presents regularly at national and international conferences.

Public hospital appointments: Prince of Wales Hospital; Sydney Hospital; Sydney Eye Hospital; Sydney Children's Hospital, Randwick.
Private hospital appointments: St Luke's Private; Prince of Wales Private.

Clinical expertise: all adult and paediatric nasal disorders; nasal obstruction and snoring; sinusitis; allergic rhinitis; cystic fibrosis; nasal masses and growths; anterior skull base lesions; pituitary lesions; epistaxis; dacryocystorhinostomy (DCR) / nasolacrimal sac obstruction; endoscopic orbital decompression and orbital surgery; general ENT; grommets; tonsillectomies; adenoidectomies.
Works closely with neurosurgical and oculoplastic teams.
Actively involved in academic research, teaching, mentoring, curriculum and examinations.
Training centres: Sydney Children's Hospital; Westmead Children's Hospital; John Hunter Children's Hospital — trained across all three major NSW paediatric centres.

Website: drcatherinebanks.com

---

**Dr Lyndon Chan** — MBBS (Hons), FRACS (Otorhinolaryngologist)
Subspecialties: Obstructive Sleep Apnoea and Snoring, Rhinology, Skull Base, Adult and Paediatric ENT.
Triple fellowship certified: Duke University Hospital, USA; Singapore General Hospital, Singapore; Wollongong Hospital, Australia.
Public hospital appointment: Northern Beach Hospital.
University appointment: Wollongong University.
Board member: International Surgical Sleep Society (ISSS).
Website: www.drlyndonchan.com

Clinical expertise: adult and paediatric obstructive sleep apnoea and snoring; nasal obstruction, allergic rhinitis, sinus disease; palate reconstruction and tongue reduction; implantable devices for OSA; lesions and tumours of the sinuses, head and neck.
Ongoing collaboration with ENT faculties in Asia and America.

---

**Dr June Huang** — MBChB, FRACS (OHNS)
Subspecialties: Otology, General and Paediatric ENT.
Medical degree: University of Manchester, England. Foundation training in the United Kingdom. ENT training across NSW including Newcastle, Wollongong, and Canberra.
Fellowship: Otology, St Vincent's Hospital, Sydney.

Private hospital appointments: St Luke's Hospital; Norwest Private Hospital; Lakeview Private Hospital; Southern Highlands Hospital; Tamara Private Hospital.
Also provides services in regional NSW including Bowral and Tamworth.

Clinical expertise: general nasal conditions (sinus, breathing, snoring, allergy, nosebleeds); ear infections, tonsils, sinuses; throat and voice disorders including silent reflux; general head and neck conditions; general paediatric ENT (grommets, tonsillectomies, adenoidectomies); ear conditions with special interest in eardrum repair, exostoses, cholesteatoma, hearing issues including cochlear implants, and balance disorders.

---

**Dr Rithvik Reddy** — FRACS (ORL-HNS)
Subspecialties: Complex Otology, Auditory Implants, Lateral Skull Base Surgery, General and Paediatric ENT.
Qualifications: FRACS (Otolaryngology, Head and Neck Surgery).
Fellowship: Advanced fellowship in Complex Otology, Auditory Implants and Lateral Skull Base Surgery, Guy's and St Thomas' NHS Trust, London. Executive Fellowship in Surgical Leadership and Innovation, King's College London.

Consultant appointments: Sydney Children's Hospital; Liverpool Hospital (adult and paediatric).
Training centres: Sydney Children's Hospital; Westmead Children's Hospital; John Hunter Children's Hospital — trained across all three major NSW paediatric centres.

Clinical expertise (subspecialty): cochlear implantation; middle ear implants; paediatric hearing loss; chronic ear disease; exostoses; cholesteatoma; skull base tumours.
Clinical expertise (general ENT): ear infections; hearing loss; tonsillitis; glue ear; nasal obstruction; sinus disease; snoring — adults and children.

Actively involved in clinical research and surgical education. Numerous peer-reviewed publications and textbook chapters. Presents regularly at national and international conferences. Works closely with GPs, audiologists, and allied health teams.

---

**Justine Oates** — Nurse Practitioner
Role: Nurse Practitioner for Dr Catherine Banks. Head and Neck / Rhinology Nurse Practitioner.
Qualifications: Master of Nursing, Sydney University (2016).
One of only three nurse practitioners in this scope of practice in Australia at the time of her appointment.
Pioneered the nurse consultant role in head and neck surgery alongside Professor Chris O'Brien at Royal Prince Alfred Hospital for 15 years. Transitioned to Chris O'Brien Lifehouse at its opening in 2014, developing highly specialised nursing care for complex head and neck surgical and radiation oncology patients. Commenced as nurse practitioner in 2017. Has published and presented nationally and internationally on quality of life following head and neck cancer treatment. Invited lecturer, Sydney University Nursing School. Joined Dr Banks to expand her scope to include rhinology.
Justine plays a central role in the new patient triage and nurse practitioner review pathway for Dr Banks's patients only — see Section 5 and Rule 9. She does not provide nurse practitioner input for patients of Dr Chan, Dr Huang, or Dr Reddy.

Justine must appear on the team page alongside the surgeons, with her own profile card and biography page at /about/justine-oates.

---

### Verified public tertiary hospital appointments

All four My-ENT surgeons hold public tertiary hospital appointments. These are verified and must be used in surgeon profiles, JSON-LD Physician schema, and any copy referencing institutional affiliations.

- Dr Catherine Banks — Prince of Wales Hospital; Sydney Hospital; Sydney Eye Hospital; Sydney Children's Hospital (Randwick)
- Dr Lyndon Chan — Northern Beach Hospital; Wollongong Hospital
- Dr June Huang — St George Hospital
- Dr Rithvik Reddy — Prince of Wales Hospital; Sydney Hospital; Sydney Children's Hospital (Randwick); Liverpool Hospital

### Other private consulting locations

These are confirmed private practice locations where individual surgeons see patients independently of the My-ENT Macquarie Street group practice. The My-ENT reception team has no visibility over bookings at these locations. Patients referred to these locations must contact those rooms directly. Contact details marked TODO must be verified before the contact directory page is published.

- Dr Lyndon Chan — three locations:
  - Sydney North ENT, Lindfield: Suite 1, 295–303 Pacific Highway, Lindfield NSW 2070. Phone: (02) 8090 2525. Email: secretary@therooms.com.au
  - Sydney North ENT, Crows Nest: Suite 211, 300 Pacific Highway, Crows Nest NSW 2065. Phone: (02) 8090 2525. Email: secretary@therooms.com.au
  - Illawarra ENT, Wollongong: Suite 1–2, 8/10 Victoria Street, Wollongong NSW 2500. Phone: (02) 4226 1055. Email: reception@illawarraent.com.au

- Dr June Huang — Trinity ENT, Kogarah: Suite 7J, St George Private Hospital, 1 South Street, Kogarah NSW 2217. Phone: (02) 4208 5521. Email: TrinityENT.contactus@gmail.com

- Dr Rithvik Reddy — MacArthur ENT, Gregory Hills: Shop 2101, Level 2, 31A Lasso Road, Gregory Hills NSW 2557. Phone: (02) 4625 1682. Email: referrals@drrithvikreddy.com (referral and appointment contact email verified from practice site)

### Public patient statement — use verbatim on Fees and Medicare page

"If you are a public patient and have any concerns, please contact the relevant hospital directly. Waiting times and appointment scheduling are managed by the hospital and are outside the control of our private rooms."

### Verified public hospital contact details

These are confirmed contact details for the public hospitals where My-ENT surgeons hold appointments. Use on the contact directory page only. Do not list individual surgeon names against specific hospitals on this page — the page lists hospitals as a patient resource, not as a surgeon directory.

- Prince of Wales Hospital — Barker Street, Randwick NSW 2031. Phone: (02) 9382 2222. Email: seslhd-generalmanager-powhsseh@health.nsw.gov.au
- Sydney Children's Hospital, Randwick — High Street, Randwick NSW 2031. Phone: (02) 9382 1111. Appointments and treatment enquiries: (02) 9382 1212. Email: not publicly listed.
- Sydney Hospital and Sydney Eye Hospital — 8 Macquarie Street, Sydney NSW 2000. Phone: (02) 9382 7111. Email: SESLHD-SSEHExecutiveServices@health.nsw.gov.au
- Northern Beaches Hospital — 105 Frenchs Forest Road West, Frenchs Forest NSW 2086. Phone: (02) 9105 5000. Email: nbh@healthscope.com.au
- Wollongong Hospital — Loftus Street, Wollongong NSW 2500. Phone: (02) 4222 5000. Email: not publicly listed.
- St George Hospital — Gray Street, Kogarah NSW 2217. Phone: (02) 9113 1111. Email: not publicly listed.
- Liverpool Hospital — Corner of Elizabeth and Goulburn Streets, Liverpool NSW 2170. Phone: (02) 8738 3000. Email: not publicly listed.

### Contact directory page — required before launch

Build this page at src/app/contact/finding-the-right-contact/page.tsx as a Tier A administrative page. Link it from the footer and from the opening screen of the appointments page. The page has three sections.

Section 1 — My-ENT Macquarie Street rooms. Confirm that the My-ENT reception team manages bookings and enquiries for 135 Macquarie Street only. Include the confirmed practice phone, fax, email, address, and hours from Section 2.

Section 2 — Other private consulting locations. List the verified private room details for Dr Chan, Dr Huang, and Dr Reddy from the section above. Introduce this section with a brief statement that if a patient's referral is to one of these locations, they should contact those rooms directly as the My-ENT team cannot assist with bookings there.

Section 3 — Public hospital contacts. List the verified hospital contact details above. Introduce this section with the verbatim public patient statement from this document: "If you are a public patient and have any concerns, please contact the relevant hospital directly. Waiting times and appointment scheduling are managed by the hospital and are outside the control of our private rooms." Do not list individual surgeon names against specific hospitals.

### Contact directory page — confirmed design

The contact directory page at /contact/finding-the-right-contact is the destination for every patient who clicks "No — find another location" on the homepage. Page heading: "Let's get you to the right place." Subtext: "No problem at all — specialists see patients across multiple locations. Find your surgeon's rooms below and give them a call directly. They will be expecting referrals like yours."

The urgent warning directing patients to call 000 appears at the very top of the page above all three sections.

The three sections appear in this confirmed order — do not alter without explicit instruction.

Section 1 — Other private consulting rooms. Lists all four surgeons in this order: Dr Catherine Banks first (My-ENT, Suite 303, Level 3, BMA House, 135 Macquarie Street, Sydney CBD, phone 02 9247 1762, email contact@my-ent.com.au), then Dr Lyndon Chan (three locations), Dr June Huang (Trinity ENT Kogarah), and Dr Rithvik Reddy (MacArthur ENT Gregory Hills) from the Other private consulting locations section above. Each surgeon's rooms are listed under a clear heading with address, phone number as a prominent clickable tel: link in myent-btn-primary styling, and email.

Section 2 — Public hospital appointments. Lists all seven verified public hospitals with their main phone numbers as clickable tel: links. Introduced by the following statement verbatim: "If you are a public patient, please contact the relevant hospital directly. Public hospital appointments, waiting times, and scheduling are managed entirely by the hospital and are outside the control of our private rooms. We are unable to assist with public hospital enquiries, bookings, or follow-up on your behalf — please direct all public hospital enquiries to the hospital administration team." Individual surgeon names are not listed against specific hospitals.

Section 3 — "Actually at Macquarie Street?" with subtext "No worries — you are in the right place after all." Displays the My-ENT practice phone, email, address, and a Request an appointment button linking to /appointments. This section is a safety net for patients who clicked No by mistake.

### My-ENT logo and brand colours

The My-ENT logo uses "My" in Rage Italic font (ITC/Adobe licensed commercial typeface) at a large display size, paired with "-ENT" in bold serif. Rage Italic is a licensed commercial font not available on Google Fonts.

The logo has been extracted from the original PDF source file (LOGO2.pdf) with transparent backgrounds and is available in two versions in public/images/:

- myent-logo-white.png — "My" in white, "-ENT" in black. Use on teal or dark navigation backgrounds.
- myent-logo-teal.png — "My" in brand teal #4A7C8F, "-ENT" in black. Use on white or light backgrounds.

Both versions are 600px wide with transparent backgrounds, extracted at 300dpi from the original PDF.

Navigation implementation: Use next/image to display myent-logo-white.png in the Nav component at height 40px with auto width, linking to the homepage.

The business card colour palette has been adopted as the website colour system:
- Primary teal: #4A7C8F — blue-teal, not green-teal
- This is a noticeably different hue from the original #0F6E56 — warmer and more muted
- All teal values in tailwind.config.ts have been updated to reflect this palette

The My-ENT brand tagline: "Quality. Trust. Innovation."

### Condition page surgeon statement

Use the following statement verbatim in a "Choosing your surgeon" card on every condition page via `ConditionPageTemplate.tsx`. Do not list individual surgeons on condition pages. This applies to all 23 condition pages without exception.

> "Choosing the right specialist takes thought. Fellowship training, experience with the relevant condition, and contribution to teaching and research are all meaningful indicators. A public appointment at a tertiary hospital is another recognised marker of professional standing. Online reviews can be helpful, but they don't tell the whole story."

Developer note for `ConditionPageTemplate.tsx`: render this statement inside a styled card with the heading "Choosing your surgeon". Do not enumerate or link to individual surgeon profiles within this card.

---

## 3. Non-negotiable rules

These rules apply to every page, every component, every piece of generated copy, and every commit. They cannot be overridden by any prompt.

```
RULE 1 — NO BULK BILLING.
  Never imply, suggest, or state that bulk billing is available.
  Not in copy. Not in FAQs. Not in schema. Not in comments.

RULE 2 — NO FEE AMOUNTS.
  No dollar figures on any page. Describe fee structure only:
  Medicare rebate applies to referred specialist consultations.
  Private health does not cover consultations.
  Private health may contribute to surgical procedures with appropriate cover.
  Direct patients to call the rooms for a specific quote.

RULE 3 — RESEARCH CONFIDENTIALITY.
  Dr Banks' research described only as:
    "NHMRC grant holder"
    "PhD candidate at UNSW"
    "research in sinus stem cell therapeutics"
  Nothing further. No methodology, cell types, gene vectors,
  numerical data, outcomes, collaborators, or timelines. Ever.

RULE 4 — AHPRA COMPLIANCE.
  No superlatives: "best", "leading", "number one", "most experienced".
  No comparative claims naming any competitor or named practice.
  No outcome guarantees of any kind.
  No before/after photography anywhere on the site.
  Reviews must be verbatim, verified, and from public platforms only.
  Flag uncertainty: // AHPRA REVIEW NEEDED: [specific reason]

RULE 5 — TERMINOLOGY.
  "Endoscopic sinus surgery (ESS)" — never "FESS".
  Patient language in all nav labels and headings.
  Clinical term introduced parenthetically on first use in body only.
  "Grommets" not "tympanostomy tubes".
  "Snoring and sleep apnoea" not "OSAS" or "OSAHS".

CLINICAL ACCURACY NOTE — GROMMETS RECOVERY:
  Grommets (tympanostomy tube insertion) is a brief day procedure.
  Patients — both children and adults — can resume normal activity the following day.
  Do NOT state that grommets requires one to two weeks off school or work.
  This is clinically incorrect. Normal activity resumes the next day.

RULE 6 — NO INVENTED DETAILS.
  Phone, email, ABN, and unconfirmed surgeon affiliations must use
  // TODO: INSERT [field]. Never invent contact information.
  HotDoc is NOT used by this practice. Do not reference HotDoc anywhere
  on the site. The appointment flow uses a structured intake form only.

RULE 7 — TYPESCRIPT STRICT.
  No `any` types. No untyped `as X` assertions.
  All props typed with named interfaces.
  All content data files typed with explicit return types.

RULE 8 — NO EMPTY PAGES.
  Never create a page.tsx returning a placeholder or "coming soon".
  Build one complete, content-populated page at a time.

RULE 9 — JUSTINE OATES SCOPE OF PRACTICE. NON-NEGOTIABLE.
  Justine Oates works exclusively with Dr Catherine Banks.
  She does not work for Dr Lyndon Chan, Dr June Huang, or Dr Rithvik Reddy.
  Justine is only involved in patient care when a patient has been referred
  to Dr Catherine Banks. Do not imply, state, or design any user flow in
  which Justine triages, reviews, follows up, or provides nurse practitioner
  input for patients of the other three surgeons. This applies to:
    - Page copy
    - Triage pathway descriptions
    - Post-operative callouts
    - Schema markup
    - Any automated routing logic
  When describing the nurse practitioner review pathway, always scope the
  wording to Dr Banks's patients only.
  NOTE ON QUESTIONNAIRE ROUTING: The sinus questionnaire system is available
  to all four surgeons' patients. The clinician report destination email is
  specified by reception at link generation — it is not hardcoded to
  justineoates@my-ent.com.au. Justine's email is the default pre-fill for
  Dr Banks's patients only. For other surgeons, reception enters a different
  destination email. The questionnaire system itself does not violate Rule 9
  provided the routing logic is dynamic and not hardcoded to Justine.
```

---

## 4. Content publishing tiers

Not all pages carry the same clinical or legal risk. Apply the correct tier before marking any page as ready to publish.

**Tier A — Administrative pages. Can be reviewed and published by practice manager.**
These include the homepage, contact, locations, appointment request, fees and Medicare, your first visit, referral information, patient portal, and the For GPs index. Content is logistical and patient-facing. No clinical claims. Reviewed against Rules 1–6 above.

**Tier B — Surgeon biography pages. Require credential verification before publishing.**
Each surgeon profile must be reviewed by that surgeon before going live. Credentials, fellowships, hospital affiliations, and any research statements must be confirmed as accurate. Do not publish a surgeon profile based solely on what is in this file — the surgeon must sign off.

**Tier C — Clinical condition and procedure pages. Require Dr Banks' sign-off before publishing.**
Every condition and procedure page contains clinical information that patients may use to make health decisions. These pages must be reviewed and approved by Dr Banks before publication. Generate the content, flag it with `// TODO: CLINICAL REVIEW — awaiting Dr Banks sign-off`, and do not mark it as publish-ready until that sign-off is received.

---

## 5. Patient front-door and reception workflow

This section defines the operational logic of the site. Build every patient-facing page with this workflow in mind.

### Homepage primary action hierarchy

The homepage presents four actions in this order of visual prominence. Every version of the homepage must maintain this hierarchy.

**Action 1 — Request an appointment.** The primary CTA. Links to the appointment request flow. This is for patients who have a GP referral and are ready to book.

**Action 2 — Upload a referral or imaging.** For patients who have been told to send documents before their appointment, or who want to send ahead of calling. Reduces back-and-forth reception calls.

**Action 3 — I have a question about fees or my visit.** Links directly to the Fees & Medicare page and the Your First Visit page. Intercepts the most common category of inbound calls.

**Action 4 — I have a post-operative concern.** Clear, calm escalation pathway. Links to the patient info section with after-hours contact guidance. For surgical patients with concerns between appointments.

### New patient triage logic

When a new patient arrives at the appointment request page, the flow must identify their situation before presenting a booking option. The five states are as follows.

**Ready to book** — patient has a valid GP referral, knows their concern category, and wants an appointment. Present the appointment intake form directly.

**Missing referral** — patient does not have a GP referral. All patients require a valid GP referral to be seen at My-ENT. Explain this clearly and warmly, provide a brief explanation of what to ask their GP for, and direct them back to their GP. Do not offer a private self-referral pathway. Do not dead-end them — the page should leave the patient knowing exactly what their next step is.

**Needs nurse practitioner triage** — patient is unsure whether their concern warrants a specialist, or has been directed to the NP pathway. Justine Oates, the practice nurse practitioner, sees patients for initial assessment, post-operative follow-up, and ongoing management within her scope. The website should make the NP pathway visible and accessible — it is a genuine clinical service, not a waiting room for the surgeons. Route these patients to the appointment request form with "nurse practitioner consultation" as an option.

**Urgent same-day concern** — patient has an acute concern (sudden hearing loss, post-operative bleed, airway concern). Display a prominent, clearly styled alert directing them to call the rooms immediately or, if after hours, to present to their nearest emergency department. Do not bury this.

**Redirect elsewhere** — concern is outside My-ENT's scope (e.g. dental, ophthalmology). Briefly acknowledge the concern and suggest they return to their GP for an appropriate referral. Warm, not dismissive.

### Appointment intake form — full field specification

The practice does not use HotDoc. All appointment requests are handled through a structured intake form built into the site. The form is a multi-step single-page form divided into five sections. The submit button remains disabled until every mandatory field across all five sections is complete and both consent checkboxes are ticked. Fields are validated inline as the patient moves between sections, not only at final submission.

**Section 1 — Patient details (all fields mandatory)**
Full legal name. Date of birth. Sex. Residential address (street, suburb, state, postcode). Mobile phone number. Email address. Medicare number and expiry date. Whether the patient is the person completing the form or whether a parent or guardian is completing on behalf of a child. If a parent or guardian: their relationship to the patient and their own name and contact details.

**Section 2 — Referring doctor details (GP fields mandatory; other treating doctors optional)**
GP full name. GP practice name. GP practice address. GP practice phone number. GP practice fax number. GP email address (if available). Whether a formal referral letter has been issued — if yes, a file upload field accepting PDF, JPG, or PNG up to 10MB. Other treating doctors involved in the patient's care (name, specialty, and contact details) — this field is optional but prominently offered.

**Section 3 — Clinical information (all fields mandatory except prior specialist detail)**
Symptom category: dropdown selecting from nose and sinuses, ear, throat, paediatric ENT, skull base, or other. Plain-English description of the presenting concern with a minimum character count of 50 to prevent one-word submissions. Duration of symptoms. Whether the patient has been seen by another ENT or specialist for this concern — if yes, by whom (mandatory if this option is selected). Whether the patient has had any relevant prior surgery.

**Section 4 — Imaging and investigations (mandatory to indicate whether imaging exists)**
Whether any relevant imaging has been performed: CT scan, MRI, other, or none. For each imaging study: date of study, facility where performed, and where the images or report are held (with the GP, at the imaging facility, or uploaded directly). File upload field for imaging reports in PDF format. Whether any pathology or audiometry results are available and where they are held.

**Section 5 — Appointment preferences and consent (all fields mandatory)**
Preferred surgeon: dropdown of all four surgeons plus Justine Oates (nurse practitioner) plus "no preference — next available." Preferred consulting location: Macquarie Street CBD, Prince of Wales Private, St Luke's Private, or no preference. Whether the concern is urgent, with a one-sentence plain-English explanation of what constitutes clinical urgency for ENT care. Preferred contact method for appointment confirmation: phone call or email. Availability notes such as days or times that are not possible (optional free text). A mandatory checkbox: "I have read and understood the Privacy Policy" with a hyperlink to /privacy-policy. A mandatory checkbox: "The information I have provided is accurate and complete to the best of my knowledge."

**On submission — structured reception email**

The goal of the reception email is that reception can open it, read it once, and create the Genie booking without making a single outbound call. Every piece of information required for that booking must be present, clearly labelled, and in the same position every time so reception develops reading rhythm across repeated submissions.

The email is generated automatically on form submission and sent to contact@my-ent.com.au. The sinus pre-appointment questionnaire clinician report is sent specifically to justineoates@my-ent.com.au. The questionnaire is accessed via direct link only — it is not linked from the main navigation and is not publicly discoverable by search engines. Referral letters and imaging reports are attached as separate files, clearly named. The patient receives an automatic acknowledgement email confirming receipt and advising that reception will be in contact within one business day to confirm the appointment.

The reception email must follow this exact structure:

**Subject line (auto-generated):**
[NEW PATIENT REQUEST] — [Adult / Paediatric] — [Symptom Category] — [Patient Surname]

Example: [NEW PATIENT REQUEST] — Paediatric — Ear — Thompson

**Email body — fixed section order:**

PATIENT DETAILS
Name: [Full legal name]
Date of birth: [DD/MM/YYYY]
Sex: [Male / Female / Other]
Address: [Full residential address]
Mobile: [Mobile phone number]
Email: [Email address]
Medicare number: [Number and expiry]
Form completed by: [Patient / Parent or guardian — if guardian: name and relationship]

REFERRING DOCTOR
GP name: [Full name]
Practice: [Practice name]
Address: [Practice address]
Phone: [Practice phone]
Fax: [Practice fax]
GP email: [If provided]
Referral letter: [Attached / Not yet available / Not applicable]
Other treating doctors: [Name, specialty, contact — or "None provided"]

CLINICAL INFORMATION
Symptom category: [Nose and sinuses / Ear / Throat / Paediatric ENT / Skull base / Other]
Presenting concern: [Patient's own words — minimum 50 characters]
Duration: [Patient's response]
Prior ENT or specialist review: [Yes — [name and details] / No]
Prior relevant surgery: [Yes — [details] / No]

IMAGING AND INVESTIGATIONS
Imaging performed: [CT scan / MRI / Other / None]
[For each study: date, facility, location of images/report]
Imaging report: [Attached / Held with GP / Held at imaging facility]
Pathology or audiometry: [Available — [location] / None]

APPOINTMENT PREFERENCES
Preferred surgeon: [Name / No preference — next available]
Preferred location: [Macquarie Street CBD / Prince of Wales Private / St Luke's Private / No preference]
Urgency: [Urgent — [reason] / Routine]
Preferred contact for confirmation: [Phone / Email]
Availability notes: [Patient's notes / None provided]

CONSENT
Privacy Policy accepted: Yes
Information accuracy confirmed: Yes

---

No sensitive health data is stored in the application database. All data transmits to reception by secure email and is not persisted on the server beyond the transmission event.

**Australian Privacy Principles compliance**
This form collects sensitive health information as defined under the Privacy Act 1988 (Cth). The following requirements apply without exception. The form must link to the practice Privacy Policy before submission. The Privacy Policy page (/privacy-policy) is a required page in the site and must be built as part of the Tier A administrative pages. Data collected is limited to the minimum necessary for booking an appointment. Form submissions must be transmitted over HTTPS. The reception email account must have appropriate access controls. Patient health information must not be used for any secondary purpose including marketing.

### Appointments page — confirmed design

The appointments page uses the following confirmed structure. Do not alter this without explicit instruction.

Eyebrow label: "APPOINTMENTS"

Headline: "Request an appointment" in font-serif text-3xl.

A single line of small text: "Wrong location? Contact directory." where "Contact directory" is a teal underline link to /contact/finding-the-right-contact, styled as text-sm text-neutral-400.

The booking request form follows immediately below. No pathway cards, no duplicate redirect statements, no "Tell us your current situation" section. The page does one thing: present the booking request form cleanly with a single unobtrusive escape route for misdirected patients.

### What happens outside Genie

Genie handles confirmed bookings, appointment reminders, billing and administration, and internal clinical recordkeeping. The website handles everything upstream of that.

The website is responsible for the new patient intake form, referral and imaging document upload, structured appointment request summaries that reception can action without a phone call, and patient education content that reduces post-booking questions.

Reception should be able to open a new appointment request from the website and have everything they need to create the Genie booking without making an outbound call. If the website form does not capture enough information to do that, the form is incomplete.

### SNOT-22 subdomain structure — for PDF and longitudinal tracking

The SNOT-22 is presented in five validated subdomains in the clinical PDF and in longitudinal tracking:
- Rhinological symptoms: items 1–6 (need to blow nose, sneezing, runny nose, cough, post-nasal discharge, thick nasal discharge)
- Extranasal rhinological symptoms: items 7–9 (ear fullness, dizziness, ear pain)
- Ear and facial symptoms: items 10–11 (facial pain or pressure, difficulty falling asleep)
- Psychological dysfunction: items 12–18 (waking up at night, lack of good sleep, waking tired, fatigue, reduced productivity, reduced concentration, frustrated/restless/irritable)
- Sleep dysfunction: items 19–22 (sad, embarrassed, reduced taste or smell, blocked nose)

Subdomain analysis is clinically more valuable than the total SNOT-22 score alone for monitoring treatment response across specific symptom clusters.

### Homepage hero — confirmed design

The homepage hero uses the following confirmed structure. Do not alter this without explicit instruction.

Eyebrow label in myent-eyebrow styling: "MY-ENT · SYDNEY CBD"

Main headline in font-serif text-display font-medium text-neutral-800: "You have been referred to the right place."

Subtext: "If your appointment is at " in font-serif text-2xl font-medium text-neutral-700, followed by "My-ENT" in font-serif text-3xl font-semibold text-teal-400, followed by ", 135 Macquarie Street, Sydney CBD — you are in the right place." in font-serif text-2xl font-medium text-neutral-700. All on one line, wrapping naturally on mobile.

Two large binary decision buttons, minimum height 60px, side by side on desktop and stacked on mobile. Button 1 in myent-btn-primary reading "Yes — My-ENT, 135 Macquarie Street" linking to /appointments. Button 2 in myent-btn-outline reading "No — find another location" linking to /contact/finding-the-right-contact.

No other content between the headline and the buttons. The four action cards follow below the binary decision buttons: Upload a referral or imaging, Fees and first-visit questions, Post-operative concern. The Request an appointment action card has been removed from this section as it is covered by Button 1 above.

### Homepage subspecialty strip — confirmed order

The five subspecialty pills on the homepage appear in this confirmed order. Do not alter without explicit instruction.

1. General and Paediatric ENT
2. Rhinology and Anterior Skull Base
3. Otology and Hearing Conditions
4. Sleep Apnoea and Snoring
5. Head and Neck Care

### Homepage location section — confirmed design

The homepage location section uses two equal-height cards side by side on desktop, stacked on mobile.

Card 1 — Contact details card. Displays the following in prominent styling using myent-card: practice name "My-ENT" in font-serif text-3xl; address "Suite 303, Level 3, BMA House, 135 Macquarie Street, Sydney CBD NSW 2000" in text-lg text-neutral-700; phone "02 9247 1762" in text-xl font-medium text-teal-400 as a clickable tel: link; email "contact@my-ent.com.au" in text-lg text-teal-400 as a clickable mailto: link; opening hours "Monday to Friday, 8:30am – 5:00pm" in text-base text-neutral-500.

Card 2 — Location visual card. A single myent-card with overflow-hidden and no internal padding. The BMA House photograph (public/images/bma-house-myent.jpg) occupies 75% of the card height using next/image with object-cover. The Google Maps iframe centred on 135 Macquarie Street Sydney NSW 2000 occupies the remaining 25% of the card height with no border. No text appears in this card. Do not alter this split without instruction.

Both cards use CSS grid with items-stretch to maintain equal height on desktop.

### What Genie is not used for on this project

Genie is not used for patient-facing web content, the public appointment request flow, or document upload. Do not attempt to build direct Genie API integrations in the website. The handoff from website to Genie is manual: reception receives a structured email or dashboard notification from the website form, reviews it, and creates the Genie booking.

---

## 6. Page quality standard

Pages are built only when they meet all three of the following criteria. A page that meets only one or two should not be built until the remaining criteria are satisfied.

**Clear search intent.** There is a realistic patient or GP search query that this page answers better than any other page on the site. Generic pages that duplicate content from other pages do not meet this standard.

**Clinical or operational usefulness.** The page either informs a patient about a condition or procedure in a way that helps them make a decision, or it reduces a category of repetitive receptionist enquiry.

**Internal linking purpose.** The page links meaningfully to at least two other pages on the site and is linked to from at least two other pages. An orphaned page that adds indexed depth but serves no internal navigation purpose should not be built.

These three criteria replace the "57 pages" target from earlier versions of this document. Page count is not a goal. Useful, well-linked, clinically sound pages are the goal.

---

## 7. Technology stack

### Versions

```
Next.js:      14.x   App Router only — not Pages Router
TypeScript:   5.x    strict mode throughout
Tailwind CSS: 3.x
Node:         20 LTS
Package mgr:  npm
Deployment:   Vercel standard — do NOT use output: 'export'
```

### Initialisation command

```bash
npx create-next-app@latest my-ent \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*"
```

### Dependencies — install immediately after scaffolding

```bash
npm install next-sitemap clsx
npm install -D prettier prettier-plugin-tailwindcss @types/node
```

Do not install `next-seo`. The App Router uses native `Metadata` exports. `next-seo` is a Pages Router library.

### npm scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build && next-sitemap",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "format": "prettier --write 'src/**/*.{ts,tsx,css}'"
  }
}
```

---

## 8. Configuration files

### next.config.ts

```ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Do NOT add output: 'export' — Vercel handles optimisation natively.
  // Static export disables next/image optimisation on Vercel.
  trailingSlash: false,
  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [],
  },
  experimental: {
    typedRoutes: true, // catches broken internal links at compile time
  },
}

export default nextConfig
```

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./src/*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### .eslintrc.json

```json
{
  "extends": ["next/core-web-vitals", "next/typescript"],
  "rules": {
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "react/no-unescaped-entities": "error"
  }
}
```

### prettier.config.js

```js
module.exports = {
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  printWidth: 100,
  plugins: ['prettier-plugin-tailwindcss'],
}
```

### next-sitemap.config.js

```js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://my-ent.com.au',
  generateRobotsTxt: true,
  exclude: ['/patient-portal', '/patient-portal/*'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/', disallow: ['/api/', '/patient-portal/'] },
    ],
  },
  transform: async (_config, pagePath) => {
    const priorityMap = {
      '/': 1.0,
      '/conditions': 0.9,
      '/procedures': 0.9,
      '/about/our-surgeons': 0.9,
      '/appointments/fees-and-medicare': 0.9,
      '/appointments/your-first-visit': 0.85,
      '/for-gps': 0.85,
    }
    return {
      loc: pagePath,
      changefreq: priorityMap[pagePath] ? 'weekly' : 'monthly',
      priority: priorityMap[pagePath] ?? 0.7,
      lastmod: new Date().toISOString(),
    }
  },
}
```

---

## 9. Design system

### tailwind.config.ts

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          50:  '#EAF3F6', // section backgrounds, pill labels
          100: '#B8D8E3', // subtle borders on light backgrounds
          200: '#7FBDD0', // borders, dividers, icon strokes
          300: '#4E9AB5', // hover states
          400: '#4A7C8F', // PRIMARY — CTAs, heading accents (matches My-ENT business card blue-teal)
          500: '#3A6272', // pressed / active darken
          600: '#2A4A57', // deep tints
        },
        neutral: {
          50:  '#FAFAFA', // page background
          100: '#F5F5F5', // light section backgrounds
          200: '#DDDDDD', // borders
          300: '#BBBBBB', // disabled
          400: '#888888', // tertiary text
          500: '#666666', // secondary text
          600: '#444444', // body text
          700: '#2A2A2A', // strong body text
          800: '#1A1A1A', // headings
        },
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans:  ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ['3rem',    { lineHeight: '1.1',  letterSpacing: '-0.02em' }],
        '4xl':   ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        '3xl':   ['1.875rem',{ lineHeight: '1.2',  letterSpacing: '-0.01em' }],
        '2xl':   ['1.5rem',  { lineHeight: '1.3'  }],
        'xl':    ['1.25rem', { lineHeight: '1.4'  }],
        base:    ['1rem',    { lineHeight: '1.7'  }],
        sm:      ['0.875rem',{ lineHeight: '1.6'  }],
        xs:      ['0.75rem', { lineHeight: '1.5',  letterSpacing: '0.06em' }],
      },
      maxWidth: {
        site: '72rem', // 1152px
      },
    },
  },
  plugins: [],
}

export default config
```

### src/styles/globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --font-cormorant: 'Cormorant Garamond';
    --font-dm-sans: 'DM Sans';
  }
  html { @apply scroll-smooth; }
  body { @apply bg-neutral-50 font-sans text-base text-neutral-600 antialiased; }
  h1, h2, h3 { @apply font-serif font-medium text-neutral-800; }
  h4, h5, h6 { @apply font-sans font-medium text-neutral-700; }
}

@layer components {
  .myent-container  { @apply mx-auto max-w-site px-6 lg:px-8; }
  .myent-section    { @apply py-16 lg:py-20; }
  .myent-eyebrow    { @apply font-sans text-xs font-medium uppercase tracking-widest text-teal-400; }
  .myent-card       { @apply rounded-xl border border-neutral-200 bg-white p-6 transition-colors duration-150 hover:border-teal-200; }
  .myent-btn-primary  { @apply inline-flex items-center gap-2 rounded-lg bg-teal-400 px-6 py-3 font-sans text-sm font-medium text-white transition-colors duration-150 hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-400; } /* Primary colour: #4A7C8F — matches My-ENT business card blue-teal */
  .myent-btn-outline  { @apply inline-flex items-center gap-2 rounded-lg border border-teal-200 px-6 py-3 font-sans text-sm font-medium text-teal-400 transition-colors duration-150 hover:bg-teal-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-400; }
}
```

### Font loading — src/app/layout.tsx

```tsx
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
```

---

## 10. Data types — define before writing any components

```ts
// src/content/types.ts

export interface Surgeon {
  id: string
  name: string
  slug: string
  role: string
  credentials: string
  fellowships: string[]
  hospitals: string[]
  researchNote?: string  // Dr Banks only — strictly Rule 3 compliant
  initials: string
  imageSrc?: string
}

export interface Condition {
  id: string
  title: string
  clinicalTerm?: string
  slug: string
  category: 'nose-sinuses' | 'ear' | 'throat' | 'paediatric'
  publishingTier: 'C'                 // all condition pages are Tier C
  metaTitle: string
  metaDescription: string
  heroSummary: string
  symptoms: string[]
  causes: string[]
  whenToSeekHelp: string
  treatmentOverview: string           // no outcome guarantees
  relatedProcedures: string[]         // condition ids
  relatedSurgeons: string[]           // surgeon ids
}

export interface Procedure {
  id: string
  title: string
  slug: string
  publishingTier: 'C'                 // all procedure pages are Tier C
  metaTitle: string
  metaDescription: string
  heroSummary: string
  indications: string[]
  whatToExpect: string                // no outcome guarantees
  recoveryOverview: string            // no outcome guarantees
  relatedConditions: string[]
  performedBy: string[]
}

export interface StaffMember {
  id: string
  name: string
  slug: string
  role: string                  // "Nurse Practitioner — Head & Neck / Rhinology"
  qualifications: string[]      // ["Master of Nursing (Sydney University, 2016)"]
  bio: string                   // full biography — verified from live site
  initials: string
  imageSrc?: string
  publishingTier: 'B'           // requires individual sign-off before publishing
}

export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}
```

---

## 11. Repository structure

```
my-ent/
├── CLAUDE.md                                     ← this file
├── HOMEPAGE_CONTENT.md                           ← final homepage copy
├── DESIGN_SYSTEM.md                              ← extended design docs
│
├── src/
│   ├── app/
│   │   ├── layout.tsx                            ← fonts, Nav, Footer, root metadata
│   │   ├── page.tsx                              ← homepage ← BUILD FIRST
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   │
│   │   ├── about/
│   │   │   ├── page.tsx
│   │   │   ├── our-surgeons/page.tsx             ← Tier B
│   │   │   ├── dr-catherine-banks/page.tsx       ← Tier B
│   │   │   ├── dr-lyndon-chan/page.tsx            ← Tier B
│   │   │   ├── dr-june-huang/page.tsx            ← Tier B
│   │   │   ├── dr-rithvik-reddy/page.tsx         ← Tier B
│   │   │   ├── justine-oates/page.tsx            ← Tier B  NP profile
│   │   │   ├── research-and-innovation/page.tsx  ← Tier B  ★ exclusive
│   │   │   └── our-locations/page.tsx            ← Tier A
│   │   │
│   │   ├── conditions/
│   │   │   ├── page.tsx                          ← Tier A (index only)
│   │   │   ├── sinusitis/page.tsx                ← Tier C  PRIORITY 4
│   │   │   ├── nasal-polyps/page.tsx             ← Tier C  PRIORITY 5
│   │   │   ├── blocked-nose/page.tsx             ← Tier C
│   │   │   ├── hayfever-allergic-rhinitis/page.tsx ← Tier C
│   │   │   ├── skull-base-conditions/page.tsx    ← Tier C  ★ exclusive
│   │   │   ├── nosebleeds/page.tsx               ← Tier C
│   │   │   ├── post-nasal-drip/page.tsx          ← Tier C
│   │   │   ├── ear-infections/page.tsx           ← Tier C
│   │   │   ├── hearing-loss/page.tsx             ← Tier C
│   │   │   ├── tinnitus/page.tsx                 ← Tier C
│   │   │   ├── vertigo-dizziness/page.tsx        ← Tier C
│   │   │   ├── wax-impaction/page.tsx            ← Tier C
│   │   │   ├── tonsillitis/page.tsx              ← Tier C
│   │   │   ├── snoring-sleep-apnoea/page.tsx     ← Tier C
│   │   │   ├── voice-disorders/page.tsx          ← Tier C
│   │   │   ├── swallowing-problems/page.tsx      ← Tier C
│   │   │   ├── reflux-lpr/page.tsx               ← Tier C
│   │   │   ├── cough/page.tsx                    ← Tier C
│   │   │   ├── paediatric-ear-infections/page.tsx ← Tier C
│   │   │   ├── paediatric-tonsillitis/page.tsx   ← Tier C
│   │   │   ├── paediatric-snoring-osa/page.tsx   ← Tier C
│   │   │   ├── paediatric-blocked-nose/page.tsx  ← Tier C
│   │   │   └── paediatric-hearing-loss/page.tsx  ← Tier C
│   │   │
│   │   ├── procedures/
│   │   │   ├── page.tsx                          ← Tier A (index only)
│   │   │   ├── endoscopic-sinus-surgery/page.tsx ← Tier C  PRIORITY 6
│   │   │   ├── septoplasty-turbinate-reduction/page.tsx ← Tier C
│   │   │   ├── adenoidectomy/page.tsx            ← Tier C
│   │   │   ├── skull-base-surgery/page.tsx       ← Tier C  ★ exclusive
│   │   │   ├── transsphenoidal-pituitary-surgery/page.tsx ← Tier C  ★ exclusive
│   │   │   ├── tonsillectomy/page.tsx            ← Tier C
│   │   │   ├── snoring-surgery-uppp/page.tsx     ← Tier C
│   │   │   ├── sleep-endoscopy-dise/page.tsx     ← Tier C
│   │   │   ├── microlaryngoscopy/page.tsx        ← Tier C
│   │   │   ├── grommets/page.tsx                 ← Tier C
│   │   │   ├── myringoplasty/page.tsx            ← Tier C
│   │   │   ├── nasendoscopy/page.tsx             ← Tier C
│   │   │   └── wax-microsuction/page.tsx         ← Tier C
│   │   │
│   │   ├── appointments/
│   │   │   ├── page.tsx                          ← Tier A  BUILT
│   │   │   ├── your-first-visit/page.tsx         ← Tier A  BUILT
│   │   │   ├── fees-and-medicare/page.tsx        ← Tier A  BUILT
│   │   │   ├── referral-information/page.tsx     ← Tier A  BUILT
│   │   │   ├── changes/page.tsx                  ← Tier A  BUILT
│   │   │   └── sinus-assessment/page.tsx         ← Tier A  BUILT
│   │   │
│   │   ├── patient-info/
│   │   │   ├── page.tsx                          ← Tier A  BUILT
│   │   │   ├── before-your-procedure/page.tsx    ← Tier A  BUILT
│   │   │   ├── after-your-procedure/page.tsx     ← Tier A  BUILT
│   │   │   ├── resources-and-downloads/page.tsx  ← Tier A  BUILT (placeholder)
│   │   │   └── faq/page.tsx                      ← Tier A  BUILT
│   │   │
│   │   ├── for-gps/                              ★ exclusive
│   │   │   ├── page.tsx                          ← Tier A  PRIORITY 7
│   │   │   ├── subspecialty-guide/page.tsx       ← Tier B
│   │   │   └── gp-resources/page.tsx             ← Tier A
│   │   │
│   │   ├── contact/
│   │   │   ├── page.tsx                          ← Tier A  BUILT
│   │   │   └── finding-the-right-contact/page.tsx ← Tier A  BUILT
│   │   └── privacy-policy/page.tsx               ← Tier A  BUILT
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Nav.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── SchemaOrg.tsx
│   │   ├── homepage/
│   │   │   ├── Hero.tsx
│   │   │   ├── ActionBar.tsx          ← four front-door actions (see Section 5)
│   │   │   ├── SubspecialtyStrip.tsx
│   │   │   ├── SurgeonGrid.tsx
│   │   │   ├── ConditionsGrid.tsx
│   │   │   ├── WhyMyEnt.tsx
│   │   │   ├── LocationsCard.tsx
│   │   │   ├── ReviewsStrip.tsx
│   │   │   └── GpStrip.tsx
│   │   ├── shared/
│   │   │   ├── SurgeonCard.tsx
│   │   │   ├── ConditionCard.tsx
│   │   │   ├── ProcedureCard.tsx
│   │   │   ├── SectionHeader.tsx
│   │   │   ├── TrustBar.tsx
│   │   │   ├── BreadcrumbNav.tsx
│   │   │   └── UrgentAlert.tsx        ← post-op concern / acute escalation component
│   │   └── templates/
│   │       ├── ConditionPageTemplate.tsx
│   │       └── ProcedurePageTemplate.tsx
│   │
│   ├── content/
│   │   ├── types.ts                   ← define first, before any components
│   │   ├── surgeons.ts
│   │   ├── staff.ts                   ← Justine Oates and future non-surgeon team members
│   │   ├── conditions.ts
│   │   ├── procedures.ts
│   │   └── navigation.ts
│   │
│   └── styles/
│       └── globals.css
│
├── public/images/                     ← naming: [subject]-[context]-sydney.webp
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
├── .eslintrc.json
├── prettier.config.js
└── next-sitemap.config.js
```

---

## 12. SEO rules

### Title tag formula
`[Page Topic] Sydney | [Clinical Context] | My-ENT`

| Page | Example title |
|---|---|
| Homepage | `ENT Surgeons Sydney \| Rhinology & Skull Base \| My-ENT` |
| Sinusitis | `Sinusitis Treatment Sydney \| Sinus Specialist \| My-ENT` |
| ESS | `Endoscopic Sinus Surgery Sydney \| ESS Surgeon \| My-ENT` |
| Fees | `Specialist Fees & Medicare Rebates \| ENT Sydney \| My-ENT` |
| Dr Banks | `Dr Catherine Banks \| Rhinologist Sydney \| My-ENT` |

### Meta descriptions
140–160 characters. Must include "Sydney" and the primary clinical search term. Patient audience. No superlatives. No outcome claims.

### Schema by page type

| Page type | `@type` | Required fields |
|---|---|---|
| Homepage | `MedicalBusiness` + `MedicalClinic` | name, address, telephone, medicalSpecialty, availableService |
| Surgeon | `Physician` | name, medicalSpecialty, alumniOf, affiliation, worksFor |
| Condition | `MedicalCondition` | name, alternateName, signOrSymptom, possibleTreatment |
| Procedure | `MedicalProcedure` | name, procedureType, bodyLocation, preparation, followup |
| For GPs | `MedicalOrganization` | name, medicalSpecialty, availableService |

### Internal linking (mandatory)
Every condition page links to its related procedure(s) and the surgeon(s) who treat it. Every procedure page links to the surgeon(s) who perform it and the condition(s) it treats. Every surgeon profile links to their subspecialty conditions and procedures. No page should be an orphan — every page is linked from at least two other pages.

---

## 13. Development workflow

### Git push helper script

A `git-push.sh` script is located in the project root. Use this instead of manual git commands to avoid clipboard tilde issues on Mac. Usage:

```bash
bash git-push.sh "Your commit message"
```

This stages all changes with `git add -A`, commits with the provided message, and pushes to origin main in a single command. If nothing has changed, it exits cleanly with "Nothing to commit."

### Before starting any session

```bash
git pull origin main
npm run lint     # must be zero errors
npm run build    # must succeed
```

### Build priority order

| Priority | Deliverable | Publishing tier |
|---|---|---|
| 1 | Scaffold + all config files + globals.css + fonts + Nav + Footer + content/types.ts | — |
| 2 | Homepage — all sections populated from HOMEPAGE_CONTENT.md | A |
| 3 | Appointment request + Your First Visit + Fees & Medicare | A |
| 4 | Sinusitis condition page (validates ConditionPageTemplate) | C — flag for sign-off |
| 5 | Nasal Polyps condition page | C — flag for sign-off |
| 6 | Endoscopic Sinus Surgery procedure page (validates ProcedurePageTemplate) | C — flag for sign-off |
| 7 | All four surgeon profile pages | B — flag for credential verification |
| 8 | For GPs hub | A + B |
| 9 | Remaining condition pages | C — flag for sign-off |
| 10 | Remaining procedure pages | C — flag for sign-off |
| 11 | Privacy Policy page (/privacy-policy) — required before intake form goes live | A |
| 12 | Remaining about, patient-info, appointments pages | A |

### After every page
```bash
npm run build   # zero TypeScript errors
npm run lint    # zero ESLint warnings or errors
```

### Before every commit
```bash
npm run format
npm run lint
git add -p      # review every change before staging
```

### Performance targets (preferred defaults, not hard blockers)

Lighthouse 90+ on Performance, 95+ on Accessibility, 95+ on Best Practices, 95+ on SEO. These are targets to pursue, not release criteria. A page that scores 88 on Performance but is clinically accurate, correctly structured, and operationally sound is better than a page that scores 96 but has been simplified to the point of being unhelpful. Flag performance regressions for investigation; do not sacrifice content quality to chase a score.

LCP < 2.5s, CLS < 0.1, INP < 200ms. Achieve via `next/image` with explicit dimensions, `next/font` with `display: swap`, and no render-blocking scripts above the fold.

---

## 14. Sinus pre-appointment questionnaire

The full build specification for the rhinology and nasal pre-appointment questionnaire is contained in a separate file:

**`SINUS_QUESTIONNAIRE_SPEC.md`** — located in the project root alongside this file.

Read this file in full before building any component of the questionnaire. The specification covers the complete nine-step instrument including the EPOS 2020 symptom classification component, all validated instruments (SNOT-22, NOSE, TNSS, RQLQ, ESS), the two-section output architecture (patient-facing confirmation only; full graded clinician email), session management, save-and-return functionality, and implementation notes for Claude Code.

Critical rules that apply to the questionnaire without exception:
- No EPOS classification, severity grade, instrument score, or management recommendation is ever displayed to the patient on any screen.
- All clinical output appears exclusively in the structured clinician email sent to justineoates@my-ent.com.au.
- The questionnaire is built at src/app/appointments/sinus-assessment/page.tsx.
- The Privacy Policy at /privacy-policy must include the questionnaire data collection paragraph before the questionnaire goes live.

---

## 15. Planned future development

The following items have been discussed and specified but not yet built. They are recorded here so future Claude Code sessions can pick them up precisely.

**PDF clinical record generation.** The sinus questionnaire API route generates a clean clinical PDF document alongside the clinician email on every form submission. The PDF is a structured record of patient-reported data only — no severity grades, no triage flags, no clinical recommendations, and no management suggestions appear anywhere in the document. The PDF is attached to the clinician email sent to justineoates@my-ent.com.au and is never stored on the server and never sent to the patient. The PDF filename format is MyENT_Assessment_[Surname]_[DDMMYYYY].pdf so it is immediately identifiable when uploaded into Genie. The PDF is designed for manual upload into the patient's Genie clinical record.

PDF contents in order: My-ENT header with address and patient details; provisional EPOS 2020 classification labelled "for clinical review only"; SNOT-22 presented in five validated subdomains (rhinological symptoms items 1-6, extranasal rhinological symptoms items 7-9, ear and facial symptoms items 10-11, psychological dysfunction items 12-18, sleep dysfunction items 19-22) with individual item scores and subdomain totals; overall SNOT-22 total; NOSE scale all five items with individual scores and total out of 100; TNSS if completed with individual scores and total; RQLQ if completed with mean score and domain scores; ESS if completed with individual scores and total; medical history summary; additional concerns verbatim; footer noting scores require clinical interpretation by the treating clinician. No severity grades appear in the PDF — severity grades and triage flags remain exclusively in the clinician email.

Library: @react-pdf/renderer — generates PDF server-side from React components, TypeScript-compatible, no external API calls required.

**Token-based questionnaire access — full specification — REVISED.**

Scope: The sinus pre-appointment questionnaire at /appointments/sinus-assessment is available as an option for all four My-ENT surgeons. Access is controlled by reception who generate the invitation link. The clinician report destination email is specified by reception at the time of link generation — it is not hardcoded. For Dr Catherine Banks's patients, justineoates@my-ent.com.au is the default pre-filled destination. For other surgeons' patients, reception enters the appropriate clinician email address manually. Rule 9 still applies to Justine specifically — her email only appears as the destination for Dr Banks's patients. The questionnaire instrument itself is clinically valid for all four surgeons' patients.

Component 1 — Staff invitation page at /staff/send-questionnaire. Password protected via environment variable STAFF_PASSWORD. Not linked from public site, excluded from sitemap and robots.txt. Reception enters: patient full name, patient email, appointment date, clinician report email address (mandatory — pre-filled with justineoates@my-ent.com.au for Dr Banks's patients, manually entered for other surgeons), then clicks Send. System generates a unique six-digit numeric access code and URL token, stores in Vercel KV with 72-hour expiry, sends invitation email to patient automatically. Reception sees confirmation: "Questionnaire link sent to [email]. Link expires in 72 hours."

Component 2 — Patient invitation email. Sent from noreply@my-ent.com.au. Subject: "Pre-appointment questionnaire — Dr Catherine Banks — My-ENT." Body includes patient first name, purpose statement, access code displayed prominently, questionnaire link button, 72-hour expiry notice, practice contact details. Reply-to: justineoates@my-ent.com.au.

Component 3 — Token validation on questionnaire page. No token present: display neutral message "This questionnaire is sent by invitation only. If you have been asked to complete a pre-appointment assessment, please use the link provided in your email from My-ENT. If you need assistance, please call us on 02 9247 1762." Token expired: display automated resend screen with single email field — checks email against KV database, generates new token if matched, sends new invitation email without staff involvement. Token valid: display six-digit code entry field before any clinical questions. Three incorrect attempts: "Incorrect code. Please call us on 02 9247 1762 and we will help you directly." Correct code: questionnaire proceeds with patient first name pre-populated from token record.

Component 4 — Clinician report routing. On submission, structured clinician report email and PDF sent to the clinician email address specified by reception at link generation — stored in the token record in Vercel KV. This is not hardcoded. For Dr Banks's patients this will be justineoates@my-ent.com.au. For other surgeons' patients it will be whatever email reception entered. Subject line includes patient name and appointment date from token record.

Environment variables required: STAFF_PASSWORD, KV_REST_API_URL, KV_REST_API_TOKEN, EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS, SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, EMAIL_TO (justineoates@my-ent.com.au).

robots.txt: Add /staff/ to disallow list in next-sitemap.config.js.

Build sequence: Session A — Vercel KV setup and staff invitation page. Session B — Token validation layer on questionnaire page. Session C — Clinician report routing update to pull patient details from token record.

**Token-based questionnaire access.**

Architecture: Unique time-limited access links generated by Justine Oates or reception for each patient. The questionnaire page validates the token silently before rendering — no login screen, no password, no account creation. The patient experience is identical to accessing a normal webpage.

Token generation interface: A private password-protected page accessible only to Justine and reception. Fields: patient full name, email address, appointment date, questionnaire type (sinus / hearing / tinnitus / vestibular). On submission generates a unique token stored in Vercel KV with the configured expiry and a single-use flag.

Token expiry logic: If appointment is within 48 hours, token expires at midnight the night before the appointment. If appointment is further away, token is valid for 72 hours from time of generation. Justine sees the expiry information in the token generation interface.

Patient delivery: The link is sent to the patient by email or SMS in the format https://my-ent.com.au/appointments/sinus-assessment?token=abc123xyz. The delivery message reads verbatim: "Your My-ENT pre-appointment questionnaire is ready to complete. Please use the link below — it is valid for 48 hours. If the link expires before you have a chance to complete it, simply call us on 02 9247 1762 and we will send a new one."

Expired link screen: Displays a single email input field with the message "This link has expired. Enter your email address below and we will send you a new one straight away." On submission the system checks the email against the token database. If matched, generates a new token and sends a new link automatically. If not matched, displays "We could not find a record matching that email address. Please call us on 02 9247 1762 and we will help you directly." The automated resend loop requires no staff involvement.

Security: The automated resend only triggers if the email matches an existing patient record in the token database. Justine must have previously generated a token for that patient. Unknown email addresses are directed to the phone number, not given access.

Questionnaire type routing: Tokens are tagged with questionnaire type. Resend emails use reply-to of justineoates@my-ent.com.au for sinus assessments and contact@my-ent.com.au for all others.

**Token-based questionnaire access.** The sinus questionnaire is currently accessible at its direct URL without authentication. The planned implementation restricts access to patients who have received a unique time-limited link generated by Justine Oates or reception. The token generation interface is a private password-protected page. Tokens are stored in Vercel KV with a 14-day expiry and a single-use flag. On submission, the token is marked as used and cannot be reused.

**Longitudinal SNOT-22 tracking.** The questionnaire submission architecture will be extended to support repeat SNOT-22 assessments for post-treatment progress monitoring. Each submission is associated with a clinical context label — pre-appointment, 3-month post-ESS, 6-week post-dupilumab, and so on — which appears in the clinician email subject line. This creates a longitudinal dataset of SNOT-22 scores per patient that documents treatment response objectively.

**Integration with Justine Oates clinical database.** The questionnaire patient-reported outcome data will be integrated with objective clinical scoring data entered by Justine — serum IgE, peripheral eosinophil count, Lund-Mackay CT score, and Lund-Kennedy endoscopic score. The combined dataset supports EPOS 2020 endotype classification, biological therapy candidacy flagging, and treatment response tracking. The data structure and automation logic will be reviewed when Justine's database is shared.

**Ear questionnaire.** A separate pre-appointment questionnaire for patients presenting with ear, hearing, and vestibular concerns. Validated instruments to include the Glasgow Benefit Inventory and condition-specific tools as appropriate.

**Cough and reflux questionnaire.** A separate pre-appointment questionnaire for patients presenting with chronic cough, laryngopharyngeal reflux, and voice disorders.

**GP referral pathway optimisation.**

Build a dedicated GP referral page at /for-gps/refer-now designed specifically for GP practices to bookmark or save for frequent use. The page contains: a single prominent referral submission button at the top linking to the appointment request form pre-populated for referral type; the fax number 02 9247 2141 displayed prominently; the email address contact@my-ent.com.au as a clickable mailto link pre-populated with subject "Referral — [Patient Name]"; a downloadable one-page referral template in PDF format; the subspecialty guide. The URL /for-gps/refer-now should be short and memorable. A QR code linking to this URL can be used on any printed referral materials distributed to GP practices.

**Post-consultation condition information emails — internal use only.**

The post-consultation email opt-in captured in the questionnaire consent screen is for internal clinical use only — not automated patient-facing marketing. When a patient opts in, a flag appears in the clinician email notifying Justine that the patient has consented to receive follow-up information. Justine sends relevant condition information manually at the appropriate clinical moment. The opt-in checkbox wording is: "I am happy for the My-ENT clinical team to send me relevant information about my condition after my appointment." This is a clinical communication tool, not a marketing tool.

**Post-consultation condition information emails.** Patients who opt in during the questionnaire consent screen receive a single post-consultation email within 24 to 48 hours containing links to the relevant My-ENT condition and procedure pages. Content is informational only, AHPRA-compliant, and includes an unsubscribe mechanism compliant with the Australian Spam Act 2003.

**Email environment variable naming — IMPORTANT.** Two API routes exist for email sending and use different environment variable naming conventions. The sinus questionnaire route uses EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS, EMAIL_TO. The appointment changes route uses SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM. These must be standardised to a single naming convention before production deployment. A Claude Code session should align both routes to use the same variable names before configuring credentials in Vercel.

**Email configuration for questionnaire submission.** The questionnaire uses Nodemailer with Gmail SMTP for email delivery. A .env.local file is required locally and environment variables must be set in Vercel for production. Do not use contact@my-ent.com.au as the sending account while it is in active use by the practice manager. The recommended approach is either a dedicated noreply@my-ent.com.au Google Workspace account, or Resend as a dedicated email delivery service. Environment variables required: EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS, EMAIL_TO (justineoates@my-ent.com.au). The .env.local file must never be committed to GitHub — confirm it is listed in .gitignore as .env*.local before adding credentials.

**SEO improvement priorities — implement before domain switch.**

Priority 1 — Condition page FAQ sections with schema markup. The five highest-traffic conditions — sinusitis, nasal polyps, blocked nose, hearing loss, and tinnitus — each need an embedded FAQ section at the base of the page containing five to seven condition-specific questions and answers using @type:FAQPage schema markup. Every FAQ section must include this standard closing statement verbatim: "Individual surgeons within My-ENT may approach assessment and management differently based on their subspecialty training and clinical experience. Your surgeon will discuss the most appropriate pathway for your specific situation at your consultation." This statement is AHPRA-compliant and protects against any implication that a single answer applies universally across all four surgeons.

Priority 2 — Mobile optimisation. A systematic review of every key page at 375px width before the domain switch. Critical pages to review: homepage binary decision buttons (must be full-width and easily tappable), questionnaire instrument tables (likely to overflow on small screens), team cards, location section, navigation menu.

Priority 3 — Meta description audit. Confirm all 62 pages have populated meta descriptions of 140-160 characters including "Sydney" and the primary clinical search term before the domain switch.

Priority 4 — FAQ schema markup on the FAQ page at /patient-info/faq. The existing 50-question FAQ page needs @type:FAQPage schema markup applied to increase likelihood of individual answers appearing in Google AI Overviews.

Priority 5 — Google Business Profile update. Immediately after domain switch: submit sitemap to Google Search Console, update Google Business Profile website URL to my-ent.com.au, confirm NAP consistency — Suite 303, Level 3, BMA House, 135 Macquarie Street, Sydney CBD NSW 2000, 02 9247 1762 — exactly matching the website and Google Business Profile.

**DNS domain switch guidance.** When connecting my-ent.com.au to Vercel, add only the Vercel-provided DNS records alongside the existing Google Workspace MX records. Do not delete or replace any existing DNS records. Google Workspace email accounts — catherinebanks@my-ent.com.au, lyndonchan@my-ent.com.au, justineoates@my-ent.com.au, contact@my-ent.com.au — are completely unaffected by the Vercel domain connection. Share a screenshot of current DNS settings before making any changes so the exact records to add can be confirmed. DNS propagation takes 15 minutes to a few hours. Cancel Wix immediately after propagation confirms the Vercel site is live.

**Pre-launch checklist before DNS switch:**
1. Clinical sign-offs on all Tier C condition and procedure pages from Dr Banks
2. Individual Tier B sign-offs from Dr Chan, Dr Huang, Dr Reddy, and Justine Oates on their profile pages
3. End-to-end test of sinus questionnaire email delivery — confirm clinician report arrives at justineoates@my-ent.com.au in correct format
4. Add sinus questionnaire to the Appointments dropdown in the navigation
5. Confirm homepage and appointments page render correctly on mobile
6. Connect custom domain my-ent.com.au in Vercel Settings → Domains
7. Cancel Wix subscription after successful DNS propagation

**My Medical Story paediatric storybook app.** A separate standalone platform (mymedicalstory.com.au). Stack: Next.js, TypeScript, Tailwind CSS, Supabase, ElevenLabs, Vercel. Phase 1 story types: grommets, tonsillectomy, adenoidectomy, older child general. This is a separate project from the My-ENT website and is not built within this repository.

---

*Last updated: April 2026 — Session 17 complete. Contact directory redesigned with Dr Banks listed first in private rooms section. Colour palette updated to business card blue-teal #4A7C8F. WCAG AA fix on eyebrow labels. Logo extracted from LOGO2.pdf — myent-logo-teal.png in use in navigation. git-push.sh helper script added to project root. 62 pages built. Pre-launch SEO priorities documented. Justine Oates scope of practice Rule 9 added. Token-based questionnaire access specification revised — Dr Banks patients only, reception-initiated, six-digit access code. This is the single source of truth for all project decisions. Update the date when this file changes.*
