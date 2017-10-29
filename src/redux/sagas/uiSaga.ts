import { takeEvery, call, put } from 'redux-saga/effects';

import { ADD_RECIPE_FORM_ADD_INGREDIENT, actionCreators } from '../reducers/ui';

export function generateId() {
  const date = new Date();
  return date.valueOf();
}

export function* addNewIngredientToNewRecipeForm() {
  const id: number = yield call(generateId);
  yield put(actionCreators.addRecipeFormUpdateIngredient({ id, name: '', amount: '0', unit: '' }));
}

export default function* root() {
  yield takeEvery(ADD_RECIPE_FORM_ADD_INGREDIENT, addNewIngredientToNewRecipeForm);
}
