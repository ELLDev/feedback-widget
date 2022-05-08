const { Brandy } = require("phosphor-react");

module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontFamily: {
      'inter': ['Inter'],
    },
    extend: {
      colors: {
        brand: {
          300: "#996DFF",
          500: "#8257E5",
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar')
  ],
};
