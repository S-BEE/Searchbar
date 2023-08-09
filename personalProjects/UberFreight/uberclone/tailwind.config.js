/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      md: { min:'415px', max:'800px' },
      sm: { max:'414px' }

    },
    extend: {
      backgroundImage:{
        'hero-desktop': "url('https://www.uberfreight.com/wp-content/themes/uberfreight/video/UberFreight-Desktop.mp4')",
        'hero-mobile': "url('https://www.uberfreight.com/wp-content/themes/uberfreight/video/UberFreight-Mobile.mp4')"
      },
    },
  },
  plugins: [],
}
