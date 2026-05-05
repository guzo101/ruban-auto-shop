const strips = [
  'Brake pads',
  'Filters',
  'Suspension',
  'Batteries',
  'Tyres',
  'Lubricants',
  'Car care',
  'Wheel alignment',
] as const

export function HeroSection() {
  const marquee = [...strips, ...strips]

  return (
    <section
      className="relative overflow-hidden border-b border-ruban-line bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero/ruban-hero-main.png')" }}
    >
      <div className="pointer-events-none absolute -left-[10vw] top-[8vh] h-[360px] w-[360px] rounded-full bg-ruban-accent/22 blur-3xl" />
      <div className="pointer-events-none absolute -right-[8vw] bottom-[-15vh] h-[460px] w-[460px] rounded-full bg-ruban-blue/50 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1400px] gap-8 px-4 py-16 md:min-h-[100dvh] md:grid-cols-12 md:items-center md:px-8 md:py-20">
        <div className="hidden md:col-span-6 md:block">
          <p className="ruban-rise inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/85">
            Trusted parts and workshop support
          </p>
          <div className="ruban-rise mt-6" style={{ animationDelay: '90ms' }}>
            <img
              src="/brand/ruban-logo.png"
              alt="Rubam Auto logo"
              className="h-16 w-auto md:h-24 lg:h-28"
              loading="eager"
            />
          </div>
          <div className="ruban-rise mt-8 grid max-w-md grid-cols-2 gap-3 text-white" style={{ animationDelay: '170ms' }}>
            <div className="rounded-xl border border-white/20 bg-black/25 p-4">
              <p className="text-[11px] uppercase tracking-[0.16em] text-white/70">Counter ETA</p>
              <p className="mt-2 text-3xl font-semibold tracking-tight">11 min</p>
            </div>
            <div className="rounded-xl border border-white/20 bg-black/25 p-4">
              <p className="text-[11px] uppercase tracking-[0.16em] text-white/70">Fitment check</p>
              <p className="mt-2 text-3xl font-semibold tracking-tight">Included</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-6 md:pl-8">
          <div className="rounded-[2rem] border border-white/20 bg-black/30 p-6 text-white shadow-[0_28px_62px_-38px_rgba(0,0,0,0.75)] backdrop-blur-md md:p-8">
            <div className="ruban-rise inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-sm">
              <img src="/brand/ruban-logo.png" alt="Rubam Auto logo" className="h-7 w-auto" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/80">Ready stock</span>
            </div>
            <h1
              className="ruban-rise mt-6 text-3xl font-semibold tracking-tight text-white md:text-5xl md:leading-[1.02] lg:text-[3.5rem]"
              style={{ animationDelay: '90ms' }}
            >
              GENUINE PARTS.
              <br />
              AFFORDABLE PRICES.
            </h1>
            <p
              className="ruban-rise mt-4 max-w-[52ch] text-sm leading-relaxed text-white/80 md:text-base"
              style={{ animationDelay: '170ms' }}
            >
              Trusted by Lusaka drivers since 2015
              <br />
              Fast delivery. Right fit. Guaranteed.
            </p>
            <div className="ruban-rise mt-8 flex flex-wrap items-center gap-3" style={{ animationDelay: '250ms' }}>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-ruban-accent px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_40px_-20px_rgba(237,53,0,0.7)] transition-[transform,background-color] duration-300 hover:bg-ruban-accent-hover active:translate-y-px"
              >
                Request quote
              </a>
              <a
                href="#deals"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-[transform,background-color] duration-300 hover:bg-white/20 active:translate-y-px"
              >
                View deals
              </a>
            </div>
            <div className="ruban-rise mt-6 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.16em] text-white/78" style={{ animationDelay: '330ms' }}>
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5">Warranty tracked</span>
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5">Branch transfers fast</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/15 bg-black/25">
        <div className="overflow-hidden py-3">
          <div className="ruban-marquee-track flex w-max items-center gap-10 whitespace-nowrap px-6 text-xs font-semibold uppercase tracking-[0.24em] text-white/80">
            {marquee.map((item, idx) => (
              <span key={`${item}-${idx}`} className="inline-flex items-center gap-8">
                <span>{item}</span>
                <span className="h-1 w-1 rounded-full bg-ruban-pink" aria-hidden />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
