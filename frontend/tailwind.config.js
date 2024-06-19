// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        cardColor: "#9a3412",
        cardTextColor: "#ffffff",
        websiteBgColor: "#111827",
        navbarBgColor: "#9a3412",
        navbarMenuTextColor: "#fdba74",
        navbarMenuHoverColor: "#c2410c",
        navbarMenuHoverTextColor: "#ffffff",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
