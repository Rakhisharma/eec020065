const { default: getProduct } = require('./get');

function attachRoute(server) {
  server.route({
    method: 'GET',
    path: '/search/{q?}',
    handler: getProduct,
  });
}

exports.default = attachRoute;
