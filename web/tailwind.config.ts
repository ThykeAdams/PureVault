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
        background: {
          primary: '#1A202C',
          secondary: '#2D3748',
        },
        text: {
          primary: '#F7FAFC',
          secondary: '#CBD5E0',
        },
        accent: {
          blue: '#4299E1',
          green: '#48BB78',
          red: '#F56565',
          yellow: '#ECC94B',
        },
        border: {
          light: '#4A5568',
          dark: '#2C3E50',
        },
      },
    },
  },
  plugins: [],
}
export default config
