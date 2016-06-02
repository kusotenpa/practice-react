import { take, put, call, fork, select } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';

import * as actions from '../actions';

function fetchTodosApi() {
  return fetch('/api/getComments')
    .then(res => res.json())
}

function* fetchTodos() {
  yield take(actions.REQUEST_TODOS);
  const todos = yield call(fetchTodosApi);
  yield todos.map(function* (t) {
    yield put(actions.addTodo(t));
  });
}

export default function* rootSaga() {
  yield fork(fetchTodos);
}
