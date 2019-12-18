const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./typedefs');
const { resolvers } = require('./resolvers');

const db = require('./db');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({}) => ({ database: db }),
});

db.initialize()
  .then(() => {
    server.listen({ port: 8000 }).then(async ({ url }) => console.log(`🚀  Server ready at ${url}`));
  })
  .catch(() => console.error('DATABASE initialization failed!'));
