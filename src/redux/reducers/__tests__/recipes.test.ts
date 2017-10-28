import { Reducer } from 'redux-testkit';

import { reducer, actionCreators, FETCH_RECIPES, FETCH_RECIPES_SUCCESS, FETCH_RECIPES_FAILED } from '../recipes';
import { Recipe } from 'src/services/api';

const mockedRecipes = require('../../../services/__mockData__/recipes.json');

describe('recipes action creators', () => {
  it('should return FETCH_RECIPES action', () => {
    expect(actionCreators.fetchRecipes()).toEqual({ type: FETCH_RECIPES });
  });

  it('should return FETCH_RECIPES_SUCCESS action with recipes', () => {
    const recipes = [] as [Recipe];
    expect(actionCreators.fetchRecipesSuccess(recipes)).toEqual({ type: FETCH_RECIPES_SUCCESS, recipes });
  });

  it('should return FETCH_RECIPES_FAILED action', () => {
    expect(actionCreators.fetchRecipesFailed()).toEqual({ type: FETCH_RECIPES_FAILED });
  });
});

describe('recipes reducer', () => {
  it('should handle FETCH_RECIPES action', () => {
    const action = { type: FETCH_RECIPES };
    const changes = { loading: true };
    Reducer(reducer)
      .expect(action)
      .toChangeInState(changes);
  });

  it('should handle FETCH_RECIPES_SUCESS action', () => {
    const action = { type: FETCH_RECIPES_SUCCESS, recipes: mockedRecipes };
    const result = {
      recipesById: [mockedRecipes[0].id],
      recipes: { [mockedRecipes[0].id]: mockedRecipes[0] },
      loading: false,
    };
    Reducer(reducer)
      .expect(action)
      .toReturnState(result);
  });
});
