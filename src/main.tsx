import React from 'react'
import ReactDOM from 'react-dom/client'
import RouterApp from './RouterApp'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <React.StrictMode>
    <RouterApp />
    </React.StrictMode>
  </HelmetProvider>,
)