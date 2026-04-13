'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

type AssessmentStep = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type PatientTypeOption = 'new-patient' | 'existing-same-concern' | 'existing-new-concern' | '';
type DurationOption =
  | 'less-than-10-days'
  | 'between-10-days-and-12-weeks'
  | 'more-than-12-weeks'
  | 'come-and-go'
  | '';
type SymptomFreeIntervalOption = 'yes' | 'no' | '';
type EpisodeFrequencyOption = '1-to-3' | '4-or-more' | 'not-sure' | '';
type PriorSurgeryOption = 'yes' | 'no' | 'not-sure' | '';
type CurrentSprayOption = 'steroid' | 'other' | 'no' | '';
type BiologicTherapyOption = 'yes' | 'no' | 'not-sure' | '';
type EposClassification = 'ARS' | 'RARS' | 'CRS Adult' | 'CRSc Paediatric' | 'Insufficient data';

interface ResponseScaleOption {
  value: number;
  label: string;
}

interface InstrumentTableProps {
  itemLabels: readonly string[];
  responseScale: readonly ResponseScaleOption[];
  responses: number[];
  sectionTitle: string;
  onSelect: (index: number, value: number) => void;
}

interface RqlqDomain {
  readonly name: string;
  readonly startIndex: number;
  readonly items: readonly string[];
}

interface PersonalDetails {
  fullName: string;
  email: string;
  dateOfBirth: string;
  phone: string;
  postConsultationOptIn: boolean;
}

interface EposSymptoms {
  cardinalSymptoms: string[];
  duration: DurationOption;
  symptomFreeInterval: SymptomFreeIntervalOption;
  episodeFrequency: EpisodeFrequencyOption;
  provisionalClassification: EposClassification;
}

interface MedicalHistory {
  relevantConditions: string[];
  priorSinusSurgery: PriorSurgeryOption;
  priorSurgeryDetails: string;
  currentIntranasalTreatment: CurrentSprayOption;
  biologicTherapy: BiologicTherapyOption;
}

interface InstrumentResponses {
  snot22: number[];
  snot22Total: number | null;
  nose: number[];
  noseScore: number | null;
  tnss: number[];
  tnssTotal: number | null;
  rqlq: number[];
  rqlqMean: number | null;
  ess: number[];
  essTotal: number | null;
}

interface SubmissionState {
  additionalConcerns: string;
  clinicianEmailSubject: string;
  clinicianEmailBody: string;
}

interface SinusAssessmentFormData {
  patientType: PatientTypeOption;
  personalDetails: PersonalDetails;
  eposSymptoms: EposSymptoms;
  medicalHistory: MedicalHistory;
  instruments: InstrumentResponses;
  submission: SubmissionState;
}

const TOTAL_STEPS = 9;
const SESSION_WARNING_MS = 25 * 60 * 1000;
const SESSION_EXPIRY_MS = 30 * 60 * 1000;

const CARDINAL_SYMPTOMS = [
  'Blocked nose or nasal congestion',
  'Runny nose or mucus dripping down the back of your throat',
  'Pain or pressure in your face, cheeks, or forehead',
  'Reduced or lost sense of smell',
] as const;

const RELEVANT_CONDITIONS = [
  'Asthma',
  'Allergies (to pollen, dust mites, animals, or other environmental triggers)',
  'Aspirin or anti-inflammatory sensitivity',
  'Cystic fibrosis',
  'An immune system condition or immunodeficiency',
  'None of the above',
] as const;

const SNOT22_SCALE: readonly ResponseScaleOption[] = [
  { value: 0, label: 'No problem' },
  { value: 1, label: 'Very mild problem' },
  { value: 2, label: 'Mild or slight problem' },
  { value: 3, label: 'Moderate problem' },
  { value: 4, label: 'Severe problem' },
  { value: 5, label: 'Problem as bad as it can be' },
];

const SNOT22_ITEMS = [
  'Need to blow nose',
  'Sneezing',
  'Runny nose',
  'Cough',
  'Post-nasal discharge (mucus draining from the back of your nose down your throat)',
  'Thick nasal discharge',
  'Ear fullness',
  'Dizziness',
  'Ear pain',
  'Facial pain or pressure',
  'Difficulty falling asleep',
  'Waking up at night',
  "Lack of a good night's sleep",
  'Waking up tired',
  'Fatigue',
  'Reduced productivity',
  'Reduced concentration',
  'Frustrated, restless, or irritable',
  'Sad',
  'Embarrassed',
  'Reduced sense of taste or smell',
  'Blocked nose or nasal obstruction',
] as const;

const NOSE_SCALE: readonly ResponseScaleOption[] = [
  { value: 0, label: 'Not a problem' },
  { value: 1, label: 'Very mild problem' },
  { value: 2, label: 'Moderate problem' },
  { value: 3, label: 'Fairly bad problem' },
  { value: 4, label: 'Severe problem' },
];

const NOSE_ITEMS = [
  'Nasal congestion or stuffiness',
  'Nasal blockage or obstruction',
  'Trouble breathing through my nose',
  'Trouble sleeping',
  'Unable to get enough air through my nose during exercise or exertion',
] as const;

const TNSS_SCALE: readonly ResponseScaleOption[] = [
  { value: 0, label: 'None - symptom is absent' },
  { value: 1, label: 'Mild - symptom is present but not bothersome' },
  {
    value: 2,
    label: 'Moderate - symptom is present and bothersome but does not interfere with daily activities or sleep',
  },
  {
    value: 3,
    label: 'Severe - symptom is present and so bothersome that it interferes with daily activities or sleep',
  },
];

const TNSS_ITEMS = [
  'Nasal congestion',
  'Runny nose',
  'Nasal itching',
  'Sneezing',
] as const;

// RQLQ — Rhinoconjunctivitis Quality of Life Questionnaire
// Representative items from the validated instrument across all 7 domains.
// Reference: Juniper EF, Guyatt GH. Clin Exp Allergy. 1991;21(1):77–83.
const RQLQ_SCALE: readonly ResponseScaleOption[] = [
  { value: 0, label: 'Not bothered' },
  { value: 1, label: 'Hardly bothered' },
  { value: 2, label: 'Somewhat bothered' },
  { value: 3, label: 'Quite bothered' },
  { value: 4, label: 'Very bothered' },
  { value: 5, label: 'Extremely bothered' },
  { value: 6, label: 'Completely bothered' },
];

const RQLQ_DOMAINS: readonly RqlqDomain[] = [
  {
    name: 'Activities',
    startIndex: 0,
    items: [
      'Household activities (for example, housework or gardening)',
      'Activities outside the home (for example, sport, walking, or recreation)',
    ],
  },
  {
    name: 'Sleep',
    startIndex: 2,
    items: [
      'Difficulty getting to sleep because of your rhinitis symptoms',
      'Waking up at night because of your rhinitis symptoms',
    ],
  },
  {
    name: 'Non-nasal symptoms',
    startIndex: 4,
    items: ['Fatigue or tiredness', 'Reduced ability to concentrate'],
  },
  {
    name: 'Practical problems',
    startIndex: 6,
    items: ['Needing to blow your nose frequently', 'Carrying or using tissues'],
  },
  {
    name: 'Nasal symptoms',
    startIndex: 8,
    items: ['Blocked nose', 'Runny nose'],
  },
  {
    name: 'Eye symptoms',
    startIndex: 10,
    items: ['Itchy eyes', 'Watery or runny eyes'],
  },
  {
    name: 'Emotional',
    startIndex: 12,
    items: [
      'Frustrated or irritable because of your rhinitis symptoms',
      'Sad or downhearted because of your rhinitis symptoms',
    ],
  },
];

