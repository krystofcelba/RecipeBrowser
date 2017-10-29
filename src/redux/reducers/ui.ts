export const UPDATE_RECIPES_SEARCH_INPUT_TEXT = 'UPDATE_RECIPES_SEARCH_INPUT_TEXT';

export type Actions = {
  UPDATE_RECIPES_SEARCH_INPUT_TEXT: {
    type: typeof UPDATE_RECIPES_SEARCH_INPUT_TEXT;
    text: string;
  };
};

export const actionCreators = {
  updateRecipesSearchInputText: (text: string): Actions[typeof UPDATE_RECIPES_SEARCH_INPUT_TEXT] => ({
    type: UPDATE_RECIPES_SEARCH_INPUT_TEXT,
    text,
  }),
};

export type State = {
  readonly recipesList: { searchInput: { text: string } };
};

export const reducer = (state = { recipesList: { searchInput: { text: '' } } }, action: Actions[keyof Actions]) => {
  switch (action.type) {
    case UPDATE_RECIPES_SEARCH_INPUT_TEXT:
      return { ...state, recipesList: { ...state.recipesList, searchInput: { text: action.text } } };
    default:
      return state;
  }
};
