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
        primary: "#1D4ED8", // A blue color for primary usage
        secondary: "#9333EA", // A purple color for secondary usage
        accent: "#F59E0B", // An orange color for accent highlights
        success: "#10B981", // A green color for success indicators
        danger: "#EF4444", // A red color for errors or warnings
        warning: "#FBBF24", // A yellow color for warnings
        info: "#3B82F6", // A blue color for informational highlights
        dark: "#111827", // A dark gray for background or text
        light: "#F3F4F6", // A light gray for background or text
        white: "#FFFFFF", // White color
        black: "#000000", // Black color
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

      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(80.69deg, rgba(39, 130, 12, 0.8) -15.21%, rgba(0, 0, 0, 0.9) 94.49%)",
      },
      'custom-gradient-second': 'linear-gradient(180deg, rgba(239, 255, 230, 0.6) 0%, #FFFFFF 73.84%)',
    },
  },
  plugins: [],
};
