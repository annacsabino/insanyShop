import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

console.log(defaultTheme)

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
