import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import StateObject from './StateObject.jsx'
import StateSimple from './StateSimple.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <br/>
    <StateObject />
    <br/>
    <StateSimple />
  </StrictMode>,
)
