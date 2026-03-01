import { createBrowserRouter } from 'react-router-dom'

import { About } from '../pages/About'
import { Contact } from '../pages/Contact'
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'
import { Portfolio } from '../pages/Portfolio'
import { Services } from '../pages/Services'

export const router = createBrowserRouter([
  {
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/inicio',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/portfolio',
        element: <Portfolio />,
      },
      {
        path: '/services',
        element: <Services />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
