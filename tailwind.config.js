module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#610BEF",
      },
      fontSize: {
        label:"11px",
        small: "13px",
        medium: "16px",
        large: "18px",
        wide: "15px",
        header_huge:"64px",
        header_large:"56px",
        header_medium:"48px",
        header_small:"32px",
        header_tiny:"24px",
        mobile_header_huge:"38px",
        mobile_header_large:"28px",
        mobile_header_medium:"24px",
        mobile_header_small:"22px",
        mobile_header_tiny:"20px",

        text_large:"20px",
        text_medium:"18px",
        text_small:"15px",
        text_tiny:"13px",
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
        'circular':"50%",
        'none':"0px"
      }
    },
    lineHeight: {
      header_huge:"88px",
      header_large:"72px",
      header_medium:"56px",
      header_small:"48px",
      header_tiny:"32px",

      text_large:"32px",
      text_medium:"28px",
      text_small:"24px",
      text_tiny:"22px",
    }
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
