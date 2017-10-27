import { combineReducers } from 'redux';
import {
  Actions as NavActions,
  reducer as navReducer,
  State as NavState,
} from './nav';

export type RootAction = NavActions[keyof NavActions];

interface StoreEnhancerState {}

export interface RootState extends StoreEnhancerState {
  nav: NavState;
}

export default combineReducers<RootState>({
  nav: navReducer,
});
