import { takeLatest, call, put } from 'redux-saga/effects';
import { testSaga, expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';

import recipesSaga, { fetchAllRecipes } from '../recipesSaga';
import * as API from 'src/services/api';
import { actionCreators, concatIngredientsNames, FETCH_RECIPES_SUCCESS } from 'src/redux/reducers/recipes';
import reducers from 'src/redux/reducers';

const mockedRecipes = require('src/__mockData__/recipes.json');

/*************** unit tests ***************/

it('should call fetchRecipes api method and dispatch success action with array of recipes', () => {
  testSaga(fetchAllRecipes, '')
    .next()
    .call(API.get, '/recipes')
    .next({ ok: true, data: mockedRecipes })
    .put({ type: FETCH_RECIPES_SUCCESS, recipes: mockedRecipes })
    .next()
    .isDone();
});

/************ integration tests ************/

it('should start fetchAllRecipes saga on FETCH_RECIPES action dispatched and put recipes on success', async () => {
  const recipe = mockedRecipes[0];
  API.apiClient.get = async (): Promise<any> => {
    return {
      data: [recipe],
      status: 200,
      statusText: 'OK',
    };
  };
  const { storeState } = await expectSaga(recipesSaga)
    .withReducer(reducers)
    .call(API.get, '/recipes')
    .dispatch(actionCreators.fetchRecipes())
    .put({ type: FETCH_RECIPES_SUCCESS, recipes: [recipe] })
    .run();

  const result = {
    recipesById: [recipe.id],
    recipes: {
      [recipe.id]: {
        ...recipe,
        ingredientsNames: concatIngredientsNames(recipe),
      },
    },
    loading: false,
  };
  expect(storeState.recipes).toEqual(result);
});
