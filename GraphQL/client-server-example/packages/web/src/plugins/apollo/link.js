import { ApolloLink } from 'apollo-link'
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';

const link = ApolloLink.from([
  onError((error) => {
    console.error('GraphQLError', error);
  }),

  setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
      }
    }
  }),

  createHttpLink  ({
    uri: 'http://127.0.0.1:8000/graphql',
  }),
]);

export default link;