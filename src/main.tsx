import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import GlobalStyle from './styled/globalStyles.ts'
import { ThemeProvider } from 'styled-components'
import theme from './constants/theme.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme.light}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
