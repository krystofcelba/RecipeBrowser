import { testSaga, expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';

import uiSaga, {
  generateId,
  addNewIngredientToAddRecipeForm,
  addNewSeasoningToAddRecipeForm,
  addNewStepToAddRecipeForm,
} from '../uiSaga';
import {
  actionCreators,
  UPDATE_INGREDIENT_ADD_RECIPE_FORM,
  UPDATE_SEASONING_ADD_RECIPE_FORM,
  UPDATE_STEP_ADD_RECIPE_FORM,
} from 'src/redux/reducers/ui';
import reducers from 'src/redux/reducers';

const generatedId = 10001010;

/*************** unit tests ***************/

it('should call generateId function and put update ingredient action', () => {
  testSaga(addNewIngredientToAddRecipeForm, '')
    .next()
    .call(generateId)
    .next(generatedId)
    .put({ type: UPDATE_INGREDIENT_ADD_RECIPE_FORM, ingredient: { id: generatedId, name: '', amount: '0', unit: '' } })
    .next()
    .isDone();
});

it('should call generateId function and put update seasoning action', () => {
  testSaga(addNewSeasoningToAddRecipeForm, '')
    .next()
    .call(generateId)
    .next(generatedId)
    .put({ type: UPDATE_SEASONING_ADD_RECIPE_FORM, seasoning: { id: generatedId, seasoning: '' } })
    .next()
    .isDone();
});

it('should call generateId function and put update step action', () => {
  testSaga(addNewStepToAddRecipeForm, '')
    .next()
    .call(generateId)
    .next(generatedId)
    .put({ type: UPDATE_STEP_ADD_RECIPE_FORM, step: { id: generatedId, step: '' } })
    .next()
    .isDone();
});
