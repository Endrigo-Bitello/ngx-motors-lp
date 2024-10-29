// tailwind.config.js
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // ou 'media' ou 'class' se desejar implementar temas
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF', // Azul personalizado
        secondary: '#3B82F6', // Azul claro
      },
    },
  },
  variants: {
    extend: {
      ringWidth: ['focus'],
      ringColor: ['focus'],
    },
  },
  plugins: [],
};
