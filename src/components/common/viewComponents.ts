import glamorous from 'glamorous-native';
import namedGlamorous from './namedGlamorous';

import AppTheme from 'src/assets/appTheme';

export const { View } = glamorous;

export const PaddedView = namedGlamorous(View, 'PaddedView')({
  padding: AppTheme.defaultPadding,
});
