import { Router } from '../common/router'
import * as restify from 'restify'
import { plugin } from 'mongoose';

class WebsiteRouter extends Router {

    applyRoutes(application: restify.Server) {

        application.get('/', restify.plugins.serveStatic({
            directory: './dist',
            default: 'index.html'
        }))
    }
}

export const website = new WebsiteRouter()