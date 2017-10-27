import { combineReducers } from 'redux';
import {
  Actions as NavActions,
  reducer as navReducer,
  State as NavState,
} from './nav';
import {
  Actions as RecipesActions,
  reducer as recipesReducer,
  State as RecipesState,
} from './recipes';

export type RootAction =
  | NavActions[keyof NavActions]
  | RecipesActions[keyof RecipesActions];

interface StoreEnhancerState {}

export interface RootState extends StoreEnhancerState {
  nav: NavState;
  recipes: RecipesState;
}

export default combineReducers<RootState>({
  nav: navReducer,
  recipes: recipesReducer,
});
