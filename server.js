const fastify = require('fastify')({ logger: true });

fastify.register(require('fastify-swagger'), {
  exposeRoute: true,
  routePrefix: '/docs',
  swagger: {
    info: { title: 'fastify-api' },
  },
});

fastify.register(require('./routes/items'));

// const items = require('./Items');

// fastify.get('/items', async (req, reply) => {
//   //   reply.send({ test: 'Hello world' });
//   reply.send(items);
// });

// fastify.get('/items/:id', async (req, reply) => {
//   const { id } = req.params;
//   const item = items.find((item) => item.id === id);
//   reply.send(item);
// });

const start = async () => {
  try {
    await fastify.listen({ port: 5000 });
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
