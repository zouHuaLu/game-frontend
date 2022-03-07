import history, { Options } from 'connect-history-api-fallback'
import { Middleware } from 'koa'
import c2k from 'koa-connect'

export function createHistoryApiFallback(options: Options) {
  return c2k(history(options) as ConnectMiddleware)
}

const clientHistoryApiFallback = createHistoryApiFallback({ index: '/index.html' })
// const adminHistoryApiFallback = createHistoryApiFallback({ index: '/admin/index.html' })

export const historyApiFallback: Middleware = async function (ctx, next) {
  // if (/^\/admin/i.test(ctx.path)) {
  //   await adminHistoryApiFallback(ctx, next)
  // } else {
  await clientHistoryApiFallback(ctx, next)
  // }
}
