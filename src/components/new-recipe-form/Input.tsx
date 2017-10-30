import React from 'react';
import { View, StyleSheet, TextInput, StyleProp, TextStyle, Keyboard } from 'react-native';
import { Cell } from 'react-native-tableview-simple';

import { StylesConstants } from '../../assets/constants';

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
    style={[styles.input, { height: numberOfLines * StylesConstants.inputFontSize }, style && style]}
    placeholder={placeholder}
    multiline={numberOfLines > 1}
    onSubmitEditing={Keyboard.dismiss}
    {...otherProps}
  />
);

const styles = StyleSheet.create({
  input: {
    fontFamily: StylesConstants.fontFamily,
    fontSize: StylesConstants.inputFontSize,
  },
});

export default Input;
