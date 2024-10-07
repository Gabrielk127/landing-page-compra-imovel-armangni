import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-blue:": "#01e0eb",
      },
      backgroundColor: {
        "custom-background": "#1E1E1E",
        "custom-background-two": "#363636",
        "custom-background-three": "#DAA520",
        "custom-background-text": "#2E2E2E",
        "custom-background-card": "#1C1C1C",
        "custom-background-card-two": "#1C1C1C",
        "custom-background-button": "#DAA520",
      },
      textColor: {
        "custom-text-title": "#DAA520",
        "custom-icons": "#B89C87",
      },
    },
  },
  plugins: [],
};
export default config;
