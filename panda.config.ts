import globalCss from '@/styles/global-styles';
import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  preflight: true,
  emitPackage: true,
  gitignore: true,
  watch: true,
  shorthands: true,
  globalCss,
  jsxFramework: 'react',
  jsxFactory: 'panda',
  jsxStyleProps: 'all',
  outdir: '@styled-system',
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
});
