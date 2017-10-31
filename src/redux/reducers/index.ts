import { combineReducers } from 'redux';
import { Actions as RecipesActions, reducer as recipesReducer, State as RecipesState } from './recipes';
import { Actions as UiActions, reducer as uiReducer, State as UiState } from './ui';

export type RootAction = RecipesActions[keyof RecipesActions] | UiActions[keyof UiActions];

interface StoreEnhancerState {}

export interface RootState extends StoreEnhancerState {
  recipes: RecipesState;
  ui: UiState;
}

export default combineReducers<RootState>({
  recipes: recipesReducer,
  ui: uiReducer,
});
