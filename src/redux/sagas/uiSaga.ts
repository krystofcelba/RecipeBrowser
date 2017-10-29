import { takeEvery, call, put } from 'redux-saga/effects';

import { actionCreators, ADD_INGREDIENT_ADD_RECIPE_FORM, ADD_SEASONING_ADD_RECIPE_FORM } from '../reducers/ui';

export function generateId() {
  const date = new Date();
  return date.valueOf();
}

export function* addNewIngredientToAddRecipeForm() {
  const id: number = yield call(generateId);
  yield put(actionCreators.updateIngredientInAddRecipeForm({ id, name: '', amount: '0', unit: '' }));
}

export function* addNewSeasoningToAddRecipeForm() {
  const id: number = yield call(generateId);
  yield put(actionCreators.updateSeasoningInAddRecipeForm({ id, seasoning: '' }));
}

export default function* root() {
  yield takeEvery(ADD_INGREDIENT_ADD_RECIPE_FORM, addNewIngredientToAddRecipeForm);
  yield takeEvery(ADD_SEASONING_ADD_RECIPE_FORM, addNewSeasoningToAddRecipeForm);
}
