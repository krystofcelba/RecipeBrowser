import { Navigation } from 'react-native-navigation';

import RecipesList from './RecipesList';
import RecipeDetail from './RecipeDetail';
import AddRecipeForm from './AddRecipeForm';
import TopSearchBar from '../components/recipes-list/TopSearchBar';

export const registerScreens = (store, provider) => {
  Navigation.registerComponent('recipeBrowser.RecipesListTopBar', () => TopSearchBar, store, provider);
  Navigation.registerComponent('recipeBrowser.RecipesList', () => RecipesList, store, provider);
  Navigation.registerComponent('recipeBrowser.RecipeDetail', () => RecipeDetail, store, provider);
  Navigation.registerComponent('recipeBrowser.AddRecipeForm', () => AddRecipeForm, store, provider);
};
