import { testSaga, expectSaga } from 'redux-saga-test-plan';
import { Navigation } from 'react-native-navigation';
import ImagePicker from 'react-native-image-crop-picker';

import uiSaga, {
  generateId,
  addNewIngredientToAddRecipeForm,
  addNewSeasoningToAddRecipeForm,
  addNewStepToAddRecipeForm,
  openImagePicker,
  submitAddRecipeForm,
} from '../uiSaga';
import {
  actionCreators,
  UPDATE_INGREDIENT_ADD_RECIPE_FORM,
  UPDATE_SEASONING_ADD_RECIPE_FORM,
  UPDATE_STEP_ADD_RECIPE_FORM,
  UPDATE_IMAGE_ADD_RECIPE_FORM,
  RESET_ADD_RECIPE_FORM,
} from 'src/redux/reducers/ui';
import reducers from 'src/redux/reducers';
import { getAddRecipeFormState } from '../../selectors';
import * as API from '../../../services/api';
import { imagePickerImageSize } from '../../../assets/constants';

const generatedId = 10001010;

const RealDate = Date;

function mockDate(isoDate) {
  global.Date = class extends RealDate {
    constructor() {
      super();
      return new RealDate(isoDate);
    }
  };
}

/*************** unit tests ***************/

describe('generateId', () => {
  afterEach(() => {
    global.Date = RealDate;
  });

  it('should return timestamp', () => {
    mockDate('2017-11-25T12:34:56z');
    expect(generateId()).toEqual(1511613296000);
  });
});

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

it('should open image picker', () => {
  const image = { data: 'xxxxxxx', mime: 'image/jpeg' };
  testSaga(openImagePicker)
    .next()
    .call(ImagePicker.openPicker, {
      ...imagePickerImageSize,
      cropping: true,
      includeBase64: true,
    })
    .next(image)
    .put({ type: UPDATE_IMAGE_ADD_RECIPE_FORM, ...image })
    .next()
    .isDone();
});

it('should make Recipe from NewRecipe and post it to server, then put reset form action and call modal dismiss', () => {
  const state = {
    ui: {
      addRecipeForm: {
        newRecipe: {
          name: 'Recipe 1',
          description: 'desc',
          image: { type: 'image/jpeg', data: 'xxxxxx' },
          ingredients: { 100: { id: 100, name: 'test', amount: '10', unit: 'kg' } },
          seasonings: { 12: { id: 12, seasoning: 'red powder' } },
          steps: { 15: { id: 15, step: 'Cook it!' } },
        },
      },
    },
  };
  testSaga(submitAddRecipeForm, '')
    .next()
    .select(getAddRecipeFormState)
    .next(state.ui.addRecipeForm.newRecipe)
    .call(API.post, '/recipes', {
      name: 'Recipe 1',
      description: 'desc',
      image: { type: 'image/jpeg', data: 'xxxxxx' },
      ingredients: [{ id: 100, name: 'test', amount: '10', unit: 'kg' }],
      seasonings: ['red powder'],
      steps: ['Cook it!'],
    })
    .next({ ok: true, data: { success: true } })
    .put({ type: RESET_ADD_RECIPE_FORM })
    .next()
    .call(Navigation.dismissModal)
    .next()
    .isDone();
});

/************ integration tests ************/

describe('ui saga', () => {
  afterEach(() => {
    global.Date = RealDate;
  });

  it('should start addNewIngredientToAddRecipeForm saga on ADD_INGREDIENT_ADD_RECIPE_FORM action dispatched and put new igredient with unique id', async () => {
    mockDate('2017-11-25T12:34:56z');
    const { storeState } = await expectSaga(uiSaga)
      .withReducer(reducers)
      .dispatch(actionCreators.addIngredientToAddRecipeForm())
      .put({
        type: UPDATE_INGREDIENT_ADD_RECIPE_FORM,
        ingredient: { id: 1511613296000, name: '', amount: '0', unit: '' },
      })
      .run();

    const result = {
      name: '',
      description: '',
      image: undefined,
      ingredients: { 1511613296000: { id: 1511613296000, name: '', amount: '0', unit: '' } },
      seasonings: {},
      steps: {},
    };

    expect(storeState.ui.addRecipeForm.newRecipe).toEqual(result);
  });
});
