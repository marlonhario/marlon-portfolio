// tailwind.config.ts
import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}" // include src if needed
  ],
  theme: {
    extend: {
      // colors: {
      //   primary: "#1c1c22",
      //   accent: "#00ff99",
      // },
      // borderColor: {
      //   accent: "#00ff99",
      // },
      fontFamily: {
        primary: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [animate],
};

// export default config;