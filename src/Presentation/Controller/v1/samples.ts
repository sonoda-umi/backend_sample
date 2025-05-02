import { SampleService } from '@src/Application/SampleService'
import Router from 'koa-router'

const router = new Router({
  prefix: '/v1/samples',
})

export default router

router.get('/', async (ctx) => {
  const service = new SampleService()
  const item = await service.get()
  ctx.body = { item: item }
})
