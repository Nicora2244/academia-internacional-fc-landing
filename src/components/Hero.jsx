export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      {/* Decorative gradient blobs */}
      <div className="blob blob-lime -right-24 -top-72 h-[700px] w-[700px]" />
      <div className="blob blob-blue right-0 -top-44 h-[642px] w-[642px] opacity-70" />
      <div className="blob blob-lime -left-72 top-[400px] h-[642px] w-[642px]" />

      <div className="relative mx-auto max-w-page px-6 pt-10">
        {/* Headline */}
        <h1 className="text-center font-display text-[12vw] font-bold uppercase leading-[1.05] tracking-tight text-brand-500 sm:text-7xl lg:text-[124px]">
          <span className="block text-left">Go South.</span>
          <span className="block text-right">Play Real.</span>
        </h1>

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-2">
          {/* Copy + CTA */}
          <div className="max-w-md">
            <h2 className="font-sans text-3xl font-medium uppercase leading-none text-ink sm:text-4xl">
              Spots are limited
            </h2>
            <p className="mt-4 font-sans text-xl font-light leading-snug text-slate-700">
              Your player deserves more than another local camp. Come to South
              America, where the best players in the world learned to play. Real
              training, real culture, real growth.
            </p>
            <a href="#camp" className="btn-primary mt-6">
              Apply Now
            </a>
          </div>
        </div>

        {/* Photo band */}
        <div className="relative mt-12 h-[260px] overflow-hidden rounded-lg sm:h-[320px]">
          <img
            src="/assets/img01.jpg"
            alt="Players training on a South American football field"
            className="h-full w-full object-cover object-[center_72%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
        </div>
      </div>
    </section>
  )
}
