import { Server } from './Presentation/Server'

async function main() {
  const port: Number = parseInt(<string>process.env.APP_PORT, 10) || 3000
  const server = Server.create()
  server.listen(port)
  server.on('listening', () => {})
}

;(async () => {
  await main()
})()
