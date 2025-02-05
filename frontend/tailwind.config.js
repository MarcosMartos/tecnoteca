/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}", // Agrega esta línea
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"),
    require("postcss-nesting"), // O usa 'postcss-preset-env' en su lugar
    require("tailwindcss"),
    require("autoprefixer"), // Agrega el plugin de Flowbite
  ],
};
