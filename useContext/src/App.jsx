import React from 'react'
import './App.css'
import FunctionContextComponent from './FunctionContextComponent.jsx'
import { ThemeProvider } from './ThemeContext.jsx'

export const ThemeContext = React.createContext()

function App() {
  
  return (
      <ThemeProvider>
        <FunctionContextComponent />
      </ThemeProvider>
  )
}

export default App
