import send from 'koa-send'
import { ServerResponse } from 'http'
import { Middleware } from 'koa'

export const serve: Middleware = async function (ctx, next) {
  const ctxPath = ctx.path
  let filePath = ''
  if (ctx.method === 'HEAD' || ctx.method === 'GET') {
    if (/^\/admin$/i.test(ctxPath)) {
      ctx.status = 301
      ctx.redirect('/admin/')
      return
    }

    const options = {
      root: 'dist/static/client',
      index: 'index.html',
      maxage: 30 * 24 * 3600 * 1000,
      setHeaders(res: ServerResponse, path: string) {
        if (/\.html/.test(path)) {
          // html不设缓存，覆盖上面的maxage设置
          res.setHeader('Cache-Control', 'max-age=0')
        }
      }
    }
    if (/^\/admin/i.test(ctxPath)) {
      options.root = 'dist/static'
    } else if (/^\/upload/i.test(ctxPath)) {
      options.root = ''
      options.index = ''
    }
    try {
      filePath = await send(ctx, ctxPath, options)
    } catch (err: any) {
      if (err.status !== 404) {
        throw err
      }
    }
  }
  if (!filePath) {
    await next()
  }
}
