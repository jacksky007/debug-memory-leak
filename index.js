'use strict'

const inDevEnv = process.env.NODE_ENV !== 'production'

const config = {
  baseDir: __dirname,
  port: process.env.PORT || 7001,
}

if (inDevEnv) {
  config.workers = 1
  config.port = process.env.PORT || 80
}

require('egg').startCluster(config)
