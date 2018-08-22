"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server/server");
const user_router_1 = require("./users/user.router");
const website_router_1 = require("./website/website.router");
const server = new server_1.Server();
server.bootstrap([
    user_router_1.usersRouter,
    website_router_1.website
]).then(server => {
    console.log('Server is listening on: ', server.application.address());
}).catch(error => {
    console.log('Server failed to start');
    console.error(error);
    process.exit(1);
});
