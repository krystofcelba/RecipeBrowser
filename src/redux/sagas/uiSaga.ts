import { takeEvery, call } from 'redux-saga/effects';
import { Navigation } from 'react-native-navigation';

import { SUBMIT_ADD_RECIPE_FORM } from '../reducers/ui';
import * as API from '../../services/api';
import { extractMimeType } from 'src/utils';

export function* handleAddRecipeFormSubmission(action) {
  const { recipe } = action;
  const imageUri = recipe.image;
  const image =
    imageUri && imageUri.length
      ? { uri: imageUri, type: yield call(extractMimeType, imageUri) }
      : { uri: '', type: '' };
  const resp = yield call(API.post, '/recipes', { ...recipe, image });
  console.log(resp);
  if (resp.ok) {
    yield call(Navigation.dismissModal);
  }
}

export default function* root() {
  yield takeEvery(SUBMIT_ADD_RECIPE_FORM, handleAddRecipeFormSubmission);
}
