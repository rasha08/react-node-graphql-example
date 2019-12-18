import React, { ComponentProps, FC } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: process.env.REACT_APP_SERVER_URL,
});

export const ApolloContextProvider = ({ children }: ComponentProps<FC>): JSX.Element => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
