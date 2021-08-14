module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        kl: "12px",
      },
      boxShadow: {
        kl: "0 0 20px 5px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
