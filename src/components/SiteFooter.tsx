export function SiteFooter() {
  return (
    <footer className="border-t border-ruban-line bg-ruban-blue text-ruban-cream">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <img
            src="/brand/ruban-logo.png"
            alt="Rubam Auto logo"
            className="h-10 w-auto"
            loading="lazy"
          />
          <p className="mt-1 text-xs text-white/75">
            Spare parts desk and workshop support. Brand palette applied site-wide.
          </p>
        </div>
        <p className="text-xs text-white/65">
          Built as a standalone marketing site. Replace placeholder copy with your supplier terms.
        </p>
      </div>
    </footer>
  )
}
