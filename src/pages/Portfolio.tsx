import type { Slide } from '../components/Caroussel/Caroussel'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import { PortfolioCard } from '../components/PortfolioCard/PortfolioCard'

export function Portfolio() {
  const revistaAngolaSlides: Slide[] = [
    {
      imgSrc: `${import.meta.env.BASE_URL}/revistaAngola/RevistaAngola1.jpg`,
      name: 'revista angola slide 1',
    },
    {
      imgSrc: `${import.meta.env.BASE_URL}/revistaAngola/RevistaAngola2.jpg`,
      name: 'revista angola slide 2',
    },
    {
      imgSrc: `${import.meta.env.BASE_URL}/revistaAngola/RevistaAngola3.jpg`,
      name: 'revista angola slide 3',
    },
    {
      imgSrc: `${import.meta.env.BASE_URL}/revistaAngola/RevistaAngola6.jpg`,
      name: 'revista angola slide 4',
    },
  ]
  const livroEvaSlides: Slide[] = [
    {
      imgSrc: `${import.meta.env.BASE_URL}/livroEva/LivroEva1.jpg`,
      name: 'livro eva slide 1',
    },
    {
      imgSrc: `${import.meta.env.BASE_URL}/livroEva/LivroEva2.jpg`,
      name: 'livro eva slide 2',
    },
    {
      imgSrc: `${import.meta.env.BASE_URL}/livroEva/LivroEva3.jpg`,
      name: 'livro eva slide 3',
    },
    {
      imgSrc: `${import.meta.env.BASE_URL}/livroEva/LivroEva4.jpg`,
      name: 'livro eva slide 4',
    },
    {
      imgSrc: `${import.meta.env.BASE_URL}/livroEva/LivroEva5.jpg`,
      name: 'livro eva slide 5',
    },
    {
      imgSrc: `${import.meta.env.BASE_URL}/livroEva/LivroEva6.jpg`,
      name: 'livro eva slide 6',
    },
    {
      imgSrc: `${import.meta.env.BASE_URL}/livroEva/LivroEva7.jpg`,
      name: 'livro eva slide 7',
    },
    {
      imgSrc: `${import.meta.env.BASE_URL}/livroEva/LivroEva8.jpg`,
      name: 'livro eva slide 8',
    },
    {
      imgSrc: `${import.meta.env.BASE_URL}/livroEva/LivroEva9.jpg`,
      name: 'livro eva slide 9',
    },
    {
      imgSrc: `${import.meta.env.BASE_URL}/livroEva/LivroEva11.jpg`,
      name: 'livro eva slide 11',
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
            slides={livroEvaSlides}
            projectName="Livro Eva"
            description="O livro da Banda Eva foi um projeto editorial dedicado a celebrar a trajetória de uma das bandas mais marcantes do axé music da Bahia. A publicação reúne histórias, momentos importantes da carreira, imagens e elementos visuais que destacam a identidade musical e cultural do grupo. A nossa equipa foi responsável pela conceção editorial, design gráfico e organização do conteúdo. O projeto procurou combinar memória, estética e narrativa musical. O resultado é um livro que apresenta a Banda Eva de forma envolvente, clara e representativa."
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
            slides={livroEvaSlides}
            projectName="Livro Eva"
            description="O livro da Banda Eva foi um projeto editorial dedicado a celebrar a trajetória de uma das bandas mais marcantes do axé music da Bahia. A publicação reúne histórias, momentos importantes da carreira, imagens e elementos visuais que destacam a identidade musical e cultural do grupo. A nossa equipa foi responsável pela conceção editorial, design gráfico e organização do conteúdo. O projeto procurou combinar memória, estética e narrativa musical. O resultado é um livro que apresenta a Banda Eva de forma envolvente, clara e representativa."
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
        src={`${import.meta.env.BASE_URL}portfolio-image.jpg`}
        alt="cover image for portfolio"
        className="mx-auto md:w-2xl w-xl"
      />

      <Footer />
    </div>
  )
}
