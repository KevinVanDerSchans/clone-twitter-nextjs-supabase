import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'
import themeConfig from './src/styles/themeConfig'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ...themeConfig,
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
} satisfies Config
