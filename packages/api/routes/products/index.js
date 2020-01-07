const { default: getProduct } = require('./get');

function attachRoute(server) {
  server.route({
    method: 'GET',
    path: '/products/{id?}',
    handler: getProduct,
  });
}

exports.default = attachRoute;
