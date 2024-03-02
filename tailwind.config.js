module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: { blue_gray: { 50: "#ebebf0" }, gray: { 100: "#f6f6f6" } },
      boxShadow: {},
      fontFamily: { nunito: "Nunito" },
      opacity: { 0.04: 0.04 },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
