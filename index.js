const http = require('http');

const port = 3000;

const router = require('./lib/router.js');

/**
 * Start the server, and
 * simply pass the request and response to 'router.'
 */
const server = http.createServer((req, resp) => {
  router.route(req, resp);
});

server.listen(port, () => {
  console.log(`Listening on port: ${port}.`);
});
