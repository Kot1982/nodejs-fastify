const items = require('../Items');

function itemRoutes(fastify, options, done) {
  //   Get all items
  fastify.get('/items', async (req, reply) => {
    //   reply.send({ test: 'Hello world' });
    reply.send(items);
  });

  // Get single item
  fastify.get('/items/:id', async (req, reply) => {
    const { id } = req.params;
    const item = items.find((item) => item.id === id);
    reply.send(item);
  });

  done();
}

module.exports = itemRoutes;
