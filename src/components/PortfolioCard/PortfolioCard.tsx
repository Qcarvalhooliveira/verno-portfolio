import { Caroussel, type Slide } from '../Caroussel/Caroussel'
import { OrnamentalSeparator } from '../OrnamentalSeparetor/OrnamentalSeparator'

type PortfolioProps = {
  projectName: string
  slides: Slide[]
  description: string
}

export function PortfolioCard({ projectName, description, slides }: PortfolioProps) {
  return (
    <div
      className="
      group
      bg-old_paper
      flex flex-col
      rounded-md
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
      <h3 className="font-serif text-2xl uppercase tracking-wide text-center">{projectName}</h3>

      <div>
        <Caroussel slides={slides} />
      </div>

      <OrnamentalSeparator />

      <p className="text-sm leading-relaxed text-justify">{description}</p>
    </div>
  )
}
