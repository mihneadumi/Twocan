import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.base};

    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.text};
  }
`

export default GlobalStyle
