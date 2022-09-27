import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';

import { MovieProvider } from './context/MovieContext';
import client from './apolloSetup';

import App from './App';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <MovieProvider>
        <App />
      </MovieProvider>
    </ApolloProvider>
  </React.StrictMode>,
);
