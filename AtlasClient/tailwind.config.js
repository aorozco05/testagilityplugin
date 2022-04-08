module.exports = {
    content: [
      './src/**/*.{js,ts,tsx,jsx}'
    ],
    theme: {
      colors: {
        'hm-dark-blue': '#003676',
        'hm-blue': '#0084d4',
        'hm-green': '#00ad50',
        'hm-black': '#333e48',
        'hm-gray': '#253746',
        'hm-purple': '#4e0a64',
        'hm-orange': '#e9740a',
        'hm-red': '#da4d5f',
        'hm-yellow': '#f4da40',
        'hm-light-blue': '#77c5d5',
        'hm-ultra-light-blue': '#bbdde6',
        'white': '#FFFFFF',
      },
      extend: {
        fontFamily: {
          barlow: ['Barlow', 'sans-serif'],
          oswald: ['Oswald', 'sans-serif'],
          zilla: ['Zilla Slab', 'serif']
        }
      },
    },
    plugins: [],
  }
  