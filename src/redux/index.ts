import { applyMiddleware, createStore, compose } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';
  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers = __DEV__
    ? composeWithDevTools({
        realtime: true,
        hostname: 'localhost',
        port: 8000,
      })
    : compose;

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
  );

  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
