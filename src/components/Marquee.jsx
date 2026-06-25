export default function Marquee() {
  const items = Array.from({ length: 6 })
  return (
    <div className="overflow-hidden border-y border-slate-100 bg-ink py-3">
      <div className="flex w-max animate-marquee items-center gap-12 whitespace-nowrap">
        {/* Duplicated track for a seamless loop */}
        {[...items, ...items].map((_, i) => (
          <span key={i} className="flex items-center gap-12">
            <span className="font-display text-xl font-bold uppercase tracking-wide text-white">
              Go South. Play Real.
            </span>
            <span className="h-2 w-2 rounded-full bg-lime" />
          </span>
        ))}
      </div>
    </div>
  )
}
