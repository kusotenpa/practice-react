import express from 'express';
import bodyParser from 'body-parser';

export default class Server {

  constructor() {
    const server = express();

    server.disable('x-powered-by');
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use('/', express.static('dist'));

    this.server = server;
  }

  addHandler(handler) {
    handler.apply(this.getExpressApp);
  }

  addController(endpoint, controller) {
    const server = this.getExpressApp;
    server.use(endpoint, controller);
  }

  get getExpressApp() {
    return this.server;
  }
}
