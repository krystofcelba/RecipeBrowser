import { all, fork } from 'redux-saga/effects';

import recipesSaga from './recipesSaga';
import uiSaga from './uiSaga';

export default function* rootSaga() {
  yield all([fork(recipesSaga), fork(uiSaga)]);
}
