import { applyMiddleware, createStore, compose } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';

import rootReducer from './reducers';

const configureStore = () => {
  const composeEnhancers = __DEV__
    ? composeWithDevTools({
        realtime: true,
        hostname: 'localhost',
        port: 8000,
      })
    : compose;

  const store = createStore(rootReducer, composeEnhancers());

  return store;
};

export default configureStore;
