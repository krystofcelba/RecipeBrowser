import { Reducer } from 'redux-testkit';

import {
  reducer,
  actionCreators,
  UPDATE_RECIPES_SEARCH_INPUT_TEXT,
  UPDATE_NAME_ADD_RECIPE_FORM,
  UPDATE_DESCRIPTION_ADD_RECIPE_FORM,
  ADD_INGREDIENT_ADD_RECIPE_FORM,
  ADD_SEASONING_ADD_RECIPE_FORM,
  ADD_STEP_ADD_RECIPE_FORM,
  UPDATE_INGREDIENT_ADD_RECIPE_FORM,
  UPDATE_SEASONING_ADD_RECIPE_FORM,
  UPDATE_STEP_ADD_RECIPE_FORM,
  UPDATE_IMAGE_ADD_RECIPE_FORM,
  OPEN_IMAGE_PICKER_ADD_RECIPE_FORM,
  RESET_ADD_RECIPE_FORM,
  SUBMIT_ADD_RECIPE_FORM,
} from '../ui';

describe('recipes action creators', () => {
  it('should return UPDATE_RECIPES_SEARCH_INPUT_TEXT action with text', () => {
    const text = 'text';
    expect(actionCreators.updateRecipesSearchInputText(text)).toEqual({ type: UPDATE_RECIPES_SEARCH_INPUT_TEXT, text });
  });
});

