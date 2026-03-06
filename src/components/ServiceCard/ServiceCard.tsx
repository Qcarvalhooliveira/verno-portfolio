import { EnvelopeIcon, WhatsappLogoIcon } from '@phosphor-icons/react'

import { OrnamentalSeparator } from '../OrnamentalSeparetor/OrnamentalSeparator'

type ServiceProps = {
  serviceName: string
  description: string
}

export function ServiceCard({ serviceName, description }: ServiceProps) {
  const email = 'verno@gmail.com'
  const subject = encodeURIComponent(`Pedido de informações sobre ${serviceName}`)
  const body = encodeURIComponent(`Bom dia,

Estou entrando em contato para conversar sobre ${serviceName}.

Gostaria de mais informações sobre:
(POR FAVOR ADICIONE SUAS DUVIDAS PARA QUE O NOSSO CONTATO SEJA MAIS PRECISO)


Atenciosamente,
`)

  const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`

  const phone = '5571993060607'

  const message = encodeURIComponent(
    `Olá! Vim pelo site da Verno Comunicações e gostaria de conversar sobre ${serviceName}. Podemos falar?`,
  )

  const whatsappLink = `https://wa.me/${phone}?text=${message}`

  return (
    <div
      className="
      group
      bg-old_paper
      flex flex-col
      rounded-md
      w-md
      p-6
      gap-4
      border
      border-neutral-700/40
      shadow-sm
      hover:shadow-md
      hover:-translate-y-1
      transition-all
      duration-300
    "
    >
      <h3 className="font-serif text-2xl uppercase tracking-wide">{serviceName}</h3>

      <OrnamentalSeparator />

      <p className="text-sm leading-relaxed text-justify">{description}</p>

      <div className="flex justify-center mt-2 gap-5">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="
          group
          cursor-pointer
          flex
          items-center
          gap-2
          border
          border-neutral-800
          px-4
          py-2
          rounded-lg
          font-medium
          hover:bg-highlights
          transition
        "
        >
          Fale Conosco
          <WhatsappLogoIcon />
        </a>
        <a
          href={mailtoLink}
          target="_blank"
          rel="noreferrer"
          className="
          group
          cursor-pointer
          flex
          items-center
          gap-2
          border
          border-neutral-800
          px-4
          py-2
          rounded-lg
          font-medium
          hover:bg-highlights
          transition
        "
        >
          Fale Conosco
          <EnvelopeIcon />
        </a>
      </div>
    </div>
  )
}
