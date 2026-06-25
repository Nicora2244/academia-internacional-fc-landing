import { useState } from 'react'

const faqs = [
  {
    q: 'Is Colombia safe?',
    a: 'Yes. Athletes stay in vetted accommodation in Cali with a bilingual coordinator present at all times. Transfers, training and activities are fully supervised, and we follow strict safety protocols throughout the program.',
  },
  {
    q: 'What are the age requirements?',
    a: 'Our camps are designed for players aged 10 to 18. Groups are organized by age and level to keep training appropriate and competitive.',
  },
  {
    q: 'Who supervises the athletes?',
    a: 'A bilingual coordinator and professional coaching staff accompany the athletes during training, meals and all activities, from arrival to departure.',
  },
  {
    q: 'What is the food like?',
    a: 'Three balanced meals a day are included, prepared with athletes in mind and offering a real taste of Colombian cuisine.',
  },
  {
    q: 'What happens if someone gets injured?',
    a: 'Every athlete is covered by international medical insurance. Our staff is trained to respond, and players have quick access to medical care when needed.',
  },
  {
    q: 'What is the accommodation like?',
    a: 'Players stay in a comfortable 3-star countryside hotel in Cali, in shared rooms with their teammates and full supervision.',
  },
  {
    q: 'Do athletes need to speak Spanish?',
    a: 'No. A bilingual coordinator supports the group at all times, and football is a language everyone already shares.',
  },
  {
    q: 'How do payments work?',
    a: 'After applying, you receive a confirmation with payment details. A deposit secures the spot, with the balance due before the program start date.',
  },
  {
    q: 'What is NOT included?',
    a: 'International flights, personal expenses, travel documents and optional tours are not included in the program price.',
  },
  {
    q: 'Is travel insurance included?',
    a: 'International medical insurance is included for the duration of the camp. We recommend additional personal travel insurance for flights and belongings.',
  },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-slate-200">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 py-4 text-left"
        aria-expanded={open}
      >
        <span className="font-label text-base font-semibold text-ink">{q}</span>
        <svg
          className={`h-3 w-3 shrink-0 text-brand-500 transition-transform duration-300 ${
            open ? 'rotate-90' : ''
          }`}
          viewBox="0 0 8 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="m1 1 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ${
          open ? 'grid-rows-[1fr] pb-4' : 'grid-rows-[0fr]'
        }`}
      >
        <p className="min-h-0 font-sans text-sm leading-relaxed text-slate-600">
          {a}
        </p>
      </div>
    </div>
  )
}

export default function Faq() {
  const mid = Math.ceil(faqs.length / 2)
  const columns = [faqs.slice(0, mid), faqs.slice(mid)]

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-page px-8">
        <div className="mb-14 text-center">
          <p className="font-label text-base font-semibold uppercase tracking-[0.2em] text-slate-500">
            Important Things You Should Know
          </p>
          <h2 className="mt-2 font-display text-4xl font-bold uppercase text-brand-500">
            FAQ
          </h2>
        </div>

        <div className="mx-auto grid max-w-4xl gap-x-12 md:grid-cols-2">
          {columns.map((col, i) => (
            <div key={i}>
              {col.map((item) => (
                <FaqItem key={item.q} {...item} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
