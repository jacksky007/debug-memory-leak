'use strict'

const axios = require('axios')
const Controller = require('egg').Controller

function createCancelToken() {
  const source = axios.CancelToken.source()
  setTimeout(() => {
    source.cancel()
  }, 10 * 1000)
  return source.token
}

module.exports = class extends Controller {
  async index() {
    this.ctx.body = 'hi, egg'
  }

  async axios() {
    const result = await Promise.all(
      'x'.repeat(1000).split('').map(
        () => axios.get('http://localhost:7002/result.html', {
          // cancelToken: null,
          cancelToken: createCancelToken(),
        })
      )
    )
    const index = Math.floor(Math.random() * result.length)
    this.ctx.body = `
      <p>axios: count of requests -${result.length}</p>
      <p>result[${index}]: ${JSON.stringify(result[index].data)}</p>
    `
  }
}
