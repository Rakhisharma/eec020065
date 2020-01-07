const products = require('./../../__fixtures__/products.json');
const { default: random } = require('../../utils/random');
const { default: delay } = require('../../utils/delay');

const buildProduct = product => ({
  ...product,
  staged: undefined,
  current: undefined,
  ...product.current,
});
const buildResponse = ({ products, offset, limit }) => ({
  count: products.length,
  offset: offset || 0,
  limit: limit || undefined,
  results: products,
});
const parseQueryStringInteger = string => {
  const parsedToInt = Number.parseInt(string);

  return Number.isInteger(parsedToInt) ? parsedToInt : undefined;
};

exports.default = async req => {
  const { q } = req.params;
  const limit = parseQueryStringInteger(req.query.limit);
  const offset = parseQueryStringInteger(req.query.offset);

  if (q) {
    const productsByName = products.filter(product =>
      product.name.toLowerCase().includes(q.toLowerCase())
    );
    const pagedProducts =
      limit || offset
        ? productsByName.slice(offset, limit ? offset + limit : undefined)
        : productsByName;
    const responseProducts = buildResponse({
      products: pagedProducts.map(buildProduct),
      offset,
      limit,
    });

    await delay(random(150, 2500));
    return responseProducts;
  }

  const pagedProducts =
    limit || offset
      ? products.slice(offset, limit ? offset + limit : undefined)
      : products;
  const responseProducts = buildResponse({
    products: pagedProducts.map(buildProduct),
    offset,
    limit,
  });

  return responseProducts;
};
