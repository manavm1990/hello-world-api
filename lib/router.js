/**
 * Receives the trimmed path name and request method.
 *
 * It then calls the correct handler.
 */

const handlers = require('./handlers');

const router = {};

const routes = {
  hello: {
    get: handlers.hello.get,
  },
};

router.route = (path, meth) => {
  // Grab the handler function
  console.log(routes[path][meth]());
};

module.exports = router;
