const Koa = require('koa')
const KoaRouter = require('koa-router')

const App = new Koa()
const Router = new KoaRouter()

module.exports = (port) => {
  // log request URL:
  App.use(async (ctx, next) => {
    console.log(`${port} Process ${ctx.request.method} ${ctx.request.url}...`)
    await next()
  })

  Router.get('/', async (ctx) => {
    ctx.response.body = `<h1>Index ${port}</h1>`
  })
  // 1.reverse-proxy
  Router.get('/99981', async (ctx) => {
    ctx.response.body = `<h1>Index 99981</h1>`
  })

  App.use(Router.routes())

  App.listen(port, () => {
    console.log(`app started at http://localhost:${port}`)
  })
}
