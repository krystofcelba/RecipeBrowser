import { Reducer } from 'redux-testkit';

import { reducer, actionCreators, UPDATE_RECIPES_SEARCH_INPUT_TEXT } from '../ui';

describe('recipes action creators', () => {
  it('should return UPDATE_RECIPES_SEARCH_INPUT_TEXT action with text', () => {
    const text = 'text';
    expect(actionCreators.updateRecipesSearchInputText(text)).toEqual({ type: UPDATE_RECIPES_SEARCH_INPUT_TEXT, text });
  });
});

describe('recipes reducer', () => {
  it('should handle UPDATE_RECIPES_SEARCH_INPUT_TEXT action', () => {
    const text = 'text';
    const action = { type: UPDATE_RECIPES_SEARCH_INPUT_TEXT, text };
    const result = {
      recipesList: { searchInput: { text } },
    };
    Reducer(reducer)
      .expect(action)
      .toReturnState(result);
  });
});
