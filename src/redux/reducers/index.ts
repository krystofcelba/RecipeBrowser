import { combineReducers } from 'redux';
import { Actions as NavActions, reducer as navReducer, State as NavState } from './nav';
import { Actions as RecipesActions, reducer as recipesReducer, State as RecipesState } from './recipes';
import { Actions as UiActions, reducer as uiReducer, State as UiState } from './ui';

export type RootAction =
  | NavActions[keyof NavActions]
  | RecipesActions[keyof RecipesActions]
  | UiActions[keyof UiActions];

interface StoreEnhancerState {}

export interface RootState extends StoreEnhancerState {
  nav: NavState;
  recipes: RecipesState;
  ui: UiState;
}

export default combineReducers<RootState>({
  nav: navReducer,
  recipes: recipesReducer,
  ui: uiReducer,
});
