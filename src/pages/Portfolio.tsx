import type { Slide } from '../components/Caroussel/Caroussel'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import { PortfolioCard } from '../components/PortfolioCard/PortfolioCard'

export function Portfolio() {
  const revistaAngolaSlides: Slide[] = [
    {
      imgSrc: '/public/revistaAngola/RevistaAngola1.png',
      name: 'revista angola slide 1',
    },
    {
      imgSrc: '/public/revistaAngola/RevistaAngola2.png',
      name: 'revista angola slide 2',
    },
    {
      imgSrc: '/public/revistaAngola/RevistaAngola3.png',
      name: 'revista angola slide 3',
    },
    {
      imgSrc: '/public/revistaAngola/RevistaAngola6.png',
      name: 'revista angola slide 4',
    },
  ]
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <h2 className="text-3xl tracking-widest uppercase font-bold text-center">Portfolio</h2>

      <section className="mx-auto mt-10 grid w-full max-w-5xl grid-cols-1 gap-10 px-4 ">
        <div className="last:md:col-span-2">
          <PortfolioCard
            slides={revistaAngolaSlides}
            projectName="Revista Angola"
            description="A Revista Angola foi um projeto editorial desenvolvido para o Governo de Angola, com o objetivo de valorizar a cultura, o desenvolvimento e as potencialidades do país. A publicação reuniu conteúdos institucionais, reportagens e elementos visuais que destacam a identidade angolana. A nossa equipa foi responsável pela conceção editorial, design gráfico e coordenação de produção. O projeto procurou combinar informação, estética e estratégia de comunicação institucional. O resultado é uma revista que comunica Angola de forma moderna, clara e representativa."
          />
        </div>
        <div>
          <PortfolioCard
            slides={revistaAngolaSlides}
            projectName="Revista Angola"
            description="A Revista Angola foi um projeto editorial desenvolvido para o Governo de Angola, com o objetivo de valorizar a cultura, o desenvolvimento e as potencialidades do país. A publicação reuniu conteúdos institucionais, reportagens e elementos visuais que destacam a identidade angolana. A nossa equipa foi responsável pela conceção editorial, design gráfico e coordenação de produção. O projeto procurou combinar informação, estética e estratégia de comunicação institucional. O resultado é uma revista que comunica Angola de forma moderna, clara e representativa."
          />
        </div>
        <div>
          <PortfolioCard
            slides={revistaAngolaSlides}
            projectName="Revista Angola"
            description="A Revista Angola foi um projeto editorial desenvolvido para o Governo de Angola, com o objetivo de valorizar a cultura, o desenvolvimento e as potencialidades do país. A publicação reuniu conteúdos institucionais, reportagens e elementos visuais que destacam a identidade angolana. A nossa equipa foi responsável pela conceção editorial, design gráfico e coordenação de produção. O projeto procurou combinar informação, estética e estratégia de comunicação institucional. O resultado é uma revista que comunica Angola de forma moderna, clara e representativa."
          />
        </div>
        <div>
          <PortfolioCard
            slides={revistaAngolaSlides}
            projectName="Revista Angola"
            description="A Revista Angola foi um projeto editorial desenvolvido para o Governo de Angola, com o objetivo de valorizar a cultura, o desenvolvimento e as potencialidades do país. A publicação reuniu conteúdos institucionais, reportagens e elementos visuais que destacam a identidade angolana. A nossa equipa foi responsável pela conceção editorial, design gráfico e coordenação de produção. O projeto procurou combinar informação, estética e estratégia de comunicação institucional. O resultado é uma revista que comunica Angola de forma moderna, clara e representativa."
          />
        </div>
        <div>
          <PortfolioCard
            slides={revistaAngolaSlides}
            projectName="Revista Angola"
            description="A Revista Angola foi um projeto editorial desenvolvido para o Governo de Angola, com o objetivo de valorizar a cultura, o desenvolvimento e as potencialidades do país. A publicação reuniu conteúdos institucionais, reportagens e elementos visuais que destacam a identidade angolana. A nossa equipa foi responsável pela conceção editorial, design gráfico e coordenação de produção. O projeto procurou combinar informação, estética e estratégia de comunicação institucional. O resultado é uma revista que comunica Angola de forma moderna, clara e representativa."
          />
        </div>
      </section>
      <img
        src="/portfolio-image.png"
        alt="cover image for portfolio"
        className="mx-auto md:w-2xl w-xl"
      />

      <Footer />
    </div>
  )
}
