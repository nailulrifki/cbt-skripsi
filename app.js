import 'dotenv/config';
import Server from './src/server.js';

const server = new Server(process.env.PORT);
console.log(process.env.NODE_ENV)
server.listen();
