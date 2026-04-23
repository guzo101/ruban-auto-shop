const brands = [
  { name: 'Willard', src: '/brands/willard.png' },
  { name: 'Raylite', src: '/brands/raylite.png' },
  { name: 'Nexen', src: '/brands/nexen.png' },
  { name: 'Double Star', src: '/brands/double-star.png' },
  { name: 'Continental', src: '/brands/continental.svg' },
  { name: 'Bridgestone', src: '/brands/bridgestone.svg' },
  { name: 'Castrol', src: '/brands/castrol.svg' },
  { name: 'Bosch', src: '/brands/bosch.svg' },
  { name: 'Monroe', src: '/brands/monroe.png' },
  { name: 'SKF', src: '/brands/skf.svg' },
] as const

export function BrandsSection() {
  const loopedBrands = [...brands, ...brands]

  return (
    <section className="border-b border-ruban-line bg-ruban-cream">
      <div className="bg-ruban-blue py-12 md:py-14">
        <div className="mx-auto max-w-[1400px] px-4 md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ruban-pink/85">
            Partner lines
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tighter text-ruban-cream md:text-4xl">
            Brands available
          </h2>
          <p className="mt-4 max-w-[70ch] text-sm leading-relaxed text-ruban-cream/85">
            We stock and source trusted local and international brands based on vehicle class,
            budget, and turnaround urgency.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-4 py-10 md:px-8 md:py-12">
        <div className="overflow-hidden rounded-2xl border border-ruban-line bg-white/70 p-3">
          <div className="ruban-marquee-track flex w-max items-center gap-4">
            {loopedBrands.map((brand, idx) => (
              <div
                key={`${brand.name}-${idx}`}
                className="flex min-h-[86px] min-w-[170px] items-center justify-center rounded-xl border border-ruban-line bg-white px-4 py-3 shadow-[0_12px_30px_-24px_rgba(9,63,180,0.45)]"
              >
                <img
                  src={brand.src}
                  alt={`${brand.name} logo`}
                  className="max-h-12 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
