import { Recipe, Ingredient } from '../../services/api';

export const UPDATE_RECIPES_SEARCH_INPUT_TEXT = 'UPDATE_RECIPES_SEARCH_INPUT_TEXT';

export const ADD_RECIPE_FORM_ADD_INGREDIENT = 'ADD_RECIPE_FORM_ADD_INGREDIENT';

export type Actions = {
  UPDATE_RECIPES_SEARCH_INPUT_TEXT: {
    type: typeof UPDATE_RECIPES_SEARCH_INPUT_TEXT;
    text: string;
  };
  ADD_RECIPE_FORM_ADD_INGREDIENT: {
    type: typeof ADD_RECIPE_FORM_ADD_INGREDIENT;
    ingredient: Ingredient;
  };
};

export const actionCreators = {
  updateRecipesSearchInputText: (text: string): Actions[typeof UPDATE_RECIPES_SEARCH_INPUT_TEXT] => ({
    type: UPDATE_RECIPES_SEARCH_INPUT_TEXT,
    text,
  }),
  addRecipeFormAddIngredient: (ingredient: Ingredient): Actions[typeof ADD_RECIPE_FORM_ADD_INGREDIENT] => ({
    type: ADD_RECIPE_FORM_ADD_INGREDIENT,
    ingredient,
  }),
};

export type State = {
  readonly recipesList: { searchInput: { text: string } };
  readonly addRecipeForm: { recipe: Recipe; canBeSubmitted: false };
};

const emptyRecipe: Recipe = {
  name: '',
  image: '',
  description: '',
  ingredients: [] as [Ingredient],
  seasonings: [] as [string],
  steps: [] as [string],
};

export const reducer = (
  state = { recipesList: { searchInput: { text: '' } }, addRecipeForm: { recipe: emptyRecipe, canBeSubmitted: false } },
  action: Actions[keyof Actions],
) => {
  switch (action.type) {
    case UPDATE_RECIPES_SEARCH_INPUT_TEXT:
      return { ...state, recipesList: { ...state.recipesList, searchInput: { text: action.text } } };
    case ADD_RECIPE_FORM_ADD_INGREDIENT:
      const { recipe } = state.addRecipeForm;
      return {
        ...state,
        addRecipeForm: {
          ...state.addRecipeForm,
          recipe: { ...recipe, ingredients: [...recipe.ingredients, action.ingredient] },
        },
      };
    default:
      return state;
  }
};
