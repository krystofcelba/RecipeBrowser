import { Component } from 'react';
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import configureStore from './redux';
import { registerScreens } from './screens';

const store = configureStore();
registerScreens(store, Provider);

class App extends Component {
  constructor(props) {
    super(props);
    this.startApp();
  }

  startApp = () => {
    Navigation.startSingleScreenApp({
      screen: {
        screen: 'recipeBrowser.RecipesList',
        title: '',
      },
      appStyle: {
        keepStyleAcrossPush: false,
      },
    });
  };
}

export default App;
