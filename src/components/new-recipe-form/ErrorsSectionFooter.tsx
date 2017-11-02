import React from 'react';

import { View, LeftPaddedErrorText, LeftPaddedBoldErrorText } from 'src/components/common';
import AppTheme from 'src/assets/appTheme';
import { isNumber } from 'src/utils';

interface Props {
  errors: {};
}

const ErrorsSectionFooter = ({ errors }: Props) => (
  <View paddingLeft={AppTheme.defaultPadding / 2} paddingTop={AppTheme.defaultPadding / 2}>
    {Object.keys(errors).map(key => {
      const error = errors[key];
      return error ? (
        <View flexDirection="row" key={key}>
          <LeftPaddedBoldErrorText>{isNumber(key) ? `#${Number(key) + 1}` : '\u2022'}</LeftPaddedBoldErrorText>
          <LeftPaddedErrorText>{error}</LeftPaddedErrorText>
        </View>
      ) : null;
    })}
  </View>
);

export default ErrorsSectionFooter;
