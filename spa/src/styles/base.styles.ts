import { Theme } from './theme.styles';

export default (theme: Theme) => ({
  '@global': {
    '*': {
      boxSizing: ' border-box',
      '&:active, &:hover, &:focus': {
        outline: 0,
        '-webkit-tap-highlight-color': 'transparent',
      }
    },
    html: {
      minHeight: '100vh',
      fontFamily: theme.typo.fontFamily,
      fontSize: theme.typo.fontSize,
      fontWeight: 400,
      '-ms-text-size-adjust': '100%',
      '-webkit-text-size-adjust': '100%',
      '-webkit-font-smoothing': 'antialiased'
    },
    'body, h1, h2, h3, h4, ul, ol, figure': {
      margin: 0,
      padding: 0,
    },
    'ul, ol': {
      listStyle: 'none'
    },
    a: {
      textDecoration: 'none',
      color: theme.palette.primary.text
    },
    body: {
      margin: 0,
      padding: 0,
      minHeight: '100vh',
      backgroundColor: theme.palette.secondary.main
    }
  }
});
