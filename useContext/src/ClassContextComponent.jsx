import { Component } from 'react'
import { ThemeContext } from './App'

export default class ClassContextComponent extends Component {
  themeStyles(dark){
    return {
      backggroundColor:dark?'#111':'#ccc',
      color:dark?'#ccc':'#111',
      padding:'2rem',
      margin:'2rem',
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {darkTheme => {
          return <div style={this.themeStyles(darkTheme)}>
            Class Theme
          </div>
        }}
      </ThemeContext.Consumer>
    )
  }
}
