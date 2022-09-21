const { defineConfig } = require('windicss/helpers');
const formsPlugin = require('windicss/plugin/forms');
const iconsPlugin = require('@windicss/plugin-icons')

// TODO: Define theme.
module.exports = defineConfig({
  preflight: {
    safelist: ['a', 'h1', 'h2', 'h3', 'h4', 'p', 'img']
  },
  safelist: ['icon-clipboard'],
  darkMode: 'class',
  extract: {
    include: ['**/*.html', 'assets/**/*.js', '**/*.md'],
    exclude: [
      'node_modules/**/*',
      '.git/**/*',
      '_site/**/*',
      'assets/reveal/**/*',
      '**/*-slides.md'
    ]
  },
  theme: {
    extend: {
      animation: {
        'bounce-double': 'bounce 0.8s ease-out 2.5'
      }
      // colors: {
      //   'scarlet-gum': '#3f1467',
      //   'mint-green': '#99FF9C',
      //   'bay-leaf': '#7bb08b'
      // },
      // fontFamily: {
      //   sans: ['Poppins', 'sans-serif']
      // }
    }
  },
  plugins: [
    formsPlugin,
    iconsPlugin
  ]
});