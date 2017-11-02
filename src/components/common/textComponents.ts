import { Text as RNText } from 'react-native';
import namedGlamorous from './namedGlamorous';

import AppTheme from 'src/assets/appTheme';

export const Text = namedGlamorous(RNText, 'Text')({
  fontFamily: 'Avenir',
  fontSize: AppTheme.defaultFontSize,
});

export const BoldText = namedGlamorous(Text, 'BoldText')({
  fontWeight: 'bold',
});

export const LeftPaddedText = namedGlamorous(Text, 'LeftPaddedText')({
  paddingLeft: AppTheme.defaultPadding / 2,
});

export const RightPaddedText = namedGlamorous(Text, 'RightPaddedText')({
  paddingRight: AppTheme.defaultPadding / 2,
});

export const LeftPaddedBoldText = namedGlamorous(LeftPaddedText, 'LeftPaddedBoldText')({
  fontWeight: 'bold',
});

export const RightPaddedBoldText = namedGlamorous(Text, 'RightPaddedBoldText')({
  fontWeight: 'bold',
});

export const TitleText = namedGlamorous(Text, 'TitleText')({
  fontSize: AppTheme.titleFontSize,
});

export const SubTitleText = namedGlamorous(BoldText, 'SubTitleText')({
  fontSize: AppTheme.subTitleFontSize,
});

export const LeftPaddedErrorText = namedGlamorous(LeftPaddedText, 'ErrorText')({
  fontSize: AppTheme.errorFontSize,
  color: AppTheme.errorTextColor,
});

export const LeftPaddedBoldErrorText = namedGlamorous(LeftPaddedBoldText, 'LeftPaddedBoldErrorText')({
  fontSize: AppTheme.errorFontSize,
  color: AppTheme.errorTextColor,
});
