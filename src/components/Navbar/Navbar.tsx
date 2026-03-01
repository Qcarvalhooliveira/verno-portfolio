import { useEffect, useId, useState } from 'react'

export type NavItem = {
  label: string
  onClick: () => void
}

export type NavbarProps = {
  navItems: NavItem[]
  activeLabel?: string
  ariaLabel?: string
}

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path
        d="M4 7h16"
        className={`transition-all duration-300 ${
          open ? 'translate-y-[4px] rotate-40 origin-center' : ''
        }`}
      />
      <path
        d="M4 12h16"
        className={`transition-all duration-300 ${open ? 'opacity-0' : 'opacity-100'}`}
      />
      <path
        d="M4 17h16"
        className={`transition-all duration-300 ${
          open ? '-translate-y-[4px] -rotate-40 origin-center' : ''
        }`}
      />
    </svg>
  )
}

export function Navbar({ navItems, activeLabel = '', ariaLabel = 'Main navigation' }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const menuId = useId()

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (evento: KeyboardEvent) => {
      if (evento.key === 'Escape') setIsOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen])

  const handleItemClick = (item: NavItem) => {
    item.onClick()
    setIsOpen(false)
  }

  return (
    <nav aria-label={ariaLabel} className="relative">
      {/* Mobile button */}
      <div className="md:hidden">
        <button
          type="button"
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center rounded-lg',
            'border border-transparent',
            'text-highlights',
            'hover:bg-slate-100',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400',
          )}
          aria-controls={menuId}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <MenuIcon open={isOpen} />
        </button>
      </div>

      <div data-testid="desktop-menu" className="hidden md:block">
        <ul className="flex items-center gap-6">
          {navItems.map((item) => {
            const active = item.label === activeLabel
            return (
              <li key={`desktop-${item.label}`}>
                <button
                  type="button"
                  onClick={() => handleItemClick(item)}
                  className={cn(
                    'rounded-md px-1 py-1 text-sm transition-colors',
                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400',
                    active ? 'font-bold text-background' : 'text-background hover:text-hover',
                  )}
                  aria-current={active ? 'page' : undefined}
                >
                  {item.label}
                </button>
              </li>
            )
          })}
        </ul>
      </div>

      <div
        data-testid="mobile-menu"
        id={menuId}
        className={cn(
          'absolute right-0 top-full mt-2 w-60 md:hidden',
          'rounded-xl border border-slate-200 bg-white shadow-lg',
          isOpen ? 'block' : 'hidden',
        )}
        role="dialog"
        aria-label="Menu"
      >
        <ul className="flex flex-col p-2">
          {navItems.map((item) => {
            const active = item.label === activeLabel
            return (
              <li key={`mobile-${item.label}`}>
                <button
                  type="button"
                  onClick={() => handleItemClick(item)}
                  className={cn(
                    'w-full rounded-lg px-3 py-2 text-left text-sm transition-colors',
                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400',
                    active
                      ? 'bg-slate-100 font-semibold text-blue-700'
                      : 'text-slate-900 hover:bg-slate-50 hover:text-blue-700',
                  )}
                  aria-current={active ? 'page' : undefined}
                >
                  {item.label}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
