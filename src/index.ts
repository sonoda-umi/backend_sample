import { Server } from './Presentation/Server'

async function main() {
  const server = Server.create()
  server.listen(3000)
  server.on('listening', () => {})
}

;(async () => {
  await main()
})()
