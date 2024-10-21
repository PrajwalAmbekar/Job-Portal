/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scale:{
        'front':'105',
      },
      translate:{
        'X':'50%',
        'Y':'50%'
      },
      objectPosition:{
        'top':'50%',
        'left':'50%'
      },
      width:{
        'xm':'375px',
      },
      screens:{
        'xss':'375px',
      },
      fontSize:{
        'xxs':'0.4rem',
      }
    },
  },
  plugins: [],
}

