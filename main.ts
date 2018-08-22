import { Server } from './server/server'
import { usersRouter } from './users/user.router'
import { website } from './website/website.router'

const server = new Server()
server.bootstrap([
    usersRouter,
    website
    ]).then(server => {
    console.log('Server is listening on: ', server.application.address())
}).catch(error => {
    console.log('Server failed to start')
    console.error(error)
    process.exit(1)
})