describe('ui recipes list reducer', () => {
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

describe('add recipe form action creators', () => {
  it('should return UPDATE_NAME_ADD_RECIPE_FORM', () => {
    const name = 'text';
    expect(actionCreators.updateNameInAddRecipeForm(name)).toEqual({ type: UPDATE_NAME_ADD_RECIPE_FORM, name });
  });

  it('should return UPDATE_DESCRIPTION_ADD_RECIPE_FORM', () => {
    const description = 'text';
    expect(actionCreators.updateDescriptionInAddRecipeForm(description)).toEqual({
      type: UPDATE_DESCRIPTION_ADD_RECIPE_FORM,
      description,
    });
  });

  it('should return ADD_INGREDIENT_ADD_RECIPE_FORM', () => {
    expect(actionCreators.addIngredientToAddRecipeForm()).toEqual({
      type: ADD_INGREDIENT_ADD_RECIPE_FORM,
    });
  });

  it('should return ADD_SEASONING_ADD_RECIPE_FORM', () => {
    expect(actionCreators.addSeasoningToAddRecipeForm()).toEqual({
      type: ADD_SEASONING_ADD_RECIPE_FORM,
    });
  });

  it('should return ADD_STEP_ADD_RECIPE_FORM', () => {
    expect(actionCreators.addStepToAddRecipeForm()).toEqual({
      type: ADD_STEP_ADD_RECIPE_FORM,
    });
  });

  it('should return UPDATE_INGREDIENT_ADD_RECIPE_FORM', () => {
    const ingredient = { id: 1, name: '', amount: '', unit: '' };
    expect(actionCreators.updateIngredientInAddRecipeForm(ingredient)).toEqual({
      type: UPDATE_INGREDIENT_ADD_RECIPE_FORM,
      ingredient,
    });
  });

  it('should return UPDATE_SEASONING_ADD_RECIPE_FORM', () => {
    const seasoning = { id: 1, seasoning: '' };
    expect(actionCreators.updateSeasoningInAddRecipeForm(seasoning)).toEqual({
      type: UPDATE_SEASONING_ADD_RECIPE_FORM,
      seasoning,
    });
  });

  it('should return UPDATE_STEP_ADD_RECIPE_FORM', () => {
    const step = { id: 1, step: '' };
    expect(actionCreators.updateStepInAddRecipeForm(step)).toEqual({
      type: UPDATE_STEP_ADD_RECIPE_FORM,
      step,
    });
  });

  it('should return UPDATE_IMAGE_ADD_RECIPE_FORM', () => {
    const image = { mime: 'image/jpeg', data: 'xxxxxxxx' };
    expect(actionCreators.updateImageInAddRecipeForm(image.data, image.mime)).toEqual({
      type: UPDATE_IMAGE_ADD_RECIPE_FORM,
      ...image,
    });
  });

  it('should return SUBMIT_ADD_RECIPE_FORM', () => {
    expect(actionCreators.submitAddRecipeForm()).toEqual({
      type: SUBMIT_ADD_RECIPE_FORM,
    });
  });

  it('should return OPEN_IMAGE_PICKER_ADD_RECIPE_FORM', () => {
    expect(actionCreators.openImagePickerAddRecipeForm()).toEqual({
      type: OPEN_IMAGE_PICKER_ADD_RECIPE_FORM,
    });
  });

  it('should return RESET_ADD_RECIPE_FORM', () => {
    expect(actionCreators.resetAddRecipeForm()).toEqual({
      type: RESET_ADD_RECIPE_FORM,
    });
  });
});

describe('ui add recipe form reducer', () => {
  it('should handle UPDATE_NAME_ADD_RECIPE_FORM action', () => {
    const name = 'text';
    const action = { type: UPDATE_NAME_ADD_RECIPE_FORM, name };
    const changes = {
      addRecipeForm: { newRecipe: { name } },
    };
    Reducer(reducer)
      .expect(action)
      .toChangeInState(changes);
  });

  it('should handle UPDATE_DESCRIPTION_ADD_RECIPE_FORM action', () => {
    const description = 'text';
    const action = { type: UPDATE_DESCRIPTION_ADD_RECIPE_FORM, description };
    const changes = {
      addRecipeForm: { newRecipe: { description } },
    };
    Reducer(reducer)
      .expect(action)
      .toChangeInState(changes);
  });

  it('should handle UPDATE_INGREDIENT_ADD_RECIPE_FORM action', () => {
    const ingredient = { id: 100, name: 'test', amount: '10', unit: 'kg' };
    const action = { type: UPDATE_INGREDIENT_ADD_RECIPE_FORM, ingredient };
    const changes = {
      addRecipeForm: { newRecipe: { ingredients: { [ingredient.id]: ingredient } } },
    };
    Reducer(reducer)
      .expect(action)
      .toChangeInState(changes);
  });

  it('should handle UPDATE_SEASONING_ADD_RECIPE_FORM action', () => {
    const seasoning = { id: 100, seasoning: 'test' };
    const action = { type: UPDATE_SEASONING_ADD_RECIPE_FORM, seasoning };
    const changes = {
      addRecipeForm: { newRecipe: { seasonings: { [seasoning.id]: seasoning } } },
    };
    Reducer(reducer)
      .expect(action)
      .toChangeInState(changes);
  });

  it('should handle UPDATE_STEP_ADD_RECIPE_FORM action', () => {
    const step = { id: 100, step: 'test' };
    const action = { type: UPDATE_STEP_ADD_RECIPE_FORM, step };
    const changes = {
      addRecipeForm: { newRecipe: { steps: { [step.id]: step } } },
    };
    Reducer(reducer)
      .expect(action)
      .toChangeInState(changes);
  });

  it('should handle UPDATE_IMAGE_ADD_RECIPE_FORM action', () => {
    const image = { mime: 'image/jpeg', data: 'xxxxxxxx' };
    const action = { type: UPDATE_IMAGE_ADD_RECIPE_FORM, ...image };
    const changes = {
      addRecipeForm: { newRecipe: { image: { type: image.mime, uri: `data:${image.mime};base64,${image.data}` } } },
    };
    Reducer(reducer)
      .expect(action)
      .toChangeInState(changes);
  });

  it('should handle RESET_ADD_RECIPE_FORM action', () => {
    const state = {
      recipesList: { searchInput: { text: '' } },
      addRecipeForm: {
        newRecipe: {
          name: 'Recipe 1',
          description: 'desc',
          image: undefined,
          ingredients: { 100: { id: 100, name: 'test', amount: '10', unit: 'kg' } },
          seasonings: {},
          steps: {},
        },
      },
    };
    const action = { type: RESET_ADD_RECIPE_FORM };
    const result = {
      recipesList: { searchInput: { text: '' } },
      addRecipeForm: {
        newRecipe: {
          name: '',
          description: '',
          image: undefined,
          ingredients: {},
          seasonings: {},
          steps: {},
        },
      },
    };
    Reducer(reducer)
      .withState(state)
      .expect(action)
      .toReturnState(result);
  });
});
