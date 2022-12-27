import { createBrowserRouter, } from 'react-router-dom'
import { NotFound } from '../pages/NotFound'
import { MainLayout } from '../layouts/MainLayout'
import { WelcomeLayout } from '../layouts/WelcomeLayout'
import { Welcome1 } from '../pages/welcome/Welcome1'
import { Welcome2 } from '../pages/welcome/Welcome2'
import { Welcome3 } from '../pages/welcome/Welcome3'
import { Welcome4 } from '../pages/welcome/Welcome4'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: 'welcome',
        element: <WelcomeLayout />,
        children: [
          { path: '1', element: <Welcome1 /> },
          { path: '2', element: <Welcome2 /> },
          { path: '3', element: <Welcome3 /> },
          { path: '4', element: <Welcome4 /> },
        ]
      }
    ],
  },
])
