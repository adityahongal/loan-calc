/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
    './node_modules/preline/dist/*.js', // Include Preline components
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      screens: {
        xs: "375px", // iPhone 13 mini and similar
        sm: "390px", // iPhone 13/14/16
        "md-sm": "393px", // iPhone 14/16 Pro
        "lg-sm": "430px", // iPhone 15/16 Pro Max
        md: "768px", // Standard Tailwind 'md'
        lg: "1024px", // Standard Tailwind 'lg'
        xl: "1280px", // Standard Tailwind 'xl'
      },
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        cabinetGrotesk: ['CabinetGrotesk-Variable'],
        poppins: ['Poppins', 'sans-serif'],
        robotoFlex: ['"Roboto Flex"', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 10px 100px rgba(255, 209, 231, 0.2)', // Customize this shadow as needed
      },
    },
  },
  plugins: [
  ],
}