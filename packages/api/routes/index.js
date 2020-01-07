const { default: attachHealthRoutes } = require('./health');
const { default: attachProductsRoutes } = require('./products');
const { default: attachSearchRoutes } = require('./search');

function attachRoutes(server) {
  attachHealthRoutes(server);
  attachProductsRoutes(server);
  attachSearchRoutes(server);
}

exports.attachRoutes = attachRoutes;
