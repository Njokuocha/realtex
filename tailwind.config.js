/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",  // or 'media'
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pinky: "#F2749A",
        blue: "#1E40AF",
        darkaqua: "rgb(45, 127, 127)",
        aqua: "rgb(214, 255, 255)",
        darkaqua_hover: "rgba(45, 127, 127, 0.17)"
      },
      fontSize: {
        small: '14px',
      },
      fontFamily: {
        'segio': ['Segio UI', 'sans-serif', 'Inter'],
      },
      boxShadow: {
        nav: "2px 2px 4px rgba(53, 53, 53, 0.19)",
        box: "8px 8px 25px rgba(34, 34, 34, 0.1)"
      },
    },
  },
  plugins: [],
}



// Configuration Sample

// tailwind.config.js
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         primary: "#1E40AF",       // custom color
//       },
//       fontSize: {
//         huge: "4rem",             // custom font size
//       },
//       spacing: {
//         1: "1px",                 // custom spacing
//       },
//       borderRadius: {
//         "4xl": "2rem",            // custom rounded corners
//       },
//       boxShadow: {
//         card: "0 4px 15px rgba(0,0,0,0.2)", // custom shadow
//       },
//       animation: {
//         "fade-in": "fadeIn 1s ease-in-out forwards", // custom animation
//       },
//       keyframes: {
//         fadeIn: {
//           "0%": { opacity: 0 },
//           "100%": { opacity: 1 },
//         },
//       },
//       fontFamily: {
//         sans: ["Inter", "sans-serif"], // custom font
//       },
//       screens: {
//         "3xl": "1920px",          // custom breakpoint
//       },
//     },
//   },
//   plugins: [],
// };

