import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { gql } from 'graphql-tag';

const data = [
  {
    Name: "bike",
    Password: "446545464",
    Id: 1,
  },
  {
    Name: "cycle",
    Password: "462121310",
    Id: 2,
  },
  {
    Name: "car",
    Password: "8848753484",
    Id: 3,
  },
];

const data2 = [
  {
    email: "bilal@2134",
    password: "481642110",
  },
  {
    email: "manidon@2134",
    password: "410000000",
  },
  {
    email: "shakal@2134",
    password: "89987888787",
  },
];

const typeDefs = gql`
  type Product {
    Name: String
    Password: String
    Id: Int
  }

  type Product2 {
    email: String
    password: String
  }

  type Query {
    productData: [Product]
    userData: [Product2]
  }

  type Mutation {
    takeData(item: String!): Int
  }
`;
type Item = String
const resolvers = {
  Query: {
    productData: () => data,
    userData: () => data2,
  },
  Mutation: {
    takeData: (_, { item }) => {
      console.log(item);
      return 10;
    },
  },
};

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler(server);
export { handler as GET, handler as POST };
