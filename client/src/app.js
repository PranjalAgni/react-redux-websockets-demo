import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './components/router/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();
const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(app, document.getElementById('root'));
