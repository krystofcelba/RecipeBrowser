export const FETCH_RECIPES = 'FETCH_RECIPES';
export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS';
export const FETCH_RECIPES_FAILED = 'FETCH_RECIPES_FAILED';

export type Actions = {
  FETCH_RECIPES: { type: typeof FETCH_RECIPES };
  FETCH_RECIPES_SUCCESS: { type: typeof FETCH_RECIPES_SUCCESS; recipes: [{}] };
  FETCH_RECIPES_FAILED: { type: typeof FETCH_RECIPES_FAILED };
};

export const actionCreators = {
  fetchRecipes: (): Actions[typeof FETCH_RECIPES] => ({
    type: FETCH_RECIPES,
  }),
  fetchRecipesSuccess: (
    recipes: [{}],
  ): Actions[typeof FETCH_RECIPES_SUCCESS] => ({
    type: FETCH_RECIPES_SUCCESS,
    recipes,
  }),
  fetchRecipesFailed: (): Actions[typeof FETCH_RECIPES_FAILED] => ({
    type: FETCH_RECIPES_FAILED,
  }),
};

export type State = {
  readonly recipes: {};
  readonly loading: boolean;
};

export const reducer = (
  state = { recipes: {}, loading: false },
  action: Actions[keyof Actions],
) => {
  switch (action.type) {
    case FETCH_RECIPES:
      return { ...state, loading: true };
    default:
      return state;
  }
};
