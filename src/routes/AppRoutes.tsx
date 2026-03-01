import { createBrowserRouter } from 'react-router-dom'

import { RootLayout } from '../layouts/RootLayout'
import { About } from '../pages/About'
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
