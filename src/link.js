import { HttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';
import { GRAPHQL_API } from './constants';

export const link = new HttpLink({
  uri: GRAPHQL_API,
  credentials: 'same-origin',
  fetch
});
