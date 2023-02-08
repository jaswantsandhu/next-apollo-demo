import React from "react";
import NavBar from "./NavBar";
import "bootstrap/dist/css/bootstrap.css";
import "../lib/apollo";
import { ApolloProvider } from "@apollo/client";
import { client } from "../lib/apollo";

export const Base = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      <div className="application-container">
        <NavBar />
        <div className="container">{children}</div>
      </div>
    </ApolloProvider>
  );
};
