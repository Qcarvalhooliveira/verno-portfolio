import { useMemo } from 'react'

import { useLocation, useNavigate } from 'react-router-dom'

import { Navbar, type NavItem } from '../Navbar/Navbar'

export type HeaderProps = {
  logoSrc?: string
}

export function Header({ logoSrc = '/Verno_logo.png' }: HeaderProps) {
  const navigate = useNavigate()
  const location = useLocation()

  const activeLabel = useMemo(() => {
    const path = location.pathname

    if (path.startsWith('/about')) return 'Quem somos'
    if (path.startsWith('/portfolio')) return 'Portfolio'
    if (path.startsWith('/services')) return 'Serviços'
    if (path.startsWith('/contact')) return 'Contato'

    // default
    return 'Início'
  }, [location.pathname])

  const navItems: NavItem[] = useMemo(
    () => [
      {
        label: 'Início',
        onClick: () => navigate('/inicio'),
      },
      {
        label: 'Quem somos',
        onClick: () => navigate('/about'),
      },
      {
        label: 'Portfolio',
        onClick: () => navigate('/portfolio'),
      },
      {
        label: 'Serviços',
        onClick: () => navigate('/services'),
      },
      {
        label: 'Contato',
        onClick: () => navigate('/contact'),
      },
    ],
    [navigate],
  )

  const goHome = () => {
    navigate('/inicio')
  }

  return (
    <header className="sticky top-0 z-30 w-full border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between p-3 sm:p-4 md:grid md:grid-cols-7 md:items-center">
        {/* Logo */}
        <div className="flex items-center md:col-span-2 md:justify-start">
          <button
            type="button"
            onClick={goHome}
            aria-label="Ir para página Início"
            data-testid="header-logo"
            className="flex items-center gap-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white"
          >
            {logoSrc ? (
              <img
                src={logoSrc}
                alt="Logo Verno"
                className="h-20 w-auto object-contain sm:h-8 md:h-20"
                loading="eager"
                decoding="async"
              />
            ) : null}
          </button>
        </div>

        {/* Navbar */}
        <div className="flex justify-end md:col-span-5 md:justify-center">
          <Navbar navItems={navItems} activeLabel={activeLabel} />
        </div>
      </div>
    </header>
  )
}
