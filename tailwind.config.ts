import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef0f8',
          100: '#d9ddef',
          200: '#b3bae0',
          300: '#8d97d0',
          400: '#6674c1',
          500: '#3f4fad',
          600: '#2a3780',
          700: '#1f2a66',
          800: '#1a1f4b',
          900: '#0f1333',
          950: '#090c20',
        },
        accent: {
          50: '#fef9ed',
          100: '#fdf0d0',
          200: '#fbe1a1',
          300: '#f8d172',
          400: '#f5c542',
          500: '#e5b030',
          600: '#d4a853',
          700: '#b08a3a',
          800: '#8c6d2a',
          900: '#6b531f',
          950: '#4a3814',
        },
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
