module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#610BEF",
      },
      fontSize: {
        small: "13px",
        medium: "16px",
        large: "18px",
        wide: "15px",
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        5: "5px",
        6: "6px",
        7: "7px",
      },
      borderRadius: {
        DEFAULT: '6px',
        'default':'6px',
        'rounded':"20px",
        'none':"0px"
      }
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
