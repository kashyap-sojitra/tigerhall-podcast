import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./utils/theme.ts";
import ApolloProviderWrapper from "./apollo/clientProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ApolloProviderWrapper>
        <App />
      </ApolloProviderWrapper>
    </ChakraProvider>
  </React.StrictMode>
);
