/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6EBF2',
          100: '#C2D0E2',
          200: '#9AB2D1',
          300: '#7294C0',
          400: '#4A77AF',
          500: '#355989',
          600: '#243C5C',
          700: '#1A2E47',
          800: '#0F1D2F',
          900: '#0A2342',
        },
        accent: {
          50: '#FFFBE6',
          100: '#FFF7C2',
          200: '#FFF19A',
          300: '#FFEB72',
          400: '#FFE54A',
          500: '#F9D923',
          600: '#D9B91A',
          700: '#A68E14',
          800: '#73620E',
          900: '#403608',
        },
        success: {
          500: '#4BB543',
        },
        warning: {
          500: '#F0AD4E',
        },
        error: {
          500: '#D9534F',
        },
      },
      fontFamily: {
        sans: [
          '-apple-system', 
          'BlinkMacSystemFont', 
          'Segoe UI', 
          'Roboto', 
          'Helvetica Neue', 
          'Arial', 
          'sans-serif'
        ],
      },
      spacing: {
        '2': '8px',
        '4': '16px',
        '6': '24px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
      },
      boxShadow: {
        'card': '0 2px 10px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}