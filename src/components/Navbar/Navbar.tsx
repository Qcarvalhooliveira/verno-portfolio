import { useEffect, useId, useMemo, useState } from 'react'

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
  // ícone simples sem libs
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={cn('h-6 w-6 transition-transform', open && 'rotate-90')}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </svg>
  )
}

export function Navbar({ navItems, activeLabel = '', ariaLabel = 'Main navigation' }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const menuId = useId()

  // fecha menu ao mudar de rota (porque onClick navega)
  const activeIndex = useMemo(
    () => navItems.findIndex((item) => item.label === activeLabel),
    [activeLabel, navItems],
  )

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
            'text-slate-900',
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

      {/* Desktop menu */}
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
                    active ? 'font-semibold text-blue-700' : 'text-slate-900 hover:text-blue-700',
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

      {/* Mobile dropdown */}
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

        {/* opcional: indicador discreto */}
        {activeIndex >= 0 ? (
          <div className="border-t border-slate-100 px-3 py-2 text-xs text-slate-500">
            Atual: <span className="font-medium text-slate-700">{activeLabel}</span>
          </div>
        ) : null}
      </div>
    </nav>
  )
}
