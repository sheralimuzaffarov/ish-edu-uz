import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#185D89",
          dark: "rgb(24, 93, 137)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
