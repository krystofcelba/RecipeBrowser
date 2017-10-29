import { testSaga, expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';

import recipesSaga, { fetchAllRecipes } from '../recipesSaga';
import * as API from 'src/services/api';
import { actionCreators, concatIngredientsNames, FETCH_RECIPES_SUCCESS } from 'src/redux/reducers/recipes';
import reducers from 'src/redux/reducers';

const mockedRecipes = require('../../../services/__mockData__/recipes.json');

/*************** unit tests ***************/

it('should call fetchRecipes api method and dispatch success action with array of recipes', () => {
  testSaga(fetchAllRecipes, '')
    .next()
    .call(API.fetchRecipes)
    .next({ ok: true, data: mockedRecipes })
    .put({ type: FETCH_RECIPES_SUCCESS, recipes: mockedRecipes })
    .next()
    .isDone();
});

/************ integration tests ************/

it('should start fetchAllRecipes saga on FETCH_RECIPES action dispatched and put recipes on success', async () => {
  const recipe = mockedRecipes[0];
  const { storeState } = await expectSaga(recipesSaga)
    .withReducer(reducers)
    .provide([[matchers.call.fn(API.fetchRecipes), { ok: true, data: [recipe] }]])
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
