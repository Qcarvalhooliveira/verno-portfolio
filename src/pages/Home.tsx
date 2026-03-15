import { useEffect, useState } from 'react'

import { Caroussel, type Slide } from '../components/Caroussel/Caroussel'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import vernoLogo from '/Verno_logo_home.png'
//TODO na aba da pagina mudar o nome para verno comunicação e não verno portfolio *Feito

export function Home() {
  const [slides, setSlides] = useState<Slide[]>([])

  useEffect(() => {
    const fetchedSlides: Slide[] = [
      {
        imgSrc: 'https://picsum.photos/800/600?random=1',
        name: 'Paisagem',
        destination: '/portfolio',
      },
      {
        imgSrc: 'https://picsum.photos/800/600?random=2',
        name: 'Cidade',
        destination: '/about',
      },
      {
        imgSrc: 'https://picsum.photos/800/600?random=3',
        name: 'Natureza',
        destination: '/services',
      },
      {
        imgSrc: 'https://picsum.photos/800/600?random=4',
        name: 'Arte',
        destination: '/contact',
      },
    ]

    setSlides(fetchedSlides)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <section className="mx-auto w-full px-6 py-16">
        <div className="flex item-center justify-center gap-10">
          {/* Card Sobre Nós */}
          <div className="rounded-2xl h-fit w-md border border-neutral-200 mt-16 bg-white p-8 shadow-sm">
            <h2 className="mb-4 font-serif text-2xl tracking-widest text-slate-950 uppercase">
              Sobre nós
            </h2>

            <p className="mb-6 text-neutral-600 leading-relaxed">
              A Verno é especializada em design gráfico e editorial, desenvolvendo projetos que unem
              estética, legibilidade e identidade visual. Trabalhamos com diagramação, produção
              editorial e planejamento gráfico para transformar conteúdo em experiências visuais
              claras e elegantes.
            </p>

            <a
              href="/about"
              className="inline-block rounded-xl bg-[#50575e] px-6 py-3 text-white transition hover:opacity-90"
            >
              Saiba mais
            </a>
          </div>

          {/* Imagem */}
          <div className="flex justify-center md:justify-end">
            <img
              src={vernoLogo}
              alt="Logo Verno estilo tipografia antiga"
              className="max-h-[420px] w-auto object-contain"
            />
          </div>
        </div>
      </section>

      <main className="flex flex-1 flex-col items-center justify-center gap-6">
        <p className="text-neutral-600 text-lg">Bem-vinda ao Verno Portfolio.</p>

        {slides.length > 0 ? (
          <div className="w-1/2">
            <Caroussel slides={slides} />
          </div>
        ) : (
          <p>Carregando slides...</p>
        )}
      </main>

      <Footer />
    </div>
  )
}
