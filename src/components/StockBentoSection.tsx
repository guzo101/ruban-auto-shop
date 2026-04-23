import { Package, Prohibit, Truck, WarehouseIcon } from '@phosphor-icons/react'

export function StockBentoSection() {
  return (
    <section id="stock" className="scroll-mt-28 border-b border-ruban-line bg-ruban-cream py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ruban-blue">Stock</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tighter text-ruban-ink md:text-4xl">
              Bento board for how parts actually move.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-ruban-muted md:text-right">
            Uneven tiles on purpose: wide tiles carry operational truth, narrow tiles carry policy.
            Collapses cleanly to a single column under 768px.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-2 md:gap-5">
          <article className="md:col-span-7 md:row-span-2 rounded-[2.25rem] border border-ruban-line bg-white/90 p-8 shadow-[0_24px_50px_-30px_rgba(9,63,180,0.28)] md:p-10">
            <div className="flex items-start gap-4">
              <span className="inline-flex rounded-2xl bg-ruban-pink/70 p-3 text-ruban-blue">
                <WarehouseIcon size={28} weight="regular" />
              </span>
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-ruban-ink">Regional hub tie-ins</h3>
                <p className="mt-3 max-w-[60ch] text-sm leading-relaxed text-ruban-muted">
                  Overnight pulls from two upstream depots. If neither has the casting, we split
                  freight with another shop on your street so you are not stuck paying solo air
                  charges for a single caliper bracket.
                </p>
                <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-ruban-line pt-6 sm:grid-cols-3">
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wide text-ruban-muted">
                      Dock cut-off
                    </dt>
                    <dd className="mt-1 font-mono text-lg font-semibold text-ruban-ink">17:40</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wide text-ruban-muted">
                      Back-order rate
                    </dt>
                    <dd className="mt-1 font-mono text-lg font-semibold text-ruban-ink">4.7%</dd>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <dt className="text-xs font-medium uppercase tracking-wide text-ruban-muted">
                      Core credit window
                    </dt>
                    <dd className="mt-1 font-mono text-lg font-semibold text-ruban-ink">11 days</dd>
                  </div>
                </dl>
              </div>
            </div>
          </article>

          <article className="md:col-span-5 rounded-[2rem] border border-ruban-line bg-ruban-blue p-7 text-ruban-cream shadow-[0_22px_48px_-30px_rgba(237,53,0,0.22)]">
            <div className="flex items-center gap-3">
              <Truck size={26} weight="regular" />
              <h3 className="text-base font-semibold tracking-tight">Fleet vans</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/85">
              Standing orders for consumables on mirrored routes. Swap keys verified against fleet
              numbers; no anonymous bulk bins.
            </p>
          </article>

          <article className="md:col-span-3 rounded-[1.75rem] border border-dashed border-ruban-blue/35 bg-ruban-pink/40 p-6">
            <Package size={24} weight="regular" className="text-ruban-blue" />
            <h3 className="mt-4 text-sm font-semibold tracking-tight text-ruban-ink">Kitting bench</h3>
            <p className="mt-2 text-xs leading-relaxed text-ruban-muted">
              Bolts bagged per stage: intake off, timing cover, crank seal. Less scrap mixed into
              the bay floor.
            </p>
          </article>

          <article className="md:col-span-4 rounded-[1.75rem] border border-ruban-line bg-white/90 p-6 shadow-[0_18px_40px_-28px_rgba(9,63,180,0.22)]">
            <Prohibit size={24} weight="regular" className="text-ruban-accent" />
            <h3 className="mt-4 text-sm font-semibold tracking-tight text-ruban-ink">No grey VIN cloning</h3>
            <p className="mt-2 text-xs leading-relaxed text-ruban-muted">
              We refuse orders that look like duplicate identity pulls. Protects honest shops from
              warranty fraud flags.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
