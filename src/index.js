import 'dotenv/config';
import cors from 'cors';
import http from 'http';
import express from 'express';
import {
  ApolloServer,
} from 'apollo-server-express';
import schema from './schema';
import resolvers from './resolver';


console.log(`Starting app...`);

const app = express();

app.use(cors());

const server = new ApolloServer({
  introspection: true,
  playground: true,
  typeDefs: schema,
  resolvers,
  formatError: error => {
    // remove the internal sequelize error message
    // leave only the important validation error
    const message = error.message
      .replace('SequelizeValidationError: ', '')
      .replace('Validation error: ', '');

    return {
      ...error,
      message,
    };
  }
});

/*
context: async ({ req, connection }) => {
  if (connection) {
    return {
      models,
      loaders: {
        user: new DataLoader(keys =>
          loaders.user.batchUsers(keys, models),
        ),
      },
    };
  }

  if (req) {
    const me = await getMe(req);

    return {
      models,
      me,
      secret: process.env.SECRET,
      loaders: {
        user: new DataLoader(keys =>
          loaders.user.batchUsers(keys, models),
        ),
      },
    };
  }
},
});
*/

console.log("checking database...")
import * as db from 'database'
db.find({ name: 'report' },  (err, docs) => {
  // docs is an array containing documents Mars, Earth, Jupiter
  // If no document is found, docs is equal to []
  if (err) console.log("Error" + err);
  console.log(docs);
});


server.applyMiddleware({ app, path: '/graphql' });

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

const port = process.env.PORT || 3000;

httpServer.listen({ port }, () => {
  console.log(`Apollo Server on http://localhost:${port}/graphql`);
});
