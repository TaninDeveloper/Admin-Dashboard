import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/bootstrap.min.css'
import './assets/bootstrap.bundle.min.js'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
