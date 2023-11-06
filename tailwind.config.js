module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      spacing: {
        '1': '1px',
        '70': '70px',
        '240': '240px',
        '80': '80px',
      },
      container: {
        center: true,
        padding: '2rem',
        maxWidth: {
          default: '800px'
        }
      },
      backgroundImage: {
        'body': "url('wp10766809-simple-colors-wallpapers.jpg')",
      },
      inset: {
        '190': '190px',
        '2': '2px',
        '40': '40px', // Ajoutez cette ligne pour déplacer l'image de 40 pixels vers le bas
      },
      height: {
        '210vh': '210vh',
      },
      borderRadius: {
        '16': '16px',
        '10': '10px',
      },
      colors: {
        blue: {
          '700': '#4682B4',
        },
        gray: {
          '200': '#f1f5f5',
        },
      },
    },
  },
  variants: {
    extend: {
      textColor: ['hover', 'focus'],
      margin: ['responsive', 'hover', 'focus'],
      padding: ['responsive', 'hover'],
    },
  },
  plugins: [],
}

