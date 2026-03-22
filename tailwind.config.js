/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'space': ['"Space Grotesk"', 'sans-serif'],
        'outfit': ['Outfit', 'sans-serif'],
      },
      colors: {
        purple: {
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
        },
        blue: {
          500: '#3b82f6',
          600: '#2563eb',
        },
        pink: {
          500: '#ec4899',
        }
      },
      animation: {
        'loader-spin': 'loader-spin 1s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'scroll': 'scroll 1.5s ease-in-out infinite',
        'bounce-float': 'bounce-float 3s ease-in-out infinite',
        'bounce-float-delay': 'bounce-float 3s ease-in-out 1.5s infinite',
        'fade-in': 'fade-in 0.6s ease-out forwards',
      },
      keyframes: {
        'loader-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.7' },
          '50%': { transform: 'scale(1.15)', opacity: '1' },
        },
        'scroll': {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(12px)', opacity: '0' },
        },
        'bounce-float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
