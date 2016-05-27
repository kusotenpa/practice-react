import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import CommentBox from './components/commentBox';
import todo from './redux/reducers';
import { addTodo } from './redux/actions';
import App from './components/app';

// render(
//   <CommentBox getUrl="/api/getComments" postUrl="/api/addComment" pollInterval={20000} />,
//   document.getElementById('app')
// );


let store = createStore(todo);
store.dispatch(addTodo('hello world'));
store.dispatch(addTodo('hello world'));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
