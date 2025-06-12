import { createRoot } from "react-dom/client";
import "./index.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter } from "react-router";
import App from "./App.tsx";
import { APOLLO_CLIENT_URI } from "./lib/constants.ts";

const client = new ApolloClient({
  uri: APOLLO_CLIENT_URI,
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
);
