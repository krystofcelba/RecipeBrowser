import React from 'react';
import { StyleSheet } from 'react-native';
import { Cell } from 'react-native-tableview-simple';

import { StylesConstants, Colors } from '../../assets/constants';

interface Props {
  title: string;
  onPress: () => void;
}

const FormButtonCell = ({ title, onPress }: Props) => (
  <Cell title={title} titleTextStyle={styles.title} onPress={onPress} />
);

const styles = StyleSheet.create({
  title: {
    color: Colors.formButtonCellColor,
    fontFamily: StylesConstants.fontFamily,
    fontSize: StylesConstants.inputFontSize,
  },
});

export default FormButtonCell;
