import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store';
import { addTodo } from './actions';
import App from './components/app';

let store = configureStore();
store.dispatch(addTodo('hello world'));
store.dispatch(addTodo('hello world'));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
