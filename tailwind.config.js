/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'sm': '0 4px 8px rgba(0,0,0,.15)',
      },
      backgroundImage: {
        'edit-button': "url('./src/assets/todo-title-edit-button.svg')",
      }
    },
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
    },
  },
  plugins: [],
}

