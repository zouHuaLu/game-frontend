import c2k from 'koa-connect'

declare global {
  type ConnectMiddleware = Parameters<typeof c2k>[0]
}
