const plans = [
  {
    name: 'One Week',
    price: '$1,500',
    unit: 'USD per athlete',
    blurb:
      'One week of full immersion in Colombian football. Your player trains twice a day with professional coaches, eats with the team, lives in Cali and goes home with something no local camp can offer.',
    meta: ['7 nights / 8 days', '10–18 years old'],
    highlight: false,
    includes: [
      'Max. 12 athletes per camp. Small groups, high attention.',
      'Training 2x/day with professional coaches. 3-star countryside hotel in Cali. 3 meals/day. All transfers included. International medical insurance. Bilingual coordinator. Welcome kit. Performance report and certificate.',
    ],
    excludes:
      'International flights. Personal expenses. Travel documents. Optional tours.',
  },
  {
    name: 'Two Weeks',
    price: '$2,600',
    unit: 'USD per athlete',
    blurb:
      'Two weeks gives your player time to settle in, find their rhythm and grow. By the second week, the training clicks. They also get to experience professional Colombian football from the inside.',
    meta: ['14 nights / 15 days', '10–18 years old'],
    highlight: true,
    includes: [
      'Max. 10 athletes per camp.',
      'Everything in Camp Inter. Tour to professional clubs in Valle del Cauca. Performance evaluation and individual development report. Bilingual coordinator throughout.',
    ],
    excludes:
      'International flights. Personal expenses. Travel documents. Optional tours.',
  },
  {
    name: 'Four Weeks',
    price: '$4,250',
    unit: 'USD per athlete',
    blurb:
      'The complete South American experience. Your player trains hard, discovers the country beyond the pitch, from Cali to the Coffee Region, and comes back transformed. This one is for families who want to go all in.',
    meta: ['25 nights / 26 days', '10–18 years old'],
    highlight: false,
    includes: [
      'Max. 8 athletes per camp. Exclusive, premium.',
      'Everything in Inter Inmersión. Cultural tour to Eje Cafetero, Cartagena or Medellín. Pre and post-trip support. Complete cultural and athletic experience.',
    ],
    excludes:
      'International flights. Personal expenses. Travel documents. Optional tours.',
  },
]

function Check() {
  return (
    <svg className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Cross() {
  return (
    <svg className="mt-0.5 h-5 w-5 shrink-0 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Pricing() {
  return (
    <section id="camp" className="bg-white py-24">
      <div className="mx-auto max-w-page px-8">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="font-label text-base font-semibold uppercase tracking-[0.2em] text-slate-500">
            Choose your plan and start standing out
          </p>
          <h2 className="mt-2 font-display text-4xl font-bold uppercase text-brand-500">
            Next Level Camp
          </h2>
        </div>

        {/* Plans */}
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`flex flex-col rounded-3xl border p-8 transition-shadow ${
                plan.highlight
                  ? 'border-brand-500 bg-brand-50 shadow-xl lg:-mt-4 lg:mb-4'
                  : 'border-slate-200 bg-white hover:shadow-lg'
              }`}
            >
              {plan.highlight && (
                <span className="mb-4 inline-flex w-fit rounded-full bg-brand-500 px-3 py-1 font-label text-xs font-bold uppercase tracking-wide text-white">
                  Most popular
                </span>
              )}
              <h3 className="font-label text-2xl font-extrabold uppercase text-ink">
                {plan.name}
              </h3>
              <div className="mt-4">
                <span className="font-display text-4xl font-bold text-ink">
                  {plan.price}
                </span>
                <span className="ml-1 font-sans text-sm text-slate-500">
                  {plan.unit}
                </span>
              </div>

              <p className="mt-5 font-sans text-sm leading-relaxed text-slate-600">
                {plan.blurb}
              </p>

              <a
                href="#"
                className={`mt-6 inline-flex w-fit items-center justify-center rounded-full px-6 py-2.5 font-label text-sm font-bold uppercase tracking-wide transition-colors ${
                  plan.highlight
                    ? 'bg-brand-500 text-white hover:bg-brand-600'
                    : 'border border-brand-500 text-brand-500 hover:bg-brand-50'
                }`}
              >
                See More
              </a>

              {/* Meta tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {plan.meta.map((m) => (
                  <span
                    key={m}
                    className="rounded-full bg-slate-100 px-3 py-1 font-sans text-xs font-medium text-slate-600"
                  >
                    {m}
                  </span>
                ))}
              </div>

              {/* Includes */}
              <ul className="mt-6 space-y-3 border-t border-slate-200 pt-6">
                {plan.includes.map((inc) => (
                  <li key={inc} className="flex gap-3">
                    <Check />
                    <span className="font-sans text-sm leading-snug text-slate-700">
                      {inc}
                    </span>
                  </li>
                ))}
                <li className="flex gap-3">
                  <Cross />
                  <span className="font-sans text-sm leading-snug text-slate-400">
                    {plan.excludes}
                  </span>
                </li>
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
