import { ApolloServer } from 'apollo-server';
import { typeDefs } from './graphql/typeDefs.js';
import { resolvers } from './graphql/resolvers.js';
import './db.js';

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers
  })

  const { url } = await server.listen()
  console.log('Server listening on', url)
}

startApolloServer()