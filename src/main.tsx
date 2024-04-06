import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import GlobalStyle from './styled/globalStyles.ts'
import { ThemeProvider } from 'styled-components'
import theme, { muiTheme } from './constants/theme.ts'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={muiTheme}>
      <ThemeProvider theme={theme.light}>
        <GlobalStyle />
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </ThemeProvider>
  </React.StrictMode>
)
