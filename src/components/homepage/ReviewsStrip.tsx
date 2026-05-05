const reviews = [
  {
    name: 'Jonah S',
    surgeon: 'Dr Catherine Banks',
    platform: 'Google Review',
    text: 'I want to express my heartfelt gratitude to Dr Catherine Banks and Nurse Practitioner Justine Oates for the outstanding care I received. From the very beginning, both of you showed such professionalism, kindness, and genuine concern for my wellbeing. Dr Banks, your expertise and precision have made a material difference in my breathing, which has truly transformed my daily life. Justine, your support, reassurance, and attentive care throughout the process made me feel comfortable and confident every step of the way. Together, you created an experience that was not only medically effective but also deeply compassionate. I can now breathe freely, and the improvement has been life-changing. I feel incredibly fortunate to have been under your care, and I would wholeheartedly recommend your team to anyone seeking exceptional ENT treatment.',
  },
  {
    name: 'Richard Wong',
    surgeon: 'Dr Lyndon Chan',
    platform: 'Google Review',
    text: 'Wholeheartedly recommend and endorse Dr Lyndon Chan. He saw my 7 year old son at short notice and was caring, understanding and saw to every one of my child\'s needs. And he was outstanding, both in the way he dealt with me and my wife (and was even cognisant of the different ways that Dad and Mum may interpret the same medical situation), but most importantly — Dr Chan took the time to explain to my son (in terms that he could understand), exactly what he was doing, what he was looking for and the path forward. My son left the appointment happy, content and I could tell that he felt like a huge weight was lifted off his young shoulders. Cannot recommend Dr Chan highly enough.',
  },
  {
    name: 'Akemi',
    surgeon: 'Dr Catherine Banks',
    platform: 'Google Review',
    text: 'Earlier this year, I underwent surgery for a large skull base meningioma, a complex procedure performed jointly by Dr. Banks and a neurosurgeon. Thanks to their exceptional skill and expertise, the surgery was a great success. Before the operation, I was losing vision in my right eye, but since the procedure, I have regained my sight. Throughout the entire process Dr. Banks, nurse Justine, Michelle, and her team have been nothing short of amazing. They were consistently responsive, reliable, and caring, making a challenging journey much easier to navigate. Dr. Banks is not only a highly skilled surgeon but also such a compassionate doctor with a wonderful bedside manner. I felt truly cared for as a patient, and I am so grateful for her expertise and support. I would highly recommend Dr. Banks.',
  },
  {
    name: 'Craig Horwitz',
    surgeon: 'Dr Catherine Banks',
    platform: 'Google Review',
    text: 'Dr Banks is an incredible surgeon who is skilful, compassionate and caring. She recently corrected my significantly deviated septum and I am very happy with the result — \'I can breathe again.\' Justine her nurse goes out of her way to ensure you are comfortable and taken care of. I cannot recommend Dr Banks highly enough.',
  },
]

export function ReviewsStrip() {
  return (
    <section className="myent-section border-t border-neutral-100 bg-neutral-50">
      <div className="myent-container">

        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="myent-eyebrow">Patient feedback</p>
            <h2 className="mt-3 text-3xl lg:text-4xl">What our patients say.</h2>
            <div className="mt-3 flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-medium text-neutral-700">4.8 · 33 reviews</span>
              <a
                href="https://www.google.com/search?q=dr+catherine+banks+my-ent+reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-teal-500 hover:text-teal-600"
              >
                View all on Google →
              </a>
            </div>
          </div>
          <p className="text-xs text-neutral-400 sm:text-right">
            Reviews reproduced verbatim from Google.<br />
            No reviews have been edited or selectively omitted.
          </p>
        </div>

        {/* Review cards */}
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="myent-card flex flex-col justify-between gap-4"
            >
              <p className="text-sm leading-relaxed text-neutral-600">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center justify-between border-t border-neutral-100 pt-4">
                <div>
                  <p className="text-sm font-medium text-neutral-800">{review.name}</p>
                  <p className="text-xs text-neutral-400">{review.surgeon} · {review.platform}</p>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AHPRA compliance note */}
        <p className="mt-6 text-center text-xs text-neutral-400">
          Patient feedback is published in accordance with AHPRA guidelines for advertising regulated health services.
          Reviews are verbatim and unedited from public platforms.{' '}
          <a
            href="https://www.google.com/search?q=dr+catherine+banks+my-ent+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-500 hover:text-teal-600"
          >
            View the complete Google review record.
          </a>
        </p>

      </div>
    </section>
  )
}
