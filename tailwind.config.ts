import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: { /* balloon appear animation */
        appear: {
          '0%': { transform: 'scale(0)', opacity: '1', transformOrigin: 'center' },
          '100%': { transform: 'scale(1)', opacity: '1', transformOrigin: 'center' },
        },
      },
      animation: {
        appear: 'appear 0.4s cubic-bezier(.5,1.26,.64,1) forwards 1',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
