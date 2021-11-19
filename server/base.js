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
  // 2.cors
  // Router.get('/api', async (ctx) => {
  //   ctx.set('access-control-allow-origin', '*')
  //   ctx.response.body = { code: 0, msg: 'dev.mi.com' }
  // })
  Router.get('/apis', async (ctx) => {
    ctx.cookies.set('cid', '212630958', {
      domain: 'be.dev.leezx.cn', // 写cookie所在的域名
      path: '/', // 写cookie所在的路径
      maxAge: 10 * 60 * 1000, // cookie有效时长
      expires: new Date('2017-02-15'), // cookie失效时间
      httpOnly: false, // 是否只用于http请求中获取
      overwrite: false, // 是否允许重写
    })

    ctx.response.body = { code: 0, msg: 'dev.mi.com apis' }
  })

  App.use(Router.routes())

  App.listen(port, () => {
    console.log(`app started at http://localhost:${port}`)
  })
}
