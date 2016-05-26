import Server from './server/index';

import comments from './server/routes/comment-routes';
const createServer = () => new Server();

const prepare = server => {

  server.addController('/api', comments);

  return server.getExpressApp;

};

prepare(createServer()).listen('3000', err => {
  if (err) {
    console.err(err);
  } else {
    console.info('listen:');
  }
});
