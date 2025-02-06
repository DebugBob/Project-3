import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import routes from './routes/router.js';
import db from './config/mongoConnection.js'

import logMethod from './routes/middleware/logMethod.js';

import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { typeDefs, resolvers } from './schemas/index.js'

import { authenticateToken } from './utils/auth.js';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startApolloServer = async () => {
  
  const app = express();
  const PORT = 3001;

  await server.start();
  await db();

  const __filename = fileURLToPath(import.meta.url); //Give the filepath to this file (server.js)
  const __dirname = path.dirname(__filename); // Gives the filepath to this folder (will be dist at runtime)

  console.log(__filename)
  console.log(__dirname)

  app.use(logMethod)
  app.use('/', routes)
  app.use('/graphql', expressMiddleware(server as any,
    {
      context: authenticateToken as any
    }
  ));
  
  // db.on("error", console.error.bind(console, "MongoDB connection error:"));

  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
  });
}

startApolloServer();