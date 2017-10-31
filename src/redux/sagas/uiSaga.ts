import { takeEvery, takeLatest, call, put, select } from 'redux-saga/effects';
import { Navigation } from 'react-native-navigation';
import ImagePicker from 'react-native-image-crop-picker';

import { imagePickerImageSize } from '../../assets/constants';

import {
  actionCreators,
  NewRecipe,
  ADD_INGREDIENT_ADD_RECIPE_FORM,
  ADD_SEASONING_ADD_RECIPE_FORM,
  ADD_STEP_ADD_RECIPE_FORM,
  OPEN_IMAGE_PICKER_ADD_RECIPE_FORM,
  SUBMIT_ADD_RECIPE_FORM,
} from '../reducers/ui';
import { getAddRecipeFormState } from '../selectors';
import * as API from '../../services/api';

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

export function* addNewStepToAddRecipeForm() {
  const id: number = yield call(generateId);
  yield put(actionCreators.updateStepInAddRecipeForm({ id, step: '' }));
}

export function* openImagePicker() {
  try {
    const image = yield call(ImagePicker.openPicker, {
      ...imagePickerImageSize,
      cropping: true,
      includeBase64: true,
    });

    yield put(actionCreators.updateImageInAddRecipeForm(image.data, image.mime));
  } catch (e) {
    console.log(e);
  }
}

export function* submitAddRecipeForm() {
  const newRecipe: NewRecipe = yield select(getAddRecipeFormState);
  const { name, description, image, ingredients, seasonings, steps } = newRecipe;
  const resp = yield call(API.postRecipe, {
    name,
    description,
    image,
    ingredients: Object.keys(ingredients).map(id => ingredients[id]) as [API.Ingredient],
    seasonings: Object.keys(seasonings).map(id => seasonings[id].seasoning) as [string],
    steps: Object.keys(steps).map(id => steps[id].step) as [string],
  });
  console.log(resp);
  if (resp.ok) {
    yield put(actionCreators.resetAddRecipeForm());
    yield call(Navigation.dismissModal);
  }
}

export default function* root() {
  yield takeEvery(ADD_INGREDIENT_ADD_RECIPE_FORM, addNewIngredientToAddRecipeForm);
  yield takeEvery(ADD_SEASONING_ADD_RECIPE_FORM, addNewSeasoningToAddRecipeForm);
  yield takeEvery(ADD_STEP_ADD_RECIPE_FORM, addNewStepToAddRecipeForm);
  yield takeLatest(OPEN_IMAGE_PICKER_ADD_RECIPE_FORM, openImagePicker);
  yield takeEvery(SUBMIT_ADD_RECIPE_FORM, submitAddRecipeForm);
}
