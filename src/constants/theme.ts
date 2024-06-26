import { createTheme } from '@mui/material'

export const theme = {
  dark: {
    colors: {
      base: '#000814',
      primary: '#001D3D',
      secondary: '#003566',
      accent1: '#FFC300',
      accent2: '#FFD60A',
      hovered: '#f6e693',
      text: '#FFC300',
      text_highlight: '#f6e693'
    }
  },
  light: {
    colors: {
      base: '#52796F',
      primary: '#84A98C',
      secondary: '#CAD2C5',
      accent1: '#2F3E46',
      accent2: '#354F52',
      hovered: '#CAD2C5',
      text: '#2F3E46',
      text_highlight: '#CAD2C5'
    }
  }
}

export const muiTheme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000'
    }
  }
})

export default theme
