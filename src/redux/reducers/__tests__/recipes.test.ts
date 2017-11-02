import { Reducer } from 'redux-testkit';

import {
  reducer,
  actionCreators,
  concatIngredientsNames,
  FETCH_RECIPES,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_FAILED,
} from '../recipes';
import { Recipe } from 'src/services/api';

const mockedRecipes = require('src/__mockData__/recipes.json');

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
    const recipe = mockedRecipes[0];
    const action = { type: FETCH_RECIPES_SUCCESS, recipes: [recipe] };
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
    Reducer(reducer)
      .expect(action)
      .toReturnState(result);
  });
});

it('should format concat recipe ingredients to simple searchable string', () => {
  const recipe = mockedRecipes[0];
  expect(concatIngredientsNames(recipe)).toBe(
    recipe.ingredients.reduce((str, ingredient) => `${str}${ingredient.name};`, '').toLowerCase(),
  );
});
