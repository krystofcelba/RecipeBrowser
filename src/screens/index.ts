import { Navigation } from 'react-native-navigation';

import RecipesList from './RecipesList';

export const registerScreens = () => {
  Navigation.registerComponent('recipeBrowser.RecipesList', () => RecipesList);
};
