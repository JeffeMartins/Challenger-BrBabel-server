// require('dotenv').config({path: __dirname + '/./../.env'})

import express from 'express'
import cors from 'cors'

import routes from './router/routes'


class App {
    public express: express.Application

    public constructor() {
        this.express = express()
        this.middlewares()
        this.routes()
    }

    private middlewares(): void {
        this.express.use(express.json())
        this.express.use(cors())
    }

    // private database(): void {
    //
    // }

    private routes(): void {

        this.express.use(routes)
    }
}

export default new App().express


// const routes = require('./router/routes');
// var bodyParser = require('body-parser');
// const app = express();
//
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json())
// app.use(cors());
// // app.use(express.json());
//
// const port = process.env["SERVER_PORT"] || 8080;
// app.use(routes);
//
// app.listen(port)


