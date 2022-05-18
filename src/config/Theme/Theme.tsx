import { createGlobalStyle } from 'styled-components'

export const theme = {
  grid: {
    maxWidth: '112rem',
  },
  font: {
    family: 'Nunito, sans-serif',
    sizes: {
      disclaimer: '1.2rem',
      small: '1.4rem',
      paragraph: '1.6rem',
      subtitle: '2.4rem',
      title: '3.2rem',
    },
    lineHeights: {
      subtitle: '3.4rem',
    },
  },
  layers: {
    base: 1,
    alwaysOnTop: 2,
    alwaysOnDown: -1,
  },
  colors: {
    white: '#ffffff',
    black: '#000000',
    neutral: {
      50: '#ebf2f5',
      100: '#f5f8fA',
      200: '#d3e2e5',
      500: '#8fa7b3',
      800: '#5c8599',
      900: '#4d6f80',
    },
    blue: {
      200: '#96feff',
      400: '#17d6eb',
      500: '#15c3d6',
      600: '#12AFCB',
      800: '#0089a5',
    },
    yellow: {
      500: '#ffd666',
      900: '#8d734b',
    },
    green: {
      500: '#37c77f',
    },
    pink: {
      500: '#ff669d',
    },
    withGradient: {
      blue: 'linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%)',
      cyan: 'linear-gradient(329.54deg, #15B6D6 0%, #15D6D6 100%)',
    },
  },
  spacing: {
    1: '0.8rem',
    2: '1.2rem',
    3: '1.6rem',
    4: '2.4rem',
    5: '3.2rem',
    6: '4rem',
    7: '4.8rem',
  },
}

export type Theme = typeof theme

export const ThemeGlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.paragraph};
    background-color: ${theme.colors.neutral[50]};
    color: ${theme.colors.neutral[900]};
  }

  #root {
    display: flex;
    flex-direction: column;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  input[data-autocompleted] {
    background-color: transparent !important;
  }

  input:-webkit-autofill, input:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }
`
