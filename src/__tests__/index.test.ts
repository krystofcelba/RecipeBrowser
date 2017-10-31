import { Navigation } from 'react-native-navigation';

jest.mock('../redux', () => () => {});
jest.mock('../screens', () => ({ registerScreens: () => {} }));

import App from '..';

describe('App', () => {
  it('should start single screen app as expected', () => {
    Navigation.startSingleScreenApp = jest.fn();
    new App({});
    expect(Navigation.startSingleScreenApp.mock.calls).toMatchSnapshot();
  });
});
