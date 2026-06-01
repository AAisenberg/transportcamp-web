import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'tc-orange': '#E34F26',
        'tc-blue': '#1E6EB4',
        'tc-dark': '#0C0C0C',
        'tc-off-white': '#F7F7F7',
        'tc-text': '#1A1A1A',
        'tc-muted': '#6B7280',
      },
      fontFamily: {
        sans: ['var(--font-brand)'],
        brand: ['var(--font-brand)'],
      },
    },
  },
  plugins: [],
}

export default config
