import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

const app = express();

const server = new ApolloServer({
  typeDefs: gql`
  type Client {
      id: ID!
      name: String!
    }

    type Demand{
      id: ID!
      name: String!
      client: Client!
      deadLine: String
    }

    type Query {
      demands: [Demand]!
    }
  `,

  resolvers: {
    Query: {
      demands: () => [],
    }
  }
});

server.applyMiddleware({
  app,
  cors: {
    origin: 'http://localhost:3000',
  }
})

// server.get('/status', (_, response) => {
//   response.send({
//     status: 'Okay!',
//   });
// });



// server
//   .options('/authenticate', enableCors)
//   .post('/authenticate', enableCors, express.json(), (request, response) => {
//   console.log('Email: ', request.body.email, 'Password: ', request.body.password);
//   response.send({
//     Okay: true, 
//   });
// });

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOSTNAME = process.env.PORT || '127.0.0.1';
app.listen(PORT, HOSTNAME, () => {
  console.log(`Server is listening at http://127.0.0.1:${PORT}`);
})