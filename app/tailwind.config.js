module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      
    },
    textColor: {
      'primary': '#3490dc',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
      "gold": "#FFD700",
    },
    colors: {
      "backgroundGray": "#272727"
    },
    backdropFilter: {
      'none': 'none',
      'blur': 'blur(20px)',
    },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [  require('@mjwebs/tailwindcss-frosted')],
}
