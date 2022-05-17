import { ThemeGlobalStyle } from 'config/Theme'
import { Router } from 'config/Router'

import 'leaflet/dist/leaflet.css'

export function App() {
  return (
    <>
      <Router />
      <ThemeGlobalStyle />
    </>
  )
}
