export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Poppins", "sans-serif"],
      },
      colors: {
        accent: "#6366F1",
        glow: "#22D3EE",
        highlight: "#F472B6",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(circle at top, #1E293B, #0F172A)",
      },
    },
  },
  plugins: [],
};
