import { useState } from 'react'

const slides = [
  `${import.meta.env.BASE_URL}assets/img13.png`,
  `${import.meta.env.BASE_URL}assets/img08.png`,
  `${import.meta.env.BASE_URL}assets/img11.jpg`,
]

export default function Colombia() {
  const [active, setActive] = useState(0)

  return (
    <section className="bg-white pb-24 pt-8">
      <div className="mx-auto max-w-page px-8">
        <div className="relative overflow-hidden rounded-2xl">
          {/* Slides */}
          <div className="relative h-[420px] sm:h-[560px]">
            {slides.map((image, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  i === active ? 'opacity-100' : 'opacity-0'
                }`}
                aria-hidden={i !== active}
              >
                <img
                  src={image}
                  alt="Colombia"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}

            {/* Why Colombia card — bottom right */}
            <div className="absolute bottom-0 right-0 bg-white px-10 py-8 sm:px-16 sm:py-10">
              <h2 className="font-display text-3xl font-bold uppercase text-ink sm:text-4xl">
                Why Colombia?
              </h2>
            </div>
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
