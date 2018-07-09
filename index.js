const http = require('http');
const url = require('url');

const port = 3000;

const router = require('./lib/router.js');

const server = http.createServer((req, resp) => {
  // Parse the URL using the querystring module itself.
  const parsedURL = url.parse(req.url, true);

  const trimmedPath = parsedURL.pathname.replace(/^\/+|\/+$/g, '').toLowerCase();

  const httpMethod = req.method.toLowerCase();

  router.route(trimmedPath, httpMethod);
});

server.listen(port, () => {
  console.log(`Listening on port: ${port}.`);
});
