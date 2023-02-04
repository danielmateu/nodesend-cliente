# Instalaciones

- Tailwind - npm install -D tailwindcss postcss autoprefixer + npx tailwindcss init -p

# Config Tailwind

- tailwind.config.js

 @type {import('tailwindcss').Config} 
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`



- globals.css

@tailwind base;
@tailwind components;
@tailwind utilities;