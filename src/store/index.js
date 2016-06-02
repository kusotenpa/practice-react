import { createStore, applyMiddleware } from 'redux';
import 'babel-polyfill';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import reducer from '../reducers';
import rootSaga from '../sagas';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducer,
    applyMiddleware(
      sagaMiddleware,
      logger()
    )
  );

  sagaMiddleware.run(rootSaga);
  return store;
}
