import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, } from 'react-router-dom'
import { router } from './routes/router'

const el = document.getElementById('root') as HTMLElement
ReactDOM.createRoot(el).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
