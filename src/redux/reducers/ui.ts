import { Recipe } from 'src/services/api';
export const UPDATE_RECIPES_SEARCH_INPUT_TEXT = 'UPDATE_RECIPES_SEARCH_INPUT_TEXT';

export const SUBMIT_ADD_RECIPE_FORM = 'SUBMIT_ADD_RECIPE_FORM';

export type Actions = {
  UPDATE_RECIPES_SEARCH_INPUT_TEXT: {
    type: typeof UPDATE_RECIPES_SEARCH_INPUT_TEXT;
    text: string;
  };
  SUBMIT_ADD_RECIPE_FORM: {
    type: typeof SUBMIT_ADD_RECIPE_FORM;
    recipe: Recipe;
  };
};

export const actionCreators = {
  updateRecipesSearchInputText: (text: string): Actions[typeof UPDATE_RECIPES_SEARCH_INPUT_TEXT] => ({
    type: UPDATE_RECIPES_SEARCH_INPUT_TEXT,
    text,
  }),
  submitAddRecipeForm: (recipe: Recipe): Actions[typeof SUBMIT_ADD_RECIPE_FORM] => ({
    type: SUBMIT_ADD_RECIPE_FORM,
    recipe,
  }),
};

export type State = {
  readonly recipesList: { searchInput: { text: string } };
};

export const reducer = (
  state = {
    recipesList: { searchInput: { text: '' } },
  },
  action: Actions[keyof Actions],
) => {
  switch (action.type) {
    case UPDATE_RECIPES_SEARCH_INPUT_TEXT: {
      return { ...state, recipesList: { ...state.recipesList, searchInput: { text: action.text } } };
    }
    default:
      return state;
  }
};
