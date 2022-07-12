/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],

  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: ['synthwave']
  }
};
