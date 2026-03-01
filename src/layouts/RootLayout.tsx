import { Link, Outlet } from 'react-router-dom'

export function RootLayout() {
  return (
    <div className="min-h-screen">
      <header className="border-b">
        <nav className="mx-auto flex max-w-5xl items-center gap-4 p-4">
          <Link className="font-semibold" to="/">
            Verno
          </Link>

          <Link className="text-neutral-600 hover:text-black" to="/about">
            About
          </Link>
        </nav>
      </header>

      <div className="mx-auto max-w-5xl">
        <Outlet />
      </div>
    </div>
  )
}
