/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
   theme: {
      extend: {
         animation: {
            scroll: "scroll 10s linear infinite",
            "scroll-reverse": "scroll-reverse 10s linear infinite",
         },
         keyframes: {
            scroll: {
               "0%": { transform: "translateX(100%)" }, // Start from the right
               "100%": { transform: "translateX(-100%)" }, // End at the left
            },
            "scroll-reverse": {
               "0%": { transform: "translateX(-100%)" }, // Start from the left
               "100%": { transform: "translateX(100%)" }, // End at the right
            },
         },
         backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
         },
      },
   },
   plugins: [],
};
