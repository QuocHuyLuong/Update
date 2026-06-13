/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Ánh xạ các màu tùy chỉnh vào Tailwind
        primary: "var(--color-primary)",
        "primary-dark": "var(--color-primary-dark)",
        secondary: "var(--color-secondary)",
        "secondary-light": "var(--color-secondary-light)",
        accent: "var(--color-accent)",
        "accent-light": "var(--color-accent-light)",
      }
    },
  },
  plugins: [],
}