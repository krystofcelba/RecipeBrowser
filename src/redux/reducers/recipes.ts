import { Recipe } from '../../services/api';

export const FETCH_RECIPES = 'FETCH_RECIPES';
export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS';
export const FETCH_RECIPES_FAILED = 'FETCH_RECIPES_FAILED';

export type Actions = {
  FETCH_RECIPES: { type: typeof FETCH_RECIPES };
  FETCH_RECIPES_SUCCESS: { type: typeof FETCH_RECIPES_SUCCESS; recipes: [Recipe] };
  FETCH_RECIPES_FAILED: { type: typeof FETCH_RECIPES_FAILED };
};

export const actionCreators = {
  fetchRecipes: (): Actions[typeof FETCH_RECIPES] => ({
    type: FETCH_RECIPES,
  }),
  fetchRecipesSuccess: (recipes: [Recipe]): Actions[typeof FETCH_RECIPES_SUCCESS] => ({
    type: FETCH_RECIPES_SUCCESS,
    recipes,
  }),
  fetchRecipesFailed: (): Actions[typeof FETCH_RECIPES_FAILED] => ({
    type: FETCH_RECIPES_FAILED,
  }),
};

interface RecipesHash {
  [id: number]: Recipe;
}

export type State = {
  readonly recipesById: [number];
  readonly recipes: RecipesHash;
  readonly loading: boolean;
};

export const reducer = (
  state = { recipesById: [] as [number], recipes: {}, loading: false },
  action: Actions[keyof Actions],
): State => {
  switch (action.type) {
    case FETCH_RECIPES:
      return { ...state, loading: true };
    case FETCH_RECIPES_SUCCESS:
      const { recipes } = action;
      return {
        ...state,
        recipesById: recipes.map(recipe => recipe.id) as [number],
        recipes: recipes.reduce((recipesHash, recipe) => ({ ...recipesHash, [recipe.id]: recipe }), {}),
        loading: false,
      };
    default:
      return state;
  }
};
