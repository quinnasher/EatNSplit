/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ], theme: {
    extend: {
      colors: {
        primaryBtn: "#fe9e40",
        pGreen: "#70914f",
        pRed: "#a74343",
        bgColor: "#fcf2e0"
      }
    }
  },
  plugins: []
};

