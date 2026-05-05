import { useState, type FormEvent } from 'react'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export function ContactSection() {
  const [status, setStatus] = useState<FormStatus>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const vehicle = String(data.get('vehicle') ?? '').trim()
    const parts = String(data.get('parts') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()

    if (!vehicle || !parts || !email) {
      setStatus('error')
      return
    }

    setStatus('submitting')
    await new Promise((r) => setTimeout(r, 900))
    const ok = email.includes('@')
    if (!ok) {
      setStatus('error')
      return
    }
    setStatus('success')
    form.reset()
  }

  return (
    <section id="contact" className="scroll-mt-28 bg-ruban-pink/25 py-16 md:py-24">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-4 md:grid-cols-12 md:gap-16 md:px-8">
        <div className="md:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ruban-blue">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tighter text-ruban-ink md:text-4xl">
            Send the list; we reply with fit notes, not autoresponder fog.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ruban-muted">
            This form is wired for a demo: it validates, simulates latency, and shows success or
            inline error states. Hook it to your inbox or WhatsApp Business when you go live.
          </p>

          <dl className="mt-10 space-y-6 border-t border-ruban-line pt-8">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-ruban-muted">
                Yard phone
              </dt>
              <dd className="mt-1 text-lg font-medium text-ruban-ink">+1 (312) 847-1928</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-ruban-muted">
                Counter hours
              </dt>
              <dd className="mt-1 text-sm leading-relaxed text-ruban-ink">
                Tue–Sat · 07:30–18:10 · closed Sun–Mon
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-ruban-muted">
                Yard address
              </dt>
              <dd className="mt-1 text-sm leading-relaxed text-ruban-ink">
                1640 South Harding Avenue, Dock 3, Chicago, IL
              </dd>
            </div>
          </dl>
        </div>

        <div className="md:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-ruban-line bg-white/90 p-6 shadow-[0_24px_50px_-32px_rgba(9,63,180,0.25)] md:p-9"
            noValidate
          >
            <div className="grid gap-6 md:grid-cols-2">
              <div className="md:col-span-2">
                <label htmlFor="vehicle" className="text-sm font-medium text-ruban-ink">
                  Vehicle or VIN
                </label>
                <input
                  id="vehicle"
                  name="vehicle"
                  type="text"
                  autoComplete="off"
                  placeholder="e.g. WBAPH5C55BA123456"
                  className="mt-2 w-full rounded-xl border border-ruban-line bg-ruban-cream/80 px-3 py-2.5 text-sm text-ruban-ink outline-none ring-ruban-blue/35 transition-shadow focus:ring-2"
                />
                <p className="mt-1 text-xs text-ruban-muted">Plate photos accepted on site.</p>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="parts" className="text-sm font-medium text-ruban-ink">
                  Parts needed
                </label>
                <textarea
                  id="parts"
                  name="parts"
                  rows={4}
                  placeholder="List numbers, symptoms, or attach a workshop note."
                  className="mt-2 w-full resize-y rounded-xl border border-ruban-line bg-ruban-cream/80 px-3 py-2.5 text-sm text-ruban-ink outline-none ring-ruban-blue/35 transition-shadow focus:ring-2"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium text-ruban-ink">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="mt-2 w-full rounded-xl border border-ruban-line bg-ruban-cream/80 px-3 py-2.5 text-sm text-ruban-ink outline-none ring-ruban-blue/35 transition-shadow focus:ring-2"
                />
              </div>

              <div>
                <label htmlFor="phone" className="text-sm font-medium text-ruban-ink">
                  Mobile (optional)
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="mt-2 w-full rounded-xl border border-ruban-line bg-ruban-cream/80 px-3 py-2.5 text-sm text-ruban-ink outline-none ring-ruban-blue/35 transition-shadow focus:ring-2"
                />
              </div>
            </div>

            {status === 'error' ? (
              <p className="mt-4 rounded-xl border border-ruban-accent/35 bg-ruban-pink/50 px-3 py-2 text-sm text-ruban-ink" role="alert">
                Check required fields and use a real email address with an @ symbol.
              </p>
            ) : null}

            {status === 'success' ? (
              <p className="mt-4 rounded-xl border border-ruban-blue/25 bg-ruban-cream px-3 py-2 text-sm text-ruban-ink" role="status">
                Message captured for demo purposes. Connect this endpoint to your CRM or mail
                provider when you deploy.
              </p>
            ) : null}

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-ruban-accent px-6 py-2.5 text-sm font-semibold text-white shadow-[0_18px_40px_-18px_rgba(227,24,55,0.55)] transition-[transform,background-color,opacity] duration-300 hover:bg-ruban-accent-hover enabled:active:translate-y-px disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'submitting' ? (
                  <span className="flex items-center gap-2">
                    <span
                      className="h-4 w-4 animate-pulse rounded-full bg-white/85"
                      aria-hidden
                    />
                    Sending
                  </span>
                ) : (
                  'Send request'
                )}
              </button>
              <button
                type="button"
                className="text-sm font-medium text-ruban-blue underline-offset-4 hover:underline"
                onClick={() => setStatus('idle')}
              >
                Reset status
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
