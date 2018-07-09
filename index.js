const http = require('http');

// const host = '127.0.0.1';
const port = 3000;

// const handlers = req('./lib/handlers.js');
const url = require('url');

// Request router
// const router = {
//   hello: handlers.hello,
// };

const server = http.createServer((req, resp) => {
  // Parse the URL using the querystring module itself.
  const parsedURL = url.parse(req.url, true);

  const trimmedPath = parsedURL.pathname.replace(/^\/+|\/+$/g, '');

  const httpMethod = req.method.toUpperCase();

  console.log(trimmedPath, httpMethod);
});

server.listen(port, () => {
  console.log(`Listening on port: ${port}.`);
});
