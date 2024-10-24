/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("assets/img/hero-image.jpg");',
      },
      backgroundSize: {
        '100%': '100%',
      },
      fontFamily: {
        shantell: ['Shantell Sans', 'cursive', ],
      },
      width: {
        container: 'min(130ch, calc(100% - 2rem))',
        divider: 'calc(100vw - 1rem)',
        card: 'min(400px, calc(100% - 1rem))',
      }
    },
  },
  plugins: [],
}

