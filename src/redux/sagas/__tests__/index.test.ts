import { testSaga } from 'redux-saga-test-plan';
import { all, fork } from 'redux-saga/effects';

import rootSaga from '../';
import recipesSaga from '../recipesSaga';
import uiSaga from '../uiSaga';

describe('root saga', () => {
  it('should start all sagas as expected', () => {
    testSaga(rootSaga)
      .next()
      .all([fork(recipesSaga), fork(uiSaga)])
      .next()
      .isDone();
  });
});
