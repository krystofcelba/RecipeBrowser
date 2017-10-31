import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import { registerScreens } from '../';

describe('registerScreens', () => {
  it('register components as expected', () => {
    Navigation.registerComponent = jest.fn();
    registerScreens({}, Provider);
    expect(Navigation.registerComponent.mock.calls).toMatchSnapshot();
  });
});
