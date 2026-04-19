// TODO: CLINICAL REVIEW — awaiting Dr Banks sign-off (Tier C)

import type { Metadata } from 'next'
import Image from 'next/image'
import { ConditionPageTemplate } from '@/components/templates/ConditionPageTemplate'

export const metadata: Metadata = {
  title: 'Voice Disorders Sydney | Hoarse Voice Specialist ENT',
  description:
    'Voice disorder information for Sydney patients — symptoms of dysphonia, causes, when to seek specialist ENT review, and treatment options at My-ENT.',
  alternates: {
    canonical: '/conditions/voice-disorders',
  },
}

export default function VoiceDisordersPage() {
  return (
    <ConditionPageTemplate
      slug="voice-disorders"
      title="Voice disorders"
      clinicalTerm="Dysphonia"
      plainEnglishSummary="A voice disorder means that the voice sounds different from normal — hoarse, breathy, strained, or effortful — or that the voice tires more quickly than expected. Voice changes can reflect conditions affecting the vocal cords, the larynx, or related structures, and they deserve proper assessment when they persist beyond a few weeks."
            heroImageSlot={
        <Image
          src="/images/Conditions/voice-disorders-condition-myent.webp"
          alt="ENT laryngology consultation for voice disorder symptoms at My-ENT Sydney."
          width={1200}
          height={675}
          priority={true}
          className="h-full w-full object-cover"
        />
      }
      symptoms={[
        'Hoarse, rough, or raspy voice quality.',
        'Breathy or weak voice, or voice that gives out unexpectedly.',
        'Voice fatigue — needing more effort than usual to project or sustain speech.',
        'Loss of upper vocal range, particularly noticeable in singers or teachers.',
        'Voice breaks or sudden pitch changes during speaking.',
        'A sensation of something in the throat, prompting repeated clearing.',
        'Pain or discomfort when speaking or projecting the voice.',
      ]}
      causes={[
        'Overuse or misuse of the voice - speaking or singing beyond comfortable limits, or continuing through vocal fatigue - particularly in people who rely heavily on their voice professionally.',
        'Acid reflux reaching the throat and irritating the voice box, often without the typical heartburn symptoms.',
        'Vocal fold lesions including nodules, polyps, or cysts developing in response to vocal overuse or trauma.',
        'Paralysis of one or both vocal folds following surgery, infection, or injury to the nerve that controls them.',
        'Any hoarseness lasting more than three weeks warrants laryngoscopic assessment to exclude a serious underlying cause.',
      ]}
      causesCitation="Stachler RJ et al. Clinical Practice Guideline: Hoarseness (Dysphonia). Otolaryngol Head Neck Surg. 2018;158(1 Suppl):S1-S42."
      whenToSeekHelp="Hoarseness persisting beyond three to four weeks should be assessed by an ENT surgeon, particularly in current or former smokers. Prompt review is important when the voice changes follow neck surgery, when swallowing is also affected, or when there is associated breathlessness or noisy breathing. Voice changes in professional voice users — singers, teachers, lawyers — warrant early assessment."
      treatmentOverview="Accurate diagnosis requires direct visualisation of the vocal cords. Nasendoscopy allows the vocal cords to be assessed in the consulting room, often while the patient is speaking or singing. Treatment depends on the underlying cause and may include voice therapy with a speech pathologist, medical management of contributing conditions such as reflux, lifestyle changes, or surgical assessment of the vocal cords under general anaesthesia when a structural lesion is identified."
      relatedProcedures={[
        {
          title: 'Nasendoscopy',
          href: '/procedures/nasendoscopy',
        },
        {
          title: 'Microlaryngoscopy',
          href: '/procedures/microlaryngoscopy',
        },
      ]}
    />
  )
}
