/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation:['motion-safe'],
      screens:{
        'lg':{min:'640px'}
      },
      colors:{
        black:'var(--black)',
        white:'var(--white)',
        navy:'var(--navy)',
        grey:'var(--grey)',
        darkgrey:'var(--darkgrey)',

      },
    },
  },
  plugins: [],
}
