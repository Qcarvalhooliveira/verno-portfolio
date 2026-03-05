import { EnvelopeIcon, LinkedinLogoIcon, WhatsappLogoIcon } from '@phosphor-icons/react'

import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'

export function Contact() {
  const email = 'verno@gmail.com'
  const subject = encodeURIComponent('Contato pelo site - Verno Comunicações')
  const body = encodeURIComponent(`Bom dia,

Estou entrando em contato para conversar sobre um projeto editorial.

Gostaria de mais informações sobre os serviços de edição, revisão, diagramação ou desenvolvimento editorial.

Atenciosamente,
`)

  const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`

  const phone = '5571993060607'

  const message = encodeURIComponent(
    `Olá! Vim pelo site da Verno Comunicações e gostaria de conversar sobre um projeto editorial. Podemos falar?`,
  )

  const whatsappLink = `https://wa.me/${phone}?text=${message}`
  return (
    <div className="flex min-h-screen flex-col ">
      <Header />
      <main className="flex flex-col items-center justify-center">
        <div className="w-4xl p-10 mt-16">
          <p className="text-justify">
            Na Verno Comunicações, transformamos ideias em publicações que comunicam com clareza,
            estética e propósito. Se você busca serviços de edição, revisão, diagramação ou
            desenvolvimento editorial, será um prazer conversar sobre o seu projeto. Entre em
            contato e vamos dar forma às suas palavras.
          </p>
        </div>
        <section>
          <div className="flex gap-4">
            <a className="home-glass-button" href={mailtoLink}>
              <EnvelopeIcon size={50} weight="light" color="#157ee2" />
            </a>
            <a className="home-glass-button" href={whatsappLink} target="_blank" rel="noreferrer">
              <WhatsappLogoIcon size={50} weight="light" color="#157ee2" />
            </a>
            <a
              className="home-glass-button"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinLogoIcon size={50} weight="light" color="#157ee2" />
            </a>
          </div>
        </section>
        <img src="/contact-image.png" alt="ilustrative image of workers talking" className="h-80" />
      </main>
      <Footer />
    </div>
  )
}
