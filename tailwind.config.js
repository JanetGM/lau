/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        // ...
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        red: '#F10009',
        dorado:'#DFB391',
        plomo:'#616255',
        plomoClaro:'#CECABF',
      },
      fontSize: {
        '7xl': '5rem', // Tamaño personalizado para 7xl
      },
      fontFamily: {
        arsenica: ['Arsenica Variable', 'sans-serif'],
      },
      textColor: {
        arsenica: '#DFB391',
      },
    },
  },
  plugins: [],
}


