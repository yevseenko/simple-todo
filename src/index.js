import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './stylesheets/index.css';

import store from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

store.dispatch({ type: 'LOAD_DATA'});