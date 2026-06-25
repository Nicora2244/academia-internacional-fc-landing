const pillars = [
  {
    title: 'FÚTBOL',
    image: '/assets/img06.png',
    text: 'Two daily sessions with professional coaches, training the South American way: technical, creative, and intense. This is the real thing.',
  },
  {
    title: 'CULTURA',
    image: '/assets/img11.jpg',
    text: "Your player doesn't visit Colombia. They live it. The food, the music, the people, the rhythm of a city where football is part of everyday life.",
  },
  {
    title: 'CONEXIÓN',
    image: '/assets/img10.png',
    text: 'Training alongside Colombian players creates something no classroom can teach. Different backgrounds, same language: football.',
  },
]

export default function Pillars() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="blob blob-lime -left-40 top-40 h-[420px] w-[560px] opacity-60" />

      <div className="relative mx-auto max-w-page px-8">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="font-label text-base font-semibold uppercase tracking-[0.2em] text-slate-500">
            An experience shaped by
          </p>
          <h2 className="mt-2 font-display text-4xl font-bold uppercase text-brand-500">
            Our Pillars
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="group">
              <div className="aspect-square overflow-hidden rounded-2xl">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-5 font-label text-2xl font-extrabold uppercase tracking-wide text-ink">
                {pillar.title}
              </h3>
              <p className="mt-3 font-sans text-base leading-relaxed text-slate-600">
                {pillar.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
