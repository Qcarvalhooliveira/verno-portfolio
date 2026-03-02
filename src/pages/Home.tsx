import { useEffect, useState } from 'react'

import { Caroussel, type Slide } from '../components/Caroussel/Caroussel'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
//TODO na aba da pagina mudar o nome para verno comunicação e não verno portfolio

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
