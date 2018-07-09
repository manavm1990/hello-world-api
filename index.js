const http = require('http');

const port = 3000;

const router = require('./lib/router.js');

/**
 * Start the server, and
 * simply pass the request and response to 'router.'
 * Process the returned spit.
 */
const server = http.createServer((req, resp) => {
  router.route(req, (statusCode = 200, respPayload = {}) => {
    // Convert payload to string
    const plString = JSON.stringify(respPayload);

    resp.writeHead(statusCode);
    resp.end(plString);
  });
});

server.listen(port, () => {
  console.log(`Listening on port: ${port}.`);
});
