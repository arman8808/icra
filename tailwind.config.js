/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontSize: {
        xs: "0.75rem", // 12px
        sm: "0.875rem", // 14px
        base: "1rem", // 16px
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
        "2xl": "1.5rem", // 24px
        "3xl": "1.875rem", // 30px
        "4xl": "2.25rem", // 36px
        "5xl": "3rem", // 48px
        "6xl": "3.75rem", // 60px
        "7xl": "4.5rem", // 72px
      },
      fontWeight: {
        thin: "100",
        extraLight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semiBold: "600",
        bold: "700",
        extraBold: "800",
        black: "900",
      },
      colors: {
        primary: "#1D4ED8", 
        secondary: "#9333EA", 
        accent: "#F59E0B", 
        success: "#10B981", 
        danger: "#EF4444", 
        warning: "#FBBF24",
        info: "#3B82F6", 
        dark: "#111827", 
        light: "#F3F4F6", 
        white: "#FFFFFF",
        black: "#000000", 
        green: "#226410",
        underlineBlue: "#547FF3",
        codGray: "#110F0F",
        laPalma: "#1F5512",
        lightGreen: "#27820C",
        textColor:"#9F9193",
        secondTextColor:"#4B4141",
        background:'#efffe6',
        secondryBackground:'#F7F7FC',
        blackShade:'#11142D',
        footerText:"#92929D",
        darkGreen:"#0B2205",

      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(80.69deg, rgba(39, 130, 12, 0.8) -15.21%, rgba(0, 0, 0, 0.9) 94.49%)",
      },
      'custom-gradient-second': 'linear-gradient(180deg, rgba(239, 255, 230, 0.6) 0%, #FFFFFF 73.84%)',
    },
    screens: {
      mobile: { min: "280px", max: "639px" },
      tablet: { min: "640px", max: "767px" },
      // => @media (min-width: 640px) { ... }
      md: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }
      lg: { min: "1024px", max: "1279px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1280px", max: "1535px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2xl": { min: "1536px" },
    },
  },
  plugins: [],
};
