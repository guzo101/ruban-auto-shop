import { List, XIcon } from '@phosphor-icons/react'
import { useState } from 'react'

const links = [
  { href: '#deals', label: 'Deals' },
  { href: '#parts', label: 'Parts desk' },
  { href: '#services', label: 'Workshop' },
  { href: '#stock', label: 'Stock' },
  { href: '#contact', label: 'Contact' },
] as const

export function SiteNav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-ruban-line bg-ruban-cream/80 ruban-glass">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-4 py-4 md:px-8">
        <a href="#" className="inline-flex items-center">
          <img
            src="/brand/ruban-logo.png"
            alt="Rubam Auto logo"
            className="h-10 w-auto md:h-12"
            loading="eager"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ruban-ink/85 transition-colors duration-300 hover:text-ruban-blue"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-ruban-accent px-4 py-2 text-sm font-semibold text-white shadow-[0_14px_34px_-16px_rgba(227,24,55,0.55)] transition-[transform,background-color] duration-300 hover:bg-ruban-accent-hover active:scale-[0.98]"
          >
            Request a quote
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-ruban-line bg-white/70 p-2 text-ruban-blue md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <XIcon size={22} weight="regular" /> : <List size={22} weight="regular" />}
          <span className="sr-only">Menu</span>
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-ruban-line bg-ruban-cream px-4 py-4 md:hidden"
        >
          <div className="mx-auto flex max-w-[1400px] flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-xl px-3 py-2 text-base font-medium text-ruban-ink hover:bg-ruban-pink/60"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-1 rounded-full bg-ruban-accent px-4 py-3 text-center text-sm font-semibold text-white active:scale-[0.98]"
              onClick={() => setOpen(false)}
            >
              Request a quote
            </a>
          </div>
        </div>
      ) : null}
    </header>
  )
}
