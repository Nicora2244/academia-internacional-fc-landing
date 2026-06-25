const links = [
  { label: 'Home', href: '#home' },
  { label: 'About academy', href: '#academy' },
  { label: 'Next Level Camp', href: '#camp' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-24 max-w-page items-center justify-between px-8">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3" aria-label="Academia Internacional FC home">
          <span className="grid h-11 w-11 place-items-center rounded-full border-2 border-brand-500 bg-ink">
            <span className="font-display text-sm font-bold text-lime">AI</span>
          </span>
          <span className="font-label text-lg font-extrabold uppercase tracking-tight text-ink">
            Academia <span className="text-brand-500">Internacional</span>
          </span>
        </a>

        {/* Nav */}
        <nav className="flex items-center gap-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full px-4 py-2 font-label text-sm font-semibold uppercase tracking-wide text-slate-700 transition-colors hover:text-brand-500"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
