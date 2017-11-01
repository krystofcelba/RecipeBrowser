import { View } from 'react-native';
import namedGlamorous from './namedGlamorous';

import AppTheme from 'src/assets/appTheme';

export const PaddedView = namedGlamorous(View, 'PaddedView')({
  padding: AppTheme.defaultPadding,
});
