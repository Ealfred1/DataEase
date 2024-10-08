const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,ts,tsx}"], // Merged content paths
  darkMode: "class",
  theme: {
    extend: {
      // Extend animations and keyframes
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
      // Extend colors from both configurations
      colors: {
        p1: "#71e60b", // Main primary color
        p2: "#00a93b", // Darker primary color
        p3: "#49d793", // Success color
        p4: "#b7b7b8", // Light gray
        p5: "#7b7d85", // Mid-gray
        s1: "#131517", // General background color (dark)
        s2: "#1c1e20", // Secondary background (e.g., card background)
        s3: "#2c2e30", // Tertiary background (subcards)
        s4: "#00a93b", // Dark primary or border accent (similar to 'primary-dark')
        s5: "#59b9e2", // Info color for accents
        black: {
          DEFAULT: "#000000", // Default black color
          100: "#05091D", // Slightly lighter black
        },
        danger: "#e65244", // Danger color for alerts
        warning: "#fc8802", // Warning color for attention
        accent: "#a599c6", // Accent color (purple-ish)
      },
      // Extend box shadows
      boxShadow: {
        100: "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 16px 24px rgba(0, 0, 0, 0.25), inset 0px 3px 6px #00a93b", // Updated to match your 's4' dark primary color
        200: "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 16px 24px rgba(0, 0, 0, 0.25), inset 0px 4px 10px #49d793", // Success color
        300: "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 16px 24px rgba(0, 0, 0, 0.25), inset 0px 3px 6px #00a93b", // Updated to match 's4'
        400: "inset 0px 2px 4px 0 rgba(255, 255, 255, 0.05)",
        500: "0px 16px 24px rgba(0, 0, 0, 0.25), 0px -14px 48px rgba(40, 51, 111, 0.7)", // Darker shadows for depth
      },
      // Extend font families
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      // Extend transition properties
      transitionProperty: {
        borderColor: "border-color",
      },
      // Extend spacing
      spacing: {
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "3/20": "15%",
        "7/20": "35%",
        "9/20": "45%",
        "11/20": "55%",
        "13/20": "65%",
        "15/20": "75%",
        "17/20": "85%",
        "19/20": "95%",
        22: "88px",
        100: "100px",
        512: "512px",
        330: "330px",
        388: "388px",
        400: "400px",
        440: "440px",
        640: "640px",
        960: "960px",
        1230: "1230px",
      },
      // Extend z-index
      zIndex: {
        1: "1",
        2: "2",
        4: "4",
      },
      // Extend line height
      lineHeight: {
        12: "48px",
      },
      // Extend border-radius
      borderRadius: {
        14: "14px",
        20: "20px",
        40: "40px",
        half: "50%",
        "7xl": "40px",
      },
      // Extend flex properties
      flex: {
        50: "0 0 50%",
        320: "1px 0 320px",
        300: "0 0 300px",
        540: "0 0 540px",
        280: "0 0 280px",
        256: "0 0 256px",
        100: "0 0 100%",
      },
    },
  },
  plugins: [addVariablesForColors], // Keep your custom plugin
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
