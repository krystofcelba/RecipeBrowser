import * as selectors from '../';
import reducer from '../../reducers';
import { actionCreators as uiActionCreators } from '../../reducers/ui';
import { actionCreators as recipesActionCreators } from '../../reducers/recipes';

const mockedRecipes = require('../../../services/__mockData__/recipes.json');

const mockedState = reducer(undefined, { type: '@@INIT' });

it('should get recipes search input text', () => {
  const text = 'eggs';
  const state = reducer(mockedState, uiActionCreators.updateRecipesSearchInputText(text));
  expect(selectors.getRecipesSearchInputText(state)).toBe(text);
});

describe('recipes selectors', () => {
  const state = reducer(mockedState, recipesActionCreators.fetchRecipesSuccess(mockedRecipes));
  it('should get sorted recipes ids', () => {
    expect(selectors.getRecipesById(state)).toEqual(mockedRecipes.map(recipe => recipe.id));
  });

  it('should get recipes', () => {
    expect(selectors.getRecipes(state)).toEqual(state.recipes.recipes);
  });

  it('should get all recipes as array when search text is empty', () => {
    expect(selectors.getFilteredRecipes(state)).toEqual(state.recipes.recipesById.map(id => state.recipes.recipes[id]));
  });

  it('should get only recipes with grape in ingredients', () => {
    const stateWithSearchString = reducer(state, uiActionCreators.updateRecipesSearchInputText('Grape'));
    expect(selectors.getFilteredRecipes(stateWithSearchString)).toEqual([state.recipes.recipes[31]]);
  });
});