// ESS — Epworth Sleepiness Scale
// Reference: Johns MW. Sleep. 1991;14(6):540–545.
const ESS_SCALE: readonly ResponseScaleOption[] = [
  { value: 0, label: 'Would never doze' },
  { value: 1, label: 'Slight chance of dozing' },
  { value: 2, label: 'Moderate chance of dozing' },
  { value: 3, label: 'High chance of dozing' },
];

const ESS_ITEMS = [
  'Sitting and reading',
  'Watching television',
  'Sitting inactive in a public place (for example, in a theatre or a meeting)',
  'As a passenger in a car for an hour without a break',
  'Lying down to rest in the afternoon when circumstances permit',
  'Sitting and talking to someone',
  'Sitting quietly after a lunch without alcohol',
  'In a car, while stopped for a few minutes in traffic',
] as const;

const EMPTY_FORM_DATA: SinusAssessmentFormData = {
  patientType: '',
  personalDetails: {
    fullName: '',
    email: '',
    dateOfBirth: '',
    phone: '',
    postConsultationOptIn: false,
  },
  eposSymptoms: {
    cardinalSymptoms: [],
    duration: '',
    symptomFreeInterval: '',
    episodeFrequency: '',
    provisionalClassification: 'Insufficient data',
  },
  medicalHistory: {
    relevantConditions: [],
    priorSinusSurgery: '',
    priorSurgeryDetails: '',
    currentIntranasalTreatment: '',
    biologicTherapy: '',
  },
  instruments: {
    snot22: Array.from({ length: 22 }, () => -1),
    snot22Total: null,
    nose: Array.from({ length: 5 }, () => -1),
    noseScore: null,
    tnss: Array.from({ length: 4 }, () => -1),
    tnssTotal: null,
    rqlq: Array.from({ length: 14 }, () => -1),
    rqlqMean: null,
    ess: Array.from({ length: 8 }, () => -1),
    essTotal: null,
  },
  submission: {
    additionalConcerns: '',
    clinicianEmailSubject: '',
    clinicianEmailBody: '',
  },
};

function calculateAge(dateOfBirth: string): number | null {
  if (!dateOfBirth) {
    return null;
  }

  const dob = new Date(dateOfBirth);
  if (Number.isNaN(dob.getTime())) {
    return null;
  }

  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const monthDifference = today.getMonth() - dob.getMonth();

  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
    age -= 1;
  }

  return age;
}

function calculateEposClassification(formData: SinusAssessmentFormData): EposClassification {
  const { cardinalSymptoms, duration, symptomFreeInterval, episodeFrequency } = formData.eposSymptoms;
  const symptomCount = cardinalSymptoms.length;
  const hasRequiredCrsSymptom =
    cardinalSymptoms.includes('Blocked nose or nasal congestion') ||
    cardinalSymptoms.includes('Runny nose or mucus dripping down the back of your throat');

  if (symptomCount < 2 || !duration) {
    return 'Insufficient data';
  }

  const age = calculateAge(formData.personalDetails.dateOfBirth);
  const isPaediatric = age !== null && age < 18;
  const hasChronicPattern =
    (duration === 'more-than-12-weeks' && hasRequiredCrsSymptom) ||
    (duration === 'come-and-go' && symptomFreeInterval === 'no' && hasRequiredCrsSymptom);

  if (hasChronicPattern) {
    return isPaediatric ? 'CRSc Paediatric' : 'CRS Adult';
  }

  if (
    (duration === 'less-than-10-days' ||
      duration === 'between-10-days-and-12-weeks' ||
      duration === 'come-and-go') &&
    symptomFreeInterval === 'yes'
  ) {
    if (episodeFrequency === '4-or-more') {
      return 'RARS';
    }

    if (episodeFrequency === '1-to-3') {
      return 'ARS';
    }
  }

  if (
    (duration === 'less-than-10-days' || duration === 'between-10-days-and-12-weeks') &&
    symptomCount >= 2
  ) {
    return 'ARS';
  }

  return 'Insufficient data';
}

function getFirstName(fullName: string): string {
  const trimmedName = fullName.trim();
  if (!trimmedName) {
    return 'Hello';
  }

  return trimmedName.split(/\s+/)[0] || 'Hello';
}

// Step 7 (TNSS) is shown when the patient has indicated nasal discharge or allergy-related
// conditions in Steps 3 or 4, per SINUS_QUESTIONNAIRE_SPEC.md §Step 7.
function showsTnss(formData: SinusAssessmentFormData): boolean {
  const { cardinalSymptoms } = formData.eposSymptoms;
  const { relevantConditions } = formData.medicalHistory;
  const hasAllergyRelatedCondition =
    relevantConditions.includes('Allergies (to pollen, dust mites, animals, or other environmental triggers)') ||
    relevantConditions.includes('Aspirin or anti-inflammatory sensitivity');

  return (
    cardinalSymptoms.includes('Runny nose or mucus dripping down the back of your throat') ||
    hasAllergyRelatedCondition
  );
}

// RQLQ is shown when TNSS was triggered and total score >= 6.
function showsRqlq(formData: SinusAssessmentFormData): boolean {
  if (!showsTnss(formData)) {
    return false;
  }
  const tnssTotal = calculateTotalIfComplete(formData.instruments.tnss);
  return tnssTotal !== null && tnssTotal >= 6;
}

// ESS is shown when sleep problems were indicated in SNOT-22 (items 11–14) or NOSE (item 4).
function showsEss(formData: SinusAssessmentFormData): boolean {
  // SNOT-22 sleep items: indices 10–13 (0-based) = items 11–14 (1-based)
  const hasSleepIssueInSnot22 = [10, 11, 12, 13].some((i) => formData.instruments.snot22[i] > 0);
  // NOSE item 4 "Trouble sleeping" = index 3 (0-based)
  const hasSleepIssueInNose = formData.instruments.nose[3] > 0;
  return hasSleepIssueInSnot22 || hasSleepIssueInNose;
}

function showsStep8(formData: SinusAssessmentFormData): boolean {
  return showsRqlq(formData) || showsEss(formData);
}

function calculateTotalIfComplete(values: number[]): number | null {
  const hasUnansweredItem = values.some((value) => value < 0);

  if (hasUnansweredItem) {
    return null;
  }

  return values.reduce((total, value) => total + value, 0);
}

