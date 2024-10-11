import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "#0A74D8",
        background: "#e6ebf1;"
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, #9fc8e2 0%, #c1c3e2 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
