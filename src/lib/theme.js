import { createTheme } from '@mui/material/styles'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#16A2CD',
      75: '#50B9D9',
      120: '#0B97C1'
    },
    black: {
      main: '#000000',
      25: '#A5A5A5',
      30: '#A7A7A7',
      40: '#767676',
      50: '#909294',
      75: '#595C5F',
      100: '#212529',
      120: '#1A1E21'
    },
    offWhite: {
      main: '#F1F3F6'
    },
    background: {
      default: '#F1F3F6',
      paper: '#FFFFFF'
    }
  },
  shadows: {
    0: 'none',
    1: '0px 4px 4px rgba(232, 235, 240, 0.9)',
    2: '0px 0px 4px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.06)'
  },
  typography: {
    fontFamily: 'Inter, Open Sans, sans-serif'
  }
})

export default theme
