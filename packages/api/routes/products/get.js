const Boom = require('boom');
const products = require('./../../__fixtures__/products.json');
const { default: random } = require('../../utils/random');

exports.default = req => {
  const { id } = req.params;
  const shouldFail = random(0, 10) <= 2;

  if (id) {
    const productById = products.find(product => product.id === id);

    if (shouldFail) {
      throw Boom.serverUnavailable();
    }
    return productById || {};
  }

  return products;
};
