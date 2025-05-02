import Router from 'koa-router'
import samples from './v1/samples'

const router = new Router({
  prefix: '/api',
})

router.use(samples.routes())

export default router
