import React from 'react';
import { StyleSheet } from 'react-native';
import { Cell } from 'react-native-tableview-simple';

import { ButtonCellText, TouchableOpacity } from 'src/components/common';

import AppTheme from 'src/assets/appTheme';

interface Props {
  title: string;
  testID: string;
  onPress: () => void;
}

const ButtonCell = ({ title, testID, onPress }: Props) => (
  <Cell
    cellContentView={
      <TouchableOpacity testID={testID} onPress={onPress} flex={1}>
        <ButtonCellText>{title}</ButtonCellText>
      </TouchableOpacity>
    }
  />
);

const styles = StyleSheet.create({
  title: {
    color: AppTheme.secondaryColor,
    fontFamily: AppTheme.fontFamily,
    fontSize: AppTheme.defaultFontSize,
  },
});

export default ButtonCell;
