module.exports = {
  mode: 'jit',
  purge: {
    content: ['_site/**/*.html', '*.js'],
    options: {
      safelist: [],
    },
  },
  theme: {
    extend: {
      fontFamily: {
        mono: ['necto_monoregular', 'sans-serif'],
        serif: ['cantata_oneregular', 'serif']
      },
    },
  },
  variants: {},
  plugins: [],
}