import { useState } from 'react'

const slides = [
  {
    image: '/assets/img07.png',
    caption: 'Cali by night — the capital of South American football culture.',
  },
  {
    image: '/assets/img11.jpg',
    caption: 'A city where the game lives in every street and every barrio.',
  },
  {
    image: '/assets/img01.jpg',
    caption: 'Real fields, real intensity, real growth for your player.',
  },
]

export default function Colombia() {
  const [active, setActive] = useState(0)

  return (
    <section className="bg-white pb-24 pt-8">
      <div className="mx-auto max-w-page px-8">
        <div className="relative overflow-hidden rounded-2xl">
          {/* Slides */}
          <div className="relative h-[420px] sm:h-[560px]">
            {slides.map((slide, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  i === active ? 'opacity-100' : 'opacity-0'
                }`}
                aria-hidden={i !== active}
              >
                <img
                  src={slide.image}
                  alt={slide.caption}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 sm:p-12">
                  <span className="font-display text-4xl font-bold uppercase text-lime sm:text-6xl">
                    Colombia
                  </span>
                  <p className="mt-3 max-w-lg font-sans text-lg font-light text-white">
                    {slide.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-6 flex items-center justify-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === active ? 'w-8 bg-brand-500' : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
