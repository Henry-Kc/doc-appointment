import React from 'react'
import { BrowserRouter } from 'react-router-dom'


import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { AuthProvider } from './contexts/AuthProvider.jsx'
import { ContextProvider } from './contexts/ContextProvider.jsx'
import ErrorBoundary from './ErrorBoundary.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <AuthProvider>
        <ContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ContextProvider>
      </AuthProvider>
    </ErrorBoundary>
  </React.StrictMode>,
)
