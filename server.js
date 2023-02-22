const fastify = require('fastify')({ logger: true });

fastify.get('/items', async (req, reply) => {
  reply.send({ test: 'Hello world' });
});

const start = async () => {
  try {
    await fastify.listen({ port: 5000 });
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
