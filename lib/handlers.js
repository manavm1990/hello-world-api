const handlers = {
  hello: {
    get: () => {
      console.log('received get request on hello');
    },
  },
};

module.exports = handlers;
