import { useEffect, useRef, useState } from 'react'

import { Link } from 'react-router-dom'

import { Caroussel, type Slide } from '../components/Caroussel/Caroussel'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import { ServiceStamp } from '../components/ServiceStamp/ServiceStamp'
import vernoLogo from '/Verno_logo_home.png'

export function Home() {
  const servicesRef = useRef<HTMLElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting)
      },
      {
        threshold: 0.3,
      },
    )

    if (servicesRef.current) {
      observer.observe(servicesRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const slides: Slide[] = [
    {
      imgSrc: `${import.meta.env.BASE_URL}/livroEva/LivroEva1.jpg`,
      name: 'livro eva slide 1',
      destination: '/portfolio',
    },
    {
      imgSrc: `${import.meta.env.BASE_URL}/livroEva/LivroEva2.jpg`,
      name: 'livro eva slide 2',
      destination: '/portfolio',
    },
    {
      imgSrc: `${import.meta.env.BASE_URL}/livroEva/LivroEva3.jpg`,
      name: 'livro eva slide 3',
      destination: '/portfolio',
    },
    {
      imgSrc: `${import.meta.env.BASE_URL}/livroEva/LivroEva4.jpg`,
      name: 'livro eva slide 4',
      destination: '/portfolio',
    },
    {
      imgSrc: `${import.meta.env.BASE_URL}/revistaAngola/RevistaAngola1.jpg`,
      name: 'revista angola slide 1',
      destination: '/portfolio',
    },
    {
      imgSrc: `${import.meta.env.BASE_URL}/revistaAngola/RevistaAngola2.jpg`,
      name: 'revista angola slide 2',
      destination: '/portfolio',
    },
    {
      imgSrc: `${import.meta.env.BASE_URL}/revistaAngola/RevistaAngola3.jpg`,
      name: 'revista angola slide 3',
      destination: '/portfolio',
    },
    {
      imgSrc: `${import.meta.env.BASE_URL}/revistaAngola/RevistaAngola6.jpg`,
      name: 'revista angola slide 4',
      destination: '/portfolio',
    },
    {
      imgSrc: `${import.meta.env.BASE_URL}/livroEva/LivroEva8.jpg`,
      name: 'livro eva slide 8',
      destination: '/portfolio',
    },
    {
      imgSrc: `${import.meta.env.BASE_URL}/livroEva/LivroEva9.jpg`,
      name: 'livro eva slide 9',
      destination: '/portfolio',
    },
    {
      imgSrc: `${import.meta.env.BASE_URL}/livroEva/LivroEva11.jpg`,
      name: 'livro eva slide 11',
      destination: '/portfolio',
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <section className="mx-auto w-full px-6 py-16">
        <div className="flex item-center justify-center gap-10">
          {/* Card Sobre Nós */}
          <div className="rounded-2xl h-fit w-md border border-neutral-200 mt-16 bg-old_paper p-8 shadow-xl">
            <h2 className="mb-4 font-serif text-2xl tracking-widest text-slate-950 uppercase">
              Sobre nós
            </h2>

            <p className="mb-6 text-neutral-600 leading-relaxed text-justify">
              A Verno é especializada em design gráfico e editorial, desenvolvendo projetos que unem
              estética, legibilidade e identidade visual. Trabalhamos com diagramação, produção
              editorial e planejamento gráfico para transformar conteúdo em experiências visuais
              claras e elegantes.
            </p>

            <Link
              to="/about"
              className="text-center w-full inline-block rounded-xl bg-[#50575e] px-6 py-3 text-white transition hover:opacity-90"
            >
              Saiba mais
            </Link>
          </div>

          {/* Imagem */}
          <div className="flex justify-center md:justify-end">
            <img
              src={vernoLogo}
              alt="Logo Verno estilo tipografia antiga"
              className="max-h-105 w-auto object-contain"
            />
          </div>
        </div>
      </section>

      <main className="flex flex-1 flex-col items-center justify-center gap-6">
        <section className="flex flex-col w-full items-center pl-15">
          <Link to="/portfolio" className="w-full border-b shadow-2xl px-10">
            <h2 className="text-3xl tracking-widest uppercase bold font-serif text-slate-950 ">
              Portfolio
            </h2>
          </Link>
          {slides.length > 0 ? (
            <div className="w-7xl pt-7">
              <Caroussel slides={slides} isInHome />
            </div>
          ) : (
            <p>Carregando slides...</p>
          )}
        </section>
        <section ref={servicesRef} className="flex flex-col w-full items-center pl-15">
          <Link to="/services" className="w-full border-b shadow-2xl px-10">
            <h2 className="text-3xl tracking-widest uppercase bold font-serif text-slate-950 ">
              Nossos serviços
            </h2>
          </Link>
          <div className="flex gap-30 pt-3">
            <div className="flex flex-col justify-between gap-7 py-5 ">
              <ServiceStamp name="Design Editorial" href="/services" delay={0} start={inView} />

              <ServiceStamp
                name="Planejamento Gráfico"
                href="/services"
                delay={200}
                start={inView}
              />

              <ServiceStamp
                name="Diagramação Profissional"
                href="/services"
                delay={400}
                start={inView}
              />
            </div>
            <div className="flex flex-col justify-between gap-7 py-5">
              <ServiceStamp name="Edição de Arte" href="/services" delay={0} start={inView} />

              <ServiceStamp name="Produção gráfica" href="/services" delay={200} start={inView} />

              <ServiceStamp
                name="Produção de Publicações"
                href="/services"
                delay={400}
                start={inView}
              />

              <ServiceStamp
                name="Desenvolvimento de E-books"
                href="/services"
                delay={600}
                start={inView}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
