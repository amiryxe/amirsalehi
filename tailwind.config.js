/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        'main': '#98ff6850',
        'dark': '#0f172a',
      }
    },
    container: {
      center: true,
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1024px',
        xl: '1240px',
        '2xl': '1240px',
      },
      padding: '1rem',
    },
  },
  plugins: [],
}
