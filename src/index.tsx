import { Component } from 'react';
import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';

registerScreens();

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
