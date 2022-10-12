module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
    }
  },
  'fontawesome-svg-core': {
    'license': 'free'
  },
  plugins: [require('daisyui'),('macros')],
}