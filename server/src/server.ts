import Koa from 'koa'
import router from './router'
import { port, hostname } from './config'
import { historyApiFallback } from './middleware/history-api-fallback'
import { serve } from './middleware/static'

new Koa()
  .use(router.routes())
  .use(router.allowedMethods())
  .use(historyApiFallback)
  .use(serve)
  .listen(port, hostname, () => {
    // eslint-disable-next-line no-console
    console.log(`Server listening on ${hostname}:${port}.`)
  })
