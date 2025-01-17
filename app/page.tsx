"use client"
import React from 'react';
import { ApolloProvider, gql, useQuery } from '@apollo/client';
import client from '@/app/lib/appoloClient';

// Define the TypeScript types for the GraphQL query response
interface Product {
  email: string;
  password: string;
}

interface GetProductsData {
  products: Product[];
}

// Define the GraphQL query
const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      email
      password
    }
  }
`;

const Home: React.FC = () => {
  const { loading, error, data } = useQuery<GetProductsData>(GET_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {data?.products.map((product, index) => (
          <li key={index}>
            Email: {product.email} - Password: {product.password}
          </li>
        ))}
      </ul>
    </div>
  );
};

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <Home />
  </ApolloProvider>
);

export default App;
