const server = require('./src/server')
const config = require('./src/config')

server.listen(config.PORT, () => {
  console.info(`Listening to port ${config.PORT}`)
})

module.exports = server
