import { Reducer } from 'redux-testkit';

import { reducer, actionCreators, UPDATE_RECIPES_SEARCH_INPUT_TEXT, SUBMIT_ADD_RECIPE_FORM } from '../ui';
import { addRecipeFormValues } from 'src/__mockData__';

describe('ui actions creators', () => {
  it('should return UPDATE_RECIPES_SEARCH_INPUT_TEXT action with text', () => {
    const text = 'text';
    expect(actionCreators.updateRecipesSearchInputText(text)).toEqual({ type: UPDATE_RECIPES_SEARCH_INPUT_TEXT, text });
  });

  it('should return SUBMIT_ADD_RECIPE_FORM', () => {
    expect(actionCreators.submitAddRecipeForm(addRecipeFormValues)).toEqual({
      type: SUBMIT_ADD_RECIPE_FORM,
      recipe: addRecipeFormValues,
    });
  });
});

describe('ui reducer', () => {
  it('should handle UPDATE_RECIPES_SEARCH_INPUT_TEXT action', () => {
    const text = 'text';
    const action = { type: UPDATE_RECIPES_SEARCH_INPUT_TEXT, text };
    const changes = {
      recipesList: { searchInput: { text } },
    };
    Reducer(reducer)
      .expect(action)
      .toChangeInState(changes);
  });
});
