import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, } from 'react-router-dom'
import { router } from './routes/router'
import './global.scss'
import 'virtual:uno.css'
import './app.scss'
import 'virtual:svgsprites'

const el = document.getElementById('root') as HTMLElement
ReactDOM.createRoot(el).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
