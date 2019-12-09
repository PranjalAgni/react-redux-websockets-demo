import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();
const app = (
  <Provider store={store}>
    <Button />
  </Provider>
);
ReactDOM.render(app, document.getElementById('root'));
