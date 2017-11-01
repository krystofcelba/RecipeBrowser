import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Cell } from 'react-native-tableview-simple';

import Input from './Input';

interface Props {
  placeholder: string;
  numberOfLines?: number;
  value: string;
  onChangeText: (text: string) => void;
}

const FormInputCell = (props: Props) => (
  <Cell
    cellContentView={
      <View style={styles.container}>
        <Input {...props} />
      </View>
    }
  />
);

const styles = StyleSheet.create({
  container: { flex: 1, paddingVertical: 10 },
});

export default FormInputCell;
