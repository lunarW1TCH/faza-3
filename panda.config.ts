import globalCss from '~/styles/global-styles';

import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  preflight: true,
  gitignore: true,
  watch: true,
  shorthands: true,
  globalCss,
  jsxFramework: 'react',
  jsxStyleProps: 'all',
  outdir: 'styled-system',
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: ['@pandacss/preset-base', '@park-ui/panda-preset'],
  theme: {
    extend: {
      keyframes: {
        rotate: {
          from: {
            transform: 'rotate(0deg)',
          },
          to: {
            transform: 'rotate(360deg)',
          },
        },
      },
    },
  },
});
