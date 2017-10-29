export const UPDATE_RECIPES_SEARCH_INPUT_TEXT = 'UPDATE_RECIPES_SEARCH_INPUT_TEXT';

export const UPDATE_NAME_ADD_RECIPE_FORM = 'UPDATE_NAME_ADD_RECIPE_FORM';
export const UPDATE_DESCRIPTION_ADD_RECIPE_FORM = 'UPDATE_DESCRIPTION_ADD_RECIPE_FORM';
export const ADD_INGREDIENT_ADD_RECIPE_FORM = 'ADD_INGREDIENT_ADD_RECIPE_FORM';
export const UPDATE_INGREDIENT_ADD_RECIPE_FORM = 'UPDATE_INGREDIENT_ADD_RECIPE_FORM';

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
  UPDATE_NAME_ADD_RECIPE_FORM: {
    type: typeof UPDATE_NAME_ADD_RECIPE_FORM;
    name: string;
  };
  UPDATE_DESCRIPTION_ADD_RECIPE_FORM: {
    type: typeof UPDATE_DESCRIPTION_ADD_RECIPE_FORM;
    description: string;
  };
  ADD_INGREDIENT_ADD_RECIPE_FORM: {
    type: typeof ADD_INGREDIENT_ADD_RECIPE_FORM;
  };
  UPDATE_INGREDIENT_ADD_RECIPE_FORM: {
    type: typeof UPDATE_INGREDIENT_ADD_RECIPE_FORM;
    ingredient: NewIngredient;
  };
};

export const actionCreators = {
  updateRecipesSearchInputText: (text: string): Actions[typeof UPDATE_RECIPES_SEARCH_INPUT_TEXT] => ({
    type: UPDATE_RECIPES_SEARCH_INPUT_TEXT,
    text,
  }),
  updateNameInAddRecipeForm: (name: string): Actions[typeof UPDATE_NAME_ADD_RECIPE_FORM] => ({
    type: UPDATE_NAME_ADD_RECIPE_FORM,
    name,
  }),
  updateDescriptionInAddRecipeForm: (description: string): Actions[typeof UPDATE_DESCRIPTION_ADD_RECIPE_FORM] => ({
    type: UPDATE_DESCRIPTION_ADD_RECIPE_FORM,
    description,
  }),
  addIngredientToAddRecipeForm: (): Actions[typeof ADD_INGREDIENT_ADD_RECIPE_FORM] => ({
    type: ADD_INGREDIENT_ADD_RECIPE_FORM,
  }),
  updateIngredientInAddRecipeForm: (ingredient: NewIngredient): Actions[typeof UPDATE_INGREDIENT_ADD_RECIPE_FORM] => ({
    type: UPDATE_INGREDIENT_ADD_RECIPE_FORM,
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
    case UPDATE_NAME_ADD_RECIPE_FORM: {
      const { name } = action;
      return {
        ...state,
        addRecipeForm: {
          ...state.addRecipeForm,
          newRecipe: { ...newRecipe, name },
        },
      };
    }
    case UPDATE_DESCRIPTION_ADD_RECIPE_FORM: {
      const { description } = action;
      return {
        ...state,
        addRecipeForm: {
          ...state.addRecipeForm,
          newRecipe: { ...newRecipe, description },
        },
      };
    }
    case UPDATE_INGREDIENT_ADD_RECIPE_FORM: {
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
