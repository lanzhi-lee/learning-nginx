const Koa = require('koa')
const KoaRouter = require('koa-router')

const App = new Koa()
const Router = new KoaRouter()

module.exports = (port) => {
  Router.get('/', async (ctx) => {
    ctx.response.body = `<h1>Index ${port}</h1>`
  })

  App.use(Router.routes())

  App.listen(port, () => {
    console.log(`app started at http://localhost:${port}`)
  })
}
