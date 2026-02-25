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
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(63, 79, 173, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(229, 176, 48, 0.4)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #1a1f4b 0%, #0f1333 50%, #4a3814 100%)',
      },
    },
  },
  plugins: [],
}
export default config
