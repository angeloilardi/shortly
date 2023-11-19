import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: { 'robin_egg_blue': { DEFAULT: '#2acfcf', 100: '#082929', 200: '#115353', 300: '#197c7c', 400: '#22a6a6', 500: '#2acfcf', 600: '#52dcdc', 700: '#7de4e4', 800: '#a9eded', 900: '#d4f6f6' }, 'english_violet': { DEFAULT: '#3b3054', 100: '#0c0a11', 200: '#181322', 300: '#231d33', 400: '#2f2743', 500: '#3b3054', 600: '#5d4c84', 700: '#826fac', 800: '#ab9fc8', 900: '#d5cfe3' }, 'bittersweet': { DEFAULT: '#f46262', 100: '#400404', 200: '#800909', 300: '#c00d0d', 400: '#f02222', 500: '#f46262', 600: '#f68181', 700: '#f8a1a1', 800: '#fbc0c0', 900: '#fde0e0' }, 'silver': { DEFAULT: '#bfbfbf', 100: '#262626', 200: '#4d4d4d', 300: '#737373', 400: '#999999', 500: '#bfbfbf', 600: '#cccccc', 700: '#d9d9d9', 800: '#e6e6e6', 900: '#f2f2f2' }, 'rose_quartz': { DEFAULT: '#9e9aa7', 100: '#1f1e22', 200: '#3e3c45', 300: '#5e5a67', 400: '#7d7889', 500: '#9e9aa7', 600: '#b1aeb9', 700: '#c5c2ca', 800: '#d8d7dc', 900: '#ecebed' }, 'raisin_black': { DEFAULT: '#35323e', 100: '#0b0a0c', 200: '#151419', 300: '#201e25', 400: '#2a2832', 500: '#35323e', 600: '#5b556a', 700: '#817b95', 800: '#aba7b8', 900: '#d5d3dc' }, 'very_dark_violet': { DEFAULT: '#232127', 100: '#070708', 200: '#0e0d0f', 300: '#151417', 400: '#1c1a1f', 500: '#232127', 600: '#4d4956', 700: '#787285', 800: '#a5a0ae', 900: '#d2d0d7' } }
    },
  },
  plugins: [],
}
export default config
