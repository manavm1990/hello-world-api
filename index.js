const http = require('http');

const port = 3000;

const router = require('./lib/router.js');

/**
 * Start the server, and
 * simply pass the request and response to 'router.'
 * Process the returned spit.
 */
const server = http.createServer((req, resp) => {
  router.route(req, (statusCode, respPayload) => {
    const verifiedStatusCode = typeof (statusCode) === 'number' ? statusCode : 200;

    // Convert payload to string
    const plString = JSON.stringify(respPayload);

    resp.writeHead(verifiedStatusCode);
    resp.end(plString);
  });
});

server.listen(port, () => {
  console.log(`Listening on port: ${port}.`);
});
