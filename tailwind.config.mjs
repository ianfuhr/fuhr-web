export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}"],
  safelist: ['animate-fade-in'],
  theme: {
    extend: {
      colors: {
        primary: "#1F8BFF",
        accent: "#16A34A",
        darkBlue: "#0E2544",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};
