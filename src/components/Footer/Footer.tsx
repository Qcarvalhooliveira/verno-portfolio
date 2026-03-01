import { LinkedinLogoIcon, WhatsappLogoIcon } from '@phosphor-icons/react'

export function Footer() {
  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  const logoSrc = '/Verno_logo.png'
  const brandName = 'Verno Comunicação'
  const year = new Date().getFullYear()

  return (
    <footer
      className="mt-auto text-background bg-gradient-to-t from-highlights to-white"
      aria-label="Footer"
      data-testid="footer"
    >
      <div className="mx-auto flex max-w-7xl px-4 pt-8 pb-4 md:flex-row md:items-center md:justify-between">
        <div className="flex justify-center md:justify-start w-35">
          <button
            type="button"
            onClick={handleLogoClick}
            aria-label="Ir para o topo da página"
            data-testid="footer-logo"
            className="flex items-center gap-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 hover:cursor-pointer"
          >
            {logoSrc ? (
              <img
                src={logoSrc}
                alt="Logo do verno"
                className="h-20 w-auto object-contain sm:h-9 md:h-20"
                loading="eager"
                decoding="async"
              />
            ) : null}
          </button>
        </div>

        <div
          className="hidden flex-col items-center text-center gap-1 sm:flex"
          data-testid="center-div"
        >
          <span className="text-sm font-bold md:text-base text-background">{brandName}</span>

          <span className="text-[0.7rem] text-background md:text-xs">
            © {year}. Todos os direitos reservados.
          </span>
        </div>

        <div className="flex flex-col items-center gap-3 md:items-end w-35">
          <nav aria-label="Redes sociais" className="flex items-center justify-center gap-4">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className={`
                inline-flex items-center justify-center rounded-full
                text-background hover:text-hover
                transition-colors duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900
              `}
            >
              <LinkedinLogoIcon size={32} weight="fill" aria-hidden="true" />
              <span className="sr-only">Linkedin</span>
            </a>

            <a
              href="https://wa.me/5571993060607"
              target="_blank"
              rel="noreferrer"
              className={`
                inline-flex items-center justify-center rounded-full
                text-background hover:text-hover
                transition-colors duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900
              `}
            >
              <WhatsappLogoIcon size={32} weight="fill" aria-hidden="true" />
              <span className="sr-only">WhatsApp</span>
            </a>
          </nav>
        </div>
      </div>
      <span className=" block w-full text-[0.7rem] text-slate-400 md:text-xs sm:hidden text-center">
        © {year}. Todos os direitos reservados.
      </span>
    </footer>
  )
}
