import type { Surgeon } from '@/content/types'

export const surgeons: Surgeon[] = [
  {
    id: 'dr-catherine-banks',
    name: 'Dr Catherine Banks',
    slug: 'dr-catherine-banks',
    role: 'Rhinology and Anterior Skull Base · Paediatric and Adult General ENT',
    credentials:
      'MBChB, FRACS (ORL-HNS). First Australasian surgeon to complete the Harvard/MEEI rhinology fellowship. RACS Court of Examiners for ASOHNS. Co-founder, Base of Skull Service, Sydney Children\'s Hospital.',
    contextualNote: "Consulting at Macquarie Street and Sydney Children's Hospital, Randwick.",
    fellowships: [
      'Harvard Medical School / Massachusetts Eye and Ear Hospital / Massachusetts General Hospital, Boston',
      'University of Birmingham, Alabama',
    ],
    hospitals: [
      'Prince of Wales Hospital',
      'Sydney Hospital',
      'Sydney Eye Hospital',
      "Sydney Children's Hospital (Randwick)",
    ],
    researchNote: 'NHMRC grant holder. PhD candidate at UNSW. Research in sinus stem cell therapeutics.',
    initials: 'CB',
  },
  {
    id: 'dr-lyndon-chan',
    name: 'Dr Lyndon Chan',
    slug: 'dr-lyndon-chan',
    role: 'Obstructive Sleep Apnoea and Snoring, Rhinology, Skull Base, Adult and Paediatric ENT',
    credentials:
      'MBBS (Hons), FRACS (Otorhinolaryngologist). Board member, International Surgical Sleep Society (ISSS).',
    fellowships: [
      'Duke University Hospital, USA',
      'Singapore General Hospital, Singapore',
      'Wollongong Hospital, Australia',
    ],
    hospitals: ['Northern Beach Hospital', 'Wollongong Hospital'],
    initials: 'LC',
  },
  {
    id: 'dr-june-huang',
    name: 'Dr June Huang',
    slug: 'dr-june-huang',
    role: 'Otology, General and Paediatric ENT',
    credentials:
      'MBChB, FRACS (OHNS). Medical degree from University of Manchester, England. ENT training across NSW including Newcastle, Wollongong, and Canberra.',
    fellowships: ['Otology fellowship, St Vincent\'s Hospital, Sydney'],
    hospitals: ['St George Hospital'],
    initials: 'JH',
  },
  {
    id: 'dr-rithvik-reddy',
    name: 'Dr Rithvik Reddy',
    slug: 'dr-rithvik-reddy',
    role: 'Complex otology, auditory implants, lateral skull base surgery, general and paediatric ENT',
    credentials:
      'FRACS (ORL-HNS). FRACS (Otolaryngology, Head and Neck Surgery). Consultant appointments: Sydney Children\'s Hospital; Liverpool Hospital (adult and paediatric).',
    fellowships: [
      "Advanced fellowship in Complex Otology, Auditory Implants and Lateral Skull Base Surgery, Guy's and St Thomas' NHS Trust, London",
      "Executive Fellowship in Surgical Leadership and Innovation, King's College London",
    ],
    hospitals: [
      'Prince of Wales Hospital',
      'Sydney Hospital',
      "Sydney Children's Hospital (Randwick)",
      'Liverpool Hospital',
    ],
    initials: 'RR',
  },
]
