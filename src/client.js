import React from 'react';
import { hydrate } from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import App from './App';
import { link } from './link';
import './App.css';

// Apollo client initialization
const client = new ApolloClient({
    ssrMode: true,
    link,
    cache: new InMemoryCache(),
});

hydrate(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
    , document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}