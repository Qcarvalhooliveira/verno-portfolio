import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <main className="min-h-screen p-6">
      <h1 className="text-3xl font-bold">404</h1>
      <p className="mt-2 text-neutral-600">Página não encontrada.</p>

      <Link className="mt-6 inline-block underline" to="/">
        Voltar para Home
      </Link>
    </main>
  )
}
