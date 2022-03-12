module.exports = {
  mode: 'jit',
  content: ['_site/**/*.html', '*.js'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['necto_monoregular', 'sans-serif'],
        serif: ['cantata_oneregular', 'serif']
      },
    },
  },
  plugins: [],
}