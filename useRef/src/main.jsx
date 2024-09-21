import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Focus from './Focus.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Focus />
  </StrictMode>,
)
