const items = [
  'Brake friction',
  'Suspension arms',
  'Timing kits',
  'Clutch hydraulics',
  'AC compressors',
  'Lighting assemblies',
  'Turbochargers',
  'Wheel bearings',
  'Filters',
  'Ignition coils',
] as const

export function PartsMarquee() {
  const sequence = [...items, ...items]
  return (
    <div className="border-y border-ruban-line bg-ruban-blue text-ruban-cream">
      <div className="relative overflow-hidden py-3">
        <div className="ruban-marquee-track flex w-max items-center gap-10 whitespace-nowrap px-6 text-xs font-semibold uppercase tracking-[0.28em]">
          {sequence.map((label, i) => (
            <span key={`${label}-${i}`} className="inline-flex items-center gap-10">
              <span>{label}</span>
              <span className="h-1 w-1 rounded-full bg-ruban-pink" aria-hidden />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
