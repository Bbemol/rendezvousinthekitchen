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
    },
  },
  variants: {},
  plugins: [],
}