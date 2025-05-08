/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#E6EBF2',
          100: '#C4D1E1',
          200: '#A1B7D0',
          300: '#7E9DC0',
          400: '#5B83AF',
          500: '#3E6997',
          600: '#2E517C',
          700: '#1F3A61',
          800: '#0F2C59', // Primary navy
          900: '#061C3F',
        },
        gold: {
          50: '#FEF9E6',
          100: '#FCF3CC',
          200: '#F9E799',
          300: '#F7DA66',
          400: '#F4D433',
          500: '#F2CD5C', // Primary gold
          600: '#D4B852',
          700: '#A99042',
          800: '#7E6B31',
          900: '#534721',
        },
        success: {
          50: '#E6F5EC',
          100: '#C4E7D3',
          200: '#A1D9BA',
          300: '#7ECBA1',
          400: '#5BBD88',
          500: '#38AF6F',
          600: '#2B8C59',
          700: '#1E6943',
          800: '#14462C',
          900: '#092316',
        },
        warning: {
          50: '#FEF6E6',
          100: '#FCE9CC',
          200: '#F9D399',
          300: '#F7BD66',
          400: '#F4A733',
          500: '#F19100',
          600: '#D37D00',
          700: '#A36000',
          800: '#724300',
          900: '#422700',
        },
        error: {
          50: '#FCE6E6',
          100: '#F9C4C4',
          200: '#F5A1A1',
          300: '#F27E7E',
          400: '#EF5B5B',
          500: '#EC3838',
          600: '#CC2828',
          700: '#AD1C1C',
          800: '#8E1010',
          900: '#6F0606',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'custom-1': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'custom-2': '0 8px 30px rgba(0, 0, 0, 0.1)',
      },
      spacing: {
        '18': '4.5rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      screens: {
        'xs': '480px',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(100px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-100px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out forwards',
        slideUp: 'slideUp 0.8s ease-out forwards',
        slideDown: 'slideDown 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
};