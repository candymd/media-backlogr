/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./application/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#2c343f",
        tertiary: "#556678",
        dark: "#000000",
        light: "#00b021",
        textMuted: "#556678",
        textPrimary: "#ffffff",
        statusBlue: "#00acff",
        statusWarning: "#f27405",
        statusError: "#ff0000",
        statusSuccess: "#00b021",
      },
    },
  },
  plugins: [],
};
