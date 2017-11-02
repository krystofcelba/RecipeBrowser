import React from 'react';
import { Cell } from 'react-native-tableview-simple';
import { Field } from 'redux-form/immutable';

import { View, BoldText } from 'src/components/common';
import AppTheme from 'src/assets/appTheme';

import FormTextInput from './FormTextInput';

interface Props {
  index?: number;
  name: string;
  placeholder?: string;
  numberOfLines?: number;
}

const TextInputCell = ({ index, ...otherProps }: Props) => {
  const showIndex = index !== undefined;
  return (
    <Cell
      cellContentView={
        <View flexDirection="row" flex={1} paddingVertical={AppTheme.defaultPadding / 2}>
          {showIndex && <BoldText>#{index + 1}</BoldText>}
          <Field
            component={FormTextInput}
            {...otherProps}
            style={showIndex && { paddingLeft: AppTheme.defaultPadding }}
          />
        </View>
      }
    />
  );
};

export default TextInputCell;
