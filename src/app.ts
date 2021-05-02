import * as express from 'express'
import * as cors from 'cors'
import connectionDB from './database/index'

import routes from './router/routes'


class App {
    public express: express.Application

    public constructor() {
        this.express = express()
        this.middlewares()
        this.routes()
        this.database()
    }

    private middlewares(): void {
        this.express.use(express.json())
        this.express.use(cors())
    }

    private database(): void {
        connectionDB.connectionPostgres()
    }

    private routes(): void {
        this.express.use(routes)
    }
}

export default new App().express





