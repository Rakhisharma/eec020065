const { default: getHealth } = require('./get');

function attachRoute(server) {
  server.route({
    method: 'GET',
    path: '/',
    handler: getHealth,
  });
}

exports.default = attachRoute;
