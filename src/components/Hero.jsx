export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      {/* Decorative gradient blobs */}
      <div className="blob blob-lime -right-24 -top-72 h-[700px] w-[700px]" />
      <div className="blob blob-blue right-0 -top-44 h-[642px] w-[642px] opacity-70" />
      <div className="blob blob-lime -left-72 top-[400px] h-[642px] w-[642px]" />

      <div className="relative mx-auto max-w-page px-6 pt-10">
        {/* Headline */}
        <h1 className="relative z-20 text-center font-display text-[12vw] font-bold uppercase leading-[1.05] tracking-tight text-brand-500 sm:text-7xl lg:text-[124px]">
          <span className="block text-left">Go South.</span>
          <span className="block text-right">Play Real.</span>
        </h1>

        {/* Copy + player photo band */}
        <div className="relative mt-6 min-h-[460px] sm:min-h-[540px]">
          {/* Player photo — anchored bottom-right, bleeding to the edge */}
          <div className="pointer-events-none absolute inset-y-0 right-0 z-0 w-full overflow-hidden rounded-lg sm:w-[62%] lg:w-[56%]">
            <img
              src="/assets/img04.jpg"
              alt="Academia Internacional FC player driving forward on the pitch"
              className="h-full w-full object-cover object-[center_30%]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent sm:from-white/80" />
          </div>

          {/* Copy + CTA */}
          <div className="relative z-10 max-w-md pt-10 sm:pt-24">
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
      </div>
    </section>
  )
}
