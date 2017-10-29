export const BASE_URL = 'https://private-cc19d4-reactnativemockapi.apiary-mock.com';

export class Colors {
  static primaryColor = '#81b640';
  static darkPrimaryColor = '#508607';

  static topBarTextColor = '#ffff';
  static searchBarPlaceholderTextColor = 'rgba(255, 255, 255, 0.3)';
  static searchBarTextColor = 'rgba(255, 255, 255, 0.8)';

  static primaryTextColor = '#000000';
}

export class Dimensions {
  static defaultMargin = 10;
}

export const navigatorStyle = {
  statusBarTextColorScheme: 'light',
  statusBarColor: Colors.darkPrimaryColor,
  navBarBackgroundColor: Colors.primaryColor,
  navBarTextColor: Colors.topBarTextColor,
  navBarButtonColor: Colors.topBarTextColor,
};

export const navigatorConfig = {
  navigatorStyle,
  backButtonTitle: '',
};
