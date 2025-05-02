import http from 'http'
import Koa from 'koa'
import koaBodyParser from 'koa-bodyparser'
import KoaRouter from 'koa-router'

import api from './Controller/api'

export class Server {
  public static create(): http.Server {
    const koa = new Koa()
    koa.proxy = true
    koa.use(koaBodyParser())

    const router = new KoaRouter()
    router.use(api.routes())
    koa.use(router.routes())

    // 本来認証したりなんだり...
    // 今回はSampleの為、割愛
    const server = new http.Server(koa.callback())
    return server
  }
}
