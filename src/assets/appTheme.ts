export const Colors = {
  primaryColor: '#81b640',
  darkPrimaryColor: '#508607',

  secondaryColor: '#FF5722',
  lightSecondaryColor: '#FBE9E7',

  topBarTextColor: '#ffff',
  searchBarPlaceholderTextColor: 'rgba(255, 255, 255, 0.3)',

  primaryTextColor: '#000000',
};

const AppTheme = {
  defaultPadding: 10,
  fontFamily: 'Avenir',
  defaultFontSize: 14,
  titleFontSize: 32,
  subTitleFontSize: 20,
  ...Colors,
};

export default AppTheme;

export const navigatorStyle = {
  statusBarTextColorScheme: 'light',
  statusBarColor: Colors.darkPrimaryColor,
  navBarBackgroundColor: Colors.primaryColor,
  navBarTextColor: Colors.topBarTextColor,
  navBarButtonColor: Colors.topBarTextColor,
  navBarTextFontFamily: AppTheme.fontFamily,
};

export const navigatorConfig = {
  navigatorStyle,
  backButtonTitle: '',
};
