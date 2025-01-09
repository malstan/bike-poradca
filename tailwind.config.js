/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js,vue}"],
  theme: {
    screens: {
      'xs': '500px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      backgroundImage: {
        'hero-image': "url('/assets/images/hero-image.jpg')",
      }
    },
  },
  plugins: [],
}

