import { Lifebuoy, ShieldCheck, WrenchIcon } from '@phosphor-icons/react'

const services = [
  {
    title: 'Vehicle servicing',
    image: '/promotions/ruban-vehicle-servicing-oil.png',
    body: 'Scheduled servicing for engine oil, filters, spark plugs, and safety checks. Drop-off and pick-up windows are available for customers with daytime commitments.',
    branches: 'Main Yard, North Branch, Riverside Bay',
  },
  {
    title: 'Tyre fitting and repairs',
    image: '/promotions/ruban-tyre-fitting.png',
    body: 'Precision tyre fitting, puncture repairs, valve replacement, and balancing support. We inspect wear patterns and recommend rotation cycles to extend tyre life.',
    branches: 'Main Yard, East Workshop, Airport Link Bay',
  },
  {
    title: 'Wheel balance and alignment',
    image: '/promotions/ruban-wheel-alignment.png',
    body: 'Computer-aided wheel balancing and alignment calibration to reduce vibration, uneven wear, and steering pull. Reports are shared before and after correction.',
    branches: 'Main Yard, Riverside Bay',
  },
  {
    title: 'Security and locks',
    image: '/promotions/ruban-security-locks.png',
    body: 'Vehicle lock upgrades, alarm accessories, and practical anti-theft hardware installed by trained technicians with configuration checks on handover.',
    branches: 'Main Yard, North Branch',
  },
] as const

export function WorkshopSection() {
  return (
    <section
      id="services"
      className="scroll-mt-28 border-b border-ruban-line bg-ruban-pink/25 py-16 md:py-24"
    >
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ruban-blue">Workshop</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tighter text-ruban-ink md:text-4xl">
              Auto servicing
            </h2>
            <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-ruban-muted">
              Practical workshop support designed for motorists, fleets, and independent garages that
              need reliable turnaround and clear technical updates.
            </p>
          </div>
          <div className="md:col-span-5 md:text-right">
            <p className="text-sm leading-relaxed text-ruban-muted">
              Service teams can inspect, repair, and fit parts sourced directly from our counter,
              reducing delays between diagnosis and completion.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="ruban-rise overflow-hidden rounded-[1.8rem] border border-ruban-line bg-white/90 shadow-[0_22px_46px_-30px_rgba(9,63,180,0.35)]"
              style={{ animationDelay: `${index * 110}ms` }}
            >
              <img
                src={service.image}
                alt={`${service.title} service bay`}
                className="h-52 w-full object-cover"
                loading="lazy"
              />
              <div className="space-y-4 p-6">
                <h3 className="text-[1.5rem] font-semibold tracking-tight text-ruban-blue">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-ruban-muted">{service.body}</p>
                <div className="rounded-2xl border border-ruban-line bg-ruban-cream/80 p-4">
                  <p className="text-[1.2rem] font-semibold tracking-tight text-ruban-ink">
                    Service branches:
                  </p>
                  <p className="mt-2 text-sm text-ruban-blue">{service.branches}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 text-sm text-ruban-muted md:grid-cols-3">
          <div className="rounded-2xl border border-ruban-line bg-white/70 p-4">
            <WrenchIcon size={18} className="text-ruban-blue" />
            <p className="mt-2">Technician-verified fitment notes added to selected invoices.</p>
          </div>
          <div className="rounded-2xl border border-ruban-line bg-white/70 p-4">
            <Lifebuoy size={18} className="text-ruban-blue" />
            <p className="mt-2">Emergency supply support available for stranded fleet vehicles.</p>
          </div>
          <div className="rounded-2xl border border-ruban-line bg-white/70 p-4">
            <ShieldCheck size={18} className="text-ruban-blue" />
            <p className="mt-2">Warranty terms explained upfront before installation starts.</p>
          </div>
        </div>

      </div>
    </section>
  )
}
