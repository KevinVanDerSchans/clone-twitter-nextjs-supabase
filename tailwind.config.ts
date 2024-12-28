import type { Config } from 'tailwindcss'
import themeConfig from './src/styles/themeConfig'
import { tailwindPlugins } from './src/styles/tailwindPlugins'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ...themeConfig,
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [tailwindPlugins],
} satisfies Config
