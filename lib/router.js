/**
 * Receives the trimmed path name and request method.
 *
 * It then calls the correct handler.
 *
 * It returns the response back for processing/display.
 */
const url = require('url');

const handlers = require('./handlers');

const router = {};

/**
 * Creates a data object from the request.
 * This is simplified/hard-coded for just what is needed for this simple app.
 * @param {Request} req
 * @returns {Object}
 */
function getData(req) {
  const dataObj = {};
  const parsedURL = url.parse(req.url, true);

  dataObj.path = parsedURL.pathname.replace(/^\/+|\/+$/g, '').toLowerCase();

  dataObj.method = req.method.toLowerCase();

  return dataObj;
}

router.route = (req, cb) => {
  // Get a data object.
  const reqData = getData(req);

  // Grab the handler function
  cb(200, handlers[reqData.path][reqData.method]);
};

module.exports = router;
