/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'beige': '#ffeece',
      },
    },
  },
  daisyui: {
    themes: [
      {
        pandora: {
          "primary": "#A6032F",
          "secondary": "#F2A30F",
          "accent": "#B2D95F",
          "neutral": "#1a1a1a"
        }
      }
    ],
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")]
}
