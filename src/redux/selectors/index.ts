import { createSelector } from 'reselect';

import { RootState } from '../reducers';
import { Recipe } from 'src/services/api';

export const getRecipesSearchInputText = (state: RootState) => state.ui.recipesList.searchInput.text.toLowerCase();
export const getRecipesById = (state: RootState) => state.recipes.recipesById;
export const getRecipes = (state: RootState) => state.recipes.recipes;
export const getRecipe = (state: RootState, id: number) => getRecipes(state)[id];

export const getFilteredRecipes = createSelector(
  [getRecipesSearchInputText, getRecipesById, getRecipes],
  (searchInputText, recipesById, recipes): Recipe[] => {
    return recipesById.reduce(
      (filtered, id) => {
        const recipe = recipes[id];
        if (searchInputText.length === 0 || recipe.ingredientsNames.includes(searchInputText)) {
          return [...filtered, recipe];
        }
        return filtered;
      },
      [] as Recipe[],
    );
  },
);
