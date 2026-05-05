const deals = [
  {
    title: 'Safeline brake pads and GUD filters',
    image: '/promotions/ruban-brakes.png',
    copy: 'Get 15% off selected Safeline brake pads and GUD filter lines during the active promo window.',
  },
  {
    title: 'Lubricants full-range offer',
    image: '/promotions/ruban-oil.png',
    copy: 'Save 15% this month on qualifying lubricant ranges from participating brands and branches.',
  },
  {
    title: 'Hot deal on GUD filters',
    image: '/promotions/ruban-filters.png',
    copy: 'Receive a 15% discount on approved GUD filter products while promotional stock lasts.',
  },
] as const

export function PromoDealsSection() {
  return (
    <section id="deals" className="scroll-mt-28 border-b border-ruban-line bg-ruban-pink/20 py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ruban-blue">
              Current deals
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tighter text-ruban-ink md:text-4xl">
              Featured monthly promotions
            </h2>
            <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-ruban-muted">
              These are active Rubam Auto promotional campaigns. Offer timing, stock levels, and
              participating locations may vary by branch.
            </p>
          </div>
          <p className="text-sm leading-relaxed text-ruban-muted md:col-span-5 md:text-right">
            Contact the parts desk to confirm product availability, eligibility, and branch-specific
            terms before collection.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-7 lg:grid-cols-3">
          {deals.map((deal, index) => (
            <article
              key={deal.title}
              className="ruban-rise overflow-hidden rounded-[1.8rem] border border-ruban-line bg-white/90 shadow-[0_20px_46px_-30px_rgba(9,63,180,0.34)]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex h-[420px] w-full items-center justify-center bg-ruban-cream/70 p-2">
                <img
                  src={deal.image}
                  alt={`${deal.title} promotion poster`}
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold tracking-tight text-ruban-blue">{deal.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ruban-muted">{deal.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
