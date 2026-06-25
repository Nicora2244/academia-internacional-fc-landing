/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Academia Internacional FC — design tokens from Figma
        brand: {
          50: '#ebf4ff',
          100: '#d2e3fc',
          200: '#aecbfa',
          300: '#8ab4f8',
          400: '#4f93f0',
          500: '#1a73e8', // primary blue
          600: '#1765cc',
          700: '#1457b0',
          800: '#103f80',
          900: '#0b2c5c',
        },
        lime: {
          DEFAULT: '#d4f604', // lime accent
          400: '#d4f604',
          500: '#c2e000',
        },
        ink: '#0a0a0a',
      },
      fontFamily: {
        display: ['Comfortaa', 'system-ui', 'cursive'],
        sans: ['Roboto', 'system-ui', 'sans-serif'],
        label: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        page: '1280px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        marquee: 'marquee 22s linear infinite',
      },
    },
  },
  plugins: [],
}
