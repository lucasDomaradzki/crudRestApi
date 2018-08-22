import * as restify from 'restify'
import { environment } from '../common/environment'
import { Router } from '../common/router'
import * as mongoose from 'mongoose'

export class Server {

    application: restify.Server

    initializeDb(): mongoose.MongooseThenable{
        (<any>mongoose).Promise = global.Promise
        return mongoose.connect(environment.db.url, {
            useMongoClient: true
        })
    }

    initRoutes(routes: Router[]) : Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                this.application = restify.createServer({
                    name: 'crudRestApi',
                    version: '1.0.0'
                })

                this.application.use(restify.plugins.queryParser())
                this.application.use(restify.plugins.bodyParser())
                
                // routes
                for (let route of routes) {
                    route.applyRoutes(this.application)
                }

                this.application.listen(environment.server.port, () => {
                    resolve(this.application)
                })

            } catch (error) {
                reject(error)
            }
        })
    }

    bootstrap(routers: Router[] = []) : Promise<Server> {
        return this.initializeDb().then(() => this.initRoutes(routers).then(() => this))
    }
}