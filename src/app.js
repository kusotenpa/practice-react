import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store';
import App from './components/app';
import * as actions from './actions';


let store = configureStore();
store.dispatch(actions.requestTodos());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
