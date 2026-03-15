import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import { ServiceCard } from '../components/ServiceCard/ServiceCard'

export function Services() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <h2 className="text-3xl tracking-widest uppercase font-bold text-center">Nossos Serviços</h2>

      <section className="mx-auto mt-10 grid w-full max-w-5xl grid-cols-1 gap-10 px-4 md:grid-cols-2">
        <div className="last:md:col-span-2">
          <ServiceCard
            serviceName="Design Editorial"
            description="Concepção estrutural de publicações impressas e digitais, com definição de formato grid, tipografia, hierarquias visuais e padroes editorias. Desenvolvemos projetos sólidos, coerentes e tecnicamente viáveis."
          />
        </div>

        <div className="last:md:col-span-2">
          <ServiceCard
            serviceName="Planejamento Gráfico"
            description="Definimos a estrutura e a estratégia visual de cada projeto, combinando cores, tipografia e grids de forma inteligente. Nosso planejamento garante que a comunicação seja clara, impactante e alinhada à identidade da marca."
          />
        </div>

        <div className="last:md:col-span-2">
          <ServiceCard
            serviceName="Diagramação Profissional"
            description="Organizamos textos, imagens e elementos gráficos de forma harmoniosa, equilibrando estética e funcionalidade. Cada página é cuidadosamente projetada para facilitar a leitura e transmitir a mensagem de forma envolvente."
          />
        </div>

        <div className="last:md:col-span-2">
          <ServiceCard
            serviceName="Edição de Arte"
            description="Aprimoramos imagens, ilustrações e composições gráficas, ajustando cores, contraste e detalhes. O resultado são artes consistentes, visualmente atraentes e preparadas para diferentes formatos e mídias com excelência."
          />
        </div>

        <div className="last:md:col-span-2">
          <ServiceCard
            serviceName="Produção Gráfica"
            description="Gerenciamos toda a execução de peças impressas e digitais, cuidando de materiais, acabamentos e processos de impressão. Transformamos projetos criativos em produtos finais de alta qualidade, prontos para o mercado."
          />
        </div>

        <div className="last:md:col-span-2">
          <ServiceCard
            serviceName="Produção de Publicações"
            description="Desenvolvemos revistas, livros e periódicos, do conceito à finalização. Estruturamos layouts, combinamos elementos visuais e textuais e garantimos que cada publicação seja informativa, atrativa e fácil de navegar."
          />
        </div>

        <div className="last:md:col-span-2">
          <ServiceCard
            serviceName="Desenvolvimento de E-books"
            description="Criamos e-books interativos e responsivos, otimizados para diferentes dispositivos e plataformas. Os conteúdos digitais são visualmente envolventes, fáceis de acessar e apresentam uma experiência de leitura moderna e profissional."
          />
        </div>
      </section>
      <img
        src="/servicos-image.png"
        alt="cover image for services"
        className="mx-auto md:w-2xl w-xl"
      />

      <Footer />
    </div>
  )
}
