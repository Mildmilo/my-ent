import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#EAF3F6',
          100: '#B8D8E3',
          200: '#7FBDD0',
          300: '#4E9AB5',
          400: '#4A7C8F',
          500: '#3A6272',
          600: '#2A4A57',
        },
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#DDDDDD',
          300: '#BBBBBB',
          400: '#888888',
          500: '#666666',
          600: '#444444',
          700: '#2A2A2A',
          800: '#1A1A1A',
        },
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        '4xl': ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        '3xl': ['1.875rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        '2xl': ['1.5rem', { lineHeight: '1.3' }],
        xl: ['1.25rem', { lineHeight: '1.4' }],
        base: ['1rem', { lineHeight: '1.7' }],
        sm: ['0.875rem', { lineHeight: '1.6' }],
        xs: ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.06em' }],
      },
      maxWidth: {
        site: '72rem',
      },
    },
  },
  plugins: [],
}

export default config