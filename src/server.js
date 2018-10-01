import React from 'react';
import { renderToString } from 'react-dom/server';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import express from 'express';
import App from './App';
import { link } from './link';

const server = express();
const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {

    // Apollo client initialization
    const client = new ApolloClient({
        ssrMode: true,
        link,
        cache: new InMemoryCache(),
    });

    const markup = renderToString(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>);

    res.send(
      `<!doctype html>
        <html lang="">
            <head>
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta charSet='utf-8' />
                <title>Isomorphic Exercise</title>
                <meta name="viewport" content="width=device-width, initial-scale=1">

                ${
                assets.client.css
                  ? `<link rel="stylesheet" href="${assets.client.css}">`
                  : ''
                }
                ${
                    process.env.NODE_ENV === 'production'
                    ? `<script src="${assets.client.js}" defer></script>`
                    : `<script src="${assets.client.js}" defer crossorigin></script>`
                }      
            </head>
            <body>
                <div id="root">${markup}</div>
                <!--window.__APOLLO_STATE__=${JSON.stringify(client.cache.extract())}-->
                <!--<script
                  charSet="UTF-8"
                  dangerouslySetInnerHTML={__html: ${JSON.stringify(client.cache.extract())}}
                  crossOrigin="anonymous"
                />-->
    
            </body>
        </html>`
    );
  });

export default server;