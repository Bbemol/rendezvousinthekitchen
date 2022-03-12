module.exports = {
  mode: 'jit',
  content: ['_site/**/*.html', '*.js'],
  theme: {
    extend: {
      transitionTimingFunction: {
        'menu': 'cubic-bezier(.45,.33,.53,.86)'
      },
      fontFamily: {
        mono: ['necto_monoregular', 'sans-serif'],
        serif: ['cantata_oneregular', 'serif']
      },
    },
  },
  plugins: [],
}