function hasUnsavedAssessmentData(formData: SinusAssessmentFormData): boolean {
  const hasPersonalDetails =
    formData.personalDetails.fullName.trim().length > 0 ||
    formData.personalDetails.email.trim().length > 0 ||
    formData.personalDetails.dateOfBirth.length > 0 ||
    formData.personalDetails.phone.trim().length > 0 ||
    formData.personalDetails.postConsultationOptIn;

  const hasSymptoms =
    formData.eposSymptoms.cardinalSymptoms.length > 0 ||
    formData.eposSymptoms.duration !== '' ||
    formData.eposSymptoms.symptomFreeInterval !== '' ||
    formData.eposSymptoms.episodeFrequency !== '';

  const hasMedicalHistory =
    formData.medicalHistory.relevantConditions.length > 0 ||
    formData.medicalHistory.priorSinusSurgery !== '' ||
    formData.medicalHistory.priorSurgeryDetails.trim().length > 0 ||
    formData.medicalHistory.currentIntranasalTreatment !== '' ||
    formData.medicalHistory.biologicTherapy !== '';

  const hasInstrumentResponses =
    formData.instruments.snot22.some((value) => value >= 0) ||
    formData.instruments.nose.some((value) => value >= 0) ||
    formData.instruments.tnss.some((value) => value >= 0) ||
    formData.instruments.rqlq.some((value) => value >= 0) ||
    formData.instruments.ess.some((value) => value >= 0);

  return (
    formData.patientType !== '' ||
    hasPersonalDetails ||
    hasSymptoms ||
    hasMedicalHistory ||
    hasInstrumentResponses ||
    formData.submission.additionalConcerns.trim().length > 0
  );
}

