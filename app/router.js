'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  router.get('/axios', controller.home.axios)
  router.get('/', controller.home.index)
}
