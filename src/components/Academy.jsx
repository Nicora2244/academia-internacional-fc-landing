export default function Academy() {
  return (
    <section id="academy" className="relative overflow-hidden bg-white py-24">
      <div className="blob blob-blue -right-32 bottom-0 h-[542px] w-[542px] opacity-50" />
      <div className="blob blob-lime left-1/3 top-10 h-[400px] w-[520px] opacity-40" />

      <div className="relative mx-auto grid max-w-page items-center gap-12 px-8 lg:grid-cols-2">
        {/* Photo collage — large back image with a smaller offset image overlapping */}
        <div className="relative h-[460px] sm:h-[520px]">
          {/* Back / large image (placeholder — awaiting final asset from Figma) */}
          <div className="absolute left-0 top-0 h-[78%] w-[62%] overflow-hidden rounded-2xl bg-slate-100 shadow-lg">
            <img
              src="/assets/img09.png"
              alt="Academia Internacional FC player"
              className="h-full w-full object-cover"
            />
          </div>
          {/* Front / smaller offset image */}
          <div className="absolute bottom-0 right-0 h-[62%] w-[48%] overflow-hidden rounded-2xl border-4 border-white shadow-xl">
            <img
              src="/assets/img11.jpg"
              alt="Training session in Palmira, Colombia"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div>
          <p className="font-label text-base font-semibold uppercase tracking-[0.18em] text-brand-500">
            Where Talent Meets Precision
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight text-ink sm:text-5xl">
            Academia Internacional FC
          </h2>
          <p className="mt-6 font-sans text-lg leading-relaxed text-slate-600">
            Based in Palmira, Colombia, for over 8 years, the academy has refined
            a scientific, humanistic methodology to develop players from age 5 to
            20. Known for producing technical, fast-acting, and fiercely
            competitive athletes, they are transforming raw potential into
            world-ready talent.
          </p>
          <a href="#camp" className="btn-primary mt-8">
            See more
          </a>
        </div>
      </div>
    </section>
  )
}
