import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import App from './App';

import { BrowserRouter} from 'react-router-dom';

import { StoreProvider } from 'easy-peasy';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

