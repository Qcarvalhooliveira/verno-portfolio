import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";

export function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex flex-1 items-center justify-center">
        <p className="text-neutral-600">
          Bem-vinda ao Verno Portfolio.
        </p>
      </main>

      <Footer />
    </div>
  )
}