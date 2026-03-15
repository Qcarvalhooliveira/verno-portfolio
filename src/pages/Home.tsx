import { useEffect, useState } from 'react'

import { Caroussel, type Slide } from '../components/Caroussel/Caroussel'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import vernoLogo from '/Verno_logo_home.png'
import { ServiceStamp } from '../components/ServiceStamp/ServiceStamp'
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
        <p className="text-neutral-600 text-lg">Bem-vindos ao Verno Portfolio.</p>
        {slides.length > 0 ? (
          <div className="w-1/2">
            <Caroussel slides={slides} />
          </div>
        ) : (
          <p>Carregando slides...</p>
        )}
        <section className="flex flex-col w-full items-center ml-15">
          <a href="/servicos" className="w-full border-b shadow-2xl px-10">
            <h2 className="text-3xl tracking-widest uppercase bold font-serif bg- text-slate-950 ">
              Nossos serviços
            </h2>
          </a>
          <div className="flex gap-30 pt-3">
            <div className="flex flex-col justify-between gap-7 py-5 ">
              <ServiceStamp name="Design Editorial" href="/servicos#edicao" delay={0} />

              <ServiceStamp name="Planejamento Gráfico" href="/servicos#revisao" delay={200} />

              <ServiceStamp
                name="Diagramação Profissional"
                href="/servicos#diagramação"
                delay={400}
              />
            </div>
            <div className="flex flex-col justify-between gap-7 py-5">
              <ServiceStamp name="Edição de Arte" href="/servicos#edição" delay={0} />

              <ServiceStamp name="Produção gráfica" href="/servicos#gráfica" delay={200} />

              <ServiceStamp
                name="Produção de Publicações"
                href="/servicos#publicações"
                delay={400}
              />

              <ServiceStamp name="Desenvolvimento de E-books" href="/servicos#ebooks" delay={600} />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
