import { takeLatest, call, put } from 'redux-saga/effects';

import { FETCH_RECIPES, actionCreators } from '../reducers/recipes';
import * as API from '../../services/api';

export function* fetchAllRecipes() {
  const resp = yield call(API.fetchRecipes);
  if (resp.ok) {
    const recipes: [API.Recipe] = resp.data;
    yield put(actionCreators.fetchRecipesSuccess(recipes));
  }
}

export default function* root() {
  yield takeLatest(FETCH_RECIPES, fetchAllRecipes);
}
