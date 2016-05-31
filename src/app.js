import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import todo from './redux/reducers';
import { addTodo } from './redux/actions';
import App from './components/app';

let store = createStore(todo);
store.dispatch(addTodo('hello world'));
store.dispatch(addTodo('hello world'));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
