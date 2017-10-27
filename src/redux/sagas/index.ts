import { all, fork } from 'redux-saga/effects';

import recipesSaga from './recipesSaga';

export default function* rootSaga() {
  yield all([fork(recipesSaga)]);
}
