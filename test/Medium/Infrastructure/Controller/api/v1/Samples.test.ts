import request from 'supertest'
import { Server } from '@src/Presentation/Server'

const server = Server.create()

describe('/iapi/v1/', () => {
  describe('GET /api/v1/samples', () => {
    it('成功', async () => {
      const res = await request(server).get('/api/v1/samples')
      expect(res.status).toBe(200)
      const item = res.body.item
      expect(item.id).toBe(1000)
      expect(item.name).toBe('hoge')
    })
  })
})
