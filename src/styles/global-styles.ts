import { defineGlobalStyles } from '@pandacss/dev';

const globalCss = defineGlobalStyles({
  '*': {
    minW: 0,
  },
  'html, body': {
    fontFamily: 'var(--font-inter)',
  },
});

export default globalCss;

// TODO: add minW: 0, to all repos
