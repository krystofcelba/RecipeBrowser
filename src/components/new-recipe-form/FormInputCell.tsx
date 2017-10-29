import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Cell } from 'react-native-tableview-simple';

import { StylesConstants } from '../../assets/constants';

interface Props {
  placeholder: string;
  numberOfLines?: number;
}

const FormInputCell = ({ placeholder, numberOfLines = 1 }: Props) => (
  <Cell
    cellContentView={
      <View style={styles.container}>
        <TextInput
          numberOfLines={numberOfLines}
          style={[styles.input, { height: numberOfLines * StylesConstants.inputFontSize }]}
          placeholder={placeholder}
          multiline={numberOfLines > 1}
        />
      </View>
    }
  />
);

const styles = StyleSheet.create({
  container: { flex: 1, paddingVertical: 10 },
  input: {
    flex: 1,
    fontFamily: StylesConstants.fontFamily,
    fontSize: StylesConstants.inputFontSize,
  },
});

export default FormInputCell;
