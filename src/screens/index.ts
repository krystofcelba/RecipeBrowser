import { Navigation } from 'react-native-navigation';

import RecipesList from './RecipesList';

export const registerScreens = (store, provider) => {
  Navigation.registerComponent(
    'recipeBrowser.RecipesList',
    () => RecipesList,
    store,
    provider,
  );
};
