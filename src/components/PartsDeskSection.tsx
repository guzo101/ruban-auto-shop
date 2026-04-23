import { CircleNotch } from '@phosphor-icons/react'

const categories = [
  {
    title: 'Lubricants',
    image: '/promotions/ruban-oil.png',
    body: 'Synthetic and mineral oils, ATF, coolants, and brake fluids selected for passenger cars, SUVs, and light-duty fleets. We recommend grade by mileage, climate, and service interval.',
    brands: 'Castrol, Shell, TotalEnergies, Fuchs, Mobil',
  },
  {
    title: 'Suspension',
    image: '/promotions/ruban-suspension-kit.png',
    body: 'Shock absorbers, struts, control arms, bushings, links, and mounting kits for rough-road and city use. Every quote includes compatibility checks before dispatch.',
    brands: 'KYB, Monroe, Gabriel, Sachs, SKF',
  },
  {
    title: 'Car care and accessories',
    image: '/promotions/ruban-car-care-maintenance-kit.png',
    body: 'Ruban stocks detailing chemicals, cleaning tools, polish systems, and practical add-ons that improve comfort and exterior finish. From daily maintenance to presentation prep, we help you match products to driving conditions and vehicle usage.',
    brands: 'Turtle Wax, Luxor, Pratley, GUD, Bosch, Hella, Holts, Wynns, Shield, Spanjaard, NF',
  },
  {
    title: 'Vehicle parts',
    image: '/promotions/ruban-complete-kit.png',
    body: 'A broad catalogue of approved replacement parts across braking, ignition, cooling, and steering systems. If an item is unavailable locally, we source from partner depots.',
    brands: 'Federal-Mogul, Bosch, Hella, Contitech, Mahle',
  },
  {
    title: 'Tyres, tubes and rims',
    image: '/promotions/ruban-tyres-range.png',
    body: 'Road, mixed-terrain, and commercial tyre options with matching tubes and wheel sizes. Our team helps choose tread pattern and load rating for your exact route profile.',
    brands: 'Goodyear, Bridgestone, Continental, Nexen, Double Star',
  },
  {
    title: 'Batteries and electrical',
    image: '/promotions/ruban-batteries-bundle.png',
    body: 'Starting batteries, charging accessories, fuses, relays, and terminals with on-counter testing guidance. High-demand sizes are kept ready for same-day pickup.',
    brands: 'Raylite, Willard, Exide, Yuasa, Hi-Fase',
  },
] as const

export function PartsDeskSection() {
  return (
    <section id="parts" className="scroll-mt-28 border-b border-ruban-line bg-ruban-cream py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ruban-blue">Products</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tighter text-ruban-ink md:text-4xl">
              Vehicle parts and products
            </h2>
            <p className="mt-4 max-w-[58ch] text-base leading-relaxed text-ruban-muted">
              Ruban Auto Shop carries a wide selection of maintenance and replacement items for daily
              drivers, workshop fleets, and off-road vehicles.
            </p>
          </div>
          <p className="text-sm leading-relaxed text-ruban-muted md:col-span-6 md:text-right">
            Share your registration, VIN, or old part photo and our team will match the right
            product line before payment to reduce returns and install delays.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category, index) => (
            <article
              key={category.title}
              className="ruban-rise overflow-hidden rounded-[1.75rem] border border-ruban-line bg-white/90 shadow-[0_20px_42px_-28px_rgba(9,63,180,0.32)]"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <div className="flex h-56 w-full items-center justify-center bg-ruban-cream/70 p-2">
                <img
                  src={category.image}
                  alt={`${category.title} for vehicle maintenance`}
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-[1.35rem] font-semibold tracking-tight text-ruban-blue">
                  {category.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ruban-muted">{category.body}</p>
                <p className="mt-5 text-[1.2rem] font-semibold tracking-tight text-ruban-ink">
                  Available brands:
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ruban-blue/95">{category.brands}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-ruban-muted">
          <CircleNotch size={16} className="animate-spin" weight="duotone" />
          Live inventory updates during business hours
        </div>
      </div>
    </section>
  )
}
