export const UPDATE_RECIPES_SEARCH_INPUT_TEXT = 'UPDATE_RECIPES_SEARCH_INPUT_TEXT';

export const ADD_RECIPE_FORM_UPDATE_NAME = 'ADD_RECIPE_FORM_UPDATE_NAME';
export const ADD_RECIPE_FORM_UPDATE_DESCRIPTION = 'ADD_RECIPE_FORM_UPDATE_DESCRIPTION';
export const ADD_RECIPE_FORM_ADD_INGREDIENT = 'ADD_RECIPE_FORM_ADD_INGREDIENT';
export const ADD_RECIPE_FORM_UPDATE_INGREDIENT = 'ADD_RECIPE_FORM_UPDATE_INGREDIENT';

export interface NewIngredient {
  id: number;
  name: string;
  amount: string;
  unit: string;
}

export interface NewSeasoning {
  id: number;
  seasoning: string;
}

export interface NewStep {
  id: number;
  step: string;
}
export interface NewRecipe {
  name: string;
  description: string;
  image: string;
  ingredients: { [id: number]: NewIngredient };
  seasonings: { [id: number]: NewSeasoning };
  steps: { [id: number]: NewStep };
}

export type Actions = {
  UPDATE_RECIPES_SEARCH_INPUT_TEXT: {
    type: typeof UPDATE_RECIPES_SEARCH_INPUT_TEXT;
    text: string;
  };
  ADD_RECIPE_FORM_UPDATE_NAME: {
    type: typeof ADD_RECIPE_FORM_UPDATE_NAME;
    name: string;
  };
  ADD_RECIPE_FORM_UPDATE_DESCRIPTION: {
    type: typeof ADD_RECIPE_FORM_UPDATE_DESCRIPTION;
    description: string;
  };
  ADD_RECIPE_FORM_ADD_INGREDIENT: {
    type: typeof ADD_RECIPE_FORM_ADD_INGREDIENT;
  };
  ADD_RECIPE_FORM_UPDATE_INGREDIENT: {
    type: typeof ADD_RECIPE_FORM_UPDATE_INGREDIENT;
    ingredient: NewIngredient;
  };
};

export const actionCreators = {
  updateRecipesSearchInputText: (text: string): Actions[typeof UPDATE_RECIPES_SEARCH_INPUT_TEXT] => ({
    type: UPDATE_RECIPES_SEARCH_INPUT_TEXT,
    text,
  }),
  addRecipeFormUpdateName: (name: string): Actions[typeof ADD_RECIPE_FORM_UPDATE_NAME] => ({
    type: ADD_RECIPE_FORM_UPDATE_NAME,
    name,
  }),
  addRecipeFormUpdateDescription: (description: string): Actions[typeof ADD_RECIPE_FORM_UPDATE_DESCRIPTION] => ({
    type: ADD_RECIPE_FORM_UPDATE_DESCRIPTION,
    description,
  }),
  addRecipeFormAddIngredient: (): Actions[typeof ADD_RECIPE_FORM_ADD_INGREDIENT] => ({
    type: ADD_RECIPE_FORM_ADD_INGREDIENT,
  }),
  addRecipeFormUpdateIngredient: (ingredient: NewIngredient): Actions[typeof ADD_RECIPE_FORM_UPDATE_INGREDIENT] => ({
    type: ADD_RECIPE_FORM_UPDATE_INGREDIENT,
    ingredient,
  }),
};

export type State = {
  readonly recipesList: { searchInput: { text: string } };
  readonly addRecipeForm: { newRecipe: NewRecipe; canBeSubmitted: false };
};

const emptyRecipe: NewRecipe = {
  name: '',
  description: '',
  image: '',
  ingredients: {} as { [id: number]: NewIngredient },
  seasonings: {} as { [id: number]: NewSeasoning },
  steps: {} as { [id: number]: NewStep },
};

export const reducer = (
  state = {
    recipesList: { searchInput: { text: '' } },
    addRecipeForm: { newRecipe: emptyRecipe, canBeSubmitted: false },
  },
  action: Actions[keyof Actions],
) => {
  const { newRecipe } = state.addRecipeForm;
  switch (action.type) {
    case UPDATE_RECIPES_SEARCH_INPUT_TEXT: {
      return { ...state, recipesList: { ...state.recipesList, searchInput: { text: action.text } } };
    }
    case ADD_RECIPE_FORM_UPDATE_NAME: {
      const { name } = action;
      return {
        ...state,
        addRecipeForm: {
          ...state.addRecipeForm,
          newRecipe: { ...newRecipe, name },
        },
      };
    }
    case ADD_RECIPE_FORM_UPDATE_DESCRIPTION: {
      const { description } = action;
      return {
        ...state,
        addRecipeForm: {
          ...state.addRecipeForm,
          newRecipe: { ...newRecipe, description },
        },
      };
    }
    case ADD_RECIPE_FORM_UPDATE_INGREDIENT: {
      const { ingredient } = action;
      return {
        ...state,
        addRecipeForm: {
          ...state.addRecipeForm,
          newRecipe: { ...newRecipe, ingredients: { ...newRecipe.ingredients, [ingredient.id]: ingredient } },
        },
      };
    }
    default:
      return state;
  }
};
