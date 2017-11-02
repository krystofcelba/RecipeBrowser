import { testSaga } from 'redux-saga-test-plan';
import { Navigation } from 'react-native-navigation';

import uiSaga, { handleAddRecipeFormSubmission } from '../uiSaga';
import { SUBMIT_ADD_RECIPE_FORM } from 'src/redux/reducers/ui';
import * as API from 'src/services/api';
import { addRecipeFormValues } from 'src/__mockData__';
import { extractMimeType } from 'src/utils';

describe('uiSaga', () => {
  it('should takeEvery SUBMIT_ADD_RECIPE_FORM', () => {
    testSaga(uiSaga)
      .next()
      .takeEveryEffect(SUBMIT_ADD_RECIPE_FORM, handleAddRecipeFormSubmission);
  });

  it('should handle add recipe form submission', () => {
    testSaga(handleAddRecipeFormSubmission, { type: SUBMIT_ADD_RECIPE_FORM, recipe: addRecipeFormValues })
      .next()
      .call(extractMimeType, addRecipeFormValues.image)
      .next('image/jpeg')
      .call(API.post, '/recipes', {
        ...addRecipeFormValues,
        image: { uri: addRecipeFormValues.image, type: 'image/jpeg' },
      })
      .next({ ok: true, data: { success: true } })
      .call(Navigation.dismissModal)
      .next()
      .isDone();
  });

  it('should handle add recipe form submission with empty image', () => {
    const recipe = { ...addRecipeFormValues, image: undefined };
    testSaga(handleAddRecipeFormSubmission, {
      type: SUBMIT_ADD_RECIPE_FORM,
      recipe,
    })
      .next()
      .call(API.post, '/recipes', {
        ...addRecipeFormValues,
        image: { uri: '', type: '' },
      })
      .next({ ok: true, data: { success: true } })
      .call(Navigation.dismissModal)
      .next()
      .isDone();
  });
});
