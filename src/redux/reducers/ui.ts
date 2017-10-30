export const UPDATE_RECIPES_SEARCH_INPUT_TEXT = 'UPDATE_RECIPES_SEARCH_INPUT_TEXT';

export const UPDATE_NAME_ADD_RECIPE_FORM = 'UPDATE_NAME_ADD_RECIPE_FORM';
export const UPDATE_DESCRIPTION_ADD_RECIPE_FORM = 'UPDATE_DESCRIPTION_ADD_RECIPE_FORM';
export const ADD_INGREDIENT_ADD_RECIPE_FORM = 'ADD_INGREDIENT_ADD_RECIPE_FORM';
export const UPDATE_INGREDIENT_ADD_RECIPE_FORM = 'UPDATE_INGREDIENT_ADD_RECIPE_FORM';
export const ADD_SEASONING_ADD_RECIPE_FORM = 'ADD_SEASONING_ADD_RECIPE_FORM';
export const UPDATE_SEASONING_ADD_RECIPE_FORM = 'UPDATE_SEASONING_ADD_RECIPE_FORM';
export const ADD_STEP_ADD_RECIPE_FORM = 'ADD_STEP_ADD_RECIPE_FORM';
export const UPDATE_STEP_ADD_RECIPE_FORM = 'UPDATE_STEP_ADD_RECIPE_FORM';
export const UPDATE_IMAGE_ADD_RECIPE_FORM = 'UPDATE_IMAGE_ADD_RECIPE_FORM';

export const RESET_ADD_RECIPE_FORM = 'RESET_ADD_RECIPE_FORM';
export const SUBMIT_ADD_RECIPE_FORM = 'SUBMIT_ADD_RECIPE_FORM';

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
  image?: { uri: string; type: string };
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
  ADD_SEASONING_ADD_RECIPE_FORM: {
    type: typeof ADD_SEASONING_ADD_RECIPE_FORM;
  };
  UPDATE_SEASONING_ADD_RECIPE_FORM: {
    type: typeof UPDATE_SEASONING_ADD_RECIPE_FORM;
    seasoning: NewSeasoning;
  };
  ADD_STEP_ADD_RECIPE_FORM: {
    type: typeof ADD_STEP_ADD_RECIPE_FORM;
  };
  UPDATE_STEP_ADD_RECIPE_FORM: {
    type: typeof UPDATE_STEP_ADD_RECIPE_FORM;
    step: NewStep;
  };
  UPDATE_IMAGE_ADD_RECIPE_FORM: {
    type: typeof UPDATE_IMAGE_ADD_RECIPE_FORM;
    data: string;
    mime: string;
  };
  RESET_ADD_RECIPE_FORM: {
    type: typeof RESET_ADD_RECIPE_FORM;
  };
  SUBMIT_ADD_RECIPE_FORM: {
    type: typeof SUBMIT_ADD_RECIPE_FORM;
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
  addSeasoningToAddRecipeForm: (): Actions[typeof ADD_SEASONING_ADD_RECIPE_FORM] => ({
    type: ADD_SEASONING_ADD_RECIPE_FORM,
  }),
  updateSeasoningInAddRecipeForm: (seasoning: NewSeasoning): Actions[typeof UPDATE_SEASONING_ADD_RECIPE_FORM] => ({
    type: UPDATE_SEASONING_ADD_RECIPE_FORM,
    seasoning,
  }),
  addStepToAddRecipeForm: (): Actions[typeof ADD_STEP_ADD_RECIPE_FORM] => ({
    type: ADD_STEP_ADD_RECIPE_FORM,
  }),
  updateStepInAddRecipeForm: (step: NewStep): Actions[typeof UPDATE_STEP_ADD_RECIPE_FORM] => ({
    type: UPDATE_STEP_ADD_RECIPE_FORM,
    step,
  }),
  updateImageInAddRecipeForm: (data: string, mime: string): Actions[typeof UPDATE_IMAGE_ADD_RECIPE_FORM] => ({
    type: UPDATE_IMAGE_ADD_RECIPE_FORM,
    data,
    mime,
  }),
  resetAddRecipeForm: (): Actions[typeof RESET_ADD_RECIPE_FORM] => ({
    type: RESET_ADD_RECIPE_FORM,
  }),
  submitAddRecipeForm: (): Actions[typeof SUBMIT_ADD_RECIPE_FORM] => ({
    type: SUBMIT_ADD_RECIPE_FORM,
  }),
};

export type State = {
  readonly recipesList: { searchInput: { text: string } };
  readonly addRecipeForm: { newRecipe: NewRecipe; canBeSubmitted: false };
};

const emptyRecipe: NewRecipe = {
  name: '',
  description: '',
  image: undefined,
  ingredients: {} as { [id: number]: NewIngredient },
  seasonings: {} as { [id: number]: NewSeasoning },
  steps: {} as { [id: number]: NewStep },
};

export const reducer = (
  state = {
    recipesList: { searchInput: { text: '' } },
    addRecipeForm: { newRecipe: emptyRecipe },
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
    case UPDATE_SEASONING_ADD_RECIPE_FORM: {
      const { seasoning } = action;
      return {
        ...state,
        addRecipeForm: {
          ...state.addRecipeForm,
          newRecipe: { ...newRecipe, seasonings: { ...newRecipe.seasonings, [seasoning.id]: seasoning } },
        },
      };
    }
    case UPDATE_STEP_ADD_RECIPE_FORM: {
      const { step } = action;
      return {
        ...state,
        addRecipeForm: {
          ...state.addRecipeForm,
          newRecipe: { ...newRecipe, steps: { ...newRecipe.steps, [step.id]: step } },
        },
      };
    }
    case UPDATE_IMAGE_ADD_RECIPE_FORM: {
      const { data, mime } = action;
      return {
        ...state,
        addRecipeForm: {
          ...state.addRecipeForm,
          newRecipe: { ...newRecipe, image: { uri: `data:${mime};base64,${data}`, type: mime } },
        },
      };
    }
    case RESET_ADD_RECIPE_FORM: {
      return {
        ...state,
        addRecipeForm: {
          ...state.addRecipeForm,
          newRecipe: { ...emptyRecipe },
        },
      };
    }
    default:
      return state;
  }
};
