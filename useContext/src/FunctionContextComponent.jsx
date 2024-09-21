import { ThemeContext } from './App'
import { useTheme, useThemeUpdate } from './ThemeContext'
function FunctionContextComponent() {
  const darkTheme = useTheme(ThemeContext)
  const toggleTheme = useThemeUpdate(ThemeContext)
  const themeStyles = {
    backggroundColor:darkTheme?'#111':'#ccc',
    color:darkTheme?'#ccc':'#111',
    padding:'2rem',
    margin:'2rem',
  }
  return (
    <>
    <button onClick={toggleTheme}>Toggle Theme</button>
    <div style={themeStyles}>FunctionContextComponent</div>
    </>
  )
}

export default FunctionContextComponent