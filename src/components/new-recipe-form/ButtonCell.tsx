import React from 'react';
import { StyleSheet } from 'react-native';
import { Cell } from 'react-native-tableview-simple';

import AppTheme from 'src/assets/appTheme';

interface Props {
  title: string;
  onPress: () => void;
}

const ButtonCell = ({ title, onPress }: Props) => (
  <Cell title={title} titleTextStyle={styles.title} onPress={onPress} />
);

const styles = StyleSheet.create({
  title: {
    color: AppTheme.secondaryColor,
    fontFamily: AppTheme.fontFamily,
    fontSize: AppTheme.defaultFontSize,
  },
});

export default ButtonCell;
