import React from 'react';
import { StyleSheet, TextInput, StyleProp, TextStyle, Keyboard } from 'react-native';

import AppTheme from '../../assets/appTheme';

interface Props {
  placeholder?: string;
  numberOfLines?: number;
  style?: StyleProp<TextStyle>;
  input: {
    name: string;
    value: string;
    onChange: (text: string) => void;
  };
}

const FormTextInput = ({
  placeholder = '',
  numberOfLines = 1,
  style,
  input: { name, value, onChange, ...otherProps },
}: Props) => (
  <TextInput
    testID={name}
    value={typeof value === 'string' ? value : ''}
    onChangeText={onChange}
    numberOfLines={numberOfLines}
    style={[styles.input, numberOfLines > 1 && { height: numberOfLines * AppTheme.defaultFontSize }, style && style]}
    placeholder={placeholder}
    multiline={numberOfLines > 1}
    {...otherProps}
  />
);

const styles = StyleSheet.create({
  input: {
    fontFamily: AppTheme.fontFamily,
    fontSize: AppTheme.defaultFontSize,
    width: '100%',
  },
});

export default FormTextInput;
