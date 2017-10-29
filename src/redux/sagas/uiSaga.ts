import { takeEvery, call, put } from 'redux-saga/effects';

import { ADD_INGREDIENT_ADD_RECIPE_FORM, actionCreators } from '../reducers/ui';

export function generateId() {
  const date = new Date();
  return date.valueOf();
}

export function* addNewIngredientToAddRecipeForm() {
  const id: number = yield call(generateId);
  yield put(actionCreators.updateIngredientInAddRecipeForm({ id, name: '', amount: '0', unit: '' }));
}

export default function* root() {
  yield takeEvery(ADD_INGREDIENT_ADD_RECIPE_FORM, addNewIngredientToAddRecipeForm);
}
