import 'dotenv/config';import app from './app';import {database} from './database';
database.initialize().then(()=>{const server=app.listen(Number(process.env.SERVER_PORT || 3334));const close=()=>server.close(()=>database.destroy());process.once('SIGTERM',close);process.once('SIGINT',close);}).catch(()=>{console.error('Could not initialize database/server');process.exitCode=1;});
