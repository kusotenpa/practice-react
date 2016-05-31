import { take, put, call, fork, select } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';

import { requestTodos } from '../actions';

function* startUp() {
  return fetch('/api/getComments')
    .then(res => res.json())
    .then(json => {
      console.log(json);
    });
}

export default function* rootSaga() {
  yield fork(startUp);
}
