import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'body': 'inset 2 8px 8px 0 rgba(0, 0, 0, 0.06)',
      },
      colors: {
        background: {
          primary: '#1C1D21',
          secondary: '#272727',
          third: "#393939"
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
