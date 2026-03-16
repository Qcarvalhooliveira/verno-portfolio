import { Link } from "react-router-dom";

import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";

export function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center text-center">
        <img
          src="/notfound-image.jpg"
          alt="Página não encontrada - erro 404"
          className="mx-auto max-w-3xl "
        />
        <h2 className="text-3xl tracking-widest uppercase bold">Pagina não encontrada</h2>
        <Link
          className="mt-10 mb-8 inline-block rounded-xl bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          to="/inicio"
        >
          Voltar para Home
        </Link>
      </main>
      <Footer />
    </div>
  );
}
