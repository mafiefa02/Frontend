/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "hsl(25, 97%, 53%)",
        white: "hsl(0, 0%, 100%)",
        lightgrey: "hsl(217, 12%, 63%)",
        mediumgrey: "hsl(216, 12%, 54%)",
        darkblue: "hsl(213, 19%, 18%)",
        verydarkblue: "hsl(216, 12%, 8%)",
      },
    },
  },
  plugins: [],
  backgroundImage: {
    "gradient-radial":
      "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
    "gradient-radial-at-t":
      "radial-gradient(ellipse at top, var(--tw-gradient-stops))",
    "gradient-radial-at-b":
      "radial-gradient(ellipse at bottom, var(--tw-gradient-stops))",
    "gradient-radial-at-l":
      "radial-gradient(ellipse at left, var(--tw-gradient-stops))",
    "gradient-radial-at-r":
      "radial-gradient(ellipse at right, var(--tw-gradient-stops))",
    "gradient-radial-at-tl":
      "radial-gradient(ellipse at top left, var(--tw-gradient-stops))",
    "gradient-radial-at-tr":
      "radial-gradient(ellipse at top right, var(--tw-gradient-stops))",
    "gradient-radial-at-bl":
      "radial-gradient(ellipse at bottom left, var(--tw-gradient-stops))",
    "gradient-radial-at-br":
      "radial-gradient(ellipse at bottom right, var(--tw-gradient-stops))",
  },
};
