const mockedDevCompose = jest.fn();
jest.mock('remote-redux-devtools', () => ({
  composeWithDevTools: () => mockedDevCompose,
}));

jest.mock('redux', () => ({
  applyMiddleware: () => {},
  createStore: () => {},
  combineReducers: () => {},
  compose: () => {},
}));

jest.mock('redux-saga', () => () => ({
  run: () => {},
}));

import configureStore from '../';

describe('configureStore', () => {
  it('should create store with composeWithDevTools in DEV env', () => {
    configureStore();
    expect(mockedDevCompose).toHaveBeenCalledTimes(1);
  });

  it('should not create store with composeWithDevTools in non DEV env', () => {
    global.__DEV__ = false;
    configureStore();
    expect(mockedDevCompose).toHaveBeenCalledTimes(1);
  });

  afterAll(() => {
    global.__DEV__ = true;
    jest.unmock('redux');
    jest.unmock('remote-redux-devtools');
    jest.unmock('redux-saga');
  });
});
