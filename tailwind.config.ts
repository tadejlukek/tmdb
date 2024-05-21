import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      screens: {
        small: "1400px",
      },
    },
    extend: {
      colors: {
        "tmdb-lightgray": "#E3E3E3",
        "tmdb-gray": "#9e9e9e",
        "tmdb-darkgray": "#666666",
        "tmdb-lightblue": "#01B4E4",
        "tmdb-blue": "#032541",
        "tmdb-darkblue": "#081C22",
        "tmdb-green": "#21CE79",
        "tmdb-yellow": "#D1D431",
        "tmdb-red": "#CB225B",
      },
      boxShadow: {
        tmdb: "0 2px 8px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
