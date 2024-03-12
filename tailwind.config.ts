import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "background-light":"linear-gradient(122deg,rgba(217, 234, 250, 1) 30%,rgba(170, 207, 244, 0.7371323529411764) 100%)",
        "background-dark":"linear-gradient(122deg, rgba(17,25,37,1) 30%, rgba(25,34,43,0.9444152661064426) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
