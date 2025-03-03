// tailwind.config.js
module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    content: ['./index.html', './src/**/*.{vue, js,ts,jsx,tsx}'],
    theme: {
      extend: {
        fontFamily: {
            sans: ['Poppins', 'sans-serif']
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
}