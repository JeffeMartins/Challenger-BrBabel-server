require('dotenv').config({path: __dirname + '/./../.env'})
import app from './app';

const port = process.env.SERVER_PORT
console.log(`>>>>>>>standard server port:${port}<<<<<<<<<`)


app.listen(port);