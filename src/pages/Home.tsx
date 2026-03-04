import { useEffect, useState } from 'react'

import { Caroussel, type Slide } from '../components/Caroussel/Caroussel'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import { ServiceStamp } from '../components/ServiceStamp/ServiceStamp'

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

      <main className="flex flex-1 flex-col items-center justify-center gap-6">
        <p className="text-neutral-600 text-lg">Bem-vindos ao Verno Portfolio.</p>

        {slides.length > 0 ? (
          <div className="w-1/2">
            <Caroussel slides={slides} />
          </div>
        ) : (
          <p>Carregando slides...</p>
        )}
        <section className="flex flex-col ml-10 w-full items-center">
          <a href="/servicos">
            <h2 className="text-3xl tracking-widest uppercase bold font-serif bg-slate-950 text-amber-50 w-fit">
              Nossos serviços
            </h2>
          </a>
          <div className="flex gap-30">
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
