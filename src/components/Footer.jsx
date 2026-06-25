export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="blob blob-blue -right-32 -top-32 h-[420px] w-[420px] opacity-30" />

      <div className="relative mx-auto max-w-page px-8 py-16">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full border-2 border-brand-500 bg-white/5">
                <span className="font-display text-sm font-bold text-lime">AI</span>
              </span>
              <span className="font-label text-lg font-extrabold uppercase tracking-tight">
                Academia Internacional
              </span>
            </div>
            <p className="mt-4 font-display text-2xl font-bold uppercase text-lime">
              Go South. Play Real.
            </p>
            <p className="mt-3 font-sans text-sm text-white/60">
              Intensive football training and cultural immersion in Palmira &
              Cali, Colombia.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="font-label text-sm font-bold uppercase tracking-wide text-white/40">
                Explore
              </h4>
              <ul className="mt-4 space-y-2 font-sans text-sm">
                <li><a href="#home" className="text-white/80 hover:text-lime">Home</a></li>
                <li><a href="#academy" className="text-white/80 hover:text-lime">About academy</a></li>
                <li><a href="#camp" className="text-white/80 hover:text-lime">Next Level Camp</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-label text-sm font-bold uppercase tracking-wide text-white/40">
                Contact
              </h4>
              <ul className="mt-4 space-y-2 font-sans text-sm">
                <li><a href="mailto:info@academiainternacionalfc.com" className="text-white/80 hover:text-lime">Email us</a></li>
                <li><a href="#" className="text-white/80 hover:text-lime">Instagram</a></li>
                <li><a href="#camp" className="text-white/80 hover:text-lime">Apply now</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center font-sans text-xs text-white/40 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} Academia Internacional FC. All rights reserved.</p>
          <p>Palmira · Cali · Colombia</p>
        </div>
      </div>
    </footer>
  )
}
