/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      fontFamily: {
        font1: ['"Product Sans"', "sans-serif"],
        font2: ['"Arsenal"', "sans-serif"],
      },
      colors: {
        primary: {
          light: "#4a76b8", // Brighter cosmic blue
          DEFAULT: "#17406e", // Balanced deep space navy
          dark: "#0d2b4a", // Darker but clear navy blue
        },
        
        secondary: {
          light: "#e3e7ed", // Soft starlight silver
          DEFAULT: "#7a8493", // Muted space gray
          dark: "#525c6b", // Deep cosmic gray
        },
        accent: {
          light: "#c7e4f9", // Soft nebula glow
          DEFAULT: "#4ca3dd", // Vibrant celestial blue
          dark: "#1b4c72", // Deep nebula accent
        },
        danger: "#ff4d4d", // Supernova red
        success: "#34d399", // Aurora green
        warning: "#fbbf24", // Solar flare yellow
        info: "#3b82f6", // Cosmic blue info
        neutral: {
          light: "#f4f7fa", // Pale starlight
          DEFAULT: "#cbd5e1", // Soft lunar gray
          dark: "#475569", // Dark meteorite gray
        },
      },      
      spacing: {
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        5: "20px",
        6: "24px",
        8: "32px",
        10: "40px",
        12: "48px",
        16: "64px",
        20: "80px",
        24: "96px",
      },
      borderRadius: {
        none: "0",
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "32px",
        "3xl": "48px",
        full: "9999px",
      },
      zIndex: {
        auto: "auto",
        0: "0",
        10: "10",
        20: "20",
        30: "30",
        40: "40",
        50: "50",
        100: "100",
        200: "200",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
        DEFAULT: "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
        md: "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
        lg: "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)",
        xl: "0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)",
        "2xl": "0 25px 50px rgba(0, 0, 0, 0.25)",
      },
      lineHeight: {
        none: "1",
        tight: "1.25",
        snug: "1.375",
        normal: "1.5",
        relaxed: "1.625",
        loose: "2",
      },
      transitionTimingFunction: {
        DEFAULT: "ease-in-out",
        linear: "linear",
        ease: "ease",
        "ease-in": "ease-in",
        "ease-out": "ease-out",
      },
      transitionDuration: {
        DEFAULT: "300ms",
        75: "75ms",
        100: "100ms",
        150: "150ms",
        200: "200ms",
        300: "300ms",
        500: "500ms",
        700: "700ms",
        1000: "1000ms",
      },
    },
  },
  plugins: [],
};