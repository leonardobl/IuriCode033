import 'styled-components'
import theme from '../global/styles/theme'

type ThemeProps = typeof theme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeProps {}
}
