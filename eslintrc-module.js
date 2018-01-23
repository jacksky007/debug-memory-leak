'use strict'

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: 'eslint-config-egg',
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  plugins: [
    'html',
  ],
  rules: {
    'default-case': [ 2 ],
    eqeqeq: [ 1 ],
    indent: [ 2, 2 ],
    'linebreak-style': [ 2, 'unix' ],
    'no-alert': 1,
    'no-bitwise': 0,
    'no-return-assign': [ 1, 'except-parens' ],
    'no-trailing-spaces': [ 2 ],
    semi: [ 2, 'never' ],
    strict: [ 2, 'global' ],
    'valid-jsdoc': [ 1 ],
  },
}
