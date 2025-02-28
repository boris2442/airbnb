 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Poppins", "Parkinsans", "verdana"], // Ajout de la police avec un fallback
      },
    },
  },
  plugins: [],
}