function InstrumentTable({ itemLabels, responseScale, responses, sectionTitle, onSelect }: InstrumentTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-neutral-200">
      <table className="min-w-[760px] w-full border-collapse bg-white">
        <caption className="sr-only">{sectionTitle}</caption>
        <thead>
          <tr className="border-b border-neutral-200 bg-neutral-50 text-left">
            <th className="px-4 py-3 text-sm font-medium text-neutral-700">Question</th>
            {responseScale.map((option) => (
              <th key={option.value} className="px-3 py-3 text-center text-xs font-medium uppercase tracking-[0.06em] text-teal-400">
                <span className="block text-sm text-neutral-700">{option.value}</span>
                <span>{option.label}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {itemLabels.map((itemLabel, index) => (
            <tr key={itemLabel} className="border-b border-neutral-200 last:border-b-0">
              <th className="px-4 py-4 text-left text-sm font-medium text-neutral-700" scope="row">
                <span className="mr-2 text-neutral-400">{index + 1}.</span>
                {itemLabel}
              </th>
              {responseScale.map((option) => (
                <td key={`${itemLabel}-${option.value}`} className="px-3 py-4 text-center">
                  <label className="inline-flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-lg border border-neutral-200 px-2 py-2 hover:border-teal-200 focus-within:outline focus-within:outline-2 focus-within:outline-teal-400">
                    <input
                      aria-label={`${itemLabel}: ${option.label}`}
                      checked={responses[index] === option.value}
                      className="h-5 w-5 accent-[#4A7C8F]"
                      name={`${sectionTitle}-${index}`}
                      onChange={() => onSelect(index, option.value)}
                      type="radio"
                      value={option.value}
                    />
                  </label>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function isStepValid(currentStep: AssessmentStep, formData: SinusAssessmentFormData): boolean {
  if (currentStep === 1) {
    return formData.patientType !== '';
  }

  if (currentStep === 2) {
    const { fullName, email, dateOfBirth, phone } = formData.personalDetails;
    return Boolean(fullName.trim() && email.trim() && dateOfBirth && phone.trim());
  }

  if (currentStep === 3) {
    const { cardinalSymptoms, duration, symptomFreeInterval, episodeFrequency } = formData.eposSymptoms;

    if (cardinalSymptoms.length === 0 || !duration) {
      return false;
    }

    if (duration === 'come-and-go' && !symptomFreeInterval) {
      return false;
    }

    if (duration === 'come-and-go' && symptomFreeInterval === 'yes' && !episodeFrequency) {
      return false;
    }
  }

  if (currentStep === 4) {
    const { relevantConditions, priorSinusSurgery, priorSurgeryDetails, currentIntranasalTreatment, biologicTherapy } =
      formData.medicalHistory;

    if (relevantConditions.length === 0 || !priorSinusSurgery || !currentIntranasalTreatment || !biologicTherapy) {
      return false;
    }

    if (priorSinusSurgery === 'yes' && !priorSurgeryDetails.trim()) {
      return false;
    }
  }

  if (currentStep === 5) {
    return formData.instruments.snot22.every((value) => value >= 0);
  }

  if (currentStep === 6) {
    return formData.instruments.nose.every((value) => value >= 0);
  }

  if (currentStep === 7) {
    return formData.instruments.tnss.every((value) => value >= 0);
  }

  if (currentStep === 8) {
    const rqlqShown = showsRqlq(formData);
    const essShown = showsEss(formData);
    const rqlqComplete = !rqlqShown || formData.instruments.rqlq.every((value) => value >= 0);
    const essComplete = !essShown || formData.instruments.ess.every((value) => value >= 0);
    return rqlqComplete && essComplete;
  }

  return true;
}

export default function SinusAssessmentPage() {
  const [hasStarted, setHasStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState<AssessmentStep>(1);
  const [formData, setFormData] = useState<SinusAssessmentFormData>(EMPTY_FORM_DATA);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState('');
  const [showSessionWarning, setShowSessionWarning] = useState(false);
  const [isSessionExpired, setIsSessionExpired] = useState(false);
  const [lastActivityAt, setLastActivityAt] = useState<number>(Date.now());
  const warningAcknowledgedRef = useRef(false);
  const lastActivityRecordedRef = useRef<number>(Date.now());

  const firstName = useMemo(() => {
    return getFirstName(formData.personalDetails.fullName);
  }, [formData.personalDetails.fullName]);

  const progressPercentage = useMemo(() => {
    if (!hasStarted) {
      return 0;
    }

    return (currentStep / TOTAL_STEPS) * 100;
  }, [currentStep, hasStarted]);

  const shouldWarnBeforeUnload =
    hasStarted &&
    !isSubmitted &&
    !isSessionExpired &&
    currentStep >= 2 &&
    hasUnsavedAssessmentData(formData);

  const trackActivity = useCallback((): void => {
    if (!hasStarted || isSubmitted || isSessionExpired) {
      return;
    }

    const now = Date.now();
    if (now - lastActivityRecordedRef.current < 5000) {
      return;
    }

    lastActivityRecordedRef.current = now;
    setLastActivityAt(now);
    setShowSessionWarning(false);
    warningAcknowledgedRef.current = false;
  }, [hasStarted, isSessionExpired, isSubmitted]);

  const startNewAssessment = (): void => {
    setHasStarted(false);
    setCurrentStep(1);
    setFormData(EMPTY_FORM_DATA);
    setIsSubmitted(false);
    setIsSubmitting(false);
    setSubmissionError('');
    setShowSessionWarning(false);
    setIsSessionExpired(false);
    setLastActivityAt(Date.now());
    lastActivityRecordedRef.current = Date.now();
    warningAcknowledgedRef.current = false;
  };

  const beginAssessment = (): void => {
    const now = Date.now();
    setHasStarted(true);
    setLastActivityAt(now);
    lastActivityRecordedRef.current = now;
    setShowSessionWarning(false);
    setIsSessionExpired(false);
    warningAcknowledgedRef.current = false;
  };

  const extendSession = (): void => {
    const now = Date.now();
    setLastActivityAt(now);
    lastActivityRecordedRef.current = now;
    setShowSessionWarning(false);
    warningAcknowledgedRef.current = false;
  };

  useEffect(() => {
    setFormData((previous) => ({
      ...previous,
      eposSymptoms: {
        ...previous.eposSymptoms,
        provisionalClassification: calculateEposClassification(previous),
      },
    }));
  }, [
    formData.personalDetails.dateOfBirth,
    formData.eposSymptoms.cardinalSymptoms,
    formData.eposSymptoms.duration,
    formData.eposSymptoms.symptomFreeInterval,
    formData.eposSymptoms.episodeFrequency,
  ]);

  useEffect(() => {
    setFormData((previous) => ({
      ...previous,
      instruments: {
        ...previous.instruments,
        snot22Total: calculateTotalIfComplete(previous.instruments.snot22),
        noseScore: (() => {
          const rawNoseScore = calculateTotalIfComplete(previous.instruments.nose);
          return rawNoseScore === null ? null : rawNoseScore * 5;
        })(),
        tnssTotal: calculateTotalIfComplete(previous.instruments.tnss),
        rqlqMean: (() => {
          const rqlqTotal = calculateTotalIfComplete(previous.instruments.rqlq);
          return rqlqTotal === null ? null : rqlqTotal / previous.instruments.rqlq.length;
        })(),
        essTotal: calculateTotalIfComplete(previous.instruments.ess),
      },
    }));
  }, [
    formData.instruments.nose,
    formData.instruments.snot22,
    formData.instruments.tnss,
    formData.instruments.rqlq,
    formData.instruments.ess,
  ]);

  useEffect(() => {
    if (!hasStarted || isSubmitted || isSessionExpired) {
      return;
    }

    const intervalId = window.setInterval(() => {
      const elapsedMs = Date.now() - lastActivityAt;

      if (elapsedMs >= SESSION_EXPIRY_MS) {
        setIsSessionExpired(true);
        setShowSessionWarning(false);
        return;
      }

      if (elapsedMs >= SESSION_WARNING_MS && !warningAcknowledgedRef.current) {
        setShowSessionWarning(true);
        warningAcknowledgedRef.current = true;
      }
    }, 15000);

    return () => window.clearInterval(intervalId);
  }, [hasStarted, isSubmitted, isSessionExpired, lastActivityAt]);

  useEffect(() => {
    if (!hasStarted || isSubmitted || isSessionExpired) {
      return;
    }

    const activityEvents: Array<keyof WindowEventMap> = ['click', 'keydown', 'touchstart', 'mousemove'];
    const activityListener = (): void => {
      trackActivity();
    };

    activityEvents.forEach((eventName) => {
      window.addEventListener(eventName, activityListener, { passive: true });
    });

    return () => {
      activityEvents.forEach((eventName) => {
        window.removeEventListener(eventName, activityListener);
      });
    };
  }, [hasStarted, isSubmitted, isSessionExpired, trackActivity]);

  useEffect(() => {
    if (!shouldWarnBeforeUnload) {
      return;
    }

    const beforeUnloadHandler = (event: BeforeUnloadEvent): void => {
      event.preventDefault();
      event.returnValue = '';
    };

    window.addEventListener('beforeunload', beforeUnloadHandler);

    return () => {
      window.removeEventListener('beforeunload', beforeUnloadHandler);
    };
  }, [shouldWarnBeforeUnload]);

  const goToPreviousStep = (): void => {
    if (currentStep === 1) {
      return;
    }

    if (currentStep === 8) {
      setCurrentStep(showsTnss(formData) ? 7 : 6);
      return;
    }

    if (currentStep === 9) {
      if (showsStep8(formData)) {
        setCurrentStep(8);
      } else if (showsTnss(formData)) {
        setCurrentStep(7);
      } else {
        setCurrentStep(6);
      }
      return;
    }

    setCurrentStep((previous) => (previous - 1) as AssessmentStep);
  };

  const goToNextStep = (): void => {
    if (!isStepValid(currentStep, formData)) {
      return;
    }

    if (currentStep === 6) {
      if (showsTnss(formData)) {
        setCurrentStep(7);
      } else if (showsStep8(formData)) {
        setCurrentStep(8);
      } else {
        setCurrentStep(9);
      }
      return;
    }

    if (currentStep === 7) {
      if (showsStep8(formData)) {
        setCurrentStep(8);
      } else {
        setCurrentStep(9);
      }
      return;
    }

    if (currentStep >= TOTAL_STEPS) {
      return;
    }

    setCurrentStep((previous) => (previous + 1) as AssessmentStep);
  };

  const toggleCardinalSymptom = (symptom: string): void => {
    setFormData((previous) => {
      const alreadySelected = previous.eposSymptoms.cardinalSymptoms.includes(symptom);

      return {
        ...previous,
        eposSymptoms: {
          ...previous.eposSymptoms,
          cardinalSymptoms: alreadySelected
            ? previous.eposSymptoms.cardinalSymptoms.filter((item) => item !== symptom)
            : [...previous.eposSymptoms.cardinalSymptoms, symptom],
        },
      };
    });
  };

  const toggleRelevantCondition = (condition: string): void => {
    setFormData((previous) => {
      const alreadySelected = previous.medicalHistory.relevantConditions.includes(condition);

      if (condition === 'None of the above') {
        return {
          ...previous,
          medicalHistory: {
            ...previous.medicalHistory,
            relevantConditions: alreadySelected ? [] : ['None of the above'],
          },
        };
      }

      const remainingConditions = previous.medicalHistory.relevantConditions.filter(
        (item) => item !== 'None of the above' && item !== condition,
      );

      return {
        ...previous,
        medicalHistory: {
          ...previous.medicalHistory,
          relevantConditions: alreadySelected ? remainingConditions : [...remainingConditions, condition],
        },
      };
    });
  };

  const updateInstrumentResponse = (
    instrument: 'snot22' | 'nose' | 'tnss' | 'rqlq' | 'ess',
    index: number,
    value: number,
  ): void => {
    setFormData((previous) => {
      const nextResponses = [...previous.instruments[instrument]];
      nextResponses[index] = value;

      return {
        ...previous,
        instruments: {
          ...previous.instruments,
          [instrument]: nextResponses,
        },
      };
    });
  };

  const submitAssessment = async (): Promise<void> => {
    if (isSubmitting || isSessionExpired) {
      return;
    }

    setIsSubmitting(true);
    setSubmissionError('');

    try {
      const response = await fetch('/api/appointments/sinus-assessment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formData }),
      });

      if (!response.ok) {
        throw new Error('Unable to submit assessment');
      }

      setIsSubmitted(true);
      setShowSessionWarning(false);
    } catch {
      setSubmissionError(
        'We were unable to submit your assessment right now. Please try again, or call the rooms on 02 9247 1762 if the issue continues.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-neutral-50 py-10 lg:py-16">
      <section className="myent-container">
        <div className="mx-auto max-w-4xl">
          {!hasStarted ? (
            <div className="rounded-xl border border-neutral-200 bg-white p-8 lg:p-10">
              <p className="myent-eyebrow">Pre-appointment assessment</p>
              <h1 className="mt-3 font-serif text-4xl text-neutral-800">
                {firstName}. Before your appointment, we&apos;d like to understand how your symptoms have been
                affecting you.
              </h1>
              <p className="mt-6 text-lg text-neutral-600">
                Your answers help our clinical team prepare so that your consultation is focused on what matters
                most to you. This takes most patients four to six minutes.
              </p>
              <p className="mt-4 text-neutral-600">
                Your responses are sent securely to our clinical team and will only be reviewed by the
                healthcare professionals involved in your care. This assessment does not constitute a clinical
                consultation. If you have any urgent symptoms, please call 000 or attend your nearest emergency
                department.
              </p>
              <button className="myent-btn-primary mt-8" type="button" onClick={beginAssessment}>
                Begin assessment
              </button>
            </div>
          ) : isSubmitted ? (
            <div className="mt-6 rounded-xl border border-neutral-200 bg-white p-6 lg:p-8">
              <h2 className="font-serif text-4xl text-neutral-800">Thank you — your assessment has been received.</h2>
              <p className="mt-4 text-neutral-600">
                Your responses have been securely sent to our clinical team and will be reviewed before your
                appointment. There is nothing further you need to do. If you have any questions before your
                appointment, please call the rooms on 02 9247 1762 during business hours. After hours, if you have
                an urgent concern, call 000 or attend your nearest emergency department.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a className="myent-btn-primary" href="/">
                  Return to My-ENT
                </a>
                <a className="myent-btn-outline" href="tel:+61292471762">
                  Call the rooms
                </a>
              </div>

              <p className="mt-8 text-sm text-neutral-500">
                Your assessment data is handled in accordance with the My-ENT{' '}
                <a className="text-teal-400 hover:text-teal-500" href="/privacy-policy">
                  Privacy Policy
                </a>{' '}
                and the Australian Privacy Principles.
              </p>
            </div>
          ) : (
            <>
              {showSessionWarning ? (
                <div
                  className="mb-6 rounded-xl border border-teal-200 bg-teal-50 p-4"
                  role="alert"
                  aria-live="assertive"
                >
                  <p className="text-sm text-neutral-700">
                    Your assessment session will expire in 5 minutes due to inactivity.
                  </p>
                  <button className="myent-btn-primary mt-3" type="button" onClick={extendSession}>
                    Continue assessment
                  </button>
                </div>
              ) : null}

              <div className="rounded-xl border border-neutral-200 bg-white p-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-medium text-neutral-700">Step {currentStep} of {TOTAL_STEPS}</p>
                  <p className="text-sm text-neutral-500">Sinus pre-appointment questionnaire</p>
                </div>
                <div className="mt-3 h-2 w-full rounded-full bg-neutral-200" aria-hidden="true">
                  <div
                    className="h-full rounded-full bg-teal-400 transition-all duration-150"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
              </div>

              <div className="relative mt-6 rounded-xl border border-neutral-200 bg-white p-6 lg:p-8">
                {isSessionExpired ? (
                  <div className="absolute inset-0 z-20 flex items-center justify-center rounded-xl bg-white/95 px-6">
                    <div className="max-w-lg rounded-xl border border-neutral-200 bg-white p-6 text-center">
                      <h3 className="font-serif text-3xl text-neutral-800">Session expired</h3>
                      <p className="mt-3 text-neutral-600">
                        For your privacy, this assessment has expired after 30 minutes of inactivity.
                      </p>
                      <p className="mt-2 text-neutral-600">
                        Start a new assessment to continue.
                      </p>
                      <button className="myent-btn-primary mt-6" type="button" onClick={startNewAssessment}>
                        Start new assessment
                      </button>
                    </div>
                  </div>
                ) : null}

                {currentStep === 1 ? (
                  <div>
                    <h2 className="font-serif text-4xl text-neutral-800">About your visit</h2>
                    <p className="mt-2 text-neutral-500">Help us understand your visit type.</p>

                    <fieldset className="mt-6 space-y-3">
                      <legend className="sr-only">Patient type</legend>
                      {[
                        {
                          value: 'new-patient',
                          label: 'New patient - first consultation at My-ENT for this concern',
                        },
                        {
                          value: 'existing-same-concern',
                          label:
                            'Existing patient - same concern - follow-up for a previously discussed nasal or sinus issue',
                        },
                        {
                          value: 'existing-new-concern',
                          label:
                            'Existing patient - new concern - a new nasal or sinus issue not previously discussed',
                        },
                      ].map((option) => (
                        <label
                          key={option.value}
                          className="flex min-h-11 cursor-pointer items-start gap-3 rounded-lg border border-neutral-200 px-4 py-3 text-neutral-700 hover:border-teal-200"
                        >
                          <input
                            checked={formData.patientType === option.value}
                            className="mt-1 h-5 w-5 accent-[#4A7C8F]"
                            name="patientType"
                            onChange={() => {
                              setFormData((previous) => ({
                                ...previous,
                                patientType: option.value as PatientTypeOption,
                              }));
                            }}
                            type="radio"
                            value={option.value}
                          />
                          <span>{option.label}</span>
                        </label>
                      ))}
                    </fieldset>
                  </div>
                ) : null}

                {currentStep === 2 ? (
                  <div>
                    <h2 className="font-serif text-4xl text-neutral-800">Your details</h2>
                    <p className="mt-2 text-neutral-500">Your contact information and a few key details.</p>

                    <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
                      <label className="flex flex-col gap-2 md:col-span-2">
                        <span className="text-sm font-medium text-neutral-700">Full name</span>
                        <input
                          className="min-h-11 rounded-lg border border-neutral-200 px-4 py-3 text-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-400"
                          onChange={(event) => {
                            setFormData((previous) => ({
                              ...previous,
                              personalDetails: {
                                ...previous.personalDetails,
                                fullName: event.target.value,
                              },
                            }));
                          }}
                          type="text"
                          value={formData.personalDetails.fullName}
                        />
                      </label>

                      <label className="flex flex-col gap-2">
                        <span className="text-sm font-medium text-neutral-700">Email address</span>
                        <input
                          className="min-h-11 rounded-lg border border-neutral-200 px-4 py-3 text-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-400"
                          onChange={(event) => {
                            setFormData((previous) => ({
                              ...previous,
                              personalDetails: {
                                ...previous.personalDetails,
                                email: event.target.value,
                              },
                            }));
                          }}
                          type="email"
                          value={formData.personalDetails.email}
                        />
                      </label>

                      <label className="flex flex-col gap-2">
                        <span className="text-sm font-medium text-neutral-700">Date of birth</span>
                        <input
                          className="min-h-11 rounded-lg border border-neutral-200 px-4 py-3 text-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-400"
                          onChange={(event) => {
                            setFormData((previous) => ({
                              ...previous,
                              personalDetails: {
                                ...previous.personalDetails,
                                dateOfBirth: event.target.value,
                              },
                            }));
                          }}
                          type="date"
                          value={formData.personalDetails.dateOfBirth}
                        />
                      </label>

                      <label className="flex flex-col gap-2 md:col-span-2">
                        <span className="text-sm font-medium text-neutral-700">Phone number</span>
                        <input
                          className="min-h-11 rounded-lg border border-neutral-200 px-4 py-3 text-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-400"
                          onChange={(event) => {
                            setFormData((previous) => ({
                              ...previous,
                              personalDetails: {
                                ...previous.personalDetails,
                                phone: event.target.value,
                              },
                            }));
                          }}
                          type="tel"
                          value={formData.personalDetails.phone}
                        />
                      </label>
                    </div>

                    <label className="mt-6 flex min-h-11 items-start gap-3 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3">
                      <input
                        checked={formData.personalDetails.postConsultationOptIn}
                        className="mt-1 h-5 w-5 accent-[#4A7C8F]"
                        onChange={(event) => {
                          setFormData((previous) => ({
                            ...previous,
                            personalDetails: {
                              ...previous.personalDetails,
                              postConsultationOptIn: event.target.checked,
                            },
                          }));
                        }}
                        type="checkbox"
                      />
                      <span className="text-sm text-neutral-600">
                        I would like to receive educational information about my condition by email after my
                        appointment.
                      </span>
                    </label>
                  </div>
                ) : null}

                {currentStep === 3 ? (
                  <div>
                    <h2 className="font-serif text-4xl text-neutral-800">Your symptoms</h2>
                    <p className="mt-2 text-neutral-500">
                      These questions help us understand the nature and pattern of your symptoms.
                    </p>

                    <div className="mt-6 space-y-6">
                      <fieldset className="space-y-3">
                        <legend className="text-sm font-medium text-neutral-700">
                          Please select all symptoms you currently have.
                        </legend>
                        {CARDINAL_SYMPTOMS.map((symptom) => (
                          <label
                            key={symptom}
                            className="flex min-h-11 cursor-pointer items-start gap-3 rounded-lg border border-neutral-200 px-4 py-3 text-neutral-700 hover:border-teal-200"
                          >
                            <input
                              checked={formData.eposSymptoms.cardinalSymptoms.includes(symptom)}
                              className="mt-1 h-5 w-5 accent-[#4A7C8F]"
                              onChange={() => toggleCardinalSymptom(symptom)}
                              type="checkbox"
                            />
                            <span>{symptom}</span>
                          </label>
                        ))}
                      </fieldset>

                      <fieldset className="space-y-3">
                        <legend className="text-sm font-medium text-neutral-700">How long have you had these symptoms?</legend>
                        {[
                          { value: 'less-than-10-days', label: 'Less than 10 days' },
                          { value: 'between-10-days-and-12-weeks', label: 'Between 10 days and 12 weeks' },
                          {
                            value: 'more-than-12-weeks',
                            label: 'More than 12 weeks (approximately 3 months or longer)',
                          },
                          {
                            value: 'come-and-go',
                            label: 'They come and go - I have had more than one episode',
                          },
                        ].map((option) => (
                          <label
                            key={option.value}
                            className="flex min-h-11 cursor-pointer items-start gap-3 rounded-lg border border-neutral-200 px-4 py-3 text-neutral-700 hover:border-teal-200"
                          >
                            <input
                              checked={formData.eposSymptoms.duration === option.value}
                              className="mt-1 h-5 w-5 accent-[#4A7C8F]"
                              name="duration"
                              onChange={() => {
                                setFormData((previous) => ({
                                  ...previous,
                                  eposSymptoms: {
                                    ...previous.eposSymptoms,
                                    duration: option.value as DurationOption,
                                    symptomFreeInterval: option.value === 'come-and-go' ? previous.eposSymptoms.symptomFreeInterval : '',
                                    episodeFrequency: option.value === 'come-and-go' ? previous.eposSymptoms.episodeFrequency : '',
                                  },
                                }));
                              }}
                              type="radio"
                              value={option.value}
                            />
                            <span>{option.label}</span>
                          </label>
                        ))}
                      </fieldset>

                      {formData.eposSymptoms.duration === 'come-and-go' ? (
                        <fieldset className="space-y-3">
                          <legend className="text-sm font-medium text-neutral-700">
                            Between episodes, do your symptoms clear up completely?
                          </legend>
                          {[
                            { value: 'yes', label: 'Yes - I feel completely normal between episodes' },
                            { value: 'no', label: 'No - some symptoms are always present' },
                          ].map((option) => (
                            <label
                              key={option.value}
                              className="flex min-h-11 cursor-pointer items-start gap-3 rounded-lg border border-neutral-200 px-4 py-3 text-neutral-700 hover:border-teal-200"
                            >
                              <input
                                checked={formData.eposSymptoms.symptomFreeInterval === option.value}
                                className="mt-1 h-5 w-5 accent-[#4A7C8F]"
                                name="symptomFreeInterval"
                                onChange={() => {
                                  setFormData((previous) => ({
                                    ...previous,
                                    eposSymptoms: {
                                      ...previous.eposSymptoms,
                                      symptomFreeInterval: option.value as SymptomFreeIntervalOption,
                                      episodeFrequency: option.value === 'yes' ? previous.eposSymptoms.episodeFrequency : '',
                                    },
                                  }));
                                }}
                                type="radio"
                                value={option.value}
                              />
                              <span>{option.label}</span>
                            </label>
                          ))}
                        </fieldset>
                      ) : null}

                      {formData.eposSymptoms.duration === 'come-and-go' &&
                      formData.eposSymptoms.symptomFreeInterval === 'yes' ? (
                        <fieldset className="space-y-3">
                          <legend className="text-sm font-medium text-neutral-700">
                            How many separate episodes have you had in the last 12 months?
                          </legend>
                          {[
                            { value: '1-to-3', label: '1 to 3 episodes' },
                            { value: '4-or-more', label: '4 or more episodes' },
                            { value: 'not-sure', label: 'I am not sure' },
                          ].map((option) => (
                            <label
                              key={option.value}
                              className="flex min-h-11 cursor-pointer items-start gap-3 rounded-lg border border-neutral-200 px-4 py-3 text-neutral-700 hover:border-teal-200"
                            >
                              <input
                                checked={formData.eposSymptoms.episodeFrequency === option.value}
                                className="mt-1 h-5 w-5 accent-[#4A7C8F]"
                                name="episodeFrequency"
                                onChange={() => {
                                  setFormData((previous) => ({
                                    ...previous,
                                    eposSymptoms: {
                                      ...previous.eposSymptoms,
                                      episodeFrequency: option.value as EpisodeFrequencyOption,
                                    },
                                  }));
                                }}
                                type="radio"
                                value={option.value}
                              />
                              <span>{option.label}</span>
                            </label>
                          ))}
                        </fieldset>
                      ) : null}
                    </div>

                    <p className="mt-8 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-600">
                      Thank you. Understanding when your symptoms started and how they have changed over time is
                      one of the most important things we can know before your appointment.
                    </p>
                  </div>
                ) : null}

                {currentStep === 4 ? (
                  <div>
                    <h2 className="font-serif text-4xl text-neutral-800">Your medical history</h2>
                    <p className="mt-2 text-neutral-500">
                      This helps us understand what conditions and treatments may be relevant to your care.
                    </p>

                    <div className="mt-6 space-y-6">
                      <fieldset className="space-y-3">
                        <legend className="text-sm font-medium text-neutral-700">
                          Do you have any of the following? Select all that apply.
                        </legend>
                        {RELEVANT_CONDITIONS.map((condition) => (
                          <label
                            key={condition}
                            className="flex min-h-11 cursor-pointer items-start gap-3 rounded-lg border border-neutral-200 px-4 py-3 text-neutral-700 hover:border-teal-200"
                          >
                            <input
                              checked={formData.medicalHistory.relevantConditions.includes(condition)}
                              className="mt-1 h-5 w-5 accent-[#4A7C8F]"
                              onChange={() => toggleRelevantCondition(condition)}
                              type="checkbox"
                            />
                            <span>{condition}</span>
                          </label>
                        ))}
                      </fieldset>

                      <fieldset className="space-y-3">
                        <legend className="text-sm font-medium text-neutral-700">
                          Have you had any surgery on your nose or sinuses before?
                        </legend>
                        {[
                          { value: 'yes', label: 'Yes' },
                          { value: 'no', label: 'No' },
                          { value: 'not-sure', label: 'I am not sure' },
                        ].map((option) => (
                          <label
                            key={option.value}
                            className="flex min-h-11 cursor-pointer items-start gap-3 rounded-lg border border-neutral-200 px-4 py-3 text-neutral-700 hover:border-teal-200"
                          >
                            <input
                              checked={formData.medicalHistory.priorSinusSurgery === option.value}
                              className="mt-1 h-5 w-5 accent-[#4A7C8F]"
                              name="priorSinusSurgery"
                              onChange={() => {
                                setFormData((previous) => ({
                                  ...previous,
                                  medicalHistory: {
                                    ...previous.medicalHistory,
                                    priorSinusSurgery: option.value as PriorSurgeryOption,
                                    priorSurgeryDetails: option.value === 'yes' ? previous.medicalHistory.priorSurgeryDetails : '',
                                  },
                                }));
                              }}
                              type="radio"
                              value={option.value}
                            />
                            <span>{option.label}</span>
                          </label>
                        ))}
                      </fieldset>

                      {formData.medicalHistory.priorSinusSurgery === 'yes' ? (
                        <label className="flex flex-col gap-2">
                          <span className="text-sm font-medium text-neutral-700">
                            Please briefly describe the surgery and approximately when it was performed.
                          </span>
                          <textarea
                            className="min-h-32 rounded-lg border border-neutral-200 px-4 py-3 text-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-400"
                            onChange={(event) => {
                              setFormData((previous) => ({
                                ...previous,
                                medicalHistory: {
                                  ...previous.medicalHistory,
                                  priorSurgeryDetails: event.target.value,
                                },
                              }));
                            }}
                            value={formData.medicalHistory.priorSurgeryDetails}
                          />
                        </label>
                      ) : null}

                      <fieldset className="space-y-3">
                        <legend className="text-sm font-medium text-neutral-700">
                          Are you currently using a nasal spray prescribed by a doctor?
                        </legend>
                        {[
                          {
                            value: 'steroid',
                            label: 'Yes - a steroid nasal spray (such as Nasonex, Flonase, Rhinocort, or similar)',
                          },
                          { value: 'other', label: 'Yes - a different nasal spray' },
                          { value: 'no', label: 'No' },
                        ].map((option) => (
                          <label
                            key={option.value}
                            className="flex min-h-11 cursor-pointer items-start gap-3 rounded-lg border border-neutral-200 px-4 py-3 text-neutral-700 hover:border-teal-200"
                          >
                            <input
                              checked={formData.medicalHistory.currentIntranasalTreatment === option.value}
                              className="mt-1 h-5 w-5 accent-[#4A7C8F]"
                              name="currentIntranasalTreatment"
                              onChange={() => {
                                setFormData((previous) => ({
                                  ...previous,
                                  medicalHistory: {
                                    ...previous.medicalHistory,
                                    currentIntranasalTreatment: option.value as CurrentSprayOption,
                                  },
                                }));
                              }}
                              type="radio"
                              value={option.value}
                            />
                            <span>{option.label}</span>
                          </label>
                        ))}
                      </fieldset>

                      <fieldset className="space-y-3">
                        <legend className="text-sm font-medium text-neutral-700">
                          Have you ever been prescribed an injectable biological therapy for sinus disease or asthma (such as dupilumab, mepolizumab, or a similar treatment)?
                        </legend>
                        {[
                          { value: 'yes', label: 'Yes' },
                          { value: 'no', label: 'No' },
                          { value: 'not-sure', label: 'I am not sure' },
                        ].map((option) => (
                          <label
                            key={option.value}
                            className="flex min-h-11 cursor-pointer items-start gap-3 rounded-lg border border-neutral-200 px-4 py-3 text-neutral-700 hover:border-teal-200"
                          >
                            <input
                              checked={formData.medicalHistory.biologicTherapy === option.value}
                              className="mt-1 h-5 w-5 accent-[#4A7C8F]"
                              name="biologicTherapy"
                              onChange={() => {
                                setFormData((previous) => ({
                                  ...previous,
                                  medicalHistory: {
                                    ...previous.medicalHistory,
                                    biologicTherapy: option.value as BiologicTherapyOption,
                                  },
                                }));
                              }}
                              type="radio"
                              value={option.value}
                            />
                            <span>{option.label}</span>
                          </label>
                        ))}
                      </fieldset>
                    </div>

                    <p className="mt-8 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-600">
                      This information about your medical history helps us understand what treatments have already
                      been tried and what options may be available for you.
                    </p>
                  </div>
                ) : null}

                {currentStep === 5 ? (
                  <div>
                    <h2 className="font-serif text-4xl text-neutral-800">How your symptoms affect you</h2>
                    <p className="mt-2 text-neutral-500">
                      The following questions ask about how your nose and sinus symptoms have been affecting you
                      over the past two weeks. There are no right or wrong answers - we simply want to understand
                      your experience.
                    </p>

                    <div className="mt-6 space-y-4">
                      <p className="myent-eyebrow">SNOT-22</p>
                      <InstrumentTable
                        itemLabels={SNOT22_ITEMS}
                        onSelect={(index, value) => updateInstrumentResponse('snot22', index, value)}
                        responseScale={SNOT22_SCALE}
                        responses={formData.instruments.snot22}
                        sectionTitle="SNOT-22"
                      />
                    </div>

                    <p className="mt-8 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-600">
                      Thank you for completing that section. These questions are one of the most widely used tools
                      in the world for understanding the real impact of sinus disease on daily life. Your answers
                      will be reviewed carefully before your appointment.
                    </p>
                  </div>
                ) : null}

                {currentStep === 6 ? (
                  <div>
                    <h2 className="font-serif text-4xl text-neutral-800">Nasal breathing</h2>
                    <p className="mt-2 text-neutral-500">
                      These questions focus specifically on how much your nasal breathing is affecting your quality
                      of life.
                    </p>

                    <div className="mt-6 space-y-4">
                      <p className="myent-eyebrow">NOSE scale</p>
                      <InstrumentTable
                        itemLabels={NOSE_ITEMS}
                        onSelect={(index, value) => updateInstrumentResponse('nose', index, value)}
                        responseScale={NOSE_SCALE}
                        responses={formData.instruments.nose}
                        sectionTitle="NOSE scale"
                      />
                    </div>

                    <p className="mt-8 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-600">
                      Nasal obstruction affects far more than breathing - it impacts sleep, concentration, and
                      energy. Your answers help us understand the full picture.
                    </p>
                  </div>
                ) : null}

                {currentStep === 7 ? (
                  <div>
                    <h2 className="font-serif text-4xl text-neutral-800">Allergy symptoms</h2>
                    <p className="mt-2 text-neutral-500">
                      These questions help us understand whether allergy is contributing to your nasal symptoms.
                    </p>

                    <div className="mt-6 space-y-4">
                      <InstrumentTable
                        itemLabels={TNSS_ITEMS}
                        onSelect={(index, value) => updateInstrumentResponse('tnss', index, value)}
                        responseScale={TNSS_SCALE}
                        responses={formData.instruments.tnss}
                        sectionTitle="Total Nasal Symptom Score"
                      />
                      <p className="text-xs text-neutral-500">
                        0 = None (symptom absent) · 1 = Mild (present, not bothersome) · 2 = Moderate
                        (bothersome but not interfering with daily activities or sleep) · 3 = Severe
                        (interfering with daily activities or sleep)
                      </p>
                    </div>

                    <p className="mt-8 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-600">
                      Allergy is a common contributor to nasal symptoms, and understanding its role helps us
                      direct your treatment more precisely.
                    </p>
                  </div>
                ) : null}

                {currentStep === 8 ? (
                  <div>
                    <h2 className="font-serif text-4xl text-neutral-800">Additional questions</h2>
                    <p className="mt-2 text-neutral-500">
                      Based on your earlier responses, we have a few additional questions to help us understand
                      your situation more fully.
                    </p>

                    <div className="mt-6 space-y-10">
                      {showsRqlq(formData) ? (
                        <div className="space-y-6">
                          <div>
                            <h3 className="font-serif text-2xl text-neutral-800">How allergy affects your life</h3>
                            <p className="mt-1 text-sm text-neutral-500">
                              How much have you been bothered by each of the following problems in the last week?
                            </p>
                          </div>
                          {RQLQ_DOMAINS.map((domain) => (
                            <div key={domain.name} className="space-y-3">
                              <p className="text-sm font-semibold text-neutral-700">{domain.name}</p>
                              <InstrumentTable
                                itemLabels={domain.items}
                                onSelect={(idx, val) =>
                                  updateInstrumentResponse('rqlq', domain.startIndex + idx, val)
                                }
                                responseScale={RQLQ_SCALE}
                                responses={formData.instruments.rqlq.slice(
                                  domain.startIndex,
                                  domain.startIndex + domain.items.length,
                                )}
                                sectionTitle={`RQLQ — ${domain.name}`}
                              />
                            </div>
                          ))}
                        </div>
                      ) : null}

                      {showsEss(formData) ? (
                        <div className="space-y-4">
                          <div>
                            <h3 className="font-serif text-2xl text-neutral-800">Daytime sleepiness</h3>
                            <p className="mt-1 text-sm text-neutral-500">
                              How likely are you to doze off or fall asleep in the following situations? This
                              refers to your usual way of life recently. Even if you have not done some of these
                              things recently, try to work out how they would have affected you.
                            </p>
                          </div>
                          <InstrumentTable
                            itemLabels={ESS_ITEMS}
                            onSelect={(index, value) => updateInstrumentResponse('ess', index, value)}
                            responseScale={ESS_SCALE}
                            responses={formData.instruments.ess}
                            sectionTitle="Epworth Sleepiness Scale"
                          />
                        </div>
                      ) : null}
                    </div>

                    <p className="mt-8 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-600">
                      Almost there. These final questions help us understand how your symptoms are affecting
                      your sleep and overall wellbeing — two areas that are often underestimated in sinus and
                      nasal conditions.
                    </p>
                  </div>
                ) : null}

                {currentStep === 9 ? (
                  <div>
                    <h2 className="font-serif text-4xl text-neutral-800">Anything else?</h2>
                    <p className="mt-2 text-neutral-500">
                      Is there anything else about your symptoms, previous treatments, or concerns that you would like
                      our team to know before your appointment?
                    </p>

                    <label className="mt-6 flex flex-col gap-2">
                      <span className="sr-only">Additional concerns</span>
                      <textarea
                        className="min-h-40 rounded-lg border border-neutral-200 px-4 py-3 text-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-400"
                        onChange={(event) => {
                          setFormData((previous) => ({
                            ...previous,
                            submission: {
                              ...previous.submission,
                              additionalConcerns: event.target.value,
                            },
                          }));
                        }}
                        placeholder="Please describe any other symptoms, concerns, or questions you have..."
                        value={formData.submission.additionalConcerns}
                      />
                    </label>

                    <p className="mt-6 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-600">
                      You are almost finished. Your responses will be reviewed carefully before your appointment.
                    </p>
                  </div>
                ) : null}

                <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-neutral-200 pt-6">
                  <button
                    className="myent-btn-outline"
                    disabled={currentStep === 1 || isSubmitting || isSessionExpired}
                    onClick={goToPreviousStep}
                    type="button"
                  >
                    Back
                  </button>

                  {currentStep < TOTAL_STEPS ? (
                    <button
                      className="myent-btn-primary"
                      disabled={!isStepValid(currentStep, formData) || isSubmitting || isSessionExpired}
                      onClick={goToNextStep}
                      type="button"
                    >
                      Continue
                    </button>
                  ) : (
                    <button
                      className="myent-btn-primary hover:bg-teal-500"
                      disabled={isSubmitting || isSessionExpired}
                      onClick={submitAssessment}
                      type="button"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit my assessment'}
                    </button>
                  )}
                </div>

                {submissionError ? (
                  <p className="mt-4 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-600">
                    {submissionError}
                  </p>
                ) : null}
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}