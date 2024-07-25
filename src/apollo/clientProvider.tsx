import { ApolloProvider } from "@apollo/client";
import React from "react";
import client from "./client";

interface ApolloProviderProps {
  children: React.ReactNode;
}

const ApolloProviderWrapper: React.FC<ApolloProviderProps> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloProviderWrapper;
