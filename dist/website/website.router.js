"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("../common/router");
const restify = require("restify");
class WebsiteRouter extends router_1.Router {
    applyRoutes(application) {
        application.get('/', restify.plugins.serveStatic({
            directory: './dist',
            default: 'index.html'
        }));
    }
}
exports.website = new WebsiteRouter();
