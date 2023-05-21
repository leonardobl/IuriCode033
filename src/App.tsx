import GlobalStyles from './global/styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import theme from './global/styles/theme'
import Home from './components/pages/home'

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Home />
      </ThemeProvider>
    </div>
  )
}

export default App
