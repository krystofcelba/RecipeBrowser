import React from 'react';
import { StyleSheet, TextInput, StyleProp, TextStyle, Keyboard } from 'react-native';

import AppTheme from '../../assets/appTheme';

interface Props {
  placeholder: string;
  numberOfLines?: number;
  value: string;
  onChangeText: (text: string) => void;
  style?: StyleProp<TextStyle>;
}

const Input = ({ placeholder, numberOfLines = 1, value, onChangeText, style, ...otherProps }: Props) => (
  <TextInput
    value={value}
    onChangeText={onChangeText}
    numberOfLines={numberOfLines}
    style={[styles.input, { height: numberOfLines * AppTheme.defaultFontSize }, style && style]}
    placeholder={placeholder}
    multiline={numberOfLines > 1}
    onSubmitEditing={Keyboard.dismiss}
    {...otherProps}
  />
);

const styles = StyleSheet.create({
  input: {
    fontFamily: AppTheme.fontFamily,
    fontSize: AppTheme.defaultFontSize,
  },
});

export default Input;
