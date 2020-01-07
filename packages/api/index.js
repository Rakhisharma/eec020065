require('dotenv').config();

const Hapi = require('hapi');
const hapiCors = require('hapi-cors');
const { attachRoutes } = require('./routes');

const server = Hapi.Server({
  host: process.env.HTTP_HOST,
  port: process.env.HTTP_PORT,
});

(async () => {
  try {
    await server.register({
      plugin: hapiCors,
      options: {
        origins: ['*'],
      },
    });

    attachRoutes(server);

    await server.start();

    console.warn(`Products HTTP/API running at: ${server.info.uri}`);
    console.warn(`Show all products at: ${server.info.uri}/products`);
    console.warn(
      `Search for products at: ${
        server.info.uri
      }/search/Tommay?offset=2&limit=1`
    );
    console.warn(
      `Show one product at: ${server.info.uri}/products/O9dDM6tp4LHWbdN`
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
