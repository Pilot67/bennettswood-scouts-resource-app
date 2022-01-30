import React from "react";
import GlobalStyle from "./GlobalStyles";
import { PageContainer } from "./App.Styled";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client/core";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home";
import Joeys from "./Pages/Joeys";
import Cubs from "./Pages/Cubs";
import Scouts from "./Pages/Scouts";
import Venturers from "./Pages/Venturers";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

function App() {
  return (
    <Router>
      <GlobalStyle />
      <PageContainer>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Joeys" element={<Joeys />} />
          <Route path="/Cubs" element={<Cubs />} />
          <Route path="/Scouts" element={<Scouts />} />
          <Route path="/Venturers" element={<Venturers />} />
        </Routes>
      </PageContainer>
    </Router>
  );
}

export default App;
