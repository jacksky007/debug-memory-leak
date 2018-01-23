'use strict'

const merge = require('lodash.merge')
const config = require('./eslintrc-module')

module.exports = merge({}, config, {
  env: {
    browser: false,
    es6: true,
    node: true,
  },
  parserOptions: {
    sourceType: 'script',
  },
})
