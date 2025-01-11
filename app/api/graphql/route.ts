import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';

const data = [
  {
    email: "shaka@gmail.com",
    password: "11111111111",
  },
  {
    email: "bilal@gmail.com",
    password: "000000000000",
  },
];

const gql = String.raw;

const typeDefs = gql`
  type Query {
    products: [Product],
    username: String
  }

  type Product {
    email: String
    password: String
  }
`;

const resolvers = {
  Query: {
    products: () => {
      return data; // Matches the query name in typeDefs
    },
    username: () => {
      return "username"; // Matches the query name in typeDefs
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = startServerAndCreateNextHandler(server);
export {handler as GET , handler as POST}