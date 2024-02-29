import { defineGlobalStyles } from '@pandacss/dev';

const globalCss = defineGlobalStyles({
  '*': {
    minW: 0,
  },
  'html, body': {
    fontFamily: 'var(--font-inter)',
  },
  html: {
    minH: '100%',
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    minH: '100vh',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
});

export default globalCss;

// TODO: add minW: 0, to all repos
