import GlobalStyles from './global/styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import theme from './global/styles/theme'

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
      </ThemeProvider>
    </div>
  )
}

export default App
