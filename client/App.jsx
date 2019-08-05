import React from 'react';
import './StyleSheets/App.scss';
import { RestLink } from 'apollo-link-rest';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import Header from './Components/Header';
import HistoryDisplay from './Components/HistoryDisplay';
import QueriesContainer from './Containers/QueriesContainer';
import { StateProvider, useStateValue } from './Context';
// using a proxy to get around CORS. We do not need a server.
const proxy = Number(process.env.IS_DEV) === 1 ? 'https://cors-anywhere.herokuapp.com/' : '';


const App = () => {
  const [{ endpoint }] = useStateValue();
  const restLink = new RestLink({
    // might be able to use custom fetch here for error checking?
    uri: proxy + endpoint,
    fetchOptions: {
      mode: 'no-cors',
    },
    headers: {
      'Content-Type': 'application/json',
      // 'Access-Control-Allow-Origin': '*',
    },
    // credentials: 'include',
  });

  const client = new ApolloClient({
    link: restLink,
    cache: new InMemoryCache(),

  });


  return (
    <section id="app">
      <ApolloProvider client={client}>
        <Header />
        <HistoryDisplay />
        <QueriesContainer />
      </ApolloProvider>
    </section>
  );
};

const statefulApp = () => (
  <StateProvider>
    <App />
  </StateProvider>
);

export default statefulApp;
