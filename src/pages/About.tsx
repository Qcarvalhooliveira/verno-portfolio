import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'

export function About() {
  return (
    <div className="flex min-h-screen flex-col ">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center text-center">
        <h2 className="text-3xl tracking-widest uppercase font-bold text-center">Quem somos</h2>
        <div className="w-4xl mt-5">
          <p className="mt-2 text-neutral-600 text-justify">
            Na Verno, acreditamos que o design é uma forma de organizar ideias e dar vida às
            palavras. Nosso trabalho combina sensibilidade estética, clareza visual e atenção aos
            detalhes para transformar conteúdo em experiências visuais elegantes e bem estruturadas.
          </p>
        </div>
        <img src="/about_us.jpg" alt="Sobre Nos" className="mx-auto max-w-2xl " />
      </main>
      <Footer />
    </div>
  )
}
